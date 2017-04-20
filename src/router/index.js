import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'

Vue.use(Router)

/**
 * 设置路由信息
 * Note:此处暂时使用Article组件作为占位组件，并没有设置过多的路由信息
 * @type {Array}
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    }
  ]
})
