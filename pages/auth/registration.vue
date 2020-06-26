<template>
  <div class="wrapper-form p-3">
    <h3 class="text-center">Регистрация</h3>
    <transition name="scale">
      <span v-show="errorRequestStatus" class="error-request text-center text-danger">Неверный логин или пароль!</span>
    </transition>
    <b-form :class="{ shake: activeShake }" @submit.prevent="onSubmit">
      <!-- Input Email -->
      <b-form-group id="input-group-1" label-for="input-1">
        <template v-slot:label
          ><div class="d-flex justify-content-between align-items-center pr-2">
            Email:<span class="clear-btn" @click="cleanOut">Очистить</span>
          </div></template
        >
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="example.@email.com" maxlength="32" trim></b-form-input>

        <button type="button" class="clear d-flex">
          <transition name="fade">
            <svg v-show="form.email !== ''" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg" type="button" @click="form.email = ''">
              <path
                d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
              />
            </svg>
          </transition>
        </button>
      </b-form-group>
      <!-- Input name company -->
      <b-form-group id="input-group-1" label="Название организации:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.company" type="text" required placeholder="Моя компания" maxlength="32" trim></b-form-input>
        <button type="button" class="clear d-flex">
          <transition name="fade">
            <svg
              v-show="form.company !== ''"
              viewBox="0 0 365.696 365.696"
              xmlns="http://www.w3.org/2000/svg"
              type="button"
              @click="form.company = ''"
            >
              <path
                d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
              />
            </svg>
          </transition>
        </button>
      </b-form-group>
      <!-- Input number phone -->
      <b-form-group id="input-group-1" label="Телефон:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.phone" type="text" required placeholder="+380665257491" maxlength="32" trim></b-form-input>
        <button type="button" class="clear d-flex">
          <transition name="fade">
            <svg v-show="form.phone !== ''" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg" type="button" @click="form.phone = ''">
              <path
                d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
              />
            </svg>
          </transition>
        </button>
      </b-form-group>
      <!-- Input country -->
      <b-form-group id="input-group-1" label="Страна:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.country" type="text" required placeholder="Ваша страна" maxlength="32" trim></b-form-input>
        <button type="button" class="clear d-flex">
          <transition name="fade">
            <svg
              v-show="form.country !== ''"
              viewBox="0 0 365.696 365.696"
              xmlns="http://www.w3.org/2000/svg"
              type="button"
              @click="form.country = ''"
            >
              <path
                d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
              />
            </svg>
          </transition>
        </button>
      </b-form-group>
      <p class="discription text-muted pl-1">После успешной регистрации, на указанную электронную почту прийдет информация с логином и паролем.</p>
      <b-overlay :show="requsetAwait" rounded="sm" opacity="0.5" blur="0" spinner-small spinner-variant="primary">
        <b-button type="submit" :variant="submitButtonVariant" class="w-100">Регистрация</b-button>
      </b-overlay>
    </b-form>
    <div class="d-flex justify-content-between p-2">
      <b-link :to="{ path: '/auth/recover' }">Забыли аккаунт?</b-link>
      <b-link :to="{ path: '/auth/login' }">Войти</b-link>
    </div>
  </div>
</template>

<script>
import qs from "qs"
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "Login",
  layout: "clear",
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

<style lang="scss">
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
    div.bv-no-focus-ring {
      position: relative;
      button.clear {
        position: absolute;
        top: 50%;
        right: 0.75rem;
        transform: translateY(-50%);
        border: none;
        outline: none;
        padding: 0;
        background: none;
        svg {
          width: 12px;
          height: 12px;
          path {
            fill: #3488e3;
            transition: fill 0.1s;
          }
        }
        &:hover {
          svg path {
            fill: #237ad8;
          }
        }
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.3);
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
