<template>
  <main class="nomenclature">
    <!-- <b-row>
      <b-col><b-button variant="primary" size="sm">+Создать</b-button></b-col>
      <b-col><AppInput v-model="dd" type="text" placeholder="Поиск (больше 3х символов)" maxlength="50"/></b-col>
      <b-col><b-button variant="primary" size="sm">Найти</b-button></b-col>
    </b-row> -->
    <section class="nomenclature__table">
      <b-row class="nomenclature__table-head">
        <b-col cols="6">Наименование</b-col>
        <b-col>Остаток</b-col>
        <b-col>На сумму</b-col>
        <b-col>Цена розн.</b-col>
        <b-col>Описание</b-col>
      </b-row>
      <div class="nomenclature__table-body">
        <b-row v-for="(nomElem, index) in nomenclatureList" :key="index" class="nomenclature__table-body-row">
          <!-- Nomenclature -->
          <div v-if="nomElem.group" :class="{ 'folder-active': nomElem.active }" class="nomenclature__table-body-row-folder d-flex w-100">
            <b-col cols="12" @click="nomenclatureOpenFolder(nomElem.id, index, nomElem.active)">{{ nomElem.name }}</b-col>
          </div>
          <div v-else class="nomenclature__table-body-row-element d-flex w-100">
            <b-col cols="6">{{ nomElem.name }}</b-col>
            <b-col class="col-number">{{ nomElem.balanceq }}</b-col>
            <b-col class="col-number">{{ nomElem.balances }}</b-col>
            <b-col class="col-number">{{ nomElem.price }}</b-col>
            <b-col>{{ nomElem.id }}</b-col>
          </div>
          <transition name="folderToggle">
            <div v-show="nomElem.active" class="w-100" :style="{ '--folder-height': nomElem.lengthChild * 26 + 'px' }">
              <div
                v-for="(nomElemFolder, indexChild) in nomElem.child"
                :key="indexChild"
                class="nomenclature__table-body-row-element nomenclature__table-body-row-fodler-element d-flex w-100"
              >
                <b-col cols="6">{{ nomElemFolder.name }}</b-col>
                <b-col class="col-number">{{ nomElemFolder.balanceq }}</b-col>
                <b-col class="col-number">{{ nomElemFolder.balances }}</b-col>
                <b-col class="col-number">{{ nomElemFolder.price }}</b-col>
                <b-col>{{ nomElemFolder.name }}</b-col>
              </div>
            </div>
          </transition>
        </b-row>
      </div>
    </section>
  </main>
</template>

<script>
import Vue from "vue"
import AppInput from "@/components/ui/AppInput"
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppInput,
  },
  async asyncData({ app }) {
    const { rez } = await app.$axios.$get("http://134.249.225.93/raz/hs/api/tovar/token?alllist=true")
    return { nomenclatureList: rez }
  },
  data() {
    return {
      searchValue: "",
    }
  },
  methods: {
    async nomenclatureOpenFolder(nomID, indexFolder, initialized) {
      if (initialized !== undefined) {
        this.nomenclatureList[indexFolder].active = !this.nomenclatureList[indexFolder].active
      } else {
        const { rez } = await this.$axios.$get(
          `http://134.249.225.93/raz/hs/api/tovar/token?alllist=true&idgroup=31fed607-4ea1-11ea-80ca-82177756dd21`,
        )
        this.$set(this.nomenclatureList[indexFolder], "lengthChild", rez.length)
        this.$set(this.nomenclatureList[indexFolder], "child", rez)
        this.$set(this.nomenclatureList[indexFolder], "active", true)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nomenclature {
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  font-size: 14px;
  .nomenclature__table {
    margin: 0 5px;
    .nomenclature__table-head {
      background: #f9fafa;
      div {
        text-align: center;
        border: 1px solid #d4d9dc;
        border-right: none;
        padding: 2px 5px;
        &:last-child {
          border-right: 1px solid #d4d9dc;
        }
      }
    }
    .nomenclature__table-body {
      background: #f9fafa;
      .nomenclature__table-body-row {
        transition: box-shadow 0.2s ease;
        &:hover {
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
        }
        .nomenclature__table-body-row-folder > [class^="col-"],
        .nomenclature__table-body-row-folder > [class^="col"] {
          display: flex;
          align-items: center;
          border: 1px solid #d4d9dc;
          margin-top: -1px;
          padding: 2px 5px;
          cursor: pointer;
          &::before {
            content: "";
            display: block;
            background: url("/icon/table/folder-close.svg") no-repeat center/100%;
            width: 28px;
            height: 24px;
            margin-right: 0.2rem;
          }
        }
        .nomenclature__table-body-row-folder.folder-active > [class^="col-"],
        .nomenclature__table-body-row-folder.folder-active > [class^="col"] {
          &::before {
            content: "";
            display: block;
            background: url("/icon/table/folder-open.svg") no-repeat center/100%;
            width: 28px;
            height: 24px;
            margin-right: 0.2rem;
          }
        }
        .nomenclature__table-body-row-element > [class^="col-"],
        .nomenclature__table-body-row-element > [class^="col"] {
          border: 1px solid #d4d9dc;
          border-right: none;
          margin-top: -1px;
          padding: 2px 5px;
          &:last-child {
            border-right: 1px solid #d4d9dc;
          }
        }
        .nomenclature__table-body-row-fodler-element > [class^="col-"]:first-child::before,
        .nomenclature__table-body-row-fodler-element > [class^="col"]:first-child::before {
          content: "";
          display: inline-block;
          background: rgba(255, 201, 40, 0.3);
          border-radius: 50%;
          width: 5px;
          height: 5px;
          margin-right: 0.3rem;
        }
        .col-number {
          text-align: right;
        }
      }
      .folderToggle-enter-active,
      .folderToggle-leave-active {
        max-height: var(--folder-height);
        overflow: hidden;
        transition: max-height 0.3s ease;
      }
      .folderToggle-enter,
      .folderToggle-leave-to {
        max-height: 0;
      }
    }
  }
}
</style>
