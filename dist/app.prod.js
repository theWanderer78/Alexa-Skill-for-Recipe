"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbFiledb = require("@jovotech/db-filedb");

var _app = require("./app");

var _server = require("./server.lambda");

Object.keys(_server).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _server[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _server[key];
    }
  });
});

/*
|--------------------------------------------------------------------------
| STAGE CONFIGURATION
|--------------------------------------------------------------------------
|
| This configuration gets merged into the default app config
| Learn more here: www.jovo.tech/docs/staging
|
*/
_app.app.configure({
  plugins: [// Add Jovo plugins here
    // new FileDb(),
  ]
});