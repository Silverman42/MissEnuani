(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{12:function(t,e,r){"use strict";var n=r(6),a=r.n(n),i=r(7),o=r.n(i),s={name:"Layout",components:{Alert:function(){return r.e(40).then(r.bind(null,152))},AlertContainer:function(){return r.e(40).then(r.bind(null,153))},Avatar:function(){return r.e(39).then(r.bind(null,96))}},data:function(){return{icons:{success:a.a,error:o.a},alertList:[],logo_link:"img/dashboard_logo.svg"}},watch:{$page:{handler:function(){this.pushNewAlert()},deep:!0}},methods:{logout:function(){document.querySelector("#logoutForm").submit()},removeAlertSynchronously:function(t){this.alertList.splice(t,1)},removeAlertAsynchronously:function(t){var e=this;setTimeout((function(){e.alertList.splice(t,1)}),3e3)},pushNewAlert:function(){var t=this.alertList;null!==this.$page.auth.alert_type&&(t.push({type:this.$page.auth.alert_type,color:"success"===this.$page.auth.alert_type?"green":"red",message:this.$page.auth.alert_message,heading:this.$page.auth.alert_heading}),this.alertList=t)}},mounted:function(){this.pushNewAlert()}},l=(r(88),r(0)),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("alert-container",t._l(t.alertList,(function(e,n){return r("alert",{key:n,attrs:{color:e.color||"green",heading:e.heading||"",message:e.message||""},on:{closeAlert:function(e){return t.removeAlertSynchronously(n)}}},[t._v("\n            "+t._s(t.removeAlertAsynchronously(n))+"\n            "),"success"===e.type?r("iconify-icon",{attrs:{icon:t.icons.success}}):r("iconify-icon",{attrs:{icon:t.icons.error}})],1)})),1),t._v(" "),r("header",{staticClass:"bg-primary-500 pt-3 pb-24"},[r("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto"},[r("div",{staticClass:"flex justify-between items-center py-4"},[r("div",{staticClass:"w-20 flex items-center"},[r("img",{staticClass:"w-10",attrs:{src:""+t.$page.auth.settings.dashboard_logo,alt:t.$page.auth.settings.app_name+" logo"}}),t._v(" "),r("p",{staticClass:"text-white ml-3 capitalize"},[t._v("\n                        "+t._s(t.$page.auth.settings.app_name)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-end"},[r("inertia-link",{staticClass:"inline-block border-4 rounded-full border-primary-300 hover:border-primary-400",attrs:{href:t.$route.relativePath("client.ac_view")}},[r("avatar",{attrs:{size:"sm",src:t.$page.user.avatar||""}})],1)],1)]),t._v(" "),r("nav",{staticClass:"w-full"},[r("ul",{staticClass:"list-none m-0 p-0 flex overflow-x-auto items-center py-4"},[r("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.1s"}},[r("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.dashboard")},attrs:{href:t.$route.relativePath("client.dashboard")}},[t._v("Dashboard")])],1),t._v(" "),r("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.3s"}},[r("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.profile.index")},attrs:{href:t.$route.relativePath("client.profile.index")}},[t._v("Profile")])],1),t._v(" "),r("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.5s"}},[r("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.invoice")},attrs:{href:t.$route.relativePath("client.invoice")}},[t._v("Invoice")])],1)])])])]),t._v(" "),r("main",{staticStyle:{"margin-top":"-5rem"}},[r("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto pb-20"},[t._t("default")],2)])],1)}),[],!1,null,"4f9a3064",null);e.a=c.exports},16:function(t,e,r){t.exports=r(97)},18:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7l-7 7"/></g>',width:24,height:24}},23:function(t,e,r){var n=r(89);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(2)(n,a);n.locals&&(t.exports=n.locals)},51:function(t,e,r){"use strict";r.r(e);var n=r(16),a=r.n(n),i=r(12),o=r(15),s=r.n(o),l=r(6),c=r.n(l),u=r(7),h=r.n(u),d=r(18),p=r.n(d);function f(t,e,r,n,a,i,o){try{var s=t[i](o),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}var v={name:"Dashboard",layout:i.a,components:{ProfileCard:function(){return r.e(42).then(r.bind(null,147))},StepDetail:function(){return r.e(42).then(r.bind(null,149))}},data:function(){return{icons:{cRight:s.a,check:c.a,fail:h.a,arrow_right:p.a},countries:[],selectedCountry:"Nigeria",profileSteps:{}}},computed:{profileStage:function(){return"payment"===this.$page.user.profile_stage?{width:30.33,color:"gray"}:"audition"===this.$page.user.profile_stage?{width:60.66,color:"yellow"}:{width:100,color:"green"}},getCurrencySymbol:function(){return"Nigeria"===this.selectedCountry?"₦":"$"},getRegisterationFee:function(){return"Nigeria"===this.selectedCountry?parseFloat(this.$page.auth.settings.naira_charge):parseFloat(this.$page.auth.settings.dollar_charge)},transactionData:function(){return this.$page.user.transactions.length>0&&this.$page.user.transactions[0]},competitionData:function(){return this.$page.user.competitions}},filters:{changeNumberFormat:function(t){return new Intl.NumberFormat("en-US",{minimumFractionDigits:0}).format(isNaN(t)?0:t)}},methods:{getCountries:function(){return(t=a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(23).then(r.bind(null,148));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){f(i,n,a,o,s,"next",t)}function s(t){f(i,n,a,o,s,"throw",t)}o(void 0)}))})();var t},selectCountry:function(t){this.selectedCountry=t}},mounted:function(){var t=this;t.profileSteps={medicals:t.$page.user.has_completed_medicals,emergency:t.$page.user.has_completed_emergency,identity:t.$page.user.has_completed_identity,travel:t.$page.user.has_completed_travel,persona:t.$page.user.has_completed_persona,social:t.$page.user.has_completed_social},this.getCountries().then((function(e){t.countries=e.default}))}},g=r(0),m=Object(g.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"mb-10"},[r("title-board",{attrs:{boardTitle:"Dashboard",boardText:"Statistical data as at 20th September, 2020",hostName:t.$page.auth.settings.app_url,boardImgLink:"img/board_img/dashboard.svg"}})],1),t._v(" "),r("section",{staticClass:"flex flex-wrap md:flex-no-wrap"},[r("div",{staticClass:"md:w-4/12 w-full mb-10 md:mr-10"},[r("card-bg",[r("h3",{staticClass:"text-lg font-bold mb-6"},[t._v("Statistics")]),t._v(" "),r("div",{staticClass:"mb-5"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                        Competition\n                    ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v("\n                        Miss May Day Pageant\n                        "+t._s(t.competitionData.year||"2020")+"\n                    ")])]),t._v(" "),null!==t.$page.user.position?r("div",{staticClass:"flex justify-between items-center mb-5"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                        Position\n                    ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v(t._s(t.$page.user.position))])]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-between items-center mb-5"},[r("div",[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Payment Status\n                        ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v("\n                            "+t._s(1===t.$page.user.has_paid?"Paid":"Unpaid")+"\n                        ")])]),t._v(" "),r("span",{staticClass:"inline-flex justify-center items-center rounded-full w-8 h-8",class:[1==t.$page.user.has_paid?"bg-yellow-200 text-yellow-500":"bg-red-200 text-red-500"]},[r("iconify-icon",{attrs:{icon:t.$page.user.has_paid?t.icons.check:t.icons.fail}})],1)]),t._v(" "),r("div",[r("div",{staticClass:"flex justify-between items-center mb-2"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Profile stage\n                        ")]),t._v(" "),r("p",{staticClass:"text-gray-900 capitalize"},[t._v("\n                            "+t._s(t.$page.user.profile_stage)+"\n                        ")])]),t._v(" "),r("div",{staticClass:"h-3 rounded-lg overflow-hidden bg-primaryBg-300"},[r("div",{class:["h-8 bg-"+t.profileStage.color+"-500"],style:{width:t.profileStage.width+"%"}})])])])],1),t._v(" "),r("div",{staticClass:"md:w-9/12 w-full"},[r("card-bg",{attrs:{extend:"mb-10"}},[r("div",{staticClass:"mb-6"},[r("h3",{staticClass:"text-lg font-bold"},[t._v("Registration Steps")]),t._v(" "),r("p",{staticClass:"text-sm"},[t._v("\n                        Below is a list of profile update steps which should\n                        be completed to enable you stand a chance of being\n                        accpted for the competition\n                    ")])]),t._v(" "),r("step-detail",{attrs:{steps:t.profileSteps}}),t._v(" "),1===t.$page.user.has_paid?r("div",{staticClass:"flex justify-end mt-6"},[r("inertia-link",{staticClass:"inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600",attrs:{href:t.$route.relativePath("client.profile.index")}},[r("span",{staticClass:"mr-2"},[t._v("View and Edit Profile")]),t._v(" "),r("iconify-icon",{attrs:{icon:t.icons.arrow_right}})],1)],1):t._e()],1),t._v(" "),0===t.$page.user.has_paid?r("card-bg",{attrs:{extend:"mb-10"}},[r("form",{attrs:{action:t.$route.url("client.payment.initiate"),method:"POST",id:"payment"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_token",form:"payment"},domProps:{value:t.$page.token}}),t._v(" "),r("div",{staticClass:"rounded-md bg-auto bg-yellow-500 p-5 mb-5",style:{"background-image":"url("+t.$page.auth.settings.app_url+"/img/background_1.svg)"}},[r("div",{staticClass:"w-9/12"},[r("h3",{staticClass:"text-2xl md:text-3xl mb-1 text-black font-bold"},[t._v("\n                            Please Make Payment\n                        ")]),t._v(" "),r("p",{staticClass:"text-black text-sm"},[t._v("\n                            Paying for the contest gives you access to\n                            update your profile which in turn increases your\n                            chances of being selected for the competition\n                        ")])])]),t._v(" "),r("div",{staticClass:"flex mb-5 justify-between items-center"},[r("h6",{},[t._v("Regisration Fee")]),t._v(" "),r("span",{staticClass:"text-2xl text-black font-bold md:text-4xl"},[t._v(t._s(t.getCurrencySymbol)+t._s(t._f("changeNumberFormat")(t.getRegisterationFee)))])]),t._v(" "),r("div",[r("primary-btn",{attrs:{type:"submit",form:"payment",color:"yellow",fontColor:"text-black",width:"w-full"}},[t._v("\n                        Pay and Update Profile")])],1)]):t._e(),t._v(" "),1===t.$page.user.has_paid?r("card-bg",{attrs:{extend:"mb-10"}},[r("h3",{staticClass:"text-lg font-bold mb-5"},[t._v("Payment Summary")]),t._v(" "),r("div",{staticClass:"flex flex-wrap mb-5"},[r("div",{staticClass:"w-full md:w-4/12 mb-4 md:pr-2"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Payment Status\n                        ")]),t._v(" "),r("p",{staticClass:"text-green-500"},[t._v("Paid")])]),t._v(" "),r("div",{staticClass:"w-full md:w-4/12 mb-4 md:pr-2"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Amount\n                        ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v("\n                            ₦"+t._s(t._f("changeNumberFormat")(t.transactionData.amount))+"\n                        ")])]),t._v(" "),r("div",{staticClass:"w-full md:w-4/12 mb-4 md:pr-2"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Payment Gateway\n                        ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v("Paystack")])]),t._v(" "),r("div",{staticClass:"w-full md:w-4/12 mb-4 md:pr-2"},[r("h6",{staticClass:"uppercase text-xs tracking-widest"},[t._v("\n                            Date of Payment\n                        ")]),t._v(" "),r("p",{staticClass:"text-gray-900"},[t._v("\n                            "+t._s(t.transactionData.human_date_of_payment)+"\n                        ")])])]),t._v(" "),r("div",{staticClass:"flex justify-end"},[r("inertia-link",{staticClass:"inline-flex p-1 items-center text-yellow-500 hover:text-yellow-600",attrs:{href:t.$route.relativePath("client.invoice")}},[r("span",{staticClass:"mr-2"},[t._v("View Invoice")]),t._v(" "),r("iconify-icon",{attrs:{icon:t.icons.arrow_right}})],1)],1)]):t._e()],1)])])}),[],!1,null,null,null);e.default=m.exports},6:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></g>',width:24,height:24}},7:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></g>',width:24,height:24}},88:function(t,e,r){"use strict";r(23)},89:function(t,e,r){(t.exports=r(1)(!1)).push([t.i,".nav-link[data-v-4f9a3064]{color:var(--primary-100);font-size:.875rem;display:inline-block;padding:.5rem;border-radius:.375rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nav-link.active[data-v-4f9a3064],.nav-link[data-v-4f9a3064]:focus,.nav-link[data-v-4f9a3064]:hover{color:#fff;background-color:var(--primary-600)}",""])},97:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return $()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=w(o,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function h(){}function d(){}function p(){}var f={};s(f,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,a)&&(f=g);var m=p.prototype=h.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(a,i){function o(){return new e((function(n,o){!function n(a,i,o,s){var l=c(t[a],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:void 0,done:!0}}return d.prototype=p,s(m,"constructor",p),s(p,"constructor",d),d.displayName=s(p,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new _(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(m),s(m,o,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);