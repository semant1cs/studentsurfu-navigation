<script setup>

import BlockInfo from "@/components/first-screen/components/block-info.vue";
</script>

<template>
  <div class="window-info">
    <li class="blocks-information-university">
      <block-info/>
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
  margin-left: 130px;
}
</style>
