<template>
    <div>
        <div class="d-none d-lg-block">
            <div
                class="bold"
                @click="toggle">
                <span v-show="!open"><i class="fas fa-caret-right"></i></span>
                <span v-show="open"><i class="fas fa-caret-down"></i></span>
                {{ army.army }}
            </div>
            <ul v-show="open">
                <li
                    class="item"
                    v-for="(unit, index) in army.units" :key="index"
                    @click="handleSelect(unit)">
                    {{ unit.unitName }}
                </li>
                <li><button type="button" class="btn btn-block btn-dark" @click="addUnit">New Unit</button></li>
            </ul>
        </div>
        <div class="d-block d-lg-none list-group">
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
    props: ['army', 'handleSelect', 'save', 'setCurrentUnit', 'edit'],
    data() {
        return {
            open: false
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
ul {
    list-style-type: none;

    li {
        padding: .5rem 0;
    }
}

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
