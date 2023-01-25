<script>
export default {
    name: 'SearchSelect',
    data() {
        return {
            typeFilter : [
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
    emits: ['type-change']
};
</script>

<template>
    <div class="container">
        <select class="form-select mt-4 mb-5" aria-label="Default select example" v-model="filterValue" @change="$emit('type-change', filterValue)">
        <option selected value="">-</option>
        <option v-for="pokemonType in this.typeFilter" :value="pokemonType">{{ pokemonType }} </option>
        </select>
    </div>
</template>

<style>

</style>