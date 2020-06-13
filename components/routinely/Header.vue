<template>
  <section>
    <transition name="moveLeft">
      <Sidebar v-show="sidebarStatus" :offset="sidebarOffset" />
    </transition>
    <transition name="opacityHide">
      <div v-show="sidebarStatus" class="area-nonaside h-100 w-100" @click="$store.commit('sidebarToggle')"></div>
    </transition>
    <header ref="header" class="fixed-top p-2 d-flex align-items-center justify-content-between">
      <div class="d-flex">
        <b-button size="sm" variant="light" class="mr-2" @click="$store.commit('sidebarToggle')">
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
        <!-- Create cube with 3 sides and animate in "SmartSalesSystem" -->
        <h1 class="logo pl-1 pr-1"><nuxt-link to="/" class="text-reset text-decoration-none">SmartSalesSystem</nuxt-link></h1>
      </div>
      <span class="title">Журнал документов</span>

      <b-button size="sm" variant="light" class="d-flex">
        <span class="mr-1">Андрей Бережной</span>
        <svg width="20" height="20" viewBox="0 0 44 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.875 25C28.7793 25 34.375 19.4043 34.375 12.5C34.375 5.5957 28.7793 0 21.875 0C14.9707 0 9.375 5.5957 9.375 12.5C9.375 19.4043 14.9707 25 21.875 25ZM30.625 28.125H28.9941C26.8262 29.1211 24.4141 29.6875 21.875 29.6875C19.3359 29.6875 16.9336 29.1211 14.7559 28.125H13.125C5.87891 28.125 0 34.0039 0 41.25V45.3125C0 47.9004 2.09961 50 4.6875 50H39.0625C41.6504 50 43.75 47.9004 43.75 45.3125V41.25C43.75 34.0039 37.8711 28.125 30.625 28.125Z"
          />
        </svg>
      </b-button>
    </header>
  </section>
</template>

<script>
import { mapState } from "vuex"
import Sidebar from "~/components/routinely/Sidebar"

export default {
  name: "Header",
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarOffset: null,
    }
  },
  computed: mapState(["sidebarStatus"]),
  watch: {
    sidebarStatus(val) {
      if (window.innerWidth <= 900 && val === true) {
        document.documentElement.style.overflow = "hidden"
      } else {
        document.documentElement.style.overflow = "auto"
      }
    },
  },
  mounted() {
    if (window.innerWidth > 900) {
      this.$store.commit("sidebarToggle")
    }
    this.sidebarOffset = `padding-top: ${this.$refs.header.clientHeight}px`
  },
}
</script>

<style lang="scss" scoped>
section {
  .moveLeft-enter-active,
  .moveLeft-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .moveLeft-enter,
  .moveLeft-leave-to {
    transform: translateX(-100%);
  }
  .opacityHide-enter-active,
  .opacityHide-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .opacityHide-enter,
  .opacityHide-leave-to {
    opacity: 0;
  }
  header {
    background: rgba(244, 245, 246, 0.9);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    h1 {
      font-size: 22px;
      margin-bottom: 0.2rem;
      transition: 0.3s ease-in-out;
      &.logo {
        border-radius: 10px;
        border-bottom: 3px solid #dd2d2d;
      }
      &:hover {
        color: #3d3d3d;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .area-nonaside {
      position: fixed;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: saturate(180%) blur(5px);
      z-index: 1;
    }
    h1 {
      display: none;
    }
  }
}
</style>
