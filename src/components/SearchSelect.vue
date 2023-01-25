<script>
export default {
    name: 'SearchSelect',
    data() {
        return {
            typeFilter: [
                "Rock",
                "Poison",
                "Electric",
                "Fighting",
                "Dark",
                "Normal",
                "Fairy",
                "Fire",
                "Steel",
                "Dragon",
                "Ground",
                "Water",
                "Flying",
                "Bug",
                "Grass",
                "Ice",
                "Psychic",
                "Ghost"
            ],
            filterValue: ''

        }
    },
    emits: ['type-change', 'type-reset'],

};
</script>

<template>
    <div class="container d-flex align-items-center">
        <select class="form-select mt-4 mb-5" aria-label="Default select example" v-model="filterValue" @change="$emit('type-change', filterValue)">
            <option selected value="">-</option>
            <option v-for="pokemonType in this.typeFilter" :value="pokemonType">{{ pokemonType }}</option>
        </select>
        <button type="button" class="btn btn-info mb-4 ms-2" @click="$emit('type-reset')"><strong>Annulla</strong></button>
    </div>

</template>

<style>
select {
    width: 100px;
}
</style>