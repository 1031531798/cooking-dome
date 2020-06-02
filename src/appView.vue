<template>
  <div id="appView">
    <header class="header">
      <top></top>
      <userIcon class="userIcon"/>
    </header>
    <div class="bodyCarousel">
      <carousel @add='addTab'></carousel>
    </div>
    <Tabs active-key="key1" id="tabs" v-model="page">
        <Tab-pane :label="tab" :key="key" v-for="(tab,key) of tabArr" :name='tab'>
        </Tab-pane>
    </Tabs>
  </div>
</template>

<script>
import top from './components/indexTop'
import userIcon from './components/userIcon'
import carousel from './components/carousel'
import menuList from './components/menuList'
export default {
  name: 'appView',
  data () {
    return {
      value: [0, 50],
      tabArr: ['Home'],
      page: 'Home'
    }
  },
  components: {
    'top': top,
    'userIcon': userIcon,
    'carousel': carousel,
    'menuList': menuList
  },
  methods: {
    addTab (data) {
      // 判断是否已经打开标签页
      if (this.tabArr.indexOf(data) === -1) {
        // 添加标签页
        this.tabArr.push(data)
      }
      this.page = data
    }
  }
}
</script>

<style>
  #appView{
    width: 100%;
  }
  .header{
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    background: #8ed6b2;
  }
  .userIcon{
    position: relative;
    right: 0;
  }
  .bodyCarousel{
    width: 100%;
    background-color: #f5f7f9;
  }
  #tabs{
    font-size: 1rem;
    margin: 1rem;
    width: 100%;
    height: 70%;
  }
  .bodyMenuList{
    width: 100%;
    background: chartreuse;
    border: 1px solid white;
    border-radius: 2rem;
  }
</style>
