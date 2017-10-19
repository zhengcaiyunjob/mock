/**
 * Created by zhengcaiyun on 2017/10/18.
 */
/* eslint-disable no-param-reassign */
import axios from 'axios';

import * as types from '../mutationTypes';

// initial state
const initState = {
    user: {
        name: 'root',
        passwd: 'root'
    }
};

// actions
const actions = {
    subUserInfo({ commit }) {
        return axios.post('/string',{
            name: 'root',
            passwd: 'root'
        }).then((response) => {
            console.error("response", response);
                if (response.data.code === 0) {
                    const data = response.data.data;
                    commit(types.GET_USER__INFO, data);
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