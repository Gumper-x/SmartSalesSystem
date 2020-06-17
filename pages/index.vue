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
    <transition name="showd">
      <div v-show="show" class="chil">
        <ul>
          <li>
            <nuxt-link ref="title" to="/">D</nuxt-link>
            <nuxt-link ref="title" to="/">D</nuxt-link>
            <nuxt-link ref="title" to="/">D</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    test() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss">
.child {
  height: 100%;
  overflow: hidden;
  background: red;
}
.showd-enter-active,
.showd-leave-active {
  transition: all 0.3s ease-in-out;
}
.showd-enter,
.showd-leave-to {
  height: 0;
}
</style>
