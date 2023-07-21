<template>
  <div class="campus-page">
    <blocks-list-page title="Кампус" :posts=this.campus_buildings_articles />
  </div>
</template>

<script>
import BlocksListPage from "@/components/UI/blocks-list-page.vue";
import axios from "axios";

export default {
  components: {BlocksListPage},
  setup() {
    return {}
  },
  data() {
    return {
      campus_buildings_articles: [],
    }
  },
  methods: {
    async fetchCampusBuildingArticles() {
      const response = await axios.get("http://localhost:3000/campus_buildings_articles")
      this.campus_buildings_articles = response.data
    }
  },
  mounted() {
    this.fetchCampusBuildingArticles()
  }
}
</script>

<style scoped>
.campus-page {
  margin-bottom: 130px;
}
</style>
