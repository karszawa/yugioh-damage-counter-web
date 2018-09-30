<script lang="ts">
import Vue from 'vue';
import Component, { State, Mutation } from 'nuxt-class-component';
import { mapState, mapMutations } from 'vuex';
import Header from '~/components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class Coin extends Vue {
  @State coins;
  @Mutation increaseCoin;
  @Mutation decreaseCoin;
  @Mutation('coinToss') __coinToss;

  tossing: boolean = false;

  back() {
    this.$router.go(-1);
  }

  coinToss() {
    this.tossing = true;
    setTimeout(() => this.tossing = false, 500);
    this.__coinToss();
  }
}
</script>

<template lang="pug">
  .container
    Header
      button.back(@click="back") Back←

    .coins
      .decrease(@click="decreaseCoin")
        font-awesome-icon(icon="minus")

      .coin(
        :class="tossing ? 'tossing' : ''"
        v-for="(item, index) in coins" :key="index"
      ) {{ item === 0 ? 'F' : 'B' }}

      .increase(@click="increaseCoin")
        font-awesome-icon(icon="plus")

    .operators
      button(@click="coinToss") Toss
</template>

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

.coins {
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

  .coin {
    background-color: white;
    font-size: 32px;
    border-radius: 1000px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-duration: 1s;

    &.tossing {
      width: 0;
      height: 0;
      font-size: 0;
      opacity: 0;
      transform: rotateX(720deg);
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
