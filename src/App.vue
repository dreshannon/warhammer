<template>
    <div id="app">
        <header class="site-header">
            <div>
                <nav class="main-nav">
                    <ul class="main-sections">
                        <li class="">
                            <a href="#">My Armies</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" id="rulesDropdown" role="button" data-toggle="dropdown">Rules</a>
                        </li>
                        <li>
                            <a href="#">Lists</a>
                        </li>
                        <li>
                            <a href="#">Game Gen</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <router-view/>
    </div>
</template>


<style>
@import './assets/styles/main-nav.css';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #212629;
}
</style>
