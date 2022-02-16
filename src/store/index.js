import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    llista:[]
  },
  getters: {
    getLlista: state => {
      return state.llista;
    }
  },
  mutations: {
    afegeixElement:function(state, element){
      state.llista.push(element);
    },
    eliminarElement:function(state, pos){
      /* let posicio = state.llista.indexOf(element); */
      state.llista.splice(pos, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})