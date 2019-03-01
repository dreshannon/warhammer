<template>
    <div class="dataedit">
        <form @submit.prevent="save">
        <button type="button" class="btn btn-dark btn-block" @click="handleReturn(false)">Return to datasheet</button>
        <button type="submit" class="btn btn-success btn-block">Save</button>
            <div class="form-group">
                <label for="unitNameInput">Unit name</label>
                <input type="text" class="form-control" id="unitNameInput" v-model="unit.unitName">
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="">Battlefield role</label>
                        <input type="text" class="form-control" v-model="unit.battlefieldRole">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="">Power Rating</label>
                        <input type="number" class="form-control" v-model="unit.powerRating">
                    </div>
                </div>
            </div>
            <h3 class="titleWithAdd">Profiles <button class="btn btnAdd" type="button" @click="addProfile"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="table-responsive">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>M</th>
                            <th>WS</th>
                            <th>BS</th>
                            <th>S</th>
                            <th>T</th>
                            <th>W</th>
                            <th>A</th>
                            <th>Ld</th>
                            <th>Sv</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(profile, index) in unit.profiles" :key="index">
                            <td>{{ profile.name }}</td>
                            <td>{{ profile.move }}</td>
                            <td>{{ profile.weaponSkill }}</td>
                            <td>{{ profile.ballisticSkill }}</td>
                            <td>{{ profile.strength }}</td>
                            <td>{{ profile.toughness }}</td>
                            <td>{{ profile.wounds }}</td>
                            <td>{{ profile.attacks }}</td>
                            <td>{{ profile.leadership }}</td>
                            <td>{{ profile.save }}</td>
                            <td><button type="button" class="btn btn-danger" @click="removeProfile(profile.name)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="newProfile.name">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Move</label>
                        <input type="text" class="form-control" v-model="newProfile.move">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Weapon Skill</label>
                        <input type="text" class="form-control" v-model="newProfile.weaponSkill">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Ballistic Skill</label>
                        <input type="text" class="form-control" v-model="newProfile.ballisticSkill">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Strength</label>
                        <input type="text" class="form-control" v-model="newProfile.strength">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Toughness</label>
                        <input type="text" class="form-control" v-model="newProfile.toughness">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Wounds</label>
                        <input type="text" class="form-control" v-model="newProfile.wounds">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Attacks</label>
                        <input type="text" class="form-control" v-model="newProfile.attacks">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Leadership</label>
                        <input type="text" class="form-control" v-model="newProfile.leadership">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Save</label>
                        <input type="text" class="form-control" v-model="newProfile.save">
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary btn-block" @click="addProfile">Add Profile</button>
                </div>
            </div>
            <div class="form-group">
                <label for="unitCompositionInput">Unit composition</label>
                <input type="text" class="form-control" id="unitCompositionInput" v-model="unit.unitComposition">
            </div>
            <h3 class="titleWithAdd">Weapons <button class="btn btnAdd" type="button" @click="addWeapon"><i class="fas fa-plus-circle"></i></button></h3>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Weapon</th>
                        <th>Range</th>
                        <th>Type</th>
                        <th>S</th>
                        <th>AP</th>
                        <th>D</th>
                        <th>Abilites</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(weapon, index) in unit.weapons" :key="index">
                        <td>{{ weapon.weapon }}</td>
                        <td>{{ weapon.range }}</td>
                        <td>{{ weapon.type }}</td>
                        <td>{{ weapon.strength }}</td>
                        <td>{{ weapon.armourPenetration }}</td>
                        <td>{{ weapon.damage }}</td>
                        <td>{{ weapon.abilities }}</td>
                        <td><button type="button" class="btn btn-danger btn-block" @click="removeWeapon(weapon.weapon)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Weapon</label>
                        <input type="text" class="form-control" v-model="newWeapon.weapon">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="">Range</label>
                        <input type="text" class="form-control" v-model="newWeapon.range">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="">Type</label>
                        <input type="text" class="form-control" v-model="newWeapon.type">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Strength</label>
                        <input type="text" class="form-control" v-model="newWeapon.strength">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Armour Penetration</label>
                        <input type="number" class="form-control" v-model="newWeapon.armourPenetration">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Damage</label>
                        <input type="number" class="form-control" v-model="newWeapon.damage">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Abilites</label>
                        <input type="text" class="form-control" v-model="newWeapon.abilities">
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary btn-block" @click="addWeapon()">Add Weapon</button>
                </div>
            </div>
            <h3 class="title">Wargear Options</h3>
            <div class="row">
                <div class="col-12">
                    <input type="text" class="form-control" v-model="unit.wargearOptions">
                </div>
            </div>
            <h3 class="titleWithAdd">Abilities <button class="btn btnAdd" type="button" @click="addAbility"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row" v-for="(ability, index) in unit.abilities" :key="index">
                <div class="col-3">{{ ability.ability }}</div>
                <div class="col-8">{{ ability.description }}</div>
                <div class="col-1"><button type="button" class="btn btn-danger btn-block" @click="removeAbility(ability.ability)">Delete</button></div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-3">
                    <div class="form-group">
                        <label for="">Ability</label>
                        <input type="text" class="form-control" v-model="newAbility.ability">
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" class="form-control" v-model="newAbility.description">
                    </div>
                </div>
                <div class="col-12"><button type="button" class="btn btn-primary btn-block" @click="addAbility">Add Ability</button></div>
            </div>
            <h3 class="titleWithAdd">Faction Keywords <button class="btn btnAdd" type="button" @click="addFactionKeyword"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row my-2" v-for="(keyword, index) in unit.factionKeywords" :key="keyword.keyword">
                <div class="col-11">{{ keyword.keyword }}</div>
                <div class="col-1"><button type="button" class="btn btn-danger btn-block" @click="removeFactionKeyword(keyword.keyword)">Delete</button></div>
            </div>
            <div class="row my-2">
                <div class="col-12 col-lg-11"><input type="text" class="form-control" v-model="newFactionKeyword.keyword"></div>
                <div class="col-12 col-lg-1"><button type="button" class="btn btn-primary btn-block" @click="addFactionKeyword">Add</button></div>
            </div>
            <h3 class="titleWithAdd">Keywords <button class="btn btnAdd" type="button" @click="addKeyword"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row my-2" v-for="(keyword, index) in unit.keywords" :key="keyword.keyword">
                <div class="col-11">{{ keyword.keyword }}</div>
                <div class="col-1"><button type="button" class="btn btn-danger btn-block" @click="removeKeyword(keyword.keyword)">Delete</button></div>
            </div>
            <div class="row my-2">
                <div class="col-12 col-lg-11"><input type="text" class="form-control" v-model="newKeyword.keyword"></div>
                <div class="col-12 col-lg-1"><button type="button" class="btn btn-primary btn-block" @click="addKeyword">Add</button></div>
            </div>
            <button type="submit" class="btn btn-success btn-block">Save</button>
            <button type="button" class="btn btn-dark btn-block" @click="handleReturn(false)">Return</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['unit', 'handleSave', 'handleReturn'],
    data() {
        return {
            newProfile: {
                name: null,
                move: null,
                weaponSkill: null,
                ballisticSkill: null,
                strength: null,
                toughness: null,
                wounds: null,
                attacks: null,
                leadership: null,
                save: null
            },
            newWeapon: {
                weapon: null,
                range: null,
                type: null,
                strength: null,
                armourPenetration: null,
                damage: null,
                abilities: null
            },
            newAbility: {
                ability: null,
                description: null
            },
            newFactionKeyword: {
                keyword: null
            },
            newKeyword: {
                keyword: null
            }
        }
    },
    methods: {
        addProfile() {
            this.unit.profiles.push(this.newProfile);
            this.newProfile = {
                name: null,
                move: null,
                weaponSkill: null,
                ballisticSkill: null,
                strength: null,
                toughness: null,
                wounds: null,
                attacks: null,
                leadership: null,
                save: null
            }
            return;
        },
        removeProfile(profileName) {
            this.unit.profiles = this.unit.profiles.filter(profile => profile.name != profileName);
            return;
        },
        addWeapon() {
            this.unit.weapons.push(this.newWeapon);
            this.newWeapon = {
                weapon: null,
                range: null,
                type: null,
                strength: null,
                armourPenetration: null,
                damage: null,
                abilities: null
            };
            return;
        },
        removeWeapon(weaponName) {
            this.unit.weapons = this.unit.weapons.filter(weapon => weapon.weapon != weaponName);
            return;
        },
        addAbility() {
            this.unit.abilities.push(this.newAbility);
            this.newAbility = {
                ability: null,
                description: null
            };
            return;
        },
        removeAbility(abilityName) {
            this.unit.abilities = this.unit.abilities.filter(ability => ability.ability != abilityName);
            return;
        },
        addFactionKeyword() {
            this.unit.factionKeywords.push(this.newFactionKeyword);
            this.newFactionKeyword = {
                keyword: null
            };
            return;
        },
        removeFactionKeyword(keywordDelete) {
            this.unit.factionKeywords = this.unit.factionKeywords.filter(keyword => keyword.keyword != keywordDelete);
            return;
        },
        addKeyword() {
            this.unit.keywords.push(this.newKeyword);
            this.newKeyword = {
                keyword: null
            };
            return;
        },
        removeKeyword(keywordDelete) {
            this.unit.keywords = this.unit.keywords.filter(keyword => keyword.keyword != keywordDelete);
            return;
        },
        save() {
            this.handleSave();
            this.handleReturn();
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 1rem;
}

.titleWithAdd {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
}

.btnAdd {
    background-color: transparent;
    border: none;
    color: white;
}
</style>
