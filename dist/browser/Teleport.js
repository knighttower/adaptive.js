(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Teleport:()=>_,TeleportGlobal:()=>x,default:()=>_});const n={};(()=>{if("undefined"!=typeof window){const t={childList:!0,subtree:!0};new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t in n)n[t]()})).observe(document.body,t)}})();const s=(t,e)=>{e&&(n[t]=e)},r=t=>{t&&delete n[t]};class i{constructor(t,e=document){this.selector=t,"object"==typeof t?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=e.querySelector(t)}isInDom(){return Boolean(this.domElement?.outerHTML)}whenInDom(){let t=this,e=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(n){t.isInDom()?n(t):s(e,(()=>{let s=new i(t.selector);s.isInDom()&&(t=s,n(t),r(e))}))}))}getElementByXpath(t){return document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}getXpathTo(){let t=this.domElement;if(t.id)return`//*[@id='${t.id}']`;if(t===document.body)return"//"+t.tagName;let e=0,n=t.parentNode.childNodes;for(let s=0;s<n.length;s++){let r=n[s];if(r===t)return new i(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(e+1)+"]";1===r.nodeType&&r.tagName===t.tagName&&e++}}getAttribute(t){return this.domElement.getAttribute(t)||null}getHash(){let t=String(this.getXpathTo()),e=0;if(0===t.length)return e;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}}const o=i;function a(t,e=null){return null!==u(t)||"boolean"==typeof t?t:c(t)?e:t}const l=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function c(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function u(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t))))return+t}return null}function h(t,e=document){return new o(t,e)}function p(t,e){if(null===t)return e?null===e||"null"===e:"null";let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}return e?e===n:n}function f(t,...e){if(t)return"string"!=typeof t?t:e.reduce(((t,e)=>{const n=e instanceof RegExp?e:new RegExp(j(e));return t.replace(n,"")}),t).trim()}function d(t,e="[",n="]"){if("string"!=typeof t)return t;const s=t.lastIndexOf(e);if(-1===s)return null;const r=t.substring(s),i=r.indexOf(n);return-1===i?null:r.substring(0,i+1)}function b(t){if(p(t,"object")||p(t,"array"))return t;const e=O(t,"{","}"),n=O(t,"[","]");if(!e&&!n)return t;const s=e?{}:[],r={};let i=function(t){const e=t.match(/^(\[|\{)(.*?)(\]|\})$/);return e?e[2].trim():t}(t);const o=(t=!1)=>{for(;;){let e=t?d(i,"{","}"):d(i);if(!e)break;let n=`__${l()}__`;r[n]=e,i=i.replace(e,n)}};return o(),o(!0),m(i).forEach(((t,n)=>{const i=t.includes(":")&&e,o=i?m(t,":"):[],l=w(a(o[0],n));(t=i?o[1]:t)in r&&(t=b(r[t])),t=function(t){const e=u(t);return null!==e?e:t}(w(t)),e?s[l]=t:s.push(t)})),s}function y(t,e,n,s=!1){if("string"!=typeof t)return t;e=j(e),n=j(n);let r=new RegExp(function(...t){if(t.length<2)throw new Error("You need to pass at least two arguments");let e="";return t.forEach(((t,n)=>{t instanceof RegExp&&(t=t.source),0===n?e=t:e+=`((.|\n)*?)${t}`})),e}(e,n),"gm");const i=t.match(r);return i?s?i:i[0]:null}function m(t,e=","){if("string"!=typeof t)return t;if(c(t))return[];let n=(t=f(t)).split(e).map((t=>f(t)));return 1===n.length&&""===n[0]?[t]:n}function g(t,e,n,s=!1){if("string"!=typeof t)return t;const r=y(t,e,n,s)??(s?[]:t);return s?r.map((t=>f(t,e,n))):f(r,e,n)}function w(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function O(t,e=null,n=null){return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function j(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}const E=new Map([["array",t=>p(t,"array")],["bigInt",t=>"bigint"==typeof t],["boolean",t=>"boolean"==typeof t],["date",t=>t instanceof Date],["float",t=>"number"==typeof t&&!Number.isInteger(t)],["function",t=>"function"==typeof t],["int",t=>Number.isInteger(t)],["map",t=>t instanceof Map],["null",t=>null===t],["number",t=>"number"==typeof t],["object",t=>p(t,"object")],["promise",t=>t instanceof Promise],["regExp",t=>t instanceof RegExp],["set",t=>t instanceof Set],["string",t=>"string"==typeof t],["symbol",t=>"symbol"==typeof t],["undefined",t=>void 0===t],["weakMap",t=>t instanceof WeakMap],["weakSet",t=>t instanceof WeakSet]]),v=new Map,k=new Map;function A(t){throw new Error(`Type Error: "${t}" is not supported`)}function T(t){if(p(t,"array")||p(t,"object"))return p(t);const e=t.trim();return O(e,"[","]")?"array":O(e,"{","}")?"object":"basic"}const M=t=>new class{constructor(){return this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()}checkOptionalKey(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}checkTheAnyKey(t){if("any"in t){const e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((t=>"any"!==t)))}}handleObject(){const e=b(t);this.checkTheAnyKey(e);for(const t in e){const n=this.checkOptionalKey(t),s=e[t];"..."!==s?this.testUnit.get("tests").set(n,I(s)):(delete e[t],this.testUnit.set("testOnly",!0))}return this.testUnit}};function I(t){if(v.has(t))return v.get(t);let e=new Map([["testMethod",T(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",(n=t,k.has(n)?k.get(n):n.split("|").reduce(((t,e)=>{let s=!1,r=e.trim();r.endsWith("?")&&(r=r.slice(0,-1),s=!0);const i=E.get(r)??A(r);return i&&t.push(i),s&&t.push(E.get("null"),E.get("undefined")),k.set(n,t),t}),[])));break;case"array":e.set("tests",(t=>{const e=[];return b(t).forEach((t=>{e.push(I(t))})),e})(t));break;case"object":const s=M(t);e=new Map([...e,...s]);break;default:A(t)}var n;return v.set(t,e),e}const K=[],D=new Map;class N{constructor(t,e){const{testOnly:n,testFew:s,testAllAny:r,optionalKeys:i,tests:o}=[...e.entries()].reduce(((t,[e,n])=>({...t,[e]:n})),{});this.testUnitKeys=[...o.keys()],this.testOnly=n,this.testFew=s,this.testAllAny=r,this.optionalKeys=i,this.testCollection=o,this.inputObject=t}handleUnitTest(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!c(this.testFew):const t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!c(this.optionalKeys):const e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(const t in this.inputObject)if(!this.testCollection.has(t))return!1}return this.defaultTest()}filterOutOptionalKeys(){this.testUnitKeys=this.testUnitKeys.filter((t=>!this.optionalKeys.includes(t)))}filterOutFew(){this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((([t])=>!this.testFew.includes(t))))}testObjOptionalKeys(){return this.optionalKeys.every((t=>{const e=this.testCollection.get(t),n=this.inputObject[t];return!n||S(n,e)}))}testObjFew(){return this.testFew.every((t=>{const e=this.testCollection.get(t);return S(this.inputObject[t],e)}))}testObjAllAny(){return Object.values(this.inputObject).every((t=>S(t,this.testCollection.get("any"))))}defaultTest(){return this.testUnitKeys.every((t=>{const e=this.testCollection.get(t);return S(this.inputObject[t],e)}))}}const R=(t,e)=>!!p(t,"object")&&new N(t,e).handleUnitTest();function S(t,e){const n=e.get("testMethod"),s=e.get("tests");switch(n){case"basic":return((t,e)=>e.some((n=>{const s=n(t);return s||K.push({value:t,tests:e}),s})))(t,s);case"array":return((t,e)=>!!p(t,"array")&&e.every(((e,n)=>S(t[n],e))))(t,s);case"object":return R(t,e);default:return!1}}const U=(t,e,n)=>new class{constructor(){this.unitTest=I(t),this.testResult=S(e,this.unitTest),this.bool=this.testResult,this.settings=function(t){if(t){if(D.has(t))return D.get(t);let e=null;switch(typeof t){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return D.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}(n),this.callback=this.settings.callback??null,this.testData={typeExp:t,inputVal:e,callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}test(){return this.testResult}log(){return console.table(this.testData),this}fail(){return this.testResult?this:function(){const t=K[K.length-1];throw console.log(K),K.length=0,new Error(`Type Error: "${t.value}" is not valid, see log console for details`)}()}return(){return e}};class _{constructor(t){if(!U("string | object",t).test())return;if(this.props=t,!this.props.adaptiveId){const t=h(this.props),e=t.getAttribute("data-adaptive-id")??null,n=e||t.getHash();e||t.domElement.setAttribute("data-adaptive-id",n),this.props=Object.assign({},this.props,{adaptiveId:n,helper:t,domElement:t.domElement,xpath:t.getXpathTo()})}let e=h(`[name="adaptive"][value="${this.props.adaptiveId}"`);e.isInDom()||(e=document.createElement("param"),e.name="adaptive",e.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",e))}beam(t){switch(p(t=function(t){const e=t;if(!a(e))return null;const n=(t=null,e=null)=>({type:t,directive:e}),s=/^\[((.|\n)*?)\]$/gm,r=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,i=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,o=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,l=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let c=typeof e;if("object"===c||"array"===c)return n(c,e);switch(!0){case!!e.match(s):c="array";break;case!!e.match(r):c="object";break;case!!e.match(i):return n("idOrClassWithDirective",{[e.split("(")[0].trim()]:g(e,"(",")")});case!!e.match(o):case!!e.match(l):c="dotObject";break;default:return n("string",e)}if("array"===c||"object"===c){let t=function(t,e='"'){return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}(e);try{return n(c,JSON.parse(t))}catch(t){}return n(c,b(t))}if("dotObject"===c){let t,s,r;const i={};return m(e,"&&").forEach((e=>{e.match(l)?(t=g(e,"](",")"),s=g(e,"[","]"),r=e.split("[")[0].trim()):(t=g(e,"(",")"),e=e.replace(y(e,"(",")"),""),[r,s]=m(e,".")),t=b(t),i[r]||(i[r]={}),m(s,"|").forEach((e=>{i[r][e]=t}))})),n("dotObject",i)}}(t).directive)){case"string":t=["default",t];break;case"object":const e=Object.keys(t)[0];t=[e,t[e]];break;case"array":1===t.length&&(t=["default",t[0]])}const[e,n]=t,i=h(n);let o="beforeend";switch(e){case"before":o="beforebegin";break;case"after":o="afterend"}i.isInDom()?i.domElement.insertAdjacentElement(o,this.props.domElement):s(this.props.adaptiveId,(()=>{const t=h(n);t.isInDom()&&(t.domElement.insertAdjacentElement(o,this.props.domElement),r(this.props.adaptiveId))}))}back(){let t=h(`[name="adaptive"][value="${this.props.adaptiveId}"`);t.isInDom()&&t.domElement.insertAdjacentElement("afterend",this.props.domElement)}cancel(){r(this.props.adaptiveId)}}let F=!1;function x(){F||(document.querySelectorAll("[data-teleport]").forEach((t=>{new _(t).beam(t.getAttribute("data-teleport"))})),F=!0)}window.Teleport=e})();