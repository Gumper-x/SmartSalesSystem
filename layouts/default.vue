<template>
  <div>
    <Sidebar class="sidebar" :class="{ hide: !sidebarStatus }" :offset="sidebarOffset" />
    <transition name="opacityHide">
      <div v-show="sidebarStatus" class="area-nonaside h-100 w-100" @click="sidebarToggle"></div>
    </transition>
    <Header ref="headerComponent" />
    <section id="content" :class="{ contentShift: $store.state.sidebar.sidebarStatus }">
      <nuxt />
    </section>
  </div>
</template>

<script>
// Vuex
import { mapState, mapMutations } from "vuex"
// Libraries
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// @Compnents
import Header from "@/components/routinely/Header"
import Sidebar from "@/components/routinely/Sidebar"

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      sidebarOffset: null,
    }
  },
  computed: {
    ...mapState({
      sidebarStatus: state => state.sidebar.sidebarStatus,
    }),
  },
  watch: {
    sidebarStatus(val) {
      if (window.innerWidth <= 900) {
        switch (val) {
          case true:
            disableBodyScroll()
            break
          case false:
            enableBodyScroll()
            break
        }
      }
    },
  },
  mounted() {
    if (window.innerWidth > 900) {
      this.sidebarOpen()
    }
    this.sidebarOffset = `padding-top: ${this.$refs.headerComponent.$el.clientHeight}px`
  },
  methods: {
    ...mapMutations({
      sidebarToggle: "sidebar/sidebarToggle",
      sidebarOpen: "sidebar/sidebarOpen",
    }),
  },
}
</script>

<style>
:root {
  --text: #202325;
  --context: #f03030;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1);
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 100px;
  background: rgba(148, 148, 148, 0.4);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(148, 148, 148, 0.6);
}

body {
  background: #f5f6f8;
  font-family: "Roboto", Arial, sans-serif;
  color: var(--text);
}
.row {
  margin-right: 0;
  margin-left: 0;
}
/* Transition for shiftBar */
#content {
  transition: padding-left 0.3s ease-in-out;
}
.contentShift {
  padding-left: 322px !important;
}

/* Transition for SideBar */
.hide {
  transform: translateX(-100%);
}

/* Transition for area-nonaside */
.opacityHide-enter-active,
.opacityHide-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.opacityHide-enter,
.opacityHide-leave-to {
  opacity: 0;
}

@media screen and (max-width: 900px) {
  .contentShift {
    padding-left: 0 !important;
  }
  .area-nonaside {
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
    /* backdrop-filter: saturate(180%) blur(5px); */
    z-index: 1;
  }
}
</style>
