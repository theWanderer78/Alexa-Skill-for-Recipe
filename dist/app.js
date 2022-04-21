"use strict";

var _platformAlexa = require("@jovotech/platform-alexa");

var _framework = require("@jovotech/framework");

var _GlobalComponent = require("./components/GlobalComponent");

var _VeganOrNotComponent = require("./components/VeganOrNotComponent");

var _SendToAlexaComponent = require("./components/SendToAlexaComponent");

var _HowManyPeopleComponent = require("./components/HowManyPeopleComponent");

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
var app = new _framework.App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [_GlobalComponent.GlobalComponent, _VeganOrNotComponent.VeganOrNotComponent, _SendToAlexaComponent.SendToAlexaComponent, _HowManyPeopleComponent.HowManyPeopleComponent],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/docs/plugins, www.jovo.tech/marketplace
  |
  */
  plugins: [// Add Jovo plugins here
  new _platformAlexa.AlexaPlatform({
    intentMap: {
      'AMAZON.YesIntent': 'YesIntent',
      'AMAZON.NoIntent': 'NoIntent',
      'AMAZON.StopIntent': 'StopIntent',
      'AMAZON.CancelIntent': 'StopIntent',
      'AMAZON.HelpIntent': 'HelpIntent'
    }
  })],

  /*
  |--------------------------------------------------------------------------
  | Other options
  |--------------------------------------------------------------------------
  |
  | Includes all other configuration options like logging
  | Learn more here: www.jovo.tech/docs/app-config
  |
  */
  logging: true
});
module.exports = {
  app: app
};