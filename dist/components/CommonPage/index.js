"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("./Table"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CommonPage = function CommonPage(props) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state[props.slice.name];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    init = _useState2[0],
    setInit = _useState2[1];
  var onChange = function onChange(page, pageSize, filter, sorter) {
    var sortField = (sorter === null || sorter === void 0 ? void 0 : sorter.field) || state.sortField;
    var sortDirection = ((sorter === null || sorter === void 0 ? void 0 : sorter.order) == 'ascend' ? 'asc' : (sorter === null || sorter === void 0 ? void 0 : sorter.order) == 'descend' ? 'desc' : undefined) || state.sortDirection;
    return dispatch(props.slice.asyncActions.fetchPageDatas({
      page: page || state.page,
      pageSize: pageSize || state.pageSize,
      filter: filter || state.filter,
      sortField: sortField,
      sortDirection: sortDirection
    }));
  };
  (0, _react.useEffect)(function () {
    // 如果页面未渲染过，则使用默认参数
    if (state.page < 0) {
      var sortField;
      var sortDirection;
      var defaultSortCol = props.columns.find(function (e) {
        return e.defaultSortOrder;
      });
      if (defaultSortCol) {
        sortField = defaultSortCol.dataIndex;
        sortDirection = defaultSortCol.defaultSortOrder == 'ascend' ? 'asc' : 'desc';
      }
      dispatch(props.slice.asyncActions.fetchPageDatas({
        page: 1,
        pageSize: 30,
        filter: undefined,
        sortField: sortField,
        sortDirection: sortDirection
      }));
      setInit(true);
      return;
    }
    setInit(true);
  }, []);
  if (init == false) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  return /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({
    page: state.page,
    pageSize: state.pageSize,
    total: state.total,
    datas: state.datas,
    filter: state.filter,
    sorter: state.sortField ? {
      columnKey: state.sortField,
      field: state.sortField,
      order: state.sortDirection == 'asc' ? 'ascend' : 'descend'
    } : undefined,
    onChange: onChange
  }, props));
};
var _default = CommonPage;
exports["default"] = _default;