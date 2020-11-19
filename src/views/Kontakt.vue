<template>
  <div class="container">
    <div v-if="errors.length">
      <div class="alert alert-danger" role="alert">
        <b>Bitte korrigieren sie die folgenden Fehler:</b>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </div>
    </div>

    <div class="mt-8">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Wir werden Ihre E-Mail-Adresse niemals an Dritte weitergeben."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ihre Email addresse"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ihre Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Betreff:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.subject"
          required
          placeholder="Betreff"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Ihre Nachricht:"
        label-for="input-4"
      >
        <b-form-textarea
          id="input-4"
          v-model="form.message"
          placeholder="Ihre Nachricht"
          rows="8"
        ></b-form-textarea>
      </b-form-group>

      <b-button
        class="mt-2 mr-2"
        type="submit"
        @click="onSubmit"
        variant="primary"
        >Submit</b-button
      >
      <b-button class="mt-2 mr-2" type="reset" @click="onReset" variant="danger"
        >Reset</b-button
      >
    </div>
    <b-alert v-if="error550" show variant="danger" class="mt-2"
      >Unsere system kan nicht finden ihre E-mail Address.</b-alert
    >

    <b-alert v-if="successfully" show variant="success" class="mt-2"
      >Vielen dank für ihre mail, Wir werden Ihre Anfrage schnellstmöglich
      bearbeiten und uns mit Ihnen in Verbindung setzen.</b-alert
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
        subject: "",
      },
      errors: [],
      successfully: "",
      error550: "",
    };
  },
  watch: {
    form: {
      handler: function() {
        if (this.errors.length) this.errors = [];
      },
      deep: true,
    },
  },
  methods: {
    onSubmit(evt) {
      this.checkForm(evt);
      if (!this.errors.length) {
        evt.preventDefault();
        axios
          .post("https://server.vav-gmbh.ch/mail", {
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject,
            text: this.form.message,
          })
          .then((response) => {
            if (response.data.message == "successfully") {
              this.successfully = "successfully";
              this.onReset();
            }
            if (response.data.message == "error") {
              this.error550 = "error";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    success() {
      this.successfully = true;
    },
    onReset() {
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      this.form.subject = "";
      this.errors = [];
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.form.name) {
        this.errors.push("Name erforderlich.");
      }
      if (!this.form.email) {
        this.errors.push("Email erforderlich.");
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push("Gültig email erforderlich.");
      }
      if (!this.form.message) {
        this.errors.push("Nachricht erforderlich.");
      }
      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
  },
};
</script>

<style></style>
