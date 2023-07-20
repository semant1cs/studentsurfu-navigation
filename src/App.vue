<template>
  <first-screen/>
  <news-urfu/>
  <history-urfu/>
  <info-academic-buildings/>
  <campus-info/>
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
import InfoAcademicBuildings from "@/components/academic-buildings-info/info-academic-buildings.vue";
import CampusInfo from "@/components/campus-info/campus-info.vue";
import CustomFooter from "@/components/custom-footer.vue";
import HistoryUrfu from "@/components/history-urfu.vue";


export default {
  components: {HistoryUrfu, CustomFooter, CampusInfo, InfoAcademicBuildings, NewsUrfu, FirstScreen},
}

</script>
