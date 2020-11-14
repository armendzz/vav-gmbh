<template>
  <div>
    <b-jumbotron header="VAV ARMIERUNEGN GMBH">
      <br />
      <h3>
        Ihr Spezialist für Armierungen aus St. Gallen
      </h3>
      <p>
        Wir verbinden, was ein Leben lang hält
      </p>
      <br />
      <hr />
      <b-button size="lg" style="color: white" variant="primary"
        ><b-icon icon="telephone-outbound" variant="white"></b-icon>
        Kontakt</b-button
      >
    </b-jumbotron>
    <div class="container">
      <div>
        <h1 class="titlefont">Unsere Dienstleistungen</h1>
        <hr />
        <h4>Hochbau, Ingenieurbau u. Tiefbau, Industriebau</h4>

        <div class="row my-10 justify-content-md-center">
          <v-card class="mt-4 mr-3 ml-3 col-lg-3">
            <b-img
              fluid
              src="https://www.itc-armierungen.ch/wp-content/uploads/2020/08/Wohnanlagen.jpg"
            ></b-img>

            <v-card-title>Hochbau</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div class="my-4 subtitle-1">
                <li>Bildungseinrichtungen</li>
                <li>Wohnanlagen</li>
                <li>Krankenhäuser</li>
                <li>Kulturbauten</li>
                <li>Parkhäuser</li>
                <li>Hotels</li>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="mt-4 mr-2 ml-2 col-lg-3">
            <b-img
              fluid
              src="https://www.itc-armierungen.ch/wp-content/uploads/2020/08/kliniken.jpg"
            ></b-img>

            <v-card-title>Ingenieurbau u. Tiefbau</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div class="my-4 subtitle-1">
                <li>Brückenbauwerke</li>
                <li>Regenrückhaltebecken</li>
                <li>Windmühlenfundamente</li>
                <li>Kraftwerke</li>
                <li>Tunnelbau</li>
                <li>Kläranlagen</li>
              </div>
            </v-card-text>
          </v-card>

          <v-card class=" mt-4 mr-2 ml-2 col-lg-3">
            <b-img
              fluid
              src="https://www.itc-armierungen.ch/wp-content/uploads/2020/08/Hochbau.jpg"
            ></b-img>

            <v-card-title>Industriebau</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div class="my-4 subtitle-1">
                <li>Produktionshallen</li>
                <li>Einkaufszentren</li>
                <li>Bürogebäude</li>
                <li>Werkstätten</li>
                <li>Regierungseinrichtungen</li>
                <li>Flughäfen</li>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <h2 class="titlefont">Warum wir die Richtigen sind!</h2>
        <hr />
        <ul class="lifont">
          <li>
            Termintreue ist für uns nicht nur ein Wort sondern ein Versprechen!
          </li>
          <li>Wir überzeugen durch LEISTUNG!</li>
          <li>Über 20 Jahren Erfahrung im Bereich Baustahlverlegung</li>
          <li>
            Wir Verfügen neben unsere eigenen Personal, über ein weitreichende
            Netzwerk in fast allen Gewerken.
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <div class="row" style=" background-color: #f6f6f6;">
        <div class="col-lg-5 col-sm-12 py-0">
          <b-img
            fluid
            src="https://www.itc-armierungen.ch/wp-content/uploads/2020/09/itc_22.jpg"
          ></b-img>
        </div>
        <div class="col-lg-5 col-sm-12 troni mr-5 ml-5">
          <div>
            <b-row align-h="center">
              <b-col cols="4">
                <h2 class="brandtext text-center">VAV GmbH</h2></b-col
              >
            </b-row>

            <h1>Unsere Geschichte</h1>
            <p>
              Bereits im Jahr 2019 wurde die VAV Armierunegn GMBH gegrundet.
            </p>
            <p>
              Derzeit sind über 10 Mitarbeiter in Vollzeit in einem
              unbefristetem Arbeitsverhältnis angestellt.
            </p>
            <p>
              Durch den primärem geschäftszweig der armierungen entwickelte sich
              unser unternehmen immer weiter.
            </p>
            <p>
              Anhand dieser Präsentation dürfen Sie sich heute die
              Firmenentwicklung und Erfolge genauer ansehen.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2" style="background-color: rgb(34 225 255 / 3%);">
      <div class="container">
        <h1 class="titlefont">Gallery</h1>
        <img
          class="image col-md-2 col-4"
          v-for="(image, i) in lastTenImg"
          :src="image"
          :key="i"
          @click="index = i"
        />

        <vue-gallery-slideshow
          :images="lastTenImg"
          :index="index"
          @close="index = null"
        ></vue-gallery-slideshow>

        <router-link to="/gallery">
          <button class="btn btn-primary btn-lg d-flex">Alle Gallerie</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "Home",
  components: {
    VueGallerySlideshow
  },
  data: () => ({
    model: 1,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    index: null
  }),
  computed: {
    lastTenImg() {
      return this.$store.getters.lastTenImg;
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Philosopher:ital@1&display=swap");

.jumbotron {
  background-image: linear-gradient(
      to bottom,
      rgba(17, 14, 14, 0.616) 0%,
      rgba(66, 59, 59, 0.589) 100%
    ),
    url("https://www.itc-armierungen.ch/wp-content/uploads/2020/08/home-1.jpg");
  background-size: cover;

  color: white;
  font-size: larger;
}
.titlefont {
  font-family: "Righteous", cursive;
}
.lifont {
  font-family: "Philosopher", sans-serif;
}
.troni {
  align-self: center !important;
}
.brandtext {
  background-color: slategrey;
  color: white;
}
.image {
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}
</style>
