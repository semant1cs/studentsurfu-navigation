<script setup>

import HeaderTitle from "@/components/utils-components/header-title.vue";
import BlocksAcademicBuildings from "@/components/info-academic-buildings/blocks-academic-buildings.vue";
</script>

<template>
  <div class="info-academic-buildings">
    <header-title>
      <template #title>История УрФУ</template>
    </header-title>
  </div>
  <blocks-academic-buildings/>
</template>

<style scoped>
.info-academic-buildings {
  margin-top: 85px;
}
</style>
