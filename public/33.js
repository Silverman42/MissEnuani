(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{43:function(e,a,t){"use strict";t.r(a);var l={name:"General",data:function(){return{general:{app_name:this.$page.auth.settings.app_name,app_email:this.$page.auth.settings.app_email,app_url:this.$page.auth.settings.app_url,color_scheme:this.$page.auth.settings.color_scheme,disable_client_profile_modification:1==this.$page.auth.settings.disable_client_profile_modification,disable_client_registration:1==this.$page.auth.settings.disable_client_registration,recieve_client_emails:1==this.$page.auth.settings.recieve_client_emails,naira_charge:this.$page.auth.settings.naira_charge||0,dollar_charge:this.$page.auth.settings.dollar_charge||0}}},methods:{submitGeneralSetting:function(){this.$inertia.put(this.$route.relativePath("settings.update"),this.general)}}},i=t(0),r=Object(i.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"pb-8 md:w-7/12 mt-8 reveal-left",staticStyle:{"--delay":"0.1s"}},[t("form",{attrs:{id:"general_settings_form"},on:{submit:function(a){return a.preventDefault(),e.submitGeneralSetting(a)}}}),e._v(" "),t("h2",{staticClass:"text-lg font-bold mb-8"},[e._v("\n        General Settings\n    ")]),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.1s"}},[t("text-input",{attrs:{error:e.$page.errors.app_name||"",form:"general_settings_form",label:"Application Name"},model:{value:e.general.app_name,callback:function(a){e.$set(e.general,"app_name",a)},expression:"general.app_name"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.3s"}},[t("text-input",{attrs:{error:e.$page.errors.app_email||"",form:"general_settings_form",label:"Application Email"},model:{value:e.general.app_email,callback:function(a){e.$set(e.general,"app_email",a)},expression:"general.app_email"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[t("text-input",{attrs:{error:e.$page.errors.app_url||"",form:"general_settings_form",label:"Application URL"},model:{value:e.general.app_url,callback:function(a){e.$set(e.general,"app_url",a)},expression:"general.app_url"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[t("text-input",{attrs:{type:"number",error:e.$page.errors.naira_charge||"",form:"general_settings_form",label:"Payment Fee (Naira)"},model:{value:e.general.naira_charge,callback:function(a){e.$set(e.general,"naira_charge",a)},expression:"general.naira_charge"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"0.5s"}},[t("text-input",{attrs:{type:"number",error:e.$page.errors.dollar_charge||"",form:"general_settings_form",label:"Payment Fee (Dollars)"},model:{value:e.general.dollar_charge,callback:function(a){e.$set(e.general,"dollar_charge",a)},expression:"general.dollar_charge"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1s"}},[t("switch-input",{attrs:{error:e.$page.errors.disable_client_profile_modification||"",label:"Disable Client Profile Modification"},model:{value:e.general.disable_client_profile_modification,callback:function(a){e.$set(e.general,"disable_client_profile_modification",a)},expression:"general.disable_client_profile_modification"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1.3s"}},[t("switch-input",{attrs:{error:e.$page.errors.disable_client_registration||"",label:"Disable Client Modification"},model:{value:e.general.disable_client_registration,callback:function(a){e.$set(e.general,"disable_client_registration",a)},expression:"general.disable_client_registration"}})],1),e._v(" "),t("div",{staticClass:"mb-6 reveal-up",staticStyle:{"--delay":"1.5s"}},[t("switch-input",{attrs:{error:e.$page.errors.recieve_client_emails||"",label:"Recieve Client Emails"},model:{value:e.general.recieve_client_emails,callback:function(a){e.$set(e.general,"recieve_client_emails",a)},expression:"general.recieve_client_emails"}})],1),e._v(" "),t("div",{staticClass:"flex justify-end reveal-up",staticStyle:{"--delay":"1.7s"}},[t("primary-btn",{attrs:{form:"general_settings_form",width:"w-full md:w-auto",type:"submit"}},[e._v("Save Changes")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);