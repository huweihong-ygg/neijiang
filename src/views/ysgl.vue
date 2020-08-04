<template>
  <div class="ysglvue">
    <div class="item_btn flex-between">
      <div :class="item.checked?'active':''" v-for="(item,i) of list" :key="i" @click="path(i,item.path)">{{item.name}}</div>
    </div>
  
   <div>
     <!-- <router-view></router-view> -->

     <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
   </div>
  </div>
</template>


<script>
export default {
 data(){
   return{
     list:[
       {name:'客运站',path:'/ysgl/Countrybus',checked:false},
       {name:'乡村客运',path:'/ysgl/Urbanpublic',checked:false},
       {name:'驾校',path:'/ysgl/driveschool',checked:false},
       {name:'维修点',path:'/ysgl/Maintenance',checked:false}
     ]
   }
 },
 created(){
 this.activemenu()
 },
  watch:{
   $route:function(to,from){
     this.activemenu()
   }
 },
 methods:{
    activemenu(){
      var path = this.$route.path;
         for(var item of this.list){
        item.checked=false
      }
      // console.log(path)
      switch (path) {
        case "/ysgl/Countrybus":
          this.list[0].checked = true;
          break;
        case "/ysgl/Urbanpublic":
          this.list[1].checked = true;
          break;
        case "/ysgl/driveschool":
          this.list[2].checked = true;
          break;
        case "/ysgl/Maintenance":
          this.list[3].checked = true;
          break;
      }
    },
   path(i,path){
      var newlist = this.list;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.list = newlist;
      this.$router.push(path);
   },
 }
}
</script>

<style lang="less" scoped>

.item_btn {
  position: absolute;
  z-index:999;
  width:27%;
  top:9.35rem;
  left: 50%;
  margin-left: -13.5%;
  color: #fff;
  background: #0086f8;
  font-weight: bold;
  padding: .375rem;
  > div {
    width: 80px;
    // border: 1px solid #eee;
    line-height: 30px;
    text-align: center;
    background: url(../assets/img/new_icon/icon_1@1x.png);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  > .active {
    background: url(../assets/img/new_icon/icon_2@1x.png);
    background-size: contain;
    background-repeat: no-repeat;
    color: #ffca60;
  }
}

#allmap3{
    width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
}
</style>
