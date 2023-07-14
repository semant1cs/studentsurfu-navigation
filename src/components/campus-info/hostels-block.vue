<script>

import HostelBlock from "@/components/campus-info/hostel-block.vue";

export default {
  components: {HostelBlock},
  data() {
    return {
      isPopupOpen: false,
      articles: [
        {
          id: 1,
          title: 'any title 1',
          img_src: "./../../assets/lc_s/lc_rtf.jpg",
          main_text: '123'
        },
        {
          id: 2,
          title: 'any title 2',
          img_src: '',
          main_text: '123'
        },
        {
          id: 3,
          title: 'any title 3',
          img_src: '',
          main_text: '123'
        },
        {
          id: 4,
          title: 'any title 4',
          img_src: '',
          main_text: '123'
        },
        {
          id: 5,
          title: 'any title 5',
          img_src: '',
          main_text: '123'
        },
        {
          id: 6,
          title: 'any title 6',
          img_src: '',
          main_text: '14124'
        },
      ]
    };
  },
}
</script>

<template>
  <li class="post-blocks">
    <hostel-block
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
  margin: 66px auto 88px;

  height: 530px;
  width: 1110px;
}
</style>
