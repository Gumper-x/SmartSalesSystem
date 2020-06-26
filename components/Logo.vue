<template>
  <!-- Create cube with 3 sides and animate in "SmartSalesSystem" -->
  <h1 class="logo pl-1 pr-1"><nuxt-link to="/" class="text-reset text-decoration-none">SmartSalesSystem</nuxt-link></h1>
</template>

<script>
export default { name: "Logo" }
</script>

<style lang="scss" scoped>
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
</style>
