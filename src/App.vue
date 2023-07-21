<template>
  <first-screen/>
  <carousel-news/>
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
import HistoryUrfu from "@/components/history-urfu.vue";
import AcademicBuildings from "@/components/academic-buildings.vue";
import CampusBuildings from "@/components/campus-buildings.vue";
import CustomFooter from "@/components/custom-footer.vue";
import CarouselNews from "@/components/news-urfu/carousel-news.vue";


export default {
  components: {
    CarouselNews,
    CampusBuildings, AcademicBuildings, HistoryUrfu, CustomFooter, FirstScreen
  },
}

</script>
