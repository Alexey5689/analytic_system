<template>
    <div class="modal" v-show="yandex.stateYandexErr" @click.stop ="yandex.changeStateYandexErr">
        <div  @click.stop class="modal_content">
            <div class="modal_body">
                <h2>Ошибка подключения рекламного канала Яндекс</h2>
                <button class="modal_close" @click="yandex.changeStateYandexErr">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                        <path
                            d="M25.1248 12.3969C25.5153 12.0064 25.5153 11.3732 25.1248 10.9827C24.7342 10.5922 24.1011 10.5922 23.7106 10.9827L17.9653 16.7279L12.3968 11.1595C12.0063 10.7689 11.3732 10.7689 10.9826 11.1595C10.5921 11.55 10.5921 12.1831 10.9826 12.5737L16.5511 18.1421L10.9826 23.7106C10.5921 24.1011 10.5921 24.7343 10.9826 25.1248C11.3732 25.5153 12.0063 25.5153 12.3968 25.1248L17.9653 19.5563L23.7106 25.3016C24.1011 25.6921 24.7342 25.6921 25.1248 25.3016C25.5153 24.9111 25.5153 24.2779 25.1248 23.8874L19.3795 18.1421L25.1248 12.3969Z" />
                    </svg>
                </button>
                <p>
                    Произошла неизвестная ошибка.<br>
                    Пробуйте подключить рекламный канал Яндекс еще раз. Если проблему не удается решить, напишите нам в
                    службу поддержки.
                </p>
                <button class="continue">Написать в поддержку</button>
            </div>
        </div>
    </div>
</template>
<script>
      import {useYandex} from '../../stores/YandexConnetction.js';
    export default{
        name:'YanErr',
        setup(){
            const yandex = useYandex();
            return{
                yandex,
            }
        },
    }

</script>
<style src="../compStyle/main.css">
</style>
