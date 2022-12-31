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

var Digit = function (_React$Component) {
  _inherits(Digit, _React$Component);

  function Digit(props) {
    _classCallCheck(this, Digit);

    var _this = _possibleConstructorReturn(this, (Digit.__proto__ || Object.getPrototypeOf(Digit)).call(this, props));

    _this.segments = {
      a: [[1, 1], [2, 0], [8, 0], [9, 1], [8, 2], [2, 2]],
      b: [[9, 1], [10, 2], [10, 8], [9, 9], [8, 8], [8, 2]],
      c: [[9, 9], [10, 10], [10, 16], [9, 17], [8, 16], [8, 10]],
      d: [[9, 17], [8, 18], [2, 18], [1, 17], [2, 16], [8, 16]],
      e: [[1, 17], [0, 16], [0, 10], [1, 9], [2, 10], [2, 16]],
      f: [[1, 9], [0, 8], [0, 2], [1, 1], [2, 2], [2, 8]],
      g: [[1, 9], [2, 8], [8, 8], [9, 9], [8, 10], [2, 10]]
    };

    _this.digits = {
      "0": ["a", "b", "c", "d", "e", "f"],
      "1": ["b", "c"],
      "2": ["a", "b", "g", "e", "d"],
      "3": ["a", "b", "g", "c", "d"],
      "4": ["f", "g", "b", "c"],
      "5": ["a", "f", "g", "c", "d"],
      "6": ["a", "f", "g", "c", "d", "e"],
      "7": ["a", "b", "c"],
      "8": ["a", "b", "c", "d", "e", "f", "g"],
      "9": ["a", "b", "c", "d", "f", "g"]
    };
    return _this;
  }

  _createClass(Digit, [{
    key: "getSegment",
    value: function getSegment(id) {
      var segment = this.segments[id];
      return Array.isArray(segment) ? segment : [];
    }
  }, {
    key: "getDigit",
    value: function getDigit(id) {
      var digit = this.digits[id];
      return Array.isArray(digit) ? digit : [];
    }
  }, {
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
      var _this2 = this;

      return _react2.default.createElement(
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
        Object.keys(this.segments).map(function (key) {
          return _react2.default.createElement("polygon", {
            key: key,
            points: _this2.getSegment(key),
            fill: _this2.props.color,
            fillOpacity: _this2.getDigit(_this2.props.value).indexOf(key) >= 0 ? _this2.props.onOpacity : _this2.props.offOpacity
          });
        })
      );
    }
  }]);

  return Digit;
}(_react2.default.Component);

Digit.defaultProps = {
  value: " ",
  onOpacity: 1,
  offOpacity: 0.15,
  color: "red",
  x: 0,
  y: 0
};

exports.default = Digit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EaWdpdC5qc3giXSwibmFtZXMiOlsiRGlnaXQiLCJwcm9wcyIsInNlZ21lbnRzIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImRpZ2l0cyIsImlkIiwic2VnbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImRpZ2l0IiwiZnVuY3Rpb25zIiwicmVkdWNlIiwiZnVuY3MiLCJmdW5jIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJwYXJhbXMiLCJqb2luIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlIiwieCIsInkiLCJmaWxsUnVsZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsIm1hcCIsImtleSIsImdldFNlZ21lbnQiLCJjb2xvciIsImdldERpZ2l0IiwidmFsdWUiLCJpbmRleE9mIiwib25PcGFjaXR5Iiwib2ZmT3BhY2l0eSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsU0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekIsRUFBaUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQyxFQUF5QyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpDLENBRFc7QUFFZEMsU0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBVCxFQUFrQixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQWxCLEVBQTJCLENBQUMsQ0FB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QVAsQ0FBWSxLQUFLcEIsUUFBakIsRUFBMkJpQyxHQUEzQixDQUErQjtBQUFBLGlCQUM5QjtBQUNFLGlCQUFLQyxHQURQO0FBRUUsb0JBQVEsT0FBS0MsVUFBTCxDQUFnQkQsR0FBaEIsQ0FGVjtBQUdFLGtCQUFNLE9BQUtuQyxLQUFMLENBQVdxQyxLQUhuQjtBQUlFLHlCQUNFLE9BQUtDLFFBQUwsQ0FBYyxPQUFLdEMsS0FBTCxDQUFXdUMsS0FBekIsRUFBZ0NDLE9BQWhDLENBQXdDTCxHQUF4QyxLQUFnRCxDQUFoRCxHQUNJLE9BQUtuQyxLQUFMLENBQVd5QyxTQURmLEdBRUksT0FBS3pDLEtBQUwsQ0FBVzBDO0FBUG5CLFlBRDhCO0FBQUEsU0FBL0I7QUFiSCxPQURGO0FBNEJEOzs7O0VBM0VpQixnQkFBTUMsUzs7QUE4RTFCNUMsTUFBTTZDLFlBQU4sR0FBcUI7QUFDbkJMLFNBQU8sR0FEWTtBQUVuQkUsYUFBVyxDQUZRO0FBR25CQyxjQUFZLElBSE87QUFJbkJMLFNBQU8sS0FKWTtBQUtuQlgsS0FBRyxDQUxnQjtBQU1uQkMsS0FBRztBQU5nQixDQUFyQjs7a0JBU2U1QixLIiwiZmlsZSI6IkRpZ2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgRGlnaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zZWdtZW50cyA9IHtcclxuICAgICAgYTogW1sxLCAxXSwgWzIsIDBdLCBbOCwgMF0sIFs5LCAxXSwgWzgsIDJdLCBbMiwgMl1dLFxyXG4gICAgICBiOiBbWzksIDFdLCBbMTAsIDJdLCBbMTAsIDhdLCBbOSwgOV0sIFs4LCA4XSwgWzgsIDJdXSxcclxuICAgICAgYzogW1s5LCA5XSwgWzEwLCAxMF0sIFsxMCwgMTZdLCBbOSwgMTddLCBbOCwgMTZdLCBbOCwgMTBdXSxcclxuICAgICAgZDogW1s5LCAxN10sIFs4LCAxOF0sIFsyLCAxOF0sIFsxLCAxN10sIFsyLCAxNl0sIFs4LCAxNl1dLFxyXG4gICAgICBlOiBbWzEsIDE3XSwgWzAsIDE2XSwgWzAsIDEwXSwgWzEsIDldLCBbMiwgMTBdLCBbMiwgMTZdXSxcclxuICAgICAgZjogW1sxLCA5XSwgWzAsIDhdLCBbMCwgMl0sIFsxLCAxXSwgWzIsIDJdLCBbMiwgOF1dLFxyXG4gICAgICBnOiBbWzEsIDldLCBbMiwgOF0sIFs4LCA4XSwgWzksIDldLCBbOCwgMTBdLCBbMiwgMTBdXVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRpZ2l0cyA9IHtcclxuICAgICAgXCIwXCI6IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiXSxcclxuICAgICAgXCIxXCI6IFtcImJcIiwgXCJjXCJdLFxyXG4gICAgICBcIjJcIjogW1wiYVwiLCBcImJcIiwgXCJnXCIsIFwiZVwiLCBcImRcIl0sXHJcbiAgICAgIFwiM1wiOiBbXCJhXCIsIFwiYlwiLCBcImdcIiwgXCJjXCIsIFwiZFwiXSxcclxuICAgICAgXCI0XCI6IFtcImZcIiwgXCJnXCIsIFwiYlwiLCBcImNcIl0sXHJcbiAgICAgIFwiNVwiOiBbXCJhXCIsIFwiZlwiLCBcImdcIiwgXCJjXCIsIFwiZFwiXSxcclxuICAgICAgXCI2XCI6IFtcImFcIiwgXCJmXCIsIFwiZ1wiLCBcImNcIiwgXCJkXCIsIFwiZVwiXSxcclxuICAgICAgXCI3XCI6IFtcImFcIiwgXCJiXCIsIFwiY1wiXSxcclxuICAgICAgXCI4XCI6IFtcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIl0sXHJcbiAgICAgIFwiOVwiOiBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZlwiLCBcImdcIl1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTZWdtZW50KGlkKSB7XHJcbiAgICB2YXIgc2VnbWVudCA9IHRoaXMuc2VnbWVudHNbaWRdO1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2VnbWVudCkgPyBzZWdtZW50IDogW107XHJcbiAgfVxyXG5cclxuICBnZXREaWdpdChpZCkge1xyXG4gICAgdmFyIGRpZ2l0ID0gdGhpcy5kaWdpdHNbaWRdO1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGlnaXQpID8gZGlnaXQgOiBbXTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShmdW5jdGlvbnMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbnMucmVkdWNlKChmdW5jcywgZnVuYykgPT4ge1xyXG4gICAgICB2YXIgbmFtZSA9IE9iamVjdC5rZXlzKGZ1bmMpWzBdO1xyXG4gICAgICB2YXIgcGFyYW1zID0gQXJyYXkuaXNBcnJheShmdW5jW25hbWVdKSA/IGZ1bmNbbmFtZV0gOiBbZnVuY1tuYW1lXV07XHJcbiAgICAgIHJldHVybiBgJHtmdW5jc30gJHtuYW1lfSgke3BhcmFtcy5qb2luKFwiIFwiKX0pYDtcclxuICAgIH0sIFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGdcclxuICAgICAgICB0cmFuc2Zvcm09e3RoaXMudHJhbnNmb3JtKFtcclxuICAgICAgICAgIHsgdHJhbnNsYXRlOiBbdGhpcy5wcm9wcy54LCB0aGlzLnByb3BzLnldIH1cclxuICAgICAgICBdKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxyXG4gICAgICAgICAgc3Ryb2tlOiBcIiNmZmZcIixcclxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjI1LFxyXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMSxcclxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW46IFwibWl0ZXJcIlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zZWdtZW50cykubWFwKGtleSA9PlxyXG4gICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgIHBvaW50cz17dGhpcy5nZXRTZWdtZW50KGtleSl9XHJcbiAgICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMuY29sb3J9XHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5PXtcclxuICAgICAgICAgICAgICB0aGlzLmdldERpZ2l0KHRoaXMucHJvcHMudmFsdWUpLmluZGV4T2Yoa2V5KSA+PSAwXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMub25PcGFjaXR5XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMub2ZmT3BhY2l0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5EaWdpdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFsdWU6IFwiIFwiLFxyXG4gIG9uT3BhY2l0eTogMSxcclxuICBvZmZPcGFjaXR5OiAwLjE1LFxyXG4gIGNvbG9yOiBcInJlZFwiLFxyXG4gIHg6IDAsXHJcbiAgeTogMFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlnaXQ7XHJcbiJdfQ==