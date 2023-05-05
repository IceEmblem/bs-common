"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Token = /*#__PURE__*/function () {
  function Token() {
    _classCallCheck(this, Token);
    _defineProperty(this, "tokenStorageKey", '_bstoken_');
    _defineProperty(this, "token", null);
    _defineProperty(this, "userInfo", null);
  }
  _createClass(Token, [{
    key: "init",
    value: function init() {
      var token = window.localStorage.getItem(this.tokenStorageKey);
      if (token) {
        this.setToken(token);
      }
    }
  }, {
    key: "setToken",
    value: function setToken(token) {
      var userInfo = this.decodeUserInfo(token);
      if (userInfo) {
        this.userInfo = userInfo;
      }
      this.token = token;
      window.localStorage.setItem(this.tokenStorageKey, token);
    }
  }, {
    key: "clearToken",
    value: function clearToken() {
      this.userInfo = null;
      this.token = null;
      window.localStorage.removeItem(this.tokenStorageKey);
    }
  }, {
    key: "decodeUserInfo",
    value: function decodeUserInfo(token) {
      var userInfo;
      // 解码 token
      try {
        var strings = token.split(".");
        userInfo = JSON.parse(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")));
      } catch (ex) {}
      return userInfo;
    }
  }]);
  return Token;
}();
var _default = new Token();
exports["default"] = _default;