import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');


const sideMenu1 = r => require.ensure([], () => r(require('@/page/test1')), 'sideMenu1');
const sideMenu2 = r => require.ensure([], () => r(require('@/page/test2')), 'sideMenu2');
const subMenu1 = r => require.ensure([], () => r(require('@/page/test3')), 'subMenu1');

const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/sideMenu1',
        component: sideMenu1,
        meta: ['sideMenu1', 'sideMenu1'],
    },{
        path: '/sideMenu2',
        component: sideMenu2,
        meta: ['sideMenu2', 'sideMenu2'],
        children: [{
            path: '/subMenu1',
            component: subMenu1,
            meat: ['subMenu1','subMenu1']
        }]
    },
    {
        path: '/manage',
        component: manage,
        name: ''
    }
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
