import Vue from "vue";
import Vuex from "vuex";
var FB = require('fb');
FB.setAccessToken(
	process.env.VUE_APP_FBAPI
);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    SET_IMAGES(state, imgs) {
        state.images = imgs
    }
  },
  actions: {
    getimages(context){
      FB.api(
        '/vavarmierungengmbh/feed',
        'GET',
        {"fields":"attachments{subattachments,media},message"},
        function(response) {
           let imgs = []
            response.data.forEach(element => {
      
              if (typeof element.attachments.data[0].subattachments !== 'undefined') {
               let photo = element.attachments.data[0].subattachments.data
                  photo.forEach(img =>{
                    imgs.push(img.media.image.src)
                  })
              }
              
            });
            context.commit("SET_IMAGES", imgs)
        }
      );
    }
  },
  getters: {
    lastTenImg: state => {
      return state.images.slice(0, 10)
    }
  },
  modules: {}
});





