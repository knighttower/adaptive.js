!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Adaptive",[],e):"object"==typeof exports?exports.Adaptive=e():t.Adaptive=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Adaptive:()=>W,adaptive:()=>W,default:()=>W});const n={};(()=>{if("undefined"!=typeof window){const t={childList:!0,subtree:!0};new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t in n)n[t]()})).observe(document.body,t)}})();const s=(t,e)=>{e&&(n[t]=e)},r=t=>{t&&delete n[t]};class i{constructor(t,e=document){this.selector=t,"object"==typeof t?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=e.querySelector(t)}isInDom(){return Boolean(this.domElement?.outerHTML)}whenInDom(){let t=this,e=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(n){t.isInDom()?n(t):s(e,(()=>{let s=new i(t.selector);s.isInDom()&&(t=s,n(t),r(e))}))}))}getElementByXpath(t){return document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}getXpathTo(){let t=this.domElement;if(t.id)return`//*[@id='${t.id}']`;if(t===document.body)return"//"+t.tagName;let e=0,n=t.parentNode.childNodes;for(let s=0;s<n.length;s++){let r=n[s];if(r===t)return new i(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(e+1)+"]";1===r.nodeType&&r.tagName===t.tagName&&e++}}getAttribute(t){return this.domElement.getAttribute(t)||null}getHash(){let t=String(this.getXpathTo()),e=0;if(0===t.length)return e;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}}function o(t,e=null){return null!==u(t)||"boolean"==typeof t?t:c(t)?e:t}function a(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())}const l=a;function c(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function u(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t))))return+t}return null}function d(t){return function(t){const e=new Map((t._private||["_private"]).map((t=>[t,!0]))),n=new Map([...e,...(t._protected||[]).map((t=>[t,!0]))]),s=new Map((t._mutable||[]).map((t=>[t,!0])));return new Proxy(t,{get:(t,n)=>n in t&&!e.has(String(n))?t[n]:void console.error("Prop is private, not set, or object is protected",n),set:(t,r,i)=>(r=String(r))in t?s.has(r)?(t[r]=i,!0):n.has(r)||e.has(r)?(console.error("The prop is protected or private and cannot be modified",r,i),!1):(t[r]=i,!0):(console.error("Protected Object, cannot set new props",r,i),!1)})}(t)}function p(t,e=document){return new i(t,e)}function h(t,e){if(null===t)return e?null===e||"null"===e:"null";let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}return e?e===n:n}function f(t,...e){if(t)return"string"!=typeof t?t:e.reduce(((t,e)=>{const n=e instanceof RegExp?e:new RegExp(O(e));return t.replace(n,"")}),t).trim()}function m(t,e="[",n="]"){if("string"!=typeof t)return t;const s=t.lastIndexOf(e);if(-1===s)return null;const r=t.substring(s),i=r.indexOf(n);return-1===i?null:r.substring(0,i+1)}function b(t){if(h(t,"object")||h(t,"array"))return t;const e=j(t,"{","}"),n=j(t,"[","]");if(!e&&!n)return t;const s=e?{}:[],r={};let i=function(t){const e=t.match(/^(\[|\{)(.*?)(\]|\})$/);return e?e[2].trim():t}(t);const a=(t=!1)=>{for(;;){let e=t?m(i,"{","}"):m(i);if(!e)break;let n=`__${l()}__`;r[n]=e,i=i.replace(e,n)}};return a(),a(!0),v(i).forEach(((t,n)=>{const i=t.includes(":")&&e,a=i?v(t,":"):[],l=w(o(a[0],n));(t=i?a[1]:t)in r&&(t=b(r[t])),t=function(t){const e=u(t);return null!==e?e:t}(w(t)),e?s[l]=t:s.push(t)})),s}function y(t){const e=t;if(!o(e))return null;const n=(t=null,e=null)=>({type:t,directive:e}),s=/^\[((.|\n)*?)\]$/gm,r=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,i=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,a=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,l=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let c=typeof e;if("object"===c||"array"===c)return n(c,e);switch(!0){case!!e.match(s):c="array";break;case!!e.match(r):c="object";break;case!!e.match(i):return n("idOrClassWithDirective",{[e.split("(")[0].trim()]:E(e,"(",")")});case!!e.match(a):case!!e.match(l):c="dotObject";break;default:return n("string",e)}if("array"===c||"object"===c){let t=function(t,e='"'){return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}(e);try{return n(c,JSON.parse(t))}catch(t){}return n(c,b(t))}if("dotObject"===c){let t,s,r;const i={};return v(e,"&&").forEach((e=>{e.match(l)?(t=E(e,"](",")"),s=E(e,"[","]"),r=e.split("[")[0].trim()):(t=E(e,"(",")"),e=e.replace(g(e,"(",")"),""),[r,s]=v(e,".")),t=b(t),i[r]||(i[r]={}),v(s,"|").forEach((e=>{i[r][e]=t}))})),n("dotObject",i)}}function g(t,e,n,s=!1){if("string"!=typeof t)return t;e=O(e),n=O(n);let r=new RegExp(function(...t){if(t.length<2)throw new Error("You need to pass at least two arguments");let e="";return t.forEach(((t,n)=>{t instanceof RegExp&&(t=t.source),0===n?e=t:e+=`((.|\n)*?)${t}`})),e}(e,n),"gm");const i=t.match(r);return i?s?i:i[0]:null}function v(t,e=","){if("string"!=typeof t)return t;if(c(t))return[];let n=(t=f(t)).split(e).map((t=>f(t)));return 1===n.length&&""===n[0]?[t]:n}function E(t,e,n,s=!1){if("string"!=typeof t)return t;const r=g(t,e,n,s)??(s?[]:t);return s?r.map((t=>f(t,e,n))):f(r,e,n)}function w(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function j(t,e=null,n=null){return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function O(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}const A=new Map([["array",t=>h(t,"array")],["bigInt",t=>"bigint"==typeof t],["boolean",t=>"boolean"==typeof t],["date",t=>t instanceof Date],["float",t=>"number"==typeof t&&!Number.isInteger(t)],["function",t=>"function"==typeof t],["int",t=>Number.isInteger(t)],["map",t=>t instanceof Map],["null",t=>null===t],["number",t=>"number"==typeof t],["object",t=>h(t,"object")],["promise",t=>t instanceof Promise],["regExp",t=>t instanceof RegExp],["set",t=>t instanceof Set],["string",t=>"string"==typeof t],["symbol",t=>"symbol"==typeof t],["undefined",t=>void 0===t],["weakMap",t=>t instanceof WeakMap],["weakSet",t=>t instanceof WeakSet]]),k=new Map,x=new Map;function M(t){throw new Error(`Type Error: "${t}" is not supported`)}function T(t){if(h(t,"array")||h(t,"object"))return h(t);const e=t.trim();return j(e,"[","]")?"array":j(e,"{","}")?"object":"basic"}const $=t=>new class{constructor(){return this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()}checkOptionalKey(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}checkTheAnyKey(t){if("any"in t){const e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((t=>"any"!==t)))}}handleObject(){const e=b(t);this.checkTheAnyKey(e);for(const t in e){const n=this.checkOptionalKey(t),s=e[t];"..."!==s?this.testUnit.get("tests").set(n,I(s)):(delete e[t],this.testUnit.set("testOnly",!0))}return this.testUnit}};function I(t){if(k.has(t))return k.get(t);let e=new Map([["testMethod",T(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",(n=t,x.has(n)?x.get(n):n.split("|").reduce(((t,e)=>{let s=!1,r=e.trim();r.endsWith("?")&&(r=r.slice(0,-1),s=!0);const i=A.get(r)??M(r);return i&&t.push(i),s&&t.push(A.get("null"),A.get("undefined")),x.set(n,t),t}),[])));break;case"array":e.set("tests",(t=>{const e=[];return b(t).forEach((t=>{e.push(I(t))})),e})(t));break;case"object":const s=$(t);e=new Map([...e,...s]);break;default:M(t)}var n;return k.set(t,e),e}const S=[],_=new Map;class D{constructor(t,e){const{testOnly:n,testFew:s,testAllAny:r,optionalKeys:i,tests:o}=[...e.entries()].reduce(((t,[e,n])=>({...t,[e]:n})),{});this.testUnitKeys=[...o.keys()],this.testOnly=n,this.testFew=s,this.testAllAny=r,this.optionalKeys=i,this.testCollection=o,this.inputObject=t}handleUnitTest(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!c(this.testFew):const t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!c(this.optionalKeys):const e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(const t in this.inputObject)if(!this.testCollection.has(t))return!1}return this.defaultTest()}filterOutOptionalKeys(){this.testUnitKeys=this.testUnitKeys.filter((t=>!this.optionalKeys.includes(t)))}filterOutFew(){this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((([t])=>!this.testFew.includes(t))))}testObjOptionalKeys(){return this.optionalKeys.every((t=>{const e=this.testCollection.get(t),n=this.inputObject[t];return!n||K(n,e)}))}testObjFew(){return this.testFew.every((t=>{const e=this.testCollection.get(t);return K(this.inputObject[t],e)}))}testObjAllAny(){return Object.values(this.inputObject).every((t=>K(t,this.testCollection.get("any"))))}defaultTest(){return this.testUnitKeys.every((t=>{const e=this.testCollection.get(t);return K(this.inputObject[t],e)}))}}const C=(t,e)=>!!h(t,"object")&&new D(t,e).handleUnitTest();function K(t,e){const n=e.get("testMethod"),s=e.get("tests");switch(n){case"basic":return((t,e)=>e.some((n=>{const s=n(t);return s||S.push({value:t,tests:e}),s})))(t,s);case"array":return((t,e)=>!!h(t,"array")&&e.every(((e,n)=>K(t[n],e))))(t,s);case"object":return C(t,e);default:return!1}}const R=(t,e,n)=>new class{constructor(){this.unitTest=I(t),this.testResult=K(e,this.unitTest),this.bool=this.testResult,this.settings=function(t){if(t){if(_.has(t))return _.get(t);let e=null;switch(typeof t){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return _.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}(n),this.callback=this.settings.callback??null,this.testData={typeExp:t,inputVal:e,callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}test(){return this.testResult}log(){return console.table(this.testData),this}fail(){return this.testResult?this:function(){const t=S[S.length-1];throw console.log(S),S.length=0,new Error(`Type Error: "${t.value}" is not valid, see log console for details`)}()}return(){return e}};class N{constructor(t){if(!R("string | object",t).test())return;if(this.props=t,!this.props.adaptiveId){const t=p(this.props),e=t.getAttribute("data-adaptive-id")??null,n=e||t.getHash();e||t.domElement.setAttribute("data-adaptive-id",n),this.props=Object.assign({},this.props,{adaptiveId:n,helper:t,domElement:t.domElement,xpath:t.getXpathTo()})}let e=p(`[name="adaptive"][value="${this.props.adaptiveId}"`);e.isInDom()||(e=document.createElement("param"),e.name="adaptive",e.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",e))}beam(t){switch(h(t=y(t).directive)){case"string":t=["default",t];break;case"object":const e=Object.keys(t)[0];t=[e,t[e]];break;case"array":1===t.length&&(t=["default",t[0]])}const[e,n]=t,i=p(n);let o="beforeend";switch(e){case"before":o="beforebegin";break;case"after":o="afterend"}i.isInDom()?i.domElement.insertAdjacentElement(o,this.props.domElement):s(this.props.adaptiveId,(()=>{const t=p(n);t.isInDom()&&(t.domElement.insertAdjacentElement(o,this.props.domElement),r(this.props.adaptiveId))}))}back(){let t=p(`[name="adaptive"][value="${this.props.adaptiveId}"`);t.isInDom()&&t.domElement.insertAdjacentElement("afterend",this.props.domElement)}cancel(){r(this.props.adaptiveId)}}let L=!1;function P(){L||(document.querySelectorAll("[data-teleport]").forEach((t=>{new N(t).beam(t.getAttribute("data-teleport"))})),L=!0)}const U=function(){const t="undefined"!=typeof window?window:{},e={},n=new Proxy(e,{get(t,e){if(e in t)return t[e]}}),s={},r={},i={};let o=!1;function a(e){let n=t.matchMedia(e);n.matches&&r[n.media].forEach((function(t){return t[0](t[1])}))}function l(t,e=null){let n={q:null,e:null};if(e){let s=e.getMinMaxQueries(),r=e.getExpQueries();if(n.q=s[t]??null,n.e=r[t]??null,n.q||n.e){if(n.q)return c(n.q[0],n.q[1]);if(n.e)return n.e}else if(t.includes("|")){let e=t.split("|"),n=e[0],i=e[1];if(s[n]&&s[i])return c(s[n],s[i],!0);if(r[n]&&r[i])return c(r[n],r[i],!0,!0)}}return null}function c(t,e,n=!1,s=!1){let r="(min-width: $1px) and (max-width: $2px)";return n?(s||(t=r.replace("$1",t[0]).replace("$2",t[1]),e=r.replace("$1",e[0]).replace("$2",e[1])),`${t}, ${e}`):r.replace("$1",t).replace("$2",e)}function u(e){if(!s[e]){let n=t.matchMedia(e),o=t=>{t.matches?r[t.media].forEach((function(t){return t[0](t[1])})):i[t.media].forEach((function(t){return t[0](t[1])}))};return s[e]=o,n.addEventListener("change",o)}o&&a(e)}return e.add=(t,e,n=null,s=null)=>{for(let o in t){let a=t[o],c=l(o,s)??o;r[c]||(r[c]=[],i[c]=[]),r[c].push([e,a]),n&&i[c].push([n,a]),u(c)}},e.remove=(t,e)=>{for(const[n,s]of Object.entries(r))for(const i of s){let s=typeof i[1];e&&"object"===s?e in i[1]&&i[1][e]===t&&(console.log(r[n]),r[n]=r[n].filter((function(n){return n[1][e]!==t}))):"string"===s&&i[1]===e&&(r[n]=r[n].filter((function(e){return e[0]!==t})))}},e.init=()=>{o=!0,Object.keys(r).forEach((t=>{u(t),a(t)}))},e.reset=()=>{Object.keys(s).forEach((e=>{t.matchMedia(e).removeEventListener("change",s[e]),delete s[e]})),Object.keys(r).forEach((t=>delete r[t])),Object.keys(i).forEach((t=>delete i[t]))},t.QueryHandler=n,t.QueryHandler}();class q{constructor(t,e){this.props=t,this.Adaptive=e;for(let e in t.settings)this[e](t.settings[e])}_addClass=t=>{(t=t.split(" ")).forEach((t=>{this.props.domElement.classList.add(t)}))};_removeClass=t=>{(t=t.split(" ")).forEach((t=>{this.props.domElement.classList.remove(t)}))};addClass(t){return U.add(t,this._addClass,this._removeClass,this.Adaptive)}removeClass(t){return U.add(t,this._removeClass,this._addClass,this.Adaptive)}addStyle(t){return this.props.originalStyle=this.props.domElement.getAttribute("style"),U.add(t,(t=>this.props.domElement.style.cssText+=t),(()=>this.props.domElement.style.cssText=this.props.originalStyle),this.Adaptive)}teleport(t){let e=new N(this.props);return U.add(t,(t=>e.beam(t)),(()=>(e.back(),e.cancel())),this.Adaptive)}execute(t){let e=this,n={adaptiveId:e.props.uniqueId,helper:e.props.helper,domElement:e.props.domElement,xpath:e.props.xpath};return U.add(t,(t=>{if(t&&"function"==typeof t)return t(n)}),(t=>{if(t&&"function"==typeof t)return t(n)}),this.Adaptive)}}const F={name:"TeleportTo",inheritAttrs:!1,props:{target:{type:[String,Object],require:!0},position:{type:String,default:"to",require:!1}},setup:t=>({directive:`${t.position}(${t.target})`}),template:'\n        <div>\n            <div v-teleport-to="directive">\n                <slot></slot>\n            </div>\n        </div>\n    '};class Q extends HTMLElement{constructor(){super()}connectedCallback(){let t=this.getAttribute("target"),e=this.getAttribute("position")??"to",n=this.getAttribute("data-adaptive-id");if(t&&!n)return new N(this).beam(`${e}(${t})`)}}const W=function(){const t="undefined"!=typeof window?window:{};if(t.$adaptive)return t.$adaptive;const e={_mutable:["registerElement","addQueryMinMax","addQueryExpression"]},s=d(e),r={};var i=!1,o=!1,l=!1,c=!1,u=!1;const h={320:[1,379],480:[380,519],520:[520,599],600:[600,699],700:[700,799],800:[800,919],920:[920,999],1e3:[1e3,1199],1200:[1200,1439],1440:[1440,1599],1600:[1600,1700]},f={mobile:[1,599],tablet:[600,799],odd:[800,1023],desktop:[1024,1920]},m={"non-desktop":[100,1023],nondesktop:[100,1023],fullscreen:[1920,6e3]},b={},g={};function v(t,n){if(!t.getAttribute("data-adaptive-id")){let s=t.getHash(),i=y(n||t.getAttribute("data-adaptive")).directive;return t.domElement.setAttribute("data-adaptive-id",s),r[s]=new q({adaptiveId:s,helper:t,domElement:t.domElement,xpath:t.getXpathTo(),settings:i,useVue:o,useReact:l},e),s}}function E(){document.removeEventListener("DOMContentLoaded",E),t.removeEventListener("load",E),i=!0,document.querySelectorAll("[data-adaptive]:not([data-adaptive-id])").forEach((function(t){e.registerElement(t)})),U.init(),o||l?u&&P():P()}return e.getAllQueries=()=>Object.assign({},h,f,m,b,g),e.getMinMaxQueries=()=>Object.assign({},h,f,m,b),e.getExpQueries=()=>Object.assign({},g),e.registerElement=(t,e)=>{let n=p(t);if(n.isInDom())return v(n,e);n.whenInDom().then((function(t){return v(t,e)}))},e.addQueryMinMax=function(t,e,n){if(!b[t]){if(!e||!n)throw new Error("Min or Max must be passed (id, min, max)",1);b[t]=[e,n]}},e.addQueryExpression=function(t,e){g[t]||(g[t]=e)},e.if=function(t,n=null){let s=n&&"function"==typeof n,r=n&&Array.isArray(n),i={};return i[t]={_private:["breakdownId","match","ifElse","do","removeAfterExec"],_mutable:["ifElse","match","removeAfterExec"],uid:a(),breakdownId:t,match:!1,executed:!1,removeAfterExec:!1,ifElse:null,else(t){t&&"function"==typeof t&&(this.ifElse=t)},onlyOnce(){this.removeAfterExec=!0,this.executed&&U.remove(this.uid,"uid")},do(){return this.match?(s&&n(),r&&(n[0][n[1]]=!0),this.removeAfterExec&&U.remove(this.uid,"uid"),this.executed=!0,!0):(r&&(n[0][n[1]]=!1),this.ifElse&&this.ifElse(),!1)}},U.add(i,(t=>{t.match=!0,t.do()}),(t=>{t.match=!1,t.do()}),e),d(i[t])},e.reset=()=>{Object.keys(r).forEach((t=>delete r[t])),Object.keys(n).forEach((t=>delete n[t])),U.reset(),i=!1},e.init=()=>!i&&("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?E():(document.addEventListener("DOMContentLoaded",E),void t.addEventListener("load",E))),e.useVue=(t,e=!1)=>{if(e&&(u=!0),"object"==typeof t&&"function"==typeof t.mixin){o=!0;let e={install:t=>{t.config.globalProperties.Adaptive=s,t.provide("Adaptive",s)}};t.use(e),t.directive("adaptive",{mounted:(t,e)=>{s.registerElement(t,e.value)}}),t.directive("teleport-to",{mounted:(t,e)=>new N(t).beam(e.value)}),t.component("TeleportTo",F),t.mixin({mounted:()=>s.init()})}return t},e.useWebComponent=()=>{c||o||(customElements.define("teleport-to",Q),c=!0)},e.useReact=(t,n=!1)=>{n&&(u=!0),"object"==typeof t&&(e.useWebComponent(),l=!0)},t.$adaptive=s,t.$adaptive}();return e})()));