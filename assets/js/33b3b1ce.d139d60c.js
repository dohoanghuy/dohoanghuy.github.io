"use strict";(self.webpackChunkdohoanghuy_github_io_docusaurus=self.webpackChunkdohoanghuy_github_io_docusaurus||[]).push([[6026],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),o=t(6010);const l={tabItem:"tabItem_Ymn6"};function a(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,a),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7462),o=t(7294),l=t(6010),a=t(2466),i=t(6550),s=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=m(e),[a,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,c]=g({queryString:t,groupId:r}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==i&&(p(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:m},a,{className:(0,l.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":i===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function E(e){const n=y(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},o.createElement(v,(0,r.Z)({},e,n)),o.createElement(h,(0,r.Z)({},e,n)))}function k(e){const n=(0,b.Z)();return o.createElement(E,(0,r.Z)({key:String(n)},e))}},9547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905)),l=t(4866),a=t(5162);const i={title:"Dependency inversion principle",tags:["Solid"]},s="DIP - Dependency inversion principle",c={unversionedId:"SOLID/dependency-inversion-principle",id:"SOLID/dependency-inversion-principle",title:"Dependency inversion principle",description:"High-level modules should not depend on low-level modules. Both should depend on abstractions.",source:"@site/docs/02-SOLID/05-dependency-inversion-principle.md",sourceDirName:"02-SOLID",slug:"/SOLID/dependency-inversion-principle",permalink:"/docs/SOLID/dependency-inversion-principle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-SOLID/05-dependency-inversion-principle.md",tags:[{label:"Solid",permalink:"/docs/tags/solid"}],version:"current",sidebarPosition:5,frontMatter:{title:"Dependency inversion principle",tags:["Solid"]},sidebar:"tutorialSidebar",previous:{title:"Interface segregation principle",permalink:"/docs/SOLID/interface-segregation-principle"},next:{title:"srp-example",permalink:"/docs/SOLID/ems-example/srp-example"}},u={},p=[{value:"EMS Portal example",id:"ems-portal-example",level:3},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Inversion of control",id:"inversion-of-control",level:2},{value:"Checklist",id:"checklist",level:2}],m={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dip---dependency-inversion-principle"},"DIP - Dependency inversion principle"),(0,o.kt)("admonition",{title:"DIP",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"High-level modules should not depend on low-level modules. Both should depend on abstractions.\nAbstraction should not depend on details. Details should depend upon abstraction")),(0,o.kt)("p",null,"High-level module: Class/Interface which client uses"),(0,o.kt)("p",null,"Low-level module: Classes/Interface which High-levle module uses"),(0,o.kt)("p",null,"Other confusing concept:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dependency injection (DI)"),(0,o.kt)("li",{parentName:"ul"},"Inversion of control (IOC) ")),(0,o.kt)("h3",{id:"ems-portal-example"},"EMS Portal example"),(0,o.kt)("p",null,"New requirement: Log to file & database"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"Logger",label:"Logger",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Logger.js"',title:'"/src/Logger.js"'},"import fs from \"fs\";\n\ninterface ILogger {\n  LogError(error)\n}\n\nclass FileLogger implements ILogger {\n    public LogError(error) {\n        console.log('Log to file', error.message);\n    }\n}\n\nclass DatabaseLogger implements ILogger {\n    public LogError(error) {\n        console.log('Log to Database', error.message);\n    }\n}\n"))),(0,o.kt)(a.Z,{value:"Employee",label:"\u274cEmployee",mdxType:"TabItem"},"HL module contain business model & depend on low level modules => changes the lower level module can have a direct effect & force it to change as well",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Employee.js"',title:'"/src/Employee.js"'},'import { FileLogger, DatabaseLogger } from "./Logger";\n\nclass Employee {\n    public Save(Employee emp) {\n        try {\n            // code for saving employee data to DB\n        } catch (error) {\n          // Violate SRP, tighly coupled design\n\n          const isLog2FileEnable = true;\n          const isLog2DatabaseEnable = true;\n\n          if (isLog2FileEnable) {\n            FileLogger logger = new FileLogger();\n            logger.LogError(error);\n          }\n\n          if (isLog2DatabaseEnable) {\n            DatabaseLogger logger = new DatabaseLogger();\n            logger.LogError(error);\n          }\n            \n        }\n    }\n}\n'))),(0,o.kt)(a.Z,{value:"Employee2",label:"\u2705Employee",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Employee.js"',title:'"/src/Employee.js"'},'import { FileLogger, DatabaseLogger } from "./Logger";\n\nclass Employee {\n    logger: ILogger;\n\n    constructor (ILogger _logger) {\n      logger = _logger;\n    }\n     \n    public Save(Employee emp) {\n        try {\n            // code for saving employee data to DB\n        } catch (error) {\n          // No new keyword, No depend on concrete class anymore\n          logger.LogError(error);\n        }\n    }\n}\n')))),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,o.kt)("p",null,"DI is process where we inject dependent object from the outside"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"Main",label:"\u274cMain",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Main.js"',title:'"/src/Main.js"'},"// Not fully loosely coupled design\nconst Employee empFTE = new Employee(new FileLogger());\nconst Employee empPTE = new Employee(new DatabaseLogger());\n\nempFTE.Save(empFTE);\n")),(0,o.kt)("p",null,"  Problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many classes need to inject dependency"),(0,o.kt)("li",{parentName:"ul"},"Passed problem from one class to cliend (high-level module)"))),(0,o.kt)(a.Z,{value:"Solution",label:"Solution",mdxType:"TabItem"},(0,o.kt)("p",null,"  Using dependency injection frameworks/Containers, IOC containers (ex: ",(0,o.kt)("a",{parentName:"p",href:"https://inversify.io/"},"inversify"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Logger.js"',title:'"/src/Logger.js"'},"import { injectable, inject } from \"inversify\";\n\n// Declaring interface\ninterface ILogger {\n  LogError(error)\n}\n\n// Declare class and dependencies\n@injectable()\nclass FileLogger implements ILogger {\n    public LogError(error) {\n        console.log('Log to file', error.message);\n    }\n}\n\n@injectable()\nclass DatabaseLogger implements ILogger {\n    public LogError(error) {\n        console.log('Log to Database', error.message);\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Employee.js"',title:'"/src/Employee.js"'},'import { injectable, inject } from "inversify";\n\ninterface IEmployee {\n  Save(Employee emp)\n}\n\n@injectable()\nclass Employee implements IEmployee {\n    logger: ILogger;\n\n    constructor (@inject(TYPES.FileLogger) _logger_: ILogger) {\n      logger = _logger;\n    }\n     \n    public Save(Employee emp) {\n        try {\n            // code for saving employee data to DB\n        } catch (error) {\n          // No new keyword, No depend on concrete class anymore\n          logger.LogError(error);\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/src/Main.js"',title:'"/src/Main.js"'},'import { Container } from "inversify";\nimport { FileLogger, DatabaseLogger } from "./Logger";\nimport { Employee } from "./Employee";\n\nlet TYPES = {\n  IEmployee: Symbol("Employee"),\n  ILogger: Symbol("DatabaseLogger")\n};\n\n// Creating & configure container\nconst container = new Container();\ncontainer.bind<IEmployee>(TYPES.Employee).to(Employee);\ncontainer.bind<ILogger>(TYPES.DatabaseLogger).to(DatabaseLogger);\n\n// Resolving dependencies\nconst empFTE = container.get<IEmployee>(TYPES.Employee); // This loosly coupled design, not worry about dependent\nempFTE.Save(empFTE);\n')))),(0,o.kt)("h2",{id:"inversion-of-control"},"Inversion of control"),(0,o.kt)("p",null,"Employee class not control how error will be logged. The FileLogger control it => inversion"),(0,o.kt)("p",null,"IOC is pattern, which can be implement in multiple way by what ever you can invert the control to someone else. VD:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"events"),(0,o.kt)("li",{parentName:"ul"},"delegates"),(0,o.kt)("li",{parentName:"ul"},"dependency injection",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"constructor"),(0,o.kt)("li",{parentName:"ul"},"property"),(0,o.kt)("li",{parentName:"ul"},"method")))),(0,o.kt)("h2",{id:"checklist"},"Checklist"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identify dependencies, Are you using NEW keyword?"),(0,o.kt)("li",{parentName:"ul"},"Invert the dependency using DI methods"),(0,o.kt)("li",{parentName:"ul"},"Explore the use of DI containers")))}g.isMDXComponent=!0}}]);