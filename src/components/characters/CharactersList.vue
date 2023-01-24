<script>
import { store } from '../../data/store';
import CharacterCard from './CharacterCard.vue';
export default {
    name: 'CharactersList',
    components: {CharacterCard},
    data() {
        return { store }
    }
};
</script>


<template>
  <section id="characters" class="container my-5">
    <div class="row justify-content-center align-items-center g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
        <character-card 
          v-for="character in store.characters" 
          :key="character._id" 
          class="mb-5"
          :image="character.imageUrl"
          :number="character.number"
          :name="character.name"
          :type="character.type1" >
        </character-card>

    </div>
  </section>
  
</template>


<style lang="scss">


</style>>