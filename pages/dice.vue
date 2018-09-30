<template>
  <div class="container">
    <Header>
      <button class="back" @click="back">Back←</button>
    </Header>

    <div class="dice">
      <div class="decrease" @click="decreaseDice">
        <font-awesome-icon icon="minus"/>
      </div>

      <div
        class="die" :class="tossing ? 'tossing' : ''"
        v-for="(item, index) in dice" :key="index"
      >
        <font-awesome-icon :icon="`dice-${numberToString(item + 1)}`" />
      </div>

      <div class="increase" @click="increaseDice">
        <font-awesome-icon icon="plus" />
      </div>
    </div>

    <div class="operators">
      <button @click="diceRoll">Roll</button>
    </div>
  </div>
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
  @Mutation __diceRoll;

  tossing: boolean = false;

  back() {
      this.$router.go(-1);
  }

  diceRoll() {
      this.tossing = true;
      setTimeout(() => this.tossing = false, 500);
      this.__diceRoll();
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

<style scoped>
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
}

.dice > .increase, .dice > .decrease {
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

.dice > .die {
  color: white;
  font-size: 64px;
  transition: padding-bottom 0.5s cubic-bezier(0.1, 0.5, 0.3, 0.8);
}

.dice > .die.tossing {
  padding-bottom: 120px;
}

.operators {
  display: flex;
  justify-content: center;
  align-items: center;
}

.operators > button {
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
}

.operators > button:focus {
  outline: none;
}
</style>
