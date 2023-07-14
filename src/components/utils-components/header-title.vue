<script setup>


</script>

<template>
  <div class="colored_field">
    <div class="invisible_block">⠀</div>
    <h3 class="title-text">
      <slot name="title"></slot>
    </h3>
  </div>
</template>

<style scoped>
.colored_field {
  background-color: #F7654A;
  width: 1920px;
  height: 181px;
  margin: 0;
  padding: 0;
}

.title-text {
  margin-left: 400px;
  width: 320px;
  height: 88px;
  vertical-align: center;
  margin-top: 25px;

  color: white;
  font-size: 48px;
}
</style>
