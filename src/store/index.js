import axios from "axios";
import {createStore} from "vuex";

export default createStore({
    state: {
        checkedImageId: null,
        images: [],
        bigPicture: "",
        isLoading: false,
        comment: {}
    },
    mutations: {
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setCheckedImageId(state, imageId) {
            state.checkedImageId = imageId;
        },
        setComments(state, newComments) {
            state.comments = newComments;
        },
        setImages(state, images) {
            state.images = images;
        },
        setBigPicture(state, image) {
            state.bigPicture = image;
        },
        addComment(state, comment) {
            state.comment = comment;
        },
    },
    getters: {
        getCheckedImage(state) {
            return state.images.filter(image => (image.id === state.checkedImageId ? image : null))[0];
        },
        comments(state) {
            const index = state.images.findIndex(image => image.id === state.checkedImageId);
            return state.images[index].comments;
        },
    },
    actions: {
        async fetchImages({state, commit}) {
            try {
                commit("setLoading", true);
                const {data} = await axios.get("https://boiling-refuge-66454.herokuapp.com/images");
                commit("setImages", data);
            } catch (e) {
                console.log("Ошибка", e);
            } finally {
                commit("setLoading", false);
            }
        },

        async fetchBigPicture({state, commit}) {
            try {
                commit("setLoading", true);
                const {data} = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${state.checkedImageId}`);
                commit("setBigPicture", data);
            } catch (e) {
                console.log("Ошибка", e);
            } finally {
                commit("setLoading", false);
            }
        },

        async addComment({state, commit}) {
            try {
                commit("setLoading", true);
                const response = await 
                    axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${state.checkedImageId}/comments`, {
                        name: state.comment.name,
                        comment: state.comment.comment,
                    });
                    console.log("response.status:", response.status);
                    console.log("response.statusText:", response.statusText);
                    alert("response.status: " + response.status);
            } catch (e) {
                console.log("Ошибка", e);
            } finally {
                commit("setLoading", false);
            }
        },
    },
    modules: {},
});
