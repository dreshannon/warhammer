<template>
    <div id="app">
        <sidebar-menu :menu="menu" @collapse="onCollapse" />
        <div class="container" :class="{ 'isExpanded' : isExpanded }">
            <router-view :fb="fb" />
        </div>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';

export default {
    data() {
        return {
            fb: null,
            menu: [
                {
                    href: '/',
                    title: 'Home',
                    icon: 'fas fa-home'
                },
                {
                    title: 'Rules',
                    icon: 'fas fa-pencil-ruler',
                    child: [
                        {
                            href: '/basics',
                            title: 'Basics'
                        },
                        {
                            href: '/killteam',
                            title: 'Kill Team'
                        },
                        {
                            href: '/compendium',
                            title: 'Compendium'
                        }
                    ]
                }
            ],
            isExpanded: true
        }
    },
    created() {
        this.fb = new Firebase();
    },
    methods: {
        onCollapse() {
            this.isExpanded = !this.isExpanded;
        },
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

@media screen and (min-width: 992px) {
    .container {
        padding: 0 2rem;
        margin: auto;
        max-width: unset;
    }
}

.v-sidebar-menu {
    z-index: 1;
}

.v-sidebar-menu + div {
    margin-left: 50px;
    width: calc(100% - 50px);
    transition: 0.5s;
}

.isExpanded {
    margin-left: 350px !important;
    width: calc(100% - 350px);
}
</style>
