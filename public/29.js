(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{33:function(t,e,i){"use strict";i.r(e);var o={name:"Persona",data:function(){return{certificates:["Secondary School Certificate","Bachelor Degree","Master Degree (MSC)","Doctrorate Degree (PhD)"],educational_cert:"Secondary School Certificate",ambition:"",hobbies:"",profession:""}},methods:{changeCertificates:function(t){this.educational_cert=t},assignDefaults:function(){this.educational_cert=this.$page.user.educational_cert||"",this.hobbies=this.$page.user.hobbies||"",this.ambition=this.$page.user.ambition||"",this.profession=this.$page.user.profession||""},submitForm:function(){var t=this.educational_cert,e=this.hobbies,i=this.ambition,o=this.profession;this.$inertia.post(this.$route.relativePath("client.profile.update.persona"),{educational_cert:t,hobbies:e,ambition:i,profession:o})},mounted:function(){this.assignDefaults()}}},s=i(0),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("form",{attrs:{action:"",id:"persona"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}}),t._v(" "),i("div",{staticClass:"mb-3"},[i("text-input",{attrs:{label:"Hobbies",error:t.$page.errors.hobbies||"",form:"persona"},model:{value:t.hobbies,callback:function(e){t.hobbies=e},expression:"hobbies"}})],1),t._v(" "),i("div",{staticClass:"mb-3"},[i("text-input",{attrs:{label:"Profession",error:t.$page.errors.profession||"",form:"persona"},model:{value:t.profession,callback:function(e){t.profession=e},expression:"profession"}})],1),t._v(" "),i("div",{staticClass:"mb-3"},[i("text-input",{attrs:{label:"Ambition",error:t.$page.errors.ambition||"",form:"persona"},model:{value:t.ambition,callback:function(e){t.ambition=e},expression:"ambition"}})],1),t._v(" "),i("div",{staticClass:"mb-10"},[i("select-input",{attrs:{label:"Educational Certificate",value:t.educational_cert,error:t.$page.errors.educational_cert||"",form:"persona"},on:{input:function(e){return t.changeCertificates(e)}}},t._l(t.certificates,(function(e,o){return i("option",{key:o,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n            ")])})),0)],1),t._v(" "),i("primary-btn",{attrs:{form:"persona",type:"submit",color:"yellow",fontColor:"text-black",width:"w-full"}},[t._v("Update Persona")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-5"},[e("h3",{staticClass:"text-lg font-bold"},[this._v("Persona")]),this._v(" "),e("p",{staticClass:"text-sm"},[this._v("Work and Educational information")])])}],!1,null,null,null);e.default=a.exports}}]);