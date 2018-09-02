// src/stories/index.js
import { storiesOf } from '@storybook/vue'

import MyButton2 from './MyButton2.vue'

storiesOf('Buttons2', module)
  .add('simple2', () => ({
    components: { MyButton2 },
    template: '<MyButton2/>'
  }))