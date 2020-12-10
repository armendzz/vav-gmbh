<template>
  <div>
    <div class="mt-2" style="background-color: rgb(34 225 255 / 3%);">
      <div class="container">
        <h1 class="titlefont">Referenzen</h1>
        <div class="justify-content-center">
          <div class="row justify-content-center">
            <div
              v-for="(image, i) in $store.state.images"
              :key="i"
              class="imagee col-md-2 col-4"
            >
              <img class="img" :src="image" @click="index = i" />
            </div>
          </div>
        </div>
        <vue-gallery-slideshow
          :images="$store.state.images"
          :index="index"
          @close="index = null"
        ></vue-gallery-slideshow>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  data() {
    return {
      index: null
    };
  },
  components: {
    VueGallerySlideshow
  },
  methods: {},
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style>
.image {
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}

.imagee {
  background-size: cover;
  cursor: pointer;
  margin-left: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  object-fit: contain;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.img {
  height: 150px;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
}
</style>
