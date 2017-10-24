/**
 * Created by zhengcaiyun on 2017/10/18.
 */
/* eslint-disable no-param-reassign */
import axios from 'axios';

import * as types from '../mutationTypes';

// initial state
const initState = {
    user: {
        userName: 'root',
        passWord: 'root'
    }
};

// actions
const actions = {
    subUserInfo({ commit }, params) {
        return axios.post('/string', params).then((response) => {
                if (response.data.code === 0) {
                    const data = response.data.data;
                    commit(types.GET_USER__INFO, data);
                    return data;
                }
        });
    },
    subUserInfo2({ commit }, params) {
        return axios.post('/string2', params).then((response) => {
            if (response.data.code === 0) {
                const data = response.data.data;
                return data;
            }
        });
    },
};

// mutations
const mutations = {
    [types.GET_USER__INFO](state, payload) {
        console.log('payload');
    },
};

export default {
    namespaced: true,
    state: initState,
    actions,
    mutations,
};