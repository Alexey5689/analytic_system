<template>
    <article>
        <div class="greeting">
            <div class="greeting_text">
                <h2>Приветствуем вас в РосМетрик!</h2>
                <p>
                    Вы находитесь на правильном пути к <span>эффективной рекламе</span> и прибыльному
                    бизнесу. Мы рады предложить вам помощь в привлечении <span>большего числа клиентов
                        при меньших бюджетах</span>. Обратите внимание на наши обучающие материалы - они
                    помогут быстро и правильно настроить сквозную аналитику.
                </p>
            </div>
            <div class="greeting_img">
                <img src="../assets/image/wave_pattern.svg" alt="Drawing">
            </div>
        </div>
        <div class="start">
            <h2>Быстрый старт</h2>
            <div class="connect">
                <div class="connect_way">
                    <div class="way_header">
                        <img src="../assets/image/logo_way_1.svg" alt="Logo way">
                        <div class="status_way">
                            <div
                                v-if="stateDemoErr"
                                class="sw_wrong">
                                <p>Ошибка</p>
                            </div>
                            <div
                                v-else-if="!stateDemoActive"
                                class="sw_inactive">
                                <p>Не активно</p>
                            </div>

                            <div
                                v-else
                                class="sw_active">
                                <p>Активно</p>
                            </div>
                        </div>
                    </div>
                    <div class="way_content">
                        <h3>Демо-данные</h3>
                        <p>Демо-данные позволяют увидеть систему в действии при первом её запуске. Эти
                            данные можно удалить позже в настройках проекта.</p>
                        <button
                            class="btn_add"
                            @click="fillProject"
                        >Наполнить проект</button>
                        <button class="btn_remove"
                                v-if="stateDemoActive"
                                @click="deleteDemo"
                        >Удалить данные</button>
                    </div>
                </div>
                <div class="connect_way">
                    <div class="way_header">
                        <img src="../assets/image/logo_way_2.svg" alt="Logo way">
                        <div class="status_way">
                            <div
                                v-if="stateShowErr"
                                class="sw_wrong">
                                <p>Ошибка</p>
                            </div>
                            <div
                                class="sw_inactive"
                                v-else-if="!stateActiveYandex">
                                <p>Не активно</p>
                            </div>
                            <div
                                v-else
                                class="sw_active">
                                <p>Активно</p>
                            </div>

                        </div>
                    </div>
                    <div class="way_content">
                        <h3>Яндекс.Директ</h3>
                        <p>Подключение личного кабинета Яндекс.Директ. Выгрузка данных с личных или
                            корпоративных аккаунтов.</p>
                        <button
                            class="btn_remove"
                            @click="plugYandex">Подключить
                        </button>
                        <button class="btn_remove"
                                v-if="stateActiveYandex"
                                @click="deleteYandex"
                        >Удалить данные</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters( {
            stateDemoActive: 'stateDemoActive',
            stateActiveYandex: 'stateActiveYandex',
            stateDemoErr:'stateDemoErr',
            stateShowErr:'stateShowErr',
        }),

    },
    methods: {
        ...mapMutations({
            changeStateShowCon:'changeStateShowCon',
            changeStateShowDell:'changeStateShowDell',
            changeStateDemoCon:'changeStateDemoCon',
            changeStateDemoDell:'changeStateDemoDell',
            clearDemo:'clearDemo',
            changeDemoActive:'changeDemoActive',
            clearStateYandex:'clearStateYandex',
            changeActiveYandex:'changeActiveYandex',
        }),
        ...mapActions({
            continuePlug:'continuePlug',
        }),
        plugYandex() {
            if(this.stateDemoActive){
                this.clearDemo();
                this.changeDemoActive();
                this.changeStateShowCon();
            }
            else{
                this.changeStateShowCon();
            }

        },
        fillProject() {
            if( this.stateActiveYandex){
                this.clearStateYandex();
                this.changeActiveYandex();
                this.changeStateDemoCon();
            }
            else{
                this.changeStateDemoCon();
            }

        },
        deleteDemo() {
            this.changeStateDemoDell();
        },
        deleteYandex() {
           this.changeStateShowDell();
        }
    },
};

</script>

<style src="../components/compStyle/main.css" scoped></style>
