
export const LogOutModWin={
    state: ()=>({
        logOut:false,
    }),
    getters:{
        // модальное окно
        statelogOut(state){
            return state.logOut
        }
    },
    mutations:{
        changeStatelogOut(state){
            state.logOut = !state.logOut;
        },
    },
    namespased:true,
}
