"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HowManyPeopleComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _YesNoOutput = require("../output/YesNoOutput");

var _SendToAlexaComponent = require("./SendToAlexaComponent");

var _VeganOrNotComponent = require("./VeganOrNotComponent");

var _dec, _dec2, _class, _class2;

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
var HowManyPeopleComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('HowManyPeople'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(HowManyPeopleComponent, _BaseComponent);

  var _super = _createSuper(HowManyPeopleComponent);

  function HowManyPeopleComponent() {
    (0, _classCallCheck2["default"])(this, HowManyPeopleComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HowManyPeopleComponent, [{
    key: "START",
    value: function START() {
      return this.$send({
        message: "I'd be happy to help. How many people are you entertaining?"
      });
    }
  }, {
    key: "how_many_people",
    value: function how_many_people() {
      var _this$$alexa$$entitie, _this$$alexa$$entitie2;

      var how_many_people = ((_this$$alexa$$entitie = this.$alexa.$entities.number) === null || _this$$alexa$$entitie === void 0 ? void 0 : _this$$alexa$$entitie.value) || null;
      var veganCount = ((_this$$alexa$$entitie2 = this.$alexa.$entities.veganCount) === null || _this$$alexa$$entitie2 === void 0 ? void 0 : _this$$alexa$$entitie2.value) || null;
      console.log(how_many_people);
      console.log(veganCount);

      if (veganCount) {
        // await new Promise(resolve => setTimeout(resolve, 3000));
        return this.$redirect(_SendToAlexaComponent.SendToAlexaComponent);
      }

      return this.$redirect(_VeganOrNotComponent.VeganOrNotComponent);
    }
  }, {
    key: "UNHANDLED",
    value: function UNHANDLED() {
      return this.START();
    }
  }]);
  return HowManyPeopleComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "how_many_people", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "how_many_people"), _class2.prototype)), _class2)) || _class);
exports.HowManyPeopleComponent = HowManyPeopleComponent;