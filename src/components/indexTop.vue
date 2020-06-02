<template>
  <div id="indexTop">
    <!-- 网站图标 -->
    <div class="headerImg">
      <img :src="markSrc" alt="舌尖上的中国" title="舌尖上的中国" />
    </div>
    <!-- 搜索框 -->
    <div id="input">
        <i-input size="large" :placeholder="msg" style="width:200%;">
        <i-select slot="prepend" style="width: 5rem" :model.sync="model1" placeholder="全部菜系">
          <i-option v-for="(item,key) in cityList" :value="item.value" :key='key'>{{ item.label }}</i-option>
        </i-select>
        <i-button slot="append" icon="ios-search"></i-button>
      </i-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexTop',
  data () {
    return {
      // 搜索框的数据
      msg: '开始搜索各式各样的菜肴吧！',
      markSrc: '../../static/mark.jpg',
      cityList: [
        {
          value: 'quanbucaixi',
          label: '全部菜系'
        },
        {
          value: 'chuancai',
          label: '川菜'
        },
        {
          value: 'lucai',
          label: '鲁菜'
        },
        {
          value: 'yuecai',
          label: '粤菜'
        },
        {
          value: 'sucai',
          label: '苏菜'
        },
        {
          value: 'zhecai',
          label: '浙菜'
        },
        {
          value: 'mincai',
          label: '闽菜'
        },
        {
          value: 'xiangcai',
          label: '湘菜'
        },
        {
          value: 'huicai',
          label: '徽菜'
        }
      ],
      model1: ''
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
  height: 10%;
}
#input {
  display: flex;
  width: 60%;
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
