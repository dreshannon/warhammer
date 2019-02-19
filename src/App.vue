<template>
    <div id="app">
        <header class="site-header">
            <div>
                <navigation />
            </div>
        </header>
        <router-view :fb="fb"/>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';
import Navigation from '@/components/Navigation.vue';

export default {
    components: {
        Navigation
    },
    data() {
        return {
            fb: null
        }
    },
    created() {
        this.fb = new Firebase();
    }
}
</script>


<style>
@import './assets/styles/main-nav.css';

body {
    background-color: #212629;
}

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
