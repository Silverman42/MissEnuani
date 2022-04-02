(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CreateUser",
  watch: {
    $page: {
      handler: function handler() {
        this.loading = false;

        if (this.$page.auth.alert_type === "success") {
          this.resetValues();
          this.$emit("completeRegistration");
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      loading: false,
      roles: "admin",
      requestRoute: "users.admin.create",
      biodata: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      social: {
        facebook_url: "",
        twitter_url: "",
        phone_number: ""
      },
      avatar: "",
      competition: {
        year: 1997,
        position: 0
      },
      permissions: {
        subjects: true,
        topics: true,
        questions: true,
        collections: true,
        users: false,
        settings: false,
        profile: false
      }
    };
  },
  mounted: function mounted() {
    this.selectRole(this.role);
  },
  methods: {
    selectRole: function selectRole(role) {
      this.roles = role;
      this.requestRoute = role === "admin" ? "users.admin.create" : "users.contestant.create";
    },
    changeAvatar: function changeAvatar(file) {
      this.avatar = file;
    },
    resetValues: function resetValues() {
      this.permissions = {
        subjects: true,
        topics: true,
        questions: true,
        collections: true,
        users: false,
        settings: false,
        profile: false
      };
      this.social = {
        facebook_url: "",
        twitter_url: "",
        phone_number: ""
      };
      this.avatar = null;
      this.roles = "admin";
    },
    createUser: function createUser() {
      this.loading = true;
      console.log(this.permissions);
      var form = new FormData();
      form.append("avatar", this.avatar);
      form.append("roles", this.roles);

      for (var _i = 0, _Object$entries = Object.entries(this.biodata); _i < _Object$entries.length; _i++) {
        var key = _Object$entries[_i];
        form.append(key[0], this.biodata[key[0]]);
      }

      for (var _i2 = 0, _Object$entries2 = Object.entries(this.social); _i2 < _Object$entries2.length; _i2++) {
        var _key = _Object$entries2[_i2];
        form.append(_key[0], this.social[_key[0]]);
      }

      for (var _i3 = 0, _Object$entries3 = Object.entries(this.permissions); _i3 < _Object$entries3.length; _i3++) {
        var _key2 = _Object$entries3[_i3];
        form.append(_key2[0], this.permissions[_key2[0]]);
      }

      this.$inertia.post(this.$route.relativePath(this.requestRoute), form);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("form", {
      attrs: { id: "create-user" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.createUser($event)
        },
      },
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-10 reveal-left", staticStyle: { "--delay": "0.3s" } },
      [
        _c(
          "h4",
          {
            staticClass:
              "text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2",
          },
          [_vm._v("\n            Roles\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex items-center flex-wrap" },
          [
            _c("radio-input", {
              attrs: {
                value: "admin",
                defaultValue: _vm.roles,
                name: "roles",
                title: "Admin",
              },
              on: {
                input: function ($event) {
                  return _vm.selectRole($event)
                },
              },
            }),
            _vm._v(" "),
            _c("radio-input", {
              attrs: {
                value: "client",
                defaultValue: _vm.roles,
                name: "roles",
                title: "Contestant",
              },
              on: {
                input: function ($event) {
                  return _vm.selectRole($event)
                },
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _vm.$page.errors.roles
          ? _c("p", { staticClass: "text-xs text-red-500" }, [
              _vm._v(
                "\n            " + _vm._s(_vm.$page.errors.roles) + "\n        "
              ),
            ])
          : _vm._e(),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-10 reveal-left", staticStyle: { "--delay": "0.5s" } },
      [
        _c(
          "h4",
          {
            staticClass:
              "text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2",
          },
          [_vm._v("\n            Biodata\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c("text-input", {
              attrs: {
                form: "create-user",
                error: _vm.$page.errors.first_name || "",
                label: "First name",
              },
              model: {
                value: _vm.biodata.first_name,
                callback: function ($$v) {
                  _vm.$set(_vm.biodata, "first_name", $$v)
                },
                expression: "biodata.first_name",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c("text-input", {
              attrs: {
                form: "create-user",
                error: _vm.$page.errors.last_name || "",
                label: "Last name",
              },
              model: {
                value: _vm.biodata.last_name,
                callback: function ($$v) {
                  _vm.$set(_vm.biodata, "last_name", $$v)
                },
                expression: "biodata.last_name",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c("text-input", {
              attrs: {
                form: "create-user",
                error: _vm.$page.errors.email || "",
                type: "email",
                label: "Email",
              },
              model: {
                value: _vm.biodata.email,
                callback: function ($$v) {
                  _vm.$set(_vm.biodata, "email", $$v)
                },
                expression: "biodata.email",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c("text-input", {
              attrs: {
                type: "password",
                error: _vm.$page.errors.password || "",
                form: "create-user",
                label: "Password",
              },
              model: {
                value: _vm.biodata.password,
                callback: function ($$v) {
                  _vm.$set(_vm.biodata, "password", $$v)
                },
                expression: "biodata.password",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c("text-input", {
              attrs: {
                type: "password",
                form: "create-user",
                label: "Confirm Password",
              },
              model: {
                value: _vm.biodata.password_confirmation,
                callback: function ($$v) {
                  _vm.$set(_vm.biodata, "password_confirmation", $$v)
                },
                expression: "biodata.password_confirmation",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _vm.roles === "client"
          ? _c(
              "div",
              { staticClass: "mb-2" },
              [
                _c("text-input", {
                  attrs: {
                    type: "number",
                    error: _vm.$page.errors.position || "",
                    form: "create-user",
                    label: "Contestant position",
                  },
                  model: {
                    value: _vm.competition.position,
                    callback: function ($$v) {
                      _vm.$set(_vm.competition, "position", $$v)
                    },
                    expression: "competition.position",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.roles === "client"
          ? _c(
              "div",
              { staticClass: "mb-2" },
              [
                _c(
                  "select-input",
                  {
                    attrs: {
                      value: _vm.competition.year,
                      form: "create-user",
                      label: "Competition year",
                      error: _vm.$page.errors.competition_id || "",
                    },
                    model: {
                      value: _vm.competition.year,
                      callback: function ($$v) {
                        _vm.$set(_vm.competition, "year", $$v)
                      },
                      expression: "competition.year",
                    },
                  },
                  [_c("option", { attrs: { value: "" } })]
                ),
              ],
              1
            )
          : _vm._e(),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-10 reveal-left", staticStyle: { "--delay": "0.7s" } },
      [
        _c(
          "h4",
          {
            staticClass:
              "text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2",
          },
          [_vm._v("\n            Social\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c(
              "text-input",
              {
                attrs: {
                  error: _vm.$page.errors.facebook_url || "",
                  form: "create-user",
                  label: "Facebook URL",
                },
                model: {
                  value: _vm.social.facebook_url,
                  callback: function ($$v) {
                    _vm.$set(_vm.social, "facebook_url", $$v)
                  },
                  expression: "social.facebook_url",
                },
              },
              [
                _c("span", { staticClass: "italic text-gray-500 text-xs" }, [
                  _vm._v("Optional"),
                ]),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c(
              "text-input",
              {
                attrs: {
                  error: _vm.$page.errors.twitter_url || "",
                  form: "create-user",
                  label: "Twitter URL",
                },
                model: {
                  value: _vm.social.twitter_url,
                  callback: function ($$v) {
                    _vm.$set(_vm.social, "twitter_url", $$v)
                  },
                  expression: "social.twitter_url",
                },
              },
              [
                _c("span", { staticClass: "italic text-gray-500 text-xs" }, [
                  _vm._v("Optional"),
                ]),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-2" },
          [
            _c(
              "text-input",
              {
                attrs: {
                  error: _vm.$page.errors.phone_number || "",
                  type: "number",
                  form: "create-user",
                  label: "Phone Number",
                },
                model: {
                  value: _vm.social.phone_number,
                  callback: function ($$v) {
                    _vm.$set(_vm.social, "phone_number", $$v)
                  },
                  expression: "social.phone_number",
                },
              },
              [
                _c("span", { staticClass: "italic text-gray-500 text-xs" }, [
                  _vm._v("Optional"),
                ]),
              ]
            ),
          ],
          1
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-10 reveal-left", staticStyle: { "--delay": "0.9s" } },
      [
        _c(
          "h4",
          {
            staticClass:
              "text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2",
          },
          [_vm._v("\n            Avatars\n        ")]
        ),
        _vm._v(" "),
        _c("file-input", {
          attrs: {
            form: "create-user",
            error: _vm.$page.errors.avatar || "",
            label:
              "Image should have a size of 800kb max and should be among the following file type: JPG, PNG",
          },
          on: {
            input: function ($event) {
              return _vm.changeAvatar($event)
            },
          },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _vm.roles === "admin"
      ? _c(
          "div",
          {
            staticClass: "mb-10 reveal-left",
            staticStyle: { "--delay": "1.1s" },
          },
          [
            _c(
              "h4",
              {
                staticClass:
                  "text-sm font-bold mb-4 border border-primaryBg-300 rounded-md inline-block p-2",
              },
              [_vm._v("\n            Permissions\n        ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.subjects,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "subjects", $$v)
                      },
                      expression: "permissions.subjects",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Subjects"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update subjects\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.subjects
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.subjects) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.topics,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "topics", $$v)
                      },
                      expression: "permissions.topics",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Topics"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update topics\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.topics
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.topics) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.questions,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "questions", $$v)
                      },
                      expression: "permissions.questions",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Questions"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update questions\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.questions
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.questions) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.collections,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "collections", $$v)
                      },
                      expression: "permissions.collections",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Collections"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update collections\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.collections
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.collections) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.users,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "users", $$v)
                      },
                      expression: "permissions.users",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Users"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update users\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.users
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.users) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "checkbox",
                  {
                    attrs: { layout: "widthFull" },
                    model: {
                      value: _vm.permissions.settings,
                      callback: function ($$v) {
                        _vm.$set(_vm.permissions, "settings", $$v)
                      },
                      expression: "permissions.settings",
                    },
                  },
                  [
                    _c("p", { staticClass: "ml-2 text-sm font-bold" }, [
                      _vm._v("Settings"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "ml-2 text-xs" }, [
                      _vm._v(
                        "\n                    Add, view, delete and update settings\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.$page.errors.settings
                  ? _c("p", { staticClass: "text-xs text-red-500" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$page.errors.settings) +
                          "\n            "
                      ),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-10 reveal-left", staticStyle: { "--delay": "1.3s" } },
      [
        _c(
          "primary-btn",
          {
            attrs: {
              width: "w-full",
              type: "submit",
              loading: _vm.loading,
              form: "create-user",
            },
          },
          [_vm._v("Create User")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Users/CreateUser.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/Users/CreateUser.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUser.vue?vue&type=template&id=13c26012& */ "./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012&");
/* harmony import */ var _CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateUser.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Users/CreateUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/CreateUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUser.vue?vue&type=template&id=13c26012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users/CreateUser.vue?vue&type=template&id=13c26012&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUser_vue_vue_type_template_id_13c26012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);