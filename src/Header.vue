<template>
  <div class="header">
    <top></top>
    <userIcon/>
  </div>
</template>

<script>
import top from './components/indexTop'
import userIcon from './components/userIcon'
export default {
  name: 'Header',
  data () {
    return {
      value: [0, 50]
    }
  },
  components: {
    'top': top,
    'userIcon': userIcon
  }
}
</script>

<style>
  .class {
    width: 100%;
    height: 100%;
    background: red;
  }
  #indexTop {
    width: 100%;
  }
</style>
