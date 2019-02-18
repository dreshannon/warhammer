<template>
    <div id="basicRules">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Basic Game Rules</h1>
        <embed src="../assets/8th_Ed_Core_Rules.pdf" type="application/pdf" height="100%" width="100%">
    </div>
</template>

<script>
import RulesNavigation from '@/components/RulesNavigation.vue';

export default {
    name: 'basics',
    components: {
        RulesNavigation
    }
}
</script>

<style scoped>
 #basicRules {
    background-color: #212629;
 }
</style>

