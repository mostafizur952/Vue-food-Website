import Home from './components/HomePage'
import About from './components/AboutPage'

import {createRouter,createWebHistory }from 'vue-router';

const routes =[
    {
        name:'Home',
        component:Home,
        path:'/'
    },

    {
        name:'About',
        component:About,
        path:'/About'
    }
]

const router = createRouter ({
    history:createWebHistory(),
    routes,
})

export default router;