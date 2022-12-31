"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Digit = require("./Digit");

var _Digit2 = _interopRequireDefault(_Digit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display(props) {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "svg",
        { viewBox: [-1, -1, 12 * this.props.digitCount, 20] },
        this.props.value.toString().padStart(this.props.digitCount, " ").split("").slice(-this.props.digitCount).map(function (digit, key) {
          return _react2.default.createElement(_Digit2.default, {
            key: key,
            value: digit,
            x: key * 12,
            color: _this2.props.color
          });
        })
      );
    }
  }]);

  return Display;
}(_react2.default.Component);

Display.defaultProps = {
  digitCount: 4,
  value: ""
};

exports.default = Display;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EaXNwbGF5LmpzeCJdLCJuYW1lcyI6WyJEaXNwbGF5IiwicHJvcHMiLCJkaWdpdENvdW50IiwidmFsdWUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzbGljZSIsIm1hcCIsImRpZ2l0Iiwia2V5IiwiY29sb3IiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sRUFBUyxLQUFLLEtBQUtBLEtBQUwsQ0FBV0MsVUFBekIsRUFBcUMsRUFBckMsQ0FBZDtBQUNHLGFBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUNFQyxRQURGLEdBRUVDLFFBRkYsQ0FFVyxLQUFLSixLQUFMLENBQVdDLFVBRnRCLEVBRWtDLEdBRmxDLEVBR0VJLEtBSEYsQ0FHUSxFQUhSLEVBSUVDLEtBSkYsQ0FJUSxDQUFDLEtBQUtOLEtBQUwsQ0FBV0MsVUFKcEIsRUFLRU0sR0FMRixDQUtNLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLGlCQUNIO0FBQ0UsaUJBQUtBLEdBRFA7QUFFRSxtQkFBT0QsS0FGVDtBQUdFLGVBQUdDLE1BQU0sRUFIWDtBQUlFLG1CQUFPLE9BQUtULEtBQUwsQ0FBV1U7QUFKcEIsWUFERztBQUFBLFNBTE47QUFESCxPQURGO0FBaUJEOzs7O0VBdkJtQixnQkFBTUMsUzs7QUEwQjVCWixRQUFRYSxZQUFSLEdBQXVCO0FBQ3JCWCxjQUFZLENBRFM7QUFFckJDLFNBQU87QUFGYyxDQUF2Qjs7a0JBS2VILE8iLCJmaWxlIjoiRGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERpZ2l0IGZyb20gXCIuL0RpZ2l0XCI7XHJcblxyXG5jbGFzcyBEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2ZyB2aWV3Qm94PXtbLTEsIC0xLCAxMiAqIHRoaXMucHJvcHMuZGlnaXRDb3VudCwgMjBdfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgIC5wYWRTdGFydCh0aGlzLnByb3BzLmRpZ2l0Q291bnQsIFwiIFwiKVxyXG4gICAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgICAuc2xpY2UoLXRoaXMucHJvcHMuZGlnaXRDb3VudClcclxuICAgICAgICAgIC5tYXAoKGRpZ2l0LCBrZXkpID0+XHJcbiAgICAgICAgICAgIDxEaWdpdFxyXG4gICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkaWdpdH1cclxuICAgICAgICAgICAgICB4PXtrZXkgKiAxMn1cclxuICAgICAgICAgICAgICBjb2xvcj17dGhpcy5wcm9wcy5jb2xvcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkRpc3BsYXkuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpZ2l0Q291bnQ6IDQsXHJcbiAgdmFsdWU6IFwiXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XHJcbiJdfQ==