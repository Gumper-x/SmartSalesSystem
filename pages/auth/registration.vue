<template>
  <section class="container">
    <b-link :to="{ path: '/auth/login' }">Войти</b-link>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="text" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.pass" required placeholder="Enter Password"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group id="checkboxes-4" v-model="form.checked">
          <b-form-checkbox :value="true">Check out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <b-card class="mt-3 text-info" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-card class="mt-3 text-info" header="Form Data Result">
      <pre class="m-0">{{ data }}</pre>
    </b-card>
  </section>
</template>

<script>
import axios from "axios"
import qs from "qs"
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "registration",
  layout: "clear",
  data() {
    return {
      data: null,
      form: {
        email: "AA",
        pass: "123",
        checked: [],
      },
    }
  },
  methods: {
    async onSubmit(evt) {
      console.log(evt)
      this.$store.dispatch("sessionInit")
      const params = { login: this.form.email, password: this.form.pass }
      const requstAxios = await axios({
        method: "POST",
        url: "https://app.bs-soft.org.ua/test2/hs/bstest",
        data: qs.stringify(params),
      })
      this.data = requstAxios.data
    },
  },
  mounted() {
    // Cookie.set("auth", { accessToken: "someStringGotFromApiServiceWithAjax" })
  },
}
</script>

<style lang="scss" scoped>
span {
  color: #fff;
}
</style>
