import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Article from './components/Article'
import Articles from './components/Articles'
import PageNotFound from "./components/PageNotFound";


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Articles
        },
        {
            path: '/home',
            name: 'home2',
            component: Articles
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article,
        },
        {
            path: '/*',
            name: '404',
            component: PageNotFound
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});