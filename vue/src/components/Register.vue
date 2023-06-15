<template>
    <div v-if="state.isReg" >
        {{ state.response.data.message}}
    </div>
    <div v-else class="card" align="left">
        <div class="card-header">Register Form</div>
        <div class="card-body">

            <form  @submit.prevent="fetchForm">

                <label>Email</label>
                <input type="email" v-model="state.email" name="email" id="email" :class = "$style.form"/>

                <label>Password</label>
                <input type="password" v-model="state.password" name="password" id="password" :class = "$style.form"/>

                <button type="submit">Reg</button>
            </form>
        </div>
    </div>
</template>

<style module>
/* .form {
    color: red;
    background: #646cff;
} */
/* .button {
    color: chartreuse;
} */
</style>

<script>


import {RegTest} from '../hooks/Registration.js';
export default {
    setup(props){
        const {state,fetchForm} = RegTest();
        return{
            state, 
            fetchForm
        }
    },
}
</script>


