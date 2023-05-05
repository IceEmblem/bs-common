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
var CommonPage = function CommonPage(props) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state[props.slice.name];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  var onChange = function onChange(page, pageSize, filter, sorter) {
    var cursorter = sorter || state.sorter;
    if (!cursorter) {
      var defaultSortCol = props.columns.find(function (e) {
        return e.defaultSortOrder;
      });
      if (defaultSortCol) {
        cursorter = {
          columnKey: defaultSortCol.key,
          field: defaultSortCol.dataIndex,
          order: defaultSortCol.defaultSortOrder
        };
      }
    }
    dispatch(props.slice.asyncActions.fetchPageDatass({
      page: page || state.page,
      pageSize: pageSize || state.pageSize,
      filter: filter || state.filter,
      sortField: sorter === null || sorter === void 0 ? void 0 : sorter.field,
      sortDirection: (sorter === null || sorter === void 0 ? void 0 : sorter.order) == 'ascend' ? 'asc' : (sorter === null || sorter === void 0 ? void 0 : sorter.order) == 'descend' ? 'desc' : undefined
    }));
  };
  (0, _react.useEffect)(function () {
    // 在页面结束渲染时进行一次API请求
    onChange();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({
    page: state.page,
    pageSize: state.pageSize,
    total: state.total,
    datas: state.datas,
    onChange: onChange
  }, props));
};
var _default = CommonPage;
exports["default"] = _default;