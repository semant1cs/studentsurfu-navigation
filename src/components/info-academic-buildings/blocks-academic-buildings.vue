<script setup>


import BlockAcademicBuilding from "@/components/info-academic-buildings/block-academic-building.vue";
</script>

<template>
  <li class="academic-building">
    <block-academic-building/>
  </li>
</template>

<style scoped>
.academic-building {
  margin-top: 66px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  align-self: center;
  margin-left: auto;
  margin-right: auto;

  height: 530px;
  width: 1110px;
}
</style>
