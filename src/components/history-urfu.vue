<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      history_articles: []
    }
  },
  methods: {
    async fetchHistoryArticles() {
      const response = await axios.get("http://localhost:3000/history_articles")
      this.history_articles = response.data
    }
  },
  mounted() {
    this.fetchHistoryArticles()
  }
}

</script>

<template>
  <blocks-list-page
      title="История УрФУ"
      small_title="Как зарождался Уральский Федеральный?"
      :posts="this.history_articles"
      :required-title-in-preview="true"
  />
  <div class="history_urfu_page"></div>
</template>

<style scoped>
.history_urfu_page {
  margin-bottom: 50px;
}
</style>
