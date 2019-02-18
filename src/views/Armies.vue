<template>
    <div id="armies">
        <header class="site-header">
            <div>
                <rules-navigation />
            </div>
        </header>
        <h1>Compendium - Armies</h1>
        <div class="row">
            <div class="col-3">
                <ul class="root" v-if="fb.docData">
                    <li v-for="(army, index) in fb.docData.armies" :key="index">
                        <armies-list-item :army="army" />
                    </li>
                </ul>
            </div>
            <div class="col-9">
                TEST
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';
import RulesNavigation from '@/components/RulesNavigation.vue';
import ArmiesListItem from '@/components/ArmiesListItem.vue';

export default {
    components: {
        RulesNavigation,
        ArmiesListItem
    },
    data() {
        return{
            open: false,
            fb: new Firebase()
        }
    },
    watch: {
        '$route': 'initialize'
    },
    methods: {
        initialize() {
            this.fb.setDocument('datasheets', 'armies');
            this.fb.setDocumentData();
        },
        toggle() {
            this.open = !this.open;
        }
    },
    created() {
        this.initialize();
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    text-align: left;
}

/* Style the caret/arrow */
.caret {
  cursor: pointer;
  user-select: none; /* Prevent text selection */
}

/* Create the caret/arrow with a unicode, and style it */
.caret::before {
  content: "\25B6";
  color: black;
  display: inline-block;
  margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
  transform: rotate(90deg);
}
</style>
