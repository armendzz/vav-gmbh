<template>
   <v-footer
     class="mt-2 blue darken-1"
     
    dark
    padless
  >
  <div class="container">
  <div class="col-12">
      <v-card
      flat
      tile
      class="blue darken-1   lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      

    
    </v-card>
          <div class="row ">
              
              <div class="col-md-4">
                  <h3>Legal</h3>
                  <ul>
                      <li>Impressum</li>
                      <li>AGB</li>
                      <li>Datenschutzerklärung</li>
                  </ul>
              </div>
              <div class="col-md-4">
                  <h3>Impressum</h3>
                  <p>VAV GmbH</p>
                  <p>VAV GmbH</p>
              </div>
              <div class="col-md-4">
                  <h3>Kontakt</h3>
                  <p>+41 0000000000</p>
                  <p>info@vavgmbh.ch</p>
              </div>
          </div>
            <v-divider></v-divider>

      <v-card-text class="text-center white--text">
        {{ new Date().getFullYear() }} — <strong>VAV GmbH</strong>
      </v-card-text>
          </div>
          </div>
       <!--   <v-card
      flat
      tile
      class="blue darken-1   lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      

      <v-divider></v-divider>

      <v-card-text class=" white--text">
        {{ new Date().getFullYear() }} — <strong>VAV GmbH</strong>
      </v-card-text>
    </v-card> -->
  
  </v-footer>
</template>

<script>
export default {
    data(){
        return{
             icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
        }
    }
}
</script>

<style>

</style>