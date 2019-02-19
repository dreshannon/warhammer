<template>
    <div class="datasheet">
        <h3>{{ unit.unitName }}</h3>
        <table>
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
        </table>
        <p></p>
        <table>
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
                    <td>{{ weapon.strenth }}</td>
                    <td>{{ weapon.armourPenetration }}</td>
                    <td>{{ weapon.damage }}</td>
                    <th>{{ weapon.abilities }}</th>
                </tr>
            </tbody>
        </table>
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
                <p><span v-for="(keyword, index) in unit.factionKeywords" :key="index">{{ keyword }} </span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-3">Keywords</div>
            <div class="col-9"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['unit']
}
</script>
