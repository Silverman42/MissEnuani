(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/Izu":function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></g>',width:24,height:24}},"8VQO":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".nav-link[data-v-7a6ef9ab]{color:var(--primary-100);font-size:.875rem;display:inline-block;padding:.5rem;border-radius:.375rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nav-link.active[data-v-7a6ef9ab],.nav-link[data-v-7a6ef9ab]:focus,.nav-link[data-v-7a6ef9ab]:hover{color:#fff;background-color:var(--primary-600)}",""])},BcOP:function(t,e,a){"use strict";a("w+Um")},"F/Mg":function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></g>',width:24,height:24}},MTio:function(t,e,a){"use strict";a.r(e);var r=a("o3ma"),s=a("TXzf"),o=a.n(s),i=a("F/Mg"),n=a.n(i),l=a("PBBY"),c=a.n(l),d=a("tJjX"),u=a.n(d),p={name:"AccessControl",layout:r.a,data:function(){return{icons:{twitter:o.a,facebook:n.a,mail:c.a,phone:u.a},new_password_confirmation:"",old_password:"",new_password:""}},components:{ProfileCard:function(){return a.e(43).then(a.bind(null,"Ne4g"))}},methods:{logout:function(){!0===confirm("Are you sure you want to logout")&&this.$refs.logout_form.submit()},updatePassword:function(){var t=new FormData;t.append("new_password",this.new_password),t.append("new_password_confirmation",this.new_password_confirmation),t.append("old_password",this.old_password),this.$inertia.post(this.$route.relativePath("client.ac_password_change"),t)}}},h=a("KHd+"),f=Object(h.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"mb-10"},[a("title-board",{attrs:{boardTitle:"Access Control",boardText:"Update password and logout",hostName:t.$page.auth.settings.app_url,boardImgLink:"img/board_img/user.svg"}})],1),t._v(" "),a("section",{staticClass:"flex flex-wrap md:flex-no-wrap justify-between"},[a("div",{staticClass:"w-full mb-10 md:w-3/12 md:mr-10"},[a("profile-card",{attrs:{firstName:t.$page.user.first_name||"",lastName:t.$page.user.last_name||"",avatar:t.$page.user.avatar||"",active:1==t.$page.user.is_active}},[a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:t.$page.user.twitter_url||"#",title:"Twitter",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.twitter}})],1),t._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:t.$page.user.facebook_url||"#",title:"Facebook",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.facebook}})],1),t._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:"mailto:"+(t.$page.user.email||""),title:"phone"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.mail}})],1),t._v(" "),a("a",{staticClass:"hover:text-primary-500",attrs:{href:"tel:"+(t.$page.user.phone_number||""),title:"Phone"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.phone}})],1)])],1),t._v(" "),a("div",{staticClass:"w-full md:flex-grow",staticStyle:{"--delay":"0.3s"}},[a("card-bg",{attrs:{extend:"mb-10"}},[a("div",{staticClass:"mb-6"},[a("h3",{staticClass:"text-lg font-bold"},[t._v("Update Password")]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v("Change your password")])]),t._v(" "),a("div",{staticClass:"mb-6"},[a("form",{attrs:{id:"update-password"},on:{submit:function(e){return e.preventDefault(),t.updatePassword(e)}}}),t._v(" "),a("div",{staticClass:"mb-3"},[a("text-input",{attrs:{type:"password",label:"Old password",error:t.$page.errors.old_password||"",form:"update-password"},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}})],1),t._v(" "),a("div",{staticClass:"mb-3"},[a("text-input",{attrs:{type:"password",label:"New password",error:t.$page.errors.new_password||"",form:"update-password"},model:{value:t.new_password,callback:function(e){t.new_password=e},expression:"new_password"}})],1),t._v(" "),a("div",{staticClass:"mb-8"},[a("text-input",{attrs:{type:"password",label:"Confirm new password",error:t.$page.errors.new_password_confirmation||"",form:"update-password"},model:{value:t.new_password_confirmation,callback:function(e){t.new_password_confirmation=e},expression:"new_password_confirmation"}})],1),t._v(" "),a("div",[a("primary-btn",{attrs:{type:"submit",form:"update-password",width:"w-full",fontColor:"text-black",color:"yellow"}},[t._v("Update Password\n                        ")])],1)])]),t._v(" "),a("card-bg",{attrs:{extend:"mb-10"}},[a("div",{staticClass:"mb-6"},[a("h3",{staticClass:"text-lg font-bold"},[t._v("Logout")]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v("Logout from your account")])]),t._v(" "),a("form",{ref:"logout_form",attrs:{method:"POST",action:t.$route.url("logout")}},[a("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.auth.csrf_token}})]),t._v(" "),a("primary-btn",{attrs:{type:"submit",color:"red",fontColor:"text-white",width:"w-full"},on:{click:t.logout}},[t._v("Logout\n                ")])],1)],1)])])}),[],!1,null,null,null);e.default=f.exports},PBBY:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></g>',width:24,height:24}},TXzf:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></g>',width:24,height:24}},o3ma:function(t,e,a){"use strict";var r=a("/Izu"),s=a.n(r),o=a("u8FZ"),i=a.n(o),n={name:"Layout",components:{Alert:function(){return a.e(40).then(a.bind(null,"Dt6l"))},AlertContainer:function(){return a.e(40).then(a.bind(null,"1nOX"))},Avatar:function(){return a.e(39).then(a.bind(null,"m/BY"))}},data:function(){return{icons:{success:s.a,error:i.a},alertList:[],logo_link:"img/dashboard_logo.svg"}},watch:{$page:{handler:function(){this.pushNewAlert()},deep:!0}},methods:{logout:function(){document.querySelector("#logoutForm").submit()},removeAlertSynchronously:function(t){this.alertList.splice(t,1)},removeAlertAsynchronously:function(t){var e=this;setTimeout((function(){e.alertList.splice(t,1)}),3e3)},pushNewAlert:function(){var t=this.alertList;null!==this.$page.auth.alert_type&&(t.push({type:this.$page.auth.alert_type,color:"success"===this.$page.auth.alert_type?"green":"red",message:this.$page.auth.alert_message,heading:this.$page.auth.alert_heading}),this.alertList=t)}},mounted:function(){this.pushNewAlert()}},l=(a("BcOP"),a("KHd+")),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("alert-container",t._l(t.alertList,(function(e,r){return a("alert",{key:r,attrs:{color:e.color||"green",heading:e.heading||"",message:e.message||""},on:{closeAlert:function(e){return t.removeAlertSynchronously(r)}}},[t._v("\n            "+t._s(t.removeAlertAsynchronously(r))+"\n            "),"success"===e.type?a("iconify-icon",{attrs:{icon:t.icons.success}}):a("iconify-icon",{attrs:{icon:t.icons.error}})],1)})),1),t._v(" "),a("header",{staticClass:"bg-primary-500 pt-3 pb-24"},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto"},[a("div",{staticClass:"flex justify-between items-center py-4"},[a("div",{staticClass:"w-20 flex items-center"},[a("img",{staticClass:"w-10",attrs:{src:""+t.$page.auth.settings.dashboard_logo,alt:t.$page.auth.settings.app_name+" logo"}}),t._v(" "),a("p",{staticClass:"text-white ml-3 capitalize"},[t._v("\n                        "+t._s(t.$page.auth.settings.app_name)+"\n                    ")])]),t._v(" "),a("div",{staticClass:"flex items-center justify-end"},[a("inertia-link",{staticClass:"inline-block border-4 rounded-full border-primary-300 hover:border-primary-400",attrs:{href:t.$route.relativePath("client.ac_view")}},[a("avatar",{attrs:{size:"sm",src:t.$page.auth.avatar||""}})],1)],1)]),t._v(" "),a("nav",{staticClass:"w-full"},[a("ul",{staticClass:"list-none m-0 p-0 flex overflow-x-auto items-center py-4"},[a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.1s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.dashboard")},attrs:{href:t.$route.relativePath("client.dashboard")}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.3s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.profile.index")},attrs:{href:t.$route.relativePath("client.profile.index")}},[t._v("Profile")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.5s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("client.invoice")},attrs:{href:t.$route.relativePath("client.invoice")}},[t._v("Invoice")])],1)])])])]),t._v(" "),a("main",{staticStyle:{"margin-top":"-5rem"}},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto pb-20"},[t._t("default")],2)])],1)}),[],!1,null,"7a6ef9ab",null);e.a=c.exports},tJjX:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></g>',width:24,height:24}},u8FZ:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></g>',width:24,height:24}},"w+Um":function(t,e,a){var r=a("8VQO");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)}}]);