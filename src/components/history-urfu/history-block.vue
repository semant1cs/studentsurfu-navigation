<script>

export default {
  components: {PopupHistory},
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
      ]
    };
  },
}

import PopupHistory from "@/components/utils-components/popup-history.vue";
</script>

<template>
  <div v-for="article in articles" :key="article.id">
    <ul class="post-block">
      <div class="block-info">
        <button @click="isPopupOpen = true" class="popup_button">
          <img src="./../../assets/history_icon.png" class="history-icon" alt="история урфу">
          <p class="title">{{ article.title }}</p>
          <popup-history
              :is-open="isPopupOpen"
              @close="isPopupOpen = false"
          >
            <template #title_article><p class="title_article">{{ article.title }}</p></template>
            <template #text_article><p class="main_text_article">{{ article.main_text }}</p></template>
          </popup-history>
        </button>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.history-icon {
  align-self: center;
}

.popup_button {
  border: none;
  outline: none;
  background-color: #F7F7F7;
  width: 350px;
  height: 250px;
}

.block-info {
  width: 350px;
  height: 250px;
  background-color: #F7F7F7;
}

.post-block {
  margin-bottom: 30px;
}

.title {
  margin-top: 14px;
  font-size: 21px;
}

.title_article {
  font-size: 30px;
}

.main_text_article {
  font-size: 17px;
  color: gray;
}
</style>
