<template>
  <div class="wrapper">
    <b-navbar class="blue  darken-1 " toggleable="lg">
      <b-navbar-brand
        class="logoFont"
        href="#"
        @click="
          $router.push('/').catch(err => {
            toTop();
          })
        "
        >VAV-gmbh</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse">
        <b-icon icon="list" variant="white"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto menuFont">
          <b-nav-item
            class="h5 mr-3"
            @click="
              $router.push('/').catch(err => {
                toTop();
              })
            "
          >
            <b-icon icon="shop" variant="white"></b-icon> Home</b-nav-item
          >

          <b-nav-item
            class="h5 mr-3"
            href="#"
            @click="
              $router.push('/uber-uns').catch(err => {
                toTop();
              })
            "
          >
            <b-icon icon="info-circle" variant="white"></b-icon> Uber
            Uns</b-nav-item
          >
          <b-nav-item
            href="#"
            class="h5 mr-3"
            @click="
              $router.push('/gallery').catch(err => {
                toTop();
              })
            "
          >
            <b-icon icon="card-image" variant="white"></b-icon>
            Projekte</b-nav-item
          >
          <b-nav-item-dropdown class="h5 mr-3" right>
            <template slot="button-content">
              <b-icon icon="building" variant="white"></b-icon> Firma</template
            >

            <b-dropdown-item class="h5 mr-3" href="#" variant="dark"
              ><b-icon icon="people" variant="dark"></b-icon>
              VERWALTUNG</b-dropdown-item
            >

            <b-dropdown-item class="h5 mr-3" href="#" variant="dark"
              ><b-icon icon="arrow-repeat" variant="dark"></b-icon>
              Organigramm</b-dropdown-item
            >

            <b-dropdown-item class="h5 mr-3" href="#" variant="dark"
              ><b-icon icon="arrows-angle-contract" variant="dark"></b-icon>
              GRÜNDUNG</b-dropdown-item
            >

            <b-dropdown-item class="h5 mr-3" href="#" variant="dark"
              ><b-icon icon="people" variant="dark"></b-icon>
              Team</b-dropdown-item
            >

            <b-dropdown-item class="h5 mr-3" href="#" variant="dark"
              ><b-icon icon="check2" variant="dark"></b-icon>
              AGB</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item
            class="h5"
            href="#"
            @click="
              $router.push('/kontakt').catch(err => {
                toTop();
              })
            "
            ><b-icon icon="chat-dots" variant="white"></b-icon>
            Kontakt</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({}),
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap");

.logoFont {
  font-family: "Lato", sans-serif;
  color: white !important;
}

.menuFont {
  font-family: "Open Sans", sans-serif;
  color: white !important;
}

.navbar-light .navbar-nav .nav-link {
  color: white !important;
}

.navbar-light .navbar-nav .nav-link:hover {
  border-bottom: solid 3px white;

  transition: width 0.3s;
}

.wrapper {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
