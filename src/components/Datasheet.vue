<template>
    <div class="datasheet">
        <h3>{{ unit.unitName }} - Power {{ unit.powerRating }}</h3>
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
                    </tr>
                </tbody>
            </table>
        </div>
        <p>{{ unit.unitComposition }}</p>
        <div class="table-responsive">
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
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="col-3">
                Wargear Options
            </div>
            <div class="col-9">
                {{ unit.wargearOptions }}
            </div>
        </div>
        <div class="row">
            <div class="col-3">Abilites</div>
            <div class="col-9">
                <p v-for="(ability, index) in unit.abilities" :key="index"><span class="font-weight-bold">{{ ability.ability }}</span><span> - {{ ability.description }}</span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-9"></div>
        </div>
        <div class="row">
            <div class="col-3">Faction Keywords</div>
            <div class="col-9">
                <p><span v-for="(keyword, index) in unit.factionKeywords" :key="index">{{ keyword.keyword }} </span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-3">Keywords</div>
            <div class="col-9">
                <p><span v-for="(keyword, index) in unit.keywords" :key="index">{{ keyword.keyword }} </span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['unit']
}
</script>
