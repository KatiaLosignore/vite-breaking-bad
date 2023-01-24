<script>
import axios from 'axios';
import { store } from './data/store';
import AppMain from './components/AppMain.vue';
export default {
    components: { AppMain},
    data(){
        return {
           store
        }
    },
    methods: {
      fetchCharacters(url){
        axios.get(url)
        .then((res) => {
          store.characters = res.data.docs;
        });
      }
    },
    created(){
      this.fetchCharacters(store.apiUri)
    }
};
</script>


<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center mt-4" >
      <h1>Pokemon</h1>
      <div>
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />

      </div>

    </div>
  </header>
  <app-main></app-main>
  
</template>


<style lang="scss">
@use './assets/scss/style.scss';

</style>>