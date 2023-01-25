<script>
import CharactersList from './characters/CharactersList.vue';
export default {
    name: 'AppMain',
    components: { CharactersList },   
};
</script>


<template>
  <div class="container">
    <main class="mt-3">
      <section id="section-image">
        <characters-list></characters-list>
  
      </section>
  
    </main>

  </div>
  
</template>


<style lang="scss">

#section-image {
  background-color: aqua;
  border: 5px solid blue;
  border-radius: 50px;
  margin: 0 auto;
}

</style>