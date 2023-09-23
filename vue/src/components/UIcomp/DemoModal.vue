<template>
    <div class="section" v-show="demo.stateDemoModal&&demo.DeActiveState">
        <div class="section-top">
            <div class="section_text_top">
                <p class="textDemo">Демо-проект</p>
            </div>
            <div class="section_action" @click="demo.changeStateDemoModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                    <path d="M7.49548 0.233075C7.74834 0.233075 7.97712 0.332413 8.18182 0.531088L14.7381 7.2409C14.8164 7.32519 14.8796 7.4185 14.9278 7.52085C14.9759 7.62922 15 7.74662 15 7.87305C15 8.04162 14.9609 8.19213 14.8826 8.32459C14.8043 8.46306 14.699 8.57142 14.5665 8.64969C14.4281 8.72796 14.2745 8.76709 14.106 8.76709C13.8591 8.76709 13.6454 8.67979 13.4648 8.5052L7.06201 1.94891L7.93799 1.94891L1.54425 8.5052C1.3516 8.67979 1.13486 8.76709 0.89404 8.76709C0.725467 8.76709 0.574955 8.72796 0.442505 8.64969C0.304034 8.57143 0.195665 8.46306 0.117399 8.32459C0.039133 8.19214 -6.34223e-08 8.04162 -7.81594e-08 7.87305C-9.92125e-08 7.63223 0.0872964 7.42152 0.26189 7.2409L6.82721 0.540119C6.91752 0.437771 7.01987 0.359504 7.13426 0.30532C7.24864 0.257157 7.36905 0.233075 7.49548 0.233075Z" fill="#528FDF"/>
                </svg>
            </div>
        </div>
        <div class="section-central">
            <div class="section_central_text">
                <p>Проект наполнен демо-данными. Если вы хотите загрузить свои данные нажмите на кнопку ниже</p>
            </div>
        </div>
        <div class="section-bottom">
            <div class="section_text_bottom">
                <p>Перейти к подключению</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useDemo } from '../../stores/DemoConnection';
export default {
    name: "DemoModal",
    setup(){
        const demo = useDemo();
        return{
            demo,
        }
    },
}
</script>
<style src="./UIStyle/DemoModalStyle.css" scoped>
</style>
