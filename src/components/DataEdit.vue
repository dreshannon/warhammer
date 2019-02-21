<template>
    <div class="dataedit">
        <form @submit.prevent="save">
        <button type="button" class="btn btn-dark btn-block" @click="handleReturn(false)">Return to datasheet</button>
        <button type="submit" class="btn btn-primary btn-block">Save</button>
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
            <div class="row" v-for="(profile, index) in unit.profiles" :key="index">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="profile.name">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Move</label>
                        <input type="text" class="form-control" v-model="profile.move">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Weapon Skill</label>
                        <input type="text" class="form-control" v-model="profile.weaponSkill">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Ballistic Skill</label>
                        <input type="text" class="form-control" v-model="profile.ballisticSkill">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Strength</label>
                        <input type="text" class="form-control" v-model="profile.strength">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Toughness</label>
                        <input type="text" class="form-control" v-model="profile.toughness">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Wounds</label>
                        <input type="text" class="form-control" v-model="profile.wounds">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Attacks</label>
                        <input type="text" class="form-control" v-model="profile.attacks">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Leadership</label>
                        <input type="text" class="form-control" v-model="profile.leadership">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Save</label>
                        <input type="text" class="form-control" v-model="profile.save">
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-danger btn-block" @click="removeProfile(profile.name)">Delete Profile</button>
                </div>
            </div>
            <div class="form-group">
                <label for="unitCompositionInput">Unit composition</label>
                <input type="text" class="form-control" id="unitCompositionInput" v-model="unit.unitComposition">
            </div>
            <h3 class="titleWithAdd">Weapons <button class="btn btnAdd" type="button" @click="addWeapon"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row" v-for="(weapon, index) in unit.weapons" :key="index">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Weapon</label>
                        <input type="text" class="form-control" v-model="weapon.weapon">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="">Range</label>
                        <input type="text" class="form-control" v-model="weapon.range">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="">Type</label>
                        <input type="text" class="form-control" v-model="weapon.type">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Strength</label>
                        <input type="text" class="form-control" v-model="weapon.strength">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Armour Penetration</label>
                        <input type="number" class="form-control" v-model="weapon.armourPenetration">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="">Damage</label>
                        <input type="number" class="form-control" v-model="weapon.damage">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Abilites</label>
                        <input type="text" class="form-control" v-model="weapon.abilities">
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-danger btn-block" @click="removeWeapon(weapon.weapon)">Delete Weapon</button>
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
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Ability</label>
                        <input type="text" class="form-control" v-model="ability.ability">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" class="form-control" v-model="ability.description">
                    </div>
                </div>
                <div class="col-12"><button type="button" class="btn btn-danger btn-block" @click="removeAbility(weapon.weapon)">Delete Ability</button></div>
            </div>
            <h3 class="titleWithAdd">Faction Keywords <button class="btn btnAdd" type="button" @click="addFactionKeyword"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row mb-2" v-for="(keyword, index) in unit.factionKeywords" :key="index">
                <div class="col-7"><input type="text" class="form-control" v-model="keyword.keyword"></div>
                <div class="col-5"><button type="button" class="btn btn-danger btn-block" @click="removeFactionKeyword(keyword.keyword)">Delete Keyword</button></div>
            </div>
            <h3 class="titleWithAdd">Keywords <button class="btn btnAdd" type="button" @click="addKeyword"><i class="fas fa-plus-circle"></i></button></h3>
            <div class="row mb-2" v-for="(keyword, index) in unit.keywords" :key="index">
                <div class="col-7"><input type="text" class="form-control" v-model="keyword.keyword"></div>
                <div class="col-5"><button type="button" class="btn btn-danger btn-block" @click="removeKeyword(keyword.keyword)">Delete Keyword</button></div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Save</button>
            <button type="button" class="btn btn-dark btn-block" @click="handleReturn(false)">Return</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['unit', 'handleSave', 'handleReturn'],
    methods: {
        addProfile() {
            this.unit.profiles.push({
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
            });
            return;
        },
        removeProfile(profileName) {
            this.unit.profiles = this.unit.profiles.filter(profile => profile.name != profileName);
            return;
        },
        addWeapon() {
            this.unit.weapons.push({
                weapon: '',
                range: '',
                type: '',
                strength: null,
                armourPenetration: null,
                damage: null,
                abilities: ''
            });
            return;
        },
        removeWeapon(weaponName) {
            this.unit.weapons = this.unit.weapons.filter(weapon => weapon.weapon != weaponName);
            return;
        },
        addAbility() {
            this.unit.abilities.push({
                ability: '',
                description: ''
            });
            return;
        },
        removeAbility(abilityName) {
            this.unit.abilities = this.unit.abilities.filter(ability => ability.ability != abilityName);
            return;
        },
        addFactionKeyword() {
            this.unit.factionKeywords.push({
                keyword: ''
            });
            return;
        },
        removeFactionKeyword(keywordDelete) {
            this.unit.factionKeywords = this.unit.factionKeywords.filter(keyword => keyword.keyword != keywordDelete);
            return;
        },
        addKeyword() {
            this.unit.keywords.push({
                keyword: ''
            });
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
