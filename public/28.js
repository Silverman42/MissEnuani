(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_Landing_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layout/Landing.vue */ "./resources/js/Layout/Landing.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Layout_Landing_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: "SingleContestant",
  components: {
    Modal: function Modal() {
      return Promise.all(/*! import() | user_page */[__webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e("user_page")]).then(__webpack_require__.bind(null, /*! ../../components/Modal */ "./resources/js/components/Modal.vue"));
    }
  },
  data: function data() {
    return {
      loading: false,
      modalIsOpen: false
    };
  },
  methods: {
    openModal: function openModal() {
      this.modalIsOpen = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "modal",
        {
          attrs: { isOpen: _vm.modalIsOpen },
          on: {
            "update:isOpen": function ($event) {
              _vm.modalIsOpen = $event
            },
            "update:is-open": function ($event) {
              _vm.modalIsOpen = $event
            },
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "mb-10 reveal-left",
              staticStyle: { "--delay": "0.1s" },
            },
            [
              _c("h3", { staticClass: "text-lg font-extrabold" }, [
                _vm._v("Vote for Ngozi"),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm" }, [
                _vm._v("Each vote cost #100"),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("form", { attrs: { id: "create-vote" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-2" },
            [
              _c("text-input", {
                attrs: {
                  type: "number",
                  form: "create-vote",
                  error: _vm.$page.errors.vote_count || "",
                  label: "Vote count",
                },
                model: {
                  value: _vm.vote_count,
                  callback: function ($$v) {
                    _vm.vote_count = $$v
                  },
                  expression: "vote_count",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-10" },
            [
              _c(
                "primary-btn",
                {
                  attrs: {
                    width: "w-full",
                    type: "submit",
                    loading: _vm.loading,
                    form: "create-vote",
                  },
                },
                [_vm._v("Make vote")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass:
            "mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-primary-800",
        },
        [
          _c("div", { staticClass: "w-full md:w-4/12 mb-10 md:mb-0" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "py-5" }, [
              _c(
                "button",
                {
                  staticClass:
                    "inline-block uppercase tracking-widest py-4 px-8 text-md leading-3 text-sm bg-yellow-400 hover:bg-yellow-600 text-black mt-4",
                  on: { click: _vm.openModal },
                },
                [_vm._v("\n                    Vote for me\n                ")]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-6/12" }, [
            _c("img", {
              staticClass: "w-full",
              attrs: {
                src: _vm.$page.auth.settings.app_url + "/assets/img/hero.jpg",
                alt: "",
              },
            }),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(3),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h1",
      { staticClass: "text-3xl md:text-6xl secondary-font text-white" },
      [
        _vm._v("\n                Ngozi "),
        _c("br"),
        _vm._v("\n                Mary "),
        _c("br"),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "inline-block text-yellow-500 uppercase tracking-widest text-lg",
          },
          [_vm._v("\n                    MISS ISSELE-UKU\n                ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5" }, [
      _c(
        "span",
        {
          staticClass:
            "inline-block text-gray-500 uppercase tracking-widest text-xs",
        },
        [_vm._v("\n                    Bio\n                ")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "mt-3 text-gray-300" }, [
        _vm._v(
          "\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                    Corrupti temporibus, maxime\n                "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5" }, [
      _c(
        "span",
        {
          staticClass:
            "inline-block text-gray-500 uppercase tracking-widest text-xs",
        },
        [_vm._v("\n                    Position\n                ")]
      ),
      _vm._v(" "),
      _c("p", { staticClass: "mt-3 text-gray-300" }, [_vm._v("1")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass:
          "mt-16 py-10 px-5 bg-white border border-primary-500 shadow-xl grid md:grid-cols-2 lg:grid-cols-3 gap-5",
      },
      [
        _c("div", [
          _c(
            "span",
            {
              staticClass:
                "inline-block text-gray-800 uppercase tracking-widest text-sm",
            },
            [_vm._v("\n                Height\n            ")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "text-gray-900 text-lg" }, [_vm._v("2.ft")]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "span",
            {
              staticClass:
                "inline-block text-gray-800 uppercase tracking-widest text-sm",
            },
            [_vm._v("\n                Hobbies\n            ")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "text-gray-900 text-lg" }, [
            _vm._v("Reading, Swimming"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "span",
            {
              staticClass:
                "inline-block text-gray-800 uppercase tracking-widest text-sm",
            },
            [_vm._v("\n                Favorite meal\n            ")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "text-gray-900 text-lg" }, [
            _vm._v("Jollof Rice"),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Landing/SingleContestant.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Landing/SingleContestant.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleContestant.vue?vue&type=template&id=2411b248& */ "./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248&");
/* harmony import */ var _SingleContestant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleContestant.vue?vue&type=script&lang=js& */ "./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleContestant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Landing/SingleContestant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleContestant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleContestant.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/SingleContestant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleContestant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleContestant.vue?vue&type=template&id=2411b248& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/SingleContestant.vue?vue&type=template&id=2411b248&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleContestant_vue_vue_type_template_id_2411b248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);