<script>
import axios from "axios";
import PostItem from "@/components/news-urfu/post-item.vue"

export default {
  components: {PostItem},
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3');
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}


</script>

<template>
  <h2 class="title-news">НОВОСТИ УРАЛЬСКОГО <br> ФЕДЕРАЛЬНОГО</h2>
  <li class="posts-block">
    <post-item v-for="post in this.posts" :key="post.id" :post="post"/>
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
