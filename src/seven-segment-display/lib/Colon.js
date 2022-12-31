"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Colon = function (_React$Component) {
  _inherits(Colon, _React$Component);

  function Colon(props) {
    _classCallCheck(this, Colon);

    return _possibleConstructorReturn(this, (Colon.__proto__ || Object.getPrototypeOf(Colon)).call(this, props));
  }

  _createClass(Colon, [{
    key: "transform",
    value: function transform(functions) {
      return functions.reduce(function (funcs, func) {
        var name = Object.keys(func)[0];
        var params = Array.isArray(func[name]) ? func[name] : [func[name]];
        return funcs + " " + name + "(" + params.join(" ") + ")";
      }, "");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { viewBox: [-1, -1, 12, 20] },
        _react2.default.createElement(
          "g",
          {
            transform: this.transform([{ translate: [this.props.x, this.props.y] }]),
            style: {
              fillRule: "evenodd",
              stroke: "#fff",
              strokeWidth: 0.25,
              strokeOpacity: 1,
              strokeLinecap: "butt",
              strokeLinejoin: "miter"
            }
          },
          _react2.default.createElement("circle", {
            cx: 12 / 2,
            cy: 20 / 3,
            r: 1,
            fill: this.props.color,
            fillOpacity: this.props.on ? this.props.onOpacity : this.props.offOpacity
          }),
          _react2.default.createElement("circle", {
            cx: 12 - 12 / 2,
            cy: 20 - 20 / 3,
            r: 1,
            fill: this.props.color,
            fillOpacity: this.props.on ? this.props.onOpacity : this.props.offOpacity
          })
        )
      );
    }
  }]);

  return Colon;
}(_react2.default.Component);

Colon.defaultProps = {
  on: true,
  onOpacity: 1,
  offOpacity: 0.15,
  color: "red",
  x: 0,
  y: 0
};

exports.default = Colon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db2xvbi5qc3giXSwibmFtZXMiOlsiQ29sb24iLCJwcm9wcyIsImZ1bmN0aW9ucyIsInJlZHVjZSIsImZ1bmNzIiwiZnVuYyIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1zIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsIngiLCJ5IiwiZmlsbFJ1bGUiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJjb2xvciIsIm9uIiwib25PcGFjaXR5Iiwib2ZmT3BhY2l0eSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFbEI7Ozs7OEJBRVNDLFMsRUFBVztBQUNuQixhQUFPQSxVQUFVQyxNQUFWLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QyxZQUFJQyxPQUFPQyxPQUFPQyxJQUFQLENBQVlILElBQVosRUFBa0IsQ0FBbEIsQ0FBWDtBQUNBLFlBQUlJLFNBQVNDLE1BQU1DLE9BQU4sQ0FBY04sS0FBS0MsSUFBTCxDQUFkLElBQTRCRCxLQUFLQyxJQUFMLENBQTVCLEdBQXlDLENBQUNELEtBQUtDLElBQUwsQ0FBRCxDQUF0RDtBQUNBLGVBQVVGLEtBQVYsU0FBbUJFLElBQW5CLFNBQTJCRyxPQUFPRyxJQUFQLENBQVksR0FBWixDQUEzQjtBQUNELE9BSk0sRUFJSixFQUpJLENBQVA7QUFLRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFTLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFXLEtBQUtDLFNBQUwsQ0FBZSxDQUN4QixFQUFFQyxXQUFXLENBQUMsS0FBS2IsS0FBTCxDQUFXYyxDQUFaLEVBQWUsS0FBS2QsS0FBTCxDQUFXZSxDQUExQixDQUFiLEVBRHdCLENBQWYsQ0FEYjtBQUlFLG1CQUFPO0FBQ0xDLHdCQUFVLFNBREw7QUFFTEMsc0JBQVEsTUFGSDtBQUdMQywyQkFBYSxJQUhSO0FBSUxDLDZCQUFlLENBSlY7QUFLTEMsNkJBQWUsTUFMVjtBQU1MQyw4QkFBZ0I7QUFOWDtBQUpUO0FBYUU7QUFDRSxnQkFBSSxLQUFLLENBRFg7QUFFRSxnQkFBSSxLQUFLLENBRlg7QUFHRSxlQUFHLENBSEw7QUFJRSxrQkFBTSxLQUFLckIsS0FBTCxDQUFXc0IsS0FKbkI7QUFLRSx5QkFDRSxLQUFLdEIsS0FBTCxDQUFXdUIsRUFBWCxHQUFnQixLQUFLdkIsS0FBTCxDQUFXd0IsU0FBM0IsR0FBdUMsS0FBS3hCLEtBQUwsQ0FBV3lCO0FBTnRELFlBYkY7QUFzQkU7QUFDRSxnQkFBSSxLQUFLLEtBQUssQ0FEaEI7QUFFRSxnQkFBSSxLQUFLLEtBQUssQ0FGaEI7QUFHRSxlQUFHLENBSEw7QUFJRSxrQkFBTSxLQUFLekIsS0FBTCxDQUFXc0IsS0FKbkI7QUFLRSx5QkFDRSxLQUFLdEIsS0FBTCxDQUFXdUIsRUFBWCxHQUFnQixLQUFLdkIsS0FBTCxDQUFXd0IsU0FBM0IsR0FBdUMsS0FBS3hCLEtBQUwsQ0FBV3lCO0FBTnREO0FBdEJGO0FBREYsT0FERjtBQW9DRDs7OztFQWxEaUIsZ0JBQU1DLFM7O0FBcUQxQjNCLE1BQU00QixZQUFOLEdBQXFCO0FBQ25CSixNQUFJLElBRGU7QUFFbkJDLGFBQVcsQ0FGUTtBQUduQkMsY0FBWSxJQUhPO0FBSW5CSCxTQUFPLEtBSlk7QUFLbkJSLEtBQUcsQ0FMZ0I7QUFNbkJDLEtBQUc7QUFOZ0IsQ0FBckI7O2tCQVNlaEIsSyIsImZpbGUiOiJDb2xvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIENvbG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGZ1bmN0aW9ucykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoKGZ1bmNzLCBmdW5jKSA9PiB7XHJcbiAgICAgIHZhciBuYW1lID0gT2JqZWN0LmtleXMoZnVuYylbMF07XHJcbiAgICAgIHZhciBwYXJhbXMgPSBBcnJheS5pc0FycmF5KGZ1bmNbbmFtZV0pID8gZnVuY1tuYW1lXSA6IFtmdW5jW25hbWVdXTtcclxuICAgICAgcmV0dXJuIGAke2Z1bmNzfSAke25hbWV9KCR7cGFyYW1zLmpvaW4oXCIgXCIpfSlgO1xyXG4gICAgfSwgXCJcIik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHZpZXdCb3g9e1stMSwgLTEsIDEyLCAyMF19PlxyXG4gICAgICAgIDxnXHJcbiAgICAgICAgICB0cmFuc2Zvcm09e3RoaXMudHJhbnNmb3JtKFtcclxuICAgICAgICAgICAgeyB0cmFuc2xhdGU6IFt0aGlzLnByb3BzLngsIHRoaXMucHJvcHMueV0gfVxyXG4gICAgICAgICAgXSl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXHJcbiAgICAgICAgICAgIHN0cm9rZTogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjI1LFxyXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcImJ1dHRcIixcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW46IFwibWl0ZXJcIlxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgIGN4PXsxMiAvIDJ9XHJcbiAgICAgICAgICAgIGN5PXsyMCAvIDN9XHJcbiAgICAgICAgICAgIHI9ezF9XHJcbiAgICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMuY29sb3J9XHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5PXtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uID8gdGhpcy5wcm9wcy5vbk9wYWNpdHkgOiB0aGlzLnByb3BzLm9mZk9wYWNpdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgY3g9ezEyIC0gMTIgLyAyfVxyXG4gICAgICAgICAgICBjeT17MjAgLSAyMCAvIDN9XHJcbiAgICAgICAgICAgIHI9ezF9XHJcbiAgICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMuY29sb3J9XHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5PXtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uID8gdGhpcy5wcm9wcy5vbk9wYWNpdHkgOiB0aGlzLnByb3BzLm9mZk9wYWNpdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNvbG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBvbjogdHJ1ZSxcclxuICBvbk9wYWNpdHk6IDEsXHJcbiAgb2ZmT3BhY2l0eTogMC4xNSxcclxuICBjb2xvcjogXCJyZWRcIixcclxuICB4OiAwLFxyXG4gIHk6IDBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9uO1xyXG4iXX0=