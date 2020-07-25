<template>
  <div class="nomenclature">
    <b-table striped hover :items="nomenclatureList">1</b-table>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { rez } = await app.$axios.$get("http://134.249.225.93/raz/hs/api/tovar/token?alllist=true")
    return { nomenclatureList: rez }
  },
}
</script>

<style lang="scss" scoped>
.nomenclature {
  margin: 0 auto;
}
</style>
