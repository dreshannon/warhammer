<template>
    <div id="armies">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Compendium - Armies <button type="button" class="btn btn-dark" id="editBtn" @click="toggleEditing">{{ editBtnText }}</button></h1>
        <div class="row">
            <div class="col-3">
                <button class="btn btn-block btn-dark">New Army</button>
                <ul class="root" v-if="fb.docData">
                    <li v-for="(army, index) in fb.docData.armies" :key="index" :id="army.army">
                        <armies-list-item :army="army" :handleSelect="setCurrentUnit" :save="save" :setCurrentUnit="setCurrentUnit" :edit="toggleEditing" />
                    </li>
                </ul>
            </div>
            <div class="col-9" v-if="!editing">
                <datasheet v-if="currentUnit" :unit="currentUnit" />
            </div>
            <div class="col-9" v-else>
                <data-edit v-if="currentUnit" :unit="currentUnit" :handleSave="save" />
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';
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
            open: false,
            currentUnit: null,
            editing: false
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
        toggle() {
            this.open = !this.open;
        },
        toggleEditing() {
            this.editing = !this.editing;
        },
        setCurrentUnit(unit) {
            this.currentUnit = unit;
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
#editBtn {
    position: absolute;
    right: 5px;
}

ul {
    list-style-type: none;
    text-align: left;
}

#armies {
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
}
</style>
