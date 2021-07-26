<template>
    <div class="home">
        <div class="container">
            <h1 class="title">Image App</h1>
            <image-list :showDialog="showDialog" />

            <transition name="bounce">
                <v-dialog class="dialog-block" v-model:show="dialogVisible">
                    <div class="dialog-main">
                        <img class="dialog-main__img" :src="bigPicture.url" :alt="bigPicture.url" />
                        <comment-form @create="createComment" />
                        <div class="mobile-comments">
                            <dialog-comments v-for="comment in bigPicture.comments" :key="comment.id" :comment="comment" />
                        </div>
                    </div>
                    <div class="dialog-comments">
                        <dialog-comments v-for="comment in bigPicture.comments" :key="comment.id" :comment="comment" />
                    </div>
                </v-dialog>
            </transition>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
import ImageList from "@/components/ImageList";
import DialogComments from "@/components/DialogComments";
import CommentForm from "@/components/CommentForm";

export default {
    name: "Home",
    components: {
        ImageList,
        CommentForm,
        DialogComments,
    },
    data: () => ({
        dialogVisible: false,
    }),
    methods: {
        ...mapActions({
            addComment: "addComment",
        }),
        showDialog() {
            this.dialogVisible = true;
        },
        createComment() {
            this.addComment();
        },
    },
    computed: {
        ...mapState({
            images: state => state.images,
            bigPicture: state => state.bigPicture,
        }),
        ...mapGetters({
            getCheckedImage: "getCheckedImage",
            comments: "comments",
        }),
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}

.title {
    text-align: center;
    margin: 2rem 0;
}

.bounce-enter-active {
    animation: bounce-in 0.3s;
}
.bounce-leave-active {
    animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.dialog-block {
    
}

.dialog-main {
    width: 640px;
    position: relative;

    @media (max-width: 970px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 30px;
    }

    &__img {
        max-width: 100%;
        height: 400px;
        width: 600px;
        margin-bottom: 20px;
        order: -2;
        @media (max-width: 970px) {
            width: 100%;
            height: auto;
        }
    }
}

.dialog-comments {
    width: 250px;
    margin-left: 20px;
    @media (max-width: 970px) {
        display: none;
    }
}

.mobile-comments {
    display: none;

    @media (max-width: 970px) {
        display: block;
        width: 100%;
        order: -1;
        padding: 0 20px;
    }
}
</style>
