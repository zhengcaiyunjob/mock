/**
 * Created by zhengcaiyun on 2017/10/18.
 */
import vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login/login.vue';

const Bar = { template: '<div>bar</div>' }

vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            name: 'foo',
            component: Login,
        },
        {
            path: '/bar',
            name: 'Bar',
            component: Bar,
        },
    ]
});