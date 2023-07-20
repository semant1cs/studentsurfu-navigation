<script>


import ModalWindow from "@/components/UI/modal-window.vue";

export default {
  components: {ModalWindow},
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
        <img src="./../../assets/lc_s/lc_rtf.jpg" class="learning_campus_img" alt="история урфу">
        <modal-window :is-open="isPopupOpen"
                       @close="isPopupOpen = false">
          <template #title_article><p class="title_article">{{ article.title }}</p></template>
          <template #text_article><p class="main_text_article">{{ article.main_text }}</p></template>
        </modal-window>
      </button>
    </div>
  </ul>
</template>

<style scoped>
.learning_campus_img {
  align-self: center;
  width: 250px;
  height: 250px;
}

.popup_button {
  border: none;
  outline: none;
  background-color: #FFFFFF;
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
  font-size: 30px;
}

.main_text_article {
  font-size: 17px;
  color: gray;
}
</style>
