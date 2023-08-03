<template>
    <div class="main-container d-flex">
        <div class="sidebar" id="side_nav">
            <div class="header-box px-4 pt-3 pb-4">
                <div class="row d-flex justify-content-center">
                    <img class="w-50" src="../assets/img/logo.png" alt="">
                </div>
                <div class="row d-flex justify-content-center">
                    <h1 class="fs-6 text-center">
                        <span class="text-white ">Baguio City High School</span>
                    </h1>
                </div>
                
            </div>

            <div class="container menu">
                <sidebar-link></sidebar-link>
                
            </div>
            
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import SidebarLink from './SidebarLink.vue';

export default {
    components: {
        SidebarLink
    }
}

</script>

<style>

body {
    background: #eee;
}

#side_nav {
    background: #800000;
    min-width: 230px;
    max-width: 230px;
    color: white;
    height: 100vh;
    overflow-y: scroll; 
}

.content {
    min-height: 100vh;
    width: 100%;
}

.menu {
    color: #800000;
    background: #D9D9D9;
}





</style>