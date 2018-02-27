webpackHotUpdate(0,{

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(26);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(27);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _app = __webpack_require__(35);
	
	var _app2 = _interopRequireDefault(_app);
	
	var style = {
	  display: "flex",
	  alignItems: "center",
	  fontSize: 40
	};
	
	var divs = [_react2["default"].createElement(
	  "tr",
	  { key: 1, style: _extends({ height: 200, background: "#9bc95b" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 1"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 2, style: _extends({ height: 200, background: "#ffd47b" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 2"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 3, style: _extends({ height: 200, background: "#95a9d6" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 3"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 4, style: _extends({ height: 200, background: "#ffa8e1" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 4"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 5, style: _extends({ height: 200, background: "#9bc95b" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 5"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 6, style: _extends({ height: 200, background: "#ffd47b" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 6"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 7, style: _extends({ height: 200, background: "#95a9d6" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 7"
	  )
	), _react2["default"].createElement(
	  "tr",
	  { key: 8, style: _extends({ height: 200, background: "#ffa8e1" }, style) },
	  _react2["default"].createElement(
	    "td",
	    null,
	    "tr no 8"
	  )
	)];
	
	var heightMessage = "Infinite Scroll given fixed height of 300px in props";
	var colors = ["#9bc95b", "#ffd47b", "#95a9d6", "#ffa8e1"];
	
	var Height = (function (_React$Component) {
	  _inherits(Height, _React$Component);
	
	  function Height() {
	    _classCallCheck(this, Height);
	
	    _get(Object.getPrototypeOf(Height.prototype), "constructor", this).call(this);
	    this.state = { divs: divs };
	    this.generateDivs = this.generateDivs.bind(this);
	  }
	
	  _createClass(Height, [{
	    key: "generateDivs",
	    value: function generateDivs() {
	      var _this = this;
	
	      var moreDivs = [];
	      var count = this.state.divs.length;
	      for (var i = 0; i < 30; i++) {
	        moreDivs.push(_react2["default"].createElement(
	          "tr",
	          {
	            key: "div" + count++,
	            style: _extends({ height: 200, background: colors[i % 4] }, style)
	          },
	          _react2["default"].createElement(
	            "td",
	            null,
	            "Div no ",
	            count
	          )
	        ));
	      }
	      setTimeout(function () {
	        _this.setState({ divs: _this.state.divs.concat(moreDivs) });
	      }, 500);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        null,
	        _react2["default"].createElement(
	          "h3",
	          null,
	          heightMessage
	        ),
	        _react2["default"].createElement(
	          _app2["default"],
	          {
	            next: this.generateDivs,
	            hasMore: true,
	            height: 300,
	            containerElement: "tbody",
	            loader: _react2["default"].createElement(
	              "tr",
	              null,
	              _react2["default"].createElement(
	                "td",
	                null,
	                "Loading..."
	              )
	            )
	          },
	          this.state.divs
	        )
	      );
	    }
	  }]);
	
	  return Height;
	})(_react2["default"].Component);
	
	exports["default"] = Height;
	module.exports = exports["default"];

/***/ })

})
//# sourceMappingURL=0.8b3117f1e92232bb72a5.hot-update.js.map