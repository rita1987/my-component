<template>
    <div class="manage_page fillcontain">
        <el-container>
            <el-header>
                <el-menu mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu>
                        <template slot="title">静态资源</template>
                        <el-menu-item index="2-1">local JS</el-menu-item>
                        <el-menu-item index="2-2">第三方插件</el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-header>
            <el-aside>

            </el-aside>
        </el-container>
    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style lang="less" scoped>
    @import '../style/mixin';
    .manage_page{

    }
</style>
