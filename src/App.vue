<template>
  <first-screen/>
  <news-urfu/>
  <history-urfu/>
  <info-academic-buildings/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
}

</style>
<script>
import FirstScreen from "@/components/first-screen/first-screen.vue";
import NewsUrfu from "@/components/news-urfu/news-urfu.vue";
import HistoryUrfu from "@/components/history-urfu/history-urfu.vue";
import InfoAcademicBuildings from "@/components/info-academic-buildings/info-academic-buildings.vue";


export default {
  components: {InfoAcademicBuildings, HistoryUrfu, NewsUrfu, FirstScreen},
}

</script>
