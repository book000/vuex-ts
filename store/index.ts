import { getAccessorType } from "typed-vuex";

import * as counter from "~/store/counter";

export const state = () => {
  return {};
};

export const getters = {};

export const mutations = {};

export const actions = {};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    counter,
  },
});
