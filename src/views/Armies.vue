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
                        <armies-list-item :army="army" :handleSelect="setCurrentUnit" />
                    </li>
                </ul>
            </div>
            <div class="col-9">
                <datasheet v-if="currentUnit" :unit="currentUnit" />
            </div>
        </div>
    </div>
</template>

<script>
import Firebase from '@/util/firebase';
import RulesNavigation from '@/components/RulesNavigation.vue';
import ArmiesListItem from '@/components/ArmiesListItem.vue';
import Datasheet from '@/components/Datasheet.vue';

export default {
    components: {
        RulesNavigation,
        ArmiesListItem,
        Datasheet
    },
    data() {
        return{
            open: false,
            fb: null,
            currentUnit: null
        }
    },
    // watch: {
    //     '$route': 'initialize'
    // },
    methods: {
        initialize() {
            this.fb = new Firebase();
            this.fb.setDocument('datasheets', 'armies');
            this.fb.setDocumentData();
        },
        toggle() {
            this.open = !this.open;
        },
        setCurrentUnit(unit) {
            this.currentUnit = unit;
        },
        setData() {
            this.fb.docData.armies[0].units.push({
                    "unitName": "Lychguard",
                    "battlefieldRole": "",
                    "powerRating": 8,
                    "profiles": [
                        {
                            "name": "Lychguard",
                            "move": "5\"",
                            "weaponSkill": "3+",
                            "ballisticSkill": "3+",
                            "strength": 5,
                            "toughness": 5,
                            "wounds": 2,
                            "attacks": 2,
                            "leadership": 10,
                            "save": "3+"
                        }
                    ],
                    "unitComposition": "This unit contains 5 Lychguard. It can include up to 5 additional Lychguard (Power Rating +8). Each model is armed with a warscyhe.",
                    "wargearOptions": "The entire unit may replace their warscythes with hyperphase swords and dispersion shields.",
                    "abilities": [
                        {
                            "ability": "Reanimation Protocols",
                            "description": ""
                        },
                        {
                            "ability": "Dispersion Shield",
                            "description": "A model equipped with a dispersion shield has a 4+ invulnerable save."
                        }
                    ],
                    "weapons": [
                        {
                            "weapon": "",
                            "range": "12\"",
                            "type": "Pistol 1",
                            "strength": 6,
                            "armourPentration": 0,
                            "damage": 1,
                            "abilities": ""
                        },
                        {
                            "weapon": "",
                            "range": "12\"",
                            "type": "Heavy D3",
                            "strength": 4,
                            "armourPentration": -3,
                            "damage": 1,
                            "abilities": "Each time you make a wound roll of 6+ for this weapon, the target suffers a mortal wound in addition to any other damage."
                        }
                    ],
                    "factionKeywords": [
                        "Necrons",
                        "Canoptek",
                        "<Dynasty>"
                    ],
                    "keyboard": [
                        "Beasts",
                        "Canoptek Wraiths"
                    ]
                });
            return this.fb.docRef.update({
                armies: this.fb.docData.armies
            });
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
