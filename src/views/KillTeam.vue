<template>
    <div id="killTeam">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Kill Teams Rules</h1>
    </div>
</template>

<script>
import RulesNavigation from '@/components/RulesNavigation.vue';

export default {
    name: 'killteam',
    components: {
        RulesNavigation
    }
}
</script>

<style scoped>
    #killTeam {
        background: linear-gradient(to right, #BC3A01, #F27301);
    }
</style>
