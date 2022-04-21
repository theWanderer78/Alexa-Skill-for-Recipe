import { BaseComponent, Component, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';
import { SendToAlexaComponent } from './SendToAlexaComponent';
import { VeganOrNotComponent } from './VeganOrNotComponent';

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
export class HowManyPeopleComponent extends BaseComponent {
  START() {
    return this.$send({ message: `I'd be happy to help. How many people are you entertaining?` });
  }

  @Intents('HowManyPeople')
  how_many_people() {
    var how_many_people = this.$alexa.$entities.number?.value || null
    var veganCount = this.$alexa.$entities.veganCount?.value || null
    console.log(how_many_people)
    console.log(veganCount)
    if(veganCount){
      // await new Promise(resolve => setTimeout(resolve, 3000));
      return this.$redirect(SendToAlexaComponent);
    }
    return this.$redirect(VeganOrNotComponent)
  }

  UNHANDLED() {
    return this.START();
  }
}
