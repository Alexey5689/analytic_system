<template>
    <div class="modal" v-show="demo.DemoDataConState" >
        <div
            @click.stop="demo.changeStateDemoDataCon"
            class="modal_content"
        >
            <div class="modal_body сonnect_demo">
                <h2>Подключение Демо-данных</h2>
                <p>
                    Вы можете закрыт окно и загрузка будет проходить в фоновом режиме
                </p>
                <div class="animation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="100" viewBox="0 0 101 100">
                        <path
                            d="M100.5 50C100.5 77.6142 78.1142 100 50.5 100C22.8858 100 0.5 77.6142 0.5 50C0.5 22.3858 22.8858 0 50.5 0C78.1142 0 100.5 22.3858 100.5 50ZM23 50C23 65.1878 35.3122 77.5 50.5 77.5C65.6878 77.5 78 65.1878 78 50C78 34.8122 65.6878 22.5 50.5 22.5C35.3122 22.5 23 34.8122 23 50Z"
                            fill="#528FDF" />
                        <path
                            d="M100.5 50C100.5 60.559 97.1572 70.8469 90.9509 79.3893C84.7444 87.9316 75.993 94.2899 65.9509 97.5528L58.998 76.1541C64.5212 74.3595 69.3344 70.8624 72.748 66.1641C76.1615 61.4658 78 55.8074 78 50H100.5Z"
                            fill="#005BD1" />
                    </svg>
                </div>
                <button
                    class="continue"
                    @click.stop="demo.changeStateDemoDataCon"
                >   Закрыть окно
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import { useDemo } from '../../stores/DemoConnection.js';
    export default{
        name:'DemoDataCon',
        setup(){
            const demo = useDemo();
            return{
                demo,
            }
        },
    }
</script>
<style src="../compStyle/main.css">
</style>
