import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";


export const Registration={
    state: ()=>({
        isReg:""
    }),
    plugins: [createPersistedState({
        key:"reg_token",
        // paths:['user'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    mutations:{
        getRegToken(state, token){
            state.isReg = token
        },

    },
    namespased: true,
}
