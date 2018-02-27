webpackHotUpdate(0,{

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(33);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _height = __webpack_require__(89);
	
	var _height2 = _interopRequireDefault(_height);
	
	var _Table = __webpack_require__(200);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _noHeight = __webpack_require__(91);
	
	var _noHeight2 = _interopRequireDefault(_noHeight);
	
	var buttonStyle = {
	  padding: 10,
	  margin: 10,
	  cursor: 'pointer'
	};
	
	var renderNoHeight = function renderNoHeight() {
	  var appEl = document.getElementById('app');
	  appEl.innerHTML = '';
	  appEl.style.height = '';_reactDom2['default'].render(_react2['default'].createElement(_noHeight2['default'], null), document.getElementById('app'));
	};
	
	var renderHeight = function renderHeight() {
	  var appEl = document.getElementById('app');
	  appEl.innerHTML = '';
	  appEl.style.height = '';_reactDom2['default'].render(_react2['default'].createElement(_height2['default'], null), document.getElementById('app'));
	};
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(
	    'button',
	    { onClick: renderNoHeight, onTouchStart: renderNoHeight, style: buttonStyle },
	    'Body scroll, no height, like Facebook timeline!'
	  ),
	  _react2['default'].createElement(
	    'button',
	    { onClick: renderNoHeight, onTouchStart: renderNoHeight, style: buttonStyle },
	    'Fixed container table'
	  ),
	  _react2['default'].createElement(
	    'button',
	    { onClick: renderHeight, onTouchStart: renderHeight, style: buttonStyle },
	    'Fixed container height'
	  )
	), document.getElementById('button'));
	
	// initial render
	_reactDom2['default'].render(_react2['default'].createElement(_Table2['default'], null), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=0.144a627e47f4ddd9a820.hot-update.js.map