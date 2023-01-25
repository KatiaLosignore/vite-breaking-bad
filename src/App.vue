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
      typeFilter: []
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
      axios.get(`${store.apiUri}&eq[type1]=${type}`)
        .then((res) => {
          store.characters = res.data.docs;
        })
    },
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
  <search-select @type-change="onTypeChange"></search-select>
  <app-main></app-main>

</template>


<style lang="scss">
@use './assets/scss/style.scss';
</style>>