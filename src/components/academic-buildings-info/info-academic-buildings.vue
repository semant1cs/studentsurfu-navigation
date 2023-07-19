<script setup>

import HeaderTitle from "@/components/UI/header-title.vue";
import BlocksAcademicBuildings from "@/components/academic-buildings-info/blocks-academic-buildings.vue";
</script>

<template>
  <header-title class="header"><template #title>Информация об учебных корпусах</template></header-title>
  <blocks-academic-buildings/>
</template>

<style scoped>
.header {
  margin-top: 40px;
}
</style>
