<script>
import axios from 'axios';
import { store } from './data/store';
import AppMain from './components/AppMain.vue';
import SearchSelect from './components/SearchSelect.vue';
export default {
  components: { AppMain, SearchSelect },
  data() {
    return {
      store,
      filterValue: ''
    }
  },
  methods: {
    fetchCharacters(url) {
      axios.get(url)
        .then((res) => {
          store.characters = res.data.docs;
        });
    },
    onTypeChange(type) {
      const url = `${store.apiUri}&eq[type1]=${type}`;
        this.fetchCharacters(url);
    },
    resetSelect() {
      if(this.onTypeChange) {
        this.filterValue = this.fetchCharacters(store.apiUri);
      } 
            
    }
  },
  created() {
    this.fetchCharacters(store.apiUri)
  },

};
</script>


<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center mt-4">
      <h1 class="text-primary bg-light">Pokemon</h1>
      <div>
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />
        <font-awesome-icon icon="fa-solid fa-circle" />

      </div>

    </div>
  </header>
  <search-select @type-change="onTypeChange" @type-reset="resetSelect"></search-select>
  <app-main></app-main>

</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>>