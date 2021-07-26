<template>
    <div class="image__list">
        <image-item v-for="image in images" :key="image.id" :image="image" @click="check(image.id)" />
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
import ImageItem from "@/components/ImageItem";

export default {
    name: "image-list",
    props: {
        showDialog: {
            type: Function,
        },
    },
    components: {
        ImageItem,
    },
    computed: {
        ...mapState({
            images: state => state.images,
        }),
    },
    methods: {
        ...mapMutations({
            setCheckedImageId: "setCheckedImageId",
        }),
        ...mapActions({
            fetchImages: "fetchImages",
            fetchBigPicture: "fetchBigPicture",
        }),
        check(id) {
            this.setCheckedImageId(id);
            this.fetchBigPicture();
            this.showDialog();
        },
    },
    mounted() {
        this.fetchImages();
    },
};
</script>

<style lang="scss" scoped>
.image__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 962px) {
        justify-content: space-around;
    }
}
</style>
