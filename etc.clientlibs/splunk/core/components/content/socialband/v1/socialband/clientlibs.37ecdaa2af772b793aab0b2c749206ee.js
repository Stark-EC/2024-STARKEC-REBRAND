!(function(U){var B={};function n(Q){var F;return(B[Q]||(F=B[Q]={i:Q,l:!1,exports:{}},U[Q].call(F.exports,F,F.exports,n),F.l=!0,F)).exports}n.m=U,n.c=B,n.d=function(Q,F,U){n.o(Q,F)||Object.defineProperty(Q,F,{enumerable:!0,get:U})},n.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},n.t=function(F,Q){if(1&Q&&(F=n(F)),8&Q)return F;if(4&Q&&"object"==typeof F&&F&&F.__esModule)return F;var U=Object.create(null);if(n.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:F}),2&Q&&"string"!=typeof F)for(var B in F)n.d(U,B,function(Q){return F[Q]}.bind(null,B));return U},n.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return n.d(F,"a",F),F},n.o=function(Q,F){return Object.prototype.hasOwnProperty.call(Q,F)},n.p="/",n(n.s=712)})({712:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_social_band_v1_social_band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(713);\n/* harmony import */ var _components_social_band_v1_social_band_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_social_band_v1_social_band_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_social_band_v1_js_social_share_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(714);\n/* harmony import */ var _components_social_band_v1_js_social_share_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_social_band_v1_js_social_share_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socialband_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(715);\n/* harmony import */ var _socialband_component_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_socialband_component_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL3NpdGUvY29tcG9uZW50cy9zb2NpYWxiYW5kLWNvbXBvbmVudC50cz84Yzk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ0k7QUFFdkIiLCJmaWxlIjoiNzEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NvY2lhbC1iYW5kL3YxL3NvY2lhbC1iYW5kLmpzJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zb2NpYWwtYmFuZC92MS9qcy9zb2NpYWwtc2hhcmUuanMnO1xuXG5pbXBvcnQgJy4vc29jaWFsYmFuZC1jb21wb25lbnQuc2Nzcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///712\n")},713:function(module,exports){eval("// generic component used for all use cases\nvar SocialBand = function () {\n  var makeSticky = function makeSticky() {\n    var $stickyBand = $('.social-band.is-sticky');\n    var defaultOffsetTop = -1;\n    if ($stickyBand.length > 0) {\n      // get window's current scroll position\n      var currentScrollPosition = $(window).scrollTop();\n\n      // get parent's offset\n      var $parentContainer = $stickyBand.closest('.container');\n      if ($parentContainer.length > 0) {\n        var parentBoundingRect = $parentContainer[0].getBoundingClientRect();\n\n        /**\n         * max allowed scroll is sum of:\n         * # current scroll position of window\n         * # parent element's top offset\n         * # parent element's height\n         *\n         * from the sum we need to subtract:\n         * # sticky band's height\n         * # element's top padding and bottom padding\n         */\n        var maxScrollAllowed = currentScrollPosition + parentBoundingRect.top + parentBoundingRect.height - $stickyBand.height() - 50;\n        $(window).on('scroll', function () {\n          if ($(window).width() > 767) {\n            // get sticky band's offset\n            var offset = $stickyBand[0].getBoundingClientRect();\n            if (defaultOffsetTop === -1) {\n              // calculate default offsetTop\n              defaultOffsetTop = currentScrollPosition + offset.y;\n            }\n\n            // current scroll position of window\n            var scrollTop = $(window).scrollTop() + 80;\n            //Check for Subnavigation \n            if ($('.sub-navigation').length > 0 && !$stickyBand.hasClass('subNavAdded')) {\n              $stickyBand.addClass('subNavAdded');\n            }\n            if ($('.sub-navigation').length > 0) {\n              scrollTop = $(window).scrollTop() + 175;\n            }\n            // if scroll of window is greater than sticky-band's default position\n            if (scrollTop > defaultOffsetTop) {\n              // check if wrapper's bottom is reached\n              if (scrollTop > maxScrollAllowed) {\n                // adjust top position so that component is not sticky beyond wrapper\n                $stickyBand.css('top', Math.max(85, maxScrollAllowed - scrollTop));\n                $stickyBand.removeClass('sticky');\n                if ($stickyBand.hasClass('subNavAdded')) {\n                  $stickyBand.css('top', Math.max(175, maxScrollAllowed - scrollTop));\n                }\n              } else if (!$stickyBand.hasClass('sticky')) {\n                // if sticky class is missing add required class\n                $stickyBand.addClass('sticky');\n              }\n            } else {\n              // remove sticky class\n              $stickyBand.removeClass('sticky');\n            }\n          } else {\n            // remove sticky class\n            $stickyBand.removeClass('sticky');\n          }\n        });\n      }\n    }\n  };\n  var init = function init() {\n    makeSticky();\n  };\n  return {\n    init: init\n  };\n}();\n$(function () {\n  SocialBand.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL2NvbXBvbmVudHMvc29jaWFsLWJhbmQvdjEvc29jaWFsLWJhbmQuanM/NjA2NyJdLCJuYW1lcyI6WyJTb2NpYWxCYW5kIiwibWFrZVN0aWNreSIsIiRzdGlja3lCYW5kIiwiJCIsImRlZmF1bHRPZmZzZXRUb3AiLCJsZW5ndGgiLCJjdXJyZW50U2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCIkcGFyZW50Q29udGFpbmVyIiwiY2xvc2VzdCIsInBhcmVudEJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1heFNjcm9sbEFsbG93ZWQiLCJ0b3AiLCJoZWlnaHQiLCJvbiIsIndpZHRoIiwib2Zmc2V0IiwieSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJjc3MiLCJNYXRoIiwibWF4IiwicmVtb3ZlQ2xhc3MiLCJpbml0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQU1BLFVBQVUsR0FBSSxZQUFNO0VBRXhCLElBQU1DLFVBQVUsR0FBSSxTQUFkQSxVQUFVQSxDQUFBLEVBQVU7SUFDeEIsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7SUFDL0MsSUFBSUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBRXpCLElBQUlGLFdBQVcsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMxQjtNQUNBLElBQU1DLHFCQUFxQixHQUFHSCxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQzs7TUFFbkQ7TUFDQSxJQUFNQyxnQkFBZ0IsR0FBR1AsV0FBVyxDQUFDUSxPQUFPLENBQUMsWUFBWSxDQUFDO01BRTFELElBQUlELGdCQUFnQixDQUFDSixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBRS9CLElBQU1NLGtCQUFrQixHQUFHRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ0cscUJBQXFCLENBQUMsQ0FBQzs7UUFFdEU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDUSxJQUFNQyxnQkFBZ0IsR0FBR1AscUJBQXFCLEdBQUdLLGtCQUFrQixDQUFDRyxHQUFHLEdBQUdILGtCQUFrQixDQUFDSSxNQUFNLEdBQUdiLFdBQVcsQ0FBQ2EsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFO1FBRS9IWixDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDUyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQU07VUFDM0IsSUFBSWIsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ1UsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDM0I7WUFDQSxJQUFNQyxNQUFNLEdBQUdoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNVLHFCQUFxQixDQUFDLENBQUM7WUFDckQsSUFBSVIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLEVBQUU7Y0FDM0I7Y0FDQUEsZ0JBQWdCLEdBQUdFLHFCQUFxQixHQUFHWSxNQUFNLENBQUNDLENBQUM7WUFDckQ7O1lBRUE7WUFDQSxJQUFJWCxTQUFTLEdBQUdMLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMxQztZQUNBLElBQUdMLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUNILFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtjQUMxRWxCLFdBQVcsQ0FBQ21CLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDckM7WUFDQSxJQUFHbEIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDbENHLFNBQVMsR0FBR0wsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3pDO1lBQ0E7WUFDQSxJQUFJQSxTQUFTLEdBQUdKLGdCQUFnQixFQUFFO2NBQ2hDO2NBQ0EsSUFBSUksU0FBUyxHQUFHSyxnQkFBZ0IsRUFBRTtnQkFDaEM7Z0JBQ0FYLFdBQVcsQ0FBQ29CLEdBQUcsQ0FBQyxLQUFLLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBR1gsZ0JBQWdCLEdBQUdMLFNBQVUsQ0FBQyxDQUFDO2dCQUNwRU4sV0FBVyxDQUFDdUIsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDakMsSUFBR3ZCLFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtrQkFDdENsQixXQUFXLENBQUNvQixHQUFHLENBQUMsS0FBSyxFQUFFQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEVBQUdYLGdCQUFnQixHQUFHTCxTQUFVLENBQUMsQ0FBQztnQkFDdkU7Y0FDRixDQUFDLE1BQU0sSUFBSSxDQUFDTixXQUFXLENBQUNrQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFDO2dCQUNBbEIsV0FBVyxDQUFDbUIsUUFBUSxDQUFDLFFBQVEsQ0FBQztjQUNoQztZQUNGLENBQUMsTUFBTTtjQUNMO2NBQ0FuQixXQUFXLENBQUN1QixXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ25DO1VBQ0YsQ0FBQyxNQUFNO1lBQ0w7WUFDQXZCLFdBQVcsQ0FBQ3VCLFdBQVcsQ0FBQyxRQUFRLENBQUM7VUFDbkM7UUFDRixDQUFDLENBQUM7TUFDSjtJQUNGO0VBQ0YsQ0FBRTtFQUVGLElBQU1DLElBQUksR0FBSSxTQUFSQSxJQUFJQSxDQUFBLEVBQVU7SUFFbEJ6QixVQUFVLENBQUMsQ0FBQztFQUNkLENBQUU7RUFFRixPQUFPO0lBQ0x5QixJQUFJLEVBQUpBO0VBQ0YsQ0FBQztBQUVILENBQUMsQ0FBRSxDQUFDO0FBRUp2QixDQUFDLENBQUMsWUFBWTtFQUNaSCxVQUFVLENBQUMwQixJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMiLCJmaWxlIjoiNzEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJpYyBjb21wb25lbnQgdXNlZCBmb3IgYWxsIHVzZSBjYXNlc1xuY29uc3QgU29jaWFsQmFuZCA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbWFrZVN0aWNreSA9ICgoKSA9PiB7XG4gICAgY29uc3QgJHN0aWNreUJhbmQgPSAkKCcuc29jaWFsLWJhbmQuaXMtc3RpY2t5Jyk7XG4gICAgbGV0IGRlZmF1bHRPZmZzZXRUb3AgPSAtMTtcblxuICAgIGlmICgkc3RpY2t5QmFuZC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBnZXQgd2luZG93J3MgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgLy8gZ2V0IHBhcmVudCdzIG9mZnNldFxuICAgICAgY29uc3QgJHBhcmVudENvbnRhaW5lciA9ICRzdGlja3lCYW5kLmNsb3Nlc3QoJy5jb250YWluZXInKTtcblxuICAgICAgaWYgKCRwYXJlbnRDb250YWluZXIubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudEJvdW5kaW5nUmVjdCA9ICRwYXJlbnRDb250YWluZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1heCBhbGxvd2VkIHNjcm9sbCBpcyBzdW0gb2Y6XG4gICAgICAgICAqICMgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2Ygd2luZG93XG4gICAgICAgICAqICMgcGFyZW50IGVsZW1lbnQncyB0b3Agb2Zmc2V0XG4gICAgICAgICAqICMgcGFyZW50IGVsZW1lbnQncyBoZWlnaHRcbiAgICAgICAgICpcbiAgICAgICAgICogZnJvbSB0aGUgc3VtIHdlIG5lZWQgdG8gc3VidHJhY3Q6XG4gICAgICAgICAqICMgc3RpY2t5IGJhbmQncyBoZWlnaHRcbiAgICAgICAgICogIyBlbGVtZW50J3MgdG9wIHBhZGRpbmcgYW5kIGJvdHRvbSBwYWRkaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtYXhTY3JvbGxBbGxvd2VkID0gY3VycmVudFNjcm9sbFBvc2l0aW9uICsgcGFyZW50Qm91bmRpbmdSZWN0LnRvcCArIHBhcmVudEJvdW5kaW5nUmVjdC5oZWlnaHQgLSAkc3RpY2t5QmFuZC5oZWlnaHQoKSAtIDUwO1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xuICAgICAgICAgICAgLy8gZ2V0IHN0aWNreSBiYW5kJ3Mgb2Zmc2V0XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAkc3RpY2t5QmFuZFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0T2Zmc2V0VG9wID09PSAtMSkge1xuICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgZGVmYXVsdCBvZmZzZXRUb3BcbiAgICAgICAgICAgICAgZGVmYXVsdE9mZnNldFRvcCA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiArIG9mZnNldC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB3aW5kb3dcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyA4MDtcbiAgICAgICAgICAgIC8vQ2hlY2sgZm9yIFN1Ym5hdmlnYXRpb24gXG4gICAgICAgICAgICBpZigkKCcuc3ViLW5hdmlnYXRpb24nKS5sZW5ndGggPiAwICYmICEkc3RpY2t5QmFuZC5oYXNDbGFzcygnc3ViTmF2QWRkZWQnKSkge1xuICAgICAgICAgICAgICAkc3RpY2t5QmFuZC5hZGRDbGFzcygnc3ViTmF2QWRkZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoJy5zdWItbmF2aWdhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgMTc1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgc2Nyb2xsIG9mIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gc3RpY2t5LWJhbmQncyBkZWZhdWx0IHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZGVmYXVsdE9mZnNldFRvcCkge1xuICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3cmFwcGVyJ3MgYm90dG9tIGlzIHJlYWNoZWRcbiAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IG1heFNjcm9sbEFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBhZGp1c3QgdG9wIHBvc2l0aW9uIHNvIHRoYXQgY29tcG9uZW50IGlzIG5vdCBzdGlja3kgYmV5b25kIHdyYXBwZXJcbiAgICAgICAgICAgICAgICAkc3RpY2t5QmFuZC5jc3MoJ3RvcCcsIE1hdGgubWF4KDg1LCAobWF4U2Nyb2xsQWxsb3dlZCAtIHNjcm9sbFRvcCkpKTtcbiAgICAgICAgICAgICAgICAkc3RpY2t5QmFuZC5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgaWYoJHN0aWNreUJhbmQuaGFzQ2xhc3MoJ3N1Yk5hdkFkZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICRzdGlja3lCYW5kLmNzcygndG9wJywgTWF0aC5tYXgoMTc1LCAobWF4U2Nyb2xsQWxsb3dlZCAtIHNjcm9sbFRvcCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoISRzdGlja3lCYW5kLmhhc0NsYXNzKCdzdGlja3knKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHN0aWNreSBjbGFzcyBpcyBtaXNzaW5nIGFkZCByZXF1aXJlZCBjbGFzc1xuICAgICAgICAgICAgICAgICRzdGlja3lCYW5kLmFkZENsYXNzKCdzdGlja3knKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcmVtb3ZlIHN0aWNreSBjbGFzc1xuICAgICAgICAgICAgICAkc3RpY2t5QmFuZC5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBzdGlja3kgY2xhc3NcbiAgICAgICAgICAgICRzdGlja3lCYW5kLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaW5pdCA9ICgoKSA9PiB7XG5cbiAgICBtYWtlU3RpY2t5KCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdFxuICB9O1xuXG59KSgpO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgU29jaWFsQmFuZC5pbml0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///713\n")},714:function(module,exports){eval("var socialShare = function socialShare() {\n  var defaults = {\n    hashTag: '#splunk',\n    message: 'Found this useful link for you.',\n    pageTitle: document.title,\n    pageUrl: location.href,\n    openInNew: false\n  };\n  var $socialShareButton = $('.enable-social-share .button-wrap');\n  var bindClick = function bindClick() {\n    $socialShareButton.on('click', function (evt) {\n      evt.preventDefault();\n      var $target = $(evt.currentTarget);\n\n      // get button platform\n      var platform = $target.data('platform');\n      var customConfig = {\n        hashTag: $target.data('hash-tag') || defaults.hashTag,\n        message: $target.data('message') || defaults.message,\n        pageTitle: $target.data('title') || defaults.pageTitle,\n        pageUrl: $target.data('url') || defaults.pageUrl,\n        openInNew: ($target.attr('target') === '_blank' ? true : false) || defaults.openInNew\n      };\n      openWindow(shareOnPlatform(platform, customConfig));\n    });\n  };\n  var shareOnPlatform = function shareOnPlatform(platform, values) {\n    var openLink = '';\n    var isEmail = false;\n    switch (platform) {\n      case 'facebook':\n        openLink = \"https://www.facebook.com/sharer/sharer.php?u=\".concat(encodeURIComponent(values.pageUrl), \"&title=\").concat(encodeURIComponent(values.message));\n        break;\n      case 'twitter':\n        openLink = \"https://twitter.com/intent/tweet?text=\".concat(encodeURIComponent(values.message), \" \").concat(encodeURIComponent(values.hashTag), \"&url=\").concat(encodeURIComponent(values.pageUrl));\n        break;\n      case 'linkedin':\n        openLink = \"http://www.linkedin.com/shareArticle?mini=true&url=\".concat(encodeURIComponent(values.pageUrl), \"&title=\").concat(encodeURIComponent(values.pageTitle), \"&summary=\").concat(encodeURIComponent(values.message));\n        break;\n      case 'google':\n        openLink = \"https://plus.google.com/share?url=\".concat(encodeURIComponent(values.pageUrl), \"&amp;title=\").concat(encodeURIComponent(values.pageTitle));\n        break;\n      case 'email':\n        isEmail = true;\n        openLink = \"mailto:?subject=\".concat(values.pageTitle, \"&body=\").concat(values.message, \" \").concat(values.pageUrl);\n        break;\n    }\n    return {\n      isEmail: isEmail,\n      openLink: openLink,\n      inNewWindow: values.openInNew\n    };\n  };\n  var openWindow = function openWindow(_ref) {\n    var isEmail = _ref.isEmail,\n      openLink = _ref.openLink,\n      inNewWindow = _ref.inNewWindow;\n    //Parameters for the Popup window\n    var winWidth = 650;\n    var winHeight = 450;\n    var winLeft = ($(window).width() - winWidth) / 2;\n    var winTop = ($(window).height() - winHeight) / 2;\n    var winOptions = 'width=' + winWidth + ',height=' + winHeight + ',top=' + winTop + ',left=' + winLeft;\n\n    //open Popup window and redirect user to share website.\n    if (!isEmail) {\n      window.open(openLink, inNewWindow ? '_blank' : '_self', inNewWindow ? winOptions : null);\n    } else {\n      location.href = openLink;\n    }\n  };\n  var addBlogsAnalyticsFeatures = function addBlogsAnalyticsFeatures(platform, values) {\n    var blogsSocialShareIconElements = document.querySelectorAll('.splunkBlogsArticle-body-headerSocialIconsSection .enable-social-share .button-wrap');\n    blogsSocialShareIconElements.forEach(function (socialElement) {\n      var elementConfig = {\n        hashTag: socialElement.getAttribute('hash-tag') || defaults.hashTag,\n        message: socialElement.getAttribute('message') || defaults.message,\n        pageTitle: socialElement.getAttribute('title') || defaults.pageTitle,\n        pageUrl: socialElement.getAttribute('url') || defaults.pageUrl,\n        openInNew: (socialElement.getAttribute('target') === '_blank' ? true : false) || defaults.openInNew\n      };\n      var platform = socialElement.getAttribute('data-platform');\n      if (platform === 'facebook') {\n        socialElement.setAttribute('href', \"https://www.facebook.com/sharer/sharer.php?u=\".concat(encodeURIComponent(elementConfig.pageUrl), \"&title=\").concat(encodeURIComponent(elementConfig.message)));\n      } else if (platform === 'twitter') {\n        socialElement.setAttribute('href', \"https://twitter.com/intent/tweet?text=\".concat(encodeURIComponent(elementConfig.message), \" \").concat(encodeURIComponent(elementConfig.hashTag), \"&url=\").concat(encodeURIComponent(elementConfig.pageUrl)));\n      } else if (platform === 'linkedin') {\n        socialElement.setAttribute('href', \"http://www.linkedin.com/shareArticle?mini=true&url=\".concat(encodeURIComponent(elementConfig.pageUrl), \"&title=\").concat(encodeURIComponent(elementConfig.pageTitle), \"&summary=\").concat(encodeURIComponent(elementConfig.message)));\n      } else if (platform === 'google') {\n        socialElement.setAttribute('href', \"https://plus.google.com/share?url=\".concat(encodeURIComponent(elementConfig.pageUrl), \"&amp;title=\").concat(encodeURIComponent(elementConfig.pageTitle)));\n      } else if (platform === 'email') {\n        socialElement.setAttribute('href', \"mailto:?subject=\".concat(elementConfig.pageTitle, \"&body=\").concat(elementConfig.message, \" \").concat(elementConfig.pageUrl));\n      }\n      if (elementConfig.openInNew) socialElement.setAttribute('target', '_blank');else socialElement.setAttribute('target', '_self');\n    });\n  };\n  var areWeOnBlogs = function areWeOnBlogs() {\n    if (document.querySelector('body.blogDetailsTemplate') !== null) return true;\n    return false;\n  };\n  if (areWeOnBlogs()) addBlogsAnalyticsFeatures();else bindClick();\n};\n$(function () {\n  socialShare();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL2NvbXBvbmVudHMvc29jaWFsLWJhbmQvdjEvanMvc29jaWFsLXNoYXJlLmpzP2FlNjciXSwibmFtZXMiOlsic29jaWFsU2hhcmUiLCJkZWZhdWx0cyIsImhhc2hUYWciLCJtZXNzYWdlIiwicGFnZVRpdGxlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInBhZ2VVcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJvcGVuSW5OZXciLCIkc29jaWFsU2hhcmVCdXR0b24iLCIkIiwiYmluZENsaWNrIiwib24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicGxhdGZvcm0iLCJkYXRhIiwiY3VzdG9tQ29uZmlnIiwiYXR0ciIsIm9wZW5XaW5kb3ciLCJzaGFyZU9uUGxhdGZvcm0iLCJ2YWx1ZXMiLCJvcGVuTGluayIsImlzRW1haWwiLCJjb25jYXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbk5ld1dpbmRvdyIsIl9yZWYiLCJ3aW5XaWR0aCIsIndpbkhlaWdodCIsIndpbkxlZnQiLCJ3aW5kb3ciLCJ3aWR0aCIsIndpblRvcCIsImhlaWdodCIsIndpbk9wdGlvbnMiLCJvcGVuIiwiYWRkQmxvZ3NBbmFseXRpY3NGZWF0dXJlcyIsImJsb2dzU29jaWFsU2hhcmVJY29uRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNvY2lhbEVsZW1lbnQiLCJlbGVtZW50Q29uZmlnIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXJlV2VPbkJsb2dzIiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsV0FBVyxHQUFJLFNBQWZBLFdBQVdBLENBQUEsRUFBVTtFQUN6QixJQUFNQyxRQUFRLEdBQUc7SUFDZkMsT0FBTyxFQUFhLFNBQVM7SUFDN0JDLE9BQU8sRUFBYSxpQ0FBaUM7SUFDckRDLFNBQVMsRUFBV0MsUUFBUSxDQUFDQyxLQUFL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LFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNKLENBQUU7RUFFRixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCLElBQUk1QyxRQUFRLENBQUM2QyxhQUFhLENBQUMsMEJBQTBCLENBQUMsS0FBSyxJQUFJLEVBQUUsT0FBTyxJQUFJO0lBQzVFLE9BQU8sS0FBSztFQUNkLENBQUM7RUFFRCxJQUFJRCxZQUFZLENBQUMsQ0FBQyxFQUFFUix5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FDM0M1QixTQUFTLENBQUMsQ0FBQztBQUVsQixDQUFFO0FBRUZELENBQUMsQ0FBQyxZQUFNO0VBQ05aLFdBQVcsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFDIiwiZmlsZSI6IjcxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2lhbFNoYXJlID0gKCgpID0+IHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgaGFzaFRhZyAgICAgICAgIDogICAnI3NwbHVuaycsXG4gICAgbWVzc2FnZSAgICAgICAgIDogICAnRm91bmQgdGhpcyB1c2VmdWwgbGluayBmb3IgeW91LicsXG4gICAgcGFnZVRpdGxlICAgICAgIDogICBkb2N1bWVudC50aXRsZSxcbiAgICBwYWdlVXJsICAgICAgICAgOiAgIGxvY2F0aW9uLmhyZWYsXG4gICAgb3BlbkluTmV3ICAgICAgIDogICBmYWxzZVxuICB9O1xuXG4gIGNvbnN0ICRzb2NpYWxTaGFyZUJ1dHRvbiA9ICQoJy5lbmFibGUtc29jaWFsLXNoYXJlIC5idXR0b24td3JhcCcpO1xuXG4gIGNvbnN0IGJpbmRDbGljayA9ICgoKSA9PiB7XG4gICAgJHNvY2lhbFNoYXJlQnV0dG9uLm9uKCdjbGljaycsIChldnQpID0+e1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCAkdGFyZ2V0ID0gJChldnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgIC8vIGdldCBidXR0b24gcGxhdGZvcm1cbiAgICAgIGNvbnN0IHBsYXRmb3JtID0gJHRhcmdldC5kYXRhKCdwbGF0Zm9ybScpO1xuXG4gICAgICBjb25zdCBjdXN0b21Db25maWcgPSB7XG4gICAgICAgIGhhc2hUYWcgICAgICAgOiAgICR0YXJnZXQuZGF0YSgnaGFzaC10YWcnKSB8fCBkZWZhdWx0cy5oYXNoVGFnLFxuICAgICAgICBtZXNzYWdlICAgICAgIDogICAkdGFyZ2V0LmRhdGEoJ21lc3NhZ2UnKSB8fCBkZWZhdWx0cy5tZXNzYWdlLFxuICAgICAgICBwYWdlVGl0bGUgICAgIDogICAkdGFyZ2V0LmRhdGEoJ3RpdGxlJykgfHwgZGVmYXVsdHMucGFnZVRpdGxlLFxuICAgICAgICBwYWdlVXJsICAgICAgIDogICAkdGFyZ2V0LmRhdGEoJ3VybCcpIHx8IGRlZmF1bHRzLnBhZ2VVcmwsXG4gICAgICAgIG9wZW5Jbk5ldyAgICAgOiAgICgkdGFyZ2V0LmF0dHIoJ3RhcmdldCcpID09PSAnX2JsYW5rJyA/IHRydWU6IGZhbHNlKSB8fCBkZWZhdWx0cy5vcGVuSW5OZXdcbiAgICAgIH07XG5cbiAgICAgIG9wZW5XaW5kb3coc2hhcmVPblBsYXRmb3JtKHBsYXRmb3JtLCBjdXN0b21Db25maWcpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2hhcmVPblBsYXRmb3JtID0gKChwbGF0Zm9ybSwgdmFsdWVzKSA9PiB7XG4gICAgbGV0IG9wZW5MaW5rID0gJyc7XG4gICAgbGV0IGlzRW1haWwgPSBmYWxzZTtcblxuICAgIHN3aXRjaCAocGxhdGZvcm0pIHtcbiAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcbiAgICAgICAgb3BlbkxpbmsgPSBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWVzLnBhZ2VVcmwpfSZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZXMubWVzc2FnZSl9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0d2l0dGVyJzpcbiAgICAgICAgb3BlbkxpbmsgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZXMubWVzc2FnZSl9ICR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlcy5oYXNoVGFnKX0mdXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlcy5wYWdlVXJsKX1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpbmtlZGluJzpcbiAgICAgICAgb3BlbkxpbmsgPSBgaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWVzLnBhZ2VVcmwpfSZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZXMucGFnZVRpdGxlKX0mc3VtbWFyeT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZXMubWVzc2FnZSl9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnb29nbGUnOlxuICAgICAgICBvcGVuTGluayA9IGBodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWVzLnBhZ2VVcmwpfSZhbXA7dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWVzLnBhZ2VUaXRsZSl9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIGlzRW1haWwgPSB0cnVlO1xuICAgICAgICBvcGVuTGluayA9IGBtYWlsdG86P3N1YmplY3Q9JHt2YWx1ZXMucGFnZVRpdGxlfSZib2R5PSR7dmFsdWVzLm1lc3NhZ2V9ICR7dmFsdWVzLnBhZ2VVcmx9YDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge2lzRW1haWwsIG9wZW5MaW5rLCBpbk5ld1dpbmRvdzogdmFsdWVzLm9wZW5Jbk5ld307XG4gIH0pO1xuXG4gIGNvbnN0IG9wZW5XaW5kb3cgPSAoKHtpc0VtYWlsLCBvcGVuTGluaywgaW5OZXdXaW5kb3d9KSA9PiB7XG4gICAgLy9QYXJhbWV0ZXJzIGZvciB0aGUgUG9wdXAgd2luZG93XG4gICAgY29uc3Qgd2luV2lkdGggPSA2NTA7XG4gICAgY29uc3Qgd2luSGVpZ2h0ID0gNDUwO1xuICAgIGNvbnN0IHdpbkxlZnQgPSAoJCh3aW5kb3cpLndpZHRoKCkgLSB3aW5XaWR0aCkgLyAyO1xuICAgIGNvbnN0IHdpblRvcCA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLSB3aW5IZWlnaHQpIC8gMjtcbiAgICBjb25zdCB3aW5PcHRpb25zID0gJ3dpZHRoPScgKyB3aW5XaWR0aCArICcsaGVpZ2h0PScgKyB3aW5IZWlnaHQgKyAnLHRvcD0nICsgd2luVG9wICsgJyxsZWZ0PScgKyB3aW5MZWZ0O1xuXG4gICAgLy9vcGVuIFBvcHVwIHdpbmRvdyBhbmQgcmVkaXJlY3QgdXNlciB0byBzaGFyZSB3ZWJzaXRlLlxuICAgIGlmICghaXNFbWFpbCkge1xuICAgICAgd2luZG93Lm9wZW4ob3BlbkxpbmssIChpbk5ld1dpbmRvdyA/ICdfYmxhbmsnOiAnX3NlbGYnKSwgaW5OZXdXaW5kb3cgPyB3aW5PcHRpb25zOiBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IG9wZW5MaW5rO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYWRkQmxvZ3NBbmFseXRpY3NGZWF0dXJlcyA9ICgocGxhdGZvcm0sIHZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGJsb2dzU29jaWFsU2hhcmVJY29uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BsdW5rQmxvZ3NBcnRpY2xlLWJvZHktaGVhZGVyU29jaWFsSWNvbnNTZWN0aW9uIC5lbmFibGUtc29jaWFsLXNoYXJlIC5idXR0b24td3JhcCcpO1xuICAgIFxuICAgIGJsb2dzU29jaWFsU2hhcmVJY29uRWxlbWVudHMuZm9yRWFjaChzb2NpYWxFbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRDb25maWcgPSB7XG4gICAgICAgIGhhc2hUYWcgICAgICAgOiAgIHNvY2lhbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdoYXNoLXRhZycpIHx8IGRlZmF1bHRzLmhhc2hUYWcsXG4gICAgICAgIG1lc3NhZ2UgICAgICAgOiAgIHNvY2lhbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtZXNzYWdlJykgfHwgZGVmYXVsdHMubWVzc2FnZSxcbiAgICAgICAgcGFnZVRpdGxlICAgICA6ICAgc29jaWFsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgZGVmYXVsdHMucGFnZVRpdGxlLFxuICAgICAgICBwYWdlVXJsICAgICAgIDogICBzb2NpYWxFbGVtZW50LmdldEF0dHJpYnV0ZSgndXJsJykgfHwgZGVmYXVsdHMucGFnZVVybCxcbiAgICAgICAgb3BlbkluTmV3ICAgICA6ICAgKHNvY2lhbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKSA9PT0gJ19ibGFuaycgPyB0cnVlIDogZmFsc2UpIHx8IGRlZmF1bHRzLm9wZW5Jbk5ld1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGxhdGZvcm0gPSBzb2NpYWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGF0Zm9ybScpO1xuICAgICAgaWYgKHBsYXRmb3JtID09PSAnZmFjZWJvb2snKSB7XG4gICAgICAgIHNvY2lhbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnRDb25maWcucGFnZVVybCl9JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnRDb25maWcubWVzc2FnZSl9YCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ3R3aXR0ZXInKSB7XG4gICAgICAgIHNvY2lhbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudENvbmZpZy5tZXNzYWdlKX0gJHtlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudENvbmZpZy5oYXNoVGFnKX0mdXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnRDb25maWcucGFnZVVybCl9YCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwbGF0Zm9ybSA9PT0gJ2xpbmtlZGluJykge1xuICAgICAgICBzb2NpYWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD0ke2VuY29kZVVSSUNvbXBvbmVudChlbGVtZW50Q29uZmlnLnBhZ2VVcmwpfSZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChlbGVtZW50Q29uZmlnLnBhZ2VUaXRsZSl9JnN1bW1hcnk9JHtlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudENvbmZpZy5tZXNzYWdlKX1gKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBsYXRmb3JtID09PSAnZ29vZ2xlJykge1xuICAgICAgICBzb2NpYWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoZWxlbWVudENvbmZpZy5wYWdlVXJsKX0mYW1wO3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVsZW1lbnRDb25maWcucGFnZVRpdGxlKX1gKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBsYXRmb3JtID09PSAnZW1haWwnKSB7XG4gICAgICAgIHNvY2lhbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYG1haWx0bzo/c3ViamVjdD0ke2VsZW1lbnRDb25maWcucGFnZVRpdGxlfSZib2R5PSR7ZWxlbWVudENvbmZpZy5tZXNzYWdlfSAke2VsZW1lbnRDb25maWcucGFnZVVybH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnRDb25maWcub3BlbkluTmV3KSBzb2NpYWxFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgZWxzZSBzb2NpYWxFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19zZWxmJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFyZVdlT25CbG9ncyA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keS5ibG9nRGV0YWlsc1RlbXBsYXRlJykgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBpZiAoYXJlV2VPbkJsb2dzKCkpIGFkZEJsb2dzQW5hbHl0aWNzRmVhdHVyZXMoKTtcbiAgZWxzZSBiaW5kQ2xpY2soKTtcblxufSk7XG5cbiQoKCkgPT4ge1xuICBzb2NpYWxTaGFyZSgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///714\n")},715:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJwYWNrL3NpdGUvY29tcG9uZW50cy9zb2NpYWxiYW5kLWNvbXBvbmVudC5zY3NzP2RiNGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNzE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///715\n")}});