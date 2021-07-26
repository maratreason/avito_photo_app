<template>
    <img class="image" :src="image.url" :alt="image.url" />
</template>

<script>
export default {
    name: "image-item",
    props: {
        image: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.image {
    max-width: 100%;
    width: 320px;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all ease 0.3s;
    box-shadow: 1px 4px 7px rgba(#000, 0.3);

    @media (max-width: 962px) {
        width: 400px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 1px 4px rgba(#000, 0.5);
    }
}
</style>
