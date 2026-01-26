import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Projetos from "@/views/Projetos.vue";
import Formulario from "@/views/Projetos/Formulario.vue";

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
  },
  {
    path: '/projetos/novo',
    name: 'Novo projetos',
    component: Formulario
  },
  {
    path: '/projetos/:id',
    name: 'Editar projetos',
    component: Formulario,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
