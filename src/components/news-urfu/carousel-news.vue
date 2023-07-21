<template>
  <h2 class="title-news">НОВОСТИ УРАЛЬСКОГО <br> ФЕДЕРАЛЬНОГО</h2>
  <div class="wrapper">
    <li class="posts-block" :style="{ 'margin-left': '-' + (38*this.currentIndexPost) + '%'}">
      <carousel-item v-for="post in this.posts" :key="post.id" :post="post"/>
    </li>
    {{ this.unreadPosts + " непрочитанных постов осталось" }}
    <button @click="slideToPreviousPost">Предыдущий</button>
    <button @click="slideToNextPost">Следующий</button>
  </div>
</template>

<script>
import CarouselItem from "@/components/news-urfu/carousel-item.vue";
import axios from "axios";

export default {
  components: {CarouselItem},
  data() {
    return {
      posts: [],
      currentIndexPost: 0,
      unreadPosts: 0,
      maximumViewedPosts: 3,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5');
        this.posts = response.data;
        if (this.posts.length >= this.maximumViewedPosts) {
          this.unreadPosts = this.posts.length - this.maximumViewedPosts;
        }
      } catch (e) {
        alert('Ошибка')
      }
    },
    slideToNextPost() {
      if (this.currentIndexPost < this.posts.length - this.maximumViewedPosts) {
        this.unreadPosts--;
        this.currentIndexPost++
      }
    },
    slideToPreviousPost() {
      if (this.currentIndexPost > 0) {
        this.currentIndexPost--
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>

<style scoped>
.title-news {
  text-align: center;
  color: #404149;
  font-size: 36px;
  margin-top: 200px;
}

.wrapper {
  overflow: hidden;
  margin: 0 auto;
  max-width: 1140px;
}

.posts-block {
  display: flex;
  margin: 30px auto 200px;
  transition: all ease .5s;
}
</style>
