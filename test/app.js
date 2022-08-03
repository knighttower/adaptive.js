(()=>{var e={134:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:()=>v});var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=t,"object"===r(t)?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=document.querySelector(t)}var t,n,i;return t=e,(n=[{key:"_convertString",value:function(e){return String(e.replace(/'/g,'"'))}},{key:"isInDom",value:function(){var t,n=this,r=Date.now()+Math.floor(1e3*Math.random());return!(null===(t=n.domElement)||void 0===t||!t.outerHTML)||(DomObserver.addOnNodeChange(r,(function(){var t,o=new e(n.selector);null!==(t=o.domElement)&&void 0!==t&&t.outerHTML&&(n=o,DomObserver.removeOnNodeChange(r))})),!1)}},{key:"getElementByXpath",value:function(e){return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}},{key:"getXpathTo",value:function(){var t=this.domElement;if(t.id)return"//*[@id='"+t.id+"']";if(t===document.body)return"//"+t.tagName;for(var n=0,r=t.parentNode.childNodes,o=0;o<r.length;o++){var i=r[o];if(i===t)return new e(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(n+1)+"]";1===i.nodeType&&i.tagName===t.tagName&&n++}}},{key:"getAttribute",value:function(e){var t=this.domElement.getAttribute(e);return(String(t).includes("{")||String(t).includes("["))&&(t=JSON.parse(this._convertString(t))),t||null}},{key:"getHash",value:function(){var e=String(this.getXpathTo()),t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t}}])&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=n(942),c=n.n(a);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t.adaptiveId){var n=new i(t),r=null;n.getAttribute("data-adaptive-id")?r=n.getAttribute("data-adaptive-id"):(r=n.getHash(),n.domElement.setAttribute("data-adaptive-id",r)),t={adaptiveId:r,helper:n,domElement:n.domElement,xpath:n.getXpathTo()}}this.props=t;var o=new i('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));o.isInDom()||((o=document.createElement("param")).name="adaptive",o.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",o))}var t,n,r;return t=e,(n=[{key:"beam",value:function(e){"string"==typeof e&&(e={to:e});var t=Object.keys(e)[0],n=e[t],r=new i(n),o="beforeend";switch(t){case"to":break;case"before":o="beforebegin";break;case"after":o="afterend"}if(r.isInDom())r.domElement.insertAdjacentElement(o,this.props.domElement);else{var a=this;c().addOnNodeChange(a.props.adaptiveId,(function(){var e=new i(n);e.isInDom()&&(e.domElement.insertAdjacentElement(o,a.props.domElement),c().removeOnNodeChange(a.props.adaptiveId))}))}}},{key:"back",value:function(){var e=new i('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));e.isInDom()&&e.domElement.insertAdjacentElement("afterend",this.props.domElement)}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=n(227),d=n.n(s);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=t,this.Adaptive=n,t.settings)this[r](t.settings[r])}var t,n,r;return t=e,(n=[{key:"addClass",value:function(e){var t=this;return d().add(e,(function(e){(e=e.split(" ")).forEach((function(e){t.props.domElement.classList.add(e)}))}),(function(e){(e=e.split(" ")).forEach((function(e){t.props.domElement.classList.remove(e)}))}),this.Adaptive)}},{key:"removeClass",value:function(e){var t=this;return d().add(e,(function(e){(e=e.split(" ")).forEach((function(e){t.props.domElement.classList.remove(e)}))}),(function(e){(e=e.split(" ")).forEach((function(e){t.props.domElement.classList.add(e)}))}),this.Adaptive)}},{key:"addStyle",value:function(e){var t=this;return this.props.originalStyle=this.props.domElement.getAttribute("style"),d().add(e,(function(e){return t.props.domElement.style.cssText+=e}),(function(){return t.props.domElement.style.cssText=t.props.originalStyle}),this.Adaptive)}},{key:"teleport",value:function(e){var t=new l(this.props,this.props.settings);return d().add(e,(function(e){return t.beam(e)}),(function(){return t.back()}),this.Adaptive)}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}const v=function(e){var t={},n={},r=!1,o=!1,a={320:[1,379],480:[380,519],520:[520,599],600:[600,699],700:[700,799],800:[800,919],920:[920,999],1e3:[1e3,1199],1200:[1200,1439],1440:[1440,1599],1600:[1600,1700]},c={mobile:[1,599],tablet:[600,799],"odd-device":[800,1024],desktop:[1025,1440]},u={"non-desktop":[100,1024],fullscreen:[1441,6e3]},s={},d={};function f(){document.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),r=!0,Array.from(document.querySelectorAll("[data-adaptive]:not([data-adaptive-id])")).forEach((function(e,n){t.registerElement(e)})),AdaptiveQH.init()}return t.getAllQueries=function(){return Object.assign({},a,c,u,s,d)},t.getMinMaxQueries=function(){return Object.assign({},a,c,u,s)},t.getExpQueries=function(){return Object.assign({},d)},t.registerElement=function(e,r){var a=new i(e);if(!a.getAttribute("data-adaptive-id")){var c=a.getHash();return a.domElement.setAttribute("data-adaptive-id",c),n[c]=new p({adaptiveId:c,helper:a,domElement:a.domElement,xpath:a.getXpathTo(),settings:r||a.getAttribute("data-adaptive"),useVue:o},t),c}},t.addQueryMinMax=function(e,t,n){if(!s[e]){if(!t||!n)throw new Exception("Min or Max must be passed (id, min, max)",1);s[e]=[t,n]}},t.addQueryExpression=function(e,t){d[e]||(d[e]=t)},t.reset=function(){Object.keys(n).forEach((function(e){return delete n[e]})),DomObserver.clenup(),AdaptiveQH.reset(),r=!1},t.init=function(){return!r&&("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?f():(document.addEventListener("DOMContentLoaded",f),void e.addEventListener("load",f)))},t.useVue=function(e){if("object"===m(e)&&"function"==typeof e.mixin){o=!0;var n={install:function(e,n){e.config.globalProperties.$Adaptive=t,e.provide("Adpative",t)}};e.use(n),e.directive("adaptive",{mounted:function(e,n,r,o){t.registerElement(e,n.value)}}),e.directive("teleport-to",{mounted:function(e,t,n,r){return new l(e).beam(t.value)}}),e.mixin({mounted:function(){return t.init()}})}return e},e.Adaptive=t}("undefined"!=typeof window?window:void 0)},942:function(e,t,n){var r,o;function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}e=n.nmd(e),function(i,a){"use strict";"object"===c(e)&&"object"===c(t)?e.exports=a(i):void 0===(o="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o)}("undefined"!=typeof window?window:this,(function(e){"use strict";var t=e.DomObserver=e.DomObserver||{},n={},r={};return t.addOnNodeChange=function(e,t){t&&(n[e]=t)},t.addOnAttrChange=function(e,t){t&&(r[e]=t)},t.removeOnNodeChange=function(e){e&&delete n[e]},t.removeOnAttrChange=function(e){e&&delete r[e]},t.cleanup=function(){Object.keys(n).forEach((function(e){return delete n[e]})),Object.keys(r).forEach((function(e){return delete r[e]}))},new MutationObserver((function(e,t){var o,a=i(e);try{for(a.s();!(o=a.n()).done;){var c=o.value;if("childList"===c.type)for(var u in n)n[u]();else if("attributes"===c.type)for(var l in r)r[l]()}}catch(e){a.e(e)}finally{a.f()}})).observe(document.body,{attributes:!0,childList:!0,subtree:!0}),t}))},227:function(e,t,n){var r,o;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}e=n.nmd(e),function(a,c){"use strict";"object"===i(e)&&"object"===i(t)?e.exports=c(a):void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o)}("undefined"!=typeof window?window:this,(function(e){"use strict";var t={},n={},r={},o={};return t.add=function(e,t,n,i){for(var a in e){var c=e[a],u=i.getMinMaxQueries()[a],l=i.getExpQueries()[a],s=a;u?s="(min-width: ".concat(u[0],"px) and (max-width: ").concat(u[1],"px)"):l&&(s=l),Boolean(r[s])||(r[s]=[],o[s]=[]),r[s].push([t,c]),o[s].push([n,c])}},t.init=function(){Object.keys(r).forEach((function(t){if(!Boolean(n[t])){var i=e.matchMedia(t),a=function(e){e.matches?r[e.media].forEach((function(e){return e[0](e[1])})):o[e.media].forEach((function(e){return e[0](e[1])}))};return n[t]=a,i.addEventListener("change",a)}})),Object.keys(r).forEach((function(t){var n=e.matchMedia(t);n.matches&&r[n.media].forEach((function(e){return e[0](e[1])}))}))},t.reset=function(){Object.keys(n).forEach((function(t){e.matchMedia(t).removeEventListener("change",n[t]),delete n[t]})),Object.keys(r).forEach((function(e){return delete r[e]})),Object.keys(o).forEach((function(e){return delete o[e]}))},e.AdaptiveQH=t}))},700:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(519),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".greeting{color:red;font-weight:700}",""]);const i=o},519:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},446:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:h(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var i=v++;n=m||(m=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.nc=void 0,(()=>{"use strict";var e=n(134);const t=Vue;var r={class:"sample"},o={class:"greeting"},i=(0,t.createElementVNode)("br",null,null,-1),a=(0,t.createElementVNode)("br",null,null,-1),c=(0,t.createElementVNode)("br",null,null,-1),u=(0,t.createElementVNode)("br",null,null,-1),l=[(0,t.createTextVNode)("Using Directive inside Vue component")],s=(0,t.createElementVNode)("br",null,null,-1),d=(0,t.createElementVNode)("br",null,null,-1),f={ref:"six"},p=(0,t.createElementVNode)("br",null,null,-1),m=(0,t.createElementVNode)("br",null,null,-1),v={key:0,class:"lazy"},h=(0,t.createElementVNode)("br",null,null,-1),y=(0,t.createElementVNode)("br",null,null,-1),b=(0,t.createElementVNode)("br",null,null,-1),g=(0,t.createElementVNode)("br",null,null,-1),E=[(0,t.createTextVNode)('Getting teleport from the component to "static Hello"')];const w={data:function(){return{greeting:"Example Vue component Hello World!",show:!1}},mounted:function(){this.$Adaptive.registerElement(this.$refs.six,{addClass:{dog:"seven"}})},methods:{changeText:function(){this.greeting=Math.floor(10*Math.random())},toggle:function(){this.show=!this.show}}};var S=n(446),x=n.n(S),O=n(700),k={insert:"head",singleton:!1};x()(O.Z,k);O.Z.locals;const A=(0,n(744).Z)(w,[["render",function(e,n,w,S,x,O){var k=(0,t.resolveDirective)("adaptive"),A=(0,t.resolveDirective)("teleport-to");return(0,t.openBlock)(),(0,t.createElementBlock)("div",r,[(0,t.createElementVNode)("p",o,(0,t.toDisplayString)(x.greeting),1),i,a,(0,t.createElementVNode)("button",{onClick:n[0]||(n[0]=function(){return O.changeText&&O.changeText.apply(O,arguments)})},"change to number and show another element"),c,u,(0,t.withDirectives)(((0,t.openBlock)(),(0,t.createElementBlock)("div",null,l)),[[k,{addClass:{desktop:"cinco"}}]]),s,d,(0,t.createElementVNode)("div",f,"Using Ref element inside component for Vue Plugin mode and custom media query expression",512),p,m,x.show?((0,t.openBlock)(),(0,t.createElementBlock)("div",v,"Using (observer) After load inside component")):(0,t.createCommentVNode)("",!0),h,y,(0,t.createElementVNode)("button",{onClick:n[1]||(n[1]=function(){return O.toggle&&O.toggle.apply(O,arguments)})},"Show hide Lazy element"),b,g,(0,t.withDirectives)(((0,t.openBlock)(),(0,t.createElementBlock)("div",null,E)),[[A,"#hello"]])])}]]);var N=(0,Vue.createApp)({});e.Z.addQueryMinMax("kitty",900,1400),e.Z.addQueryExpression("dog","(min-width: 900px)"),e.Z.useVue(N),N.component("hello",A),setTimeout((function(){N.mount("#app")}),"1000")})()})();