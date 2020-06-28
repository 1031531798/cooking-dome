/* eslint-disable vue/no-parsing-error */
<template>
  <article class="meunItemList">
    <div class="meunItem" v-for="(value,key) of itemArrey" :key="key">
    <!-- <div class="meunItem"> -->
      <div class="meunItem-picture">
        <img :src="value.img">
      </div>
      <div class="meunItem-text">
        {{value.text}}
      </div>
      <div class="meunItem-user">
        <img :src="value.userImg">
        <div class="meunItem-userName">
          {{value.userName}}
        </div>
        <div class="meunItem-user-attention">
          关注
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'menuList',
  props: {
    itemArrey: Array
  },
  data () {
    return {
      model1: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .meunItemList{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
  }
  .meunItem{
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 22rem;
    border: 1px solid black;
    margin-right: 2%;
    min-width: 16rem;
  }
  .meunItem-picture{
    width: 100%;
    height: 80%;
    background: burlywood;
  }
  .meunItem-picture img{
    width: 100%;
    height: 100%;
  }
  .meunItem-text{
    width: 100%;
    height: 14%;
  }
  .meunItem-user{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .meunItem-user img{
    width: 24px;
    height: 24px;
    border: 0px solid;
    border-radius: 12px;
    margin: 1px 5px 1px 3px;
  }
  .meunItem-user-attention{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: cornsilk;
    width: 20%;
    height: 24px;
    border: 1px solid;
    border-radius: 12px;
    margin: 0px 5px 0px 15px;
    background: #3399ff;
    cursor: pointer;
  }
</style>
