(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Layout_Landing_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: "CompetitionList",
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec& ***!
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
    _vm._m(0),
    _vm._v(" "),
    _vm.$page.competitions.data.length > 0
      ? _c(
          "div",
          {
            staticClass:
              "grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-5 mt-16",
          },
          _vm._l(_vm.$page.competitions.data, function (competition, index) {
            return _c(
              "inertia-link",
              {
                key: index,
                staticClass:
                  "border border-gray-500 hover:shadow-lg hover:border-yellow-600 p-3 py-8 flex flex-col items-center",
                attrs: {
                  href: _vm.$route.relativePath(
                    "landing.competition_view",
                    competition.id
                  ),
                },
              },
              [
                _c("img", {
                  staticClass: "w-12 mb-4",
                  attrs: {
                    src:
                      _vm.$page.auth.settings.app_url + "/assets/img/crown.png",
                    alt: "crown",
                  },
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "text-center text-sm uppercase tracking-wider text-gray-800",
                  },
                  [
                    _vm._v(
                      "\n                Miss Enuani Beauty Pageant\n            "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "text-center text-primary-700 text-xl font-bold",
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(competition.year) +
                        "\n            "
                    ),
                  ]
                ),
              ]
            )
          }),
          1
        )
      : _c("div", { staticClass: "text-center" }, [
          _c("h1", { staticClass: "text-lg text-primary-600" }, [
            _vm._v("No competition found"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-gray-600 text-xs" }, [
            _vm._v("Please check again"),
          ]),
        ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass:
          "mt-16 px-5 py-10 shadow-offset shadow-offset_yellow bg-primary-800",
      },
      [
        _c(
          "span",
          {
            staticClass:
              "inline-block text-gray-500 uppercase tracking-widest text-xs",
          },
          [_vm._v("\n            Competitions\n        ")]
        ),
        _vm._v(" "),
        _c(
          "h1",
          { staticClass: "text-3xl md:text-6xl text-white secondary-font" },
          [
            _vm._v("\n            All beauty pageants "),
            _c("br"),
            _vm._v("\n            till present\n        "),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-16" }, [
      _c("div", { staticClass: "mx-auto flex justify-between w-56" }, [
        _c(
          "button",
          {
            staticClass:
              "bg-gray-800 p-4 py-2 text-white hover:text-yellow-500",
          },
          [_vm._v("\n                Previous\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "p-4 py-2 border border-transparent hover:border-gray-600",
          },
          [_vm._v("\n                1\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "p-4 py-2 border border-transparent hover:border-gray-600",
          },
          [_vm._v("\n                2\n            ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-gray-800 p-4 py-2 text-white hover:text-yellow-500",
          },
          [_vm._v("\n                Next\n            ")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionList.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompetitionList.vue?vue&type=template&id=0f40beec& */ "./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec&");
/* harmony import */ var _CompetitionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompetitionList.vue?vue&type=script&lang=js& */ "./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompetitionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Landing/CompetitionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompetitionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompetitionList.vue?vue&type=template&id=0f40beec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Landing/CompetitionList.vue?vue&type=template&id=0f40beec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompetitionList_vue_vue_type_template_id_0f40beec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);