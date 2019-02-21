<template>
    <div id="armies">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <div class="container">
            <h1 class="page-title">Compendium - Armies <button type="button" class="d-none d-lg-block btn btn-dark" id="editBtn" @click="toggleEditing">{{ editBtnText }}</button></h1>
            <div class="row">
                <div class="col-12 col-lg-3">
                    <button type="button" class="btn btn-block btn-dark" data-toggle="modal" data-target="#newArmyModal">New Army</button>
                    <ul class="root p-0" v-if="fb.docData">
                        <li v-for="(army, index) in fb.docData.armies" :key="index" :id="army.army">
                            <armies-list-item :armyIndex="index" :army="army" :handleSelect="setCurrentUnit" :save="save" :edit="toggleEditing" />
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-9" v-if="!editing">
                    <datasheet v-if="currentUnit && !editing" :unit="currentUnit" :armyIndex="currentArmyIndex" :handleDelete="deleteUnit" />
                    <button type="button" class="d-block d-lg-none btn btn-dark btn-block" @click="toggleEditing" v-if="currentUnit">{{ editBtnText }}</button>
                </div>
                <div class="col-12 col-lg-9" v-if="editing">
                    <data-edit v-if="currentUnit && editing" :unit="currentUnit" :handleSave="save" :handleReturn="toggleEditing" />
                </div>
            </div>
        </div>
        <!-- New Army Modal -->
        <div class="modal fade" id="newArmyModal" tabindex="-1" role="dialog" aria-labelledby="newArmyModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newArmyModalLabel">Create New Army</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Name of Army</label>
                        <input type="text" class="form-control" v-model="newArmy">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="addArmy">Create</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RulesNavigation from '@/components/RulesNavigation.vue';
import ArmiesListItem from '@/components/ArmiesListItem.vue';
import Datasheet from '@/components/Datasheet.vue';
import DataEdit from '@/components/DataEdit.vue';

export default {
    name: 'armies',
    components: {
        RulesNavigation,
        ArmiesListItem,
        Datasheet,
        DataEdit
    },
    props: ['fb'],
    data() {
        return{
            currentUnit: null,
            currentArmyIndex: null,
            editing: false,
            newArmy: null
        }
    },
    computed: {
        editBtnText() {
            return this.editing ? 'Return to datasheets' : 'Edit datasheets';
        }
    },
    // watch: {
    //     '$route': 'initialize'
    // },
    methods: {
        initialize() {
            this.fb.setDocument('datasheets', 'armies');
            this.fb.setDocumentData();
        },
        addArmy() {
            this.fb.docData.armies.push({
                army: this.newArmy,
                units: []
            });
        },
        toggleEditing() {
            this.editing = !this.editing;
        },
        setCurrentUnit(armyIndex, unit) {
            this.currentUnit = unit;
            this.currentArmyIndex = armyIndex;
        },
        deleteUnit(armyIndex, unitName) {
            this.fb.docData.armies[armyIndex].units = this.fb.docData.armies[armyIndex].units.filter(unit => unit.unitName != unitName);
            this.save();
            this.currentUnit = null;
            this.currentArmyIndex = null;
            return;
        },
        save() {
            this.fb.docRef.update({
                armies: this.fb.docData.armies
            })
            .then(() => {
                this.toggleEditing();
            })
        }
    },
    created() {
        this.initialize();
    }
}
</script>

<style lang="scss" scoped>
.page-title {
    display: flex;
    flex-flow: row wrap;
}

#editBtn {
    position: absolute;
    right: 5px;
}

ul {
    list-style-type: none;
    text-align: left;
}

.datasheet {
    background-image: url(../assets/svgs/Necron_emblem.svg);
    background-repeat: no-repeat;
    background-position: center;
}

.root {
    #Necrons {
        background-image: url(../assets/svgs/Necron_emblem.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
}

@media screen and (min-width: 992px) {
    .container {
        padding: unset;
        margin: unset;
        max-width: unset;
    }
}

.modal-content {
    background-color: #212629;
}
</style>
