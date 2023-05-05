"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimeFilter = exports.TextFilter = exports.SelectFilter = exports.RadioFilter = exports.NumFilter = exports.ChecksFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _LabelEX = _interopRequireDefault(require("../LabelEX"));
var _lang = _interopRequireDefault(require("../../lang"));
var _excluded = ["isModalVisible"],
  _excluded2 = ["isModalVisible"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var TextFilter = function TextFilter(props) {
  var value = props.value,
    setValue = props.setValue,
    isNumber = props.isNumber;
  if (isNumber == true) {
    return /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, {
      className: "w-full",
      placeholder: "\u8BF7\u8F93\u5165",
      controls: false,
      value: value,
      onChange: function onChange(val) {
        return setValue(val);
      }
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    placeholder: "\u8BF7\u8F93\u5165",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  });
};
exports.TextFilter = TextFilter;
var TimeFilter = function TimeFilter(props) {
  var value = props.value,
    setValue = props.setValue;

  // min.toDate()?.toISOString().substring(0, 19);
  var range = value || [undefined, undefined];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, {
    className: "w-1/2",
    showTime: {
      format: 'HH:mm'
    },
    format: "YYYY-MM-DD HH:mm",
    value: range[0] ? (0, _dayjs["default"])(range[0]) : undefined,
    onChange: function onChange(value) {
      setValue([value === null || value === void 0 ? void 0 : value.toDate(), range[1]]);
    }
  }), "-", /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, {
    className: "w-1/2",
    showTime: {
      format: 'HH:mm'
    },
    format: "YYYY-MM-DD HH:mm",
    value: range[1] ? (0, _dayjs["default"])(range[1]) : undefined,
    onChange: function onChange(value) {
      setValue([range[0], value === null || value === void 0 ? void 0 : value.toDate()]);
    }
  }));
};
exports.TimeFilter = TimeFilter;
var ChecksFilter = function ChecksFilter(props) {
  var value = props.value,
    setValue = props.setValue,
    filterValues = props.filterValues;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Checkbox.Group, {
    options: filterValues,
    value: value,
    onChange: function onChange(vals) {
      setValue(vals);
    }
  }));
};
exports.ChecksFilter = ChecksFilter;
var RadioFilter = function RadioFilter(props) {
  var value = props.value,
    setValue = props.setValue,
    filterValues = props.filterValues;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Radio.Group, {
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
    }
  }, filterValues.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Radio, {
      key: item.value,
      value: item.value,
      disabled: item.disabled
    }, item.label);
  })));
};
exports.RadioFilter = RadioFilter;
var SelectFilter = function SelectFilter(props) {
  var value = props.value,
    setValue = props.setValue,
    filterValues = props.filterValues;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Select, {
    showSearch: true,
    allowClear: true,
    placeholder: "\u8BF7\u9009\u62E9",
    style: {
      minWidth: 180
    },
    value: value,
    onChange: function onChange(val) {
      setValue(val);
    },
    filterOption: function filterOption(input, option) {
      var _option$title;
      return (option === null || option === void 0 ? void 0 : (_option$title = option.title) === null || _option$title === void 0 ? void 0 : _option$title.toLowerCase().indexOf(input.toLowerCase())) >= 0;
    }
  }, filterValues.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Select.Option, {
      key: item.value,
      value: item.value,
      title: item.label
    }, item.label);
  })));
};
exports.SelectFilter = SelectFilter;
var NumFilter = function NumFilter(props) {
  var value = props.value,
    setValue = props.setValue;
  var range = value || [undefined, undefined];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, {
    className: "flex-grow",
    placeholder: "min",
    max: 99999999,
    value: range[0],
    onChange: function onChange(value) {
      setValue([value, range[1]]);
    }
  }), "-", /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, {
    className: "flex-grow",
    placeholder: "max",
    max: 99999999,
    value: range[1],
    onChange: function onChange(value) {
      setValue([range[0], value]);
    }
  }));
};
exports.NumFilter = NumFilter;
var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);
  var _super = _createSuper(_default);
  function _default(props) {
    var _this;
    _classCallCheck(this, _default);
    _this = _super.call(this, props);
    if (props.defaultFilters) {
      _this.state = _objectSpread({
        isModalVisible: false
      }, props.defaultFilters);
    } else {
      _this.state = {
        isModalVisible: false
      };
    }
    return _this;
  }
  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        align: "bottom"
      }, this.props.columns.map(function (item) {
        var Filter = item.filter;
        return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
          key: item.dataIndex,
          style: {
            marginRight: '1rem'
          }
        }, /*#__PURE__*/_react["default"].createElement(_LabelEX["default"], {
          text: item.title
        }, /*#__PURE__*/_react["default"].createElement(Filter, {
          value: _this2.state[item.dataIndex],
          setValue: function setValue(value) {
            var state = {};
            state[item.dataIndex] = value;
            _this2.setState(state);
          }
        })));
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex-grow"
      }), /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        icon: /*#__PURE__*/_react["default"].createElement(_icons.SyncOutlined, null),
        onClick: function onClick() {
          var _this2$state = _this2.state,
            isModalVisible = _this2$state.isModalVisible,
            other = _objectWithoutProperties(_this2$state, _excluded);
          Object.keys(other).forEach(function (key) {
            other[key] = undefined;
          });
          _this2.setState(other);
          _this2.props.onChange(other);
        }
      }, _lang["default"].t('reset')), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "primary",
        icon: /*#__PURE__*/_react["default"].createElement(_icons.FileSearchOutlined, null),
        onClick: function onClick() {
          var _this2$state2 = _this2.state,
            isModalVisible = _this2$state2.isModalVisible,
            other = _objectWithoutProperties(_this2$state2, _excluded2);
          _this2.props.onChange(other);
        }
      }, _lang["default"].t('inquire')), this.props.btns)));
    }
  }]);
  return _default;
}(_react["default"].Component);
exports["default"] = _default;