<template>
  <main class="main" :class="{isOpen: isMenuOpen}">
    <Header/>
    <slot></slot>
  </main>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters.isMenuOpen
    }
  }
}
</script>

<style lang="scss">
.main {
  width: 100%;
  padding-left: 0px;

  &.isOpen {
    padding-left: 220px;
  }
}
</style>
