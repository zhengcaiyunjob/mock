<template>
    <div id="login">
        <fieldset name="test1">
            <legend>test1</legend>
            <label>用户名：</label><input v-model="username" type="text" />
            <label>密码</label><input v-model="passwd" type="password"/>
            <el-button @click="submit">提交</el-button>
        </fieldset>
        <fieldset>
            <legend>test2</legend>
            <label>用户名：</label><input v-model="username2" type="text" />
            <label>密码</label><input v-model="passwd2" type="password"/>
            <el-button @click="submit2">提交</el-button>
        </fieldset>
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
                passwd: 'root',
                username2: 'caicai',
                passwd2: '12345'
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
                    userName: this.username,
                    passWord: this.passwd
                };
                console.error('params', params);
                this.$store.dispatch('User/subUserInfo', params);
            },
            submit2() {
                const params = {
                    userName: this.username2,
                    passWord: this.passwd2
                };
                this.$store.dispatch('User/subUserInfo2', params);
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
