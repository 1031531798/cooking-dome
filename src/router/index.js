import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/indexTop'

Vue.use(Router)
// 创建模板页
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexTop',
      component: HelloWorld
    }
    // 创建路径规则
    // {
    //   path: '/foo',
    //   name: 'foo',
    //   component: Foo
    // }
  ]
})
