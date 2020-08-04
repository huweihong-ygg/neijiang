<template>
  <div class="bg4">
        <img src="../../assets/img/xiugai/left_up@1x.png" alt />
        <img src="../../assets/img/xiugai/right_up@1x.png" alt />
        <img src="../../assets/img/xiugai/left_down@1x.png" alt />
        <img src="../../assets/img/xiugai/right_down@1x.png" alt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.bg4{
     > img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    position: absolute;
  }
  > img:first-child {
    top: -2px;
    left: -2px;
  }
  > img:nth-child(2) {
    top: -2px;
    right:-2px;
  }
  > img:nth-child(3) {
    bottom:-2px;
    left:-2px;
  }
  > img:nth-child(4) {
    bottom: -2px;
    right: -2px;
  }
}

</style>