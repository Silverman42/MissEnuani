(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/Izu":function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></g>',width:24,height:24}},"8VQO":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".nav-link[data-v-7a6ef9ab]{color:var(--primary-100);font-size:.875rem;display:inline-block;padding:.5rem;border-radius:.375rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nav-link.active[data-v-7a6ef9ab],.nav-link[data-v-7a6ef9ab]:focus,.nav-link[data-v-7a6ef9ab]:hover{color:#fff;background-color:var(--primary-600)}",""])},BcOP:function(e,t,a){"use strict";a("w+Um")},"F/Mg":function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></g>',width:24,height:24}},PBBY:function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></g>',width:24,height:24}},Q1zM:function(e,t,a){"use strict";a("S46D")},S46D:function(e,t,a){var n=a("rJjD");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(e.exports=n.locals)},TXzf:function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></g>',width:24,height:24}},o3ma:function(e,t,a){"use strict";var n=a("/Izu"),r=a.n(n),i=a("u8FZ"),o=a.n(i),s={name:"Layout",components:{Alert:function(){return a.e(40).then(a.bind(null,"Dt6l"))},AlertContainer:function(){return a.e(40).then(a.bind(null,"1nOX"))},Avatar:function(){return a.e(39).then(a.bind(null,"m/BY"))}},data:function(){return{icons:{success:r.a,error:o.a},alertList:[],logo_link:"img/dashboard_logo.svg"}},watch:{$page:{handler:function(){this.pushNewAlert()},deep:!0}},methods:{logout:function(){document.querySelector("#logoutForm").submit()},removeAlertSynchronously:function(e){this.alertList.splice(e,1)},removeAlertAsynchronously:function(e){var t=this;setTimeout((function(){t.alertList.splice(e,1)}),3e3)},pushNewAlert:function(){var e=this.alertList;null!==this.$page.auth.alert_type&&(e.push({type:this.$page.auth.alert_type,color:"success"===this.$page.auth.alert_type?"green":"red",message:this.$page.auth.alert_message,heading:this.$page.auth.alert_heading}),this.alertList=e)}},mounted:function(){this.pushNewAlert()}},l=(a("BcOP"),a("KHd+")),d=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("alert-container",e._l(e.alertList,(function(t,n){return a("alert",{key:n,attrs:{color:t.color||"green",heading:t.heading||"",message:t.message||""},on:{closeAlert:function(t){return e.removeAlertSynchronously(n)}}},[e._v("\n            "+e._s(e.removeAlertAsynchronously(n))+"\n            "),"success"===t.type?a("iconify-icon",{attrs:{icon:e.icons.success}}):a("iconify-icon",{attrs:{icon:e.icons.error}})],1)})),1),e._v(" "),a("header",{staticClass:"bg-primary-500 pt-3 pb-24"},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto"},[a("div",{staticClass:"flex justify-between items-center py-4"},[a("div",{staticClass:"w-20 flex items-center"},[a("img",{staticClass:"w-10",attrs:{src:""+e.$page.auth.settings.dashboard_logo,alt:e.$page.auth.settings.app_name+" logo"}}),e._v(" "),a("p",{staticClass:"text-white ml-3 capitalize"},[e._v("\n                        "+e._s(e.$page.auth.settings.app_name)+"\n                    ")])]),e._v(" "),a("div",{staticClass:"flex items-center justify-end"},[a("inertia-link",{staticClass:"inline-block border-4 rounded-full border-primary-300 hover:border-primary-400",attrs:{href:e.$route.relativePath("client.ac_view")}},[a("avatar",{attrs:{size:"sm",src:e.$page.auth.avatar||""}})],1)],1)]),e._v(" "),a("nav",{staticClass:"w-full"},[a("ul",{staticClass:"list-none m-0 p-0 flex overflow-x-auto items-center py-4"},[a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.1s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:e.$route.isCurrent("client.dashboard")},attrs:{href:e.$route.relativePath("client.dashboard")}},[e._v("Dashboard")])],1),e._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.3s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:e.$route.isCurrent("client.profile.index")},attrs:{href:e.$route.relativePath("client.profile.index")}},[e._v("Profile")])],1),e._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.5s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:e.$route.isCurrent("client.invoice")},attrs:{href:e.$route.relativePath("client.invoice")}},[e._v("Invoice")])],1)])])])]),e._v(" "),a("main",{staticStyle:{"margin-top":"-5rem"}},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto pb-20"},[e._t("default")],2)])],1)}),[],!1,null,"7a6ef9ab",null);t.a=d.exports},rDeo:function(e,t,a){"use strict";a.r(t);var n=a("o3ma"),r=a("TXzf"),i=a.n(r),o=a("F/Mg"),s=a.n(o),l=a("PBBY"),d=a.n(l),c=a("tJjX"),u=a.n(c),p=(a("uuIC"),{name:"Profile",layout:n.a,data:function(){return{tabs:["identity","medicals","social","emergency","persona","travel"],icons:{twitter:i.a,facebook:s.a,mail:d.a,phone:u.a},biodata:{first_name:this.$page.user.first_name||"",last_name:this.$page.user.last_name||"",email:this.$page.user.email},social:{facebook_url:this.$page.user.facebook_url,twitter_url:this.$page.user.twitter_url,phone_number:this.$page.user.phone_number},modalOpen:!1,tabName:""}},methods:{showUpdateView:function(e){this.tabName=e,this.modalOpen=!0}},computed:{profileSteps:function(){return{medicals:this.$page.user.has_completed_medicals,emergency:this.$page.user.has_completed_emergency,identity:this.$page.user.has_completed_identity,travel:this.$page.user.has_completed_travel,persona:this.$page.user.has_completed_persona,social:this.$page.user.has_completed_social}},hasCompletedEmergency:function(){return 1==this.$page.user.has_completed_emergency},hasCompletedIdentity:function(){return 1==this.$page.user.has_completed_identity},hasCompletedMedicals:function(){return 1==this.$page.user.has_completed_medicals},hasCompletedPersona:function(){return 1==this.$page.user.has_completed_persona},hasCompletedSocial:function(){return 1==this.$page.user.has_completed_social},hasCompletedTravel:function(){return 1==this.$page.user.has_completed_travel}},components:{ProfileCard:function(){return a.e(43).then(a.bind(null,"Ne4g"))},IdentityTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"k03W"))},MedicalsTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"2VmU"))},EmergencyTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"IHV7"))},SocialTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"FB56"))},TravelTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"4mp9"))},PersonaTab:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"ctta"))},IdentityForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"wBDG"))},MedicalsForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"jcuR"))},EmergencyForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"hymF"))},SocialForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"nliC"))},TravelForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"nmed"))},PersonaForm:function(){return Promise.all([a.e(0),a.e(41)]).then(a.bind(null,"28SI"))},StepDetail:function(){return a.e(42).then(a.bind(null,"chsq"))},Modal:function(){return a.e(42).then(a.bind(null,"uuIC"))}}}),h=a("KHd+"),m=Object(h.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal",{attrs:{isOpen:e.modalOpen},on:{"update:isOpen":function(t){e.modalOpen=t},"update:is-open":function(t){e.modalOpen=t}}},[a("div",{staticClass:"border rounded-lg p-4 mb-10 text-xs"},[a("h6",{staticClass:"tracking-wider uppercase text-xs text-yellow-600"},[e._v("\n                Info\n            ")]),e._v(" "),a("p",[e._v("\n                Your profile data cannot be editted after update. This is to\n                maintain data integrity on our database. Please send a\n                message to\n                "),a("a",{staticClass:"text-primary-600 hover:text-primary-700",attrs:{href:"mailto:admin@missenuanipageant.ng"}},[e._v("admin@missenuanipageant.ng")]),e._v("\n                to enable edit if you do make mistakes\n            ")])]),e._v(" "),"identity"===e.tabName?a("identity-form"):e._e(),e._v(" "),"medicals"===e.tabName?a("medicals-form"):e._e(),e._v(" "),"social"===e.tabName?a("social-form"):e._e(),e._v(" "),"emergency"===e.tabName?a("emergency-form"):e._e(),e._v(" "),"persona"===e.tabName?a("persona-form"):e._e(),e._v(" "),"travel"===e.tabName?a("travel-form"):e._e()],1),e._v(" "),a("section",{staticClass:"mb-10"},[a("title-board",{attrs:{boardTitle:"Profile",boardText:"View and edit your profile data",hostName:e.$page.auth.settings.app_url,boardImgLink:"img/board_img/user.svg"}})],1),e._v(" "),a("section",{staticClass:"flex flex-wrap md:flex-no-wrap justify-between"},[a("div",{staticClass:"w-full mb-10 md:w-4/12 md:mr-10"},[a("profile-card",{attrs:{firstName:e.$page.user.first_name||"",lastName:e.$page.user.last_name||"",avatar:e.$page.user.avatar||"",active:1==e.$page.user.is_active}},[a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:e.$page.user.twitter_url||"#",title:"Twitter",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:e.icons.twitter}})],1),e._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:e.$page.user.facebook_url||"#",title:"Facebook",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:e.icons.facebook}})],1),e._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:"mailto:"+(e.$page.user.email||""),title:"phone"}},[a("iconify-icon",{attrs:{width:"15",icon:e.icons.mail}})],1),e._v(" "),a("a",{staticClass:"hover:text-primary-500",attrs:{href:"tel:"+(e.$page.user.phone_number||""),title:"Phone"}},[a("iconify-icon",{attrs:{width:"15",icon:e.icons.phone}})],1)])],1),e._v(" "),a("div",{staticClass:"w-full md:flex-grow",staticStyle:{"--delay":"0.3s"}},[a("card-bg",{attrs:{extend:"mb-10"}},[a("div",{staticClass:"mb-6"},[a("h3",{staticClass:"text-lg font-bold"},[e._v("Profile Steps")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("\n                        Below is a list of profile update steps which should\n                        be completed to enable you stand a chance of being\n                        accpted for the competition\n                    ")])]),e._v(" "),a("step-detail",{attrs:{steps:e.profileSteps}})],1),e._v(" "),a("card-bg",{attrs:{extend:"mb-10"}},[a("tabs",{attrs:{tabs:e.tabs,defaultActiveTab:"identity"},scopedSlots:e._u([{key:"tab-body-identity",fn:function(){return[a("identity-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedIdentity},on:{updateProfile:function(t){return e.showUpdateView("identity")}}})]},proxy:!0},{key:"tab-body-medicals",fn:function(){return[a("medicals-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedMedicals},on:{updateProfile:function(t){return e.showUpdateView("medicals")}}})]},proxy:!0},{key:"tab-body-social",fn:function(){return[a("social-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedSocial},on:{updateProfile:function(t){return e.showUpdateView("social")}}})]},proxy:!0},{key:"tab-body-emergency",fn:function(){return[a("emergency-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedEmergency},on:{updateProfile:function(t){return e.showUpdateView("emergency")}}})]},proxy:!0},{key:"tab-body-persona",fn:function(){return[a("persona-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedPersona},on:{updateProfile:function(t){return e.showUpdateView("persona")}}})]},proxy:!0},{key:"tab-body-travel",fn:function(){return[a("travel-tab",{attrs:{user:e.$page.user,hasCompleted:e.hasCompletedTravel},on:{updateProfile:function(t){return e.showUpdateView("travel")}}})]},proxy:!0}])})],1),e._v(" "),a("card-bg",{attrs:{extend:"mb-10"}},[a("div",{staticClass:"mb-6"},[a("h3",{staticClass:"text-lg font-bold"},[e._v("Voting link")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("\n                        The link below is a link to your voting page where\n                        you can be voted for to increase your chances of\n                        being voted for the final round. Copy the link and\n                        share to gather votes\n                    ")])]),e._v(" "),a("a",{staticClass:"p-4 rounded-lg bg-gray-100 border hover:bg-gray-200 block",attrs:{href:e.$page.auth.settings.app_url+"/contestant/"+e.$page.user.id,target:"_blank"}},[e._v("\n                    "+e._s(e.$page.auth.settings.app_url+"/contestant/"+e.$page.user.id)+"\n                ")])])],1)])],1)}),[],!1,null,null,null);t.default=m.exports},rJjD:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".modal-backdrop[data-v-b375d48a]{background:rgba(0,0,0,.6);z-index:1000;display:block;left:0}.modal[data-v-b375d48a],.modal-backdrop[data-v-b375d48a]{width:100vw;height:100vh;position:fixed;top:0;right:0;bottom:0}.modal[data-v-b375d48a]{z-index:1100;background-color:#fff}.modal>header[data-v-b375d48a]{height:8vh;border-bottom-width:1px;border-color:#edf2f7;padding:.5rem 1rem}.modal>.body[data-v-b375d48a]{overflow-y:auto;padding:1.25rem;height:92vh}@media (min-width:768px){.modal[data-v-b375d48a]{width:50%}}@media (min-width:1024px){.modal[data-v-b375d48a]{width:25%}}",""])},tJjX:function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></g>',width:24,height:24}},u8FZ:function(e,t){t.__esModule=!0,t.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></g>',width:24,height:24}},uuIC:function(e,t,a){"use strict";a.r(t);var n={props:{isOpen:{type:Boolean,default:!1},deactivateCloseBtn:{type:Boolean,default:!1}},data:function(){return{body:document.querySelector("body")}},watch:{isOpen:function(e,t){return!0===e?this.hideScrollBar():this.showScrollBar()}},methods:{closeModal:function(){if(!1===this.deactivateCloseBtn)return this.$emit("update:isOpen",!1)},hideScrollBar:function(){this.body.classList.add("overflow-y-hidden")},showScrollBar:function(){this.body.classList.remove("overflow-y-hidden")}},mounted:function(){var e=this;window.addEventListener("keyup",(function(t){t.preventDefault(),27==t.keyCode&&e.closeModal()}))}},r=(a("Q1zM"),a("KHd+")),i=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return 1==e.isOpen?a("div",{staticClass:"container"},[a("transition-group",{attrs:{tag:"div"}},[a("aside",{key:"backdrop",staticClass:"modal-backdrop",on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}}),e._v(" "),a("div",{key:"modal",staticClass:"modal"},[0==e.deactivateCloseBtn?a("header",[a("a",{staticClass:"text-sm flex items-center",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.closeModal(t)}}},[a("span",{staticClass:"flaticon-left-chevron"}),e._v("  \n                "),a("span",[e._v("Back")])])]):e._e(),e._v(" "),a("div",{staticClass:"body"},[e._t("default")],2)])])],1):e._e()}),[],!1,null,"b375d48a",null);t.default=i.exports},"w+Um":function(e,t,a){var n=a("8VQO");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(e.exports=n.locals)}}]);