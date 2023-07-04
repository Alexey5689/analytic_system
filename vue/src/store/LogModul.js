import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";

export const Authtorisation={
    state: ()=>({
        isAuth:''
    }),
    plugins: [createPersistedState({
        key:"XSRF-TOKEN",
        // paths:['user'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    mutations:{
        getAuthToken(state, token){
            state.isAuth = token
        },
        LostAuthToken(state){
            state.isAuth = ''
        },
    },
    namespased: true,
}
