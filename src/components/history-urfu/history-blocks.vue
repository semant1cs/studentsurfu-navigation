<script>


import {defineComponent} from "vue";
import HistoryBlock from "@/components/history-urfu/history-block.vue";

export default defineComponent({
  components: {HistoryBlock}
})
</script>

<template>
  <h4 class="title-block">Как зарождался УрФУ?</h4>
  <li class="post-blocks">
    <history-block/>
  </li>
</template>

<style scoped>
.title-block {
  margin-top: 117px;
  text-align: center;
  color: black;
  font-size: 36px;
}

.post-blocks {
  margin-top: 66px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  align-self: center;
  margin-left: auto;
  margin-right: auto;

  height: 530px;
  width: 1110px;
}
</style>
