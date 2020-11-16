<template>
  <v-app>
    <notifications group="foo" position="bottom right" />

    <notifications group="custom-template" position="bottom right">
      <template slot="body" slot-scope="props">
        <div>
          <a class="title">
            {{ props.item.title }}
          </a>
          <a class="close" @click="props.close">
            <i class="fa fa-fw fa-close"></i>
          </a>
          <div v-html="props.item.text"></div>
        </div>
      </template>
    </notifications>
    <AppBar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    AppBar,
    Footer
  },

  data: () => ({}),

  mounted() {
    this.$store.dispatch("getimages");
    this.$notify({
      group: "foo",
      title: "Cookie",
      text: "Diese Website verwendet keine Cookies!",
      duration: 5000
    });
  }
};
</script>
