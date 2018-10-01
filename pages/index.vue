<template lang="pug">
  section.container
    Header
      button(@click="resetLife()") Refresh

    section.life
      .point-wrapper(v-for="(player, index) in players" :key="index")
        .point {{ player.life }}

        .calc
          nuxt-link.operator-link(
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'add' } }"
          ): font-awesome-icon(icon="plus")

          nuxt-link.operator-link(
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'sub' } }"
          ): font-awesome-icon(icon="minus")

          nuxt-link.operator-link(
            :to="{ path: 'calc', query: { playerIndex: index, operator: 'div' } }"
          ): font-awesome-icon(icon="divide")

    section.links
      nuxt-link(to="/coin") Coin
      nuxt-link(to="/dice") Dice
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { State, Mutation } from 'nuxt-class-component';
import Header from '~/components/Header.vue';

@Component({
  components: {
    Header,
  }
})
export default class Index extends Vue {
  @State players;
  @Mutation resetLife;
}
</script>

<style scoped lang="postcss">
.container
{
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template: 20% 60% 20% / 1fr;
  background-color: #4ABDAC;
}

Header {
  button {
    color: #333;
    background-color: rgba(255, 255, 255, 0.4);
    border: none;
    border-radius: 12px;
    padding: 4px 24px;
  }
}

section.life {
  display: flex;
  justify-content: space-around;
  align-items: center;

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

    &:visited {
      color: white;
    }
  }
}

section.links {
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
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

    &:visited {
      color: white;
    }
  }
}
</style>
