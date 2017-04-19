<template>
  <div class="backtop">
    <i class="el-icon-arrow-up"></i>
  </div>
</template>

<style scoped>
  .backtop {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background: #444;
    border-radius: 25px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
  }
  .backtop:hover {
    opacity: 1;
  }
  .backtop i {
    text-align: center;
    color: #fff;
    display: block;
    line-height: 50px;
    font-size: 22px;
  }
</style>