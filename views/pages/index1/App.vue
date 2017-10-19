<template>
    <div id="apps">
        <ul>
            <li>
                <router-link to="foo">login</router-link>
                <router-link to="bar">logout</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'apps',
        computed: {
        },
        mounted() {
        },
        components: {

        },
        methods: {
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
