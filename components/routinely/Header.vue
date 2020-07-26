<template>
  <header class="sticky-top p-2 d-flex align-items-center justify-content-between">
    <div class="d-flex">
      <b-button size="sm" variant="light" class="mr-2" @click="sidebarToggle">
        <svg
          class="bi bi-layout-text-window-reverse"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
          />
          <path
            fill-rule="evenodd"
            d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </b-button>
      <Logo />
    </div>
    <span class="title">Журнал документов</span>

    <b-button size="sm" variant="light" class="d-flex position-relative account-btn">
      <span class="mr-1 account-name">Андрей Бережной</span>
      <svg width="20" height="20" viewBox="0 0 44 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.875 25C28.7793 25 34.375 19.4043 34.375 12.5C34.375 5.5957 28.7793 0 21.875 0C14.9707 0 9.375 5.5957 9.375 12.5C9.375 19.4043 14.9707 25 21.875 25ZM30.625 28.125H28.9941C26.8262 29.1211 24.4141 29.6875 21.875 29.6875C19.3359 29.6875 16.9336 29.1211 14.7559 28.125H13.125C5.87891 28.125 0 34.0039 0 41.25V45.3125C0 47.9004 2.09961 50 4.6875 50H39.0625C41.6504 50 43.75 47.9004 43.75 45.3125V41.25C43.75 34.0039 37.8711 28.125 30.625 28.125Z"
        />
      </svg>
      <div class="account-menu">
        <ul>
          <li><span class="account-name-in-menu">Андрей Бережной</span></li>
          <li>Настройки</li>
          <li @click="logout">Выйти</li>
        </ul>
      </div>
    </b-button>
  </header>
</template>

<script>
// Vuex
import { mapMutations } from "vuex"
// @Components
import Logo from "~/components/Logo"
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "Header",
  components: {
    Logo,
  },
  methods: {
    ...mapMutations({
      sidebarToggle: "sidebar/sidebarToggle",
      setToken: "setToken",
    }),
    logout() {
      Cookie.remove("accessToken")
      this.setToken(null)
      this.$router.replace({ path: "/auth/login" })
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  background: rgba(244, 245, 246, 0.9);
  // backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .account-menu {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 40px;
    right: 0;
    transform: translateY(-10px);
    background: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    &::after {
      content: "";
      background: #fcfcfc;
      width: 10px;
      height: 10px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      li {
        position: relative;
        padding: 8px 10px;
        border-bottom: 1px solid #dddddd;
        white-space: nowrap;
        transition: all 0.5s;
        &::before {
          content: "";
          opacity: 0;
          transform: translateY(-50%) translateX(-5px);
          transition: transform 0.5s, opacity 0.5s;
        }
        &:focus,
        &:hover {
          background: #f5f6f8;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%) translateX(0);
            background: #2889f8;
            box-shadow: 1px 0 4px rgba(40, 137, 248, 0.4);
            height: 8px;
            width: 4px;
            border-radius: 0 10px 10px 0;
            opacity: 1;
            transition: transform 0.5s, opacity 0.5s;
          }
        }
        &:active {
          background: #ebeef0;
        }
        span.account-name-in-menu::before {
          content: "Имя: ";
          font-weight: 300;
          font-size: 12px;
          color: #929292;
        }
      }
    }
  }
}
.account-btn:focus .account-menu {
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}
@media screen and (max-width: 900px) {
  h1,
  .account-name {
    display: none;
  }
}
</style>
