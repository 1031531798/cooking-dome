/* eslint-disable vue/no-parsing-error */
<template>
  <div id="firstContent">
      <div class="selectDiv">
        <div class="selectItem" v-for='(value,key) of itemArr' :key="key" >
            <img :src="value.src" :alt="value.name" :title="value.name" @click="getText">
            <span @click="getText">{{value.name}}</span>
          </div>
      </div>
      <Carousel style="width:70%;" autoplay :autoplay-speed='speed'>
          <Carousel-item>
              <div class="demo-carousel"><img :src="carouselImgSrc[0]" class="carouselImage" ></div>
          </Carousel-item>
          <Carousel-item>
              <div class="demo-carousel"><img :src="carouselImgSrc[1]" class="carouselImage"></div>
          </Carousel-item>
          <Carousel-item>
              <div class="demo-carousel"><img :src="carouselImgSrc[2]" class="carouselImage"></div>
          </Carousel-item>
          <Carousel-item>
              <div class="demo-carousel"><img :src="carouselImgSrc[3]" class="carouselImage"></div>
          </Carousel-item>
        </Carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      model1: '',
      carouselImgSrc: ['../../static/img1.jpg', '../../static/img2.jpg', '../../static/img3.jpg', '../../static/img4.jpg'],
      itemArr: [
        {name: '中餐', src: ' ../../static/imgdiv1.jpg'},
        {name: '汤面', src: ' ../../static/imgdiv2.jpg'},
        {name: '烘培', src: ' ../../static/imgdiv3.jpg'},
        {name: '西餐', src: ' ../../static/imgdiv4.jpg'},
        {name: '素食', src: ' ../../static/imgdiv5.jpg'},
        {name: '鲜榨', src: ' ../../static/imgdiv6.jpg'},
        {name: '寿司', src: ' ../../static/imgdiv7.jpg'},
        {name: '烧烤', src: ' ../../static/imgdiv8.jpg'},
        {name: '粥', src: ' ../../static/imgdiv9.jpg'}
      ],
      speed: 5000
    }
  },
  mounted () {
    this.setImgSize()
  },
  methods: {
    // 设置图片大小
    setImgSize: function () {
      let width = $('.ivu-carousel').css('width')
      let height = $('.ivu-carousel').css('height')
      console.log(width)
      $('.ivu-carousel-item img').css('width', width)
      $('.ivu-carousel-item img').css('height', height)
    },
    // 点击菜单添加导航标签
    getText: function (event) {
      let text
      // 获取相关菜单的名称
      if (event.target.tagName === 'IMG') {
        text = event.target.alt
      } else if (event.target.tagName === 'SPAN') {
        text = event.target.innerText
      }
      this.$emit('add', text)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #firstContent{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .selectDiv{
    width: 30%;
    height: 20rem;
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
    margin-right: 1rem;
    border: 1px solid #d7dde4;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 10px #d7dde4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .carouselImage{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .demo-carousel{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .selectItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 30%;
    margin-left: 3%;
    margin-right: 3%;
    font-weight: 400;
    font-size: 1rem;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .selectItem img{
    width: 100%;
    height: 80%;
    border: 1px solid;
    border-radius: 10%;
    border-color:#fff;
    cursor: pointer;
    transition: all 0.2s;
  }
  .selectItem span{
    margin-top: 2px;
    cursor: pointer;
  }
  .selectItem:hover img{
    box-shadow: 2px 2px 2px 1px #657180;
    transform: scale(1.05);
  }
</style>
