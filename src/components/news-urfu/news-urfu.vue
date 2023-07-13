<script setup>

import PostBlock from "@/components/news-urfu/post-block.vue";
</script>

<template>
  <h2 class="title-news">НОВОСТИ УРАЛЬСКОГО <br> ФЕДЕРАЛЬНОГО</h2>
  <li class="posts-block">
    <post-block/>
  </li>
</template>

<style scoped>

.title-news {
  text-align: center;
  color: #404149;
  font-size: 36px;
  margin-top: 200px;
}

.posts-block {
  display: flex;
  align-self: center;
  width: 1110px;

  margin: 13px auto 200px;
}

</style>
