<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
  background-color: #fff;
  box-shadow: rgba(63, 63, 68, 0.05) 0px 0px 0px 1px,
    rgba(63, 63, 68, 0.15) 0px 1px 3px 0px;
  border-radius: 4px;
}
</style>
