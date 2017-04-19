import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const state = {
  articleInfo: {},
  categories: 'all',
  articleList: []
};

import * as actions from './actions';
import * as mutations from './mutations'

export default new Vuex.Store({
    state,
    actions,
    mutations,
    strict: debug
});