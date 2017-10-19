/**
 * Created by zhengcaiyun on 2017/10/18.
 */
import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index.js';
import router from './router/index.js';
import App from './App';

Vue.use(ElementUI);
/* eslint-disable no-new */
// 获取用户信息成功则挂载 vue 实例
new Vue({
    router,
    store,
    el: '#app',
    template: '<App />',
    components: { App },
});
/* eslint-enable no-new */