<script>


import PopupHistory from "@/components/UI/popup-history.vue";

export default {
  components: {PopupHistory},
  data() {
    return {
      isPopupOpen: false,
    };
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <ul class="post-block">
    <div class="block-info">
      <button @click="isPopupOpen = true" class="popup_button">
        <img src="./../../assets/history_icon.png" class="learning_campus_img" alt="история урфу">
        <p class="title">{{ article.title }}</p>
        <popup-history :is-open="isPopupOpen"
                       @close="isPopupOpen = false">
          <template #title_article><p class="title_article">{{ article.title }}</p></template>
          <template #text_article><p class="main_text_article">{{ article.main_text }}</p></template>
        </popup-history>
      </button>
    </div>
  </ul>
</template>

<style scoped>
.learning_campus_img {
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
