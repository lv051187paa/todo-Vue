import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos';
import uiControllers from './modules/uiControllModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    uiControllers
  }
})
