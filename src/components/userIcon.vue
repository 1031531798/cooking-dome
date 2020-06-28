<template>
  <div id="userIcon">
    <div class="userLove userGroup">
      <Tooltip content="我的最爱" :delay='1000'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin" />
        </svg>
      </Tooltip>
      <span>我的最爱</span>
    </div>
    <div class="dynamic userGroup">
      <Tooltip content="动态" :delay='1000'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiaozhizuomoban-" />
        </svg>
      </Tooltip>
      <span>动态</span>
    </div>
    <div class="message userGroup">
      <Badge :count="messageNumber">
        <Tooltip content="通知" :delay='1000'>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-tongzhi" />
         </svg>
        </Tooltip>
      </Badge>
      <span>通知</span>
    </div>
    <div class="userImger userGroup">
      <div class="userManage">
          <img :src="userImgerSrc" />
      </div>
      <div class="borderImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userIcon',
  data () {
    return {
      model1: '',
      userImgerSrc: '../../static/cat3.jpg',
      messageNumber: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userIcon {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  margin: 3px;
  z-index: 100;
}
#userIcon img {
  width: 3rem;
  height: 3rem;
}
.userGroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
  transition: all 0.5s;
  white-space:nowrap;
}
svg {
  width: 2rem;
  height: 2rem;
}
.userGroup:hover svg{
  transform: scale(1.1);
}
.userGroup:hover span{
  transform: scale(1.1);
}
.userImger {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
}
.userImger img {
  width: 100%;
  height: 100%;
  border: 1px solid #8ed6b2;
  border-radius: 50%;
}
.userManage {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.flexRow {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
}
a span {
  line-height: 20px;
}
</style>
