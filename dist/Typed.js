"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Typed = /*#__PURE__*/function () {
  function Typed(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2["default"])(this, Typed);
    (0, _defineProperty2["default"])(this, "_timeline", void 0);
    (0, _defineProperty2["default"])(this, "_blink", void 0);
    (0, _defineProperty2["default"])(this, "_printErrors", void 0);
    (0, _defineProperty2["default"])(this, "_blinkClasses", void 0);
    (0, _defineProperty2["default"])(this, "_blinkSpeed", void 0);
    (0, _defineProperty2["default"])(this, "_isWriting", void 0);
    this.el = el;
    this._timeline = []; //Blink - default: true

    this._blink = 'blink' in options ? options.blink : true; //Print Errors - default: false

    this._printErrors = 'printErrors' in options ? options.printErrors : false; //Blink Classes - default: []

    this._blinkClasses = 'blinkClasses' in options ? options.blinkClasses : []; //Blink Speed - default: 600

    this._blinkSpeed = 'blinkSpeed' in options ? options.blinkSpeed : 600;
    this._isWriting = false;
    this.el.innerText = "";
    return this;
  }

  (0, _createClass2["default"])(Typed, [{
    key: "__startBlink",
    value: function __startBlink() {
      var _this = this;

      var span = document.createElement("span");

      for (var cl in this._blinkClasses) {
        if (this._blinkClasses.hasOwnProperty(cl)) {
          span.classList.add(this._blinkClasses[cl]);
        }
      }

      span.innerText = '|';
      this.el.appendChild(span);
      var interval = setInterval(function () {
        if (_this._isWriting === true) {
          span.style.opacity = "1";
        } else {
          span.style.opacity = span.style.opacity === "0" ? "1" : "0";
        }
      }, this._blinkSpeed);
    }
    /*
    * str: "Ceci est un texte"
    * style: {color: "red",fontWeight:bold}
    * */

  }, {
    key: "__type",
    value: function __type(el, str) {
      var _this2 = this;

      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var delay = arguments.length > 3 ? arguments[3] : undefined;
      return new Promise(function (resolve, reject) {
        var letters = str.split('');
        var counter = 0;

        if (delay < 0) {
          reject("The delay cannot be negative");
          return;
        }

        var interval = setInterval(function () {
          _this2._isWriting = true;
          var element = document.createElement("span"); //Apply styles

          for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (style.hasOwnProperty(key)) {
              element.style[key] = value;
            }
          } //Append SPAN to element


          element.innerText = letters[counter];
          el.appendChild(element); //Increment and check the end

          counter++;

          if (counter >= letters.length) {
            _this2._isWriting = false;
            resolve();
            clearInterval(interval);
          }
        }, delay);
      });
    }
  }, {
    key: "type",
    value: function type(str) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

      this._timeline.push("w^" + str + "///" + JSON.stringify(style) + "///" + delay);

      return this;
    }
    /*
    * delay: Integer (milliseconds)
    * */

  }, {
    key: "__pause",
    value: function __pause(delay) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, delay);
      });
    }
  }, {
    key: "pause",
    value: function pause(delay) {
      this._timeline.push("p^" + delay);

      return this;
    }
    /*
    * length: Integer
    * delay: Integer (milliseconds)
    * */

  }, {
    key: "__delete",
    value: function __delete(el, length, delay) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var counter = 0;
        var interval = setInterval(function () {
          _this3._isWriting = true; //Remove last char

          el.removeChild(el.lastChild); //Increment and check the end of the loop

          counter++;

          if (counter > length) {
            _this3._isWriting = false;
            resolve();
            clearInterval(interval);
          }
        }, delay);
      });
    }
  }, {
    key: "delete",
    value: function _delete(length) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      this._timeline.push("d^" + length + "/" + delay);

      return this;
    }
  }, {
    key: "_start",
    value: function _start() {
      var _this4 = this;

      return new Promise(function (resolve) {
        setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
          var span, instruction, action, value, values, str, style, delay, _values, val, _delay;

          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  span = document.createElement("span");

                  _this4.el.appendChild(span);

                  if (_this4._blink) {
                    _this4.__startBlink();
                  }

                  _context.t0 = _regenerator["default"].keys(_this4._timeline);

                case 4:
                  if ((_context.t1 = _context.t0()).done) {
                    _context.next = 38;
                    break;
                  }

                  instruction = _context.t1.value;

                  if (!_this4._timeline.hasOwnProperty(instruction)) {
                    _context.next = 36;
                    break;
                  }

                  action = _this4._timeline[instruction].split('^')[0];
                  value = _this4._timeline[instruction].split('^')[1]; //Write

                  if (!(action === "w")) {
                    _context.next = 25;
                    break;
                  }

                  values = value.split('///');
                  str = values[0];
                  style = JSON.parse(values[1]);
                  delay = values[2];
                  _context.prev = 14;
                  _context.next = 17;
                  return _this4.__type(span, str, style, delay);

                case 17:
                  _context.next = 23;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t2 = _context["catch"](14);
                  _this4._printErrors ? console.log(_context.t2) : '';
                  throw _context.t2;

                case 23:
                  _context.next = 36;
                  break;

                case 25:
                  if (!(action === "p")) {
                    _context.next = 30;
                    break;
                  }

                  _context.next = 28;
                  return _this4.__pause(value);

                case 28:
                  _context.next = 36;
                  break;

                case 30:
                  if (!(action === "d")) {
                    _context.next = 36;
                    break;
                  }

                  _values = value.split('/');
                  val = _values[0];
                  _delay = _values[1];
                  _context.next = 36;
                  return _this4.__delete(span, val, _delay);

                case 36:
                  _context.next = 4;
                  break;

                case 38:
                  resolve();

                case 39:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[14, 19]]);
        })), 1);
      });
    }
  }, {
    key: "run",
    value: function run(callback) {
      if (callback != null) {
        this._start().then(function () {
          return callback();
        });
      } else {
        this._start();
      }
    }
  }]);
  return Typed;
}();
//# sourceMappingURL=Typed.js.map