<script>

export default {
  components: {PopupHistory},
  data() {
    return {
      isPopupOpen: false,
      articles: [{
        title: 'any title',
        article: 'any article'
      },
        {
          title: 'any title',
          article: 'any article'
        }
      ]
    };
  },
}

import PopupHistory from "@/components/utils-components/popup-history.vue";
</script>

<template>
  <ul class="post-block">
    <div class="block-info">
      <button @click="isPopupOpen = true" class="popup_button">
        <img src="./../../assets/history_icon.png" class="history-icon" alt="история урфу">
        <p class="title_article">История чего-либо...</p>
        <popup-history
            :is-open="isPopupOpen"
            @close="isPopupOpen = false"
        >
          <template #title_article></template>
          <template #text_article></template>
        </popup-history>
      </button>
    </div>
  </ul>
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

.title_article {
  margin-top: 14px;
}
</style>
