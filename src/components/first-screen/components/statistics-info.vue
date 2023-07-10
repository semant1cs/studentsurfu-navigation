<script setup>

</script>

<template>
  <div class="window-info">
    <li class="blocks-information-university">
      <ul class="block-info">
        <p class="number-info">10</p>
        <p class="title-block-info">МЕСТО</p>
        <p class="additional-block-info">среди лучших университетов России</p>
      </ul>
      <ul class="block-info">
        <p class="number-info">10</p>
        <p class="title-block-info">МЕСТО</p>
        <p class="additional-block-info">среди лучших университетов России</p>
      </ul>
      <ul class="block-info">
        <p class="number-info">10</p>
        <p class="title-block-info">МЕСТО</p>
        <p class="additional-block-info">среди лучших университетов России</p>
      </ul>
      <ul class="block-info">
        <p class="number-info">10</p>
        <p class="title-block-info">МЕСТО</p>
        <p class="additional-block-info">среди лучших университетов России</p>
      </ul>
    </li>


  </div>
</template>

<style scoped>
.window-info {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  width: 1100px;
  height: 300px;
  margin-top: 590px;
  background-color: #F7F7F7;
}

.blocks-information-university {
  display: flex;
  text-decoration: none;
  margin-left: 70px;
}

.block-info {
  margin-top: 57px;
  text-align: center;
  margin-right: 30px;
}

.number-info {
  color: #F7654A;
  font-size: 72px;
}

.title-block-info {
  font-size: 32px;
}

.additional-block-info {
  color: gray;
  font-size: 18px;
}

</style>
