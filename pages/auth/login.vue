<template>
  <div class="wrapper-form p-3">
    <h3 class="text-center">Авторизация</h3>
    <transition name="scale">
      <span v-show="errorRequestStatus" class="error-request text-center text-danger">Неверный логин или пароль!</span>
    </transition>
    <b-form :class="{ shake: activeShake }" @submit.prevent="onSubmit">
      <b-form-group label="Логин:" label-for="input-login" label-class="label-offset">
        <AppInput id="input-login" v-model="form.email" type="text" placeholder="Логин" maxlength="50" required />
      </b-form-group>

      <b-form-group label="Пароль:" label-for="input-password" label-class="label-offset">
        <AppInput id="input-password" v-model="form.password" type="password" placeholder="Пароль" maxlength="50" required />
      </b-form-group>

      <b-overlay :show="requsetAwait" rounded="sm" opacity="0.5" blur="0" spinner-small spinner-variant="primary">
        <b-button type="submit" :variant="submitButtonVariant" class="w-100">Войти</b-button>
      </b-overlay>
    </b-form>
    <div class="d-flex justify-content-between p-2">
      <b-link :to="{ path: '/auth/recover' }">Забыли аккаунт?</b-link>
      <b-link :to="{ path: '/auth/registration' }">Регистрация</b-link>
    </div>
  </div>
</template>

<script>
import qs from "qs-stringify"
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
        email: "business.soft.info@gmail.com",
        password: "123",
      },
    }
  },
  methods: {
    async onSubmit() {
      this.requsetAwait = true
      const dataForm = {
        login: this.form.email,
        password: this.form.password,
      }
      const request = await this.$axios({
        method: "POST",
        url: `/login`,
        data: qs(dataForm),
      })
      this.requsetAwait = false
      if (request.data.token !== undefined && request.data.token !== null && request.data.token !== "") {
        const successToken = request.data.token
        this.errorRequestStatus = false
        this.submitButtonVariant = "success"

        Cookie.set("accessToken", successToken)
        this.$store.commit("setToken", successToken)
        setTimeout(() => this.$router.replace({ path: "/" }), 100)
      } else if (request.data.error === "100") {
        this.errorRequestStatus = true
        this.submitButtonVariant = "danger"
        this.activeShake = true
        setTimeout(() => (this.activeShake = false), 820)
      }
    },
  },
  head() {
    return {
      title: "Авторизация",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "robots", name: "robots", content: "index, follow" },
        { hid: "description", name: "description", content: "Autorisation Page" },
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
