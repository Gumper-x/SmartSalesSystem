<template>
  <aside class="h-100" :style="offset">
    <section class="navigation">
      <div class="header-aside d-flex justify-content-start pt-1 pb-1 pr-2 pl-2">
        <b-button size="sm" variant="light" class="mr-1" ref="headerButton">
          <b-link to="/" class="icon-home"></b-link>
        </b-button>
        <b-button size="sm" variant="light" @click="closeAllList">
          <svg width="15" height="15" viewBox="0 0 259 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="64" y="5" width="190" height="190" rx="15" fill="#f8f9fb" stroke="currentColor" stroke-width="10" />
            <rect x="5" y="65" width="190" height="190" rx="15" fill="#f8f9fb" stroke="currentColor" stroke-width="10" />
            <rect x="40" y="150" width="120" height="30" rx="10" fill="currentColor" />
            <rect
              x="85"
              y="105"
              width="30"
              height="120"
              rx="10"
              fill="currentColor"
              :style="{
                display:
                  menuMap.listGoodsAndServises.active ||
                  menuMap.listCustomersAndSuppliers.active ||
                  menuMap.listBudget.active ||
                  menuMap.listSales.active ||
                  menuMap.listPurchase.active ||
                  menuMap.listPurse.active ||
                  menuMap.listStore.active ||
                  menuMap.listReports.active ||
                  menuMap.listControl.active
                    ? 'none'
                    : 'inline',
              }"
            />
          </svg>
        </b-button>
      </div>
      <nav class="p-2">
        <ul>
          <li v-for="(elem, Index) in menuMap" :key="Index" :class="{ active: elem.active }" class="droplist" @click="elem.active = !elem.active">
            <div class="title">
              <span class="d-flex align-items-center" :class="elem.iconClass">{{ elem.title }}</span>
            </div>
            <transition name="slideList">
              <div class="slide list" v-show="elem.active">
                <ul>
                  <li v-for="(elemChild, index) in elem.childs" :key="index">
                    <nuxt-link ref="title" :to="elemChild.url">{{ elemChild.name }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
        <b-link to="/" class="d-flex align-items-center">
          <svg
            class="bi bi-info-circle-fill mr-1"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
          Помощь
        </b-link>
        <b-link to="/auth/login" exact-active-class>Login</b-link>
        <b-link to="/auth/registration" exact-active-class>Registeation</b-link>
      </nav>
    </section>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    offset: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      show: true,
      menuMap: {
        listGoodsAndServises: {
          title: "Товары и услуги",
          active: false,
          iconClass: "icon-GoodsAndServises",
          childs: [
            { name: "Номенклатура", url: "/" },
            { name: "Группы номенклатуры", url: "/" },
          ],
        },
        listCustomersAndSuppliers: {
          title: "Клиенты и поставщики",
          active: false,
          iconClass: "icon-CustomersAndSuppliers",
          childs: [
            { name: "Контрагенты", url: "/" },
            { name: "Группы контрагентов", url: "/" },
          ],
        },
        listBudget: {
          title: "Виды доходов и затрат",
          active: false,
          iconClass: "icon-Budget",
          childs: [
            { name: "Доходы", url: "/" },
            { name: "Затраты", url: "/" },
          ],
        },
        listSales: {
          title: "Продажи",
          active: false,
          iconClass: "icon-Budget",
          childs: [
            { name: "Заказ покупателя", url: "/" },
            { name: "Продажа товара/услуги", url: "/" },
            { name: "Возврат товара", url: "/" },
            { name: "Доходы", url: "/" },
          ],
        },
        listPurchase: {
          title: "Закупки",
          active: false,
          iconClass: "icon-Budget",
          childs: [
            { name: "Приход товара", url: "/" },
            { name: "Возврат товара поставщику", url: "/" },
            { name: "Расходы", url: "/" },
          ],
        },
        listPurse: {
          title: "Деньги",
          active: false,
          iconClass: "icon-Budget",
          childs: [
            { name: "Касса и банковские счета", url: "/" },
            { name: "Оплата", url: "/" },
            { name: "Денежная операция", url: "/" },
          ],
        },
        listStore: {
          title: "Склад",
          active: false,
          iconClass: "icon-Budget",
          childs: [
            { name: "Склад/ места хранения", url: "/" },
            { name: "Оприходование товара", url: "/" },
            { name: "Перемещения товара", url: "/" },
            { name: "Списание товара", url: "/" },
            { name: "Сборка товара", url: "/" },
          ],
        },
        listReports: {
          title: "Отчеты",
          active: false,
          iconClass: "icon-Reports",
          childs: [
            { name: "Остатки товаров", url: "/" },
            { name: "Движение товаров", url: "/" },
            { name: "Продажи товаров", url: "/" },
            { name: "Отчет по заказам", url: "/" },
            { name: "Закупки товаров", url: "/" },
            { name: "Движение денежных средств", url: "/" },
            { name: "Расчеты с покупателями", url: "/" },
            { name: "Задолженность покупателей", url: "/" },
            { name: "Расчеты с поставщиками", url: "/" },
            { name: "Взаиморасчеты с контрагентами", url: "/" },
            { name: "Доходы и расходы", url: "/" },
            { name: "Валовая прибыль", url: "/" },
          ],
        },
        listControl: {
          title: "Администрирование",
          active: false,
          iconClass: "icon-Reports",
          childs: [
            { name: "Пользователи", url: "/" },
            { name: "Отчет по пользователю", url: "/" },
            { name: "HelpDesk", url: "/" },
          ],
        },
      },
    }
  },
  mounted() {
    if (window.innerWidth <= 900) {
      this.$refs.headerButton.addEventListener("click", this.closeSiderbar)
      for (const link of this.$refs.title) {
        link.$el.addEventListener("click", this.closeSiderbar)
      }
    }
  },
  beforeDestroy() {
    for (const link of this.$refs.title) {
      link.$el.removeEventListener("click", this.closeSiderbar)
    }
  },
  methods: {
    closeAllList() {
      if (
        this.menuMap.listGoodsAndServises.active ||
        this.menuMap.listCustomersAndSuppliers.active ||
        this.menuMap.listBudget.active ||
        this.menuMap.listSales.active ||
        this.menuMap.listPurchase.active ||
        this.menuMap.listPurse.active ||
        this.menuMap.listStore.active ||
        this.menuMap.listReports.active ||
        this.menuMap.listControl.active
      ) {
        for (const key in this.menuMap) {
          this.menuMap[key].active = false
        }
      } else {
        for (const key in this.menuMap) {
          this.menuMap[key].active = true
        }
      }
    },
    closeSiderbar() {
      this.$store.commit("sidebarToggle")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/init-icon-header";
$aside: rgba(244, 245, 246, 0.8);
aside {
  position: fixed;
  background: $aside;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: 0.2s ease-in-out;
  .navigation {
    overflow-y: auto;
    height: 100%;
    .header-aside {
      position: sticky;
      top: 0;
      background: $aside;
      backdrop-filter: saturate(180%) blur(20px);
      z-index: 10;
      .icon-home {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: url("/icon/home.svg") no-repeat center;
        background-size: 20px;
      }
    }
    nav {
      ul {
        padding: 0;
        font-size: 18px;
        list-style: none;
        li {
          width: 300px;
          user-select: none;
          word-wrap: normal;
          cursor: pointer;
          border-bottom: 1px solid #c9c9c9;
          transition: 0.1s;
          margin-bottom: 4px;
          a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 4px;
            padding-top: 0;
            color: var(--text);
            text-decoration: none;
            &:hover {
              color: var(--context);
            }
          }
          &.droplist {
            padding: 4px;
            padding-top: 0;
            div.title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 2px 0;
              &::after {
                content: "";
                display: block;
                background: url("/icon/next.svg") no-repeat center;
                width: 15px;
                height: 13px;
                transition: 0.1s ease-in-out;
              }
            }
            &.active div.title::after {
              transform: rotate(90deg);
            }
            .list {
              margin-top: 3px;
              margin-left: 3px;

              li:last-child {
                border-bottom: none;
                margin-bottom: 0;
              }
              a {
                font-size: 16px;
              }
            }
          }
          &:hover {
            color: var(--context);
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
.slide {
  overflow: hidden;
  max-height: 400px;
}
.slideList-enter-active,
.slideList-leave-active {
  transition: max-height 0.3s ease-in-out;
}
.slideList-enter,
.slideList-leave-to {
  max-height: 0;
}
</style>
