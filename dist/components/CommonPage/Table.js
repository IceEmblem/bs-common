"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _lang = _interopRequireDefault(require("../../lang"));
var _ExcelFile = require("../ExcelFile");
var _HighLevelSearch = _interopRequireDefault(require("./HighLevelSearch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);
  var _super = _createSuper(_default);
  function _default(props) {
    var _this;
    _classCallCheck(this, _default);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "tableRef", null);
    // 列平均宽度
    _defineProperty(_assertThisInitialized(_this), "colAvgWidth", null);
    _defineProperty(_assertThisInitialized(_this), "state", {
      // table 表的 scroll
      scroll: {
        x: undefined,
        y: undefined
      }
    });
    _defineProperty(_assertThisInitialized(_this), "exportAction", function () {
      var _this$props$rowSelect;
      var selectRows = ((_this$props$rowSelect = _this.props.rowSelection) === null || _this$props$rowSelect === void 0 ? void 0 : _this$props$rowSelect.selectedRows) || [];
      if (_this.props.exportAction) {
        _this.props.exportAction(selectRows, _this.props.filter);
        return;
      }
      if (selectRows.length == 0) {
        _antd.message.error(_lang["default"].t('no_select_row_tip'));
        return;
      }
      var exportCols = _this.props.columns.filter(function (e) {
        return e.dataIndex;
      });
      var excelRows = [];
      var header = {};
      exportCols.forEach(function (col) {
        var dataIndex = col.dataIndex;
        var title = typeof col.title == 'string' ? col.title : dataIndex;
        header[dataIndex] = title;
      });
      excelRows.push(header);
      for (var n = 0; n < selectRows.length; n++) {
        var selectRow = selectRows[n];
        var excelRow = {};
        var _iterator = _createForOfIteratorHelper(exportCols),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var col = _step.value;
            var dataIndex = col.dataIndex;
            var filed = selectRow[dataIndex];
            if (!col.render) {
              excelRow[dataIndex] = filed;
              continue;
            }
            var newfiled = col.render(filed, selectRow, n);
            if (_typeof(newfiled) == 'object') {
              excelRow[dataIndex] = filed;
              continue;
            }
            excelRow[dataIndex] = newfiled;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        excelRows.push(excelRow);
      }
      (0, _ExcelFile.exportXLSX)(excelRows);
    });
    if (props.scroll) {
      _this.state.scroll = _objectSpread({}, props.scroll);
    }
    if (_this.state.scroll.x) {
      _this.colAvgWidth = _this.state.scroll.x / _this.props.columns.length;
    }
    return _this;
  }
  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // 等待页面渲染结束后执行
      setTimeout(function () {
        var _this2$tableRef$getEl;
        if (!_this2.tableRef || _this2.state.scroll.y) {
          return;
        }
        var newScroll = _objectSpread({}, _this2.state.scroll);

        // 获取表格的高度
        var tableH = _this2.tableRef.clientHeight;

        // 获取表头的高度
        var tableHeaderH = ((_this2$tableRef$getEl = _this2.tableRef.getElementsByTagName('thead')) === null || _this2$tableRef$getEl === void 0 ? void 0 : _this2$tableRef$getEl[0].clientHeight) || 0;

        // 计算表body的高度
        newScroll.y = tableH - tableHeaderH;
        _this2.setState({
          scroll: newScroll
        });
      }, 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
        _this$props$filter;
      var colums = this.props.columns;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginBottom: '0.5rem',
          backgroundColor: '#fff',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderRadius: '0.5rem'
        }
      }, /*#__PURE__*/_react["default"].createElement(_HighLevelSearch["default"], {
        columns: this.props.filterColumns,
        onChange: function onChange(filter) {
          _this3.props.onChange(1, undefined, _objectSpread(_objectSpread({}, _this3.props.filter), filter));
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          flexShrink: 100,
          overflowY: 'hidden',
          marginBottom: '0.5rem',
          borderBottom: "1px solid #f0f2f5",
          backgroundColor: '#fff',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderRadius: '0.5rem'
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
        justify: "space-between",
        style: {
          gap: 8,
          alignItems: 'center',
          marginBottom: 8
        }
      }, this.props.classConfig && /*#__PURE__*/_react["default"].createElement(_antd.Tabs, {
        style: {
          flexGrow: 1
        },
        tabBarStyle: {
          marginBottom: 0
        },
        size: "small",
        type: "card",
        activeKey: (_this$props$filter = this.props.filter) === null || _this$props$filter === void 0 ? void 0 : _this$props$filter[this.props.classConfig.queryName],
        onChange: function onChange(val) {
          var newFilter = _objectSpread({}, _this3.props.filter);
          newFilter[_this3.props.classConfig.queryName] = val;
          _this3.props.onChange(undefined, undefined, newFilter, undefined);
        }
      }, this.props.classConfig.classes.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_antd.Tabs.TabPane, {
          tab: item.label,
          key: item.value
        });
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          flexGrow: 1
        }
      }), this.props.tools, /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        onClick: function onClick() {
          _this3.props.onChange(undefined, undefined, undefined, undefined);
        }
      }, _lang["default"].t('refresh')), this.props.rowSelection && /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        onClick: this.exportAction
      }, _lang["default"].t('export')))), /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(r) {
          return _this3.tableRef = r;
        },
        style: {
          display: 'flex',
          flexGrow: 1,
          flexShrink: 100,
          overflowY: 'hidden',
          borderBottom: "1px solid #f0f2f5"
        }
      }, /*#__PURE__*/_react["default"].createElement(_antd.Table, {
        rowKey: this.props.rowKey || 'id',
        loading: this.props.isLoading,
        size: "small",
        columns: colums,
        dataSource: this.props.datas,
        pagination: false,
        scroll: {
          x: this.state.scroll.x ? this.state.scroll.x : undefined,
          y: this.state.scroll.y
        },
        onChange: function onChange(pagination, filters, sorter) {
          _this3.props.onChange(undefined, undefined, undefined, sorter);
        },
        rowSelection: this.props.rowSelection ? {
          selectedRowKeys: this.props.rowSelection.selectedRowKeys,
          onChange: function onChange(selectedRowKeys, selectedRows) {
            _this3.props.rowSelection.onSelectChange(selectedRowKeys, selectedRows);
          },
          checkStrictly: false
        } : undefined
      }))), /*#__PURE__*/_react["default"].createElement(_antd.Row, null, this.props.bottomTools, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          flexGrow: 1
        }
      }), /*#__PURE__*/_react["default"].createElement(_antd.Pagination, {
        disabled: this.props.isLoading,
        total: this.props.total,
        pageSize: this.props.pageSize,
        current: this.props.page,
        showSizeChanger: true,
        pageSizeOptions: this.props.pageSizeOptions || ['10', '30', '50', '100'],
        showQuickJumper: true,
        showTotal: function showTotal(total) {
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
            style: {
              marginLeft: '1rem'
            }
          }, "".concat(_lang["default"].t('total_data'), " ").concat(total, " ").concat(_lang["default"].t('items'))));
        },
        onChange: function onChange(page, pageSize) {
          _this3.props.onChange(page, pageSize);
        }
      })));
    }
  }]);
  return _default;
}(_react["default"].Component);
exports["default"] = _default;