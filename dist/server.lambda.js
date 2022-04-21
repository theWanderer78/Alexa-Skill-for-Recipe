"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serverLambda = require("@jovotech/server-lambda");

var _app = require("./app");

/*
|--------------------------------------------------------------------------
| LAMBDA CONFIGURATION
|--------------------------------------------------------------------------
|
| Used to run the app on AWS Lambda
| Learn more here: www.jovo.tech/docs/server/lambda
|
*/
var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event, context, callback) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _app.app.initialize();

          case 2:
            _context.next = 4;
            return _app.app.handle(new _serverLambda.Lambda(event, context, callback));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handler(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.handler = handler;