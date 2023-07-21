<template>
  <div>
    <ul class="post-block">
      <img :src="post.url" :alt="post.title" class="photo-post">
      <div class="orange-line"></div>
      <h2 class="title-post">{{ post.title.substr(0, 100) }}...</h2>
      <p class="text-post"> {{ post.title.substr(100, 230) }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.photo-post {
  width: 350px;
  height: 380px;
}

.orange-line {
  width: 55px;
  height: 6px;
  background-color: #F7654A;
  margin-top: 45px;
}

.post-block {
  width: 350px;
  height: 580px;
  margin-left: 30px;
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
