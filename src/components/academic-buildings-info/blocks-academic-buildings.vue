<script>

import HistoryBlock from "@/components/history-urfu/history-block.vue";

export default {
  components: {HistoryBlock},
  data() {
    return {
      isPopupOpen: false,
      articles: [
        {
          id: 1,
          title: 'any title 1',
          main_text: 'any article 1'
        },
        {
          id: 2,
          title: 'any title 2',
          main_text: 'any article text 2'
        },
        {
          id: 3,
          title: 'any title 3',
          main_text: 'any article 3'
        },
        {
          id: 4,
          title: 'any title 4',
          main_text: 'any article 4'
        },
        {
          id: 5,
          title: 'any title 5',
          main_text: 'any article text 5'
        },
        {
          id: 6,
          title: 'any title 6',
          main_text: 'any article 6'
        },
      ]
    };
  },
}
</script>

<template>
  <li class="post-blocks">
    <history-block
        v-for="article in articles"
        :key="article.id"
        :article="article"
    />
  </li>
</template>

<style scoped>

.post-blocks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  align-self: center;
  margin: 66px auto 170px;

  height: 530px;
  width: 1110px;
}
</style>
