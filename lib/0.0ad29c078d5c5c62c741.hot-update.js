webpackHotUpdate(0,{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(26);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(112);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _utilsThrottle = __webpack_require__(88);
	
	var _utilsThrottle2 = _interopRequireDefault(_utilsThrottle);
	
	var InfiniteScroll = (function (_Component) {
	  _inherits(InfiniteScroll, _Component);
	
	  function InfiniteScroll(props) {
	    _classCallCheck(this, InfiniteScroll);
	
	    _get(Object.getPrototypeOf(InfiniteScroll.prototype), "constructor", this).call(this);
	    this.state = {
	      showLoader: false,
	      lastScrollTop: 0,
	      actionTriggered: false,
	      pullToRefreshThresholdBreached: false
	    };
	    // variables to keep track of pull down behaviour
	    this.startY = 0;
	    this.currentY = 0;
	    this.dragging = false;
	    // will be populated in componentDidMount
	    // based on the height of the pull down element
	    this.maxPullDownDistance = 0;
	
	    this.onScrollListener = this.onScrollListener.bind(this);
	    this.throttledOnScrollListener = (0, _utilsThrottle2["default"])(this.onScrollListener, 150).bind(this);
	    this.onStart = this.onStart.bind(this);
	    this.onMove = this.onMove.bind(this);
	    this.onEnd = this.onEnd.bind(this);
	  }
	
	  _createClass(InfiniteScroll, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.el = this.props.height ? this._infScroll : this.props.scrollableTarget || window;
	      this.el.addEventListener("scroll", this.throttledOnScrollListener);
	
	      if (typeof this.props.initialScrollY === "number" && this.el.scrollHeight > this.props.initialScrollY) {
	        this.el.scrollTo(0, this.props.initialScrollY);
	      }
	
	      if (this.props.pullDownToRefresh) {
	        this.el.addEventListener("touchstart", this.onStart);
	        this.el.addEventListener("touchmove", this.onMove);
	        this.el.addEventListener("touchend", this.onEnd);
	
	        this.el.addEventListener("mousedown", this.onStart);
	        this.el.addEventListener("mousemove", this.onMove);
	        this.el.addEventListener("mouseup", this.onEnd);
	
	        // get BCR of pullDown element to position it above
	        this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height;
	        this.forceUpdate();
	
	        if (typeof this.props.refreshFunction !== "function") {
	          throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
	        }
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.el.removeEventListener("scroll", this.throttledOnScrollListener);
	
	      if (this.props.pullDownToRefresh) {
	        this.el.removeEventListener("touchstart", this.onStart);
	        this.el.removeEventListener("touchmove", this.onMove);
	        this.el.removeEventListener("touchend", this.onEnd);
	
	        this.el.removeEventListener("mousedown", this.onStart);
	        this.el.removeEventListener("mousemove", this.onMove);
	        this.el.removeEventListener("mouseup", this.onEnd);
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(props) {
	      // new data was sent in
	      this.setState({
	        showLoader: false,
	        actionTriggered: false,
	        pullToRefreshThresholdBreached: false
	      });
	    }
	  }, {
	    key: "onStart",
	    value: function onStart(evt) {
	      if (this.state.lastScrollTop) return;
	
	      this.dragging = true;
	      this.startY = evt.pageY || evt.touches[0].pageY;
	      this.currentY = this.startY;
	
	      this._infScroll.style.willChange = "transform";
	      this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
	    }
	  }, {
	    key: "onMove",
	    value: function onMove(evt) {
	      if (!this.dragging) return;
	      this.currentY = evt.pageY || evt.touches[0].pageY;
	
	      // user is scrolling down to up
	      if (this.currentY < this.startY) return;
	
	      if (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold) {
	        this.setState({
	          pullToRefreshThresholdBreached: true
	        });
	      }
	
	      // so you can drag upto 1.5 times of the maxPullDownDistance
	      if (this.currentY - this.startY > this.maxPullDownDistance * 1.5) return;
	
	      this._infScroll.style.overflow = "visible";
	      this._infScroll.style.transform = "translate3d(0px, " + (this.currentY - this.startY) + "px, 0px)";
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd(evt) {
	      var _this = this;
	
	      this.startY = 0;
	      this.currentY = 0;
	
	      this.dragging = false;
	
	      if (this.state.pullToRefreshThresholdBreached) {
	        this.props.refreshFunction && this.props.refreshFunction();
	      }
	
	      requestAnimationFrame(function () {
	        _this._infScroll.style.overflow = "auto";
	        _this._infScroll.style.transform = "none";
	        _this._infScroll.style.willChange = "none";
	      });
	    }
	  }, {
	    key: "isElementAtBottom",
	    value: function isElementAtBottom(target) {
	      var scrollThreshold = arguments.length <= 1 || arguments[1] === undefined ? 0.8 : arguments[1];
	
	      var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;
	
	      var scrolled = scrollThreshold * (target.scrollHeight - target.scrollTop);
	      return scrolled <= clientHeight;
	    }
	  }, {
	    key: "onScrollListener",
	    value: function onScrollListener(event) {
	      var _this2 = this;
	
	      if (typeof this.props.onScroll === "function") {
	        // Execute this callback in next tick so that it does not affect the
	        // functionality of the library.
	        setTimeout(function () {
	          return _this2.props.onScroll(event);
	        }, 0);
	      }
	
	      var target = this.props.height || this.props.scrollableTarget ? event.target : document.documentElement.scrollTop ? document.documentElement : document.body;
	
	      // if user scrolls up, remove action trigger lock
	      if (target.scrollTop < this.state.lastScrollTop) {
	        this.setState({
	          actionTriggered: false,
	          lastScrollTop: target.scrollTop
	        });
	        return; // user's going up, we don't care
	      }
	
	      // return immediately if the action has already been triggered,
	      // prevents multiple triggers.
	      if (this.state.actionTriggered) return;
	
	      var atBottom = this.isElementAtBottom(target, this.props.scrollThreshold);
	
	      // call the `next` function in the props to trigger the next data fetch
	      if (atBottom && this.props.hasMore) {
	        this.props.next();
	        this.setState({ actionTriggered: true, showLoader: true });
	      }
	      this.setState({ lastScrollTop: target.scrollTop });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      var ContainerElement = this.props.containerElement;
	
	      // because heighted infiniteScroll visualy breaks
	      // on drag down as overflow becomes visible
	      var outerDivStyle = this.props.pullDownToRefresh && this.props.height ? { overflow: "auto" } : {};
	
	      var style = _extends({
	        height: this.props.height || "auto",
	        overflow: "auto",
	        WebkitOverflowScrolling: "touch"
	      }, this.props.style);
	
	      var hasChildren = this.props.hasChildren || !!(this.props.children && this.props.children.length);
	
	      return ContainerElement === "tbody" ? this.renderTableContent(ContainerElement, style, hasChildren) : _react2["default"].createElement(
	        "div",
	        { style: outerDivStyle },
	        _react2["default"].createElement(
	          "div",
	          {
	            className: "infinite-scroll-component",
	            ref: function (infScroll) {
	              return _this3._infScroll = infScroll;
	            },
	            style: style
	          },
	          this.props.pullDownToRefresh && _react2["default"].createElement(
	            "div",
	            {
	              style: { position: "relative" },
	              ref: function (pullDown) {
	                return _this3._pullDown = pullDown;
	              }
	            },
	            _react2["default"].createElement(
	              "div",
	              {
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  right: 0,
	                  top: -1 * this.maxPullDownDistance
	                }
	              },
	              !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
	              this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
	            )
	          ),
	          this.props.children,
	          !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader,
	          this.state.showLoader && this.props.loader,
	          !this.props.hasMore && this.props.endMessage
	        )
	      );
	    }
	  }, {
	    key: "renderTableContent",
	    value: function renderTableContent(ContainerElement, style, hasChildren) {
	      var _this4 = this;
	
	      _react2["default"].createElement(
	        ContainerElement,
	        {
	          className: "infinite-scroll-component",
	          ref: function (infScroll) {
	            return _this4._infScroll = infScroll;
	          },
	          style: style
	        },
	        this.props.pullDownToRefresh && _react2["default"].createElement(
	          "tr",
	          {
	            style: { position: "relative" },
	            ref: function (pullDown) {
	              return _this4._pullDown = pullDown;
	            }
	          },
	          _react2["default"].createElement(
	            "td",
	            {
	              style: {
	                position: "absolute",
	                left: 0,
	                right: 0,
	                top: -1 * this.maxPullDownDistance
	              }
	            },
	            !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
	            this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
	          )
	        ),
	        this.props.children,
	        !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader,
	        this.state.showLoader && this.props.loader,
	        !this.props.hasMore && this.props.endMessage
	      );
	    }
	  }]);
	
	  return InfiniteScroll;
	})(_react.Component);
	
	exports["default"] = InfiniteScroll;
	
	InfiniteScroll.defaultProps = {
	  pullDownToRefreshContent: _react2["default"].createElement(
	    "h3",
	    null,
	    "Pull down to refresh"
	  ),
	  releaseToRefreshContent: _react2["default"].createElement(
	    "h3",
	    null,
	    "Release to refresh"
	  ),
	  pullDownToRefreshThreshold: 100,
	  disableBrowserPullToRefresh: true
	};
	
	InfiniteScroll.propTypes = {
	  next: _propTypes2["default"].func,
	  hasMore: _propTypes2["default"].bool,
	  children: _propTypes2["default"].node,
	  loader: _propTypes2["default"].node.isRequired,
	  scrollThreshold: _propTypes2["default"].number,
	  endMessage: _propTypes2["default"].node,
	  style: _propTypes2["default"].object,
	  height: _propTypes2["default"].number,
	  scrollableTarget: _propTypes2["default"].node,
	  hasChildren: _propTypes2["default"].bool,
	  pullDownToRefresh: _propTypes2["default"].bool,
	  pullDownToRefreshContent: _propTypes2["default"].node,
	  releaseToRefreshContent: _propTypes2["default"].node,
	  pullDownToRefreshThreshold: _propTypes2["default"].number,
	  refreshFunction: _propTypes2["default"].func,
	  onScroll: _propTypes2["default"].func
	};
	module.exports = exports["default"];

/***/ })

})
//# sourceMappingURL=0.0ad29c078d5c5c62c741.hot-update.js.map