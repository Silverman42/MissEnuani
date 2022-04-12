(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{jcuR:function(e,s,t){"use strict";t.r(s);var i={name:"Medicals",data:function(){return{height:{number:0,decimal:0},weight:{number:0,decimal:0},canSmoke:"1",isVegetarian:"0",shoeSize:30,dressSize:"none",bustSize:"none",waistSize:"none",skinColor:this.$page.user.skin_color||"Pale White",recentSickness:"",surgeries:"",medications:"",dietaryNeeds:"",allergies:"",colorMatch:{"Pale White":"#fed9c6",Fair:"#fcd3b5","Light Brown":"#fcd3b5","Moderate Brown":"#be825d","Dark Brown":"#ba7959",Black:"#763e25"},sizes:["xxl","xl","l","m","s","none"],colors:["Pale White","Fair","Light Brown","Moderate Brown","Dark Brown","Black","None"],bloodTypes:["A+","A-","B+","B-","O+","O-","AB+","AB-","None"],bloodType:"None"}},methods:{changeSmokeStatus:function(e){this.canSmoke=e},changeVegeStatus:function(e){this.isVegetarian=e},splitMeasurement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=[];return{number:(s="".concat(e).split("."))[0]||0,decimal:s[1]||0}},assignDefault:function(){this.height=this.splitMeasurement(this.$page.user.height),this.weight=this.splitMeasurement(this.$page.user.weight),this.canSmoke=1===this.$page.user.can_smoke?"1":"0",this.isVegetarian=1===this.$page.user.is_vegetarian?"1":"0",this.shoeSize=this.$page.user.shoe_size||30,this.dressSize=this.$page.user.dress_size||"l",this.bustSize=this.$page.user.bust_size||"l",this.waistSize=this.$page.user.waist_size||"l",this.skinColor=this.$page.user.skin_color||"Pale White",this.recentSickness=this.$page.user.recent_sickness||"",this.allergies=this.$page.user.allergies||"",this.surgeries=this.$page.user.surgeries||"",this.medications=this.$page.user.medications||"",this.dietaryNeeds=this.$page.user.dietary_needs||"",this.bloodType=this.$page.user.blood_type||"A+"},submitForm:function(){var e=new FormData;e.append("height","".concat(this.height.number,".").concat(this.height.decimal)),e.append("weight","".concat(this.weight.number,".").concat(this.weight.decimal)),e.append("can_smoke",this.canSmoke),e.append("is_vegetarian",this.isVegetarian),e.append("shoe_size",this.shoeSize),e.append("dress_size",this.dressSize),e.append("bust_size",this.bustSize),e.append("waist_size",this.waistSize),e.append("skin_color",this.skinColor),e.append("recent_sickness",this.recentSickness),e.append("allergies",this.allergies),e.append("surgeries",this.surgeries),e.append("medications",this.medications),e.append("dietary_needs",this.dietaryNeeds),e.append("blood_type",this.bloodType),this.$inertia.post(this.$route.relativePath("client.profile.update.medicals"),e)}},mounted:function(){this.assignDefault()},updated:function(){}},a=t("KHd+"),r=Object(a.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e._m(0),e._v(" "),t("form",{attrs:{action:"",id:"medicals"},on:{submit:function(s){return s.preventDefault(),e.submitForm(s)}}}),e._v(" "),t("div",{staticClass:"mb-3 grid grid-cols-2 col-gap-2"},[e._m(1),e._v(" "),t("text-input",{attrs:{type:"number",form:"medicals"},model:{value:e.height.number,callback:function(s){e.$set(e.height,"number",s)},expression:"height.number"}}),e._v(" "),t("text-input",{attrs:{type:"number",form:"medicals"},model:{value:e.height.decimal,callback:function(s){e.$set(e.height,"decimal",s)},expression:"height.decimal"}}),e._v(" "),e.$page.errors.height?t("p",{staticClass:"col-start-1 col-end-3 text-xs text-red-500"},[e._v("\n            "+e._s(e.$page.errors.height)+"\n        ")]):e._e()],1),e._v(" "),t("div",{staticClass:"mb-3 grid grid-cols-2 col-gap-2"},[e._m(2),e._v(" "),t("text-input",{attrs:{type:"number",form:"medicals"},model:{value:e.weight.number,callback:function(s){e.$set(e.weight,"number",s)},expression:"weight.number"}}),e._v(" "),t("text-input",{attrs:{type:"number",form:"medicals"},model:{value:e.weight.decimal,callback:function(s){e.$set(e.weight,"decimal",s)},expression:"weight.decimal"}}),e._v(" "),e.$page.errors.weight?t("p",{staticClass:"col-start-1 col-end-3 text-xs text-red-500"},[e._v("\n            "+e._s(e.$page.errors.weight)+"\n        ")]):e._e()],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("text-input",{attrs:{type:"number",form:"medicals",error:e.$page.errors.shoe_size,label:"Shoe Size (European measurement)"},model:{value:e.shoeSize,callback:function(s){e.shoeSize=s},expression:"shoeSize"}},[e._v("\n            Required\n        ")])],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("select-input",{attrs:{label:"Dress Size",error:e.$page.errors.dress_size,value:e.dressSize,form:"medicals"},model:{value:e.dressSize,callback:function(s){e.dressSize=s},expression:"dressSize"}},e._l(e.sizes,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n                "+e._s(s)+"\n            ")])})),0)],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("select-input",{attrs:{label:"Waist Size",error:e.$page.errors.waist_size,value:e.waistSize,form:"medicals"},model:{value:e.waistSize,callback:function(s){e.waistSize=s},expression:"waistSize"}},e._l(e.sizes,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n                "+e._s(s)+"\n            ")])})),0)],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("select-input",{attrs:{label:"Burst Size",error:e.$page.errors.bust_size,value:e.bustSize,form:"medicals"},model:{value:e.bustSize,callback:function(s){e.bustSize=s},expression:"bustSize"}},e._l(e.sizes,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n                "+e._s(s)+"\n            ")])})),0)],1),e._v(" "),t("div",{staticClass:"mb-3 grid grid-cols-3 col-gap-2"},[t("div",{staticClass:"text-xs col-start-1 col-end-4"},[e._v("Skin Color")]),e._v(" "),t("div",{staticClass:"col-start-1 col-end-3"},[t("select-input",{attrs:{error:e.$page.errors.skin_color,value:e.skinColor,form:"medicals"},model:{value:e.skinColor,callback:function(s){e.skinColor=s},expression:"skinColor"}},e._l(e.colors,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n                    "+e._s(s)+"\n                ")])})),0)],1),e._v(" "),t("div",{staticClass:"col-start-3 col-end-4 rounded-md",style:{background:e.colorMatch[e.skinColor]}})]),e._v(" "),t("div",{staticClass:"mb-3"},[t("select-input",{attrs:{label:"Blood Type",error:e.$page.errors.blood_type,value:e.bloodType,form:"medicals"},model:{value:e.bloodType,callback:function(s){e.bloodType=s},expression:"bloodType"}},e._l(e.bloodTypes,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v("\n                "+e._s(s)+"\n            ")])})),0)],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("span",{staticClass:"text-xs"},[e._v("Are you a smoker ?")]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("radio-input",{attrs:{value:"1",name:"canSmoke",defaultValue:e.canSmoke,title:"Yes"},on:{input:function(s){return e.changeSmokeStatus(s)}}}),e._v(" "),t("radio-input",{attrs:{value:"0",name:"canSmoke",defaultValue:e.canSmoke,title:"No"},on:{input:function(s){return e.changeSmokeStatus(s)}}})],1),e._v(" "),e.$page.errors.can_smoke?t("div",{staticClass:"mt-2"},[e._v("\n            "+e._s(e.$page.errors.can_smoke||"")+"\n        ")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-3"},[t("span",{staticClass:"text-xs"},[e._v("Are you a vegetarian ?")]),e._v(" "),t("div",{staticClass:"flex flex-wrap"},[t("radio-input",{attrs:{value:"1",name:"isVege",defaultValue:e.isVegetarian,title:"Yes"},on:{input:function(s){return e.changeAllergiestatus(s)}}}),e._v(" "),t("radio-input",{attrs:{value:"0",name:"isVege",defaultValue:e.isVegetarian,title:"No"},on:{input:function(s){return e.changeVegeStatus(s)}}})],1),e._v(" "),e.$page.errors.is_vegetarian?t("div",{staticClass:"mt-2"},[e._v("\n            "+e._s(e.$page.errors.is_vegetarian||"")+"\n        ")]):e._e()]),e._v(" "),t("div",{staticClass:"mb-3"},[t("textarea-input",{attrs:{error:e.$page.errors.dietary_needs,form:"medicals",label:"Please list your Dietary Needs, if any"},model:{value:e.dietaryNeeds,callback:function(s){e.dietaryNeeds=s},expression:"dietaryNeeds"}})],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("textarea-input",{attrs:{error:e.$page.errors.recent_sickness,form:"medicals",label:"Please list your Recent Sickness, if any"},model:{value:e.recentSickness,callback:function(s){e.recentSickness=s},expression:"recentSickness"}})],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("textarea-input",{attrs:{error:e.$page.errors.surgeries,form:"medicals",label:"Please list your Recent Surgeries, if any"},model:{value:e.surgeries,callback:function(s){e.surgeries=s},expression:"surgeries"}})],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("textarea-input",{attrs:{error:e.$page.errors.medications,form:"medicals",label:"Please list your Medications, if any"},model:{value:e.medications,callback:function(s){e.medications=s},expression:"medications"}})],1),e._v(" "),t("div",{staticClass:"mb-10"},[t("textarea-input",{attrs:{error:e.$page.errors.allergies,form:"medicals",label:"Please list your Allergies, if any"},model:{value:e.allergies,callback:function(s){e.allergies=s},expression:"allergies"}})],1),e._v(" "),t("primary-btn",{attrs:{type:"submit",form:"medicals",width:"w-full",color:"yellow",fontColor:"text-black"}},[e._v("Update Medicals")])],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"mb-5"},[s("h3",{staticClass:"text-lg font-bold"},[this._v("Medicals")]),this._v(" "),s("p",{staticClass:"text-sm"},[this._v("Your medical history and backlogs")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",{staticClass:"col-start-1 col-end-3 text-xs flex w-full justify-between"},[s("span",[this._v("Height (ft)")]),this._v(" "),s("span",{staticClass:"text-xs italic text-gray-600"},[this._v("Required")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",{staticClass:"col-start-1 col-end-3 text-xs flex w-full justify-between"},[s("span",[this._v("Weight (kg)")]),this._v(" "),s("span",{staticClass:"text-xs italic text-gray-600"},[this._v("Required")])])}],!1,null,null,null);s.default=r.exports}}]);