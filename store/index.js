import Vuex from 'vuex';

export default () => new Vuex.Store({
  state: {
    players: [
      { life: 8000 },
      { life: 8000 },
    ],
    dice: [ 0 ],
    coins: [ 0 ],
    targetPlayerIndex: null,
    operator: null,
  },

  mutations: {
    addLife(state, { playerIndex, damage }) {
      state.players[playerIndex].life += damage;
    },
    subLife(state, { playerIndex, damage }) {
      state.players[playerIndex].life -= damage;
    },
    divLife(state, { playerIndex, r }) {
      state.players[playerIndex].life /= r;
    },
    resetLife(state) {
      for (let player of state.players) {
        player.life = 8000;
      }
    },
    diceRoll(state) {
      state.dice = state.dice.map(() => Math.floor(Math.random() * 6) + 1);
    },
    increaseDice(state) {
      state.dice.push(1);
    },
    decreaseDice(state) {
      if (state.dice.length > 1) {
        state.dice.pop();
      }
    },
    coinToss(state) {
      state.coins = state.coins.map(() => Math.floor(Math.random() * 2));
    },
    increaseCoin(state) {
      state.coins.push(1);
    },
    decreaseCoin(state) {
      if (state.coins.length > 1) {
        state.coins.pop();
      }
    },
  }
});
