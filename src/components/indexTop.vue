<template>
  <div id="indexTop">
    <!-- 网站图标 -->
    <!-- <div class="headerImg">
      <img :src="markSrc" alt="舌尖上的中国" title="舌尖上的中国" />
    </div> -->
    <!-- 搜索框 -->
    <div class="input-div">
      <input type="text" class="input" placeholder="在此输入你像搜索的内容" @focus="focusInput" @blur="blurInput">
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexTop',
  data () {
    return {
      // 搜索框的数据
      markSrc: '../../static/mark.jpg',
      // cityList: [
      //   {
      //     value: 'quanbucaixi',
      //     label: '全部菜系'
      //   },
      //   {
      //     value: 'chuancai',
      //     label: '川菜'
      //   },
      //   {
      //     value: 'lucai',
      //     label: '鲁菜'
      //   },
      //   {
      //     value: 'yuecai',
      //     label: '粤菜'
      //   },
      //   {
      //     value: 'sucai',
      //     label: '苏菜'
      //   },
      //   {
      //     value: 'zhecai',
      //     label: '浙菜'
      //   },
      //   {
      //     value: 'mincai',
      //     label: '闽菜'
      //   },
      //   {
      //     value: 'xiangcai',
      //     label: '湘菜'
      //   },
      //   {
      //     value: 'huicai',
      //     label: '徽菜'
      //   }
      // ],
      model1: ''
    }
  },
  methods:{
    focusInput: function () {
      $('#input').attr('placeholder', '')
      $('.header').css('border-radius', '40px 0 0 40px')
    },
    blurInput: function () {
      $('.header').css('border-radius', '0')
      $('#input').attr('placeholder', '在此输入你像搜索的内容')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#indexTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.input-div{
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
}
.input {
  display: flex;
  width: 80%;
  height: 80%;
  outline:none;
  border: 1px solid;
  border-radius: 40px;
  padding-left:10px;
  font-size: 1rem;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  transition: all 0.3s;
}
.input:focus{
  height: 100%;
}
.headerImg{
  display: flex;
  align-items: center;
  position: relative;
  width: 10rem;
  height: 100%;
  margin-right: 1rem;
}
.headerImg img {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
#user_love {
  font-size: 2rem;
}
span{
  position: relative;
  display: flex;
}
</style>
