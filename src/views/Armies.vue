<template>
    <div id="armies">
        <!-- <img src="https://warhammer40000.com/wp-content/themes/gw-hub-40k/library/images/warhammer40k-logo.png" alt=""> -->
        <h1 class="page-title">Compendium - Armies <button type="button" class="d-none d-lg-block btn btn-dark" id="editBtn" @click="toggleEditing">{{ editBtnText }}</button></h1>
        <div class="row">
            <div class="col-12 col-lg-3">
                <button type="button" class="btn btn-block btn-dark" data-toggle="modal" data-target="#newArmyModal">New Army</button>
                <ul class="root p-0" v-if="fb.docData">
                    <li v-for="(army, index) in fb.docData.armies" :key="index" :class="{ 'kill-team': army.isKillTeam }">
                        <armies-list-item :armyIndex="index" :army="army" :handleSelect="setCurrentUnit" :save="save" :edit="toggleEditing" :handleDelete="deleteArmy" />
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-9" v-if="!editing">
                <datasheet v-if="currentUnit" :unit="currentUnit" :armyIndex="currentArmyIndex" :handleDelete="deleteUnit" />
                <button type="button" class="d-block d-lg-none btn btn-dark btn-block" @click="toggleEditing" v-if="currentUnit">{{ editBtnText }}</button>
            </div>
            <div class="col-12 col-lg-9" v-if="editing">
                <data-edit v-if="currentUnit" :unit="currentUnit" :handleSave="save" :handleReturn="toggleEditing" />
            </div>
        </div>
        <!-- New Army Modal -->
        <confirmation-modal modalId="newArmyModal">
            <template v-slot:title>Create new army</template>
            <template>
                <div class="form-group">
                    <label for="">Name of Army</label>
                    <input type="text" class="form-control" v-model="newArmy.army">
                    <div class="row mt-3">
                        <div class="col-6">Is this a <span class="kill-team">Kill Team</span> Army?</div>
                        <div class="col-6 text-right">
                            <label for="kill-team-switch" class="switch">
                                <input type="checkbox" id="kill-team-switch" v-model="newArmy.isKillTeam">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:button>
                <button type="button" class="btn btn-primary" @click="addArmy">Create</button>
            </template>
        </confirmation-modal>
        <!-- <modal v-if="showNewArmyModal" :show="showNewArmyModal">
            <tempalte v-slot:header>TEST HEADER</tempalte>
            <tempalte>TEST</tempalte>
            <tempalte v-slot:footer>TEST FOOTER</tempalte>
        </modal> -->
    </div>
</template>

<script>
import 'popper.js';
import 'bootstrap';
import ArmiesListItem from '@/components/ArmiesListItem.vue';
import Datasheet from '@/components/Datasheet.vue';
import DataEdit from '@/components/DataEdit.vue';
import ConfirmationModal from '@/components/ConfirmationModal.vue';
// import Modal from '@/components/Modal.vue';

var $ = require("jquery");

export default {
    name: 'armies',
    components: {
        ArmiesListItem,
        Datasheet,
        DataEdit,
        ConfirmationModal,
        // Modal
    },
    props: ['fb'],
    data() {
        return{
            currentUnit: null,
            currentArmyIndex: null,
            editing: false,
            newArmy: {
                army: null,
                isKillTeam: false
            },
            showNewArmyModal: false
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
                army: this.newArmy.army,
                isKillTeam: this.newArmy.isKillTeam,
                units: []
            });
            this.save();
            this.newArmy = {
                army: null,
                isKillTeam: false
            };
            $('#newArmyModal').modal('toggle');
            // document.getElementById('newArmyModal').modal('toggle');
        },
        toggleEditing(setting) {
            if (setting == true || setting == false) {
                this.editing = setting;
            } else {
                this.editing = !this.editing;
            }
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
        deleteArmy(armyIndex, modalIdReference) {
            this.fb.docData.armies = this.fb.docData.armies.filter((army, index) => {
                return index != armyIndex;
            });
            this.save();
            // $(modalIdReference).modal('toggle');
            document.getElementById(modalIdReference).modal('toggle');
        },
        save() {
            this.fb.docRef.update({
                armies: this.fb.docData.armies
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

.root {
    #Necrons {
        background-image: url(../assets/svgs/Necron_emblem.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
}

.modal-content {
    background-color: #212629;
}
</style>
