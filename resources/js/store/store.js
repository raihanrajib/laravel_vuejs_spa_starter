import Vue from 'vue';
import Vuex from 'vuex';
import router from '../routes/routes';




Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    authenticated: false

  },
  mutations: {
    SET_USER(state, data){
      state.user = data;
  },
    SET_AUTHENTICATED(state,payload){
      state.authenticated = payload;
    }

  },
  getters: {
    getUser(state){
      return state.user;
    },
    getAuthenticated(state){
      return state.authenticated;
    }
  },
  actions: {
    authUser ({ commit, dispatch }) {
        return axios.get('/api/user').then((response) => {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', response.data)
            localStorage.setItem("auth", true);
            
            if(router.currentRoute.name !== null){
                router.push({ name: 'dashboard' })
            };

        }).catch(() => {
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', null)
            localStorage.removeItem("auth");

            if(router.currentRoute.name !== 'login'){
                router.push({ name: 'login' })
            };
        })
    },
}
})

export default store;
