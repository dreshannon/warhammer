<template>
    <div id="compendium">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Compendium</h1>
        <div class="card-deck">
            <router-link class="mini-card" to="/">
                <h3>Weapons</h3>
                <img src="../assets/svgs/Weapons_emblem.svg" alt="Weapons Image">
            </router-link>
            <router-link class="mini-card" to="/armies">
                <h3>Armies</h3>
                <img src="../assets/svgs/Armies_emblem.svg" alt="Armies Image">
            </router-link>
        </div>
    </div>
</template>

<script>
import RulesNavigation from '@/components/RulesNavigation.vue';

export default {
    name: 'compendium',
    components: {
        RulesNavigation
    }
}
</script>

<style lang="scss" scoped>
    .card-deck {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }

    .mini-card {
        width: 300px;
        height: 300px;
        padding: 1.5rem;
        border-radius: 16px;
        background: #17141d;
        box-shadow: -1rem 0 3rem #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .2s;
        margin: 0;
        scroll-behavior: smooth;
        color: white;
        text-decoration: none;
    }
</style>
