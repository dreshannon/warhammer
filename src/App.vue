<template>
    <div id="app">
        <header class="site-header">
            <div>
                <navigation />
            </div>
        </header>
        <router-view/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
    components: {
        Navigation
    }
}
</script>


<style>
@import './assets/styles/main-nav.css';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    /* color: #2c3e50; */
    color: white;
    background-color: #212629;
}
</style>
