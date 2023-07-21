<script>
import axios from "axios";

export default {
  data() {
    return {
      academic_building_articles: []
    }
  },
  methods: {
    async fetchAcademicBuildingArticles() {
      const response = await axios.get("http://localhost:3000/academic_building_articles")
      this.academic_building_articles = response.data;
    }
  },
  mounted() {
    this.fetchAcademicBuildingArticles()
  }
}

</script>

<template>
  <blocks-list-page title="Информация об учебных корпусах" :posts="this.academic_building_articles"/>
  <div class="academic_buildings_page"></div>
</template>

<style scoped>
.academic_buildings_page {
  margin-bottom: 120px;
}
</style>
