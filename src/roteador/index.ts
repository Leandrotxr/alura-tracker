import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const rotas = [{
  path: '/',
  name: 'Tarefas',
  component: Tarefas
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
