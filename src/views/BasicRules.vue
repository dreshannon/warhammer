<template>
    <div id="basicRules">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Basic Game Rules</h1>
        <embed src="https://cdn.shopify.com/s/files/1/2175/1203/files/VERO-Strozzapretti_Brown_Butter_Butternut_Squash_Recipe_Card.pdf?9947705055714520886" type="application/pdf" height="100%" width="100%">
    </div>
</template>

<script>
import RulesNavigation from '@/components/RulesNavigation.vue';

export default {
    name: 'basics',
    components: {
        RulesNavigation
    },
    props: ['fb']
}
</script>

<style scoped>
 #basicRules {
    background-color: #212629;
 }
</style>

