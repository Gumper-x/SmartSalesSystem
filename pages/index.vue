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
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  methods: {
    test() {
      this.$store.commit("sidebarToggle")
    },
  },
}
</script>

<style lang="scss"></style>
