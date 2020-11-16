<template>
  <div class="container">
    <div class="mt-2">
      <h1>Impressum</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h5>
            <b-icon class="mr-3" icon="building" variant="black"></b-icon>VAV
            Armierungen GmbH
          </h5>

          <h5>
            <a
              target="_blank"
              class="text-black"
              href="https://goo.gl/maps/uJTnLaczmYqk9LGx6"
              ><svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="map-marker-alt"
                class="svg-inline--fa fa-map-marker-alt fa-w-12"
                width="16"
                height="16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              <span class="ml-2">
                Industriestrasse 2 <br />
                <span class="ml-7"> 9630 Wattwil</span></span
              ></a
            >
          </h5>
          <br />

          <h4>
            <a href="tel:+41763163331" class="text-black"
              ><b-icon class="mr-3" icon="telephone-outbound" variant="black">
              </b-icon
              >+41 76 316 33 31</a
            >
          </h4>

          <h4>
            <a href="mailto:info@vav-gmbh.ch" class="text-black"
              ><b-icon class="mr-3" icon="chat-left-text" variant="black">
              </b-icon
              >info@vav-gmbh.ch</a
            >
          </h4>
        </div>
        <div class="col-md-6">
          <b-img fluid :src="require('../assets/card.jpeg')"></b-img>
        </div>
      </div>

      <hr />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.012031650559!2d9.090902215619737!3d47.29456447916523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac4cfe8af7d45%3A0xcfb87e242cc573c5!2sIndustriestrasse%202%2C%209630%20Wattwil%2C%20Switzerland!5e0!3m2!1sen!2sde!4v1605525760968!5m2!1sen!2sde"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-black {
  color: black !important;
}
</style>
