import { getterTree, mutationTree, actionTree } from "typed-vuex";

export const state = () => ({
  count: 0 as number,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  count: (state) => state.count,
});

export const mutations = mutationTree(state, {
  setCount(state, count: number): void {
    state.count = count;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    getOlder({ getters, commit }) {
      const currentAge = getters.count;
      commit("setCount", currentAge + 1);
    },
  }
);
