(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,s,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},8566:function(e,t,n){"use strict";var r=n(3038),o=n(319);var a=f(n(7294)),s=f(n(2717)),i=n(3389),c=n(5809),l=n(639);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=new URL("".concat(t).concat(O(n))),s=a.searchParams;s.set("auto",s.get("auto")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||r.toString()),o&&s.set("q",o.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||c.imageConfigDefault,E=g.deviceSizes,x=g.imageSizes,b=g.loader,y=g.path,w=(g.domains,[].concat(o(E),o(x)));function C(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,s=e.quality,i=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,s=[];r=a.exec(n);r)s.push(parseInt(r[2]));if(s.length){var i=.01*Math.min.apply(Math,s);return{widths:w.filter((function(e){return e>=E[0]*i})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:E,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(a,r,i),u=l.widths,f=l.kind,d=u.length-1;return{sizes:i||"w"!==f?i:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({src:t,quality:s,width:u[d]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=m.get(b);if(t)return t(d({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(b))}function O(e){return"/"===e[0]?e.slice(1):e}E.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},639:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(6286),s="undefined"!==typeof IntersectionObserver;var i=new Map},3389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){n(8566)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1555:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const c=["xxl","xl","lg","md","sm","xs"];const l=a.forwardRef(((e,t)=>{const[{className:n,...r},{as:a="div",bsPrefix:l,spans:u}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,s.vE)(t,"col");const a=[],i=[];return c.forEach((e=>{const n=r[e];let o,s,c;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:s,order:c}=n):o=n;const l="xs"!==e?`-${e}`:"";o&&a.push(!0===o?`${t}${l}`:`${t}${l}-${o}`),null!=c&&i.push(`order${l}-${c}`),null!=s&&i.push(`offset${l}-${s}`)})),[{...r,className:o()(n,...a,...i)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,i.jsx)(a,{...r,ref:t,className:o()(n,!u.length&&l)})}));l.displayName="Col",t.Z=l},682:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const c=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},c)=>{const l=(0,s.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:c,...a,className:o()(r,t?`${l}${u}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},1673:function(e,t,n){"use strict";n.d(t,{Z:function(){return dt}});var r=n(4036),o=n.n(r),a=n(7294);var s=a.createContext(null);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function f(e,t){return Object.keys(t).reduce((function(n,r){var o,s=n,f=s[l(r)],d=s[r],p=c(s,[l(r),r].map(u)),v=t[r],m=function(e,t,n){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),s=o[0],i=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&s!==t&&i(t),[c?e:s,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(d,f,e[v]),h=m[0],g=m[1];return i({},p,((o={})[r]=h,o[v]=g,o))}),e)}function d(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function p(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function v(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}d.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;var m=/-(.)/g;var h=n(6792),g=n(5893);const E=e=>{return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function x(e,{displayName:t=E(e),Component:n,defaultProps:r}={}){const s=a.forwardRef((({className:t,bsPrefix:r,as:a=n||"div",...s},i)=>{const c=(0,h.vE)(r,e);return(0,g.jsx)(a,{ref:i,className:o()(t,c),...s})}));return s.defaultProps=r,s.displayName=t,s}const b=a.forwardRef((({bsPrefix:e,className:t,as:n,...r},a)=>{e=(0,h.vE)(e,"navbar-brand");const s=n||(r.href?"a":"span");return(0,g.jsx)(s,{...r,ref:a,className:o()(t,e)})}));b.displayName="NavbarBrand";var y=b;function w(e){return e&&e.ownerDocument||document}function C(e,t){return function(e){var t=w(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var N=/([A-Z])/g;var k=/^ms-/;function O(e){return function(e){return e.replace(N,"-$1").toLowerCase()}(e).replace(k,"-ms-")}var S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var R=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(O(t))||C(e).getPropertyValue(O(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!S.test(e))}(o)?n+=O(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(O(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=n(5697),P=n.n(T),A=n(3935),L=!1,_=a.createContext(null),$="unmounted",D="exited",M="entering",I="entered",F="exiting",B=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=D,r.appearStatus=M):o=I:o=t.unmountOnExit||t.mountOnEnter?$:D,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,j(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===$?{status:D}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==M&&n!==I&&(t=M):n!==M&&n!==I||(t=F)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===M?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===D&&this.setState({status:$})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[A.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),c=r?i.appear:i.enter;!e&&!n||L?this.safeSetState({status:I},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:M},(function(){t.props.onEntering(a,s),t.onTransitionEnd(c,(function(){t.safeSetState({status:I},(function(){t.props.onEntered(a,s)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:A.findDOMNode(this);t&&!L?(this.props.onExit(r),this.safeSetState({status:F},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:D},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:D},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:A.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===$)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,c(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(_.Provider,{value:null},"function"===typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},r}(a.Component);function W(){}B.contextType=_,B.propTypes={},B.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W},B.UNMOUNTED=$,B.EXITED=D,B.ENTERING=M,B.ENTERED=I,B.EXITING=F;var H=B,U=!("undefined"===typeof window||!window.document||!window.document.createElement),V=!1,q=!1;try{var z={get passive(){return V=!0},get once(){return q=V=!0}};U&&(window.addEventListener("test",z,z),window.removeEventListener("test",z,!0))}catch(pt){}var Z=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!q){var o=r.once,a=r.capture,s=n;!q&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,V?r:a)}e.addEventListener(t,n,r)};var K=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var X=function(e,t,n,r){return Z(e,t,n,r),function(){K(e,t,n,r)}};function G(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=X(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function Y(e,t,n,r){null==n&&(n=function(e){var t=R(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=G(e,n,r),a=X(e,"transitionend",t);return function(){o(),a()}}function Q(e,t){const n=R(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function J(e,t){const n=Q(e,"transitionDuration"),r=Q(e,"transitionDelay"),o=Y(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var ee=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function te(e){e.offsetHeight}var ne=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var re=function(e,t){return(0,a.useMemo)((function(){return function(e,t){var n=ne(e),r=ne(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var oe=a.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:c,childRef:l,...u},f)=>{const d=(0,a.useRef)(null),p=re(d,l),v=e=>{var t;p((t=e)&&"setState"in t?A.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},h=(0,a.useCallback)(m(e),[e]),E=(0,a.useCallback)(m(t),[t]),x=(0,a.useCallback)(m(n),[n]),b=(0,a.useCallback)(m(r),[r]),y=(0,a.useCallback)(m(o),[o]),w=(0,a.useCallback)(m(s),[s]),C=(0,a.useCallback)(m(i),[i]);return(0,g.jsx)(H,{ref:f,...u,onEnter:h,onEntered:x,onEntering:E,onExit:b,onExited:w,onExiting:y,addEndListener:C,nodeRef:d,children:"function"===typeof c?(e,t)=>c(e,{...t,ref:v}):a.cloneElement(c,{ref:v})})}));const ae={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function se(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ae[e];return n+parseInt(R(t,r[0]),10)+parseInt(R(t,r[1]),10)}const ie={[D]:"collapse",[F]:"collapsing",[M]:"collapsing",[I]:"collapse show"},ce={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:se},le=a.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:s,className:i,children:c,dimension:l="height",getDimensionValue:u=se,...f},d)=>{const p="function"===typeof l?l():l,v=(0,a.useMemo)((()=>ee((e=>{e.style[p]="0"}),e)),[p,e]),m=(0,a.useMemo)((()=>ee((e=>{const t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`}),t)),[p,t]),h=(0,a.useMemo)((()=>ee((e=>{e.style[p]=null}),n)),[p,n]),E=(0,a.useMemo)((()=>ee((e=>{e.style[p]=`${u(p,e)}px`,te(e)}),r)),[r,u,p]),x=(0,a.useMemo)((()=>ee((e=>{e.style[p]=null}),s)),[p,s]);return(0,g.jsx)(oe,{ref:d,addEndListener:J,...f,"aria-expanded":f.role?f.in:null,onEnter:v,onEntering:m,onEntered:h,onExit:E,onExiting:x,childRef:c.ref,children:(e,t)=>a.cloneElement(c,{...t,className:o()(i,c.props.className,ie[e],"width"===p&&"collapse-horizontal")})})}));le.defaultProps=ce;var ue=le;const fe=a.createContext(null);fe.displayName="NavbarContext";var de=fe;const pe=a.forwardRef((({children:e,bsPrefix:t,...n},r)=>{t=(0,h.vE)(t,"navbar-collapse");const o=(0,a.useContext)(de);return(0,g.jsx)(ue,{in:!(!o||!o.expanded),...n,children:(0,g.jsx)("div",{ref:r,className:t,children:e})})}));pe.displayName="NavbarCollapse";var ve=pe;var me=function(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t};function he(e){var t=me(e);return(0,a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const ge=a.forwardRef((({bsPrefix:e,className:t,children:n,label:r,as:s="button",onClick:i,...c},l)=>{e=(0,h.vE)(e,"navbar-toggler");const{onToggle:u,expanded:f}=(0,a.useContext)(de)||{},d=he((e=>{i&&i(e),u&&u()}));return"button"===s&&(c.type="button"),(0,g.jsx)(s,{...c,ref:l,onClick:d,"aria-label":r,className:o()(t,e,!f&&"collapsed"),children:n||(0,g.jsx)("span",{className:`${e}-icon`})})}));ge.displayName="NavbarToggle",ge.defaultProps={label:"Toggle navigation"};var Ee=ge;function xe(e){void 0===e&&(e=w());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(pt){return e.body}}function be(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ye(e){var t=function(e){var t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)((function(){return function(){return t.current()}}),[])}var we=function(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t};function Ce(e){var t=we(e);return(0,a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const Ne=`data-rr-ui-${"modal-open"}`;var ke=class{constructor({handleContainerOverflow:e=!0,isRTL:t=!1}={}){this.handleContainerOverflow=e,this.isRTL=t,this.modals=[]}getScrollbarWidth(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}getElement(){return document.body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(R(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Ne,""),R(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Ne),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const Oe=e=>{var t;return"undefined"===typeof document?null:null==e?w().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};const Se=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Re;function je(e){const t=e||(Re||(Re=new ke),Re),n=(0,a.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>t.add(n.current),remove:()=>t.remove(n.current),isTopModal:()=>t.isTopModal(n.current),setDialogRef:(0,a.useCallback)((e=>{n.current.dialog=e}),[]),setBackdropRef:(0,a.useCallback)((e=>{n.current.backdrop=e}),[])})}const Te=(0,a.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:s,children:i,backdrop:c=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:f,transition:d,backdropTransition:p,autoFocus:v=!0,enforceFocus:m=!0,restoreFocus:h=!0,restoreFocusOptions:E,renderDialog:x,renderBackdrop:b=(e=>(0,g.jsx)("div",Object.assign({},e))),manager:y,container:w,onShow:C,onHide:N=(()=>{}),onExit:k,onExited:O,onExiting:S,onEnter:R,onEntering:j,onEntered:T}=e,P=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Se);const L=function(e,t){const[n,r]=(0,a.useState)((()=>Oe(e)));if(!n){const t=Oe(e);t&&r(t)}return(0,a.useEffect)((()=>{t&&n&&t(n)}),[t,n]),(0,a.useEffect)((()=>{const t=Oe(e);t!==n&&r(t)}),[e,n]),n}(w),_=je(y),$=function(){var e=(0,a.useRef)(!0),t=(0,a.useRef)((function(){return e.current}));return(0,a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),D=function(e){var t=(0,a.useRef)(null);return(0,a.useEffect)((function(){t.current=e})),t.current}(n),[M,I]=(0,a.useState)(!n),F=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(()=>_),[_]),U&&!D&&n&&(F.current=xe()),d||n||M?n&&M&&I(!1):I(!0);const B=Ce((()=>{if(_.add(),Z.current=X(document,"keydown",q),z.current=X(document,"focus",(()=>setTimeout(H)),!0),C&&C(),v){const e=xe(document);_.dialog&&e&&!be(_.dialog,e)&&(F.current=e,_.dialog.focus())}})),W=Ce((()=>{var e;(_.remove(),null==Z.current||Z.current(),null==z.current||z.current(),h)&&(null==(e=F.current)||null==e.focus||e.focus(E),F.current=null)}));(0,a.useEffect)((()=>{n&&L&&B()}),[n,L,B]),(0,a.useEffect)((()=>{M&&W()}),[M,W]),ye((()=>{W()}));const H=Ce((()=>{if(!m||!$()||!_.isTopModal())return;const e=xe();_.dialog&&e&&!be(_.dialog,e)&&_.dialog.focus()})),V=Ce((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===c&&N())})),q=Ce((e=>{l&&27===e.keyCode&&_.isTopModal()&&(null==f||f(e),e.defaultPrevented||N())})),z=(0,a.useRef)(),Z=(0,a.useRef)(),K=(...e)=>{I(!0),null==O||O(...e)},G=d;if(!L||!(n||G&&!M))return null;const Y=Object.assign({role:r,ref:_.setDialogRef,"aria-modal":"dialog"===r||void 0},P,{style:s,className:o,tabIndex:-1});let Q=x?x(Y):(0,g.jsx)("div",Object.assign({},Y,{children:a.cloneElement(i,{role:"document"})}));G&&(Q=(0,g.jsx)(G,{appear:!0,unmountOnExit:!0,in:!!n,onExit:k,onExiting:S,onExited:K,onEnter:R,onEntering:j,onEntered:T,children:Q}));let J=null;if(c){const e=p;J=b({ref:_.setBackdropRef,onClick:V}),e&&(J=(0,g.jsx)(e,{appear:!0,in:!!n,children:J}))}return(0,g.jsx)(g.Fragment,{children:A.createPortal((0,g.jsxs)(g.Fragment,{children:[J,Q]}),L)})}));Te.displayName="Modal";var Pe=Object.assign(Te,{Manager:ke});const Ae={[M]:"show",[I]:"show"},Le=a.forwardRef((({className:e,children:t,transitionClasses:n={},...r},s)=>{const i=(0,a.useCallback)(((e,t)=>{te(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,g.jsx)(oe,{ref:s,addEndListener:J,...r,onEnter:i,childRef:t.ref,children:(r,s)=>a.cloneElement(t,{...s,className:o()("fade",e,t.props.className,Ae[r],n[r])})})}));Le.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Le.displayName="Fade";var _e=Le,$e=x("offcanvas-body");const De={[M]:"show",[I]:"show"},Me=a.forwardRef((({bsPrefix:e,className:t,children:n,...r},s)=>(e=(0,h.vE)(e,"offcanvas"),(0,g.jsx)(oe,{ref:s,addEndListener:J,...r,childRef:n.ref,children:(r,s)=>a.cloneElement(n,{...s,className:o()(t,n.props.className,(r===M||r===F)&&`${e}-toggling`,De[r])})}))));Me.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Me.displayName="OffcanvasToggling";var Ie=Me;var Fe=a.createContext({onHide(){}});const Be={"aria-label":P().string,onClick:P().func,variant:P().oneOf(["white"])},We=a.forwardRef((({className:e,variant:t,...n},r)=>(0,g.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));We.displayName="CloseButton",We.propTypes=Be,We.defaultProps={"aria-label":"Close"};var He=We;const Ue=a.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},i)=>{const c=(0,a.useContext)(Fe),l=he((()=>{null==c||c.onHide(),null==r||r()}));return(0,g.jsxs)("div",{ref:i,...s,children:[o,n&&(0,g.jsx)(He,{"aria-label":e,variant:t,onClick:l})]})}));Ue.defaultProps={closeLabel:"Close",closeButton:!1};var Ve=Ue;const qe=a.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=(0,h.vE)(e,"offcanvas-header"),(0,g.jsx)(Ve,{ref:r,...n,className:o()(t,e)}))));qe.displayName="OffcanvasHeader",qe.defaultProps={closeLabel:"Close",closeButton:!1};var ze=qe;var Ze,Ke=x("offcanvas-title",{Component:(Ze="h5",a.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:o()(e.className,Ze)}))))});var Xe=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ge(e,t){return Xe(e.querySelectorAll(t))}function Ye(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Qe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Je=".sticky-top",et=".navbar-toggler";class tt extends ke{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,R(t,{[e]:`${parseFloat(R(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],R(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Ge(t,Qe).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),Ge(t,Je).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),Ge(t,et).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=Ye(e.className,t):e.setAttribute("class",Ye(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Ge(t,Qe).forEach((e=>this.restore(n,e))),Ge(t,Je).forEach((e=>this.restore(r,e))),Ge(t,et).forEach((e=>this.restore(r,e)))}}let nt;var rt=tt;function ot(e){return(0,g.jsx)(Ie,{...e})}function at(e){return(0,g.jsx)(_e,{...e})}const st=a.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:s,show:i,backdrop:c,keyboard:l,scroll:u,onEscapeKeyDown:f,onShow:d,onHide:p,container:v,autoFocus:m,enforceFocus:E,restoreFocus:x,restoreFocusOptions:b,onEntered:y,onExit:w,onExiting:C,onEnter:N,onEntering:k,onExited:O,backdropClassName:S,manager:R,...j},T)=>{const P=(0,a.useRef)();e=(0,h.vE)(e,"offcanvas");const{onToggle:A}=(0,a.useContext)(de)||{},L=he((()=>{null==A||A(),null==p||p()})),_=(0,a.useMemo)((()=>({onHide:L})),[L]);const $=(0,a.useCallback)((t=>(0,g.jsx)("div",{...t,className:o()(`${e}-backdrop`,S)})),[S,e]);return(0,g.jsx)(Fe.Provider,{value:_,children:(0,g.jsx)(Pe,{show:i,ref:T,backdrop:c,container:v,keyboard:l,autoFocus:m,enforceFocus:E&&!u,restoreFocus:x,restoreFocusOptions:b,onEscapeKeyDown:f,onShow:d,onHide:L,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==N||N(e,...t)},onEntering:k,onEntered:y,onExit:w,onExiting:C,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==O||O(...t)},manager:R||(u?(P.current||(P.current=new rt({handleContainerOverflow:!1})),P.current):function(e){return nt||(nt=new tt(e)),nt}()),transition:ot,backdropTransition:at,renderBackdrop:$,renderDialog:a=>(0,g.jsx)("div",{role:"dialog",...a,...j,className:o()(t,e,`${e}-${s}`),"aria-labelledby":r,children:n})})})}));st.displayName="Offcanvas",st.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var it=Object.assign(st,{Body:$e,Header:ze,Title:Ke});const ct=a.forwardRef(((e,t)=>{const n=(0,a.useContext)(de);return(0,g.jsx)(it,{ref:t,show:!(null==n||!n.expanded),...e})}));ct.displayName="NavbarOffcanvas";var lt=ct;const ut=x("navbar-text",{Component:"span"}),ft=a.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r,variant:i,bg:c,fixed:l,sticky:u,className:d,as:p="nav",expanded:v,onToggle:m,onSelect:E,collapseOnSelect:x,...b}=f(e,{expanded:"onToggle"}),y=(0,h.vE)(n,"navbar"),w=(0,a.useCallback)(((...e)=>{null==E||E(...e),x&&v&&(null==m||m(!1))}),[E,x,v,m]);void 0===b.role&&"nav"!==p&&(b.role="navigation");let C=`${y}-expand`;"string"===typeof r&&(C=`${C}-${r}`);const N=(0,a.useMemo)((()=>({onToggle:()=>null==m?void 0:m(!v),bsPrefix:y,expanded:!!v})),[y,v,m]);return(0,g.jsx)(de.Provider,{value:N,children:(0,g.jsx)(s.Provider,{value:w,children:(0,g.jsx)(p,{ref:t,...b,className:o()(d,y,r&&C,i&&`${y}-${i}`,c&&`bg-${c}`,u&&`sticky-${u}`,l&&`fixed-${l}`)})})})}));ft.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ft.displayName="Navbar";var dt=Object.assign(ft,{Brand:y,Collapse:ve,Offcanvas:lt,Text:ut,Toggle:Ee})},4051:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const c=["xxl","xl","lg","md","sm","xs"],l=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},a)=>{const l=(0,s.vE)(e,"row"),u=`${l}-cols`,f=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o="xs"!==e?`-${e}`:"";null!=n&&f.push(`${u}${o}-${n}`)})),(0,i.jsx)(n,{ref:a,...r,className:o()(t,l,...f)})}));l.displayName="Row",t.Z=l},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return i}});var r=n(7294);n(5893);const o=r.createContext({prefixes:{}}),{Consumer:a,Provider:s}=o;function i(e,t){const{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}},4036:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);