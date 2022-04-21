import { BaseComponent, Component, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';
import { SendToAlexaComponent } from './SendToAlexaComponent';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class VeganOrNotComponent extends BaseComponent {
  START() {
    return this.$send({ message: 'Are some of them vegan?' });
  }

  @Intents('YesIntent')
  async yes() {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return this.$redirect(SendToAlexaComponent);
  }

  @Intents('NoIntent')
  async no() {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return this.$redirect(SendToAlexaComponent);
  }

  UNHANDLED() {
    return this.START();
  }
}
