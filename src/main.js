/**
 * Created by zp on 2018/1/14.
 */
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import store from './store' //vuex状态管理，存储所有组件的状态
import ElementUI from 'element-ui' //element组件库 http://element-cn.eleme.io/#/en-US
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false; //设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
