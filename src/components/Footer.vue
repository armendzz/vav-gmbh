<template>
  <v-footer class="mt-2 blue darken-1" dark padless>
    <div class="container">
      <div class="col-12">
        <v-card
          flat
          tile
          class="blue darken-1   lighten-1 white--text text-center"
        >
          <v-card-text>
           <a href="https://www.facebook.com/vavarmierungengmbh" target="_blank"> <v-btn
             
             
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
               mdi-facebook
              </v-icon>
            </v-btn>
            </a>
            <a href="https://www.instagram.com/vav_armierungen/" target="_blank">   <v-btn
             
             
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
              mdi-instagram
              </v-icon>
            </v-btn> </a>
              <v-btn
             
             
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
               mdi-twitter
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
        <div class="row ">
          <div class="col-md-4">
            <h3>Legal</h3>
            <ul>
              <li><router-link class="text-white"  to="/impressum">Impressum</router-link></li>
              <li><router-link class="text-white"  to="/agb">AGB</router-link></li>
              <li> <router-link class="text-white"  to="/datenschutzerklaerung">Datenschutzerklärung</router-link></li>
              
            
            </ul>
          </div> 
          <div class="col-md-4">
            <h3><router-link class="text-white"  to="/impressum">Impressum</router-link></h3>
            <p> <b-icon class="mr-3" icon="building" variant="white"></b-icon>VAV Armierungen GmbH</p>
            <p><a class="text-white" target="_blank" href="https://goo.gl/maps/uJTnLaczmYqk9LGx6"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12"  width="16" height="16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg> <span class="ml-2"> Industriestrasse 2, 9630 Wattwil</span></a></p>
          </div>
          <div class="col-md-4">
            <h3>Kontakt</h3>
            <p> <a href="tel:+41763163331" class="text-white" ><b-icon class="mr-2" icon="telephone-outbound" variant="white"> </b-icon>+41 76 316 33 31</a></p>
            <p> <a href="mailto:info@vav-gmbh.ch"  class="text-white" ><b-icon class="mr-2" icon="chat-left-text" variant="white"> </b-icon>info@vav-gmbh.ch</a> </p>
          </div>
        </div>
        <v-divider></v-divider>

        <v-card-text class="text-center white--text">
          {{ new Date().getFullYear() }} — <strong>VAV GmbH</strong>
        </v-card-text>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>

text-white {
  color: white !important;
}


</style>
