<template>
  <div id="userIcon">
    <div class="userImger">
      <img :src="userImgerSrc" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "userIcon",
  data() {
    return {
      model1: "",
      userImageSrc: "../assets/cat3.jpg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userImger {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }
  .userImger img{
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
