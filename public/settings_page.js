(window.webpackJsonp=window.webpackJsonp||[]).push([[42,32,33,34,39],{"/l1R":function(e,t,a){"use strict";a.r(t);var s={name:"UserInterface",data:function(){return{color_scheme:this.$page.auth.settings.color_scheme,auth_logo:"",dashboard_logo:""}},methods:{setFileInput:function(e,t){this[t]=e},updateUserInterface:function(){var e=new FormData;e.append("color_scheme",this.color_scheme),""!==this.auth_logo&&e.append("auth_logo",this.auth_logo),""!==this.dashboard_logo&&e.append("dashboard_logo",this.dashboard_logo),this.$inertia.post(this.$route.relativePath("settings.user_interface"),e)}},updated:function(){"success"===this.$page.auth.alert_type&&setTimeout((function(){return window.location.reload()}),800)}},i=a("KHd+"),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pb-8 md:w-7/12 mt-8"},[a("form",{attrs:{id:"user_interface_form"},on:{submit:function(t){return t.preventDefault(),e.updateUserInterface(t)}}}),e._v(" "),a("div",{staticClass:"mb-12 reveal-left",staticStyle:{"--delay":"0.1s"}},[e._m(0),e._v(" "),a("div",{staticClass:"reveal-up",staticStyle:{"--delay":"0.5s"}},[a("select-input",{attrs:{form:"user_interface_form",value:e.color_scheme,label:"Choose a color scheme",error:e.$page.errors.color_scheme},model:{value:e.color_scheme,callback:function(t){e.color_scheme=t},expression:"color_scheme"}},e._l(e.$page.color_schemes,(function(t,s){return a("option",{key:s,staticClass:"capitalize",domProps:{value:t}},[e._v(e._s(t))])})),0)],1)]),e._v(" "),a("div",{staticClass:"mb-12 reveal-left",staticStyle:{"--delay":"0.3s"}},[e._m(1),e._v(" "),a("div",{staticClass:"reveal-up",staticStyle:{"--delay":"1.3s"}},[a("file-input",{attrs:{form:"user_interface_form",error:e.$page.errors.dashboard_logo||"",label:"File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"},on:{input:function(t){return e.setFileInput(t,"dashboard_logo")}}})],1)]),e._v(" "),a("div",{staticClass:"mb-12 reveal-left",staticStyle:{"--delay":"0.5s"}},[e._m(2),e._v(" "),a("div",{staticClass:"reveal-up",staticStyle:{"--delay":"2.1s"}},[a("file-input",{attrs:{form:"user_interface_form",error:e.$page.errors.auth_logo||"",label:"File should be 500kb max and should be one of the following formats : JPG, PNG, JPEG"},on:{input:function(t){return e.setFileInput(t,"auth_logo")}}})],1)]),e._v(" "),a("div",{staticClass:"flex justify-end reveal-up",staticStyle:{"--delay":"2.3s"}},[a("primary-btn",{attrs:{form:"user_interface_form",width:"w-full md:w-auto",type:"submit"}},[e._v("Update User Interface")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-5"},[t("h2",{staticClass:"text-lg font-bold mb-3 reveal-up",staticStyle:{"--delay":"0.1s"}},[this._v("\n                Color Scheme Settings\n            ")]),this._v(" "),t("p",{staticClass:"reveal-up",staticStyle:{"--delay":"0.3s"}},[this._v("Changing the color scheme of the software interface to suite your company branding")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-5"},[t("h2",{staticClass:"text-lg font-bold mb-3 reveal-up",staticStyle:{"--delay":"0.9s"}},[this._v("\n                Dashboard Logo\n            ")]),this._v(" "),t("p",{staticClass:"reveal-up",staticStyle:{"--delay":"1.1s"}},[this._v("Please use an image type with a high contrast color for your dashboard logo as it will be used on a low contrast background")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-5"},[t("h2",{staticClass:"text-lg font-bold reveal-up mb-3",staticStyle:{"--delay":"1.7s"}},[this._v("\n                Authentication Logo\n            ")]),this._v(" "),t("p",{staticClass:"reveal-up",staticStyle:{"--delay":"1.9s"}},[this._v("Please use an image type with a low contrast color for your authentication page logo as it will be used in all authentication pages which have a high contrast background")])])}],!1,null,null,null);t.default=l.exports},"6Cy0":function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>',width:24,height:24}},IS22:function(e,t,a){"use strict";a.r(t);var s={name:"FactoryReset",data:function(){return{password:""}},methods:{activateFactoryReset:function(){this.$inertia.post(this.$route.relativePath("settings.factory_reset"),{password:this.password})}},updated:function(){"success"===this.$page.auth.alert_type&&setTimeout((function(){return window.location.reload()}),800)}},i=a("KHd+"),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pb-8 md:w-7/12 mt-8 reveal-left",staticStyle:{"--delay":"0.1s"}},[a("form",{attrs:{id:"factory_reset_form"},on:{submit:function(t){return t.preventDefault(),e.activateFactoryReset(t)}}}),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"mb-8 reveal-up",staticStyle:{"--delay":"0.5s"}},[a("text-input",{attrs:{label:"Confirm your password",error:e.$page.errors.password||"",type:"password",form:"factory_reset_form"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("div",{staticClass:"flex justify-end reveal-up",staticStyle:{"--delay":"0.7s"}},[a("primary-btn",{attrs:{color:"red",form:"factory_reset_form",width:"w-full md:w-auto",type:"submit"}},[e._v("Activate Factory Reset")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-8"},[t("h2",{staticClass:"text-lg font-bold reveal-up mb-3",staticStyle:{"--delay":"0.1s"}},[this._v("\n            Factory Reset Settings\n        ")]),this._v(" "),t("p",{staticClass:"reveal-up",staticStyle:{"--delay":"0.3s"}},[this._v("Please be warned that this action is irreversible as all topics, subjects, questions and collections will be wiped off while all settings will be returned to their default state")])])}],!1,null,null,null);t.default=l.exports},Ne4g:function(e,t,a){"use strict";a.r(t);a("m/BY");var s={props:{extend:String,firstName:String,lastName:String,active:{default:!0,type:Boolean},avatar:String},components:{Avatar:function(){return a.e(43).then(a.bind(null,"m/BY"))}}},i=a("KHd+"),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full overflow-hidden rounded-md shadow-sm",class:[e.extend],staticStyle:{"--delay":"0.1s"}},[a("div",{staticClass:"h-20 w-full bg-primary-900"}),e._v(" "),a("div",{staticClass:"p-10 md:p-12 bg-white"},[a("div",{staticClass:"flex items-center flex-col",staticStyle:{"margin-top":"-90px"}},[a("picture",{staticClass:"inline-block rounded-full border-4 border-white mx-auto"},[a("avatar",{attrs:{size:"md",src:e.avatar}})],1),e._v(" "),a("p",{staticClass:"font-bold text-center text-sm"},[e._v(e._s(e.firstName||"Firstname")),a("br"),e._v(e._s(e.lastName||"Lastname")+" ")]),e._v(" "),a("div",{staticClass:"flex justify-center mt-5"},[a("span",{staticClass:"inline-block rounded-md text-xs  px-2 py-1 mr-2",class:{"bg-yellow-300":!0===e.active,"bg-red-300":!1===e.active}},[e._v("\n                    "+e._s(!0===e.active?"Active":"Inactive")+"\n                ")]),e._v(" "),a("span",{staticClass:"inline-flex rounded-md text-xs px-2 py-1 mr-2 border"},[e._t("default")],2)])])])])}),[],!1,null,null,null);t.default=l.exports},NkMc:function(e,t,a){"use strict";a.r(t);var s={name:"General",data:function(){return{general:{app_name:this.$page.auth.settings.app_name,app_email:this.$page.auth.settings.app_email,app_url:this.$page.auth.settings.app_url,color_scheme:this.$page.auth.settings.color_scheme,disable_client_profile_modification:1==this.$page.auth.settings.disable_client_profile_modification,disable_client_registration:1==this.$page.auth.settings.disable_client_registration,recieve_client_emails:1==this.$page.auth.settings.recieve_client_emails,naira_charge:this.$page.auth.settings.naira_charge||0,dollar_charge:this.$page.auth.settings.dollar_charge||0}}},methods:{submitGeneralSetting:function(){this.$inertia.put(this.$route.relativePath("settings.update"),this.general)}}},i=a("KHd+"),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pb-8 md:w-7/12 mt-8 reveal-left",staticStyle:{"--delay":"0.1s"}},[a("form",{attrs:{id:"general_settings_form"},on:{submit:function(t){return t.preventDefault(),e.submitGeneralSetting(t)}}}),e._v(" "),a("h2",{staticClass:"text-lg font-bold mb-8"},[e._v("\n        General Settings\n    ")]),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.1s"}},[a("text-input",{attrs:{error:e.$page.errors.app_name||"",form:"general_settings_form",label:"Application Name"},model:{value:e.general.app_name,callback:function(t){e.$set(e.general,"app_name",t)},expression:"general.app_name"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.3s"}},[a("text-input",{attrs:{error:e.$page.errors.app_email||"",form:"general_settings_form",label:"Application Email"},model:{value:e.general.app_email,callback:function(t){e.$set(e.general,"app_email",t)},expression:"general.app_email"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[a("text-input",{attrs:{error:e.$page.errors.app_url||"",form:"general_settings_form",label:"Application URL"},model:{value:e.general.app_url,callback:function(t){e.$set(e.general,"app_url",t)},expression:"general.app_url"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[a("text-input",{attrs:{type:"number",error:e.$page.errors.naira_charge||"",form:"general_settings_form",label:"Payment Fee (Naira)"},model:{value:e.general.naira_charge,callback:function(t){e.$set(e.general,"naira_charge",t)},expression:"general.naira_charge"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[a("text-input",{attrs:{type:"number",error:e.$page.errors.dollar_charge||"",form:"general_settings_form",label:"Payment Fee (Dollars)"},model:{value:e.general.dollar_charge,callback:function(t){e.$set(e.general,"dollar_charge",t)},expression:"general.dollar_charge"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1s"}},[a("switch-input",{attrs:{error:e.$page.errors.disable_client_profile_modification||"",label:"Disable Client Profile Modification"},model:{value:e.general.disable_client_profile_modification,callback:function(t){e.$set(e.general,"disable_client_profile_modification",t)},expression:"general.disable_client_profile_modification"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1.3s"}},[a("switch-input",{attrs:{error:e.$page.errors.disable_client_registration||"",label:"Disable Client Modification"},model:{value:e.general.disable_client_registration,callback:function(t){e.$set(e.general,"disable_client_registration",t)},expression:"general.disable_client_registration"}})],1),e._v(" "),a("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1.5s"}},[a("switch-input",{attrs:{error:e.$page.errors.recieve_client_emails||"",label:"Recieve Client Emails"},model:{value:e.general.recieve_client_emails,callback:function(t){e.$set(e.general,"recieve_client_emails",t)},expression:"general.recieve_client_emails"}})],1),e._v(" "),a("div",{staticClass:"flex justify-end reveal-up",staticStyle:{"--delay":"1.7s"}},[a("primary-btn",{attrs:{form:"general_settings_form",width:"w-full md:w-auto",type:"submit"}},[e._v("Save Changes")])],1)])}),[],!1,null,null,null);t.default=l.exports},Q1zM:function(e,t,a){"use strict";a("S46D")},S46D:function(e,t,a){var s=a("rJjD");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},chsq:function(e,t,a){"use strict";a.r(t);var s=a("/Izu"),i=a.n(s),l=a("u8FZ"),r=a.n(l),n={props:{steps:{type:Object,default:function(){return{}}}},data:function(){return{icons:{check:i.a,fail:r.a}}}},o=a("KHd+"),c=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-wrap"},e._l(e.steps,(function(t,s){return a("div",{key:s,staticClass:"rounded-md inline-flex items-center border p-1 mr-3 mb-3"},[a("span",{staticClass:"mr-3 capitalize"},[e._v(e._s(s))]),e._v(" "),a("span",{staticClass:"inline-flex justify-center items-center rounded-full w-6 h-6",class:[1===t?"text-yellow-500 bg-yellow-200":"text-red-500 bg-red-200"]},[a("iconify-icon",1===t?{attrs:{icon:e.icons.check}}:{attrs:{icon:e.icons.fail}})],1)])})),0)}),[],!1,null,null,null);t.default=c.exports},ea4Z:function(e,t,a){var s=a("hO6B");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},hO6B:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".lg[data-v-7b7627e4]{width:10rem;height:10rem}.md[data-v-7b7627e4]{width:5rem;height:5rem}.sm[data-v-7b7627e4]{width:2.5rem;height:2.5rem}",""])},idBl:function(e,t,a){"use strict";a("ea4Z")},"m/BY":function(e,t,a){"use strict";a.r(t);var s=a("6Cy0"),i=a.n(s),l={props:{src:{default:"",type:String},alt:String,size:{default:"sm",type:String}},data:function(){return{user:i.a}},computed:{defaultAvatarSize:function(){return"sm"===this.size?20:"md"===this.size?40:"lg"===this.size?70:void 0}}},r=(a("idBl"),a("KHd+")),n=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figure",{staticClass:"overflow-hidden rounded-full bg-primaryBg-300",class:{md:"md"==e.size,lg:"lg"==e.size,sm:"sm"==e.size}},[""==e.src?a("div",{staticClass:"flex items-center justify-center w-full h-full"},[a("iconify-icon",{attrs:{width:e.defaultAvatarSize,height:e.defaultAvatarSize,icon:e.user}})],1):a("img",{staticClass:"block object-center object-fill w-full",attrs:{src:""+e.src,alt:e.alt}})])}),[],!1,null,"7b7627e4",null);t.default=n.exports},rJjD:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".modal-backdrop[data-v-b375d48a]{background:rgba(0,0,0,.6);z-index:1000;display:block;left:0}.modal[data-v-b375d48a],.modal-backdrop[data-v-b375d48a]{width:100vw;height:100vh;position:fixed;top:0;right:0;bottom:0}.modal[data-v-b375d48a]{z-index:1100;background-color:#fff}.modal>header[data-v-b375d48a]{height:8vh;border-bottom-width:1px;border-color:#edf2f7;padding:.5rem 1rem}.modal>.body[data-v-b375d48a]{overflow-y:auto;padding:1.25rem;height:92vh}@media (min-width:768px){.modal[data-v-b375d48a]{width:50%}}@media (min-width:1024px){.modal[data-v-b375d48a]{width:25%}}",""])},uuIC:function(e,t,a){"use strict";a.r(t);var s={props:{isOpen:{type:Boolean,default:!1},deactivateCloseBtn:{type:Boolean,default:!1}},data:function(){return{body:document.querySelector("body")}},watch:{isOpen:function(e,t){return!0===e?this.hideScrollBar():this.showScrollBar()}},methods:{closeModal:function(){if(!1===this.deactivateCloseBtn)return this.$emit("update:isOpen",!1)},hideScrollBar:function(){this.body.classList.add("overflow-y-hidden")},showScrollBar:function(){this.body.classList.remove("overflow-y-hidden")}},mounted:function(){var e=this;window.addEventListener("keyup",(function(t){t.preventDefault(),27==t.keyCode&&e.closeModal()}))}},i=(a("Q1zM"),a("KHd+")),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.isOpen?a("div",{staticClass:"container"},[a("transition-group",{attrs:{tag:"div"}},[a("aside",{key:"backdrop",staticClass:"modal-backdrop",on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}}),e._v(" "),a("div",{key:"modal",staticClass:"modal"},[0==e.deactivateCloseBtn?a("header",[a("a",{staticClass:"text-sm flex items-center",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}},[a("span",{staticClass:"flaticon-left-chevron"}),e._v("  \n                "),a("span",[e._v("Back")])])]):e._e(),e._v(" "),a("div",{staticClass:"body"},[e._t("default")],2)])])],1):e._e()}),[],!1,null,"b375d48a",null);t.default=l.exports}}]);