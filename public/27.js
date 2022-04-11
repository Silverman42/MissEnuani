(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
  name: "CompetitionView"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "section",
      {
        staticClass:
          "mt-16 px-5 md:px-0 py-10 shadow-offset shadow-offset_yellow flex flex-wrap justify-around items-center bg-primary-800",
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "w-full md:w-6/12" }, [
          _c("img", {
            staticClass: "w-full",
            attrs: {
              src: _vm.$page.auth.settings.app_url + "/assets/img/home_5.jpg",
              alt: "",
            },
          }),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "mt-16 flex flex-wrap justify-between" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "w-full lg:w-8/12" }, [
        _c(
          "div",
          {
            staticClass: "grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4",
          },
          _vm._l(12, function (count, index) {
            return _c(
              "inertia-link",
              {
                key: index,
                staticClass:
                  "border border-gray-500 hover:shadow-lg hover:border-yellow-600 p-3 py-8 flex flex-col items-center",
                attrs: {
                  href: _vm.$route.relativePath(
                    "landing.one_contestant",
                    10001
                  ),
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-full h-32 mb-3 object-cover object-center bg-gray-400",
                  attrs: { src: "", alt: "crown" },
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "text-center text-lg uppercase tracking-wider text-gray-800",
                  },
                  [
                    _vm._v("\n                        NGOZI "),
                    _c("br"),
                    _vm._v(
                      "\n                        VERONICA\n                    "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "text-center text-primary-700 text-xs uppercase font-bold",
                  },
                  [
                    _vm._v(
                      "\n                        MISS ISSELE-UKu\n                    "
                    ),
                  ]
                ),
              ]
            )
          }),
          1
        ),
        _vm._v(" "),
        _vm._m(2),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full md:w-4/12 mb-10 md:mb-0" }, [
      _c(
        "h1",
        { staticClass: "text-3xl md:text-6xl secondary-font text-white" },
        [
          _vm._v("\n                Miss Enuani Beauty Pageant "),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "text-yellow-500" }, [_vm._v("2022")]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "py-5" }, [
        _c(
          "span",
          {
            staticClass:
              "inline-block text-gray-500 uppercase tracking-widest text-xs",
          },
          [_vm._v("\n                    Venue\n                ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "mt-3 text-gray-300" }, [
          _vm._v("\n                    Life church, Idumu-Ogbo "),
          _c("br"),
          _vm._v("\n                    Asaba "),
          _c("br"),
          _vm._v("\n                    Delta State\n                "),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-5" }, [
        _c(
          "span",
          {
            staticClass:
              "inline-block text-gray-500 uppercase tracking-widest text-xs",
          },
          [_vm._v("\n                    Date\n                ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "mt-3 text-gray-300" }, [
          _vm._v("20th December 2019"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full lg:w-4/12 mb-5" }, [
      _c(
        "span",
        {
          staticClass:
            "inline-block text-gray-800 uppercase tracking-widest text-sm",
        },
        [_vm._v("\n                Pageant finalists\n            ")]
      ),
      _vm._v(" "),
      _c(
        "h2",
        { staticClass: "text-3xl md:text-6xl secondary-font text-gray-900" },
        [_vm._v("\n                Enuani beauty queens\n            ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c("div", { staticClass: "mx-auto flex justify-between w-56" }, [
        _c(
          "button",
          {
            staticClass:
              "bg-gray-800 p-4 py-2 text-white hover:text-yellow-500",
          },
          [_vm._v("\n                        Previous\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "p-4 py-2 border border-transparent hover:border-gray-600",
          },
          [_vm._v("\n                        1\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "p-4 py-2 border border-transparent hover:border-gray-600",
          },
          [_vm._v("\n                        2\n                    ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-gray-800 p-4 py-2 text-white hover:text-yellow-500",
          },
          [_vm._v("\n                        Next\n                    ")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionView.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionView.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompetitionView.vue?vue&type=template&id=0652ed73& */ "./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73&");
/* harmony import */ var _CompetitionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompetitionView.vue?vue&type=script&lang=js& */ "./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompetitionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Landing/CompetitionView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompetitionView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompetitionView.vue?vue&type=template&id=0652ed73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionView.vue?vue&type=template&id=0652ed73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionView_vue_vue_type_template_id_0652ed73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);