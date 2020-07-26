<template>
  <main class="nomenclature">
    <!-- <b-row>
      <b-col><b-button variant="primary" size="sm">+Создать</b-button></b-col>
      <b-col><AppInput v-model="dd" type="text" placeholder="Поиск (больше 3х символов)" maxlength="50"/></b-col>
      <b-col><b-button variant="primary" size="sm">Найти</b-button></b-col>
    </b-row> -->
    <section class="nomenclature__table">
      <b-row class="nomenclature__table__head">
        <b-col cols="6">Наименование</b-col>
        <b-col>Остаток</b-col>
        <b-col>На сумму</b-col>
        <b-col>Цена розн.</b-col>
        <b-col>Описание</b-col>
      </b-row>
      <div class="nomenclature__table__body">
        <b-row v-for="(data, index) in testData" :key="index" class="nomenclature__table__body__row">
          <b-col cols="6">{{ data.name }}</b-col>
          <b-col>{{ data.balanceq }}</b-col>
          <b-col>{{ data.balances }}</b-col>
          <b-col>{{ data.price }}</b-col>
          <b-col>{{ data.group }}</b-col>
        </b-row>
      </div>
    </section>
  </main>
</template>

<script>
import AppInput from "@/components/ui/AppInput"
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppInput,
  },
  data() {
    return {
      dd: "",
      testData: [
        {
          group: true,
          name: "готовая продукция",
          id: "31fed607-4ea1-11ea-80ca-82177756dd21",
          del: false,
          balanceq: 0,
          balances: 0,
          price: 0,
        },
        {
          group: false,
          name: "готовая продукция",
          id: "31fed607-4ea1-11ea-80ca-82177756dd21",
          del: false,
          balanceq: 0,
          balances: 0,
          price: 0,
        },
        {
          group: true,
          name: "готовая продукция",
          id: "31fed607-4ea1-11ea-80ca-82177756dd21",
          del: false,
          balanceq: 0,
          balances: 0,
          price: 0,
        },
        {
          group: true,
          name: "готовая продукция",
          id: "31fed607-4ea1-11ea-80ca-82177756dd21",
          del: false,
          balanceq: 0,
          balances: 0,
          price: 0,
        },
        {
          group: true,
          name: "готовая продукция",
          id: "31fed607-4ea1-11ea-80ca-82177756dd21",
          del: false,
          balanceq: 0,
          balances: 0,
          price: 0,
        },
      ],
    }
  },
  // async asyncData({ app }) {
  //   const { rez } = await app.$axios.$get("http://134.249.225.93/raz/hs/api/tovar/token?alllist=true")
  //   return { nomenclatureList: rez }
  // },
}
</script>

<style lang="scss" scoped>
.nomenclature {
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
  .nomenclature__table {
    margin-right: 1px;
    .nomenclature__table__head {
      background: #f9fafa;
      div {
        display: flex;
        justify-content: center;
        border: 1px solid #d4d9dc;
        margin-left: -1px;
        padding: 2px 5px;
      }
    }
    .nomenclature__table__body {
      background: #f9fafa;
      .nomenclature__table__body__row div {
        border: 1px solid #d4d9dc;
        margin-top: -1px;
        margin-left: -1px;
        padding: 2px 5px;
      }
    }
  }
  // .row > [class^="col-"],
  // .row > [class^="col"] {
  //   border: 1px solid gray;
  // }
}
</style>
