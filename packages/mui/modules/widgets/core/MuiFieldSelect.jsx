import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";

export default ({items, setField, selectedKey, readonly, placeholder, errorText}) => {
  const renderOptions = (fields, level = 0) => (
    Object.keys(fields).map(fieldKey => {
      const field = fields[fieldKey];
      const {items, path, label, disabled, matchesType} = field;
      const prefix = "\u00A0\u00A0".repeat(level);
      if (items) {
        return [
          <ListSubheader disabled={disabled} key={path} disableSticky={true}>
            {prefix && <span>{prefix}</span>}
            {label}
          </ListSubheader>,
          renderOptions(items, level+1),
        ];
      } else {
        return <MenuItem disabled={disabled} key={path} value={path}>
          {prefix && <span>{prefix}</span>}
          {matchesType ? <b>{label}</b> : label}
        </MenuItem>;
      }
    })
  );

  const onChange = e => {
    if (e.target.value === undefined)
      return;
    setField(e.target.value);
  };

  const renderValue = (selectedValue) => {
    if (!readonly && !selectedValue)
      return placeholder;
    const findLabel = (fields) => {
      return fields.map(field => {
        if(!field.items) return field.path === selectedValue ? field.label : null;
        return findLabel(field.items);
      });
    };
    return findLabel(items).filter((v) => {
      if (Array.isArray(v)) {
        return v.some((value) => value !== null);
      } else {
        return v !== null;
      }
    }).pop();
  };
  
  const hasValue = selectedKey != null;
  return (
    <FormControl>
      <Select
        error={!!errorText}
        variant="standard"
        autoWidth
        displayEmpty
        placeholder={placeholder}
        onChange={onChange}
        value={hasValue ? selectedKey : ""}
        disabled={readonly}
        renderValue={renderValue}
        size="small"
      >
        {renderOptions(items)}
      </Select>
    </FormControl>
  );
};
