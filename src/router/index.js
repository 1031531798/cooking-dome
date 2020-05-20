import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/indexTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexTop',
      component: HelloWorld
    }
  ]
})
