<template>
    <div>
       
        <h1>How are you doing!</h1>
        <ul>
            <li><router-link to='/registration'>Reg</router-link></li>
            <li><router-link to='/login'>Log</router-link></li>
            <li><router-link to='/Show'>Show</router-link></li>
            
        </ul>
        <!-- <button @click="$router.push('/registration')">Reg</button>
        <button @click="$router.push('/login')">Log</button> -->
    </div>
</template>

<script>
export default {
      mounted(){
        console.log(
            localStorage.getItem('reg_token'));
      }
}
</script>

<style>

</style>
