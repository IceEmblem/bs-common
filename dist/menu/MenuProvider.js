"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _MenuProvider = /*#__PURE__*/function () {
  function _MenuProvider(preUrl) {
    _classCallCheck(this, _MenuProvider);
    _defineProperty(this, "menus", []);
    this.preUrl = preUrl;
  }

  // 注册导航栏菜单
  _createClass(_MenuProvider, [{
    key: "registerMenu",
    value: function registerMenu(menu) {
      var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var menuWithUrl = this._createMenuWithUrl(menu, this.preUrl);
      var menuWithUrlSort = _objectSpread(_objectSpread({}, menuWithUrl), {}, {
        sort: sort
      });
      var index = this.menus.findIndex(function (e) {
        return e.sort >= sort;
      });
      if (index == -1) {
        this.menus.push(menuWithUrlSort);
      } else {
        this.menus.splice(index, 0, menuWithUrlSort);
      }
    }

    // 通过url查找菜单
  }, {
    key: "urlToMenus",
    value: function urlToMenus(url) {
      var menuNames = url.replace("".concat(this.preUrl, "/"), '').split('/');
      var result = [];
      var curmenus = this.menus;
      var _iterator = _createForOfIteratorHelper(menuNames),
        _step;
      try {
        var _loop = function _loop() {
          var name = _step.value;
          if (!curmenus) {
            return {
              v: result
            };
          }
          var menu = curmenus.find(function (e) {
            return e.name == name;
          });
          if (!menu) {
            return {
              v: result
            };
          }
          result.push(menu);
          curmenus = menu.menuItems;
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();
          if (_typeof(_ret) === "object") return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }

    // 获取菜单url
  }, {
    key: "getUrl",
    value: function getUrl(menuNames) {
      return "".concat(this.preUrl, "/").concat(menuNames.join('/'));
    }

    // 生成 MenuWithUrl
  }, {
    key: "_createMenuWithUrl",
    value: function _createMenuWithUrl(menu, parentUrl) {
      var _this = this;
      var url = "".concat(parentUrl, "/").concat(menu.name);
      var newMenu = {
        name: menu.name,
        icon: menu.icon,
        text: menu.text,
        langName: menu.langName,
        component: menu.component,
        menuItems: null,
        url: url,
        hidden: menu.hidden,
        allowAccess: menu.allowAccess
      };
      if (menu.menuItems) {
        newMenu.menuItems = menu.menuItems.map(function (item) {
          return _this._createMenuWithUrl(item, url);
        });
      }
      return newMenu;
    }
  }]);
  return _MenuProvider;
}();
var MenuProvider = /*#__PURE__*/function () {
  function MenuProvider() {
    var _this2 = this;
    _classCallCheck(this, MenuProvider);
    // 路由前缀
    // 当前后台
    // 菜单
    // 获取菜单提供器
    _defineProperty(this, "_getMenuProvider", function (backstage) {
      return _this2.mapMenus.get(backstage);
    });
  }
  _createClass(MenuProvider, [{
    key: "registerMenu",
    value:
    // 注册导航栏菜单
    // menu: 菜单
    // backstage: 注册的后台类型
    function registerMenu(menu, backstage) {
      var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this._getMenuProvider(backstage).registerMenu(menu, sort);
    }

    // 通过URL查找菜单
  }, {
    key: "urlToMenus",
    value: function urlToMenus(url) {
      var backstage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.backstage;
      return this._getMenuProvider(backstage).urlToMenus(url);
    }

    // 获取注册的菜单
    // backstage: 注册的后台类型
  }, {
    key: "getMenus",
    value: function getMenus() {
      var backstage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.backstage;
      return this._getMenuProvider(backstage).menus;
    }

    // 通过菜单生成对应的url
  }, {
    key: "getUrl",
    value: function getUrl(menuNames) {
      var backstage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.backstage;
      return this._getMenuProvider(backstage).getUrl(menuNames);
    }
  }]);
  return MenuProvider;
}(); // class MenuProviderEx extends MenuProvider {
//     preRoute = '/back';
//     backstage = 'admin';
//     mapMenus = new Map<string, _MenuProvider>();
// }
exports["default"] = MenuProvider;