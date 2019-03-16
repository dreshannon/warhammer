<template>
    <div id="app">
        <sidebar-menu :menu="menu" :collapsed="!isExpanded" @collapse="onCollapse" @itemClick="onItemClick" />
        <div class="container" :class="{ 'isExpanded' : isExpanded }">
            <router-view :fb="fb" />
        </div>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';
import firebase from 'firebase/app';

import 'popper.js';
import 'bootstrap';

export default {
    data() {
        return {
            fb: null,
            menu: [
                {
                    header: true,
                    title: 'Warhammer Companion'
                },
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
                },
                {
                    title: 'Logout',
                    icon: 'fas fa-sign-out-alt'
                }
            ],
            isExpanded: false
        }
    },
    created() {
        this.fb = new Firebase();
    },
    methods: {
        onCollapse() {
            this.isExpanded = !this.isExpanded;
        },
        onItemClick(event, item) {
            console.log(item);
            if (item.title == 'Logout') {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('/login');
                });
            }
        }
    }
}
</script>


<style lang="scss">
@import './assets/styles/style.scss';
@import './assets/styles/main-nav.css';

body {
    background-color: #212629;
    overflow-x: hidden;
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
    width: calc(100% - 350px) !important;
}
</style>
