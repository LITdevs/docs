"use strict";(self.webpackChunklitdocs=self.webpackChunklitdocs||[]).push([[197],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2560:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="event handl\xf6er",c={unversionedId:"painfull/modules/eventhandlers",id:"painfull/modules/eventhandlers",title:"event handl\xf6er",description:"define in manifest",source:"@site/docs/painfull/modules/eventhandlers.md",sourceDirName:"painfull/modules",slug:"/painfull/modules/eventhandlers",permalink:"/painfull/modules/eventhandlers",draft:!1,editUrl:"https://github.com/LITdevs/docs/tree/main/docs/painfull/modules/eventhandlers.md",tags:[],version:"current",frontMatter:{},sidebar:"painfull",previous:{title:"Commands",permalink:"/painfull/modules/commands"},next:{title:"localization",permalink:"/painfull/modules/localization"}},s={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-handl\xf6er"},"event handl\xf6er"),(0,a.kt)("p",null,"define in manifest"),(0,a.kt)("p",null,"put registerEventHandler(cb) in an entrypoint"),(0,a.kt)("p",null,"win"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\nexecute: function (message, args, utils)\nregisterEventHandlers: function (cb) {\n        cb("messageCreate", onMessage); \n        // Painfull asks the module to register event handlers\n        // The first argument is the name of the event, the second is the function that needs to run when the event is triggered\n        // The event must be defined in the manifest\n}\n}\n')))}d.isMDXComponent=!0}}]);