"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Table = _interopRequireDefault(require("./Table"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var CommonPage = function CommonPage(props) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state[props.slice.name];
  });
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({
    page: state.page,
    pageSize: state.pageSize,
    total: state.total,
    datas: state.datas,
    onChange: function onChange(page, pageSize, filter, sorter) {
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
    }
  }, props));
};
var _default = CommonPage;
exports["default"] = _default;