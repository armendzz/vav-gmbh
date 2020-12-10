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
      >
        <img src="@/assets/52.png" alt=""
      /></b-navbar-brand>
      <!--  -->

      <b-navbar-toggle target="nav-collapse">
        <b-icon icon="list" variant="white"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto menuFont">
          <b-nav-item
            :class="[
              currentPage.includes('Home')
                ? 'h5 mr-3 active1'
                : 'h5 mr-3 menulink'
            ]"
            @click="
              $router.push('/').catch(err => {
                toTop();
              })
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="25"
              height="25"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            Home</b-nav-item
          >

          <b-nav-item
            :class="[
              currentPage.includes('Uberuns')
                ? 'h5 mr-3 active1'
                : 'h5 mr-3 menulink'
            ]"
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
            :class="[
              currentPage.includes('Referenzen')
                ? 'h5 mr-3 active1'
                : 'h5 mr-3 menulink'
            ]"
            @click="
              $router.push('/referenzen').catch(err => {
                toTop();
              })
            "
          >
            <b-icon icon="card-image" variant="white"></b-icon>
            Referenzen</b-nav-item
          >
          <b-nav-item-dropdown class="h5 mr-3 menulink" right>
            <template slot="button-content">
              <b-icon icon="building" variant="white"></b-icon> Firma</template
            >

            <b-dropdown-item
              class="h5 mr-3 dropdownitem"
              @click="
                $router.push('/verwaltung').catch(err => {
                  toTop();
                })
              "
              variant="dark"
              ><b-icon icon="people" variant="dark"></b-icon>
              VERWALTUNG</b-dropdown-item
            >

            <b-dropdown-item
              class="h5 mr-3 dropdownitem"
              @click="
                $router.push('/team').catch(err => {
                  toTop();
                })
              "
              href="#"
              variant="dark"
              ><b-icon icon="people" variant="dark"></b-icon>
              Team</b-dropdown-item
            >

            <b-dropdown-item
              class="h5 mr-3 dropdownitem"
              @click="
                $router.push('/agb').catch(err => {
                  toTop();
                })
              "
              variant="dark"
              ><b-icon icon="check2" variant="dark"></b-icon>
              AGB</b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item
            :class="[
              currentPage.includes('Kontakt') ? 'h5 active1' : 'h5 menulink'
            ]"
            href="#"
            @click="
              $router.push('/kontakt').catch(err => {
                toTop();
              })
            "
          >
            <b-icon icon="chat-dots" variant="white"></b-icon>
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

  data: () => ({
    activeClass: "active1"
  }),
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    currentPage() {
      return this.$route.name;
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
a {
  text-decoration: none !important;
}
.navbar {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}
/* 
.navbar-light .navbar-nav .nav-link:hover {
  border-bottom: solid 3px white;

  transition: width 0.3s;
}
 */
.wrapper {
  position: sticky;
  top: 0;
  z-index: 1;
}

.nav-link1 {
  color: seashell !important;
  font-family: "Sansita Swashed", cursive;
  font-size: large;
}

.menulink::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: rgb(255, 255, 255);
  transition: width 0.5s;
}

.dropdownitem::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: rgb(3, 1, 1);
  transition: width 0.5s;
}

.menulink:hover::after {
  width: 100%;
}

.dropdownitem:hover::after {
  width: 100%;
}

.menulink:hover {
  color: rgb(255, 255, 255) !important;
}
.active1 {
  border-bottom: 2px solid white;
}
</style>
