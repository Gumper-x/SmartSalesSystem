<template>
  <div class="container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="border border-primary">1 of 3</b-col>
        <b-col class="border border-warning">2 of 3</b-col>
        <b-col class="border border-danger">3 of 3</b-col>
      </b-row>
      <b-row>
        <b-col class="border border-primary">1 of 3</b-col>
        <b-col class="border border-warning">2 of 3</b-col>
        <b-col class="border border-danger">3 of 3</b-col>
      </b-row>
    </b-container>
    <b-button variant="success" @click="test">CLICK</b-button> <span style="color: white;"></span>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="pade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      show: true,
    }
  },
  methods: {
    test() {
      this.$store.commit("sidebarToggle")
    },
  },
}
</script>

<style lang="scss">
.pade-enter-active,
.pade-leave-active {
  transition: transform 5.5s;
}
.pade-enter, .pade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
</style>
