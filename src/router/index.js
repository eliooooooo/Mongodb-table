import { createRouter, createWebHistory } from 'vue-router'
import List from './../views/List.vue'
import Movie from './../views/Movie.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/list/:page',
            component: List
        },{
            path: '/movie/:id',
            component: Movie
        }
    ]
})

export default router;