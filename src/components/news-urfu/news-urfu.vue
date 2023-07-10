<script setup>

</script>

<template>
  <h2 class="title-news">НОВОСТИ УРАЛЬСКОГО <br> ФЕДЕРАЛЬНОГО</h2>
  <li class="posts-block">
    <ul class="post-block">
      <img class="photo-post" src="../../assets/photo_post.png" alt="Photo Post">
      <div class="orange-line"></div>
      <h2 class="title-post">Пост ВК</h2>
      <p class="text-post">Текст поста</p>
    </ul>

    <ul class="post-block">
      <img class="photo-post" src="../../assets/photo_post.png" alt="Photo Post">
      <div class="orange-line"></div>
      <h2 class="title-post">Пост ВК</h2>
      <p class="text-post">Текст поста</p>
    </ul>

    <ul class="post-block">
      <img class="photo-post" src="../../assets/photo_post.png" alt="Photo Post">
      <div class="orange-line"></div>
      <h2 class="title-post">Пост ВК</h2>
      <p class="text-post">Текст поста</p>
    </ul>
  </li>
</template>

<style scoped>

.title-news {
  text-align: center;
  color: #404149;
  font-size: 36px;
  margin-top: 200px;
}

.orange-line {
  width: 55px;
  height: 6px;
  background-color: #F7654A;
  margin-top: 45px;
}

.posts-block {
  display: flex;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  width: 1110px;

  margin-top: 13px;
}

.post-block {
  margin-right: 30px;
}

.title-post {
  margin-top: 15px;
  font-size: 24px;
  color: #404149;
}

.text-post {
  margin-top: 20px;
  font-size: 16px;
  color: #999999;
}

</style>
