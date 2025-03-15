"use strict";(self.webpackChunkdohoanghuy_github_io_docusaurus=self.webpackChunkdohoanghuy_github_io_docusaurus||[]).push([[1748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={description:"Create a doc page with rich content.",tags:["tdd"]},a="TDD Flow",l={unversionedId:"TDD/tdd",id:"TDD/tdd",title:"TDD Flow",description:"Create a doc page with rich content.",source:"@site/docs/04-TDD/tdd.md",sourceDirName:"04-TDD",slug:"/TDD/tdd",permalink:"/docs/TDD/tdd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-TDD/tdd.md",tags:[{label:"tdd",permalink:"/docs/tags/tdd"}],version:"current",frontMatter:{description:"Create a doc page with rich content.",tags:["tdd"]},sidebar:"tutorialSidebar",previous:{title:"Pure fabrication",permalink:"/docs/GRASP/pure-fabrication"}},s={},c=[{value:"RED",id:"red",level:2},{value:"GREEN",id:"green",level:2},{value:"YELLOW",id:"yellow",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tdd-flow"},"TDD Flow"),(0,n.kt)("p",null,"RED - GREEN - YELLOW"),(0,n.kt)("p",null,"Step by step, from generic  to specific with incremental algorithmics. Only do simple change at a step"),(0,n.kt)("p",null,"As the test gets more specific, the code gets more generic"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Nature of test, it's not fully constrain a program, it not specify the final behavior (only specify the desire of human). It only prove the program wrong, it's can't prove the program right.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clean test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Test design:\nShould 1 test file per class. Inner class (is exception case) normaly the result of refactoring, it shouldn't usually change the structure of the test to reflect of the refactor. The test test behavior of the outer class, the way behavior implemented is not of the test business (if I have to write a private function, i'm not going to let the test known that). If we refactoring to several new outer class (which used by other place) => we should imp test for it."))),(0,n.kt)("p",null,"Avoid fragle test by apply SOLID"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SRP: test should have single responsibility (for single class)"),(0,n.kt)("li",{parentName:"ul"},"OCP: prod code open for extend modification, test close for modify. Test shouldn't have knownledge it shouldn't have"),(0,n.kt)("li",{parentName:"ul"},"LSP: polymophism (test is client of production code)"),(0,n.kt)("li",{parentName:"ul"},"ISP: protect from to much knownledge (test is client of production code)"),(0,n.kt)("li",{parentName:"ul"},"DIP: test is low level detail, test is depend on prod code")),(0,n.kt)("p",null,"To known what test to write first? Think about what code you will write first. Let the code help you what test to write, list out the todo test (plan ahead a little bit). Using pattern ex: given_when_then"),(0,n.kt)("h2",{id:"red"},"RED"),(0,n.kt)("p",null,"Write failed test first. Write the generic test case first (it's will danger for speficic testcase cause make production code generic, which might got stuck when test gradualy develop => you have to write testcase in correct order)"),(0,n.kt)("p",null,"Migh be struggle, getting stuck (because exiting production so specific)."),(0,n.kt)("p",null,"Triple A rule (Arrange - Act - Assert - ","[clean up/tear down]",")."),(0,n.kt)("p",null,"Arrange is setup the state for the test. Setup the test fixture: transisent fresh, persistent fresh, persistent shared. Using test hirecy to keep our setup manageable"),(0,n.kt)("p",null,"Act is calling the funtion to be tested. Single/Multiple/Compose action"),(0,n.kt)("p",null,"Assert is test the function to the right things. Single (logical) assertion rule: 1 test should have only 1 logical assert (logical assert represent by several physical assert). Not violate the rule by: Arrange -> Act -> Assert -> Act -> Assert -> Act -> Assert ... Test should be independences & isolation, we shouldn't take output of a test as input of other test"),(0,n.kt)("p",null,"Annihilate"),(0,n.kt)("p",null,"Clean Composition to make the test clean, readable"),(0,n.kt)("h2",{id:"green"},"GREEN"),(0,n.kt)("p",null,"Write production code to make it pass"),(0,n.kt)("p",null,"Try to make very small change to make it pass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if (specific) => loop while/foor (generic)")),(0,n.kt)("p",null,"Insome case, you might stuck at the middle, which make you have to rewrite lot of production code => stuck. Recommendation is to restart with testcase again"),(0,n.kt)("h2",{id:"yellow"},"YELLOW"),(0,n.kt)("p",null,"Refactor production/test code"))}d.isMDXComponent=!0}}]);