!(function(i){var t={};function e(n){var Q;return(t[n]||(Q=t[n]={i:n,l:!1,exports:{}},i[n].call(Q.exports,Q,Q.exports,e),Q.l=!0,Q)).exports}e.m=i,e.c=t,e.d=function(n,Q,i){e.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(Q,n){if(1&n&&(Q=e(Q)),8&n)return Q;if(4&n&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:Q}),2&n&&"string"!=typeof Q)for(var t in Q)e.d(i,t,function(n){return Q[n]}.bind(null,t));return i},e.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(Q,"a",Q),Q},e.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},e.p="/",e(e.s=676)})({101:function(module,exports){eval("var splunkTniWrapper = function () {\n  var addMarginBottomWrapper = function addMarginBottomWrapper() {\n    $('.tni--image-bottom div.splunk-image-smallicon').css('margin-top', '32px');\n    $('.tni--image-bottom div.splunk-image-mediumicon').css('margin-top', '32px');\n    $('.tni--image-bottom div.splunk-image-largeicon').css('margin-top', '32px');\n  };\n  var formMigrationIssueFix = function formMigrationIssueFix() {\n    if (window.location.href.indexOf('/form/') > -1) {\n      var title = $(' .tni__desc span.splunk2-h2').text() + \"\";\n      $(' .tni__desc span.splunk2-h2').replaceWith('<h1 class=\"splunk2-h1\">' + title + '</h1>');\n      $('.splunk-tni-wrapper .tni .tni__desc  span.splunk2-subhead-md').hide();\n    }\n  };\n  var hideOnMobileSpaceIssueFix = function hideOnMobileSpaceIssueFix() {\n    $('.hideOnMobile').closest('.tni__image').css('marginBottom', '0');\n  };\n  var init = function init() {\n    addMarginBottomWrapper();\n    formMigrationIssueFix();\n    hideOnMobileSpaceIssueFix();\n  };\n  return {\n    init: init\n  };\n}();\n$(function () {\n  splunkTniWrapper.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL2NvbXBvbmVudHMvdGV4dC1hbmQtaW1hZ2UvdjEvdGV4dC1hbmQtaW1hZ2UuanM/YTcyNSJdLCJuYW1lcyI6WyJzcGx1bmtUbmlXcmFwcGVyIiwiYWRkTWFyZ2luQm90dG9tV3JhcHBlciIsIiQiLCJjc3MiLCJmb3JtTWlncmF0aW9uSXNzdWVGaXgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwidGl0bGUiLCJ0ZXh0IiwicmVwbGFjZVdpdGgiLCJoaWRlIiwiaGlkZU9uTW9iaWxlU3BhY2VJc3N1ZUZpeCIsImNsb3Nlc3QiLCJpbml0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxnQkFBZ0IsR0FBSSxZQUFNO0VBRTVCLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztJQUNqQ0MsQ0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO0lBQzVFRCxDQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7SUFDN0VELENBQUMsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztFQUNoRixDQUFDO0VBRUQsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQSxFQUFRO0lBQy9CLElBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztNQUMzQyxJQUFJQyxLQUFLLEdBQUdQLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxHQUFDLEVBQUU7TUFDdERSLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDUyxXQUFXLENBQUMseUJBQXlCLEdBQUNGLEtBQUssR0FBRSxPQUFPLENBQUM7TUFDdEZQLENBQUMsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDVSxJQUFJLENBQUMsQ0FBQztJQUM1RTtFQUVKLENBQUM7RUFFRCxJQUFNQyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQXlCQSxDQUFBLEVBQVM7SUFDcENYLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ1ksT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDWCxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQztFQUN0RSxDQUFDO0VBRUQsSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztJQUNmZCxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hCRyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZCUyx5QkFBeUIsQ0FBQyxDQUFDO0VBQy9CLENBQUM7RUFDRCxPQUFPO0lBQ0hFLElBQUksRUFBSkE7RUFDRixDQUFDO0FBQ1AsQ0FBQyxDQUFFLENBQUM7QUFFSmIsQ0FBQyxDQUFDLFlBQVk7RUFDVkYsZ0JBQWdCLENBQUNlLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGx1bmtUbmlXcmFwcGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGFkZE1hcmdpbkJvdHRvbVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgICQoJy50bmktLWltYWdlLWJvdHRvbSBkaXYuc3BsdW5rLWltYWdlLXNtYWxsaWNvbicpLmNzcygnbWFyZ2luLXRvcCcsICczMnB4Jyk7XG4gICAgICAgICQoJy50bmktLWltYWdlLWJvdHRvbSBkaXYuc3BsdW5rLWltYWdlLW1lZGl1bWljb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnMzJweCcpO1xuICAgICAgICAkKCcudG5pLS1pbWFnZS1ib3R0b20gZGl2LnNwbHVuay1pbWFnZS1sYXJnZWljb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnMzJweCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1NaWdyYXRpb25Jc3N1ZUZpeCA9ICgpID0+e1xuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcvZm9ybS8nKSA+IC0xKXtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9ICQoJyAudG5pX19kZXNjIHNwYW4uc3BsdW5rMi1oMicpLnRleHQoKStcIlwiO1xuICAgICAgICAgICAgJCgnIC50bmlfX2Rlc2Mgc3Bhbi5zcGx1bmsyLWgyJykucmVwbGFjZVdpdGgoJzxoMSBjbGFzcz1cInNwbHVuazItaDFcIj4nK3RpdGxlKyAnPC9oMT4nKTtcbiAgICAgICAgICAgICQoJy5zcGx1bmstdG5pLXdyYXBwZXIgLnRuaSAudG5pX19kZXNjICBzcGFuLnNwbHVuazItc3ViaGVhZC1tZCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGlkZU9uTW9iaWxlU3BhY2VJc3N1ZUZpeCA9ICgpID0+IHtcbiAgICAgICAgJCgnLmhpZGVPbk1vYmlsZScpLmNsb3Nlc3QoJy50bmlfX2ltYWdlJykuY3NzKCdtYXJnaW5Cb3R0b20nLCAnMCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGFkZE1hcmdpbkJvdHRvbVdyYXBwZXIoKTtcbiAgICAgICAgZm9ybU1pZ3JhdGlvbklzc3VlRml4KCk7XG4gICAgICAgIGhpZGVPbk1vYmlsZVNwYWNlSXNzdWVGaXgoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgICB9O1xufSkoKTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgc3BsdW5rVG5pV3JhcHBlci5pbml0KClcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///101\n")},676:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_text_and_image_v1_text_and_image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);\n/* harmony import */ var _components_text_and_image_v1_text_and_image_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_text_and_image_v1_text_and_image_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _textAndImage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(677);\n/* harmony import */ var _textAndImage_component_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_textAndImage_component_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL3NpdGUvY29tcG9uZW50cy90ZXh0QW5kSW1hZ2UtY29tcG9uZW50LnRzPzYwYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4RDtBQUl2QiIsImZpbGUiOiI2NzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RleHQgYW5kIEltYWdlIENvbXBvbmVudCBJbmNsdWRlcyBcbi8vI3JlZ2lvbiBKYXZhc2NyaXB0XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hbmQtaW1hZ2UvdjEvdGV4dC1hbmQtaW1hZ2UuanMnO1xuLy8jZW5kcmVnaW9uXG5cbi8vI3JlZ2lvbiBTdHlsZXNcbmltcG9ydCBcIi4vdGV4dEFuZEltYWdlLWNvbXBvbmVudC5zY3NzXCI7XG4vLyNlbmRyZWdpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///676\n")},677:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL3NpdGUvY29tcG9uZW50cy90ZXh0QW5kSW1hZ2UtY29tcG9uZW50LnNjc3M/NmI1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2NzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///677\n")}});