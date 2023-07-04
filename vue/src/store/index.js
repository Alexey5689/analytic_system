import {createStore} from "vuex";
import {Authtorisation} from '../store/LogModul.js'
export default createStore({
    state: ()=>({
       isReg: false,
    }),
    getters:{
    },
    mutations:{
    },
    actions:{
    },
    modules:{
        Auth:Authtorisation,
    }

})
