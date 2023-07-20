<script>
export default {
  name: 'block-item',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPopupOpen: false,
    }
  }
}
</script>

<template>
  <ul class="post-block">
    <div class="block-info">
      <button @click="isPopupOpen = true" class="popup_button">
        <img src="./../../assets/history_icon.png" class="learning_campus_img" alt="история урфу">
        <p class="title">{{ post.title }}</p>
        <modal-window :is-open="isPopupOpen"
                      @close="isPopupOpen = false">
          <template #title_article><p class="title_article">{{ post.title }}</p></template>
          <template #text_article><p class="main_text_article">{{ post.main_text }}</p></template>
        </modal-window>
      </button>
    </div>
  </ul>
</template>

<style scoped>

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
