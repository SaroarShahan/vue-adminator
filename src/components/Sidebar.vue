<template>
  <div class="sidebar fixed-top" v-bind:class="{ isOpen: isMenuOpen}">
    <h2>sidebr</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters.isMenuOpen
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  transform: translateX(-100%);
  background-color: #222c3c;

  &.isOpen {
    transform: translateX(0);
  }
}
</style>
