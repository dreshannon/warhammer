<template>
    <div id="killTeam">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Kill Teams Rules</h1>
        <embed src="https://cdn.shopify.com/s/files/1/2175/1203/files/VERO-Strozzapretti_Brown_Butter_Butternut_Squash_Recipe_Card.pdf?9947705055714520886" type="application/pdf" height="100%" width="100%">
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
