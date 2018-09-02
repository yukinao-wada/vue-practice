// src/stories/index.js
import { storiesOf } from '@storybook/vue'

import MyButton from './MyButton.vue'

storiesOf('Buttons', module)
  .add('simple', () => ({
    components: { MyButton },
    template: '<MyButton/>'
  }))