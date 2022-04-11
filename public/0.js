(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,r){t.exports=r(97)},60:function(t,e,r){"use strict";r.r(e);var n=r(16),i=r.n(n);function a(t,e,r,n,i,a,o){try{var s=t[a](o),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,i)}var o={name:"Identity",data:function(){return{age:"",address:"",nationality:"",firstName:"",lastName:"",placeOfBirth:"",dateOfBirth:"",youtube_link:"",signature:"",avatar:"",countries:[]}},methods:{changeAvatar:function(t){this.avatar=t},changeDateOfBirth:function(t){this.dateOfBirth=t},changeSignature:function(t){this.signature=t},getCountries:function(){return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(23).then(r.bind(null,148));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){a(o,n,i,s,u,"next",t)}function u(t){a(o,n,i,s,u,"throw",t)}s(void 0)}))})();var t},assignDefaults:function(){this.firstName=this.$page.user.first_name||"",this.lastName=this.$page.user.last_name||"",this.age=this.$page.user.age||"",this.youtube_link=this.$page.user.youtube_link||"",this.placeOfBirth=this.$page.user.placeOfBirth||"",this.nationality=this.$page.user.nationality||"",this.dateOfBirth=this.$page.user.dateOfBirth||"",this.address=this.$page.user.address||""},submitForm:function(){var t=new FormData;t.append("first_name",this.firstName),t.append("last_name",this.lastName),t.append("age",this.age),t.append("place_of_birth",this.placeOfBirth),t.append("nationality",this.nationality),t.append("signature",this.signature),t.append("avatar",this.avatar),t.append("date_of_birth",this.dateOfBirth),t.append("address",this.address),t.append("youtube_link",this.youtube_link),this.$inertia.post(this.$route.relativePath("client.profile.update.identity"),t)}},mounted:function(){var t=this;this.getCountries().then((function(e){t.countries=e.default})),this.assignDefaults()}},s=r(0),u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("form",{attrs:{action:"",id:"identity"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}}),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{label:"First Name",error:t.$page.errors.first_name,form:"identity"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{label:"Last Name",error:t.$page.errors.last_name,form:"identity"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("select-input",{attrs:{label:"Nationality",error:t.$page.errors.nationality,value:t.nationality,form:"identity"},model:{value:t.nationality,callback:function(e){t.nationality=e},expression:"nationality"}},t._l(t.countries,(function(e,n){return r("option",{key:n,domProps:{value:e.name}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),0)],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("textarea-input",{attrs:{label:"Address",error:t.$page.errors.address,form:"identity"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{type:"text",label:"Youtube video link",error:t.$page.errors.youtube_link,form:"identity"},model:{value:t.youtube_link,callback:function(e){t.youtube_link=e},expression:"youtube_link"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{type:"number",label:"Age",error:t.$page.errors.age,form:"identity"},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{type:"date",label:"Date of Birth",error:t.$page.errors.date_of_birth,form:"identity"},on:{input:function(e){return t.changeDateOfBirth(e)}}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("text-input",{attrs:{label:"Place of Birth",error:t.$page.errors.place_of_birth,form:"identity"},model:{value:t.placeOfBirth,callback:function(e){t.placeOfBirth=e},expression:"placeOfBirth"}})],1),t._v(" "),r("div",{staticClass:"mb-3"},[r("file-input",{attrs:{form:"identity",error:t.$page.errors.avatar||"",label:"Upload your Profile Picture"},on:{input:function(e){return t.changeAvatar(e)}}})],1),t._v(" "),r("div",{staticClass:"mb-10"},[r("file-input",{attrs:{form:"identity",error:t.$page.errors.signature||"",label:"Upload an Image of your signtaure"},on:{input:function(e){return t.changeSignature(e)}}})],1),t._v(" "),r("primary-btn",{attrs:{type:"submit",form:"identity",color:"yellow",fontColor:"text-black",width:"w-full"}},[t._v("Update Identity\n    ")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-5"},[e("h3",{staticClass:"text-lg font-bold"},[this._v("Identity")]),this._v(" "),e("p",{staticClass:"text-sm"},[this._v("Information used to identify contestant")])])}],!1,null,null,null);e.default=u.exports},97:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),o=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return O()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=_(o,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,o),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};s(d,i,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,i)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(i,a){function o(){return new e((function(n,o){!function n(i,a,o,s){var u=c(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(f).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,s)}))}s(u.arg)}(i,a,n,o)}))}return n=n?n.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,s(m,"constructor",p),s(p,"constructor",h),h.displayName=s(p,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),s(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new b(u(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},g(m),s(m,o,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);