"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VeganOrNotComponent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _YesNoOutput = require("../output/YesNoOutput");

var _SendToAlexaComponent = require("./SendToAlexaComponent");

var _dec, _dec2, _dec3, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
var VeganOrNotComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(VeganOrNotComponent, _BaseComponent);

  var _super = _createSuper(VeganOrNotComponent);

  function VeganOrNotComponent() {
    (0, _classCallCheck2["default"])(this, VeganOrNotComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(VeganOrNotComponent, [{
    key: "START",
    value: function START() {
      return this.$send({
        message: 'Are some of them vegan?'
      });
    }
  }, {
    key: "yes",
    value: function () {
      var _yes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.$redirect(_SendToAlexaComponent.SendToAlexaComponent));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function yes() {
        return _yes.apply(this, arguments);
      }

      return yes;
    }()
  }, {
    key: "no",
    value: function () {
      var _no = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.$redirect(_SendToAlexaComponent.SendToAlexaComponent));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function no() {
        return _no.apply(this, arguments);
      }

      return no;
    }()
  }, {
    key: "UNHANDLED",
    value: function UNHANDLED() {
      return this.START();
    }
  }]);
  return VeganOrNotComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "yes", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "yes"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "no", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "no"), _class2.prototype)), _class2)) || _class);
exports.VeganOrNotComponent = VeganOrNotComponent;