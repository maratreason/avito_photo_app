export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        showDialog() {
            this.dialogVisible = true;
        },
        hideDialog() {
            this.$emit("update:show", false);
        },
    },
};
