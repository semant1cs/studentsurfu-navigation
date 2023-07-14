<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <button class="close_popup" @click=close>
        <img src="../../assets/orange-cross.png" alt="close" class="close_popup_img">
      </button>
      <h3 class="title_popup">
        <slot name="title_article"></slot>
      </h3>
      <slot name="text_article"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    }
  },
  emits: {
    close: null
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    }
  }
}
</script>

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
  width: 1000px;
  height: auto;
  text-align: center;
}

.close_popup {
  position: absolute;
  right: 0;
  margin-top: -10px;
  margin-right: 10px;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.close_popup_img {
  width: 32px;
  height: 32px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.title_popup {
  margin-top: 50px;
}
</style>
