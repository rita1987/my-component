<template>
    <div id="app" class="fillcontain">
        <header class="header">
            <div class="header-wrapper container">
                <h1 class="header-logo">logo</h1>
                <el-menu class="top-menu" mode="horizontal">
                    <el-menu-item index="topMenu1">menu1</el-menu-item>
                    <el-menu-item index="topMenu2">menu2</el-menu-item>
                    <el-menu-item index="topMenu3">menu3</el-menu-item>
                </el-menu>
            </div>

        </header>

        <div class="main-content">
            <el-scrollbar wrapClass="my-scroll-wrap">
                <div class="page-wrapper">
                    <el-scrollbar class="page-sidebar">
                        <el-menu :default-active="defaultActive" :router="true">
                            <el-menu-item index="sideMenu1">菜单一</el-menu-item>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-document"></i>sub</template>
                                <el-menu-item index="subMenu1">子菜单</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="sideMenu2">菜单二</el-menu-item>
                        </el-menu>
                    </el-scrollbar>
                    <div class="page-content">
                        <router-view></router-view>
                    </div>
                </div>
            </el-scrollbar>

        </div>




    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', 'sideMenu1');
            }
        },
    }
</script>

<style lang="less">
    @import './style/common';
</style>
