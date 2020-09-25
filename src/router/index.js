import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/login')
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                keepAlive:true,
                auth: true
            },
            component: () =>import ('@/views/register')
        },
        {
            path: '/homePage',
            name: 'homePage',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/homePage')
        },
        {
            path: '/orderDetails',
            name: 'orderDetails',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/orderDetails')
        },
        {
            path: '/orderDetail',
            name: 'orderDetail',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/orderDetails/details')
        },
        {
            path: '/agreement',
            name: 'agreement',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/agreement')
        },
        {
            path: '/member',
            name: 'member',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/member')
        },
        {
            path: '/complaint',
            name: 'complaint',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/complaint')
        },
        {
            path: '/cooperation',
            name: 'cooperation',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/cooperation')
        },
        {
            path: '/yearsData',
            name: 'yearsData',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/orderDetails/yearsData')
        },
        {
            path: '/supermarket',
            name: 'supermarket',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/supermarket')
        },
        {
            path: '/supermarketDetail',
            name: 'supermarketDetail',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/supermarket/supermarketDetail')
        },
        {
            path: '/baseInfor',
            name: 'baseInfor',
            meta: {
                auth: true
            },
            component: () =>import ('@/views/baseInfor')
        },
        {
            path: '/',  // 默认进入路由
            redirect: '/homePage'   //重定向
        },
        {
            path: "*",
            component: () =>import ('@/views/errorPage'),
        }
    ],
});
export default router;