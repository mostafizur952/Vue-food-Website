import Home from './components/HomePage';
import About from './components/AboutPage';
import Menu from './components/MenuPage.vue';
import Offer from './components/OfferPage.vue'
import AllBranch from './components/AllBranch.vue'
import ContactUs from './components/ContactUs.vue'
import PrivacyPage from './components/PrivacyPage.vue'
import BlogPage from './components/BlogPage.vue'


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
    },
    {
        name :'AllBranch',
        component:AllBranch,
        path :'/branch',
    },
    {
        name :'ContactUs',
        component:ContactUs,
        path :'/contactus',
    }
    ,
    {
        name :'PrivacyPage',
        component:PrivacyPage,
        path :'/privacy',
    },
    {
        name :'BlogPage',
        component:BlogPage,
        path :'/blog',
    }
]


const router = createRouter ({
    history:createWebHistory(),
    routes,
})

export default router;