<template>
<!--  <div v-for="post in postsUrFU" :key="post.id" class="post-block">-->
<!--    <div v-bind:id=post.ref></div>-->
<!--  </div>-->


      <div v-for="post in posts" :key="post.id">
        <ul class="post-block">
          <img class="photo-post" v-bind:src=post.image_source v-bind:alt=post.alternative_text_photo>
          <div class="orange-line"></div>
          <h2 class="title-post">{{ post.title_post }}</h2>
          <p class="text-post"> {{ post.text_post }}</p>
        </ul>
      </div>
</template>

<script>
//import {postsVK} from "../../../api-vk";

export default {
  data() {
    return {
      //postsUrFU: postsVK,
      posts: [
        {
          id: 1,
          image_source: "https://i.imgur.com/17IqV2P.png",
          alternative_text_photo: "Photo Post 1",
          title_post: "Заголовок поста 1",
          text_post: "Текст поста 1"
        },
        {
          id: 2,
          image_source: "https://i.imgur.com/17IqV2P.png",
          alternative_text_photo: "Photo Post 2",
          title_post: "Заголовок поста 2",
          text_post: "Текст поста 2"
        },
        {
          id: 3,
          image_source: "https://i.imgur.com/17IqV2P.png",
          alternative_text_photo: "Photo Post 3",
          title_post: "Заголовок поста 3",
          text_post: "Текст поста 3"
        }
      ]
    }
  }
}


</script>


<style scoped>

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
