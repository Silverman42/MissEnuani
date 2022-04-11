(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></g>',width:24,height:24}},11:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></g>',width:24,height:24}},22:function(t,e,a){var s=a(87);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(2)(s,i);s.locals&&(t.exports=s.locals)},4:function(t,e,a){"use strict";var s=a(6),i=a.n(s),r=a(7),n=a.n(r),o={name:"Layout",components:{Alert:function(){return a.e(40).then(a.bind(null,152))},AlertContainer:function(){return a.e(40).then(a.bind(null,153))}},data:function(){return{icons:{success:i.a,error:n.a},alertList:[],logo_link:"img/dashboard_logo.svg"}},watch:{$page:{handler:function(){this.pushNewAlert()},deep:!0}},methods:{logout:function(){document.querySelector("#logoutForm").submit()},removeAlertSynchronously:function(t){this.alertList.splice(t,1)},removeAlertAsynchronously:function(t){var e=this;setTimeout((function(){e.alertList.splice(t,1)}),3e3)},pushNewAlert:function(){var t=this.alertList;null!==this.$page.auth.alert_type&&(t.push({type:this.$page.auth.alert_type,color:"success"===this.$page.auth.alert_type?"green":"red",message:this.$page.auth.alert_message,heading:this.$page.auth.alert_heading}),this.alertList=t)}}},l=(a(86),a(0)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("alert-container",t._l(t.alertList,(function(e,s){return a("alert",{key:s,attrs:{color:e.color||"green",heading:e.heading||"",message:e.message||""},on:{closeAlert:function(e){return t.removeAlertSynchronously(s)}}},[t._v("\n            "+t._s(t.removeAlertAsynchronously(s))+"\n            "),"success"===e.type?a("iconify-icon",{attrs:{icon:t.icons.success}}):a("iconify-icon",{attrs:{icon:t.icons.error}})],1)})),1),t._v(" "),a("header",{staticClass:" bg-primary-500 pt-3 pb-24"},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto"},[a("div",{staticClass:"flex justify-between items-center py-4"},[a("div",{staticClass:"w-20 flex items-center"},[a("img",{staticClass:"w-10",attrs:{src:""+t.$page.auth.settings.dashboard_logo,alt:t.$page.auth.settings.app_name+" logo"}}),t._v(" "),a("p",{staticClass:"text-white ml-3 capitalize"},[t._v(t._s(t.$page.auth.settings.app_name))])]),t._v(" "),a("div",{staticClass:"flex items-center justify-end"},[a("div",{staticClass:"mr-3"},[a("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]),t._v(" "),a("form",{attrs:{method:"POST",action:t.$route.url("logout"),hidden:"",id:"logoutForm"}},[a("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.auth.csrf_token}})])]),t._v(" "),a("p",{staticClass:"text-white"},[t._v("\n                        Profile\n                    ")])])]),t._v(" "),a("nav",{staticClass:"w-full"},[a("ul",{staticClass:"list-none m-0 p-0 flex overflow-x-auto items-center py-4"},[a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.1s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("admin.dashboard")},attrs:{href:t.$route.relativePath("admin.dashboard")}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.6s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("settings.view")},attrs:{href:t.$route.relativePath("settings.view")}},[t._v("Settings")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.6s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("users.view")},attrs:{href:t.$route.relativePath("users.view")}},[t._v("Users")])],1)])])])]),t._v(" "),a("main",{staticStyle:{"margin-top":"-5rem"}},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto pb-20"},[t._t("default")],2)])],1)}),[],!1,null,"4e0a2bec",null);e.a=c.exports},6:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></g>',width:24,height:24}},65:function(t,e,a){"use strict";a.r(e);var s=a(4),i=a(8),r=a.n(i),n=a(9),o=a.n(n),l=a(10),c=a.n(l),u=a(11),d=a.n(u),h={name:"ShowUsers",layout:s.a,data:function(){return{tabs:["profile-update","user-presence"],icons:{twitter:r.a,facebook:o.a,mail:c.a,phone:d.a},biodata:{first_name:this.$page.user.first_name||"",last_name:this.$page.user.last_name||"",email:this.$page.user.email},social:{facebook_url:this.$page.user.facebook_url,twitter_url:this.$page.user.twitter_url,phone_number:this.$page.user.phone_number},permissions:{"modify-subjects":!1,"modify-topics":!1,"modify-questions":!1,"modify-collection":!1,"modify-users":!1,"modify-settings":!1},userRole:"admin"}},methods:{refreshState:function(){},deactivateUser:function(t){!0===confirm("Are you sure you want to deactivate the user ?")&&this.$inertia.post(this.$route.relativePath("users.deactivate",t))},activateUser:function(t){!0===confirm("Are you sure you want to activate the user ?")&&this.$inertia.post(this.$route.relativePath("users.activate",t))},removeUser:function(t){!0===confirm("Are you sure you want to send this user to the recycle bin ?")&&this.$inertia.post(this.$route.relativePath("users.remove",t),{should_redirect:1})}},components:{ProfileCard:function(){return a.e(43).then(a.bind(null,147))},UpdateUser:function(){return a.e(44).then(a.bind(null,46))}},mounted:function(){var t=this.$page.user;console.log(t)}},p=a(0),f=Object(p.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"mb-10"},[a("title-board",{attrs:{boardTitle:"Show Users",boardText:"View and edit user information",hostName:t.$page.auth.settings.app_url,boardImgLink:"img/board_img/user.svg"}},[a("breadcrumb",[a("inertia-link",{staticClass:"text-primary-100 hover:text-white",attrs:{href:t.$route.relativePath("users.view")}},[t._v("\n                    User")]),t._v(" "),a("b-seperator"),t._v(" "),a("a",{staticClass:"hover:text-white",attrs:{href:"#"}},[t._v("Show Users")])],1)],1)],1),t._v(" "),a("section",{staticClass:"flex flex-wrap md:flex-no-wrap justify-between"},[a("div",{staticClass:"w-full mb-10 md:w-4/12 md:mr-10"},[a("profile-card",{attrs:{firstName:t.$page.user.first_name||"",lastName:t.$page.user.last_name||"",avatar:t.$page.user.avatar||"",active:1==t.$page.user.is_active}},[a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:t.$page.user.twitter||"#",title:"Twitter",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.twitter}})],1),t._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:t.$page.user.facebook||"#",title:"Facebook",target:"_blank",rel:"noopener noreferrer"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.facebook}})],1),t._v(" "),a("a",{staticClass:"mr-2 hover:text-primary-500",attrs:{href:"mailto:"+(t.$page.user.email||""),title:"phone"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.mail}})],1),t._v(" "),a("a",{staticClass:"hover:text-primary-500",attrs:{href:"tel:"+(t.$page.user.phone||""),title:"Phone"}},[a("iconify-icon",{attrs:{width:"15",icon:t.icons.phone}})],1)])],1),t._v(" "),a("div",{staticClass:"w-full md:flex-grow px-2 py-8 md:p-12 rounded-md bg-white shadow-sm reveal-left",staticStyle:{"--delay":"0.3s"}},[a("tabs",{attrs:{tabs:t.tabs,defaultActiveTab:"profile-update"},scopedSlots:t._u([{key:"tab-body-profile-update",fn:function(){return[a("section",{staticClass:"pt-8"},[a("update-user",{attrs:{buttonTitle:"Update Profile",permissionSet:t.permissions,socialSet:t.social,biodataSet:t.biodata,userRole:t.userRole,canResetValues:!1},on:{completeRegistration:t.refreshState}})],1)]},proxy:!0},{key:"tab-body-user-presence",fn:function(){return[1==t.$page.user.is_active?a("section",{staticClass:"pt-8"},[a("h3",{staticClass:"text-md font-extrabold"},[t._v("\n                            Deactivate User\n                        ")]),t._v(" "),a("p",{staticClass:"text-sm"},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.$page.user.first_name))]),t._v("\n                            will not be permitted to access any of the\n                            functionalities of this software after\n                            deactivation\n                        ")]),t._v(" "),a("div",{staticClass:"mt-8 flex justify-end"},[a("secondary-btn",{attrs:{color:"red",extraClass:"w-full md:w-auto"},on:{click:function(e){return t.deactivateUser(t.$page.user.id)}}},[t._v("Deactivate User")])],1)]):t._e(),t._v(" "),0==t.$page.user.is_active?a("section",{staticClass:"pt-8"},[a("h3",{staticClass:"text-md font-extrabold"},[t._v("\n                            Activate User\n                        ")]),t._v(" "),a("p",{staticClass:"text-sm"},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.$page.user.first_name))]),t._v("\n                            will be allowed to access all of the software's\n                            permitted functionalities after activation\n                        ")]),t._v(" "),a("div",{staticClass:"mt-8 flex justify-end"},[a("secondary-btn",{attrs:{color:"primary",extraClass:"w-full md:w-auto"},on:{click:function(e){return t.activateUser(t.$page.user.id)}}},[t._v("Activate User")])],1)]):t._e(),t._v(" "),a("section",{staticClass:"pt-12"},[a("h3",{staticClass:"text-md font-extrabold"},[t._v("Remove User")]),t._v(" "),a("p",[t._v("\n                            All of\n                            "),a("span",{staticClass:"capitalize"},[t._v(t._s(t.$page.user.first_name))]),t._v("'s data will be moved to recycle bin. In other\n                            words,\n                            "),a("span",{staticClass:"capitalize"},[t._v(t._s(t.$page.user.first_name))]),t._v("\n                            will not be allowed to access this application\n                        ")]),t._v(" "),a("div",{staticClass:"mt-8 flex justify-end"},[a("secondary-btn",{attrs:{color:"red",extraClass:"w-full md:w-auto"},on:{click:function(e){return t.removeUser(t.$page.user.id)}}},[t._v("Remove User")])],1)])]},proxy:!0}])})],1)])])}),[],!1,null,null,null);e.default=f.exports},7:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></g>',width:24,height:24}},8:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></g>',width:24,height:24}},86:function(t,e,a){"use strict";a(22)},87:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".nav-link[data-v-4e0a2bec]{color:var(--primary-100);font-size:.875rem;display:inline-block;padding:.5rem;border-radius:.375rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nav-link.active[data-v-4e0a2bec],.nav-link[data-v-4e0a2bec]:focus,.nav-link[data-v-4e0a2bec]:hover{color:#fff;background-color:var(--primary-600)}",""])},9:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></g>',width:24,height:24}}}]);