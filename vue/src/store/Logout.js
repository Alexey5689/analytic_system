
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
        logOut(){
            Cookies.remove('XSRF-TOKEN');
            window.location.href ='/login';
        }
    },
    actions:{
        async loginOut({commit}){
            console.log(Cookies.get('XSRF-TOKEN'));
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appLocalHost + ':' + config.appBackendPort +'/api/logout',
                    data:{
                       token: Cookies.get('XSRF-TOKEN')
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                },)
                commit('logOut');
            }catch(err){
                console.log(err);
            }finally{

            }
        }
    },

    namespaсed:true,
}
