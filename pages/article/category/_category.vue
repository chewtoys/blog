<template>
  <div class="article-list-wrap w">
    <news-list :data-list="topnews" page-subject="技术分享"></news-list>
    <article-category></article-category>
  </div>
</template>

<script>
  import newslist from '~/components/news-list.vue'
  import articleCategory from '~/components/article-category.vue'
  export default {
    components: {
      'news-list': newslist,
      'article-category': articleCategory,
    },
    data() {
      return {
        topnews: [
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          },
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          },
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          },
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          },
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          },
          {
            id: 1,
            title: '《孩子你慢慢来》书评',
            content: '台湾作家龙应台的《孩子，你慢慢来》，读这本书的时候，宝宝在我肚子里踢打的厉害，我给他播放摇篮曲，他还是无法安静下来，天生就是闹腾的娃，我对先生打趣道，你那么绅士安静的一个人，你娃咋这么淘。他微笑得说，像你，爱折腾。回',
            brand: 'Vue',
            create_time: '2018-08-31  11:43:34',
            viewnum: '634',
          }
        ]
      }
    },
    methods: {},
    created() {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .article-list-wrap {
    @include centerBox(center,flex-start);
  }
</style>

