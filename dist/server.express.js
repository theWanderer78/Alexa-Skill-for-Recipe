"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serverExpress = require("@jovotech/server-express");

var _app = require("./app");

/*
|--------------------------------------------------------------------------
| EXPRESS SERVER CONFIGURATION
|--------------------------------------------------------------------------
|
| Creates a new express app instance, default for local development
| Learn more here: www.jovo.tech/docs/server
|
*/
var port = process.env.JOVO_PORT || 3000;
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          _context2.next = 4;
          return _app.app.initialize();

        case 4:
          _serverExpress.Webhook.listen(port, function () {
            console.info("Local server listening on port ".concat(port, "."));
          });

          _serverExpress.Webhook.post('/webhook', /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _app.app.handle(new _serverExpress.ExpressJs(req, res));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }());

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();