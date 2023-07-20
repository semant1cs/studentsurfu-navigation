<template>
  <first-screen/>
  <news-urfu/>
  <history-urfu/>
  <academic-buildings/>
  <campus-buildings/>
  <custom-footer/>
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
import HistoryUrfu from "@/components/history-urfu.vue";
import AcademicBuildings from "@/components/academic-buildings.vue";
import CampusBuildings from "@/components/campus-buildings.vue";
import CustomFooter from "@/components/custom-footer.vue";


export default {
  components: {
    CampusBuildings, AcademicBuildings, HistoryUrfu, CustomFooter, NewsUrfu, FirstScreen
  },
}

</script>
