<template>
  <div>
    <b-jumbotron header="VAV ARMIERUNGEN GMBH">
      <br />
      <h3>
        Ihr Spezialist für Armierungen aus dem Toggenburg
      </h3>
      <p>
        Wir verbinden, was ein Leben lang hält
      </p>
      <br />
      <hr />
      <a href="tel:+41763163331">
        <b-button size="lg" class="pulse" style="color: white" variant="primary"
          ><b-icon
            class="mr-2"
            icon="telephone-outbound"
            variant="white"
          ></b-icon>
          +41 76 316 33 31</b-button
        ></a
      >
    </b-jumbotron>
    <div class="container">
      <div>
        <h1 class="titlefont">Unsere Dienstleistungen</h1>
        <hr />
        <h4>Hochbau, Ingenieurbau u. Tiefbau, Industriebau</h4>

        <div class="row my-10 justify-content-md-center">
          <v-card class="mt-4 mr-3 ml-3 col-lg-3">
            <b-img fluid :src="require('../assets/Wohnanlagen.jpg')"></b-img>

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
            <b-img fluid :src="require('../assets/kliniken.jpg')"></b-img>

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
            <b-img fluid :src="require('../assets/Hochbau.jpg')"></b-img>

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
          <b-img fluid :src="require('../assets/planen.jpeg')"></b-img>
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
              Bereits im Jahr 2019 wurde die VAV Armierungen GmbH gegründet.
            </p>

            <p>
              Derzeit sind über 10 Mitarbeiter in Vollzeit in einem
              unbefristetem Arbeitsverhältnis angestellt.
            </p>

            <p>
              Durch den Primären Geschäftszweig der Armierungen entwickelt sich
              unser Unternehmen immer weiter.
            </p>

            <p>
              Anhand dieser Präsentation dürfen Sie sich heute die
              Firmenentwicklung und erfolge genauer ansehen.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2" style="background-color: rgb(34 225 255 / 3%);">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="titlefont">REFERENZEN</h1>
        </div>
        <div class="justify-content-center">
          <div class="row justify-content-center">
            <div
              v-for="(image, i) in lastTenImg"
              :key="i"
              class="imagee col-md-2 col-4"
            >
              <img class="img" :src="image" @click="index = i" />
            </div>
            <vue-gallery-slideshow
              :images="lastTenImg"
              :index="index"
              @close="index = null"
            ></vue-gallery-slideshow>

            <router-link to="/referenzen">
              <button class="btn btn-primary btn-lg d-flex">
                Alle REFERENZEN
              </button>
            </router-link>
          </div>
        </div>
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
    url("../assets/home-1.jpg");
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

.pulse {
  margin: 100px;
  display: block;
  background: rgba(0, 123, 255);
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 123, 255, 0.39);
  animation: pulse 1.5s infinite;
  position: relative;
}
.pulse::before {
  content: "";
  box-shadow: 0 0 0 rgba(0, 123, 255, 0.4);
  animation: pulse2 1.5s infinite;
  animation-delay: 0.5s;
  border-radius: 12%;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.pulse:hover {
  animation: none;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
    box-shadow: 0 0 0 40px rgba(0, 123, 255, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
@-webkit-keyframes pulse2 {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
@keyframes pulse2 {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
    box-shadow: 0 0 0 60px rgba(0, 123, 255, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
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
