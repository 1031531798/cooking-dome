<template>
  <div id="userIcon">
    <div class="userLove userGroup">
      <Tooltip content="我的最爱" :delay='1000'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin" />
        </svg>
      </Tooltip>
    </div>
    <div class="dynamic userGroup">
      <Tooltip content="动态" :delay='1000'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dongtai1" />
        </svg>
      </Tooltip>
    </div>
    <div class="message userGroup">
      <Badge :count="messageNumber">
        <Tooltip content="通知" :delay='1000'>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-tongzhi" />
         </svg>
        </Tooltip>
      </Badge>
    </div>
    <div class="userImger userGroup">
      <Dropdown trigger="click">
        <div class="userName">
          <img src="../assets/cat3.jpg" />
          <a href="javascript:void(0)" class="flexRow">
            {{userName}}
            <span class="icon iconfont icon-icon-test25"></span>
          </a>
        </div>
        <Dropdown-menu slot="list">
          <Dropdown-item>个人空间</Dropdown-item>
          <Dropdown-item>我的关注</Dropdown-item>
          <Dropdown-item>我的菜谱</Dropdown-item>
          <Dropdown-item>联系我们</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userIcon',
  data () {
    return {
      model1: '',
      userImgerSrc: '../assets/cat3.jpg',
      userName: 'linzijian',
      messageNumber: 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userIcon {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  border: 1px solid white;
  border-radius: 10px;
  background: #d7dde4;
  margin: 3px;
}
#userIcon img {
  width: 3rem;
  height: 3rem;
}
.userGroup {
  padding-right: 1rem;
  cursor: pointer;
  transition: all 0.5s;
}
svg {
  width: 3rem;
  height: 3rem;
}
.userGroup svg:hover {
  transform: scale(1.1);
}
.userGroup span:hover {
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
  border: 1px solid white;
  border-radius: 50%;
}
.userName {
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
