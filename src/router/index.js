import { createRouter, createWebHistory } from 'vue-router'
import List from './../views/List.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/list/:page',
            component: List
        }
    ]
})

export default router;