import Vue from 'vue';
import Vuex from 'vuex';
import {productGetters, manufacturerGetters} from './getters';
import {productMutations, cartMutations, manufacturerMutations} from './mutations';
import {productActions, manufacturerActions} from './actions';

Vue.use(Vuex);

/*
The flow is -- your component dispatches an action, the action makes and async request and commits 
to mutation. Mutations update the state and state are passed to components to update 
the view where necessary
*/

export default new Vue.Store({
  strict:true,
  state: {
    cart : [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
  },
  getters: Object.assign({}, productGetters, manufacturerGetters),
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  actions: Object.assign({}, productActions, manufacturerActions),
})