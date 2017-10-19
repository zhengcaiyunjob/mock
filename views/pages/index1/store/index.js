/**
 * Created by zhengcaiyun on 2017/10/18.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user.js';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    // actions,
    modules: {
        User
    },
});