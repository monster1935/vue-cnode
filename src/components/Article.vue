<template>
  <div class="article-content">
    <template v-if="articleInfo.content">
      <div class="article-title">{{articleInfo.title}}</div>
      <div class="post-meta">
        <span class="post-time">发表于{{createTime}} | </span>
        <span class="reply-count" title="回复量"><i class="el-icon-star-on"></i>{{articleInfo.reply_count}} | </span>
        <span class="visit-count" title="浏览量"><i class="el-icon-star-off"></i>{{articleInfo.visit_count}}</span>
      </div>
      <div v-html="articleInfo.content"></div>
    </template>
    <back-top v-show="isShow" @click.native="onBackTopClick"></back-top>
  </div>
</template>

<script>
  import BackTop from './BackTop.vue';
  export default {
    name: 'Article',
    data () {
      return {
        isShow: false
      }
    },
    components: {
      BackTop
    },
    mounted () {
      let that = this;
      document.getElementsByClassName('app-article')[0].addEventListener('scroll', function(e) {        
        if (e.target.scrollTop > 500) {
          that.isShow = true;
        } else {
          that.isShow = false;
        }
      });
    },
    methods: {
      onBackTopClick () {
        this.scrollReset();
      },
      scrollReset () {
        this.isShow = false;
        document.getElementsByClassName('app-article')[0].scrollTop = 0;
      }
    },
    computed: {
      articleInfo () {
        return this.$store.state.articleInfo;
      },
      createTime () {
        return new Date(this.articleInfo.create_at).Format('yyyy-MM-dd')
      }
    },
    watch: {
      articleInfo () {
        this.scrollReset();
      }
    }
  }
</script>

<style lang="scss">
  .article-content {
      .article-title {
        text-align: center;
        font-size: 30px;
        padding: 20px 0;
        background: #F6F6F6;
        margin-top: 20px;
        border-left: 5px solid #444;
      }
      .post-meta {
        text-align: center;
        font-size: 14px;
        span,span i {
          margin-right: 5px;
        }
      }
      h1,h2,h3,h4,h5,h6{
          margin: 30px 0 15px;
          border-bottom: 1px solid #eee;
      }
      a {
        color: #08C;
      }
      p {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        line-height: 2em;
        margin: 1em 0;
      }
      img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin-bottom: 10px
      }
      blockquote {
        padding: 0 0 0 15px;
        margin: 0 0 20px;
        border-left: 5px solid #eee;
      }
      ul li {
        line-height: 2em;
      }
      div pre.prettyprint {
        font-size: 14px;
        border-radius: 0;
        padding: 0 15px;
        border: none;
        margin: 20px -10px;
        border-width: 1px 0;
        background: #f7f7f7;
        -o-tab-size: 4;
        -moz-tab-size: 4;
        tab-size: 4;
      }
      pre {
        font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
        color: #333;
        line-height:22px;
        word-break: break-all;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
      table{
        padding: 0;
        border-collapse: collapse;
        border-spacing: 0;
        font: inherit;
        tr{
            border-top: 1px solid #ccc;
            background-color: #fff;
            margin: 0;
            padding: 0;
          th {
            border: 1px solid #ccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px;

          }
          td {
            border: 1px solid #ccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px;
          }

        }
        
      }
    }
</style>