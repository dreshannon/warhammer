<template>
    <div>
        <div class="list-group">
            <button
                type="button"
                class="list-group-item list-group-item-action"
                @click="toggle">
                <span v-show="!open"><i class="fas fa-caret-right"></i></span>
                <span v-show="open"><i class="fas fa-caret-down"></i></span>
                {{ army.army }}
                <div class="list-group inner-list-group">
                    <button
                        v-show="open"
                        type="button"
                        class="list-group-item list-group-item-action"
                        v-for="(unit, index) in army.units"
                        :key="index"
                        @click="handleSelect(unit)">
                        {{ unit.unitName }}
                    </button>
                    <button v-show="open" type="button" class="btn btn-block btn-dark" @click="addUnit">New Unit</button>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['army', 'handleSelect', 'save', 'setCurrentItem', 'edit'],
    data() {
        return {
            open: false
        }
    },
    computed: {
        collapseId() {
            return this.army.army.concat('#');
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        addUnit() {
            this.army.units.push({
                unitName: 'newUnit',
                battlefieldRole: '',
                powerRating: null,
                profiles: [{
                    name: '',
                    move: '',
                    weaponSkill: '',
                    ballisticSkill: '',
                    strength: null,
                    toughness: null,
                    wounds: null,
                    attacks: null,
                    leadership: null,
                    save: ''
                }],
                unitComposition: '',
                weapons: [{
                    weapon: '',
                    range: '',
                    type: '',
                    strength: null,
                    armourPenetration: null,
                    damage: null,
                    abilities: ''
                }],
                wargearOptions: '',
                abilities: [{
                    ability: '',
                    description: ''
                }],
                factionKeywords: [''],
                keywords: ['']
            });

            this.save();
            this.setCurrentUnit(this.army.units[this.army.units.length-1]);
            this.edit();
        }
    }
}
</script>

<style lang="scss" scoped>
.list-group-item {
    background-color: #212629;
    border: none;
    color: white;
}

.inner-list-group {
    button {
        border: none;
    }
}
</style>
