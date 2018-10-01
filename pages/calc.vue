<template>
  <div class="container">
    <div class="header">
      <span class="title">
        YU-GI-OH! DAMAGE COUNTER
      </span>

      <button class="back" @click="back">
        Back ←
      </button>
    </div>

    <div class="result">
      <span class="player-name">Player {{ playerIndex }}</span>
      <span class="original-life">{{ life }} {{ operator || '?' }}</span>
      <span class="damage">{{ damage }}</span>
      <span class="result-value">= {{ resultValue }}</span>
    </div>

    <div class="numbers-wrapper">
      <div
        v-for="(item, index) in numbers" :key="index"
        @click="onOperatorPressed(item)"
        class="number"
        :style="{ 'grid-area': 'n' + item }"
      >
        {{ item }}
      </div>

      <div
        class="number"
        style="grid-area: back"
        @click="onOperatorPressed('back')"
      >
        ←
      </div>

      <button class="confirm" @click="confirm">Confirm</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { Mutation } from 'nuxt-class-component';

@Component
export default class Calc extends Vue {
  @Mutation addLife;
  @Mutation subLife;
  @Mutation divLife;

  damage: number = 0;

  mounted() {
    if (this.operator === null) {
      this.$router.push('/');
    }
  }

  get playerIndex() {
    return Number(this.$route.query.playerIndex) + 1
  }

  get life() {
    const player = this.$store.state.players[this.$route.query.playerIndex];
    return player === undefined ? 0 : player.life || 0;
  }

  get operator() {
    switch (this.$route.query.operator) {
      case 'add': return '+';
      case 'sub': return '-';
      case 'div': return '÷';
      default: return null;
    }
  }

  get numbers() {
    return [
        '1', '2', '3', '0',
        '4', '5', '6', '00',
        '7', '8', '9', '000',
    ];
  }

  get resultValue(): string {
    if (!Number.isInteger(this.damage)) {
      return '?';
    }

    switch (this.$route.query.operator) {
      case 'add': return String(this.life + Number(this.damage));
      case 'sub': return String(this.life - Number(this.damage));
      case 'div': return String(this.life / Number(this.damage));
      default: return '?';
    }
  }

  onOperatorPressed(item: string) {
    if (item === 'back') {
      if (this.damage === 0) {
        return;
      } else if (0 <= this.damage && this.damage < 10) {
        this.damage = 0;
      } else {
        this.damage = Math.floor(this.damage / 10);
      }
    } else if (Number(item) === 0) {
      for (let _ of new Array(item.length)) {
        this.damage *= 10;
      }
    } else if (Number.isInteger(Number(item))) {
      this.damage = this.damage * 10 + Number(item);
    }
  }

  confirm() {
    const playerIndex = this.$route.query.playerIndex;

    if (!Number.isInteger(Number(playerIndex))) {
      this.$router.push('/');
      return;
    }

    switch (this.$route.query.operator) {
      case 'add':
        this.addLife({ playerIndex, damage: this.damage });
        break;

      case 'sub':
        this.subLife({ playerIndex, damage: this.damage });
        break;

      case 'div':
        this.divLife({ playerIndex, r: this.damage });
        break;

      default: break;
    }

    this.$router.push('/');
  }

  back() {
    this.$router.go(-1);
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 20% 20% 60% / 1fr;
  padding: 4px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

button.back {
  padding: 4px 24px;
  color: #333;
  border: none;
  background-color: rgba(255,255,255, 0.4);
  border-radius: 100px;
}

.title {
  font-size: 24px;
  color: white;
}

.result {
  display: grid;
  grid-template: 1fr / 1fr 1fr 200px 1fr;
  align-items: center;
  font-size: 32px;
  background-color: white;
  border-radius: 4px;
}

.player-name {
  font-size: 18px;
  padding-left: 24px;
  opacity: 0.5;
}

.original-life {
  text-align: center;
}

.damage {
  color: #4abdac;
  text-align: right;
}

.result-value {
  opacity: 0.5;
  white-space: nowrap;
  padding-left: 16px;
}

.numbers-wrapper {
  display: grid;
  grid-template:
    ". n1 n2 n3 n0 back"
    ". n4 n5 n6 n00 ."
    ". n7 n8 n9 n000 confirm"
    / 1fr 100px 100px 100px 100px 1fr;
  justify-content: center;
  align-items: center;
  background-color: #4abdac;
  padding: 10px 0;
}

.number {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 64px;
  font-size: 32px;
}

button.confirm {
  grid-area: confirm;
  font-size: 20px;
  color: white;
  background-color: #f7b733;
  border: none;
  padding: 8px 24px;
  width: 150px;
  justify-self: center;
  border-radius: 100px;
}
</style>
