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
import HistoryUrfu from "@/components/history-urfu/history-urfu.vue";
import InfoAcademicBuildings from "@/components/academic-buildings-info/info-academic-buildings.vue";
import CampusInfo from "@/components/campus-info/campus-info.vue";
import CustomFooter from "@/components/utils-components/custom-footer.vue";


export default {
  components: {CustomFooter, CampusInfo, InfoAcademicBuildings, HistoryUrfu, NewsUrfu, FirstScreen},
}

</script>
