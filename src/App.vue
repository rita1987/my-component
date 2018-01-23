<template>
    <div id="app" class="fillcontain">
        <header class="header">
            <div class="header-wrapper container">
                <h1 class="header-logo">logo</h1>
                <el-menu class="top-menu" mode="horizontal">
                    <el-menu-item index="1">menu1</el-menu-item>
                    <el-menu-item index="2">menu2</el-menu-item>
                    <el-menu-item index="3">menu3</el-menu-item>
                </el-menu>
            </div>

        </header>

        <div class="main-content">
            <el-scrollbar wrapClass="my-scroll-wrap">
                <div class="page-wrapper">
                    <el-scrollbar class="page-sidebar">
                        <el-menu>
                            <el-menu-item index="1">菜单一</el-menu-item>
                            <el-menu-item index="2">菜单二</el-menu-item>
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

    }
</script>

<style lang="less">
    @import './style/common';
</style>
