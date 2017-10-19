<template>
    <div id="login">
        <div>
            <label>用户名：</label><input v-model="username" type="text" />
            <label>密码</label><input v-model="passwd" type="password"/>
            <el-button @click="submit">提交</el-button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { Button } from 'element-ui'
    export default {
        name: 'login',
        data(){
            return {
                username: 'root',
                passwd: 'root'
            }
        },
        computed: {
        },
        mounted() {
        },
        components: {
            'el-button': Button,
        },
        methods: {
            submit() {
                const params = {
                    username: this.username,
                    passwd: this.passwd
                };
                console.error('params', params);
                this.$store.dispatch('User/subUserInfo', params);
            }
        },
    };
</script>

<style lang="less">
    body{
        background: #ebeff3;
        min-width: 1500px;
    }
</style>

<style lang="less" scoped>
    #apps {
    }
</style>
