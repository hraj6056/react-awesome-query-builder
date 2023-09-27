"use strict";(self.webpackChunk_react_awesome_query_builder_examples=self.webpackChunk_react_awesome_query_builder_examples||[]).push([[42],{7042:(e,r,n)=>{n.r(r),n.d(r,{default:()=>w});var o=n(29901),t=n(16973),i=n.n(t),l=n(23794),A=n.n(l),a=n(583),u=n.n(a),p=n(99298),c=n.n(p),d=n(61279),g=n.n(d),s=n(18182),f=n.n(s),C=n(57208),b={};C.Z&&C.Z.locals&&(b.locals=C.Z.locals);var h,m=0,x={};x.styleTagTransform=f(),x.setAttributes=c(),x.insert=u().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=g(),b.use=function(e){return x.options=e||{},m++||(h=i()(C.Z,x)),b},b.unuse=function(){m>0&&! --m&&(h(),h=null)};const B=b,w=function(){return(0,o.useEffect)((function(){return B.use(),function(){B.unuse()}}),[]),null}},57208:(e,r,n)=>{n.d(r,{Z:()=>A});var o=n(54770),t=n.n(o),i=n(62578),l=n.n(i)()(t());l.push([e.id,'.qb-drag-handler,.qb-draggable,.query-builder{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rule--header:after{content:"";display:table;clear:both}.query-builder{overflow:hidden;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.25;margin:1rem}.group{background:rgba(250,240,210,.5);border:1px solid #dcc896}.rule{background-color:#fff;border:1px solid rgba(0,0,0,0);padding:10px}.rule-with-error .rule{border:1px solid #e0a1a1}.rule--body{display:flex;flex-wrap:wrap;text-align:center}.rule--body--wrapper{flex:1;display:flex;flex-direction:column}.rule--error{color:red;margin-bottom:-5px;margin-top:5px}.group-or-rule{border-radius:5px;position:relative}.rule_group{background:rgba(255,252,242,.5);border:1px solid #f9f1dd}.locked{border:1px dashed red}.qb-placeholder{border:1px dashed gray}.query-builder.qb-dragging{cursor:-webkit-grabbing !important;cursor:grabbing !important}.query-builder.qb-dragging button{pointer-events:none}.qb-draggable{pointer-events:none;position:absolute;opacity:.7;z-index:1000;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qb-drag-handler{cursor:-webkit-grabbing;cursor:grabbing}.group--header:not(.no--children):not(.hide--conjs){position:relative}.group--header:not(.no--children):not(.hide--conjs)::before{z-index:0;content:"";position:absolute;border-width:0 0 0 2px;border-color:#ccc;border-style:solid;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.group--header:not(.no--children):not(.hide--conjs).hide--line::before{border-color:rgba(128,128,128,.1)}.group--header:not(.no--children):not(.hide--conjs)::before{top:20px;height:calc(100% + 10px - 20px);left:11px;width:13px}.group--children>.group-or-rule-container>.group-or-rule::before{border-width:0 0 2px 2px}.group--children>.group-or-rule-container>.group-or-rule::after{border-width:0 0 0 2px}.group--children>.group-or-rule-container>.group-or-rule::before,.group--children>.group-or-rule-container>.group-or-rule::after{content:"";position:absolute;border-color:#ccc;border-style:solid;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.group--children>.group-or-rule-container>.group-or-rule::before{top:-1px;height:calc(50% + 1px + 1px)}.group--children>.group-or-rule-container>.group-or-rule::after{top:calc(50% + 1px);height:calc(50% - 1px + 10px + 2px)}.group--children>.group-or-rule-container>.group-or-rule::before,.group--children>.group-or-rule-container>.group-or-rule::after{left:-14px;width:13px}.group--children>.group-or-rule-container:last-child>.group-or-rule::before{border-radius:0 0 0 4px}.group--children>.group-or-rule-container:last-child>.group-or-rule::after{display:none}.group--children.hide--conjs>.group-or-rule-container:first-child>.group-or-rule::before{display:none}.group--children.hide--conjs>.group-or-rule-container:first-child>.group-or-rule::after{border-radius:4px 0 0 0;border-width:2px 0 0 2px}.group--children.hide--conjs>.group-or-rule-container:first-child>.group-or-rule::after{top:calc(50% - 1px);height:calc(50% + 1px + 10px + 2px)}.group--children.hide--line>.group-or-rule-container>.group-or-rule::before,.group--children.hide--line>.group-or-rule-container>.group-or-rule::after{border-color:rgba(128,128,128,.1)}.rule_group--children>.group-or-rule-container:first-child>.group-or-rule::before{display:none}.rule_group--children>.group-or-rule-container:first-child>.group-or-rule::after{border-radius:4px 0 0 0;border-width:2px 0 0 2px}.rule_group--children>.group-or-rule-container:first-child>.group-or-rule::after{top:calc(50% - 1px);height:calc(50% + 1px + 5px + 2px)}.rule_group--children>.group-or-rule-container>.group-or-rule::before{top:-1px;height:calc(50% + 1px + 1px)}.rule_group--children>.group-or-rule-container>.group-or-rule::after{top:calc(50% + 1px);height:calc(50% - 1px + 5px + 2px)}.rule_group--children>.group-or-rule-container>.group-or-rule::before,.rule_group--children>.group-or-rule-container>.group-or-rule::after{left:-11px;width:10px}.switch_group>.group--children>.group-or-rule-container>.group-or-rule::before{top:-2px;height:calc(50% + 1px + 2px)}.switch_group>.group--children>.group-or-rule-container>.group-or-rule::after{top:calc(50% + 1px);height:calc(50% - 1px + 10px + 4px)}.switch_group>.group--children>.group-or-rule-container>.group-or-rule::before,.switch_group>.group--children>.group-or-rule-container>.group-or-rule::after{left:-15px;width:13px}.switch_group>.group--header:not(.no--children):not(.hide--conjs)::before{top:20px;height:calc(100% + 10px - 20px);left:11px;width:13px}.qb-draggable::before,.qb-draggable::after{display:none}.group--header,.group--footer{display:flex;align-items:stretch;padding-left:10px;padding-right:10px;margin-top:10px;margin-bottom:10px}.group-or-rule-container{margin-top:10px;margin-bottom:10px;padding-right:10px}.group-or-rule-container:first-child{margin-top:0px !important}.group-or-rule-container:last-child{margin-bottom:0px !important}.group--drag-handler{margin-right:8px;margin-top:3px;position:relative;align-self:center}.group--conjunctions{flex-shrink:0;display:flex}.group--conjunctions .group--drag-handler{margin-left:10px}.group--children{padding-left:24px;margin-top:10px;margin-bottom:10px}.group--children .group--field--count--rule{display:flex;flex-wrap:wrap;flex:1}.group--conjunctions.hide--conj{opacity:.3}.group--actions{margin-left:10px;flex:1;display:flex}.group--actions--tl,.group--actions--bl{justify-content:flex-start}.group--actions--tl{margin-left:20px}.group--actions--tc,.group--actions--bc{justify-content:center}.group--actions--tr,.group--actions--br{justify-content:flex-end}.case_group{border-width:2px}.case_group--body{display:flex;flex-direction:row;margin-top:10px;margin-bottom:10px}.case_group--body .case_group--children{flex:auto;margin-top:0 !important;margin-bottom:0 !important}.case_group--body .case_group--value{margin-top:0;margin-bottom:0;margin-right:10px}.rule_group{display:flex;flex-wrap:wrap;padding-left:10px}.rule_group .group--field{margin-top:10px;margin-bottom:10px;align-self:center}.rule_group .group--actions{margin-left:10px;align-self:center;flex:0}.rule_group .rule_group--children{flex:1;margin-top:5px;margin-bottom:5px;padding-left:18px}.rule_group .rule_group--children .group-or-rule-container{margin-bottom:5px;margin-top:5px;padding-right:5px}.rule_group .rule_group--children.one--child{padding-left:9px}.rule_group_ext .group--actions{flex:none}.group--header.hide--drag.with--conjs>.group--field--count--rule{margin-left:20px}.rule{flex:1;display:flex}.rule--header{margin-left:auto;display:flex;align-items:center;padding-left:10px}.rule--drag-handler{display:flex;align-items:center;margin-right:8px}.rule--field,.rule--fieldsrc,.group--field,.rule--operator,.rule--value,.rule--operator-options,.rule--widget,.widget--widget,.widget--valuesrc,.widget--sep,.operator--options--sep,.rule--before-widget,.rule--after-widget{display:inline-block}.widget--sep,.operator--options--sep,.rule--func--bracket-before,.rule--func--bracket-after,.rule--func--arg-sep{vertical-align:bottom;align-self:flex-end;margin-bottom:3px}.rule--func--arg-sep{margin-bottom:-2px}.widget--sep{margin-left:10px;margin-right:10px}.widget--sep.widget--sep-first{margin-right:10px;margin-left:0}.rule--operator{margin-left:20px;margin-right:20px}.operator--options--sep{margin-right:10px}.rule--func--arg-sep{margin-left:3px;margin-right:6px}.rule--func--bracket-after{margin-left:5px;margin-right:2px}.rule--func--bracket-before{margin-left:5px;margin-right:5px}.widget--valuesrc{vertical-align:top}.rule--fieldsrc{vertical-align:top}.operator--options{display:flex}.rule--operator-wrapper{display:flex;flex-direction:column;height:100%}.rule--operator-text-wrapper{flex:1;display:flex;align-items:center}div.tooltip-inner{max-width:500px}.rule--label{display:block;font-weight:bold}.rule--func--wrapper,.rule--func,.rule--func--args,.rule--func--arg,.rule--func--arg-value,.rule--func--bracket-before,.rule--func--bracket-after,.rule--func--arg-sep,.rule--func--arg-label,.rule--func--arg-label-sep{display:inline-block}.rule--func--wrapper{display:flex;flex-wrap:wrap}.rule--func--args{display:flex;flex-wrap:wrap}.rule--func--arg{display:flex}.rule--field-wrapper,.rule--field--func,.rule--func--wrapper,.rule--func--args,.rule--func--arg,.rule--func--arg-value,.rule--func--arg-value>.rule--widget,.widget--func{display:contents}.rule--func,.widget--widget{margin-bottom:2px}.rule--body--wrapper{margin-bottom:-2px}.qb-lite .group--drag-handler,.qb-lite .group--actions{transition:opacity .2s}.qb-lite .group--header:hover .group--header .group--drag-handler,.qb-lite .group--header:hover .group--header .group--actions,.qb-lite .group--header:not(:hover) .group--drag-handler,.qb-lite .group--header:not(:hover) .group--actions,.qb-lite .rule_group:not(:hover) .group--drag-handler,.qb-lite .rule_group:not(:hover) .group--actions{opacity:0}.qb-lite .rule--fieldsrc,.qb-lite .widget--valuesrc,.qb-lite .rule--drag-handler,.qb-lite .rule--header{transition:opacity .2s}.qb-lite .rule:hover .rule .rule--fieldsrc,.qb-lite .rule:hover .rule .widget--valuesrc,.qb-lite .rule:hover .rule .rule--drag-handler,.qb-lite .rule:hover .rule .rule--header,.qb-lite .rule:not(:hover) .rule--fieldsrc,.qb-lite .rule:not(:hover) .widget--valuesrc,.qb-lite .rule:not(:hover) .rule--drag-handler,.qb-lite .rule:not(:hover) .rule--header{opacity:0}.qb-lite.qb-dragging .rule--fieldsrc,.qb-lite.qb-dragging .widget--valuesrc,.qb-lite.qb-dragging .rule--drag-handler,.qb-lite.qb-dragging .rule--header,.qb-lite.qb-dragging .group--drag-handler,.qb-lite.qb-dragging .group--actions{opacity:0 !important}.rule--body.can--shrink--value .rule--value{flex:1}.rule--body.can--shrink--value .rule--value>.rule--widget{width:100%;display:flex}.rule--body.can--shrink--value .rule--value>.rule--widget .widget--widget{flex:1}',"",{version:3,sources:["webpack://./../ui/styles/styles.scss"],names:[],mappings:"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",sourcesContent:['$item-border: 1px !default;\n$case-border: 2px !default;\n$treeline-radius: 4px !default;\n$treeline-thick: 2px !default;\n$item-radius: 5px !default;\n// colors\n$treeline-color: #ccc !default;\n$treeline-disabled-color: rgba(128, 128, 128, 0.1) !default;\n$group-background: rgba(250, 240, 210, 0.5) !default;\n$group-border-color: #DCC896 !default;\n$rule-background: white !default;\n$rule-border-color: transparent !default;\n$rule-with-error-border-color: #e0a1a1 !default;\n$rule-error-color: red !default;\n$rulegroup-background: rgba(255, 252, 242, 0.5) !default;\n$rulegroup-border-color: #f9f1dd !default;\n$placeholder-border-color: gray !default;\n$locked-border-color: red !default;\n// offsets\n$treeline-offset-from-conjs: 20px !default;\n$treeline-offset-from-switch: 20px !default;\n$item-offset: 10px !default;\n$item-offset-left: 24px !default;\n$rulegroup-offset: 5px !default;\n$rulegroup-offset-left: 18px !default;\n$rule-padding: 10px !default;\n$rule-parts-distance: 10px !default;\n$seps-offset-bottom: 3px !default;\n$drag-offset-right: 8px !default;\n$group-actions-offset-left: 10px !default;\n$group-drag-offset-left: 10px !default;\n$rule-group-actions-offset-left: 10px !default;\n\n\n\n/******************************************************************************/\n/** MAIN ********************************************************************/\n/******************************************************************************/\n\n@mixin clearfix {\n  &:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n}\n\n@mixin noselect {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n%noselect {\n  @include noselect;\n}\n\n%clearfix {\n  @include clearfix;\n}\n\n\n\n.query-builder {\n  @extend %noselect;\n  overflow: hidden;\n  font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.25;\n  margin: 1rem;\n}\n\n\n.group {\n  background: $group-background;\n  border: $item-border solid $group-border-color;\n}\n\n.rule {\n  background-color: $rule-background;\n  border: $item-border solid $rule-border-color;\n  padding: $rule-padding;\n}\n\n.rule-with-error .rule {\n  border: 1px solid $rule-with-error-border-color;\n}\n\n.rule--body {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.rule--body--wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.rule--error {\n  color: $rule-error-color;\n  margin-bottom: -5px;\n  margin-top: 5px;\n}\n\n.group-or-rule {\n  border-radius: $item-radius;\n  position: relative;\n}\n\n.rule_group {\n  background: $rulegroup-background;\n  border: $item-border solid $rulegroup-border-color;\n}\n\n\n.locked {\n  border: $item-border dashed $locked-border-color;\n}\n\n.qb-placeholder {\n  border: $item-border dashed $placeholder-border-color;\n}\n\n\n\n/******************************************************************************/\n/** DRAG *********************************************************************/\n/******************************************************************************/\n\n\n.query-builder.qb-dragging {\n  cursor: -webkit-grabbing !important;\n  cursor: grabbing !important;\n  button {\n    pointer-events: none;\n  }\n}\n\n.qb-draggable {\n  @extend %noselect;\n  pointer-events: none;\n  position: absolute;\n  opacity: 0.7;\n  z-index: 1000;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.qb-drag-handler {\n  @extend %noselect;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n\n/******************************************************************************/\n/** TREE LINES *********************************************************************/\n/******************************************************************************/\n\n@mixin line_position_for_item($item-border, $item-offset-left, $item-offset) {\n  &::before {\n    top: calc(-1 * $item-border);\n    height: calc(50% + $treeline-thick / 2 + $item-border);\n  }\n\n  &::after {\n    top: calc(50% + $treeline-thick / 2 );\n    height: calc(50% - $treeline-thick / 2 + $item-offset + $item-border * 2);\n  }\n\n  &::before, &::after {\n    left: calc(-1 * ($item-offset-left / 2 + $treeline-thick / 2 + $item-border));\n    width: calc($item-offset-left / 2 + $treeline-thick / 2);\n  }\n}\n\n@mixin line_position_for_header($treeline-offset-from-conjs, $item-offset-left) {\n  &::before {\n    top: calc($treeline-offset-from-conjs);\n    height: calc(100% + $item-offset - $treeline-offset-from-conjs);\n    left: calc(+1 * ($item-offset-left / 2 - $treeline-thick / 2));\n    width: calc($item-offset-left / 2 + $treeline-thick / 2);\n  }\n}\n\n@mixin hide_conjs($item-border, $item-offset) {\n  & > .group-or-rule-container:first-child > .group-or-rule {\n    &::before {\n      display: none;\n    }\n    &::after {\n      border-radius: $treeline-radius 0 0 0;\n      border-width: $treeline-thick 0 0 $treeline-thick;\n    }\n    &::after {\n      top: calc(50% - $treeline-thick / 2 );\n      height: calc(50% + $treeline-thick / 2 + $item-offset + $item-border * 2);\n    }\n  }\n}\n\n// line between conjs and children\n.group--header:not(.no--children):not(.hide--conjs) {\n  position: relative;\n\n  &::before {\n    z-index: 0;\n    content: \'\';\n    position: absolute;\n    border-width: 0 0 0 $treeline-thick;\n    border-color: $treeline-color;\n    border-style: solid;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  &.hide--line {\n    &::before {\n      border-color: $treeline-disabled-color;\n    }\n  }\n\n  @include line_position_for_header($treeline-offset-from-conjs, $item-offset-left);\n}\n\n// lines between items\n.group--children {\n  & > .group-or-rule-container > .group-or-rule {\n    &::before {\n      border-width: 0 0 $treeline-thick $treeline-thick;\n    }\n  \n    &::after {\n      border-width: 0 0 0 $treeline-thick;\n    }\n  \n    &::before, &::after {\n      content: \'\';\n      position: absolute;\n      border-color: $treeline-color;\n      border-style: solid;    \n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n\n    @include line_position_for_item($item-border, $item-offset-left, $item-offset);\n  }\n\n  & > .group-or-rule-container:last-child > .group-or-rule {\n    &::before {\n      border-radius: 0 0 0 $treeline-radius;\n    }\n    &::after {\n      display: none;\n    }\n  }\n\n  // don\'t connect line to conjs\n  &.hide--conjs {\n    @include hide_conjs($item-border, $item-offset);\n  }\n\n  // gray line\n  &.hide--line {\n    & > .group-or-rule-container > .group-or-rule {\n      &::before, &::after {\n        border-color: $treeline-disabled-color;\n      }\n    }\n  }\n\n}\n\n// rule_group\n.rule_group--children {\n  @include hide_conjs($item-border, $rulegroup-offset);\n  & > .group-or-rule-container > .group-or-rule {\n    @include line_position_for_item($item-border, $rulegroup-offset-left, $rulegroup-offset)\n  }\n}\n\n// switch\n.switch_group {\n  & > .group--children {\n    & > .group-or-rule-container > .group-or-rule {\n      @include line_position_for_item($case-border, $item-offset-left, $item-offset);\n    }\n  }\n  & > .group--header:not(.no--children):not(.hide--conjs) {\n    @include line_position_for_header($treeline-offset-from-switch, $item-offset-left);\n  }\n}\n\n.qb-draggable {\n  &::before, &::after {\n    display: none;\n  }\n}\n\n\n/******************************************************************************/\n/** GROUP *********************************************************************/\n/******************************************************************************/\n.group--header,\n.group--footer {\n  display: flex;\n  align-items: stretch;\n\n  padding: {\n    left: $item-offset;\n    right: $item-offset;\n  }\n  margin: {\n    top: $item-offset;\n    bottom: $item-offset;\n  }\n}\n\n.group-or-rule-container {\n  margin-top: $item-offset;\n  margin-bottom: $item-offset;\n  padding-right: $item-offset;\n  &:first-child {\n    margin-top: 0px !important;\n  }\n  &:last-child {\n    margin-bottom: 0px !important;\n  }\n}\n\n.group--drag-handler {\n  margin-right: $drag-offset-right;\n  margin-top: 3px;\n  position: relative;\n  align-self: center;\n}\n.group--conjunctions {\n  flex-shrink: 0;\n  display: flex;\n\n  .group--drag-handler {\n    margin-left: $group-drag-offset-left;\n  }\n}\n\n\n.group--children {\n  padding-left: $item-offset-left;\n  margin-top: $item-offset;\n  margin-bottom: $item-offset;\n\n  .group--field--count--rule {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n  }\n}\n\n\n.group--conjunctions.hide--conj {\n  opacity: 0.3;\n}\n\n.group--actions {\n  margin-left: $group-actions-offset-left;\n  flex: 1;\n  display: flex;\n\n  &--tl,\n  &--bl{\n    justify-content: flex-start;\n  }\n\n  &--tl{\n    margin-left: calc($group-actions-offset-left * 2);\n  }\n\n  &--tc,\n  &--bc {\n    justify-content: center;\n  }\n\n  &--tr,\n  &--br{\n    justify-content: flex-end;\n  }\n\n  // .action--DELETE {\n  //   margin-top: -1px;\n  // }\n}\n\n/******************************************************************************/\n/** CASE_GROUP *********************************************************************/\n/******************************************************************************/\n\n.case_group {\n  border-width: $case-border;\n}\n\n.case_group--body {\n  display: flex;\n  flex-direction: row;\n  margin-top: $item-offset;\n  margin-bottom: $item-offset;\n\n  .case_group--children {\n    flex: auto;\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  \n  .case_group--value {\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-right: $item-offset;\n  }\n}\n\n/******************************************************************************/\n/** RULE_GROUP *********************************************************************/\n/******************************************************************************/\n\n.rule_group {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: $rule-padding;\n\n  .group--field {\n    margin-top: $item-offset;\n    margin-bottom: $item-offset;\n    align-self: center;\n  }\n  .group--actions {\n    margin-left: $rule-group-actions-offset-left;\n    align-self: center;\n    flex: 0;\n  }\n\n  .rule_group--children {\n    flex: 1;\n\n    margin-top: $rulegroup-offset;\n    margin-bottom: $rulegroup-offset;\n    .group-or-rule-container {\n      margin-bottom: $rulegroup-offset;\n      margin-top: $rulegroup-offset;\n      padding-right: $rulegroup-offset;\n    }\n\n    padding-left: $rulegroup-offset-left;\n    &.one--child {\n      padding-left: calc($rulegroup-offset-left / 2);\n    }\n\n  }\n}\n\n/******************************************************************************/\n/** RULE_GROUP_EXT *********************************************************************/\n/******************************************************************************/\n\n\n.rule_group_ext .group--actions {\n  flex: none;\n}\n\n.group--header.hide--drag.with--conjs {\n  & > .group--field--count--rule {\n    margin-left: 20px;\n  }\n}\n\n/******************************************************************************/\n/** RULE **********************************************************************/\n/******************************************************************************/\n\n.rule {\n  flex: 1;\n  display: flex;\n}\n\n//"remove" button\n.rule--header {\n  @extend %clearfix;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n}\n\n.rule--drag-handler {\n  display: flex;\n  align-items: center;\n  margin-right: $drag-offset-right;\n}\n\n$rule_items: ".rule--field", ".rule--fieldsrc", ".group--field", ".rule--operator", ".rule--value", ".rule--operator-options", ".rule--widget", \n ".widget--widget", ".widget--valuesrc", ".widget--sep", ".operator--options--sep",\n ".rule--before-widget", ".rule--after-widget";\n \n$seps: ".widget--sep", ".operator--options--sep", ".rule--func--bracket-before", ".rule--func--bracket-after", ".rule--func--arg-sep";\n\n#{$rule_items} {\n  display: inline-block;\n}\n\n// seps\n#{$seps} {\n  vertical-align: bottom;\n  align-self: flex-end;\n  margin-bottom: $seps-offset-bottom;\n}\n.rule--func--arg-sep {\n  margin-bottom: calc($seps-offset-bottom - 5px);\n}\n.widget--sep {\n  margin-left: $rule-parts-distance;\n  margin-right: $rule-parts-distance;\n}\n.widget--sep.widget--sep-first {\n  margin-right: $rule-parts-distance;\n  margin-left: 0;\n}\n.rule--operator {\n  // more distinction between LHS and RHS\n  margin-left: calc($rule-parts-distance * 2);\n  margin-right: calc($rule-parts-distance * 2);\n}\n.operator--options--sep {\n  margin-right: $rule-parts-distance;\n}\n.rule--func--arg-sep {\n  margin-left: 3px;\n  margin-right: 6px;\n}\n.rule--func--bracket-after {\n  margin-left: calc($rule-parts-distance / 2);\n  margin-right: 2px; // small\n}\n.rule--func--bracket-before {\n  margin-left: calc($rule-parts-distance / 2);\n  margin-right: calc($rule-parts-distance / 2);\n}\n\n\n// .rule--func--arg-label-sep {\n//   margin-left: 1px;\n//   margin-right: 6px;\n// }\n\n// valuesrc\n.widget--valuesrc {\n  //margin-left: calc(-1 * $rule-parts-distance + 2px); // be closer to widget\n  //margin-right: calc(-1 * $rule-parts-distance + 2px); // be closer to widget\n  vertical-align: top;\n}\n.rule--fieldsrc {\n  // margin-right: calc(-1 * $rule-parts-distance + 2px); // be closer to widget\n  vertical-align: top;\n}\n\n.operator--options {\n  display: flex;\n}\n\n\n.rule--operator-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.rule--operator-text-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\ndiv.tooltip-inner {\n  max-width: 500px;\n}\n\n.rule--label {\n  display: block;\n  font-weight: bold;\n}\n\n\n\n/******************************************************************************/\n/** FUNC **********************************************************************/\n/******************************************************************************/\n\n$rule_func_items: ".rule--func--wrapper", ".rule--func", ".rule--func--args", ".rule--func--arg", ".rule--func--arg-value", \n ".rule--func--bracket-before", ".rule--func--bracket-after", ".rule--func--arg-sep",\n ".rule--func--arg-label", ".rule--func--arg-label-sep";\n\n#{$rule_func_items} {\n  display: inline-block;\n}\n\n.rule--func--wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n.rule--func--args {\n  display: flex;\n  flex-wrap: wrap;\n}\n.rule--func--arg {\n  display: flex;\n}\n\n\n\n\n\n// containers\n.rule--field-wrapper,\n.rule--field--func, \n.rule--func--wrapper, \n.rule--func--args, \n.rule--func--arg, \n.rule--func--arg-value, \n.rule--func--arg-value > .rule--widget,\n.widget--func {\n  display: contents;\n}\n\n// multiline distance\n.rule--func, .widget--widget {\n  margin-bottom: 2px;\n}\n.rule--body--wrapper {\n  margin-bottom: -2px;\n}\n\n/******************************************************************************/\n/** Minimalism ****************************************************************/\n/******************************************************************************/\n\n\n@mixin visible_only_for_hovered_group($what) {\n  @if $what {\n    #{$what} {\n      transition: opacity 0.2s;\n    }\n    .group--header:hover .group--header,\n    .group--header:not(:hover),\n    .rule_group:not(:hover) {\n      #{$what} {\n        opacity: 0;\n      }\n    }\n  }\n}\n\n@mixin display_only_for_hovered_group($inactive, $active) {\n  @if $inactive {\n    #{$inactive} {\n      transition: padding 0.2s;\n    }\n    .group--header:hover .group--header,\n    .group--header:not(:hover),\n    .rule_group:not(:hover) {\n      #{$inactive} {\n        width: 0;\n        padding: 0;\n        overflow: hidden;\n        opacity: 0;\n      }\n    }\n  }\n}\n\n@mixin show_only_for_hovered_rule($what) {\n  @if $what {\n    #{$what} {\n      transition: opacity 0.2s;\n    }\n    .rule:hover .rule,\n    .rule:not(:hover) {\n      #{$what} {\n        opacity: 0;\n      }\n    }\n  }\n}\n\n@mixin force_unvisible($what) {\n  @if $what {\n    #{$what} {\n      opacity: 0 !important;\n    }\n  }\n}\n\n@mixin force_not_display($what) {\n  @if $what {\n    #{$what} {\n      width: 0 !important;\n      padding: 0 !important;\n      overflow: hidden !important;\n      opacity: 0 !important;\n    }\n  }\n}\n\n$group_actions: (".group--drag-handler", ".group--actions") !default;\n$inactive_conjs: false !default;\n$active_conjs: false !default;\n$rule_actions: (".rule--fieldsrc", ".widget--valuesrc", ".rule--drag-handler", ".rule--header") !default;\n\n\n.qb-lite {\n  @include visible_only_for_hovered_group($group_actions);\n  @include display_only_for_hovered_group($inactive_conjs, $active_conjs);\n  @include show_only_for_hovered_rule($rule_actions);\n\n  &.qb-dragging {\n    @include force_unvisible(#{$rule_actions, $group_actions});\n    @include force_not_display($inactive_conjs);\n  }\n}\n\n\n\n/******************************************************************************/\n/** Shrink textarea ***********************************************************/\n/******************************************************************************/\n\n.rule--body.can--shrink--value {\n  //align-items: center;\n  .rule--value {\n    flex: 1;\n    & > .rule--widget {\n      width: 100%;\n      display: flex;\n      & .widget--widget {\n        flex: 1;\n      }\n    }\n  }\n}\n\n'],sourceRoot:""}]);const A=l},62578:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",o=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),o&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),o&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,o,t,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var A=0;A<this.length;A++){var a=this[A][0];null!=a&&(l[a]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);o&&l[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),r.push(p))}},r}},54770:e=>{e.exports=function(e){var r=e[1],n=e[3];if(!n)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(t," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},16973:e=>{var r=[];function n(e){for(var n=-1,o=0;o<r.length;o++)if(r[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},l=[],A=0;A<e.length;A++){var a=e[A],u=o.base?a[0]+o.base:a[0],p=i[u]||0,c="".concat(u," ").concat(p);i[u]=p+1;var d=n(c),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)r[d].references++,r[d].updater(g);else{var s=t(g,o);o.byIndex=A,r.splice(A,0,{identifier:c,updater:s,references:1})}l.push(c)}return l}function t(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,t){var i=o(e=e||[],t=t||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var A=n(i[l]);r[A].references--}for(var a=o(e,t),u=0;u<i.length;u++){var p=n(i[u]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=a}}},583:e=>{var r={};e.exports=function(e,n){var o=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},61279:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},99298:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},23794:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,t&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(o,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},18182:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}}]);
//# sourceMappingURL=42.bundle.js.map