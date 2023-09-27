"use strict";(self.webpackChunk_react_awesome_query_builder_examples=self.webpackChunk_react_awesome_query_builder_examples||[]).push([[440],{82440:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var l=r(63050),n=r(6297),a=r(33079),o=r(29901),i=r(33235),u=r(63486),c=r(84723),s=r(17642),p=[{id:"foo",label:"Foo",properties:["REQUIRED","CREATE","UPDATE"],type:{format:"INTEGER"}},{id:"bar",label:"Bar",properties:["REQUIRED","CREATE","UPDATE"],type:{format:"INTEGER"}}],b=function(e){var t,r,l=e.k,n=e.value,a=e.setValue;return o.createElement(s.Z,{menuPortalTarget:document.body,key:l,isMulti:!0,options:p,value:(t=p,r=n,r?r.map((function(e){var r="const"!=e.type&&t&&t.find((function(t){return t.id===e.value}));return r||(r={id:e.value,label:e.value,__isNew__:!0}),r})):[]),getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.label},onChange:function(e,t){!function(e,t,r){var l=e.map((function(e){return{value:e.id||e.label,type:e.__isNew__?"const":"property"}}));r(l)}(e,0,a)}})};const f=(0,o.memo)(b);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}u.Z.use();var v,E,O,w=(E=d(d({},(v=c.b$).widgets),{},{case_value:d(d({},v.widgets.case_value),{},{spelFormatValue:i.cQ.ExportUtils.spelFormatConcat,spelImportValue:i.cQ.ExportUtils.spelImportConcat,factory:function(e){var t=e.value,r=e.setValue,l=e.id;return o.createElement(f,{value:t,setValue:r,k:l})}})}),O=d(d({},v.settings),{},{maxNumberOfCases:3,canRegroupCases:!0,maxNesting:3,canLeaveEmptyCase:!1}),d(d({},v),{},{widgets:E,fields:{text:{label:"Text",type:"text",valueSources:["value","field"],excludeOperators:["proximity"]},qty:{label:"Qty",type:"number",fieldSettings:{min:0},valueSources:["value","field"],preferWidgets:["number"]},price:{label:"Price",type:"number",valueSources:["value"],fieldSettings:{min:10,max:100},preferWidgets:["slider","rangeslider"],isSpelVariable:!0},color:{label:"Color",type:"select",valueSources:["value"],fieldSettings:{listValues:[{value:"yellow",title:"Yellow"},{value:"green",title:"Green"},{value:"orange",title:"Orange"}]}},is_promotion:{label:"Promo?",type:"boolean",operators:["equal"],valueSources:["value"]}},settings:O})),S={backgroundColor:"lightpink",margin:"10px",padding:"10px"},j={id:i.cQ.uuid(),type:"switch_group"},_=i.cQ.checkTree(i.cQ.loadTree(j),w);const h=function(){var e=(0,o.useState)({tree:_,config:w,spelStr:"",spelErrors:[]}),t=(0,a.Z)(e,2),r=t[0],n=t[1],u=(0,o.useCallback)((function(e,t){n((function(r){return y(y({},r),{},{tree:e,config:t})}))}),[]),c=(0,o.useCallback)((function(e){return o.createElement("div",{className:"query-builder-container",style:{padding:"10px"}},o.createElement("div",{className:"query-builder qb-lite"},o.createElement(i.Ib,e)))}),[]);return o.createElement("div",null,o.createElement("div",{className:"query-import-spel"},"Input SpEL:",o.createElement("input",{type:"text",size:150,value:r.spelStr,onChange:function(e){var t=e.target.value;n(y(y({},r),{},{spelStr:t}))}}),o.createElement("button",{onClick:function(){var e=i.cQ.loadFromSpel(r.spelStr,r.config),t=(0,a.Z)(e,2),l=t[0],o=t[1];n(y(y({},r),{},{tree:l?i.cQ.checkTree(l,r.config):r.tree,spelErrors:o}))}},"import"),o.createElement("br",null),r.spelErrors.length>0&&o.createElement("pre",{style:S},JSON.stringify(r.spelErrors,void 0,2))),o.createElement(i.AE,(0,l.Z)({},w,{value:r.tree,onChange:u,renderBuilder:c})),o.createElement("div",{className:"query-builder-result"},"Output SpEL:",o.createElement("pre",null,i.cQ.spelFormat(r.tree,r.config)),"Values:",o.createElement("pre",null,JSON.stringify(i.cQ.getSwitchValues(r.tree),void 0,2)),o.createElement("br",null),o.createElement("hr",null),o.createElement("br",null),"Tree:",o.createElement("pre",null,JSON.stringify(i.cQ.getTree(r.tree),void 0,2))))}}}]);
//# sourceMappingURL=440.bundle.js.map