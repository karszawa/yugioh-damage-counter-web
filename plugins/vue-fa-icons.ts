import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

const icons = [
  'faMinus',
  'faPlus',
  'faDivide',
  'faDiceOne',
  'faDiceTwo',
  'faDiceThree',
  'faDiceFour',
  'faDiceFive',
  'faDiceSix',
];

import('@fortawesome/free-solid-svg-icons').then(module => {
  icons.forEach(icon => {
    console.log(module[icon]);
    library.add(module[icon]);
  })
})
