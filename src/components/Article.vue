<!-- 文章详情页组件 -->
<template>
  <div class="article-content">
    <template v-if="articleInfo.content">
      <div class="article-title">{{articleInfo.title}}</div>
      <div class="post-meta">
       <!--  <span>作者：{{articleInfo.author.loginname}}</span>|
        <span class="post-time">发表于{{createTime}}</span>|
        <span class="reply-count" title="回复量"><i class="iconfont icon-comment"></i>{{articleInfo.reply_count}}</span>|
        <span class="visit-count" title="浏览量"><i class="iconfont icon-view"></i>{{articleInfo.visit_count}}</span>|
        <span>来自{{articleInfo.tab}}</span> -->
        {{subTitle}}
      </div>
      <div v-html="articleInfo.content"></div>
    </template>
    <back-top v-show="isShow" @click.native="onBackTopClick"></back-top>
  </div>
</template>

<script>
  import BackTop from './BackTop.vue';

  /**
   * @params {Boolean} isShow 控制回到顶部组件是否显示 默认flase
   */
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
      // 监听滚动条scroll事件，根据滚动条的高度判断是否需要出现回到顶部组件
      document.getElementsByClassName('app-article')[0].addEventListener('scroll', function(e) {        
        if (e.target.scrollTop > 500) {
          that.isShow = true;
        } else {
          that.isShow = false;
        }
      });
    },
    methods: {
      /**
       * 回到顶部组件点击事件监听
       * @return {[type]} [description]
       */
      onBackTopClick () {
        this.scrollReset();
      },
      /**
       * 回到顶部，滚动条重置方法
       * @return {[type]} [description]
       */
      scrollReset () {
        this.isShow = false;
        document.getElementsByClassName('app-article')[0].scrollTop = 0;
      }
    },
    computed: {
      /**
       * 返回store中文章信息
       * @return {Object} 文章信息对象
       */
      articleInfo () {
        return this.$store.state.articleInfo;
      },
      /**
       * 返回格式化后的文章创建日期
       * @return {Date} 文章创建日期
       */
      createTime () {
        return new Date(this.articleInfo.create_at).Format('yyyy-MM-dd')
      },
      subTitle () {
        let res = [];
        let categoryName = {
          all: '全部',
          share: '分享',
          ask: '问答',
          job: '招聘'
        };
        res.push('作者:' + this.articleInfo.author.loginname);
        res.push('发表于:' + this.createTime);
        res.push('浏览量:' + this.articleInfo.visit_count);
        res.push('评论:' + this.articleInfo.reply_count);
        if (this.articleInfo.tab) {
          res.push('来自:' + categoryName[this.articleInfo.tab]); 
        } 
        return res.join('  ');
      }
    },
    watch: {
      /**
       * 文章信息发生变化后，滚动条自动重置
       * @return {[type]} [description]
       */
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
        font-size: 12px;
        color: #838383;
        margin-top: 10px;
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