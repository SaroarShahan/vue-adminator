<template>
  <div class="header py-3 mb-3">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-3">
          <div class="hamburger" @click="hanldeSidebar">
            <i class="fa fa-exchange" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hanldeSidebar() {
      this.$store.dispatch('hanldeMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(#000, 0.1);
}
.hamburger {
  display: inline-block;
  cursor: pointer;
}
</style>
