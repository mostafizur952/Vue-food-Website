import Home from './components/HomePage';
import About from './components/AboutPage';
import Menu from './components/MenuPage.vue';
import Offer from './components/OfferPage.vue'

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
    },
    {
        name:'Menu',
        component:Menu,
        path:'/Menu'
    },
    {
        name :'Offer',
        component:Offer,
        path :'/Offer',
    }
]

const router = createRouter ({
    history:createWebHistory(),
    routes,
})

export default router;