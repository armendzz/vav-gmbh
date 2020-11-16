import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    SET_IMAGES(state, imgs) {
      state.images = imgs;
    }
  },
  actions: {
    getimages(context) {
      axios
        .get("http://server.vav-gmbh.ch/foto")
        .then(function(response) {
          let data = response.data.data;
          let imgs = [];
          data.forEach(element => {
            if (
              typeof element.attachments.data[0].subattachments !== "undefined"
            ) {
              let photo = element.attachments.data[0].subattachments.data;
              photo.forEach(img => {
                imgs.push(img.media.image.src);
              });
            }
          });
          context.commit("SET_IMAGES", imgs);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  getters: {
    lastTenImg: state => {
      return state.images.slice(0, 10);
    }
  },
  modules: {}
});
