export function ThisIsTheEnd(){

    function EndReg(){
        localStorage.removeItem('repeatEmail');
        localStorage.removeItem('reg');
    }
    return{
        EndReg,
    }
}
