<template>
  <section class="container">
    <section class="header">
      <div class="title">
        YU-GI-OH! DAMAGE COUNTER
      </div>
      <button @click="resetLife()">
        Refresh
      </button>
    </section>

    <section class="life">
      <div class="point-wrapper" v-for="(player, index) in players" :key="index">
        <div class="point">{{ player.life }}</div>

        <div class="calc">
          <nuxt-link
            class="operator-link"
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'add' } }"
          >
            <font-awesome-icon icon="plus" />
          </nuxt-link>
          <nuxt-link
            class="operator-link"
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'sub' } }"
          >
            <font-awesome-icon icon="minus" />
          </nuxt-link>
          <nuxt-link
            class="operator-link"
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'div' } }"
          >
            <font-awesome-icon icon="divide" />
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="links">
      <nuxt-link to="/coin">
        Coin
      </nuxt-link>
      <nuxt-link to="/dice">
        Dice
      </nuxt-link>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { State, Mutation } from 'vuex-class';

@Component
export default class Index extends Vue {
  @State players;
  @Mutation resetLife;
}
</script>

<style scoped>
.container
{
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template: 20% 60% 20% / 1fr;
  background-color: #4ABDAC;
}

section.header {
  display: flex;
  align-items: center;
  color: white;
  padding: 0 64px;
  justify-content: space-between;
}

.title {
  font-size: 24px;
}

section.header > button {
  color: #333;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 12px;
  padding: 4px 24px;
}

section.life {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.point-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.point {
  font-size: 64px;
  color: white;
  margin-bottom: 8px;
}

.calc {
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.operator-link {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 8px;
  font-size: 18px;
}

.operator-link:visited {
  color: white;
}

section.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

section.links a {
  color: white;
  background-color: #f7b733;
  width: 120px;
  padding: 4px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
}

section.links a:visited {
  color: white;
}

</style>
