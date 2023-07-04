import Cookies from "js-cookie"
import createPersistedState from "vuex-persistedstate";

const accessTokenReg = Cookies.get("reg_token")
console.log(accessTokenReg);
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
        getRegToken: state => state.isReg = accessTokenReg
    },
    namespased: true,
}