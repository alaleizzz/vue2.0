import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../view/Home/index.vue'
// import User from '../view/User/index.vue'
import Main from '../view/Main.vue'
// import Mall from '../view/mall/index.vue'
// import PageOne from '../view/other/pageOne.vue'
// import PageTwo from '../view/other/pageTwo.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main,
        // redirect: '/home',
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: User
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: Mall
            // }, {
            //     path: '/page1',
            //     name: 'page1',
            //     component: PageOne
            // }, {
            //     path: '/page2',
            //     name: 'page2',
            //     component: PageTwo
            // }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../view/Login/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router