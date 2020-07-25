<template>
  <div class="app-button__wrapper">
    <b-form-input v-bind="$attrs" :value="value" trim class="pr-4" @input="val => $emit('input', val)"></b-form-input>
    <button type="button" class="clear d-flex">
      <transition name="fade">
        <svg v-show="value !== ''" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg" @click="$emit('input', '')">
          <path
            d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
          />
        </svg>
      </transition>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.app-button__wrapper {
  position: relative;
  button.clear {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    border: none;
    outline: none;
    padding: 0;
    background: none;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: #3488e3;
        transition: fill 0.1s;
      }
    }
    &:hover {
      svg path {
        fill: #237ad8;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
</style>
