import { BaseComponent, Component, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';

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
export class SendToAlexaComponent extends BaseComponent {
  START() {
    return this.$send({ message: `<speak> Okay, just a moment while I personalize recipe ideas for you. <break time="3s"/> I've searched the Recipe Universe and found 3 recipes based on your
    likes and what's popular in the season. And you can use your Sous vide for all.
    Would you like me to send these to your phone? </speak>` });
  }

  @Intents('YesIntent')
  yes() {
    return this.$send({ message: '<speak> <break time="2s"/>I just sent the recommendations to your smartphone.</speak>', card:{
      title: 'Recipe Universe',
      content: `The latte is a coffee classic and loved all around the world. While the word 'latte' literally translates to 'milk' in Italian, a latte is actually made by pouring steamed milk over a shot of espresso, with a thin layer of microfoam on top to finish.
      
      1. Grind and Tamp
      Purge your group head and preheat your portafilter, remove then dry. Next, grind your freshly roasted beans - a dose of about 19g. Tap the portafilter to settle the grounds before tamping on a level surface with consistent pressure and visually check your tamper is level. Use the Razor tool after tamping to ensure you have the correct dose - it precisely controls the height of the tamped coffee. 

      2. Espresso Extraction
      Place the portafilter firmly into the group head. Before you start, set your cup underneath. In this video, the double basket has been used and the espresso shot split between two cups. Hit the 2-cup button. You’ll see an espresso flow that looks like warm honey. 

      3. Texture Milk
      Pour cold milk into the jug up to the bottom of the spout. Remember to purge the steam wand before placing the wand into the jug about a ½ inch into the milk. Open the steam valve. Lower the jug after a few seconds to introduce air to the surface of the milk. Key here is texture first, then focus on temperature. Aim for a temperature of around 140-150°F, or 60-65°C. For non-dairy, try not to go over 130°F, or 55°C, as the milk can start to separate or curdle. Look for a velvety and silky-smooth texture.  

      4. The Pour
      Before the pour, don’t forget to purge the steam wand to clean remaining milk inside then give it a wipe with a damp cloth. Swirl the jug and then tap it on the counter to ensure the milk is integrated and the bubbles removed. Hold the jug high to begin with, then blend the textured milk with the creamy espresso. As the cup starts to fill, bring the jug closer to finish the pour. The latte has more microfoam than a flat white, but less than a cappuccino; aim for around ½ inch on top.

      `,
    }, listen: true });
  }

  @Intents('NoIntent')
  no() {
    return this.$send({ message: `Ok sure. Thanks for using Recipe Universe`, listen: false });
  }

  @Intents('Thanks')
  thanks() {
    return this.$send({ message: `Happy to help`, listen: false });
  }

  UNHANDLED() {
    return this.START();
  }
}
