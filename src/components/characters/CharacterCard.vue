<script>
export default {
    name: 'CharacterCard',
    props:{
        image: String,
        number: String,
        name: String,
        type: String
    }

};
</script>

<template>
    <div class="characters-card text-center p-2">
        <img class="img-fluid mb-3" :src="image" :alt="name">
        <p>{{ number }}</p>
        <h4><strong>{{ name }}</strong></h4>
        <p>{{ type }}</p>

    </div>
</template>


<style lang="scss" scoped>

    img {
        border-radius: 50%;
        display: block;
        object-fit: cover;
        max-width: 100%;
    }

</style>

