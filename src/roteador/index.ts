import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Projetos from "@/views/Projetos.vue";

const rotas = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
