import Vue from "vue";
import Vuex from "vuex";

import { Auth } from './auth';
import { Dashboard } from './dashboard';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Dashboard
  },
});
