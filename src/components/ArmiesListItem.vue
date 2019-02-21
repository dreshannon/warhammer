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
                    @click="handleSelect(armyIndex, unit)">
                    {{ unit.unitName }}
                </li>
                <li><button type="button" class="btn btn-block btn-dark" @click="addUnit">New Unit</button></li>
                <button v-show="open" type="button" class="btn btn-block btn-danger mt-2" data-toggle="modal" :data-target="modalIdReference">Delete Army</button>
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
                        @click="handleSelect(armyIndex, unit)">
                        {{ unit.unitName }}
                    </button>
                    <button v-show="open" type="button" class="btn btn-block btn-dark" @click="addUnit">New Unit</button>
                </div>
                <button v-show="open" type="button" class="btn btn-block btn-danger mt-2" data-toggle="modal" :data-target="modalIdReference">Delete Army</button>
            </button>
        </div>
        <!-- Delete Army Modal -->
        <confirmation-modal :modalId="modalId">
            <template v-slot:title>Are you sure?</template>
            <template>
                <p class="text-center">Are you sure you want to delete this army?</p>
                <h3 class="text-center">{{ army.army }} - {{armyIndex}}</h3>
            </template>
            <template v-slot:button><button type="button" class="btn btn-danger" @click="handleDelete(armyIndex, modalIdReference)">Delete</button></template>
        </confirmation-modal>
    </div>
</template>

<script>
import ConfirmationModal from './ConfirmationModal.vue';

export default {
    props: [ 'armyIndex','army', 'handleSelect', 'save', 'edit', 'handleDelete'],
    components: {
        ConfirmationModal
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        modalId() {
            return `deleteArmyModal-${this.armyIndex}`
        },
        modalIdReference() {
            return `#deleteArmyModal-${this.armyIndex}`
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
            this.handleSelect(this.armyIndex, this.army.units[this.army.units.length-1]);
            this.edit(true);
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
