<template>
  <div>
    <Header ref="headerComponent" />
    <section :style="OffsetMain" class="d-flex">
      <transition name="moveLeftShift">
        <div :class="{ hide: !$store.state.sidebarStatus }" class="contentShift"></div>
      </transition>
      <nuxt />
    </section>
  </div>
</template>

<script>
import Header from "~/components/routinely/Header"
export default {
  components: {
    Header,
  },
  data() {
    return {
      OffsetMain: null,
    }
  },
  mounted() {
    this.OffsetMain = `padding-top: ${this.$refs.headerComponent.$refs.header.clientHeight}px`
  },
}
</script>

<style>
:root {
  --text: #202325;
  --context: #f03030;
}
html {
  font-family: "Roboto", Arial, sans-serif;
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
  background: #ffffff;
  font-family: "Roboto", Arial, sans-serif;
  color: var(--text);
  height: 2000px;
}
.contentShift {
  min-width: 316px;
  transition: min-width 0.3s ease-in-out;
}
.contentShift.hide {
  min-width: 0;
}

@media screen and (max-width: 900px) {
  .contentShift {
    display: none;
  }
}
</style>
