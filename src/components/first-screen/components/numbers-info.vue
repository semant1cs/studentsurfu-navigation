<template>
  <div v-for="block_info in blocks_info" :key="block_info.id">
    <ul class="block-info">
      <p class="number-info">{{ block_info.number_info }} </p>
      <p class="title-block-info">{{ block_info.title_block_info }}</p>
      <p class="additional-block-info">{{ block_info.additional_block_info }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks_info: [
        {
          id: 1,
          number_info: '10',
          title_block_info: 'МЕСТО',
          additional_block_info: 'среди лучших университетов России'
        },
        {
          id: 2,
          number_info: '1920',
          title_block_info: 'ГОД',
          additional_block_info: 'основания УрФУ'
        },
        {
          id: 3,
          number_info: '12',
          title_block_info: 'ФАКУЛЬТЕТОВ',
          additional_block_info: ''
        },
        {
          id: 4,
          number_info: '450',
          title_block_info: 'ПРОГРАММ',
          additional_block_info: 'бакалавриата, специалитета'
        }
      ]
    }
  }
}

</script>


<style scoped>
.block-info {
  margin-top: 57px;
  text-align: center;
  margin-right: 30px;
}

.number-info {
  color: #F7654A;
  font-size: 72px;
}

.title-block-info {
  font-size: 32px;
}

.additional-block-info {
  color: gray;
  font-size: 18px;
}
</style>
