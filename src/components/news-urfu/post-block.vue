<template>
  <div v-for="post in this.postsUrFU" :key="post.id">
    <ul class="post-block">
      <img class="photo-post" :src=post.url_photo alt="Фотография публикации">
      <div class="orange-line"></div>
      <h2 class="title-post">{{ post.text.substr(0, 100) }}...</h2>
      <p class="text-post"> {{ post.text.substr(100, 230) }}</p>
    </ul>
  </div>

</template>

<script>
export default {
  data() {
    return {
      postsUrFU: {},
    }
  },
  mounted() {
    fetch('http://26.223.83.180:8000/API/news/')
        .then((response) => response.json())
        .then((data) => this.postsUrFU = data);
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
