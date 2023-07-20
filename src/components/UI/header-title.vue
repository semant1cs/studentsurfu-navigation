<script>

export default {
  name: 'header-title',
}
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
  width: auto;
  height: 181px;
  margin: 0;
  padding: 0;
}

.title-text {
  margin-left: 400px;
  width: auto;
  height: 88px;
  vertical-align: center;
  margin-top: 25px;

  color: white;
  font-size: 48px;
}
</style>
