<template>
  
  <div class="toolbar-content">
    <div class="avatar">
      <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="CNode">
    </div>
     <el-menu default-active="all" class="el-menu-vertical-demo" theme="dark" @select="onSelectChange">
      <el-menu-item index="all"><i class="el-icon-menu"></i>全部</el-menu-item>
      <el-menu-item index="good"><i class="el-icon-star-on"></i>精华</el-menu-item>
      <el-menu-item index="share"><i class="el-icon-share"></i>分享</el-menu-item>
      <el-menu-item index="ask"><i class="iconfont icon-ask"></i>问答</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    data () {
      return {

      }
    },
    methods: {
      /**
       * 类别点击处理函数
       * @param  {String} path 类别
       * @return {[type]}      [description]
       */
      onSelectChange (path) {
        this.$store.commit('SET_ARTICLE_CATEGORIES',path);
        let url = '?tab=' + path + '&page=1';
        this.$store.dispatch('getArticleList', url);
      }
    }
  }  
</script>

<style lang="scss" scoped>
  .toolbar-content {
    .avatar {
      width: 80px;
      height: 80px;
      padding: 0 10px;
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        margin-top: 10px;
      }
    }
  }
</style>