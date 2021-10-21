"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Triangle =
/*#__PURE__*/
function () {
  function Triangle() {
    _classCallCheck(this, Triangle);

    for (var _len = arguments.length, sides = new Array(_len), _key = 0; _key < _len; _key++) {
      sides[_key] = arguments[_key];
    }

    this.sides = sides;
  }

  _createClass(Triangle, [{
    key: "isValid",
    get: function get() {
      var _this$sides = _slicedToArray(this.sides, 3),
          s1 = _this$sides[0],
          s2 = _this$sides[1],
          s3 = _this$sides[2];

      var sidesArePositive = s1 > 0 && s2 > 0 && s3 > 0;
      var validatesTriangleInequality = s1 + s2 >= s3 && s1 + s3 >= s2 && s3 + s2 >= s1;
      return sidesArePositive && validatesTriangleInequality;
    }
  }, {
    key: "isEqualateral",
    get: function get() {}
  }]);

  return Triangle;
}();