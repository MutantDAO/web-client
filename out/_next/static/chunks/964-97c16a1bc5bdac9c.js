(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,s,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,s,i],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},7942:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},s=n(4957),i=n(9898),l=n(639);var c={};function u(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=s.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?s.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,E=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,b=l.useIntersection({rootMargin:"200px"}),y=r(b,2),N=y[0],C=y[1],w=a.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);a.default.useEffect((function(){var e=C&&n&&s.isLocalURL(d),t="undefined"!==typeof E?E:o&&o.locale,r=c[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,C,E,n,o]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,m,g,E)},onMouseEnter:function(e){s.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof E?E:o&&o.locale,R=o&&o.isLocaleDomain&&s.getDomainLocale(p,O,o&&o.locales,o&&o.domainLocales);k.href=R||s.addBasePath(s.addLocale(p,O,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},639:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,l=o.useRef(),c=o.useState(!1),u=r(c,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(6286),s="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,t,n){e.exports=n(7942)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3680:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(4036),o=n.n(r),a=n(7294),s=n(5893);const i=["as","disabled"];function l({tagName:e,disabled:t,href:n,target:r,rel:o,onClick:a,tabIndex:s=0,type:i}){e||(e=null!=n||null!=r||null!=o?"a":"button");const l={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},l];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==a||a(r)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===e&&t?void 0:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},l]}const c=a.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);const[a,{tagName:c}]=l(Object.assign({tagName:n,disabled:r},o));return(0,s.jsx)(c,Object.assign({},o,a,{ref:t}))}));c.displayName="Button";var u=n(6792);const f=a.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:a,className:i,...c},f)=>{const d=(0,u.vE)(t,"btn"),[p,{tagName:v}]=l({tagName:e,...c}),h=v;return(0,s.jsx)(h,{...c,...p,ref:f,className:o()(i,d,a&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,c.href&&c.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},1555:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const l=["xxl","xl","lg","md","sm","xs"];const c=a.forwardRef(((e,t)=>{const[{className:n,...r},{as:a="div",bsPrefix:c,spans:u}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,s.vE)(t,"col");const a=[],i=[];return l.forEach((e=>{const n=r[e];let o,s,l;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:s,order:l}=n):o=n;const c="xs"!==e?`-${e}`:"";o&&a.push(!0===o?`${t}${c}`:`${t}${c}-${o}`),null!=l&&i.push(`order${c}-${l}`),null!=s&&i.push(`offset${c}-${s}`)})),[{...r,className:o()(n,...a,...i)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,i.jsx)(a,{...r,ref:t,className:o()(n,!u.length&&c)})}));c.displayName="Col",t.Z=c},682:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const l=a.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},l)=>{const c=(0,s.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,i.jsx)(n,{ref:l,...a,className:o()(r,t?`${c}${u}`:c)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},1673:function(e,t,n){"use strict";n.d(t,{Z:function(){return dt}});var r=n(4036),o=n.n(r),a=n(7294);var s=a.createContext(null);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function f(e,t){return Object.keys(t).reduce((function(n,r){var o,s=n,f=s[c(r)],d=s[r],p=l(s,[c(r),r].map(u)),v=t[r],h=function(e,t,n){var r=(0,a.useRef)(void 0!==e),o=(0,a.useState)(t),s=o[0],i=o[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&s!==t&&i(t),[l?e:s,(0,a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(d,f,e[v]),m=h[0],g=h[1];return i({},p,((o={})[r]=m,o[v]=g,o))}),e)}function d(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function p(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function v(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}d.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;var h=/-(.)/g;var m=n(6792),g=n(5893);const E=e=>{return e[0].toUpperCase()+(t=e,t.replace(h,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function x(e,{displayName:t=E(e),Component:n,defaultProps:r}={}){const s=a.forwardRef((({className:t,bsPrefix:r,as:a=n||"div",...s},i)=>{const l=(0,m.vE)(r,e);return(0,g.jsx)(a,{ref:i,className:o()(t,l),...s})}));return s.defaultProps=r,s.displayName=t,s}const b=a.forwardRef((({bsPrefix:e,className:t,as:n,...r},a)=>{e=(0,m.vE)(e,"navbar-brand");const s=n||(r.href?"a":"span");return(0,g.jsx)(s,{...r,ref:a,className:o()(t,e)})}));b.displayName="NavbarBrand";var y=b;function N(e){return e&&e.ownerDocument||document}function C(e,t){return function(e){var t=N(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var w=/([A-Z])/g;var k=/^ms-/;function O(e){return function(e){return e.replace(w,"-$1").toLowerCase()}(e).replace(k,"-ms-")}var R=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var j=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(O(t))||C(e).getPropertyValue(O(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!R.test(e))}(o)?n+=O(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(O(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=n(5697),P=n.n(T),L=n(3935),$=!1,M=a.createContext(null),D="unmounted",_="exited",F="entering",B="entered",I="exiting",A=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=_,r.appearStatus=F):o=B:o=t.unmountOnExit||t.mountOnEnter?D:_,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,S(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===D?{status:_}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==F&&n!==B&&(t=F):n!==F&&n!==B||(t=I)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===F?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===_&&this.setState({status:D})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[L.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||$?this.safeSetState({status:B},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:F},(function(){t.props.onEntering(a,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:B},(function(){t.props.onEntered(a,s)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!$?(this.props.onExit(r),this.safeSetState({status:I},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:_},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:_},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===D)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(M.Provider,{value:null},"function"===typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},r}(a.Component);function W(){}A.contextType=M,A.propTypes={},A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W},A.UNMOUNTED=D,A.EXITED=_,A.ENTERING=F,A.ENTERED=B,A.EXITING=I;var H=A,U=!("undefined"===typeof window||!window.document||!window.document.createElement),V=!1,K=!1;try{var Z={get passive(){return V=!0},get once(){return K=V=!0}};U&&(window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,!0))}catch(pt){}var X=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!K){var o=r.once,a=r.capture,s=n;!K&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,V?r:a)}e.addEventListener(t,n,r)};var q=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var z=function(e,t,n,r){return X(e,t,n,r),function(){q(e,t,n,r)}};function Y(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=z(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function G(e,t,n,r){null==n&&(n=function(e){var t=j(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=Y(e,n,r),a=z(e,"transitionend",t);return function(){o(),a()}}function J(e,t){const n=j(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Q(e,t){const n=J(e,"transitionDuration"),r=J(e,"transitionDelay"),o=G(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var ee=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function te(e){e.offsetHeight}var ne=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var re=function(e,t){return(0,a.useMemo)((function(){return function(e,t){var n=ne(e),r=ne(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var oe=a.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:l,childRef:c,...u},f)=>{const d=(0,a.useRef)(null),p=re(d,c),v=e=>{var t;p((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&d.current&&e(d.current,t)},m=(0,a.useCallback)(h(e),[e]),E=(0,a.useCallback)(h(t),[t]),x=(0,a.useCallback)(h(n),[n]),b=(0,a.useCallback)(h(r),[r]),y=(0,a.useCallback)(h(o),[o]),N=(0,a.useCallback)(h(s),[s]),C=(0,a.useCallback)(h(i),[i]);return(0,g.jsx)(H,{ref:f,...u,onEnter:m,onEntered:x,onEntering:E,onExit:b,onExited:N,onExiting:y,addEndListener:C,nodeRef:d,children:"function"===typeof l?(e,t)=>l(e,{...t,ref:v}):a.cloneElement(l,{ref:v})})}));const ae={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function se(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ae[e];return n+parseInt(j(t,r[0]),10)+parseInt(j(t,r[1]),10)}const ie={[_]:"collapse",[I]:"collapsing",[F]:"collapsing",[B]:"collapse show"},le={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:se},ce=a.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:s,className:i,children:l,dimension:c="height",getDimensionValue:u=se,...f},d)=>{const p="function"===typeof c?c():c,v=(0,a.useMemo)((()=>ee((e=>{e.style[p]="0"}),e)),[p,e]),h=(0,a.useMemo)((()=>ee((e=>{const t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`}),t)),[p,t]),m=(0,a.useMemo)((()=>ee((e=>{e.style[p]=null}),n)),[p,n]),E=(0,a.useMemo)((()=>ee((e=>{e.style[p]=`${u(p,e)}px`,te(e)}),r)),[r,u,p]),x=(0,a.useMemo)((()=>ee((e=>{e.style[p]=null}),s)),[p,s]);return(0,g.jsx)(oe,{ref:d,addEndListener:Q,...f,"aria-expanded":f.role?f.in:null,onEnter:v,onEntering:h,onEntered:m,onExit:E,onExiting:x,childRef:l.ref,children:(e,t)=>a.cloneElement(l,{...t,className:o()(i,l.props.className,ie[e],"width"===p&&"collapse-horizontal")})})}));ce.defaultProps=le;var ue=ce;const fe=a.createContext(null);fe.displayName="NavbarContext";var de=fe;const pe=a.forwardRef((({children:e,bsPrefix:t,...n},r)=>{t=(0,m.vE)(t,"navbar-collapse");const o=(0,a.useContext)(de);return(0,g.jsx)(ue,{in:!(!o||!o.expanded),...n,children:(0,g.jsx)("div",{ref:r,className:t,children:e})})}));pe.displayName="NavbarCollapse";var ve=pe;var he=function(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t};function me(e){var t=he(e);return(0,a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const ge=a.forwardRef((({bsPrefix:e,className:t,children:n,label:r,as:s="button",onClick:i,...l},c)=>{e=(0,m.vE)(e,"navbar-toggler");const{onToggle:u,expanded:f}=(0,a.useContext)(de)||{},d=me((e=>{i&&i(e),u&&u()}));return"button"===s&&(l.type="button"),(0,g.jsx)(s,{...l,ref:c,onClick:d,"aria-label":r,className:o()(t,e,!f&&"collapsed"),children:n||(0,g.jsx)("span",{className:`${e}-icon`})})}));ge.displayName="NavbarToggle",ge.defaultProps={label:"Toggle navigation"};var Ee=ge;function xe(e){void 0===e&&(e=N());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(pt){return e.body}}function be(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ye(e){var t=function(e){var t=(0,a.useRef)(e);return t.current=e,t}(e);(0,a.useEffect)((function(){return function(){return t.current()}}),[])}var Ne=function(e){var t=(0,a.useRef)(e);return(0,a.useEffect)((function(){t.current=e}),[e]),t};function Ce(e){var t=Ne(e);return(0,a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}const we=`data-rr-ui-${"modal-open"}`;var ke=class{constructor({handleContainerOverflow:e=!0,isRTL:t=!1}={}){this.handleContainerOverflow=e,this.isRTL=t,this.modals=[]}getScrollbarWidth(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}getElement(){return document.body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(j(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(we,""),j(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(we),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const Oe=e=>{var t;return"undefined"===typeof document?null:null==e?N().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};const Re=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let je;function Se(e){const t=e||(je||(je=new ke),je),n=(0,a.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>t.add(n.current),remove:()=>t.remove(n.current),isTopModal:()=>t.isTopModal(n.current),setDialogRef:(0,a.useCallback)((e=>{n.current.dialog=e}),[]),setBackdropRef:(0,a.useCallback)((e=>{n.current.backdrop=e}),[])})}const Te=(0,a.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:s,children:i,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:f,transition:d,backdropTransition:p,autoFocus:v=!0,enforceFocus:h=!0,restoreFocus:m=!0,restoreFocusOptions:E,renderDialog:x,renderBackdrop:b=(e=>(0,g.jsx)("div",Object.assign({},e))),manager:y,container:N,onShow:C,onHide:w=(()=>{}),onExit:k,onExited:O,onExiting:R,onEnter:j,onEntering:S,onEntered:T}=e,P=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Re);const $=function(e,t){const[n,r]=(0,a.useState)((()=>Oe(e)));if(!n){const t=Oe(e);t&&r(t)}return(0,a.useEffect)((()=>{t&&n&&t(n)}),[t,n]),(0,a.useEffect)((()=>{const t=Oe(e);t!==n&&r(t)}),[e,n]),n}(N),M=Se(y),D=function(){var e=(0,a.useRef)(!0),t=(0,a.useRef)((function(){return e.current}));return(0,a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),_=function(e){var t=(0,a.useRef)(null);return(0,a.useEffect)((function(){t.current=e})),t.current}(n),[F,B]=(0,a.useState)(!n),I=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(()=>M),[M]),U&&!_&&n&&(I.current=xe()),d||n||F?n&&F&&B(!1):B(!0);const A=Ce((()=>{if(M.add(),X.current=z(document,"keydown",K),Z.current=z(document,"focus",(()=>setTimeout(H)),!0),C&&C(),v){const e=xe(document);M.dialog&&e&&!be(M.dialog,e)&&(I.current=e,M.dialog.focus())}})),W=Ce((()=>{var e;(M.remove(),null==X.current||X.current(),null==Z.current||Z.current(),m)&&(null==(e=I.current)||null==e.focus||e.focus(E),I.current=null)}));(0,a.useEffect)((()=>{n&&$&&A()}),[n,$,A]),(0,a.useEffect)((()=>{F&&W()}),[F,W]),ye((()=>{W()}));const H=Ce((()=>{if(!h||!D()||!M.isTopModal())return;const e=xe();M.dialog&&e&&!be(M.dialog,e)&&M.dialog.focus()})),V=Ce((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&w())})),K=Ce((e=>{c&&27===e.keyCode&&M.isTopModal()&&(null==f||f(e),e.defaultPrevented||w())})),Z=(0,a.useRef)(),X=(0,a.useRef)(),q=(...e)=>{B(!0),null==O||O(...e)},Y=d;if(!$||!(n||Y&&!F))return null;const G=Object.assign({role:r,ref:M.setDialogRef,"aria-modal":"dialog"===r||void 0},P,{style:s,className:o,tabIndex:-1});let J=x?x(G):(0,g.jsx)("div",Object.assign({},G,{children:a.cloneElement(i,{role:"document"})}));Y&&(J=(0,g.jsx)(Y,{appear:!0,unmountOnExit:!0,in:!!n,onExit:k,onExiting:R,onExited:q,onEnter:j,onEntering:S,onEntered:T,children:J}));let Q=null;if(l){const e=p;Q=b({ref:M.setBackdropRef,onClick:V}),e&&(Q=(0,g.jsx)(e,{appear:!0,in:!!n,children:Q}))}return(0,g.jsx)(g.Fragment,{children:L.createPortal((0,g.jsxs)(g.Fragment,{children:[Q,J]}),$)})}));Te.displayName="Modal";var Pe=Object.assign(Te,{Manager:ke});const Le={[F]:"show",[B]:"show"},$e=a.forwardRef((({className:e,children:t,transitionClasses:n={},...r},s)=>{const i=(0,a.useCallback)(((e,t)=>{te(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,g.jsx)(oe,{ref:s,addEndListener:Q,...r,onEnter:i,childRef:t.ref,children:(r,s)=>a.cloneElement(t,{...s,className:o()("fade",e,t.props.className,Le[r],n[r])})})}));$e.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},$e.displayName="Fade";var Me=$e,De=x("offcanvas-body");const _e={[F]:"show",[B]:"show"},Fe=a.forwardRef((({bsPrefix:e,className:t,children:n,...r},s)=>(e=(0,m.vE)(e,"offcanvas"),(0,g.jsx)(oe,{ref:s,addEndListener:Q,...r,childRef:n.ref,children:(r,s)=>a.cloneElement(n,{...s,className:o()(t,n.props.className,(r===F||r===I)&&`${e}-toggling`,_e[r])})}))));Fe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Fe.displayName="OffcanvasToggling";var Be=Fe;var Ie=a.createContext({onHide(){}});const Ae={"aria-label":P().string,onClick:P().func,variant:P().oneOf(["white"])},We=a.forwardRef((({className:e,variant:t,...n},r)=>(0,g.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));We.displayName="CloseButton",We.propTypes=Ae,We.defaultProps={"aria-label":"Close"};var He=We;const Ue=a.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},i)=>{const l=(0,a.useContext)(Ie),c=me((()=>{null==l||l.onHide(),null==r||r()}));return(0,g.jsxs)("div",{ref:i,...s,children:[o,n&&(0,g.jsx)(He,{"aria-label":e,variant:t,onClick:c})]})}));Ue.defaultProps={closeLabel:"Close",closeButton:!1};var Ve=Ue;const Ke=a.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=(0,m.vE)(e,"offcanvas-header"),(0,g.jsx)(Ve,{ref:r,...n,className:o()(t,e)}))));Ke.displayName="OffcanvasHeader",Ke.defaultProps={closeLabel:"Close",closeButton:!1};var Ze=Ke;var Xe,qe=x("offcanvas-title",{Component:(Xe="h5",a.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:o()(e.className,Xe)}))))});var ze=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ye(e,t){return ze(e.querySelectorAll(t))}function Ge(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Je=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qe=".sticky-top",et=".navbar-toggler";class tt extends ke{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,j(t,{[e]:`${parseFloat(j(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],j(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Ye(t,Je).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),Ye(t,Qe).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),Ye(t,et).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=Ge(e.className,t):e.setAttribute("class",Ge(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Ye(t,Je).forEach((e=>this.restore(n,e))),Ye(t,Qe).forEach((e=>this.restore(r,e))),Ye(t,et).forEach((e=>this.restore(r,e)))}}let nt;var rt=tt;function ot(e){return(0,g.jsx)(Be,{...e})}function at(e){return(0,g.jsx)(Me,{...e})}const st=a.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:s,show:i,backdrop:l,keyboard:c,scroll:u,onEscapeKeyDown:f,onShow:d,onHide:p,container:v,autoFocus:h,enforceFocus:E,restoreFocus:x,restoreFocusOptions:b,onEntered:y,onExit:N,onExiting:C,onEnter:w,onEntering:k,onExited:O,backdropClassName:R,manager:j,...S},T)=>{const P=(0,a.useRef)();e=(0,m.vE)(e,"offcanvas");const{onToggle:L}=(0,a.useContext)(de)||{},$=me((()=>{null==L||L(),null==p||p()})),M=(0,a.useMemo)((()=>({onHide:$})),[$]);const D=(0,a.useCallback)((t=>(0,g.jsx)("div",{...t,className:o()(`${e}-backdrop`,R)})),[R,e]);return(0,g.jsx)(Ie.Provider,{value:M,children:(0,g.jsx)(Pe,{show:i,ref:T,backdrop:l,container:v,keyboard:c,autoFocus:h,enforceFocus:E&&!u,restoreFocus:x,restoreFocusOptions:b,onEscapeKeyDown:f,onShow:d,onHide:$,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==w||w(e,...t)},onEntering:k,onEntered:y,onExit:N,onExiting:C,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==O||O(...t)},manager:j||(u?(P.current||(P.current=new rt({handleContainerOverflow:!1})),P.current):function(e){return nt||(nt=new tt(e)),nt}()),transition:ot,backdropTransition:at,renderBackdrop:D,renderDialog:a=>(0,g.jsx)("div",{role:"dialog",...a,...S,className:o()(t,e,`${e}-${s}`),"aria-labelledby":r,children:n})})})}));st.displayName="Offcanvas",st.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var it=Object.assign(st,{Body:De,Header:Ze,Title:qe});const lt=a.forwardRef(((e,t)=>{const n=(0,a.useContext)(de);return(0,g.jsx)(it,{ref:t,show:!(null==n||!n.expanded),...e})}));lt.displayName="NavbarOffcanvas";var ct=lt;const ut=x("navbar-text",{Component:"span"}),ft=a.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r,variant:i,bg:l,fixed:c,sticky:u,className:d,as:p="nav",expanded:v,onToggle:h,onSelect:E,collapseOnSelect:x,...b}=f(e,{expanded:"onToggle"}),y=(0,m.vE)(n,"navbar"),N=(0,a.useCallback)(((...e)=>{null==E||E(...e),x&&v&&(null==h||h(!1))}),[E,x,v,h]);void 0===b.role&&"nav"!==p&&(b.role="navigation");let C=`${y}-expand`;"string"===typeof r&&(C=`${C}-${r}`);const w=(0,a.useMemo)((()=>({onToggle:()=>null==h?void 0:h(!v),bsPrefix:y,expanded:!!v})),[y,v,h]);return(0,g.jsx)(de.Provider,{value:w,children:(0,g.jsx)(s.Provider,{value:N,children:(0,g.jsx)(p,{ref:t,...b,className:o()(d,y,r&&C,i&&`${y}-${i}`,l&&`bg-${l}`,u&&`sticky-${u}`,c&&`fixed-${c}`)})})})}));ft.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ft.displayName="Navbar";var dt=Object.assign(ft,{Brand:y,Collapse:ve,Offcanvas:ct,Text:ut,Toggle:Ee})},4051:function(e,t,n){"use strict";var r=n(4036),o=n.n(r),a=n(7294),s=n(6792),i=n(5893);const l=["xxl","xl","lg","md","sm","xs"],c=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},a)=>{const c=(0,s.vE)(e,"row"),u=`${c}-cols`,f=[];return l.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o="xs"!==e?`-${e}`:"";null!=n&&f.push(`${u}${o}-${n}`)})),(0,i.jsx)(n,{ref:a,...r,className:o()(t,c,...f)})}));c.displayName="Row",t.Z=c},6792:function(e,t,n){"use strict";n.d(t,{vE:function(){return i}});var r=n(7294);n(5893);const o=r.createContext({prefixes:{}}),{Consumer:a,Provider:s}=o;function i(e,t){const{prefixes:n}=(0,r.useContext)(o);return e||n[t]||t}},4036:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);