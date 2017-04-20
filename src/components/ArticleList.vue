<template>
	<div class="article-list-content">
		<el-table
      :data="articleList"
      style="width: 100%"
      v-loading.body="loading">
      <el-table-column
        prop="title"
        :label="categories">
        <template scope="scope">
          <el-tag type="success" v-if="scope.row.top || scope.row.good">{{scope.row.top ? '置顶': '精华'}}</el-tag>
          <el-tag :type="tag(scope.row.tab).type" v-else>{{tag(scope.row.tab).text}}</el-tag>
          <el-button type="text" @click="openTitle(scope.row)">{{scope.row.title}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currPage"
        :page-size="pagination.pageSize"
        layout="prev, pager, next, jumper"
        :total="pagination.totalPages">
      </el-pagination>
    </div>
   
	</div>
</template>

<script>
/**
 * @params {Boolean} loading 文章列表的loading效果 默认true
 * @params {Object} pagination 文章列表的分页信息
 * 
 */
export default {
  name: 'article-list',
  data () {
    return {
      loading: true,
      pagination: {
        currPage: 1,
        pageSize: 10,
        totalPages: 500
      },
      categoryName: {
        'all': { text: '全部', type: 'gray' },
        'ask': { text: '问答', type: 'gray' },
        'share': { text: '分享', type: 'gray' },
        'good': { text: '精华', type: 'success' },
        'job': { text: '招聘', type: 'gray' }
      }
    }
  },
  mounted () {
    // 获取文章列表
    this.$store.dispatch('getArticleList', this.url);
  },
  methods: {
    // 设置文章信息
    openTitle (row) {
      this.$store.commit('SET_ARTICLE', row);
    },
    // 返回标签类型
    tag (tag) {
      if (this.categoryName[tag]) {
        return { 
          'text': this.categoryName[tag].text,
          'type': this.categoryName[tag].type
        }
      } 
      return { 
        'text': '全部',
        'type': 'gray'
      }
    },
    handleCurrentChange (val) {
      this.pagination.currPage = val;
      let url = '?tab=' + this.$store.state.categories + '&page=' + val;
      this.$store.dispatch('getArticleList', url);
    },
    handleSizeChange () {

    }
  },
  computed: {

    categories () {
      return this.categoryName[this.$store.state.categories].text;
    },
    articleList () {
      if(this.$store.state.articleList && this.$store.state.articleList.length) {
        this.loading = false;
      }
      return this.$store.state.articleList;
    }
  },
  watch: {
    articleList () {
      document.getElementsByClassName('app-article-list')[0].scrollTop = 0;
    },
    // 文章列表类别发生变化后，设置分页信息为第一页
    categories () {
      this.pagination.currPage = 1;
    }
  }
}
</script>

