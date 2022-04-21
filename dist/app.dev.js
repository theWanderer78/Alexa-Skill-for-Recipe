"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require("./app");

var _dbFiledb = require("@jovotech/db-filedb");

var _pluginDebugger = require("@jovotech/plugin-debugger");

var _server = require("./server.express");

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
  plugins: [new _dbFiledb.FileDb({
    pathToFile: '../db/db.json'
  }), new _pluginDebugger.JovoDebugger()]
});