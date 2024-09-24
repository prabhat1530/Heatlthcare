function fm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},bs={},yd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),pm=Symbol.for("react.portal"),mm=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),vm=Symbol.for("react.profiler"),ym=Symbol.for("react.provider"),wm=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),Em=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),hu=Symbol.iterator;function km(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,Ed={};function tr(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||wd}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=tr.prototype;function Xa(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||wd}var Za=Xa.prototype=new Sd;Za.constructor=Xa;_d(Za,tr.prototype);Za.isPureReactComponent=!0;var pu=Array.isArray,Id=Object.prototype.hasOwnProperty,el={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function xd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Id.call(t,r)&&!kd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ri,type:e,key:s,ref:o,props:i,_owner:el.current}}function xm(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function Cm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mu=/\/+/g;function uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cm(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ri:case pm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+uo(o,0):r,pu(i)?(n="",e!=null&&(n=e.replace(mu,"$&/")+"/"),bi(i,t,n,"",function(u){return u})):i!=null&&(tl(i)&&(i=xm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",pu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+uo(s,a);o+=bi(s,t,n,l,i)}else if(l=km(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+uo(s,a++),o+=bi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},ji={transition:null},Pm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:ji,ReactCurrentOwner:el};function Cd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=tr;D.Fragment=mm;D.Profiler=vm;D.PureComponent=Xa;D.StrictMode=gm;D.Suspense=Em;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;D.act=Cd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_d({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=el.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Id.call(t,l)&&!kd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ri,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:wm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ym,_context:e},e.Consumer=e};D.createElement=xd;D.createFactory=function(e){var t=xd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:_m,render:e}};D.isValidElement=tl;D.lazy=function(e){return{$$typeof:Im,_payload:{_status:-1,_result:e},_init:Tm}};D.memo=function(e,t){return{$$typeof:Sm,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};D.unstable_act=Cd;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";yd.exports=D;var S=yd.exports;const At=hm(S),Nm=fm({__proto__:null,default:At},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm=S,Om=Symbol.for("react.element"),Am=Symbol.for("react.fragment"),Lm=Object.prototype.hasOwnProperty,Dm=Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bm={key:!0,ref:!0,__self:!0,__source:!0};function Td(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lm.call(t,r)&&!bm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Om,type:e,key:s,ref:o,props:i,_owner:Dm.current}}bs.Fragment=Am;bs.jsx=Td;bs.jsxs=Td;vd.exports=bs;var h=vd.exports,Pd={exports:{}},xe={},Nd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var A=C.length;C.push(O);e:for(;0<A;){var G=A-1>>>1,Z=C[G];if(0<i(Z,O))C[G]=O,C[A]=Z,A=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],A=C.pop();if(A!==O){C[0]=A;e:for(var G=0,Z=C.length,mi=Z>>>1;G<mi;){var Jt=2*(G+1)-1,lo=C[Jt],Xt=Jt+1,gi=C[Xt];if(0>i(lo,A))Xt<Z&&0>i(gi,lo)?(C[G]=gi,C[Xt]=A,G=Xt):(C[G]=lo,C[Jt]=A,G=Jt);else if(Xt<Z&&0>i(gi,A))C[G]=gi,C[Xt]=A,G=Xt;else break e}}return O}function i(C,O){var A=C.sortIndex-O.sortIndex;return A!==0?A:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,g=3,v=!1,_=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function w(C){if(y=!1,m(C),!_)if(n(l)!==null)_=!0,oo(k);else{var O=n(u);O!==null&&ao(w,O.startTime-C)}}function k(C,O){_=!1,y&&(y=!1,p(N),N=-1),v=!0;var A=g;try{for(m(O),d=n(l);d!==null&&(!(d.expirationTime>O)||C&&!Le());){var G=d.callback;if(typeof G=="function"){d.callback=null,g=d.priorityLevel;var Z=G(d.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),m(O)}else r(l);d=n(l)}if(d!==null)var mi=!0;else{var Jt=n(u);Jt!==null&&ao(w,Jt.startTime-O),mi=!1}return mi}finally{d=null,g=A,v=!1}}var T=!1,P=null,N=-1,F=5,L=-1;function Le(){return!(e.unstable_now()-L<F)}function ar(){if(P!==null){var C=e.unstable_now();L=C;var O=!0;try{O=P(!0,C)}finally{O?lr():(T=!1,P=null)}}else T=!1}var lr;if(typeof c=="function")lr=function(){c(ar)};else if(typeof MessageChannel<"u"){var fu=new MessageChannel,dm=fu.port2;fu.port1.onmessage=ar,lr=function(){dm.postMessage(null)}}else lr=function(){I(ar,0)};function oo(C){P=C,T||(T=!0,lr())}function ao(C,O){N=I(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,oo(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var A=g;g=O;try{return C()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=g;g=C;try{return O()}finally{g=A}},e.unstable_scheduleCallback=function(C,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:f++,callback:O,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(C.sortIndex=A,t(u,C),n(l)===null&&C===n(u)&&(y?(p(N),N=-1):y=!0,ao(w,A-G))):(C.sortIndex=Z,t(l,C),_||v||(_=!0,oo(k))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var O=g;return function(){var A=g;g=O;try{return C.apply(this,arguments)}finally{g=A}}}})(Rd);Nd.exports=Rd;var jm=Nd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=S,ke=jm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Od=new Set,Dr={};function wn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,Um=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},vu={};function Fm(e){return Go.call(vu,e)?!0:Go.call(gu,e)?!1:Um.test(e)?vu[e]=!0:(gu[e]=!0,!1)}function zm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,n,r){if(t===null||typeof t>"u"||zm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nl,rl);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nl,rl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nl,rl);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function il(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,n,i,r)&&(n=null),r||i===null?Fm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),qo=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),ol=Symbol.for("react.forward_ref"),Qo=Symbol.for("react.suspense"),Yo=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Dd=Symbol.for("react.offscreen"),yu=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,co;function vr(e){if(co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);co=t&&t[1]||""}return`
`+co+e}var fo=!1;function ho(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function Bm(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=ho(e.type,!1),e;case 11:return e=ho(e.type.render,!1),e;case 1:return e=ho(e.type,!0),e;default:return""}}function Jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Cn:return"Portal";case qo:return"Profiler";case sl:return"StrictMode";case Qo:return"Suspense";case Yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:Jo(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Jo(e(t))}catch{}}return null}function Vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jo(t);case 8:return t===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e){var t=bd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=Hm(e))}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Md(e,t){t=t.checked,t!=null&&il(e,"checked",t,!1)}function Zo(e,t){Md(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&ea(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ea(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(yr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Ud(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wm=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){Wm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function $d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$d(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Km=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(e,t){if(t){if(Km[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,zn=null,$n=null;function Iu(e){if(e=oi(e)){if(typeof oa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=zs(t),oa(e.stateNode,e.type,t))}}function Vd(e){zn?$n?$n.push(e):$n=[e]:zn=e}function Hd(){if(zn){var e=zn,t=$n;if($n=zn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Wd(e,t){return e(t)}function Kd(){}var po=!1;function Gd(e,t,n){if(po)return e(t,n);po=!0;try{return Wd(e,t,n)}finally{po=!1,(zn!==null||$n!==null)&&(Kd(),Hd())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=zs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var aa=!1;if(dt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){aa=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{aa=!1}function Gm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var kr=!1,Zi=null,es=!1,la=null,qm={onError:function(e){kr=!0,Zi=e}};function Qm(e,t,n,r,i,s,o,a,l){kr=!1,Zi=null,Gm.apply(qm,arguments)}function Ym(e,t,n,r,i,s,o,a,l){if(Qm.apply(this,arguments),kr){if(kr){var u=Zi;kr=!1,Zi=null}else throw Error(E(198));es||(es=!0,la=u)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if(_n(e)!==e)throw Error(E(188))}function Jm(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ku(i),e;if(s===r)return ku(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Qd(e){return e=Jm(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var Jd=ke.unstable_scheduleCallback,xu=ke.unstable_cancelCallback,Xm=ke.unstable_shouldYield,Zm=ke.unstable_requestPaint,q=ke.unstable_now,eg=ke.unstable_getCurrentPriorityLevel,ul=ke.unstable_ImmediatePriority,Xd=ke.unstable_UserBlockingPriority,ts=ke.unstable_NormalPriority,tg=ke.unstable_LowPriority,Zd=ke.unstable_IdlePriority,js=null,Ge=null;function ng(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(js,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:sg,rg=Math.log,ig=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(rg(e)/ig|0)|0}var Ei=64,Si=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wr(a):(s&=o,s!==0&&(r=wr(s)))}else o=n&~i,o!==0?r=wr(o):s!==0&&(r=wr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),i=1<<n,r|=e[n],t&=~i;return r}function og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ue(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=og(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function lg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ue(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,dl,rf,sf,of,ca=!1,Ii=[],Lt=null,Dt=null,bt=null,Mr=new Map,Ur=new Map,It=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function dr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&dl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cg(e,t,n,r,i){switch(t){case"focusin":return Lt=dr(Lt,e,t,n,r,i),!0;case"dragenter":return Dt=dr(Dt,e,t,n,r,i),!0;case"mouseover":return bt=dr(bt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mr.set(s,dr(Mr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ur.set(s,dr(Ur.get(s)||null,e,t,n,r,i)),!0}return!1}function af(e){var t=rn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,of(e.priority,function(){rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return t=oi(n),t!==null&&dl(t),e.blockedOn=n,!1;t.shift()}return!0}function Tu(e,t,n){Mi(e)&&n.delete(t)}function dg(){ca=!1,Lt!==null&&Mi(Lt)&&(Lt=null),Dt!==null&&Mi(Dt)&&(Dt=null),bt!==null&&Mi(bt)&&(bt=null),Mr.forEach(Tu),Ur.forEach(Tu)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,dg)))}function Fr(e){function t(i){return fr(i,e)}if(0<Ii.length){fr(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&fr(Lt,e),Dt!==null&&fr(Dt,e),bt!==null&&fr(bt,e),Mr.forEach(t),Ur.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)af(n),n.blockedOn===null&&It.shift()}var Bn=yt.ReactCurrentBatchConfig,rs=!0;function fg(e,t,n,r){var i=j,s=Bn.transition;Bn.transition=null;try{j=1,fl(e,t,n,r)}finally{j=i,Bn.transition=s}}function hg(e,t,n,r){var i=j,s=Bn.transition;Bn.transition=null;try{j=4,fl(e,t,n,r)}finally{j=i,Bn.transition=s}}function fl(e,t,n,r){if(rs){var i=da(e,t,n,r);if(i===null)xo(e,t,r,is,n),Cu(e,r);else if(cg(i,e,t,n,r))r.stopPropagation();else if(Cu(e,r),t&4&&-1<ug.indexOf(e)){for(;i!==null;){var s=oi(i);if(s!==null&&nf(s),s=da(e,t,n,r),s===null&&xo(e,t,r,is,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xo(e,t,r,null,n)}}var is=null;function da(e,t,n,r){if(is=null,e=ll(r),e=rn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eg()){case ul:return 1;case Xd:return 4;case ts:case tg:return 16;case Zd:return 536870912;default:return 16}default:return 16}}var Nt=null,hl=null,Ui=null;function uf(){if(Ui)return Ui;var e,t=hl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ui=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Pu(){return!1}function Ce(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ki:Pu,this.isPropagationStopped=Pu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Ce(nr),si=W({},nr,{view:0,detail:0}),pg=Ce(si),go,vo,hr,Ms=W({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(go=e.screenX-hr.screenX,vo=e.screenY-hr.screenY):vo=go=0,hr=e),go)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),Nu=Ce(Ms),mg=W({},Ms,{dataTransfer:0}),gg=Ce(mg),vg=W({},si,{relatedTarget:0}),yo=Ce(vg),yg=W({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=Ce(yg),_g=W({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eg=Ce(_g),Sg=W({},nr,{data:0}),Ru=Ce(Sg),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xg[e])?!!t[e]:!1}function ml(){return Cg}var Tg=W({},si,{key:function(e){if(e.key){var t=Ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=Ce(Tg),Ng=W({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=Ce(Ng),Rg=W({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Og=Ce(Rg),Ag=W({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Ce(Ag),Dg=W({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=Ce(Dg),jg=[9,13,27,32],gl=dt&&"CompositionEvent"in window,xr=null;dt&&"documentMode"in document&&(xr=document.documentMode);var Mg=dt&&"TextEvent"in window&&!xr,cf=dt&&(!gl||xr&&8<xr&&11>=xr),Au=" ",Lu=!1;function df(e,t){switch(e){case"keyup":return jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Ug(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(Lu=!0,Au);case"textInput":return e=t.data,e===Au&&Lu?null:e;default:return null}}function Fg(e,t){if(Pn)return e==="compositionend"||!gl&&df(e,t)?(e=uf(),Ui=hl=Nt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zg[e.type]:t==="textarea"}function hf(e,t,n,r){Vd(r),t=ss(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,zr=null;function $g(e){kf(e,0)}function Us(e){var t=On(e);if(jd(t))return e}function Bg(e,t){if(e==="change")return t}var pf=!1;if(dt){var wo;if(dt){var _o="oninput"in document;if(!_o){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),_o=typeof bu.oninput=="function"}wo=_o}else wo=!1;pf=wo&&(!document.documentMode||9<document.documentMode)}function ju(){Cr&&(Cr.detachEvent("onpropertychange",mf),zr=Cr=null)}function mf(e){if(e.propertyName==="value"&&Us(zr)){var t=[];hf(t,zr,e,ll(e)),Gd($g,t)}}function Vg(e,t,n){e==="focusin"?(ju(),Cr=t,zr=n,Cr.attachEvent("onpropertychange",mf)):e==="focusout"&&ju()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(zr)}function Wg(e,t){if(e==="click")return Us(t)}function Kg(e,t){if(e==="input"||e==="change")return Us(t)}function Gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Gg;function $r(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Go.call(t,i)||!ze(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vf(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qg(e){var t=vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gf(n.ownerDocument.documentElement,n)){if(r!==null&&vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Uu(n,s);var o=Uu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qg=dt&&"documentMode"in document&&11>=document.documentMode,Nn=null,fa=null,Tr=null,ha=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||Nn==null||Nn!==Xi(r)||(r=Nn,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&$r(Tr,r)||(Tr=r,r=ss(fa,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function xi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},Eo={},yf={};dt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Fs(e){if(Eo[e])return Eo[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return Eo[e]=t[n];return e}var wf=Fs("animationend"),_f=Fs("animationiteration"),Ef=Fs("animationstart"),Sf=Fs("transitionend"),If=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){If.set(e,t),wn(t,[e])}for(var So=0;So<zu.length;So++){var Io=zu[So],Yg=Io.toLowerCase(),Jg=Io[0].toUpperCase()+Io.slice(1);Kt(Yg,"on"+Jg)}Kt(wf,"onAnimationEnd");Kt(_f,"onAnimationIteration");Kt(Ef,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Sf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ym(r,t,void 0,e),e.currentTarget=null}function kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;$u(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;$u(i,a,u),s=l}}}if(es)throw e=la,es=!1,la=null,e}function z(e,t){var n=t[ya];n===void 0&&(n=t[ya]=new Set);var r=e+"__bubble";n.has(r)||(xf(t,e,2,!1),n.add(r))}function ko(e,t,n){var r=0;t&&(r|=4),xf(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ci]){e[Ci]=!0,Od.forEach(function(n){n!=="selectionchange"&&(Xg.has(n)||ko(n,!1,e),ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,ko("selectionchange",!1,t))}}function xf(e,t,n,r){switch(lf(t)){case 1:var i=fg;break;case 4:i=hg;break;default:i=fl}n=i.bind(null,t,n,e),i=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gd(function(){var u=s,f=ll(n),d=[];e:{var g=If.get(e);if(g!==void 0){var v=pl,_=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":v=Pg;break;case"focusin":_="focus",v=yo;break;case"focusout":_="blur",v=yo;break;case"beforeblur":case"afterblur":v=yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Og;break;case wf:case _f:case Ef:v=wg;break;case Sf:v=Lg;break;case"scroll":v=pg;break;case"wheel":v=bg;break;case"copy":case"cut":case"paste":v=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ou}var y=(t&4)!==0,I=!y&&e==="scroll",p=y?g!==null?g+"Capture":null:g;y=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=jr(c,p),w!=null&&y.push(Vr(c,w,m)))),I)break;c=c.return}0<y.length&&(g=new v(g,_,null,n,f),d.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==sa&&(_=n.relatedTarget||n.fromElement)&&(rn(_)||_[ft]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?rn(_):null,_!==null&&(I=_n(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=Nu,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ou,w="onPointerLeave",p="onPointerEnter",c="pointer"),I=v==null?g:On(v),m=_==null?g:On(_),g=new y(w,c+"leave",v,n,f),g.target=I,g.relatedTarget=m,w=null,rn(f)===u&&(y=new y(p,c+"enter",_,n,f),y.target=m,y.relatedTarget=I,w=y),I=w,v&&_)t:{for(y=v,p=_,c=0,m=y;m;m=xn(m))c++;for(m=0,w=p;w;w=xn(w))m++;for(;0<c-m;)y=xn(y),c--;for(;0<m-c;)p=xn(p),m--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=xn(y),p=xn(p)}y=null}else y=null;v!==null&&Bu(d,g,v,y,!1),_!==null&&I!==null&&Bu(d,I,_,y,!0)}}e:{if(g=u?On(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Bg;else if(Du(g))if(pf)k=Kg;else{k=Hg;var T=Vg}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Wg);if(k&&(k=k(e,u))){hf(d,k,n,f);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&ea(g,"number",g.value)}switch(T=u?On(u):window,e){case"focusin":(Du(T)||T.contentEditable==="true")&&(Nn=T,fa=u,Tr=null);break;case"focusout":Tr=fa=Nn=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Fu(d,n,f);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Fu(d,n,f)}var P;if(gl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Pn?df(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(cf&&n.locale!=="ko"&&(Pn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Pn&&(P=uf()):(Nt=f,hl="value"in Nt?Nt.value:Nt.textContent,Pn=!0)),T=ss(u,N),0<T.length&&(N=new Ru(N,e,null,n,f),d.push({event:N,listeners:T}),P?N.data=P:(P=ff(n),P!==null&&(N.data=P)))),(P=Mg?Ug(e,n):Fg(e,n))&&(u=ss(u,"onBeforeInput"),0<u.length&&(f=new Ru("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=P))}kf(d,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jr(e,n),s!=null&&r.unshift(Vr(e,s,i)),s=jr(e,t),s!=null&&r.push(Vr(e,s,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=jr(n,s),l!=null&&o.unshift(Vr(n,l,a))):i||(l=jr(n,s),l!=null&&o.push(Vr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zg=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace(ev,"")}function Ti(e,t,n){if(t=Vu(t),Vu(e)!==t&&n)throw Error(E(425))}function os(){}var pa=null,ma=null;function ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var va=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(rv)}:va;function rv(e){setTimeout(function(){throw e})}function Co(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),We="__reactFiber$"+rr,Hr="__reactProps$"+rr,ft="__reactContainer$"+rr,ya="__reactEvents$"+rr,iv="__reactListeners$"+rr,sv="__reactHandles$"+rr;function rn(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[We])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[We]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function zs(e){return e[Hr]||null}var wa=[],An=-1;function Gt(e){return{current:e}}function $(e){0>An||(e.current=wa[An],wa[An]=null,An--)}function U(e,t){An++,wa[An]=e.current,e.current=t}var Wt={},le=Gt(Wt),ge=Gt(!1),cn=Wt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function as(){$(ge),$(le)}function Ku(e,t,n){if(le.current!==Wt)throw Error(E(168));U(le,t),U(ge,n)}function Cf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Vm(e)||"Unknown",i));return W({},n,r)}function ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,cn=le.current,U(le,e),U(ge,ge.current),!0}function Gu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Cf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(le),U(le,e)):$(ge),U(ge,n)}var rt=null,$s=!1,To=!1;function Tf(e){rt===null?rt=[e]:rt.push(e)}function ov(e){$s=!0,Tf(e)}function qt(){if(!To&&rt!==null){To=!0;var e=0,t=j;try{var n=rt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,$s=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),Jd(ul,qt),i}finally{j=t,To=!1}}return null}var Ln=[],Dn=0,us=null,cs=0,Te=[],Pe=0,dn=null,it=1,st="";function Zt(e,t){Ln[Dn++]=cs,Ln[Dn++]=us,us=e,cs=t}function Pf(e,t,n){Te[Pe++]=it,Te[Pe++]=st,Te[Pe++]=dn,dn=e;var r=it;e=st;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var s=32-Ue(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,it=1<<32-Ue(t)+i|n<<i|r,st=s+e}else it=1<<s|n<<i|r,st=e}function yl(e){e.return!==null&&(Zt(e,1),Pf(e,1,0))}function wl(e){for(;e===us;)us=Ln[--Dn],Ln[Dn]=null,cs=Ln[--Dn],Ln[Dn]=null;for(;e===dn;)dn=Te[--Pe],Te[Pe]=null,st=Te[--Pe],Te[Pe]=null,it=Te[--Pe],Te[Pe]=null}var Se=null,Ee=null,B=!1,Me=null;function Nf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(B){var t=Ee;if(t){var n=t;if(!qu(e,t)){if(_a(e))throw Error(E(418));t=jt(n.nextSibling);var r=Se;t&&qu(e,t)?Nf(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(_a(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Pi(e){if(e!==Se)return!1;if(!B)return Qu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ga(e.type,e.memoizedProps)),t&&(t=Ee)){if(_a(e))throw Rf(),Error(E(418));for(;t;)Nf(e,t),t=jt(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?jt(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=Ee;e;)e=jt(e.nextSibling)}function Yn(){Ee=Se=null,B=!1}function _l(e){Me===null?Me=[e]:Me.push(e)}var av=yt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yu(e){var t=e._init;return t(e._payload)}function Of(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=zt(p,c),p.index=0,p.sibling=null,p}function s(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,m,w){return c===null||c.tag!==6?(c=Do(m,p.mode,w),c.return=p,c):(c=i(c,m),c.return=p,c)}function l(p,c,m,w){var k=m.type;return k===Tn?f(p,c,m.props.children,w,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&Yu(k)===c.type)?(w=i(c,m.props),w.ref=pr(p,c,m),w.return=p,w):(w=Ki(m.type,m.key,m.props,null,p.mode,w),w.ref=pr(p,c,m),w.return=p,w)}function u(p,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=bo(m,p.mode,w),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function f(p,c,m,w,k){return c===null||c.tag!==7?(c=un(m,p.mode,w,k),c.return=p,c):(c=i(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Do(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yi:return m=Ki(c.type,c.key,c.props,null,p.mode,m),m.ref=pr(p,null,c),m.return=p,m;case Cn:return c=bo(c,p.mode,m),c.return=p,c;case Et:var w=c._init;return d(p,w(c._payload),m)}if(yr(c)||ur(c))return c=un(c,p.mode,m,null),c.return=p,c;Ni(p,c)}return null}function g(p,c,m,w){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yi:return m.key===k?l(p,c,m,w):null;case Cn:return m.key===k?u(p,c,m,w):null;case Et:return k=m._init,g(p,c,k(m._payload),w)}if(yr(m)||ur(m))return k!==null?null:f(p,c,m,w,null);Ni(p,m)}return null}function v(p,c,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(c,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yi:return p=p.get(w.key===null?m:w.key)||null,l(c,p,w,k);case Cn:return p=p.get(w.key===null?m:w.key)||null,u(c,p,w,k);case Et:var T=w._init;return v(p,c,m,T(w._payload),k)}if(yr(w)||ur(w))return p=p.get(m)||null,f(c,p,w,k,null);Ni(c,w)}return null}function _(p,c,m,w){for(var k=null,T=null,P=c,N=c=0,F=null;P!==null&&N<m.length;N++){P.index>N?(F=P,P=null):F=P.sibling;var L=g(p,P,m[N],w);if(L===null){P===null&&(P=F);break}e&&P&&L.alternate===null&&t(p,P),c=s(L,c,N),T===null?k=L:T.sibling=L,T=L,P=F}if(N===m.length)return n(p,P),B&&Zt(p,N),k;if(P===null){for(;N<m.length;N++)P=d(p,m[N],w),P!==null&&(c=s(P,c,N),T===null?k=P:T.sibling=P,T=P);return B&&Zt(p,N),k}for(P=r(p,P);N<m.length;N++)F=v(P,p,N,m[N],w),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?N:F.key),c=s(F,c,N),T===null?k=F:T.sibling=F,T=F);return e&&P.forEach(function(Le){return t(p,Le)}),B&&Zt(p,N),k}function y(p,c,m,w){var k=ur(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var T=k=null,P=c,N=c=0,F=null,L=m.next();P!==null&&!L.done;N++,L=m.next()){P.index>N?(F=P,P=null):F=P.sibling;var Le=g(p,P,L.value,w);if(Le===null){P===null&&(P=F);break}e&&P&&Le.alternate===null&&t(p,P),c=s(Le,c,N),T===null?k=Le:T.sibling=Le,T=Le,P=F}if(L.done)return n(p,P),B&&Zt(p,N),k;if(P===null){for(;!L.done;N++,L=m.next())L=d(p,L.value,w),L!==null&&(c=s(L,c,N),T===null?k=L:T.sibling=L,T=L);return B&&Zt(p,N),k}for(P=r(p,P);!L.done;N++,L=m.next())L=v(P,p,N,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?N:L.key),c=s(L,c,N),T===null?k=L:T.sibling=L,T=L);return e&&P.forEach(function(ar){return t(p,ar)}),B&&Zt(p,N),k}function I(p,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Tn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yi:e:{for(var k=m.key,T=c;T!==null;){if(T.key===k){if(k=m.type,k===Tn){if(T.tag===7){n(p,T.sibling),c=i(T,m.props.children),c.return=p,p=c;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&Yu(k)===T.type){n(p,T.sibling),c=i(T,m.props),c.ref=pr(p,T,m),c.return=p,p=c;break e}n(p,T);break}else t(p,T);T=T.sibling}m.type===Tn?(c=un(m.props.children,p.mode,w,m.key),c.return=p,p=c):(w=Ki(m.type,m.key,m.props,null,p.mode,w),w.ref=pr(p,c,m),w.return=p,p=w)}return o(p);case Cn:e:{for(T=m.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=bo(m,p.mode,w),c.return=p,p=c}return o(p);case Et:return T=m._init,I(p,c,T(m._payload),w)}if(yr(m))return _(p,c,m,w);if(ur(m))return y(p,c,m,w);Ni(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=Do(m,p.mode,w),c.return=p,p=c),o(p)):n(p,c)}return I}var Jn=Of(!0),Af=Of(!1),ds=Gt(null),fs=null,bn=null,El=null;function Sl(){El=bn=fs=null}function Il(e){var t=ds.current;$(ds),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){fs=e,El=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(fs===null)throw Error(E(308));bn=e,fs.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var sn=null;function kl(e){sn===null?sn=[e]:sn.push(e)}function Lf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,kl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var i=e.updateQueue;St=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,f=u=l=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(g=t,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(v,d,g);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,g=typeof _=="function"?_.call(v,d,g):_,g==null)break e;d=W({},d,g);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=d):f=f.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);hn|=o,e.lanes=o,e.memoizedState=d}}function Xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ai={},qe=Gt(ai),Wr=Gt(ai),Kr=Gt(ai);function on(e){if(e===ai)throw Error(E(174));return e}function Cl(e,t){switch(U(Kr,t),U(Wr,e),U(qe,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}$(qe),U(qe,t)}function Xn(){$(qe),$(Wr),$(Kr)}function bf(e){on(Kr.current);var t=on(qe.current),n=na(t,e.type);t!==n&&(U(Wr,e),U(qe,n))}function Tl(e){Wr.current===e&&($(qe),$(Wr))}var V=Gt(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Po=[];function Pl(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var $i=yt.ReactCurrentDispatcher,No=yt.ReactCurrentBatchConfig,fn=0,H=null,J=null,ee=null,ms=!1,Pr=!1,Gr=0,lv=0;function se(){throw Error(E(321))}function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function Rl(e,t,n,r,i,s){if(fn=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?fv:hv,e=n(r,i),Pr){s=0;do{if(Pr=!1,Gr=0,25<=s)throw Error(E(301));s+=1,ee=J=null,t.updateQueue=null,$i.current=pv,e=n(r,i)}while(Pr)}if($i.current=gs,t=J!==null&&J.next!==null,fn=0,ee=J=H=null,ms=!1,t)throw Error(E(300));return e}function Ol(){var e=Gr!==0;return Gr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(E(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function qr(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((fn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,H.lanes|=f,hn|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ze(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,hn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ze(s,t.memoizedState)||(me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function jf(){}function Mf(e,t){var n=H,r=Ae(),i=t(),s=!ze(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,Al(zf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Qr(9,Ff.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));fn&30||Uf(n,t,i)}return i}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ff(e,t,n,r){t.value=n,t.getSnapshot=r,$f(t)&&Bf(e)}function zf(e,t,n){return n(function(){$f(t)&&Bf(e)})}function $f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Bf(e){var t=ht(e,1);t!==null&&Fe(t,e,1,-1)}function Zu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=dv.bind(null,H,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vf(){return Ae().memoizedState}function Bi(e,t,n,r){var i=He();H.flags|=e,i.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Bs(e,t,n,r){var i=Ae();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&Nl(r,o.deps)){i.memoizedState=Qr(t,n,s,r);return}}H.flags|=e,i.memoizedState=Qr(1|t,n,s,r)}function ec(e,t){return Bi(8390656,8,e,t)}function Al(e,t){return Bs(2048,8,e,t)}function Hf(e,t){return Bs(4,2,e,t)}function Wf(e,t){return Bs(4,4,e,t)}function Kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){return n=n!=null?n.concat([e]):null,Bs(4,4,Kf.bind(null,t,e),n)}function Ll(){}function qf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yf(e,t,n){return fn&21?(ze(n,t)||(n=ef(),H.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function uv(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=No.transition;No.transition={};try{e(!1),t()}finally{j=n,No.transition=r}}function Jf(){return Ae().memoizedState}function cv(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xf(e))Zf(t,n);else if(n=Lf(e,t,n,r),n!==null){var i=ce();Fe(n,e,r,i),eh(n,t,r)}}function dv(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xf(e))Zf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ze(a,o)){var l=t.interleaved;l===null?(i.next=i,kl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Lf(e,t,i,r),n!==null&&(i=ce(),Fe(n,e,r,i),eh(n,t,r))}}function Xf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Zf(e,t){Pr=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}var gs={readContext:Oe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},fv={readContext:Oe,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,Kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cv.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Ll,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=uv.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=He();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));fn&30||Uf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ec(zf.bind(null,r,s,e),[e]),r.flags|=2048,Qr(9,Ff.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(B){var n=st,r=it;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hv={readContext:Oe,useCallback:qf,useContext:Oe,useEffect:Al,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Qf,useReducer:Ro,useRef:Vf,useState:function(){return Ro(qr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ae();return Yf(t,J.memoizedState,e)},useTransition:function(){var e=Ro(qr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:Mf,useId:Jf,unstable_isNewReconciler:!1},pv={readContext:Oe,useCallback:qf,useContext:Oe,useEffect:Al,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Qf,useReducer:Oo,useRef:Vf,useState:function(){return Oo(qr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ae();return J===null?t.memoizedState=e:Yf(t,J.memoizedState,e)},useTransition:function(){var e=Oo(qr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:Mf,useId:Jf,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Ft(e),s=ut(r,i);s.payload=t,n!=null&&(s.callback=n),t=Mt(e,s,i),t!==null&&(Fe(t,e,i,r),zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Ft(e),s=ut(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Mt(e,s,i),t!==null&&(Fe(t,e,i,r),zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=Ft(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mt(e,i,r),t!==null&&(Fe(t,e,r,n),zi(t,e,r))}};function tc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,s):!0}function th(e,t,n){var r=!1,i=Wt,s=t.contextType;return typeof s=="object"&&s!==null?s=Oe(s):(i=ve(t)?cn:le.current,r=t.contextTypes,s=(r=r!=null)?Qn(e,i):Wt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Oe(s):(s=ve(t)?cn:le.current,i.context=Qn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ia(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vs.enqueueReplaceState(i,i.state,null),hs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=Bm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ao(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function nh(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,ba=r),xa(e,t)},n}function rh(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function ic(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var gv=yt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?Af(t,null,n,r):Jn(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var s=t.ref;return Vn(t,i),r=Rl(e,t,n,r,s,i),n=Ol(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(B&&n&&yl(t),t.flags|=1,ue(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!$l(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ih(e,t,s,r,i)):(e=Ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(o,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function ih(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if($r(s,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,pt(e,t,i)}return Ca(e,t,n,r,i)}function sh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Mn,_e),_e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Mn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(Mn,_e),_e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(Mn,_e),_e|=r;return ue(e,t,i,n),t.child}function oh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,r,i){var s=ve(n)?cn:le.current;return s=Qn(t,s),Vn(t,i),n=Rl(e,t,n,r,s,i),r=Ol(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(B&&r&&yl(t),t.flags|=1,ue(e,t,n,i),t.child)}function lc(e,t,n,r,i){if(ve(n)){var s=!0;ls(t)}else s=!1;if(Vn(t,i),t.stateNode===null)Vi(e,t),th(t,n,r),ka(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ve(n)?cn:le.current,u=Qn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&nc(t,o,r,u),St=!1;var g=t.memoizedState;o.state=g,hs(t,r,o,i),l=t.memoizedState,a!==r||g!==l||ge.current||St?(typeof f=="function"&&(Ia(t,n,f,r),l=t.memoizedState),(a=St||tc(t,n,a,r,g,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Df(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:be(t.type,a),o.props=u,d=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ve(n)?cn:le.current,l=Qn(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||g!==l)&&nc(t,o,r,l),St=!1,g=t.memoizedState,o.state=g,hs(t,r,o,i);var _=t.memoizedState;a!==d||g!==_||ge.current||St?(typeof v=="function"&&(Ia(t,n,v,r),_=t.memoizedState),(u=St||tc(t,n,u,r,g,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ta(e,t,n,r,s,i)}function Ta(e,t,n,r,i,s){oh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Gu(t,n,!1),pt(e,t,s);r=t.stateNode,gv.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Jn(t,e.child,null,s),t.child=Jn(t,null,a,s)):ue(e,t,a,s),t.memoizedState=r.state,i&&Gu(t,n,!0),t.child}function ah(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),Cl(e,t.containerInfo)}function uc(e,t,n,r,i){return Yn(),_l(i),t.flags|=256,ue(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function lh(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(V,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ks(o,r,0,null),e=un(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Na(n),t.memoizedState=Pa,e):Dl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vv(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zt(a,s):(s=un(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Na(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return s=e.child,e=s.sibling,r=zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dl(e,t){return t=Ks({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&_l(r),Jn(t,e.child,null,n),e=Dl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ao(Error(E(422))),Ri(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ks({mode:"visible",children:r.children},i,0,null),s=un(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Jn(t,e.child,null,o),t.child.memoizedState=Na(o),t.memoizedState=Pa,s);if(!(t.mode&1))return Ri(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Ao(s,r,void 0),Ri(e,t,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ht(e,i),Fe(r,e,i,-1))}return zl(),r=Ao(Error(E(421))),Ri(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ee=jt(i.nextSibling),Se=t,B=!0,Me=null,e!==null&&(Te[Pe++]=it,Te[Pe++]=st,Te[Pe++]=dn,it=e.id,st=e.overflow,dn=t),t=Dl(t,r.children),t.flags|=4096,t)}function cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function Lo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,n,t);else if(e.tag===19)cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Lo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Lo(t,!0,n,null,s);break;case"together":Lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yv(e,t,n){switch(t.tag){case 3:ah(t),Yn();break;case 5:bf(t);break;case 1:ve(t.type)&&ls(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(ds,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?lh(e,t,n):(U(V,V.current&1),e=pt(e,t,n),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,sh(e,t,n)}return pt(e,t,n)}var ch,Ra,dh,fh;ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};dh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(qe.current);var s=null;switch(n){case"input":i=Xo(e,i),r=Xo(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=ta(e,i),r=ta(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}ra(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};fh=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wv(e,t,n){var r=t.pendingProps;switch(wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&as(),oe(t),null;case 3:return r=t.stateNode,Xn(),$(ge),$(le),Pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ua(Me),Me=null))),Ra(e,t),oe(t),null;case 5:Tl(t);var i=on(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)dh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return oe(t),null}if(e=on(qe.current),Pi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[We]=t,r[Hr]=s,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<_r.length;i++)z(_r[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":wu(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":Eu(r,s),z("invalid",r)}ra(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",""+a]):Dr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":wi(r),_u(r,s,!0);break;case"textarea":wi(r),Su(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[We]=t,e[Hr]=r,ch(e,t,!1,!1),t.stateNode=e;e:{switch(o=ia(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<_r.length;i++)z(_r[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":wu(e,r),i=Xo(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),z("invalid",e);break;case"textarea":Eu(e,r),i=ta(e,r),z("invalid",e);break;default:i=r}ra(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bd(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&br(e,l):typeof l=="number"&&br(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Dr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",e):l!=null&&il(e,s,l,o))}switch(n){case"input":wi(e),_u(e,r,!1);break;case"textarea":wi(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Fn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)fh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=on(Kr.current),on(qe.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(s=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))Rf(),Yn(),t.flags|=98560,s=!1;else if(s=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[We]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Me!==null&&(Ua(Me),Me=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):zl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Xn(),Ra(e,t),e===null&&Br(t.stateNode.containerInfo),oe(t),null;case 10:return Il(t.type._context),oe(t),null;case 17:return ve(t.type)&&as(),oe(t),null;case 19:if($(V),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)mr(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ps(e),o!==null){for(t.flags|=128,mr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&q()>er&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ps(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return oe(t),null}else 2*q()-s.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,mr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,n=V.current,U(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function _v(e,t){switch(wl(t),t.tag){case 1:return ve(t.type)&&as(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),$(ge),$(le),Pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return Xn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return Fl(),null;case 24:return null;default:return null}}var Oi=!1,ae=!1,Ev=typeof WeakSet=="function"?WeakSet:Set,x=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Oa(e,t,n){try{n()}catch(r){K(e,t,r)}}var dc=!1;function Sv(e,t){if(pa=rs,e=vf(),vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++f===r&&(l=o),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},rs=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,I=_.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:be(t.type,y),I);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return _=dc,dc=!1,_}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Oa(t,n,s)}i=i.next}while(i!==r)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hh(e){var t=e.alternate;t!==null&&(e.alternate=null,hh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Hr],delete t[ya],delete t[iv],delete t[sv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ph(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}function Da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}var ne=null,je=!1;function wt(e,t,n){for(n=n.child;n!==null;)mh(e,t,n),n=n.sibling}function mh(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(js,n)}catch{}switch(n.tag){case 5:ae||jn(n,t);case 6:var r=ne,i=je;ne=null,wt(e,t,n),ne=r,je=i,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?Co(e.parentNode,n):e.nodeType===1&&Co(e,n),Fr(e)):Co(ne,n.stateNode));break;case 4:r=ne,i=je,ne=n.stateNode.containerInfo,je=!0,wt(e,t,n),ne=r,je=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oa(n,t,o),i=i.next}while(i!==r)}wt(e,t,n);break;case 1:if(!ae&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,wt(e,t,n),ae=r):wt(e,t,n);break;default:wt(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ev),t.forEach(function(r){var i=Ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,je=!1;break e;case 3:ne=a.stateNode.containerInfo,je=!0;break e;case 4:ne=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ne===null)throw Error(E(160));mh(s,o,i),ne=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gh(t,e),t=t.sibling}function gh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Be(e),r&4){try{Nr(3,e,e.return),Hs(3,e)}catch(y){K(e,e.return,y)}try{Nr(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:De(t,e),Be(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(De(t,e),Be(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var i=e.stateNode;try{br(i,"")}catch(y){K(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Md(i,s),ia(a,o);var u=ia(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Bd(i,d):f==="dangerouslySetInnerHTML"?zd(i,d):f==="children"?br(i,d):il(i,f,d,u)}switch(a){case"input":Zo(i,s);break;case"textarea":Ud(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Fn(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Fn(i,!!s.multiple,s.defaultValue,!0):Fn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hr]=s}catch(y){K(e,e.return,y)}}break;case 6:if(De(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){K(e,e.return,y)}}break;case 3:if(De(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:De(t,e),Be(e);break;case 13:De(t,e),Be(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ml=q())),r&4&&hc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||f,De(t,e),ae=u):De(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(x=e,f=e.child;f!==null;){for(d=x=f;x!==null;){switch(g=x,v=g.child,g.tag){case 0:case 11:case 14:case 15:Nr(4,g,g.return);break;case 1:jn(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:jn(g,g.return);break;case 22:if(g.memoizedState!==null){mc(d);continue}}v!==null?(v.return=g,x=v):mc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$d("display",o))}catch(y){K(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){K(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:De(t,e),Be(e),r&4&&hc(e);break;case 21:break;default:De(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ph(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(br(i,""),r.flags&=-33);var s=fc(e);Da(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fc(e);La(e,a,o);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Iv(e,t,n){x=e,vh(e)}function vh(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Oi;var u=ae;if(Oi=o,(ae=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?gc(i):l!==null?(l.return=o,x=l):gc(i);for(;s!==null;)x=s,vh(s),s=s.sibling;x=i,Oi=a,ae=u}pc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):pc(e)}}function pc(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Hs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Fr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&Aa(t)}catch(g){K(t,t.return,g)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function mc(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function gc(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hs(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var s=t.return;try{Aa(t)}catch(l){K(t,s,l)}break;case 5:var o=t.return;try{Aa(t)}catch(l){K(t,o,l)}}}catch(l){K(t,t.return,l)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var kv=Math.ceil,vs=yt.ReactCurrentDispatcher,bl=yt.ReactCurrentOwner,Re=yt.ReactCurrentBatchConfig,b=0,te=null,Q=null,re=0,_e=0,Mn=Gt(0),X=0,Yr=null,hn=0,Ws=0,jl=0,Rr=null,pe=null,Ml=0,er=1/0,nt=null,ys=!1,ba=null,Ut=null,Ai=!1,Rt=null,ws=0,Or=0,ja=null,Hi=-1,Wi=0;function ce(){return b&6?q():Hi!==-1?Hi:Hi=q()}function Ft(e){return e.mode&1?b&2&&re!==0?re&-re:av.transition!==null?(Wi===0&&(Wi=ef()),Wi):(e=j,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e):1}function Fe(e,t,n,r){if(50<Or)throw Or=0,ja=null,Error(E(185));ii(e,n,r),(!(b&2)||e!==te)&&(e===te&&(!(b&2)&&(Ws|=n),X===4&&kt(e,re)),ye(e,r),n===1&&b===0&&!(t.mode&1)&&(er=q()+500,$s&&qt()))}function ye(e,t){var n=e.callbackNode;ag(e,t);var r=ns(e,e===te?re:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?ov(vc.bind(null,e)):Tf(vc.bind(null,e)),nv(function(){!(b&6)&&qt()}),n=null;else{switch(tf(r)){case 1:n=ul;break;case 4:n=Xd;break;case 16:n=ts;break;case 536870912:n=Zd;break;default:n=ts}n=xh(n,yh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yh(e,t){if(Hi=-1,Wi=0,b&6)throw Error(E(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=ns(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_s(e,r);else{t=r;var i=b;b|=2;var s=_h();(te!==e||re!==t)&&(nt=null,er=q()+500,ln(e,t));do try{Tv();break}catch(a){wh(e,a)}while(!0);Sl(),vs.current=s,b=i,Q!==null?t=0:(te=null,re=0,t=X)}if(t!==0){if(t===2&&(i=ua(e),i!==0&&(r=i,t=Ma(e,i))),t===1)throw n=Yr,ln(e,0),kt(e,r),ye(e,q()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!xv(i)&&(t=_s(e,r),t===2&&(s=ua(e),s!==0&&(r=s,t=Ma(e,s))),t===1))throw n=Yr,ln(e,0),kt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:en(e,pe,nt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ml+500-q(),10<t)){if(ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=va(en.bind(null,e,pe,nt),t);break}en(e,pe,nt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ue(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kv(r/1960))-r,10<r){e.timeoutHandle=va(en.bind(null,e,pe,nt),r);break}en(e,pe,nt);break;case 5:en(e,pe,nt);break;default:throw Error(E(329))}}}return ye(e,q()),e.callbackNode===n?yh.bind(null,e):null}function Ma(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=_s(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ua(t)),e}function Ua(e){pe===null?pe=e:pe.push.apply(pe,e)}function xv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~jl,t&=~Ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function vc(e){if(b&6)throw Error(E(327));Hn();var t=ns(e,0);if(!(t&1))return ye(e,q()),null;var n=_s(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=Ma(e,r))}if(n===1)throw n=Yr,ln(e,0),kt(e,t),ye(e,q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,pe,nt),ye(e,q()),null}function Ul(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(er=q()+500,$s&&qt())}}function pn(e){Rt!==null&&Rt.tag===0&&!(b&6)&&Hn();var t=b;b|=1;var n=Re.transition,r=j;try{if(Re.transition=null,j=1,e)return e()}finally{j=r,Re.transition=n,b=t,!(b&6)&&qt()}}function Fl(){_e=Mn.current,$(Mn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tv(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&as();break;case 3:Xn(),$(ge),$(le),Pl();break;case 5:Tl(r);break;case 4:Xn();break;case 13:$(V);break;case 19:$(V);break;case 10:Il(r.type._context);break;case 22:case 23:Fl()}n=n.return}if(te=e,Q=e=zt(e.current,null),re=_e=t,X=0,Yr=null,jl=Ws=hn=0,pe=Rr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sn=null}return e}function wh(e,t){do{var n=Q;try{if(Sl(),$i.current=gs,ms){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ms=!1}if(fn=0,ee=J=H=null,Pr=!1,Gr=0,bl.current=null,n===null||n.return===null){X=1,Yr=t,Q=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ic(o);if(v!==null){v.flags&=-257,sc(v,o,a,s,t),v.mode&1&&rc(s,u,t),t=v,l=u;var _=t.updateQueue;if(_===null){var y=new Set;y.add(l),t.updateQueue=y}else _.add(l);break e}else{if(!(t&1)){rc(s,u,t),zl();break e}l=Error(E(426))}}else if(B&&a.mode&1){var I=ic(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),sc(I,o,a,s,t),_l(Zn(l,a));break e}}s=l=Zn(l,a),X!==4&&(X=2),Rr===null?Rr=[s]:Rr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=nh(s,l,t);Ju(s,p);break e;case 1:a=l;var c=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=rh(s,a,t);Ju(s,w);break e}}s=s.return}while(s!==null)}Sh(n)}catch(k){t=k,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function _h(){var e=vs.current;return vs.current=gs,e===null?gs:e}function zl(){(X===0||X===3||X===2)&&(X=4),te===null||!(hn&268435455)&&!(Ws&268435455)||kt(te,re)}function _s(e,t){var n=b;b|=2;var r=_h();(te!==e||re!==t)&&(nt=null,ln(e,t));do try{Cv();break}catch(i){wh(e,i)}while(!0);if(Sl(),b=n,vs.current=r,Q!==null)throw Error(E(261));return te=null,re=0,X}function Cv(){for(;Q!==null;)Eh(Q)}function Tv(){for(;Q!==null&&!Xm();)Eh(Q)}function Eh(e){var t=kh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Sh(e):Q=t,bl.current=null}function Sh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_v(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=wv(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function en(e,t,n){var r=j,i=Re.transition;try{Re.transition=null,j=1,Pv(e,t,n,r)}finally{Re.transition=i,j=r}return null}function Pv(e,t,n,r){do Hn();while(Rt!==null);if(b&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(lg(e,s),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ai||(Ai=!0,xh(ts,function(){return Hn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var o=j;j=1;var a=b;b|=4,bl.current=null,Sv(e,n),gh(n,e),qg(ma),rs=!!pa,ma=pa=null,e.current=n,Iv(n),Zm(),b=a,j=o,Re.transition=s}else e.current=n;if(Ai&&(Ai=!1,Rt=e,ws=i),s=e.pendingLanes,s===0&&(Ut=null),ng(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ys)throw ys=!1,e=ba,ba=null,e;return ws&1&&e.tag!==0&&Hn(),s=e.pendingLanes,s&1?e===ja?Or++:(Or=0,ja=e):Or=0,qt(),null}function Hn(){if(Rt!==null){var e=tf(ws),t=Re.transition,n=j;try{if(Re.transition=null,j=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,ws=0,b&6)throw Error(E(331));var i=b;for(b|=4,x=e.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:Nr(8,f,s)}var d=f.child;if(d!==null)d.return=f,x=d;else for(;x!==null;){f=x;var g=f.sibling,v=f.return;if(hh(f),f===u){x=null;break}if(g!==null){g.return=v,x=g;break}x=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Nr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var c=e.current;for(x=c;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=c;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hs(9,a)}}catch(k){K(a,a.return,k)}if(a===o){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(b=i,qt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(js,e)}catch{}r=!0}return r}finally{j=n,Re.transition=t}}return!1}function yc(e,t,n){t=Zn(n,t),t=nh(e,t,1),e=Mt(e,t,1),t=ce(),e!==null&&(ii(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Zn(n,e),e=rh(t,e,1),t=Mt(t,e,1),e=ce(),t!==null&&(ii(t,1,e),ye(t,e));break}}t=t.return}}function Nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>q()-Ml?ln(e,0):jl|=n),ye(e,t)}function Ih(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=ce();e=ht(e,t),e!==null&&(ii(e,t,n),ye(e,n))}function Rv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ih(e,n)}function Ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Ih(e,n)}var kh;kh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,yv(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&Pf(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=Qn(t,le.current);Vn(t,n),i=Rl(null,t,r,e,i,n);var s=Ol();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(s=!0,ls(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xl(t),i.updater=Vs,t.stateNode=i,i._reactInternals=t,ka(t,r,e,n),t=Ta(null,t,r,!0,s,n)):(t.tag=0,B&&s&&yl(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lv(r),e=be(r,e),i){case 0:t=Ca(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=ac(null,t,r,be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),lc(e,t,r,i,n);case 3:e:{if(ah(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Df(e,t),hs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Zn(Error(E(423)),t),t=uc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(E(424)),t),t=uc(e,t,r,n,i);break e}else for(Ee=jt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,Me=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=pt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return bf(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ga(r,i)?o=null:s!==null&&ga(r,s)&&(t.flags|=32),oh(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return lh(e,t,n);case 4:return Cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),oc(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,U(ds,r._currentValue),r._currentValue=o,s!==null)if(ze(s.value,o)){if(s.children===i.children&&!ge.current){t=pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ut(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sa(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vn(t,n),i=Oe(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),ac(e,t,r,i,n);case 15:return ih(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Vi(e,t),t.tag=1,ve(r)?(e=!0,ls(t)):e=!1,Vn(t,n),th(t,r,i),ka(t,r,i,n),Ta(null,t,r,!0,e,n);case 19:return uh(e,t,n);case 22:return sh(e,t,n)}throw Error(E(156,t.tag))};function xh(e,t){return Jd(e,t)}function Av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Av(e,t,n,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lv(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ol)return 11;if(e===al)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ki(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")$l(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Tn:return un(n.children,i,s,t);case sl:o=8,i|=8;break;case qo:return e=Ne(12,n,t,i|2),e.elementType=qo,e.lanes=s,e;case Qo:return e=Ne(13,n,t,i),e.elementType=Qo,e.lanes=s,e;case Yo:return e=Ne(19,n,t,i),e.elementType=Yo,e.lanes=s,e;case Dd:return Ks(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:o=10;break e;case Ld:o=9;break e;case ol:o=11;break e;case al:o=14;break e;case Et:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function un(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Ks(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Dd,e.lanes=n,e.stateNode={isHidden:!1},e}function Do(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function bo(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bl(e,t,n,r,i,s,o,a,l){return e=new Dv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ne(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(s),e}function bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ch(e){if(!e)return Wt;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ve(n))return Cf(e,n,t)}return t}function Th(e,t,n,r,i,s,o,a,l){return e=Bl(n,r,!0,e,i,s,o,a,l),e.context=Ch(null),n=e.current,r=ce(),i=Ft(n),s=ut(r,i),s.callback=t??null,Mt(n,s,i),e.current.lanes=i,ii(e,i,r),ye(e,r),e}function Gs(e,t,n,r){var i=t.current,s=ce(),o=Ft(i);return n=Ch(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(i,t,o),e!==null&&(Fe(e,i,o,s),zi(e,i,o)),o}function Es(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vl(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function jv(){return null}var Ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hl(e){this._internalRoot=e}qs.prototype.render=Hl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Gs(e,t,null,null)};qs.prototype.unmount=Hl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Gs(null,e,null,null)}),t[ft]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&af(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Mv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Es(o);s.call(u)}}var o=Th(t,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=o,e[ft]=o.current,Br(e.nodeType===8?e.parentNode:e),pn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Es(l);a.call(u)}}var l=Bl(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=l,e[ft]=l.current,Br(e.nodeType===8?e.parentNode:e),pn(function(){Gs(t,l,n,r)}),l}function Ys(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Es(o);a.call(l)}}Gs(t,o,e,i)}else o=Mv(n,t,e,i,r);return Es(o)}nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(cl(t,n|1),ye(t,q()),!(b&6)&&(er=q()+500,qt()))}break;case 13:pn(function(){var r=ht(e,1);if(r!==null){var i=ce();Fe(r,e,1,i)}}),Vl(e,1)}};dl=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}Vl(e,134217728)}};rf=function(e){if(e.tag===13){var t=Ft(e),n=ht(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}Vl(e,t)}};sf=function(){return j};of=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};oa=function(e,t,n){switch(t){case"input":if(Zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zs(r);if(!i)throw Error(E(90));jd(r),Zo(r,i)}}}break;case"textarea":Ud(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Wd=Ul;Kd=pn;var Uv={usingClientEntryPoint:!1,Events:[oi,On,zs,Vd,Hd,Ul]},gr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fv={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{js=Li.inject(Fv),Ge=Li}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(E(200));return bv(e,t,null,n)};xe.createRoot=function(e,t){if(!Wl(e))throw Error(E(299));var n=!1,r="",i=Ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bl(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,Br(e.nodeType===8?e.parentNode:e),new Hl(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return pn(e)};xe.hydrate=function(e,t,n){if(!Qs(t))throw Error(E(200));return Ys(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ph;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Th(t,null,e,1,n??null,i,!1,s,o),e[ft]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qs(t)};xe.render=function(e,t,n){if(!Qs(t))throw Error(E(200));return Ys(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(E(40));return e._reactRootContainer?(pn(function(){Ys(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};xe.unstable_batchedUpdates=Ul;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ys(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function Nh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh)}catch(e){console.error(e)}}Nh(),Pd.exports=xe;var zv=Pd.exports,Rh,Ec=zv;Rh=Ec.createRoot,Ec.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}var Ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ot||(Ot={}));const Sc="popstate";function $v(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fa("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ss(i)}return Vv(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Oh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bv(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function Fa(e,t,n,r){return n===void 0&&(n=null),Jr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||Bv()})}function Ss(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ot.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Jr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Ot.Pop;let I=f(),p=I==null?null:I-u;u=I,l&&l({action:a,location:y.location,delta:p})}function g(I,p){a=Ot.Push;let c=Fa(y.location,I,p);u=f()+1;let m=Ic(c,u),w=y.createHref(c);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function v(I,p){a=Ot.Replace;let c=Fa(y.location,I,p);u=f();let m=Ic(c,u),w=y.createHref(c);o.replaceState(m,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function _(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof I=="string"?I:Ss(I);return c=c.replace(/ $/,"%20"),Y(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let y={get action(){return a},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sc,d),l=I,()=>{i.removeEventListener(Sc,d),l=null}},createHref(I){return t(i,I)},createURL:_,encodeLocation(I){let p=_(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(I){return o.go(I)}};return y}var kc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kc||(kc={}));function Hv(e,t,n){return n===void 0&&(n="/"),Wv(e,t,n,!1)}function Wv(e,t,n,r){let i=typeof t=="string"?ir(t):t,s=Kl(i.pathname||"/",n);if(s==null)return null;let o=Ah(e);Kv(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=ry(s);a=ty(o[l],u,r)}return a}function Ah(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$t([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Y(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ah(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zv(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Lh(s.path))i(s,o,l)}),t}function Lh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Lh(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ey(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gv=/^:[\w-]+$/,qv=3,Qv=2,Yv=1,Jv=10,Xv=-2,xc=e=>e==="*";function Zv(e,t){let n=e.split("/"),r=n.length;return n.some(xc)&&(r+=Xv),t&&(r+=Qv),n.filter(i=>!xc(i)).reduce((i,s)=>i+(Gv.test(s)?qv:s===""?Yv:Jv),r)}function ey(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ty(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",d=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),g=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:$t([s,d.pathname]),pathnameBase:ay($t([s,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(s=$t([s,d.pathnameBase]))}return o}function Cc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ny(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return v&&!_?u[g]=void 0:u[g]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ny(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Oh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ry(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function iy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:sy(n,t):t,search:ly(r),hash:uy(i)}}function sy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dh(e,t){let n=oy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Jr({},e),Y(!i.pathname||!i.pathname.includes("?"),jo("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),jo("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),jo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let l=iy(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const $t=e=>e.join("/").replace(/\/\/+/g,"/"),ay=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jh=["post","put","patch","delete"];new Set(jh);const dy=["get",...jh];new Set(dy);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}const Gl=S.createContext(null),fy=S.createContext(null),En=S.createContext(null),Js=S.createContext(null),Sn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Mh=S.createContext(null);function hy(e,t){let{relative:n}=t===void 0?{}:t;li()||Y(!1);let{basename:r,navigator:i}=S.useContext(En),{hash:s,pathname:o,search:a}=Fh(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:$t([r,o])),i.createHref({pathname:l,search:a,hash:s})}function li(){return S.useContext(Js)!=null}function Xs(){return li()||Y(!1),S.useContext(Js).location}function Uh(e){S.useContext(En).static||S.useLayoutEffect(e)}function ql(){let{isDataRoute:e}=S.useContext(Sn);return e?Cy():py()}function py(){li()||Y(!1);let e=S.useContext(Gl),{basename:t,future:n,navigator:r}=S.useContext(En),{matches:i}=S.useContext(Sn),{pathname:s}=Xs(),o=JSON.stringify(Dh(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Uh(()=>{a.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=bh(u,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:$t([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,s,e])}function Fh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(En),{matches:i}=S.useContext(Sn),{pathname:s}=Xs(),o=JSON.stringify(Dh(i,r.v7_relativeSplatPath));return S.useMemo(()=>bh(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function my(e,t){return gy(e,t)}function gy(e,t,n,r){li()||Y(!1);let{navigator:i}=S.useContext(En),{matches:s}=S.useContext(Sn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Xs(),f;if(t){var d;let I=typeof t=="string"?ir(t):t;l==="/"||(d=I.pathname)!=null&&d.startsWith(l)||Y(!1),f=I}else f=u;let g=f.pathname||"/",v=g;if(l!=="/"){let I=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(I.length).join("/")}let _=Hv(e,{pathname:v}),y=Ey(_&&_.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:$t([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:$t([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return t&&y?S.createElement(Js.Provider,{value:{location:Xr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ot.Pop}},y):y}function vy(){let e=xy(),t=cy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const yy=S.createElement(vy,null);class wy extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Sn.Provider,{value:this.props.routeContext},S.createElement(Mh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _y(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Gl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Sn.Provider,{value:t},r)}function Ey(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||Y(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:g,errors:v}=n,_=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,g)=>{let v,_=!1,y=null,I=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||yy,l&&(u<0&&g===0?(_=!0,I=null):u===g&&(_=!0,I=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),c=()=>{let m;return v?m=y:_?m=I:d.route.Component?m=S.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,S.createElement(_y,{match:d,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?S.createElement(wy,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var zh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zh||{}),Is=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Is||{});function Sy(e){let t=S.useContext(Gl);return t||Y(!1),t}function Iy(e){let t=S.useContext(fy);return t||Y(!1),t}function ky(e){let t=S.useContext(Sn);return t||Y(!1),t}function $h(e){let t=ky(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function xy(){var e;let t=S.useContext(Mh),n=Iy(Is.UseRouteError),r=$h(Is.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Cy(){let{router:e}=Sy(zh.UseNavigateStable),t=$h(Is.UseNavigateStable),n=S.useRef(!1);return Uh(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xr({fromRouteId:t},s)))},[e,t])}function tn(e){Y(!1)}function Ty(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ot.Pop,navigator:s,static:o=!1,future:a}=e;li()&&Y(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:Xr({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ir(r));let{pathname:f="/",search:d="",hash:g="",state:v=null,key:_="default"}=r,y=S.useMemo(()=>{let I=Kl(f,l);return I==null?null:{location:{pathname:I,search:d,hash:g,state:v,key:_},navigationType:i}},[l,f,d,g,v,_,i]);return y==null?null:S.createElement(En.Provider,{value:u},S.createElement(Js.Provider,{children:n,value:y}))}function Py(e){let{children:t,location:n}=e;return my(za(t),n)}new Promise(()=>{});function za(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,za(r.props.children,s));return}r.type!==tn&&Y(!1),!r.props.index||!r.props.children||Y(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=za(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$a.apply(this,arguments)}function Ny(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ry(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Oy(e,t){return e.button===0&&(!t||t==="_self")&&!Ry(e)}const Ay=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ly="6";try{window.__reactRouterVersion=Ly}catch{}const Dy="startTransition",Tc=Nm[Dy];function by(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=$v({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(d=>{u&&Tc?Tc(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.createElement(Ty,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const jy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",My=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,g=Ny(t,Ay),{basename:v}=S.useContext(En),_,y=!1;if(typeof u=="string"&&My.test(u)&&(_=u,jy))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Kl(w.pathname,v);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let I=hy(u,{relative:i}),p=Uy(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:d});function c(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",$a({},g,{href:_||I,onClick:y||s?r:c,ref:n,target:l}))});var Pc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pc||(Pc={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));function Uy(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=ql(),u=Xs(),f=Fh(e,{relative:o});return S.useCallback(d=>{if(Oy(d,n)){d.preventDefault();let g=r!==void 0?r:Ss(u)===Ss(f);l(e,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,f,r,i,n,e,s,o,a])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bh=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=S.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>S.createElement("svg",{ref:l,...zy,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Bh("lucide",i),...a},[...o.map(([u,f])=>S.createElement(u,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(e,t)=>{const n=S.forwardRef(({className:r,...i},s)=>S.createElement($y,{ref:s,iconNode:t,className:Bh(`lucide-${Fy(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Ze("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ze("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Ze("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=Ze("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Ze("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Vh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rc=At.createContext&&At.createContext(Vh),Jy=["attr","size","title"];function Xy(e,t){if(e==null)return{};var n=Zy(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zy(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function Oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oc(Object(n),!0).forEach(function(r){e0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e0(e,t,n){return t=t0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t0(e){var t=n0(e,"string");return typeof t=="symbol"?t:t+""}function n0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hh(e){return e&&e.map((t,n)=>At.createElement(t.tag,xs({key:n},t.attr),Hh(t.child)))}function Wh(e){return t=>At.createElement(r0,ks({attr:xs({},e.attr)},t),Hh(e.child))}function r0(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=Xy(e,Jy),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),At.createElement("svg",ks({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:xs(xs({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&At.createElement("title",null,s),e.children)};return Rc!==void 0?At.createElement(Rc.Consumer,null,n=>t(n)):t(Vh)}function i0(e){return Wh({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Ac(e){return Wh({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const s0="/assets/logo_healthCare%20copy-CGVMIHWm.jpeg";var Lc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},o0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(g=64)),r.push(n[f],n[d],n[g],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Kh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new a0;const g=s<<2|a>>4;if(r.push(g),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l0=function(e){const t=Kh(e);return Gh.encodeByteArray(t,!0)},qh=function(e){return l0(e).replace(/\./g,"")},Qh=function(e){try{return Gh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=()=>u0().__FIREBASE_DEFAULTS__,d0=()=>{if(typeof process>"u"||typeof Lc>"u")return;const e=Lc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Qh(e[1]);return t&&JSON.parse(t)},Ql=()=>{try{return c0()||d0()||f0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},h0=e=>{var t,n;return(n=(t=Ql())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yh=()=>{var e;return(e=Ql())===null||e===void 0?void 0:e.config},Jh=e=>{var t;return(t=Ql())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function g0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function v0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y0(){const e=de();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Zh(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function w0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="FirebaseError";class et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_0,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?E0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new et(i,a,r)}}function E0(e,t){return e.replace(S0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const S0=/\{\$([^}]+)}/g;function I0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Zr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Dc(s)&&Dc(o)){if(!Zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Er(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Sr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function k0(e,t){const n=new x0(e,t);return n.subscribe.bind(n)}class x0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Mo),i.error===void 0&&(i.error=Mo),i.complete===void 0&&(i.complete=Mo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Mo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=1e3,P0=2,N0=4*60*60*1e3,R0=.5;function bc(e,t=T0,n=P0){const r=t*Math.pow(n,e),i=Math.round(R0*r*(Math.random()-.5)*2);return Math.min(N0,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return e&&e._delegate?e._delegate:e}class Xe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new p0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(L0(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A0(e){return e===nn?void 0:e}function L0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new O0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const b0={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},j0=M.INFO,M0={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},U0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=M0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yl{constructor(t){this.name=t,this._logLevel=j0,this._logHandler=U0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?b0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const F0=(e,t)=>t.some(n=>e instanceof n);let jc,Mc;function z0(){return jc||(jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $0(){return Mc||(Mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tp=new WeakMap,Ba=new WeakMap,np=new WeakMap,Uo=new WeakMap,Jl=new WeakMap;function B0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Bt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&tp.set(n,e)}).catch(()=>{}),Jl.set(t,e),t}function V0(e){if(Ba.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ba.set(e,t)}let Va={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ba.get(e);if(t==="objectStoreNames")return e.objectStoreNames||np.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function H0(e){Va=e(Va)}function W0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fo(this),t,...n);return np.set(r,t.sort?t.sort():[t]),Bt(r)}:$0().includes(e)?function(...t){return e.apply(Fo(this),t),Bt(tp.get(this))}:function(...t){return Bt(e.apply(Fo(this),t))}}function K0(e){return typeof e=="function"?W0(e):(e instanceof IDBTransaction&&V0(e),F0(e,z0())?new Proxy(e,Va):e)}function Bt(e){if(e instanceof IDBRequest)return B0(e);if(Uo.has(e))return Uo.get(e);const t=K0(e);return t!==e&&(Uo.set(e,t),Jl.set(t,e)),t}const Fo=e=>Jl.get(e);function rp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Bt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const G0=["get","getKey","getAll","getAllKeys","count"],q0=["put","add","delete","clear"],zo=new Map;function Uc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zo.get(t))return zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=q0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zo.set(t,s),s}H0(e=>({...e,get:(t,n,r)=>Uc(t,n)||e.get(t,n,r),has:(t,n)=>!!Uc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ha="@firebase/app",Fc="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Yl("@firebase/app"),J0="@firebase/app-compat",X0="@firebase/analytics-compat",Z0="@firebase/analytics",ew="@firebase/app-check-compat",tw="@firebase/app-check",nw="@firebase/auth",rw="@firebase/auth-compat",iw="@firebase/database",sw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",lw="@firebase/installations",uw="@firebase/installations-compat",cw="@firebase/messaging",dw="@firebase/messaging-compat",fw="@firebase/performance",hw="@firebase/performance-compat",pw="@firebase/remote-config",mw="@firebase/remote-config-compat",gw="@firebase/storage",vw="@firebase/storage-compat",yw="@firebase/firestore",ww="@firebase/vertexai-preview",_w="@firebase/firestore-compat",Ew="firebase",Sw="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="[DEFAULT]",Iw={[Ha]:"fire-core",[J0]:"fire-core-compat",[Z0]:"fire-analytics",[X0]:"fire-analytics-compat",[tw]:"fire-app-check",[ew]:"fire-app-check-compat",[nw]:"fire-auth",[rw]:"fire-auth-compat",[iw]:"fire-rtdb",[sw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[lw]:"fire-iid",[uw]:"fire-iid-compat",[cw]:"fire-fcm",[dw]:"fire-fcm-compat",[fw]:"fire-perf",[hw]:"fire-perf-compat",[pw]:"fire-rc",[mw]:"fire-rc-compat",[gw]:"fire-gcs",[vw]:"fire-gcs-compat",[yw]:"fire-fst",[_w]:"fire-fst-compat",[ww]:"fire-vertex","fire-js":"fire-js",[Ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Map,kw=new Map,Ka=new Map;function zc(e,t){try{e.container.addComponent(t)}catch(n){mt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gt(e){const t=e.name;if(Ka.has(t))return mt.debug(`There were multiple attempts to register component ${t}.`),!1;Ka.set(t,e);for(const n of Cs.values())zc(n,e);for(const n of kw.values())zc(n,e);return!0}function sr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ke(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new In("app","Firebase",xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=Sw;function ip(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=Yh()),!n)throw Vt.create("no-options");const s=Cs.get(i);if(s){if(Zr(n,s.options)&&Zr(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const o=new D0(i);for(const l of Ka.values())o.addComponent(l);const a=new Cw(n,r,o);return Cs.set(i,a),a}function sp(e=Wa){const t=Cs.get(e);if(!t&&e===Wa&&Yh())return ip();if(!t)throw Vt.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=Iw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}gt(new Xe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firebase-heartbeat-database",Pw=1,ei="firebase-heartbeat-store";let $o=null;function op(){return $o||($o=rp(Tw,Pw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ei)}catch(n){console.warn(n)}}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),$o}async function Nw(e){try{const n=(await op()).transaction(ei),r=await n.objectStore(ei).get(ap(e));return await n.done,r}catch(t){if(t instanceof et)mt.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mt.warn(n.message)}}}async function $c(e,t){try{const r=(await op()).transaction(ei,"readwrite");await r.objectStore(ei).put(t,ap(e)),await r.done}catch(n){if(n instanceof et)mt.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mt.warn(r.message)}}}function ap(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1024,Ow=30*24*60*60*1e3;class Aw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ow}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bc(),{heartbeatsToSend:r,unsentEntries:i}=Lw(this._heartbeatsCache.heartbeats),s=qh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return mt.warn(n),""}}}function Bc(){return new Date().toISOString().substring(0,10)}function Lw(e,t=Rw){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zh()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Vc(e){return qh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(e){gt(new Xe("platform-logger",t=>new Q0(t),"PRIVATE")),gt(new Xe("heartbeat",t=>new Aw(t),"PRIVATE")),Qe(Ha,Fc,e),Qe(Ha,Fc,"esm2017"),Qe("fire-js","")}bw("");function Xl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jw=lp,up=new In("auth","Firebase",lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Yl("@firebase/auth");function Mw(e,...t){Ts.logLevel<=M.WARN&&Ts.warn(`Auth (${ci}): ${e}`,...t)}function qi(e,...t){Ts.logLevel<=M.ERROR&&Ts.error(`Auth (${ci}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,...t){throw Zl(e,...t)}function Ye(e,...t){return Zl(e,...t)}function cp(e,t,n){const r=Object.assign(Object.assign({},jw()),{[t]:n});return new In("auth","Firebase",r).create(t,{appName:e.name})}function ct(e){return cp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return up.create(e,...t)}function R(e,t,...n){if(!e)throw Zl(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qi(t),new Error(t)}function vt(e,t){e||ot(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Uw(){return Hc()==="http:"||Hc()==="https:"}function Hc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||Xh()||"connection"in navigator)?navigator.onLine:!0}function zw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n){this.shortDelay=t,this.longDelay=n,vt(n>t,"Short delay should be less than long delay!"),this.isMobile=m0()||v0()}get(){return Fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t){vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new di(3e4,6e4);function Qt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Yt(e,t,n,r,i={}){return fp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ui(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return g0()||(u.referrerPolicy="no-referrer"),dp.fetch()(hp(e,e.config.apiHost,n,a),u)})}async function fp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$w),t);try{const i=new Hw(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Di(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Di(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Di(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cp(e,f,u);$e(e,f)}}catch(i){if(i instanceof et)throw i;$e(e,"network-request-failed",{message:String(i)})}}async function fi(e,t,n,r,i={}){const s=await Yt(e,t,n,r,i);return"mfaPendingCredential"in s&&$e(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?eu(e.config,i):`${e.config.apiScheme}://${i}`}function Vw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Bw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(e,t,r);return i.customData._tokenResponse=n,i}function Wc(e){return e!==void 0&&e.enterprise!==void 0}class Ww{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Vw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Kw(e,t){return Yt(e,"GET","/v2/recaptchaConfig",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(e,t){return Yt(e,"POST","/v1/accounts:delete",t)}async function pp(e,t){return Yt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qw(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=tu(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ar(Bo(i.auth_time)),issuedAtTime:Ar(Bo(i.iat)),expirationTime:Ar(Bo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bo(e){return Number(e)*1e3}function tu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qh(n);return i?JSON.parse(i):(qi("Failed to decode base64 JWT payload"),null)}catch(i){return qi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kc(e){const t=tu(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof et&&Qw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ti(e,pp(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?mp(s.providerUserInfo):[],a=Xw(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function Jw(e){const t=tt(e);await Ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Xw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function mp(e){return e.map(t=>{var{providerId:n}=t,r=Xl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t){const n=await fp(e,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=hp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function e1(e,t){return Yt(e,"POST","/v2/accounts:revokeToken",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){R(t.length!==0,"internal-error");const n=Kc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zw(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wn;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class at{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Xl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ti(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qw(this,t)}reload(){return Jw(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new at(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(ct(this.auth));const t=await this.getIdToken();return await ti(this,Gw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:T,stsTokenManager:P}=n;R(m&&P,t,"internal-error");const N=Wn.fromJSON(this.name,P);R(typeof m=="string",t,"internal-error"),_t(d,t.name),_t(g,t.name),R(typeof w=="boolean",t,"internal-error"),R(typeof k=="boolean",t,"internal-error"),_t(v,t.name),_t(_,t.name),_t(y,t.name),_t(I,t.name),_t(p,t.name),_t(c,t.name);const F=new at({uid:m,auth:t,email:g,emailVerified:w,displayName:d,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:c});return T&&Array.isArray(T)&&(F.providerData=T.map(L=>Object.assign({},L))),I&&(F._redirectEventId=I),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new Wn;i.updateFromServerResponse(n);const s=new at({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ps(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];R(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Wn;a.updateFromIdToken(r);const l=new at({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map;function lt(e){vt(e instanceof Function,"Expected a class definition");let t=Gc.get(e);return t?(vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Gc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gp.type="NONE";const qc=gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){return`firebase:${e}:${t}:${n}`}class Kn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?at._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Kn(lt(qc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||lt(qc);const o=Qi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const d=at._fromJSON(t,f);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Kn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Kn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_p(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sp(t))return"Blackberry";if(Ip(t))return"Webos";if(yp(t))return"Safari";if((t.includes("chrome/")||wp(t))&&!t.includes("edge/"))return"Chrome";if(Ep(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(e=de()){return/firefox\//i.test(e)}function yp(e=de()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wp(e=de()){return/crios\//i.test(e)}function _p(e=de()){return/iemobile/i.test(e)}function Ep(e=de()){return/android/i.test(e)}function Sp(e=de()){return/blackberry/i.test(e)}function Ip(e=de()){return/webos/i.test(e)}function nu(e=de()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function t1(e=de()){var t;return nu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function n1(){return y0()&&document.documentMode===10}function kp(e=de()){return nu(e)||Ep(e)||Ip(e)||Sp(e)||/windows phone/i.test(e)||_p(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(e,t=[]){let n;switch(e){case"Browser":n=Qc(de());break;case"Worker":n=`${Qc(de())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(e,t={}){return Yt(e,"GET","/v2/passwordPolicy",Qt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=6;class o1{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:s1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new r1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await pp(this,{idToken:t}),r=await at._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=zw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ke(this.app))return Promise.reject(ct(this));const n=t?tt(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ke(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await i1(this),n=new o1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new In("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await e1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&lt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Mw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kn(e){return tt(e)}class Yc{constructor(t){this.auth=t,this.observer=null,this.addObserver=k0(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l1(e){Zs=e}function Cp(e){return Zs.loadJS(e)}function u1(){return Zs.recaptchaEnterpriseScript}function c1(){return Zs.gapiScript}function d1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const f1="recaptcha-enterprise",h1="NO_RECAPTCHA";class p1{constructor(t){this.type=f1,this.auth=kn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Kw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ww(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Wc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(h1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Wc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=u1();l.length!==0&&(l+=a),Cp(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Jc(e,t,n,r=!1){const i=new p1(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qa(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Jc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(e,t){const n=sr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zr(s,t??{}))return i;$e(i,"already-initialized")}return n.initialize({options:t})}function g1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function v1(e,t,n){const r=kn(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Tp(t),{host:o,port:a}=y1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),w1()}function Tp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function y1(e){const t=Tp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xc(o)}}}function Xc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function w1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function _1(e,t){return Yt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(e,t){return fi(e,"POST","/v1/accounts:signInWithPassword",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(e,t){return fi(e,"POST","/v1/accounts:signInWithEmailLink",Qt(e,t))}async function I1(e,t){return fi(e,"POST","/v1/accounts:signInWithEmailLink",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ru{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ni(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ni(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qa(t,n,"signInWithPassword",E1);case"emailLink":return S1(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qa(t,r,"signUpPassword",_1);case"emailLink":return I1(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t){return fi(e,"POST","/v1/accounts:signInWithIdp",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="http://localhost";class mn extends ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Xl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Gn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Gn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Gn(t,n)}buildRequest(){const t={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ui(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function C1(e){const t=Er(Sr(e)).link,n=t?Er(Sr(t)).deep_link_id:null,r=Er(Sr(e)).deep_link_id;return(r?Er(Sr(r)).link:null)||r||n||t||e}class iu{constructor(t){var n,r,i,s,o,a;const l=Er(Sr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,d=x1((i=l.mode)!==null&&i!==void 0?i:null);R(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=C1(t);try{return new iu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(t,n){return ni._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=iu.parseLink(n);return R(r,"argument-error"),ni._fromEmailAndCode(t,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Pp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends hi{constructor(){super("facebook.com")}static credential(t){return mn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return mn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends hi{constructor(){super("github.com")}static credential(t){return mn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends hi{constructor(){super("twitter.com")}static credential(t,n){return mn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(e,t){return fi(e,"POST","/v1/accounts:signUp",Qt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await at._fromIdTokenResponse(t,r,i),o=Zc(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Zc(r);return new gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Zc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends et{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ns(t,n,r,i)}}function Np(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(e,s,t,r):s})}async function P1(e,t,n=!1){const r=await ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(e,t,n=!1){const{auth:r}=e;if(Ke(r.app))return Promise.reject(ct(r));const i="reauthenticate";try{const s=await ti(e,Np(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=tu(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(e.uid===a,r,"user-mismatch"),gn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(e,t,n=!1){if(Ke(e.app))return Promise.reject(ct(e));const r="signIn",i=await Np(e,r,t),s=await gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function R1(e,t){return Rp(kn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(e){const t=kn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function O1(e,t,n){if(Ke(e.app))return Promise.reject(ct(e));const r=kn(e),o=await Qa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",T1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Op(e),l}),a=await gn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function A1(e,t,n){return Ke(e.app)?Promise.reject(ct(e)):R1(tt(e),or.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Op(e),r})}function L1(e,t,n,r){return tt(e).onIdTokenChanged(t,n,r)}function D1(e,t,n){return tt(e).beforeAuthStateChanged(t,n)}function b1(e){return tt(e).signOut()}const Rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=1e3,M1=10;class Lp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);n1()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,M1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Lp.type="LOCAL";const U1=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Dp.type="SESSION";const bp=Dp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new eo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await F1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=su("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function $1(e){Je().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function B1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function H1(){return jp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebaseLocalStorageDb",W1=1,Os="firebaseLocalStorage",Up="fbase_key";class pi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function to(e,t){return e.transaction([Os],t?"readwrite":"readonly").objectStore(Os)}function K1(){const e=indexedDB.deleteDatabase(Mp);return new pi(e).toPromise()}function Ya(){const e=indexedDB.open(Mp,W1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Os,{keyPath:Up})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Os)?t(r):(r.close(),await K1(),t(await Ya()))})})}async function ed(e,t,n){const r=to(e,!0).put({[Up]:t,value:n});return new pi(r).toPromise()}async function G1(e,t){const n=to(e,!1).get(t),r=await new pi(n).toPromise();return r===void 0?null:r.value}function td(e,t){const n=to(e,!0).delete(t);return new pi(n).toPromise()}const q1=800,Q1=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(H1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||V1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ya();return await ed(t,Rs,"1"),await td(t,Rs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ed(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>G1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>td(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=to(i,!1).getAll();return new pi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const Y1=Fp;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(e,t){return t?lt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends ru{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Gn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Gn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function X1(e){return Rp(e.auth,new ou(e),e.bypassAuthState)}function Z1(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),N1(n,new ou(e),e.bypassAuthState)}async function e_(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),P1(n,new ou(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return X1;case"linkViaPopup":case"linkViaRedirect":return e_;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:$e(this.auth,"internal-error")}}resolve(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new di(2e3,1e4);class Un extends zp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const t=su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,t_.get())};t()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="pendingRedirect",Yi=new Map;class r_ extends zp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yi.get(this.auth._key());if(!t){try{const r=await i_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yi.set(this.auth._key(),t)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i_(e,t){const n=a_(t),r=o_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function s_(e,t){Yi.set(e._key(),t)}function o_(e){return lt(e._redirectPersistence)}function a_(e){return Qi(n_,e.config.apiKey,e.name)}async function l_(e,t,n=!1){if(Ke(e.app))return Promise.reject(ct(e));const r=kn(e),i=J1(r,t),o=await new r_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=10*60*1e3;class c_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!d_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!$p(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=u_&&this.cachedEventUids.clear(),this.cachedEventUids.has(nd(t))}saveEventToCache(t){this.cachedEventUids.add(nd(t)),this.lastProcessedEventTime=Date.now()}}function nd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function $p({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function d_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(e,t={}){return Yt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p_=/^https?/;async function m_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await f_(e);for(const n of t)try{if(g_(n))return}catch{}$e(e,"unauthorized-domain")}function g_(e){const t=Ga(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!p_.test(n))return!1;if(h_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new di(3e4,6e4);function rd(){const e=Je().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function y_(e){return new Promise((t,n)=>{var r,i,s;function o(){rd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rd(),n(Ye(e,"network-request-failed"))},timeout:v_.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=d1("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ye(e,"network-request-failed"))},Cp(`${c1()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ji=null,t})}let Ji=null;function w_(e){return Ji=Ji||y_(e),Ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new di(5e3,15e3),E_="__/auth/iframe",S_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x_(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?eu(t,S_):`https://${e.config.authDomain}/${E_}`,r={apiKey:t.apiKey,appName:e.name,v:ci},i=k_.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ui(r).slice(1)}`}async function C_(e){const t=await w_(e),n=Je().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:x_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(e,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},__.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,N_=600,R_="_blank",O_="http://localhost";class id{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A_(e,t,n,r=P_,i=N_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},T_),{width:r.toString(),height:i.toString(),top:s,left:o}),u=de().toLowerCase();n&&(a=wp(u)?R_:n),vp(u)&&(t=t||O_,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,_])=>`${g}${v}=${_},`,"");if(t1(u)&&a!=="_self")return L_(t||"",a),new id(null);const d=window.open(t||"",a,f);R(d,e,"popup-blocked");try{d.focus()}catch{}return new id(d)}function L_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__/auth/handler",b_="emulator/auth/handler",j_=encodeURIComponent("fac");async function sd(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(t instanceof Pp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",I0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(t instanceof hi){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${j_}=${encodeURIComponent(l)}`:"";return`${M_(e)}?${ui(a).slice(1)}${u}`}function M_({config:e}){return e.emulator?eu(e,b_):`https://${e.authDomain}/${D_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="webStorageSupport";class U_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bp,this._completeRedirectFn=l_,this._overrideRedirectResult=s_}async _openPopup(t,n,r,i){var s;vt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sd(t,n,r,Ga(),i);return A_(t,o,su())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await sd(t,n,r,Ga(),i);return $1(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await C_(t),r=new c_(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vo,{type:Vo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vo];o!==void 0&&n(!!o),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return kp()||yp()||nu()}}const F_=U_;var od="@firebase/auth",ad="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B_(e){gt(new Xe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xp(e)},u=new a1(r,i,s,l);return g1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),gt(new Xe("auth-internal",t=>{const n=kn(t.getProvider("auth").getImmediate());return(r=>new z_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(od,ad,$_(e)),Qe(od,ad,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=5*60,H_=Jh("authIdTokenMaxAge")||V_;let ld=null;const W_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>H_)return;const i=n==null?void 0:n.token;ld!==i&&(ld=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K_(e=sp()){const t=sr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=m1(e,{popupRedirectResolver:F_,persistence:[Y1,U1,bp]}),r=Jh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=W_(s.toString());D1(n,o,()=>o(n.currentUser)),L1(n,a=>o(a))}}const i=h0("auth");return i&&v1(n,`http://${i}`),n}function G_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}l1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",G_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B_("Browser");var q_="firebase",Q_="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(q_,Q_,"app");const Bp="@firebase/installations",au="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=1e4,Hp=`w:${au}`,Wp="FIS_v2",Y_="https://firebaseinstallations.googleapis.com/v1",J_=60*60*1e3,X_="installations",Z_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vn=new In(X_,Z_,eE);function Kp(e){return e instanceof et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp({projectId:e}){return`${Y_}/projects/${e}/installations`}function qp(e){return{token:e.token,requestStatus:2,expiresIn:nE(e.expiresIn),creationTime:Date.now()}}async function Qp(e,t){const r=(await t.json()).error;return vn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tE(e,{refreshToken:t}){const n=Yp(e);return n.append("Authorization",rE(t)),n}async function Jp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function nE(e){return Number(e.replace("s","000"))}function rE(e){return`${Wp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gp(e),i=Yp(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Wp,appId:e.appId,sdkVersion:Hp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:qp(u.authToken)}}else throw await Qp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=/^[cdef][\w-]{21}$/,Ja="";function aE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lE(e);return oE.test(n)?n:Ja}catch{return Ja}}function lE(e){return sE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Map;function em(e,t){const n=no(e);tm(n,t),uE(n,t)}function tm(e,t){const n=Zp.get(e);if(n)for(const r of n)r(t)}function uE(e,t){const n=cE();n&&n.postMessage({key:e,fid:t}),dE()}let an=null;function cE(){return!an&&"BroadcastChannel"in self&&(an=new BroadcastChannel("[Firebase] FID Change"),an.onmessage=e=>{tm(e.data.key,e.data.fid)}),an}function dE(){Zp.size===0&&an&&(an.close(),an=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="firebase-installations-database",hE=1,yn="firebase-installations-store";let Ho=null;function lu(){return Ho||(Ho=rp(fE,hE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yn)}}})),Ho}async function As(e,t){const n=no(e),i=(await lu()).transaction(yn,"readwrite"),s=i.objectStore(yn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&em(e,t.fid),t}async function nm(e){const t=no(e),r=(await lu()).transaction(yn,"readwrite");await r.objectStore(yn).delete(t),await r.done}async function ro(e,t){const n=no(e),i=(await lu()).transaction(yn,"readwrite"),s=i.objectStore(yn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&em(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(e){let t;const n=await ro(e.appConfig,r=>{const i=pE(r),s=mE(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ja?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pE(e){const t=e||{fid:aE(),registrationStatus:0};return rm(t)}function mE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vE(e)}:{installationEntry:t}}async function gE(e,t){try{const n=await iE(e,t);return As(e.appConfig,n)}catch(n){throw Kp(n)&&n.customData.serverCode===409?await nm(e.appConfig):await As(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vE(e){let t=await ud(e.appConfig);for(;t.registrationStatus===1;)await Xp(100),t=await ud(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await uu(e);return r||n}return t}function ud(e){return ro(e,t=>{if(!t)throw vn.create("installation-not-found");return rm(t)})}function rm(e){return yE(e)?{fid:e.fid,registrationStatus:0}:e}function yE(e){return e.registrationStatus===1&&e.registrationTime+Vp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE({appConfig:e,heartbeatServiceProvider:t},n){const r=_E(e,n),i=tE(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Hp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Jp(()=>fetch(r,a));if(l.ok){const u=await l.json();return qp(u)}else throw await Qp("Generate Auth Token",l)}function _E(e,{fid:t}){return`${Gp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(e,t=!1){let n;const r=await ro(e.appConfig,s=>{if(!im(s))throw vn.create("not-registered");const o=s.authToken;if(!t&&IE(o))return s;if(o.requestStatus===1)return n=EE(e,t),s;{if(!navigator.onLine)throw vn.create("app-offline");const a=xE(s);return n=SE(e,a),a}});return n?await n:r.authToken}async function EE(e,t){let n=await cd(e.appConfig);for(;n.authToken.requestStatus===1;)await Xp(100),n=await cd(e.appConfig);const r=n.authToken;return r.requestStatus===0?cu(e,t):r}function cd(e){return ro(e,t=>{if(!im(t))throw vn.create("not-registered");const n=t.authToken;return CE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function SE(e,t){try{const n=await wE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await As(e.appConfig,r),n}catch(n){if(Kp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await As(e.appConfig,r)}throw n}}function im(e){return e!==void 0&&e.registrationStatus===2}function IE(e){return e.requestStatus===2&&!kE(e)}function kE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+J_}function xE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function CE(e){return e.requestStatus===1&&e.requestTime+Vp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(e){const t=e,{installationEntry:n,registrationPromise:r}=await uu(t);return r?r.catch(console.error):cu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(e,t=!1){const n=e;return await NE(n),(await cu(n,t)).token}async function NE(e){const{registrationPromise:t}=await uu(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(e){if(!e||!e.options)throw Wo("App Configuration");if(!e.name)throw Wo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Wo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Wo(e){return vn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="installations",OE="installations-internal",AE=e=>{const t=e.getProvider("app").getImmediate(),n=RE(t),r=sr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},LE=e=>{const t=e.getProvider("app").getImmediate(),n=sr(t,sm).getImmediate();return{getId:()=>TE(n),getToken:i=>PE(n,i)}};function DE(){gt(new Xe(sm,AE,"PUBLIC")),gt(new Xe(OE,LE,"PRIVATE"))}DE();Qe(Bp,au);Qe(Bp,au,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="analytics",bE="firebase_id",jE="origin",ME=60*1e3,UE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",du="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Yl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new In("analytics","Analytics",FE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(e){if(!e.startsWith(du)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function om(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $E(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function BE(e,t){const n=$E("firebase-js-sdk-policy",{createScriptURL:zE}),r=document.createElement("script"),i=`${du}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function VE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function HE(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await om(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,s)}async function WE(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await om(n);for(const l of o){const u=a.find(d=>d.measurementId===l),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){we.error(s)}}function KE(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await WE(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await HE(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){we.error(a)}}return i}function GE(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=KE(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function qE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(du)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=30,YE=1e3;class JE{constructor(t={},n=YE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const am=new JE;function XE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ZE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:XE(r)},s=UE.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eS(e,t=am,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ie.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rS;return setTimeout(async()=>{a.abort()},ME),lm({appId:r,apiKey:i,measurementId:s},o,a,t)}async function lm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=am){var s;const{appId:o,measurementId:a}=e;try{await tS(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ZE(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!nS(u)){if(i.deleteThrottleMetadata(o),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?bc(n,i.intervalMillis,QE):bc(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,d),we.debug(`Calling attemptFetch again in ${f} millis`),lm(e,d,r,i)}}function tS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nS(e){if(!(e instanceof et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class rS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function iS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(){if(Zh())try{await ep()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oS(e,t,n,r,i,s,o){var a;const l=eS(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>we.error(v)),t.push(l);const u=sS().then(v=>{if(v)return r.getId()}),[f,d]=await Promise.all([l,u]);qE(s)||BE(s,f.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[jE]="firebase",g.update=!0,d!=null&&(g[bE]=d),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t){this.app=t}_delete(){return delete Lr[this.app.options.appId],Promise.resolve()}}let Lr={},dd=[];const fd={};let Ko="dataLayer",lS="gtag",hd,um,pd=!1;function uS(){const e=[];if(Xh()&&e.push("This is a browser extension environment."),w0()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function cS(e,t,n){uS();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Lr[r]!=null)throw Ie.create("already-exists",{id:r});if(!pd){VE(Ko);const{wrappedGtag:s,gtagCore:o}=GE(Lr,dd,fd,Ko,lS);um=s,hd=o,pd=!0}return Lr[r]=oS(e,dd,fd,t,hd,Ko,n),new aS(e)}function dS(e=sp()){e=tt(e);const t=sr(e,Ls);return t.isInitialized()?t.getImmediate():fS(e)}function fS(e,t={}){const n=sr(e,Ls);if(n.isInitialized()){const i=n.getImmediate();if(Zr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function hS(e,t,n,r){e=tt(e),iS(um,Lr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const md="@firebase/analytics",gd="0.10.8";function pS(){gt(new Xe(Ls,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return cS(r,i,n)},"PUBLIC")),gt(new Xe("analytics-internal",e,"PRIVATE")),Qe(md,gd),Qe(md,gd,"esm2017");function e(t){try{const n=t.getProvider(Ls).getImmediate();return{logEvent:(r,i,s)=>hS(n,r,i,s)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}pS();const mS={apiKey:"AIzaSyAhuS973-eBhWcQQVhYAl5qhZaBSFAXOKw",authDomain:"neuro-healthcare.firebaseapp.com",projectId:"neuro-healthcare",storageBucket:"neuro-healthcare.appspot.com",messagingSenderId:"317902053700",appId:"1:317902053700:web:cee078a405013abb60f711",measurementId:"G-DBK3R6JDFM"},gS=ip(mS);dS(gS);const Ds=K_();function io(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1),[i,s]=S.useState(null),o=()=>t(!e),a=()=>r(!n);S.useEffect(()=>{const u=f=>{f.target.closest(".profile-menu")||r(!1)};return document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}},[]),S.useEffect(()=>{const u=Ds.onAuthStateChanged(f=>{s(f)});return()=>u()},[]);const l=()=>{b1(Ds).then(()=>{console.log("User signed out"),s(null)}).catch(u=>{console.error("Error signing out:",u)})};return h.jsxs("header",{className:"fixed top-0 left-0 right-0 z-10",children:[h.jsx("div",{className:"bg-white/70 backdrop-blur-md shadow-md",children:h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex justify-between items-center py-4",children:[h.jsx("img",{src:s0,alt:"Neuro Health Care Logo",className:"w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"}),h.jsxs("nav",{className:"hidden md:flex space-x-4 lg:space-x-6",children:[h.jsx(Ve,{className:"text-sm lg:text-base hover:text-green-600 transition-colors",to:"/",children:"Home"}),h.jsx(Ve,{className:"text-sm lg:text-base hover:text-green-600 transition-colors",to:"/services",children:"Services"}),h.jsx(Ve,{className:"text-sm lg:text-base hover:text-green-600 transition-colors",to:"/contact",children:"Contact"}),h.jsx(Ve,{className:"text-sm lg:text-base hover:text-green-600 transition-colors",to:"/feedback",children:"Feedback"})]}),h.jsxs("div",{className:"flex items-center space-x-4 md:space-x-6",children:[i?h.jsxs("div",{className:"relative profile-menu",children:[h.jsxs("button",{className:"flex items-center space-x-2 focus:outline-none",onClick:a,children:[i.photoURL?h.jsx("img",{src:i.photoURL,alt:"User profile",className:"w-8 h-8 rounded-full"}):h.jsx("div",{className:"w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white",children:i.email[0].toUpperCase()}),h.jsx("span",{className:"hidden md:inline text-sm text-gray-700",children:i.displayName||i.email})]}),n&&h.jsx("div",{className:"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50",children:h.jsx("button",{onClick:l,className:"block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left",children:"Sign Out"})})]}):h.jsx(Ve,{className:"hidden md:block bg-green-600 text-white px-4 py-2 text-sm lg:text-base lg:px-6 lg:py-2 rounded-full hover:bg-green-700 transition-colors",to:"/login",children:"Login"}),h.jsx("button",{onClick:o,className:"md:hidden text-2xl text-green-600 focus:outline-none",children:e?h.jsx(Ac,{}):h.jsx(i0,{})})]})]})})}),h.jsxs("div",{className:`fixed inset-0 bg-white/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${e?"opacity-100 visible":"opacity-0 invisible pointer-events-none"} md:hidden`,children:[h.jsx("button",{onClick:o,className:"absolute top-4 right-4 text-2xl text-green-600 focus:outline-none","aria-label":"Close menu",children:h.jsx(Ac,{})}),h.jsx(Ve,{onClick:o,className:"text-xl hover:text-green-600 transition-colors",to:"/",children:"Home"}),h.jsx(Ve,{onClick:o,className:"text-xl hover:text-green-600 transition-colors",to:"/services",children:"Services"}),h.jsx(Ve,{onClick:o,className:"text-xl hover:text-green-600 transition-colors",to:"/contact",children:"Contact"}),h.jsx(Ve,{onClick:o,className:"text-xl hover:text-green-600 transition-colors",to:"/feedback",children:"Feedback"}),i?h.jsx("button",{onClick:()=>{o(),l()},className:"bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors",children:"Sign Out"}):h.jsx(Ve,{onClick:o,className:"bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors",to:"/login",children:"Login"})]})]})}const so=()=>h.jsx("footer",{className:"mt-16 border-t pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"font-bold mb-2 text-green-600",children:"Service Hours"}),h.jsx("p",{className:"text-gray-600",children:"24 hours a day, 7 days a week"})]}),h.jsxs("div",{className:"mt-4 md:mt-0 flex items-center text-green-600",children:[h.jsx(Hy,{className:"mr-2"}),h.jsx("span",{children:"Always Open"})]}),h.jsxs("div",{className:"mt-4 md:mt-0 flex items-center",children:[h.jsx(Gi,{className:"mr-2 text-green-600"}),h.jsx("span",{className:"text-gray-600",children:"Emergency: 6205625081"})]}),h.jsxs("div",{className:"mt-4 md:mt-0 flex items-center",children:[h.jsx(Wy,{className:"mr-2 text-green-600"}),h.jsxs("select",{className:"bg-white border-green-600 border text-gray-600 rounded",children:[h.jsx("option",{children:"English"}),h.jsx("option",{children:"Punjabi"}),h.jsx("option",{children:"Hindi"})]})]})]})}),vS="/assets/internship%20copy-AtMDVrwz.png";function yS(){return h.jsxs("div",{className:"bg-white min-h-screen text-gray-800",children:[h.jsx(io,{}),h.jsx("main",{className:"pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[h.jsxs("div",{className:"md:w-1/2",children:[h.jsx("h1",{className:"text-8xl font-bold mb-6 text-green-600",children:"Your health comes first"}),h.jsx("p",{className:"text-3xl mb-8 text-gray-600",children:"24/7 expert care in the comfort of your home"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{title:"Home Nursing",desc:"Professional care tailored to your needs"},{title:"ICU Setup",desc:"Advanced medical care at home"},{title:"Emergency Services",desc:"Rapid response when you need it most"}].map((e,t)=>h.jsxs("div",{className:"bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",children:[h.jsx("h3",{className:"font-bold mb-2 text-green-600",children:e.title}),h.jsx("p",{className:"text-sm text-gray-600 mb-4",children:e.desc}),h.jsx(Vy,{className:"text-green-600"})]},t))})]}),h.jsx("div",{className:"md:w-1/2 mt-8 md:mt-0",children:h.jsx("img",{src:vS,alt:"Healthcare professional caring for a patient",className:"rounded-lg w-full h-auto"})})]})}),h.jsx(so,{})]})}const wS="/assets/contact_healthcare%20copy-C4hPRyyZ.jpeg";function _S(){return h.jsxs("div",{className:"bg-white min-h-screen text-gray-800",children:[h.jsx(io,{}),h.jsxs("main",{className:"pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto",children:[h.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-8 text-green-600 text-center",children:"Contact Us"}),h.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[h.jsxs("div",{className:"bg-green-50 p-6 rounded-lg shadow-md",children:[h.jsx("img",{src:wS,alt:"Neuro Health Care Contact Information",width:600,height:400,className:"w-full h-auto rounded-lg mb-6"}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx(qy,{className:"w-5 h-5 text-green-600 mr-2 flex-shrink-2"}),h.jsx("p",{children:"Shop No. 01, Dakoha, Rama Mandi, Jalandhar-144005"})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx(Gy,{className:"w-5 h-5 text-green-600 mr-2 flex-shrink-2"}),h.jsx("a",{href:"mailto:neurohealthcareathome@gmail.com",className:"hover:text-green-600 break-all",children:"neurohealthcareathome@gmail.com"})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx(Ky,{className:"w-5 h-5 text-green-600 mr-2 flex-shrink-0"}),h.jsx("a",{href:"https://www.instagram.com/neuro_health_care",target:"_blank",rel:"noopener noreferrer",className:"hover:text-green-600",children:"@neuro_health_care"})]})]})]}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-green-50 p-6 rounded-lg shadow-md",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4 text-green-600",children:"Managing Directors"}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold",children:"Dr. Himanshu Kumar"}),h.jsxs("div",{className:"flex items-center",children:[h.jsx(Gi,{className:"w-4 h-4 text-green-600 mr-2 flex-shrink-0"}),h.jsx("a",{href:"tel:88378-10051",className:"hover:text-green-600",children:"88378-10051"})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold",children:"Harmeet Singh"}),h.jsxs("div",{className:"flex items-center",children:[h.jsx(Gi,{className:"w-4 h-4 text-green-600 mr-2 flex-shrink-0"}),h.jsx("a",{href:"tel:83605-47052",className:"hover:text-green-600",children:"83605-47052"})]})]})]})]}),h.jsxs("div",{className:"bg-green-50 p-6 rounded-lg shadow-md",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4 text-green-600",children:"Head of Department"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold",children:"Nishandeep Singh"}),h.jsxs("div",{className:"flex items-center",children:[h.jsx(Gi,{className:"w-4 h-4 text-green-600 mr-2 flex-shrink-0"}),h.jsx("a",{href:"tel:73475-61053",className:"hover:text-green-600",children:"73475-61053"})]})]})]})]})]})]}),h.jsx(so,{})]})}const ES=[{name:"ICU Setup At Home",description:"Professional ICU-level care in the comfort of your home, equipped with advanced medical technology and 24/7 monitoring.",rating:4.9},{name:"Patient Care Taker Services",description:"Compassionate and skilled caregivers providing personalized assistance for patients with various health conditions.",rating:4.8},{name:"Baby Sitting At Home",description:"Experienced and trustworthy babysitters ensuring the safety and well-being of your little ones in your home environment.",rating:4.7},{name:"Senior Citizen Care Taker Services",description:"Dedicated care for elderly individuals, offering companionship, assistance with daily activities, and medical support.",rating:4.9},{name:"Home Nursing Services For Fistula Patients",description:"Specialized nursing care for fistula patients, providing expert wound management and personalized treatment plans.",rating:4.8},{name:"Cancer Patients Care",description:"Comprehensive care for cancer patients, including pain management, emotional support, and assistance with treatment side effects.",rating:4.9},{name:"Corona Patients Care",description:"Dedicated care for COVID-19 patients, ensuring proper isolation, symptom management, and monitoring of vital signs.",rating:4.8},{name:"Physiotherapy Services",description:"Professional physiotherapy sessions at home, helping patients recover mobility and manage pain through targeted exercises.",rating:4.7},{name:"Equipments on Rent",description:"Wide range of medical equipment available for rent, including hospital beds, oxygen concentrators, and mobility aids.",rating:4.6},{name:"Wound Vacc Machine for wound Care",description:"Advanced wound care using Vacuum-Assisted Closure (VAC) therapy, promoting faster healing and reducing infection risks.",rating:4.8},{name:"Sample Collection",description:"Convenient at-home sample collection for various medical tests, ensuring accurate results without the need to visit a lab.",rating:4.7},{name:"Medicine at Home",description:"Timely delivery of prescribed medications to your doorstep, ensuring you never miss a dose.",rating:4.8},{name:"Doctor on Call",description:"24/7 availability of qualified doctors for home visits, providing prompt medical attention when you need it most.",rating:4.9},{name:"Cardiac Ambulance Services",description:"Fully equipped cardiac ambulances with trained paramedics, ready to respond to heart-related emergencies at a moment's notice.",rating:4.9}];function SS(){const[e,t]=S.useState(null);return h.jsxs("div",{className:"bg-white min-h-screen text-gray-800",children:[h.jsx(io,{}),h.jsxs("main",{className:"pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[h.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-8 text-green-600",children:"Our Services"}),h.jsx("p",{className:"text-xl mb-12 text-gray-600",children:"Comprehensive home healthcare solutions tailored to your needs"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ES.map((n,r)=>h.jsxs("div",{className:"bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group",children:[h.jsx("h3",{className:"font-bold text-lg mb-3 text-green-600 group-hover:text-green-700 transition-colors",children:n.name}),h.jsx("p",{className:"text-gray-600 mb-4",children:"Expert care and support for your specific healthcare needs."}),h.jsxs("button",{onClick:()=>t(n),className:"inline-flex items-center text-green-600 hover:text-green-700 transition-colors",children:["Learn more ",h.jsx(By,{className:"ml-2 w-4 h-4"})]})]},r))})]}),e&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md w-full",children:[h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[h.jsx("h2",{className:"text-2xl font-bold text-green-600",children:e.name}),h.jsx("button",{onClick:()=>t(null),className:"text-gray-500 hover:text-gray-700",children:h.jsx(Yy,{className:"w-6 h-6"})})]}),h.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("span",{className:"text-yellow-400 mr-1",children:h.jsx(Qy,{className:"w-5 h-5 fill-current"})}),h.jsx("span",{className:"font-bold text-gray-700",children:e.rating.toFixed(1)}),h.jsx("span",{className:"text-gray-500 ml-1",children:"/ 5.0"})]})]})}),h.jsx(so,{})]})}const cm="/assets/image%20copy%202-snarVbZN.png",IS=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(!1),[f,d]=S.useState(""),g=ql(),v=()=>{u(!l)},_=y=>{if(y.preventDefault(),e===""||n===""||i===""||o===""){d("Please fill in all fields");return}if(i!==o){d("Passwords do not match");return}O1(Ds,n,i).then(I=>{d(""),g("/login")}).catch(I=>{switch(I.code){case"auth/email-already-in-use":d("Email already in use.");break;case"auth/invalid-email":d("Invalid email format.");break;case"auth/weak-password":d("Password should be at least 6 characters.");break;default:d(I.message)}})};return h.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-100 to-white",style:{backgroundImage:`url(${cm})`,backgroundSize:"cover",backgroundPosition:"center"},children:h.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full",children:[h.jsx("h2",{className:"text-2xl font-semibold text-center mb-6",children:"Create your account"}),f&&h.jsx("p",{className:"text-red-500 text-sm mb-4",children:f}),h.jsxs("form",{onSubmit:_,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),h.jsx("input",{id:"name",type:"text",value:e,onChange:y=>t(y.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Enter your name"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),h.jsx("input",{id:"email",type:"email",value:n,onChange:y=>r(y.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Enter your email"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),h.jsx("input",{id:"password",type:l?"text":"password",value:i,onChange:y=>s(y.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Create a password"}),h.jsx("button",{type:"button",onClick:v,className:"absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none",children:l?"👁️":"🙈"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("label",{htmlFor:"confirm-password",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),h.jsx("input",{id:"confirm-password",type:l?"text":"password",value:o,onChange:y=>a(y.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Confirm your password"})]}),h.jsx("button",{type:"submit",className:"w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200",children:"Sign Up"}),h.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["Already have an account?"," ",h.jsx("a",{href:"/login",className:"text-green-600 font-semibold hover:underline",children:"Log in"})]})]})]})})},kS=()=>{const[e,t]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(!1),o=ql(),a=()=>{s(!i)},l=u=>{u.preventDefault(),A1(Ds,e,n).then(f=>{f.user&&o("/")}).catch(f=>{f.code==="auth/user-not-found"?(console.error("User not found. Redirecting to signup."),o("/signup")):f.code==="auth/wrong-password"?alert("Incorrect password. Please try again."):alert(f.message)})};return h.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-100 to-white",style:{backgroundImage:`url(${cm})`,backgroundSize:"cover",backgroundPosition:"center"},children:h.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full",children:[h.jsx("h2",{className:"text-2xl font-semibold text-center mb-6",children:"Welcome back"}),h.jsxs("form",{onSubmit:l,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Enter an email"}),h.jsx("input",{id:"email",type:"email",value:e,onChange:u=>t(u.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Enter your email"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),h.jsx("input",{id:"password",type:i?"text":"password",value:n,onChange:u=>r(u.target.value),required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500",placeholder:"Password"}),h.jsx("button",{type:"button",onClick:a,className:"absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none",children:i?"🙈":"👁️"})]}),h.jsx("button",{type:"submit",className:"w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200",children:"Continue"}),h.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["New to Neuro Health?"," ",h.jsx("a",{href:"/signup",className:"text-green-600 font-semibold hover:underline",children:"Sign Up"})]})]})]})})},xS=()=>{const[e,t]=S.useState({name:"",email:"",subject:"",message:""}),n=i=>{const{id:s,value:o}=i.target;t(a=>({...a,[s]:o}))},r=i=>{i.preventDefault();const s="https://script.google.com/macros/s/AKfycbwu2lyxVXEBCJ7rqFeYACNlnEEU6T-VyOBlKBJGtZa8zNKyq3G8h6Zn_oIWqLtnSejobQ/exec",o=new FormData;o.append("name",e.name),o.append("email",e.email),o.append("subject",e.subject),o.append("message",e.message),fetch(s,{method:"POST",body:o,mode:"no-cors"}).then(()=>{alert("Form Submitted Successfully!"),t({name:"",email:"",subject:"",message:""})}).catch(a=>{console.error("Error!",a.message)})};return h.jsxs(h.Fragment,{children:[h.jsx(io,{}),h.jsx("div",{className:"flex justify-center items-center h-screen mt-5 bg-gradient-to-r from-teal-400 to-green-500",children:h.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[h.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-gray-800",children:"Feedback Form"}),h.jsxs("form",{onSubmit:r,children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 mb-2",htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",placeholder:"Enter Name",value:e.name,onChange:n,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 mb-2",htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",placeholder:"Enter email",value:e.email,onChange:n,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 mb-2",htmlFor:"subject",children:"Subject:"}),h.jsx("input",{type:"text",id:"subject",placeholder:"Enter subject",value:e.subject,onChange:n,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",required:!0})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-gray-700 mb-2",htmlFor:"message",children:"Message:"}),h.jsx("textarea",{id:"message",placeholder:"Enter message",value:e.message,onChange:n,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",rows:"5",required:!0})]}),h.jsx("button",{type:"submit",className:"w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300",children:"Submit →"})]})]})}),h.jsx(so,{})]})};Rh(document.getElementById("root")).render(h.jsx(S.StrictMode,{children:h.jsx(by,{children:h.jsxs(Py,{children:[h.jsx(tn,{path:"/",element:h.jsx(yS,{})}),h.jsx(tn,{path:"/services",element:h.jsx(SS,{})}),h.jsx(tn,{path:"/contact",element:h.jsx(_S,{})}),h.jsx(tn,{path:"/login",element:h.jsx(kS,{})}),h.jsx(tn,{path:"/signup",element:h.jsx(IS,{})}),h.jsx(tn,{path:"/feedback",element:h.jsx(xS,{})})]})})}));
