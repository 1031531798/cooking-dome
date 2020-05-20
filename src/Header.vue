<template>
  <div class="header">
    <top></top>
  </div>
</template>

<script>
import top from "./components/indexTop";
export default {
  name: "Header",
  data() {
    return {
      value: [0, 50]
    };
  },
  components: { top }
};
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
