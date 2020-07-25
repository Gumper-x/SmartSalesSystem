<template>
  <div class="wrapper-form p-3">
    <h3 class="text-center">Регистрация</h3>
    <transition name="scale">
      <span v-show="errorRequestStatus" class="error-request text-center text-danger">Неверный логин или пароль!</span>
    </transition>
    <b-form :class="{ shake: activeShake }" @submit.prevent="onSubmit">
      <!-- Input Email -->
      <b-form-group id="input-group-1" label-for="input-email">
        <template v-slot:label
          ><div class="d-flex justify-content-between align-items-center pr-2">
            Email:<span class="clear-btn" @click="cleanOut">Очистить</span>
          </div></template
        >
        <AppInput id="input-email" v-model="form.email" type="email" placeholder="example.@email.com" maxlength="50" required />
      </b-form-group>
      <!-- Input name company -->
      <b-form-group id="input-group-1" label="Название организации:" label-for="input-company">
        <AppInput id="input-company" v-model="form.company" type="text" placeholder="Моя компания" maxlength="50" required />
      </b-form-group>
      <!-- Input number phone -->
      <b-form-group id="input-group-1" label="Телефон:" label-for="input-phone">
        <AppInput id="input-phone" v-model="form.phone" type="text" placeholder="+380665257491" maxlength="50" required />
      </b-form-group>
      <!-- Input country -->
      <b-form-group id="input-group-1" label="Страна:" label-for="input-country">
        <AppInput id="input-country" v-model="form.country" type="text" placeholder="Ваша страна" maxlength="50" required />
      </b-form-group>
      <!-- Discription how worck registration -->
      <p class="discription text-muted pl-1">После успешной регистрации, на указанную электронную почту прийдет информация с логином и паролем.</p>
      <!-- Button Submit -->
      <b-overlay :show="requsetAwait" rounded="sm" opacity="0.5" blur="0" spinner-small spinner-variant="primary">
        <b-button type="submit" :variant="submitButtonVariant" class="w-100">Регистрация</b-button>
      </b-overlay>
    </b-form>
    <!-- Alternate links -->
    <div class="d-flex justify-content-between p-2">
      <b-link :to="{ path: '/auth/recover' }">Забыли аккаунт?</b-link>
      <b-link :to="{ path: '/auth/login' }">Войти</b-link>
    </div>
  </div>
</template>

<script>
import qs from "qs"
import AppInput from "@/components/ui/AppInput"
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "Login",
  layout: "clear",
  components: {
    AppInput,
  },
  data() {
    return {
      errorRequestStatus: false,
      activeShake: false,
      requsetAwait: false,
      submitButtonVariant: "primary",
      form: {
        email: "eve.holt@reqres.in",
        company: "cityslicka",
        phone: "+380662244005",
        country: "Украина",
      },
    }
  },
  methods: {
    cleanOut() {
      this.form.email = ""
      this.form.company = ""
      this.form.phone = ""
      this.form.country = ""
    },
    onSubmit() {
      this.requsetAwait = true
      this.$axios({
        method: "POST",
        url: `api/login`,
        data: {
          email: this.form.email,
          password: this.form.password,
        },
      })
        .then(res => {
          this.errorRequestStatus = false
          this.requsetAwait = false
          this.submitButtonVariant = "success"
          Cookie.set("accessToken", res.data.token)
          this.$store.commit("setToken", res.data.token)
          setTimeout(() => this.$router.replace({ path: "/" }), 100)
        })
        .catch(e => {
          console.log(e)
          this.errorRequestStatus = true
          this.submitButtonVariant = "danger"
          this.requsetAwait = false
          this.activeShake = true
          setTimeout(() => (this.activeShake = false), 820)
        })
    },
  },
  head() {
    return {
      title: "Регистрация",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "robots", name: "robots", content: "index, follow" },
        { hid: "description", name: "description", content: "Registration Page" },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper-form {
  width: 100%;
  max-width: 400px;
  h3 {
    margin-bottom: 0.8rem;
  }
  .error-request {
    display: block;
    font-size: 15px;
    font-weight: 500;
  }
  form {
    &.shake {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }
  .clear-btn {
    font-size: 11px;
    cursor: pointer;
    color: #007bff;
    &:hover {
      color: #dc1461;
    }
  }
  .discription {
    font-size: 11px;
  }
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease-in-out;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0);
}
</style>
