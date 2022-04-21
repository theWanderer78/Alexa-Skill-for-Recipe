"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendToAlexaComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _YesNoOutput = require("../output/YesNoOutput");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

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
var SendToAlexaComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec4 = (0, _framework.Intents)('Thanks'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(SendToAlexaComponent, _BaseComponent);

  var _super = _createSuper(SendToAlexaComponent);

  function SendToAlexaComponent() {
    (0, _classCallCheck2["default"])(this, SendToAlexaComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SendToAlexaComponent, [{
    key: "START",
    value: function START() {
      return this.$send({
        message: "<speak> Okay, just a moment while I personalize recipe ideas for you. <break time=\"3s\"/> I've searched the Breville Universe and found 3 recipes based on your\n    likes and what's popular in the season. And you can use your Sous vide for all.\n    Would you like me to send these to your phone? </speak>"
      });
    }
  }, {
    key: "yes",
    value: function yes() {
      return this.$send({
        message: '<speak> <break time="2s"/>I just sent the recommendations to your smartphone.</speak>',
        card: {
          title: 'BREVILLE UNIVERSE - Latte Coffee',
          content: "The latte is a coffee classic and loved all around the world. While the word 'latte' literally translates to 'milk' in Italian, a latte is actually made by pouring steamed milk over a shot of espresso, with a thin layer of microfoam on top to finish.\n      \n      1. Grind and Tamp\n      Purge your group head and preheat your portafilter, remove then dry. Next, grind your freshly roasted beans - a dose of about 19g. Tap the portafilter to settle the grounds before tamping on a level surface with consistent pressure and visually check your tamper is level. Use the Razor tool after tamping to ensure you have the correct dose - it precisely controls the height of the tamped coffee. \n\n      2. Espresso Extraction\n      Place the portafilter firmly into the group head. Before you start, set your cup underneath. In this video, the double basket has been used and the espresso shot split between two cups. Hit the 2-cup button. You\u2019ll see an espresso flow that looks like warm honey. \n\n      3. Texture Milk\n      Pour cold milk into the jug up to the bottom of the spout. Remember to purge the steam wand before placing the wand into the jug about a \xBD inch into the milk. Open the steam valve. Lower the jug after a few seconds to introduce air to the surface of the milk. Key here is texture first, then focus on temperature. Aim for a temperature of around 140-150\xB0F, or 60-65\xB0C. For non-dairy, try not to go over 130\xB0F, or 55\xB0C, as the milk can start to separate or curdle. Look for a velvety and silky-smooth texture.  \n\n      4. The Pour\n      Before the pour, don\u2019t forget to purge the steam wand to clean remaining milk inside then give it a wipe with a damp cloth. Swirl the jug and then tap it on the counter to ensure the milk is integrated and the bubbles removed. Hold the jug high to begin with, then blend the textured milk with the creamy espresso. As the cup starts to fill, bring the jug closer to finish the pour. The latte has more microfoam than a flat white, but less than a cappuccino; aim for around \xBD inch on top.\n\n      "
        },
        listen: true
      });
    }
  }, {
    key: "no",
    value: function no() {
      return this.$send({
        message: "Ok sure. Thanks for using Recipe Master",
        listen: false
      });
    }
  }, {
    key: "thanks",
    value: function thanks() {
      return this.$send({
        message: "Happy to help",
        listen: false
      });
    }
  }, {
    key: "UNHANDLED",
    value: function UNHANDLED() {
      return this.START();
    }
  }]);
  return SendToAlexaComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "yes", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "yes"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "no", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "no"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "thanks", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "thanks"), _class2.prototype)), _class2)) || _class);
exports.SendToAlexaComponent = SendToAlexaComponent;