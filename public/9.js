(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/Izu":function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></g>',width:24,height:24}},"86Ak":function(t,e,a){var s=a("xuTF");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},FrsH:function(t,e,a){"use strict";var s=a("/Izu"),i=a.n(s),n=a("u8FZ"),r=a.n(n),o={name:"Layout",components:{Alert:function(){return a.e(40).then(a.bind(null,"Dt6l"))},AlertContainer:function(){return a.e(40).then(a.bind(null,"1nOX"))}},data:function(){return{icons:{success:i.a,error:r.a},alertList:[],logo_link:"img/dashboard_logo.svg"}},watch:{$page:{handler:function(){this.pushNewAlert()},deep:!0}},methods:{logout:function(){document.querySelector("#logoutForm").submit()},removeAlertSynchronously:function(t){this.alertList.splice(t,1)},removeAlertAsynchronously:function(t){var e=this;setTimeout((function(){e.alertList.splice(t,1)}),3e3)},pushNewAlert:function(){var t=this.alertList;null!==this.$page.auth.alert_type&&(t.push({type:this.$page.auth.alert_type,color:"success"===this.$page.auth.alert_type?"green":"red",message:this.$page.auth.alert_message,heading:this.$page.auth.alert_heading}),this.alertList=t)}}},l=(a("rvv8"),a("KHd+")),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("alert-container",t._l(t.alertList,(function(e,s){return a("alert",{key:s,attrs:{color:e.color||"green",heading:e.heading||"",message:e.message||""},on:{closeAlert:function(e){return t.removeAlertSynchronously(s)}}},[t._v("\n            "+t._s(t.removeAlertAsynchronously(s))+"\n            "),"success"===e.type?a("iconify-icon",{attrs:{icon:t.icons.success}}):a("iconify-icon",{attrs:{icon:t.icons.error}})],1)})),1),t._v(" "),a("header",{staticClass:" bg-primary-500 pt-3 pb-24"},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto"},[a("div",{staticClass:"flex justify-between items-center py-4"},[a("div",{staticClass:"w-20 flex items-center"},[a("img",{staticClass:"w-10",attrs:{src:""+t.$page.auth.settings.dashboard_logo,alt:t.$page.auth.settings.app_name+" logo"}}),t._v(" "),a("p",{staticClass:"text-white ml-3 capitalize"},[t._v(t._s(t.$page.auth.settings.app_name))])]),t._v(" "),a("div",{staticClass:"flex items-center justify-end"},[a("div",{staticClass:"mr-3"},[a("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]),t._v(" "),a("form",{attrs:{method:"POST",action:t.$route.url("logout"),hidden:"",id:"logoutForm"}},[a("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.auth.csrf_token}})])]),t._v(" "),a("p",{staticClass:"text-white"},[t._v("\n                        Profile\n                    ")])])]),t._v(" "),a("nav",{staticClass:"w-full"},[a("ul",{staticClass:"list-none m-0 p-0 flex overflow-x-auto items-center py-4"},[a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.1s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("admin.dashboard")},attrs:{href:t.$route.relativePath("admin.dashboard")}},[t._v("Dashboard")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.6s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("settings.view")},attrs:{href:t.$route.relativePath("settings.view")}},[t._v("Settings")])],1),t._v(" "),a("li",{staticClass:"inline-block reveal-up",style:{"--delay":"0.6s"}},[a("inertia-link",{staticClass:"nav-link",class:{active:t.$route.isCurrent("users.view")},attrs:{href:t.$route.relativePath("users.view")}},[t._v("Users")])],1)])])])]),t._v(" "),a("main",{staticStyle:{"margin-top":"-5rem"}},[a("div",{staticClass:"xl:w-9/12 w-11/12 mx-auto pb-20"},[t._t("default")],2)])],1)}),[],!1,null,"4e0a2bec",null);e.a=c.exports},KB7w:function(t,e,a){"use strict";a.r(e);var s=a("FrsH"),i=a("K3nH"),n=a.n(i),r={name:"Dashboard",layout:s.a,data:function(){return{icons:{cRight:n.a}}},mounted:function(){}},o=a("KHd+"),l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",[e("title-board",{attrs:{boardTitle:"Dashboard",boardText:"Statistical data as at 20th September, 2020",hostName:this.$page.auth.settings.app_url,boardImgLink:"img/board_img/dashboard.svg"}})],1)])}),[],!1,null,null,null);e.default=l.exports},rvv8:function(t,e,a){"use strict";a("86Ak")},u8FZ:function(t,e){e.__esModule=!0,e.default={body:'<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></g>',width:24,height:24}},xuTF:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".nav-link[data-v-4e0a2bec]{color:var(--primary-100);font-size:.875rem;display:inline-block;padding:.5rem;border-radius:.375rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nav-link.active[data-v-4e0a2bec],.nav-link[data-v-4e0a2bec]:focus,.nav-link[data-v-4e0a2bec]:hover{color:#fff;background-color:var(--primary-600)}",""])}}]);