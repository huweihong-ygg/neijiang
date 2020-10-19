<template>
  <div>
    <!-- <div class="flex">
      <div class="flex-around header_center">
        <div
          :class="item.checked?'active':''"
          v-for="(item,i) of list"
          @click="path(i,item.path)"
          :key="i"
        >{{item.name}}</div>
        <img class="topimg" src="../assets/img/icon/icon_light@1x.png" alt />
      </div>
      <div class="right_time">
        <div class="flex-between">
          <span class="date">2020年6月01日</span>
          <span>09:24:57</span>
        </div>
        <div class="flex-end">
          <img src="../assets/img/icon/icon_taiyang@1x.png" alt />
          <span>31.5℃</span>
        </div>
      </div>
    </div> -->
    <!-- v2.1 -->
    <div class="index_header">
        <div class="flex">
          <!-- date -->
          <div class="date">
            <p>{{date}}</p>
            <p>{{time}}</p>
          </div>
          <!-- logo -->
          <div class="logo flex-center">
            <div class="center flex">
                <img src="../assets/img/new_icon/logo@1x.png" alt="">
                <span class="name">内江市中区交通运输平台</span>
                <!-- <img class="liangguang" src="../assets/img/xiugai/liangguang@1x.png" alt=""> -->
              </div>
          </div>
          <!-- day -->
          <div class="day">
            
            <img src="../assets/img/icon/icon_taiyang@1x.png" alt />
            <div>31.5℃</div>

          </div>
        </div>
        <div class="flex-around header_center">
          <div
          :class="item.checked?'active':''"
          v-for="(item,i) of list"
          @click="path(i,item.path)"
          :key="i"
        >{{item.name}}</div>
        </div>
    </div>
    <div>
       <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date:"",
      time:"",
      list: [
        { name: "指挥台", path: "/Podium", checked: false },
        { name: "应急指挥", path: "/police", checked: false },
        { name: "执法管理", path: "/zfgl", checked: false },
        { name: "运输管理", path: "/ysgl", checked: false },
        { name: "道路养护", path: "/dlyh", checked: false },
        { name: "报表查询", path: "/table", checked: false },
        { name: "应急查看", path: "/mapfive", checked: false },
        { name: "指挥台2", path: "/Podium2", checked: false },
      ]
    };
  },
  watch: {
  $route:function(to,from){
     this.activemenu(to.path)
  
  }
  },
  created(){
      this.activemenu(this.$route.path)
      this.showdate()
  },
  methods: {
    showdate(){
      var t = null;
      var that=this;
t = setTimeout(time, 1000);/*開始运行*/
function time() {
    clearTimeout(t);/*清除定时器*/
    var dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    var a = ["日", "一", "二", "三", "四", "五", "六"];
    var week = "星期" + a[dt.getDay()];
  that.date = y + "年" + PrefixZero(mt, 2) + "月" + PrefixZero(day, 2) + "日";
    that.time= PrefixZero(h, 2) + ":" + PrefixZero(m, 2) + ":" + PrefixZero(s, 2);
    t = setTimeout(time, 1000);
}

/**
* 自定义函数名：PrefixZero
* @param num： 被操作数
* @param n： 固定的总位数
*/
function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}
    },
    activemenu(path){
      // var path = this.$route.path;
      // console.log(path.indexOf('/Podium'))
        var newlist = this.list;
      for (var item of newlist) {
        item.checked = false;
      }
      // console.log(path)
      switch (path) {
        case "/Podium":
          this.list[0].checked = true;
          break;
           case "/police":
          this.list[1].checked = true;
          break;
        case "/zfgl":
          this.list[2].checked = true;
          break;
        case "/ysgl":
          this.list[3].checked = true;
          break;
        case "/hqfx":
          this.list[4].checked = true;
          break;
           case "/table":
          this.list[5].checked = true;
          break;
              case "/meet":
          this.list[6].checked = true;
          break;
          case "/Podium2":
          this.list[7].checked = true;
          break;
      }
    },
    path(i, path) {
      var newlist = this.list;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.list = newlist;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
.header_center {
  width: 60.25rem;
  margin:auto;
  height: 3.125rem;
  // background: #;
  color: #fff;
  font-size: 1.25rem;
  line-height:3.125rem;
  position: relative;
  margin-top: -1.25rem;
  z-index: 66;
  // background: url(../assets/img/icon/icon_light@1x.png);
  // background-size: contain;
  // background-repeat: no-repeat;
  > div {
    position: relative;
    z-index: 99;
    width: 25%;
    text-align: center;
    cursor: pointer;
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1.25rem;
    transition: 0.3s;
  }
  > div:not(:nth-child(8)) {
    border-right: .0625rem solid #00f8f8;
  }
  .topimg {
    position: absolute;
    top: -0.9375rem;
    left: 0;
  }
}
.right_time {
  float: right;
  font-size: 1.5rem;
  color: #fff;
  top: .625rem;
  position: absolute;
  z-index: 66;
  right: 1.25rem;
  .date {
    margin-right: .625rem;
  }
  .flex-end {
    margin-top: .625rem;
  }

}
.active {
  color: #0086fb;
  font-size: 1.375rem;
}
@media screen and (max-width: 1200px) {
  .right_time {
    display: none;
  }
}

.index_header{
  position: relative;
  z-index: 999;
  width: 100%;
  height: 10rem;
  background: rgb(8, 23, 62);
}
.date{
  width: 9.375rem;
  height:5rem;
  position: relative;
  left: 0;
  padding: .625rem 0 0 .625rem;
  p{
    font-weight: 550;
  }
}
.logo{
  width: 93.75rem;
  height: 7.5rem;
  margin: auto;
  background: url(../assets/img/xiugai/bg@1x.png);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  .center{
    width:35%;
    // margin: auto;
    font-size: 2.20rem;
    margin-top: 1.65rem;
    padding-left: .755rem;
    // background: #000;
    // font-weight: bold;
    color:rgb(0, 240, 248);
    position: relative;
     img{
      width: 3.125rem;
      height: 3.9375rem;
      vertical-align: middle;
    }
    .liangguang{
      position: absolute;
      width: 26.9375rem;
      height: 14.0625rem;
      top: -28px;
      left: 60px;
    }
    .name{      
      display: block;
      margin-left: .8125rem;
      text-align: center;
    }
  }
}
.day{
 width: 9.375rem;
  height:5rem;
  position: relative;
  right: 0;
  text-align: right;
  padding: .625rem .925rem 0 0;
  font-weight: bold;
}


</style>