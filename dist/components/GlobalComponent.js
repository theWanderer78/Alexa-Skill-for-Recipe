"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalComponent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _HowManyPeopleComponent = require("./HowManyPeopleComponent");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
var GlobalComponent = (_dec = (0, _framework.Global)(), _dec2 = (0, _framework.Component)(), _dec3 = (0, _framework.Intents)("NeedRecipeIdea"), _dec4 = (0, _framework.Handle)({
  global: true,
  intents: ['StopIntent'],
  prioritizedOverUnhandled: true
}), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(GlobalComponent, _BaseComponent);

  var _super = _createSuper(GlobalComponent);

  function GlobalComponent() {
    (0, _classCallCheck2["default"])(this, GlobalComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GlobalComponent, [{
    key: "LAUNCH",
    value: function LAUNCH() {
      this.$send({
        message: 'Sure, Breville universe is activated, how can I help ?'
      });
    }
  }, {
    key: "default",
    value: function _default() {
      return this.$redirect(_HowManyPeopleComponent.HowManyPeopleComponent);
    }
  }, {
    key: "stopIntent",
    value: function () {
      var _stopIntent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // ...
                this.$send({
                  message: 'Ok Thanks for using Recipe Master',
                  listen: false
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stopIntent() {
        return _stopIntent.apply(this, arguments);
      }

      return stopIntent;
    }()
  }]);
  return GlobalComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "default", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "default"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "stopIntent", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "stopIntent"), _class2.prototype)), _class2)) || _class) || _class);
exports.GlobalComponent = GlobalComponent;