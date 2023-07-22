import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";


export const Registration={
    state: () =>({
        IsRegistration:'',
    }),
    getters:{

    },
    plugins: [createPersistedState({
        key:"reg_token",
        //paths:['IsRegistration'],
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

    namespased: true,
}
