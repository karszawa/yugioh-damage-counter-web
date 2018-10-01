<template lang="pug">
  .container
    Header
      button.back(@click="back") Back←

    .dice
      .decrease(@click="decreaseDice")
        font-awesome-icon(icon="minus")

      .die(
        :class="rolling ? 'rolling' : ''"
        v-for="(item, index) in dice" :key="index"
        @click="diceRoll"
      )
        font-awesome-icon(:icon="`dice-${numberToString(item + 1)}`")

      .increase(@click="increaseDice")
        font-awesome-icon(icon="plus")

    .operators
      button(@click="diceRoll") Roll
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { State, Mutation } from 'nuxt-class-component';
import { mapState, mapMutations } from 'vuex';
import Header from '~/components/Header.vue';

@Component({
  components: {
    Header,
  }
})
export default class Dice extends Vue {
  @State dice;
  @Mutation increaseDice;
  @Mutation decreaseDice;
  @Mutation('diceRoll') __diceRoll;

  rolling: boolean = false;

  back() {
      this.$router.go(-1);
  }

  diceRoll() {
      this.rolling = true;

      setTimeout(() => {
        this.__diceRoll();
        this.rolling = false
      }, 500);
  }

  numberToString(n) {
    switch (n) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      return null;
    }
  }
}
</script>

<style scoped lang="postcss">
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 20% 60% 20% / 1fr;
}

.back {
  color: #333;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 12px;
  padding: 4px 24px;
}

.dice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  .increase, .decrease {
    color: white;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 12px;
    border-radius: 8px;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .die {
    color: white;
    font-size: 64px;
    transition-property: all;
    transition-duration: 1s;

    &.rolling {
      opacity: 0;
      transform: rotateZ(7200deg);
    }
  }
}

.operators {
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: white;
    background-color: #f7b733;
    width: 160px;
    padding: 10px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    border: none;
    font-size: 24px;

    &:focus {
      outline: none;
    }
  }
}
</style>
