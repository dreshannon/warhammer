<template>
    <div id="killTeam">
        <header class="site-header">
            <div>
                <nav class="main-nav">
                    <ul class="main-sections">
                        <li class="">
                            <router-link class="dropdown-item" to="/basics">Base Game</router-link>
                        </li>
                        <li class="dropdown">
                            <router-link class="dropdown-item" to="/killteam">Kill Team</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <h1>Kill Teams Rules</h1>
    </div>
</template>

<script>
export default {
    name: 'killteam'
}
</script>

<style scoped>
    #killTeam {
        background: linear-gradient(to right, #BC3A01, #F27301);
    }
</style>
