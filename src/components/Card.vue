<template>
  <div class="cards d-flex align-items-center justify-content-between">
    <h6 class="cards__title">
      <slot name="title"></slot>
    </h6>
    <span class="cards__percentage">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cards {
  padding: 15px;
  background-color: #fff;
  box-shadow: rgba(63, 63, 68, 0.05) 0px 0px 0px 1px,
    rgba(63, 63, 68, 0.15) 0px 1px 3px 0px;
  border-radius: 4px;

  &__title {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0px;
    color: rgb(114, 119, 122);
  }

  &__percentage {
    font-size: 14px;
    background-color: rgb(232, 245, 233);
    color: rgb(76, 175, 80);
    padding: 5px 15px;
    border-radius: 25px;
  }
}
</style>
