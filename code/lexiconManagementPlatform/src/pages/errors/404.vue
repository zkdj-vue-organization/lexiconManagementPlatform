<template>
  <div class="wrap relative">
    <div class="img-box mb20">
      <img src="@/assets/images/404.png" alt="">
    </div>
    <div class="btn-box">
      <router-link :to="{name: 'helloWorld'}">返回首页</router-link>
    </div>
  </div>
</template>
<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
  .img-box{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -260px;
    margin-top: -240px;
  }
  .img-box img{
    width: 520px;
    height: 290px;
  }
  .btn-box{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 100px;
    margin-left: -50px;
  }
</style>
