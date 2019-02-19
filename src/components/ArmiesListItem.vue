<template>
    <div>
        <div
            class="bold"
            @click="toggle">
            <span class=""><i class="fas fa-caret-right"></i></span>
            {{ army.army }}
        </div>
        <ul v-show="open">
            <li
                class="item"
                v-for="(unit, index) in army.units" :key="index"
                @click="handleSelect(unit)">
                {{ unit.unitName }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['army', 'handleSelect'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        }
    }
}
</script>
