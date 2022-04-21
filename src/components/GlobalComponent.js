import { BaseComponent, Component, Global, Handle, Intents } from '@jovotech/framework';
import { HowManyPeopleComponent } from './HowManyPeopleComponent';

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  LAUNCH() {
    this.$send({
      message: 'Sure, Recipe universe is activated, how can I help ?',
    })
  }

  @Intents("NeedRecipeIdea")
  default() {
    return this.$redirect(HowManyPeopleComponent);
  }


  @Handle({
    global: true,
    intents: ['StopIntent'],
    prioritizedOverUnhandled: true
  })
  async stopIntent() {
    // ...
    this.$send({
      message: 'Ok Thanks for using Recipe Master',
      listen: false
    })
  }
}
