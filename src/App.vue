<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobile">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse" id="navbarMobile">
                <ul class="navbar-nav mr-auto justify-content-end">
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="rulesDropdown" role="button" data-toggle="dropdown">Rules</a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/basics">Base Game</router-link>
                            <router-link class="dropdown-item" to="/home">Kill Team</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="">My Armies</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="listsDropdown" role="button" data-toggle="dropdown">Lists</a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/home">Dre's Lists</router-link>
                            <router-link class="dropdown-item" to="/home">Nik's Lists</router-link>
                            <router-link class="dropdown-item" to="/home">Keegan's Lists</router-link>
                            <router-link class="dropdown-item" to="/home">Katelynn's Lists</router-link>
                            <router-link class="dropdown-item" to="/home">Audrey's Lists</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="genDropdown" role="button" data-toggle="dropdown">Game Gen</a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/home">Battlefields</router-link>
                            <router-link class="dropdown-item" to="/home">Gametype</router-link>
                            <router-link class="dropdown-item" to="/home">Full game</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        
        <router-view/>
    </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* .nav-link {
    transform: skew(20deg);
    background-color: red;
} */
</style>
