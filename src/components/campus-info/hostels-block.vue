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
          title: 'Студенческое общежитие №11',
          img_src: "./../../assets/lc_s/lc_rtf.jpg",
          main_text: 'Студенческое общежитие №11 – общежитие для студентов, находится по адресу ул. Коминтерна, д. 5, б' +
              'ыло построено в 1961 году, в 2016 был произведен капитальный ремонт. Здание имеет 5 этажей и 220 жилых ко' +
              'мнат. На каждом этаже есть кухня. На данный момент в общежитии проживает 597 студентов таких институтов,' +
              ' как ИРИТ-РтФ, ИНМТ, ИнЭУ и ИнФО. В фойе первого этажа любой студент может поиграть в настольный теннис. ' +
              'С 2012 года открыта комната для занятий. Режим работы: Пн – чт. 8:30-17:15; пт. 8:30-16:00.' +
              'Совет студенческого корпуса избирается ежегодно студентами, проживающими в общежитии. В функции ССК входит' +
              ' представление прав и интересов, проживающих перед администрацией университета, привлечение студентов к ' +
              'решению социально-значимых вопросов, организация воспитательного процесса, досуга и быта проживающих, контроль' +
              ' за соблюдением правил внутреннего распорядка и нормативно-правовых актов, регулирующих проживание ' +
              'студентов в общежитии. '
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
