<template>
    <div class="dialog-comment">
        <div class="dialog-comment__date">{{new Date(comment.date).toLocaleDateString()}}</div>
        <div class="dialog-comment__text">{{comment.text}}</div>
    </div>
</template>

<script>
export default {
    name: "dialog-comments",
    props: {
        comment: {
            type: Object,
        }
    }
};
</script>

<style lang="scss" scoped>
.dialog-comment {
    margin-bottom: 20px;
}
.dialog-comment__date {
    color: #999;
    font-size: 0.7rem;
}
.dialog-comment__text {
    font-size: 0.9rem;
}
</style>
