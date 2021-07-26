<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <div class="dialog__close" @click.stop="hideDialog">x</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import dialogMixin from "@/mixins/dialogMixin";

export default {
    name: "v-dialog",
    mixins: [dialogMixin],
};
</script>

<style lang="scss" scoped>
.dialog {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    display: flex;
    margin: auto;
    background: #fff;
    width: 900px;
    height: 620px;
    padding: 20px;
    position: relative;

    .dialog__close {
        /* content: "x" */
        position: absolute;
        top: 15px;
        right: 15px;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
}
</style>
