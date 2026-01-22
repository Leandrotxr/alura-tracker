<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Cronometro from './Cronometro.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TarefaF',
    components: {
        Cronometro
    }
})
</script>

<style scoped>
.box{
    background: #FAF0CA;
}
</style>