<template>
  <div>
      <img class="leftbg" src="../../assets/img/xiugai/light@1x.png" alt="">
      <img class="rightbg" src="../../assets/img/xiugai/light_s@1x.png"  alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.leftbg{
width: 50%;
transform: rotateZ(90deg);
position: absolute;
left:0;
}
.rightbg{
    width: 50%;
transform: rotateZ(90deg);
position:absolute;
right:0;
}

</style>