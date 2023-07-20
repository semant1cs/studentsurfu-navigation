<script>

export default {
  name: 'blocks-list-page',
  props: {
    title: {
      type: String,
      required: true
    },
    small_title: String,
    posts: {
      type: Array,
      required: true
    }
  },
}

</script>

<template>
  <header-title>
    <template #title>{{ title }}</template>
  </header-title>
  <h3 class="title-block">{{ small_title }}</h3>
  <li class="post-blocks">
    <block-item v-for="post in posts" :key="post.id" :post="post"/>
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
