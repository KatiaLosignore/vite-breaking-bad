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
    <div class="card ms-3 rounded-5 text-center" style="width: 18rem;">
        <img :src="image" class="card-img-top mt-4" :alt="name">
        <div class="card-body">
            <p class="card-text fw-semibold">{{ number }}</p>
            <h5 class="card-title fw-bolder text-primary">{{ name }}</h5>
            <p class="card-text fw-bolder text-info">{{ type }}</p>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .card {
        height: 320px;
    }

    img {
        width: 150px;
        margin: 0 auto;
    }

</style>

