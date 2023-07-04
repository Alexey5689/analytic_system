import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";

const accessToken = Cookies.get("XSRF-TOKEN")
export const Authtorisation={
    state: ()=>({
        isAuth:false
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
        getAuthToken(state){
            state.isAuth = accessToken
        },
    },
    namespased: true,
}
