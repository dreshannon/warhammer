<template>
    <div class="dataedit">
        <form @submit.prevent="handleSave">
            <div class="row">
                <div class="col"><input type="text" class="form-control" v-model="unit.unitName"></div>
                <div class="col"><input type="number" class="form-control" v-model="unit.powerRating"></div>
            </div>
            <div class="form-group">
                <label for="unitNameInput">Battlefield Role</label>
                <input type="text" class="form-control" id="unitNameInput" v-model="unit.battlefieldRole">
            </div>
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
                        <th><button class="btn" type="button" @click="addProfile">Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(profile, index) in unit.profiles" :key="index">
                        <td><input type="text" class="form-control" v-model="profile.name"></td>
                        <td><input type="text" class="form-control" v-model="profile.move"></td>
                        <td><input type="text" class="form-control" v-model="profile.weaponSkill"></td>
                        <td><input type="text" class="form-control" v-model="profile.ballisticSkill"></td>
                        <td><input type="number" class="form-control" v-model="profile.strength"></td>
                        <td><input type="number" class="form-control" v-model="profile.toughness"></td>
                        <td><input type="number" class="form-control" v-model="profile.wounds"></td>
                        <td><input type="number" class="form-control" v-model="profile.attacks"></td>
                        <td><input type="number" class="form-control" v-model="profile.leadership"></td>
                        <td><input type="text" class="form-control" v-model="profile.save"></td>
                        <td><i class="fas fa-times-circle" @click="removeProfile(profile.name)"></i></td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <label for="unitCompositionInput">Unit composition</label>
                <input type="text" class="form-control" id="unitCompositionInput" v-model="unit.unitComposition">
            </div>
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
                        <th><button class="btn" type="button" @click="addWeapon">Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(weapon, index) in unit.weapons" :key="index">
                        <td><input type="text" class="form-control" v-model="weapon.weapon"></td>
                        <td><input type="text" class="form-control" v-model="weapon.range"></td>
                        <td><input type="text" class="form-control" v-model="weapon.type"></td>
                        <td><input type="text" class="form-control" v-model="weapon.strength"></td>
                        <td><input type="number" class="form-control" v-model="weapon.armourPenetration"></td>
                        <td><input type="number" class="form-control" v-model="weapon.damage"></td>
                        <td><input type="text" class="form-control" v-model="weapon.abilities"></td>
                        <td><i class="fas fa-times-circle" @click="removeWeapon(weapon.weapon)"></i></td>
                    </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-3">
                    Wargear Options
                </div>
                <div class="col-9">
                    <input type="text" class="form-control" v-model="unit.wargearOptions">
                </div>
            </div>
            <div class="row">
                <div class="col-3">Abilites <button class="btn" type="button" @click="addAbility">Add</button></div>
                <div class="col-9">
                    <div class="row" v-for="(ability, index) in unit.abilities" :key="index">
                        <div class="col-3">
                            <input type="text" class="form-control" v-model="ability.ability">
                        </div>
                        <div class="col-8">
                            <input type="text" class="form-control" v-model="ability.description">
                        </div>
                        <div class="col-1">
                            <i class="fas fa-times-circle" @click="removeAbility(ability.ability)"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">Faction Keywords</div>
                <div class="col-9">
                    <p><span v-for="(keyword, index) in unit.factionKeywords" :key="index">{{ keyword }} </span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">Keywords</div>
                <div class="col-9">
                    <p><span v-for="(keyword, index) in unit.keywords" :key="index">{{ keyword }} </span></p>
                    <div class="row" v-for="(keyword, index) in unit.keywords" :key="index"></div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['unit', 'handleSave'],
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
        }
    }
}
</script>
