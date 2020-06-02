// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import appView from './appView.vue'
import router from './router'
import iView from 'iview'
import jquery from 'jquery'
import 'iview/dist/styles/iview.css'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
Vue.use(iView)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { appView },
  template: '<appView/>'
})
