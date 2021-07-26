<template>
    <form @submit.prevent>
        <v-input v-model="comment.name" type="text" placeholder="Ваше имя" />
        <v-input v-model="comment.comment" type="text" placeholder="Ваш комментарий" />
        <v-button @click="createComment">Оставить комментарий</v-button>
    </form>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name: "comment-form",
    data() {
        return {
            comment: {
                name: "",
                comment: "",
            },
        };
    },
    methods: {
        ...mapMutations({
            addComment: "addComment",
        }),
        createComment() {
            this.addComment(this.comment);
            this.$emit("create");
            this.comment = {
                name: "",
                comment: "",
            };
        },
    },
};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;

    @media (max-width: 970px) {
        padding: 0 20px;
    }
}
</style>
