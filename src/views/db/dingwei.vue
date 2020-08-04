<template>
 <div class="map_top" v-show="infow">
      <i class="el-icon-close" @click="()=>{this.infow=false}"></i>
      <div class="top">
        <p>事件时间：2020-07-02</p>
        <p>事件地点：xxx街道xxx路三段xx路口</p>
        <p>事件原因：{{deviceInfo}}</p>
      </div>
      <div class="bot">{{deviceInfo}}</div>
      <div class="sj"></div>
    </div>
</template>

<script>
export default {
props:['deviceInfo'],
  data(){
      return{
          infow:false,
      }
  }

  }
</script>

<style lang="less" scoped>

.map_top {
  width: 18.75rem;
  position: relative;
//   z-index: 99;
//   top: 40%;
//   left: 40%;
  border-radius: 0.9375rem;
  background: rgba(160, 32, 40, 0.7);
  i{
  font-size: 2rem;
  position: absolute;
  top:.1875rem;
  right: .3125rem;
  }
  .top {
    padding: 0.9375rem;

    p {
      margin-bottom: 0.3125rem;
    }
  }
  .bot {
    background: #d2221f;
    padding: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;
  }
  .sj {
    width: 0;
    height: 0;
    position: absolute;
    left: 60%;
    border-width: 1.275rem;
    border-style: solid;
    border-color: red transparent transparent transparent;
  }
}
</style>