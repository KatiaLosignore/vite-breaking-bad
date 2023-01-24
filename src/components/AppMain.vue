<script>
import CharactersList from './characters/CharactersList.vue';
export default {
    name: 'AppMain',
    components: { CharactersList },   
};
</script>


<template>
  <main class="mt-5">
    <section id="section-image">
      <characters-list></characters-list>

    </section>

  </main>
  
</template>


<style lang="scss">

#section-image {
  background-color: red;
  border: 4px solid blue;
  padding: 30px;
  margin: 0 auto;
  width: 1000px;
  height: 1350px;
}

</style>