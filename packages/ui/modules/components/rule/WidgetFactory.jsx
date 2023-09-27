import React from "react";
import { Utils } from "@314e-react-awesome-query-builder/core";
import omit from "lodash/omit";
const { getTitleInListValues } = Utils.ListUtils;
const { _widgetDefKeysToOmit } = Utils.ConfigUtils;

export default ({
  delta, isFuncArg, valueSrc,
  value: immValue, valueError: immValueError, asyncListValues,
  isSpecialRange, fieldDefinition,
  widget, widgetDefinition, widgetValueLabel, valueLabels, textSeparators, setValueHandler,
  config, field, fieldSrc, fieldType, isLHS, operator, readonly, parentField, parentFuncs, id, groupId
}) => {
  const {factory: widgetFactory, ...fieldWidgetProps} = widgetDefinition;
  const isConst = isFuncArg && fieldDefinition.valueSources && fieldDefinition.valueSources.length == 1 && fieldDefinition.valueSources[0] == "const";
  const defaultValue = fieldDefinition.defaultValue;

  if (!widgetFactory) {
    return "?";
  }
    
  let value = isSpecialRange 
    ? [immValue.get(0), immValue.get(1)] 
    : (immValue ? immValue.get(delta) : undefined);
  const valueError = immValueError && (isSpecialRange 
    ? [immValueError.get(0), immValueError.get(1)]
    : immValueError.get(delta)
  ) || null;
  if (isSpecialRange && value[0] === undefined && value[1] === undefined)
    value = undefined;
  const {fieldSettings} = fieldDefinition || {};
  const widgetProps = omit({
    ...fieldWidgetProps, 
    ...fieldSettings,
    config: config,
    field: field,
    fieldSrc: fieldSrc,
    fieldType: fieldType,
    isLHS: isLHS,
    parentField: parentField,
    parentFuncs: parentFuncs,
    fieldDefinition: fieldDefinition,
    operator: operator,
    delta: delta,
    isSpecialRange: isSpecialRange,
    isFuncArg: isFuncArg,
    value: value,
    valueError: valueError,
    label: widgetValueLabel.label,
    placeholder: widgetValueLabel.placeholder,
    placeholders: valueLabels ? valueLabels.placeholder : null,
    textSeparators: textSeparators,
    setValue: setValueHandler,
    readonly: readonly,
    asyncListValues: asyncListValues,
    id, groupId
  }, [
    ..._widgetDefKeysToOmit,
    "toJS"
  ]);

  if (widget == "field") {
    //
  }

  if (isConst && defaultValue) {
    const listValues = fieldSettings?.treeValues || fieldSettings?.listValues;
    if (typeof defaultValue == "boolean") {
      return defaultValue ? (widgetProps.labelYes || "YES") : (widgetProps.labelNo || "NO");
    } else if (listValues) {
      if (Array.isArray(defaultValue))
        return defaultValue.map(v => getTitleInListValues(listValues, v) || v).join(", ");
      else
        return (getTitleInListValues(listValues, defaultValue) || defaultValue);  
    }
    return ""+defaultValue;
  }
    
  return widgetFactory(widgetProps, config.ctx);
};
