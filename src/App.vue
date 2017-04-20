<template>
  <div id="app">
    <div class="app-toolbar">
      <toolbar></toolbar>
    </div>
    <div class="app-article-list">
      <article-list></article-list>
    </div>
    <div class="app-article">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ArticleList from './components/ArticleList'
import Article from './components/Article'
import Toolbar from './components/Toolbar'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Toolbar,
    ArticleList,
    Article
  }
}
</script>

<style lang="scss">
html,body{
  height:100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  .app-toolbar {
    flex: 0 0 100px;
    background: #444;
  }
  .app-article-list {
    flex: 0 0 400px;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #ddd
  }
  .app-article {
    flex: 1;
    overflow-y: auto;
    padding: 0 40px;
  }
}
</style>
