import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";


export const Registration={
    state: () =>({
        IsRegistration:'',
    }),
    getters:{
        token(state){
            return state.IsRegistration
        }
    },
    plugins: [createPersistedState({
        key:"reg_token",
        //paths:['user'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    mutations:{
        getRegToken(state, token){
            state.IsRegistration = token;
        },

    },
    // actions:{
    //     getToken({commit}){
    //         commit('getRegToken');
    //     }
    // },
    namespased: true,
}
