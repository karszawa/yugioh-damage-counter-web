import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMinus,
  faPlus,
  faDivide,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

library.add(faMinus);
library.add(faPlus);
library.add(faDivide);
library.add(faDiceOne);
library.add(faDiceTwo);
library.add(faDiceThree);
library.add(faDiceFour);
library.add(faDiceFive);
library.add(faDiceSix);

Vue.component('font-awesome-icon', FontAwesomeIcon);
