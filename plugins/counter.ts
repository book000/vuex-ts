import createPersistedState from "vuex-persistedstate";

export default ({ store }: any) => {
  createPersistedState({
    key: "vuex",
    paths: ["counter"],
    storage: window.localStorage,
  })(store);
};
