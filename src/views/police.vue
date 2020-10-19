<template>
  <div class="policevue">
    <div class="cont_left">
      <!-- <fourbg></fourbg> -->
      <div class="flex" v-for="(item,i) of list" :key="i">
        <div class="img_box">
          <img :src="item.img" alt />
        </div>
        <div>
          <div class="tit">{{item.tit}}</div>
          <div :class="item.bool?'rednum':'num'">{{item.num}}</div>
        </div>
      </div>
      <div>
        <div class="sj_podium">
          <div class="post_jj" @click="()=>{this.centerbool=true}">发布紧急调度</div>
        </div>
      </div>
    </div>
    <div class="cont_right">
      <div class="flex right_bj">
        <img src="../assets/img/icon/zft@2x.png" alt />
        <span class="name">指挥台</span>
        <span class="num">32</span>
      </div>
       <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
      <div class="annou_box">
        <div
          class="announc1"
          @click="lookmapadd(item.point,20)"
          :class="item.checked?'redannounc1':'announc1'"
          v-for="(item,i) of list1"
          :key="i"
        >
          <div class="flex-between">
            <span v-if="item.checked==false">异常预警</span>
            <span v-if="item.checked==true">重大预警</span>
            <span style=" cursor: pointer;" @click="announ(i)">通知调度</span>
          </div>
          <p class="luduan">{{item.ld1}} — {{item.ld2}}</p>
          <p class="date" style="margin:.5rem 0">
            <span>2019-04-28</span>
            <span>10:47:00</span>
          </p>
          <p>车牌号：川K27354K4</p>
          <p>车辆属性：油罐车（危险车辆）</p>
          <p style="margin-top:1rem" v-if="item.checked==false">预警内容：车辆超速超载</p>
          <p
            class="luduan"
            style="margin-top:1rem"
            v-if="item.checked==true"
          >预警内容：车辆超速，冲破卡口。造成物质受损较为严重，请求将其拦截</p>
        </div>
      </div>
      <!-- 2 -->
      <div class="flex right_bj">
        <img src="../assets/img/icon/zfgl.png" alt />
        <span class="name">执法管理</span>
        <span class="num">32</span>
      </div>
        <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
      <div class="annou_box">
        <div
          class="announc1"
          @click="lookmapadd(item.point,20)"
          :class="item.checked?'redannounc1':'announc1'"
          v-for="(item,i) of list2"
          :key="i"
        >
          <div class="flex-between">
            <span v-if="item.checked==false">异常预警</span>
            <span v-if="item.checked==true">重大预警</span>
            <span style=" cursor: pointer;" @click="announ(i)">通知调度</span>
          </div>
          <p class="luduan">{{item.ld1}} — {{item.ld2}}</p>
          <p class="date" style="margin:.5rem 0">
            <span>2019-04-28</span>
            <span>10:47:00</span>
          </p>
          <p>车牌号：川K27354K4</p>
          <p>车辆属性：油罐车（危险车辆）</p>
          <p style="margin-top:1rem" v-if="item.checked==false">预警内容：车辆超速超载</p>
          <p
            class="luduan"
            style="margin-top:1rem"
            v-if="item.checked==true"
          >预警内容：车辆超速，冲破卡口。造成物质受损较为严重，请求将其拦截</p>
        </div>
      </div>
      <!-- 3 -->
      <div class="flex right_bj">
        <img src="../assets/img/icon/ysgl.png" alt />
        <span class="name">运输管理</span>
        <span class="num">32</span>
      </div>
       <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
      <div class="annou_box">
        <div
          class="announc1"
          @click="lookmapadd(item.point,20)"
          :class="item.checked?'redannounc1':'announc1'"
          v-for="(item,i) of list3"
          :key="i"
        >
          <div class="flex-between">
            <span v-if="item.checked==false">异常预警</span>
            <span v-if="item.checked==true">重大预警</span>
            <span style=" cursor: pointer;" @click="announ(i)">通知调度</span>
          </div>
          <p class="luduan">{{item.ld1}} — {{item.ld2}}</p>
          <p class="date" style="margin:.5rem 0">
            <span>2019-04-28</span>
            <span>10:47:00</span>
          </p>
          <p>车牌号：川K27354K4</p>
          <p>车辆属性：油罐车（危险车辆）</p>
          <p style="margin-top:1rem" v-if="item.checked==false">预警内容：车辆超速超载</p>
          <p
            class="luduan"
            style="margin-top:1rem"
            v-if="item.checked==true"
          >预警内容：车辆超速，冲破卡口。造成物质受损较为严重，请求将其拦截</p>
        </div>
      </div>
      <!-- 4 -->
      <div class="flex right_bj">
        <img src="../assets/img/icon/dlyh.png" alt />
        <span class="name">道路养护</span>
        <span class="num">32</span>
      </div>
       <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
      <div class="annou_box">
        <div
          class="announc1"
          @click="lookmapadd(item.point,20)"
          :class="item.checked?'redannounc1':'announc1'"
          v-for="(item,i) of list4"
          :key="i"
        >
          <div class="flex-between">
            <span v-if="item.checked==false">异常预警</span>
            <span v-if="item.checked==true">重大预警</span>
            <span style=" cursor: pointer;" @click="announ(i)">通知调度</span>
          </div>
          <p class="luduan">{{item.ld1}} — {{item.ld2}}</p>
          <p class="date" style="margin:.5rem 0">
            <span>2019-04-28</span>
            <span>10:47:00</span>
          </p>
          <p>车牌号：川K27354K4</p>
          <p>车辆属性：油罐车（危险车辆）</p>
          <p style="margin-top:1rem" v-if="item.checked==false">预警内容：车辆超速超载</p>
          <p
            class="luduan"
            style="margin-top:1rem"
            v-if="item.checked==true"
          >预警内容：车辆超速，冲破卡口。造成物质受损较为严重，请求将其拦截</p>
        </div>
      </div>
    </div>

    <!-- <div class="cont_center"></div> -->
       <div class="cont_center" v-show="centerbool">
         <img class="liangguang" src="../assets/img/xiugai/liangguang@1x.png" alt="">
         <fourbg></fourbg>
      <div class="flex-between tittle_top">
        <span>发布调度信息</span>
        <i class="el-icon-close" @click="()=>{this.centerbool=false}"></i>
      </div>
      <p>
        <span class="date_time">
          时间：
          <el-time-select
            v-model="value"
            icon="none"
            :picker-options="{
    start: '08:30',
    step: '00:05',
    end: '18:30'
  }"
            placeholder="请选择时间"
          ></el-time-select>
        </span>
        <span class="address">
          地点：
          <el-select
            v-model="value2"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择地点"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </span>
      </p>
      <div class="carlist_box">
        <div class="carlist_tit">附近可调配车辆</div>
        <div class="flex flex-wrap carlist">
          <span @click="carlistchange(i)" :class="item.bool?'active':''" v-for="(item,i)  of carlist" :key="i">{{item.num}}</span>
        </div>
      </div>
      <div class="peoplelist_box">
        <div class="peoplelist_tit">附近可调配人员</div>
        <div class="flex flex-wrap peoplelist">
          <span @click="peoplelistchange(i)" :class="item.bool?'active':''" v-for="(item,i) of peoplelist" :key="i">{{item.num}}</span>
        </div>
      </div>

      <div class="teax_box">
        <div class="teax_box_tit">调度信息文本</div>
        <div class="post_texa flex-between">
          <div class="texarea">
            <textarea v-model="text" cols="30" rows="10"></textarea>
          </div>
          <div>
            <div class="sq_look">收起查看地图</div>
            <div class="post_tz" @click="post">发送通知</div>
            <div class="flex-around img_btn">
              <img src="../assets/img/icon2/icon_shiping@1x.png" alt />
              <img src="../assets/img/icon2/icon_yuying@1x.png" alt />
              <img src="../assets/img/icon2/icon_dianhua@1x.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="allmap2"></div>
    <div class="input-item">
      <button
        class="btn"
        v-show="zsbtn"
        @click="()=>{this.zsbtn=!this.zsbtn}"
        id="add-satellite-layer"
        style="margin-right:1rem;"
      >切换3D</button>
      <button
        class="btn"
        v-show="!zsbtn"
        @click="()=>{this.zsbtn=!this.zsbtn}"
        id="remove-satellite-layer"
      >切换2D</button>
    </div>
    <div>
      <db-maker
        ref="infowindow"
        :deviceInfo="showMarker"
      ></db-maker>
    </div>
  </div>
</template>

<script>
import dbmaker from "./db/dingwei";
import fourbg from "./echarts/bg4";
import MapLoader from '../assets/Amap/Amap.js'
export default {
  components: {
    "db-maker": dbmaker,
    fourbg
  },
  data() {
    return {
        showMarker:[],
      zsbtn: true,
      infow:false,
      value:'',
      text:'',
      centerbool: false,
        options: [
        {
          value: "客运站",
          label: "客运站"
        },
        {
          value: "驾校",
          label: "驾校"
        },
        {
          value: "维修站",
          label: "维修站"
        }
      ],
      value2: [],
      changbth: [
        { name: "全部", checked: true },
        { name: "客运站", checked: false },
        { name: "道路卡口", checked: false },
        { name: "维修站", checked: false },
        { name: "驾校", checked: false }
      ],
      carlist: [
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: true },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false },
        { num: "G863445", bool: false }
      ],
      peoplelist: [
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: true },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false },
        { num: "张三", bool: false }
      ],
      list1: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.068514, 29.588433],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.070805, 29.586213],
          checked: true
        }
      ],
      list2: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.066752, 29.587113],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.068528, 29.587006],
          checked: true
        }
      ],
      list3: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.06775, 29.585322],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.069193, 29.584431],
          checked: true
        }
      ],

      list4: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.059647, 29.58494],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.063155, 29.581861],
          checked: true
        }
      ],
      list: [
        {
          img: require("../assets/img/icon/zft@2x.png"),
          tit: "指挥台事件",
          num: 32,
          bool: true
        },
        {
          img: require("../assets/img/icon/zfgl.png"),
          tit: "执法管理",
          num: 32,
          bool: true
        },
        {
          img: require("../assets/img/icon/ysgl.png"),
          tit: "运输管理",
          num: 32,
          bool: true
        },
        {
          img: require("../assets/img/icon/dlyh.png"),
          tit: "道路养护",
          num: 32,
          bool: true
        }
      ],
      peopleActive:'',
      carActive:'',
    };
  },
  mounted() {
       MapLoader().then(AMap => {
        this.map([105.06675492680017, 29.586301350821902], 16);
     })
    
  },
  methods: {
   post() {
      this.$message.success(this.text);
    },
    map(point, zoom) {
      var that = this;
       var googleLayer = new AMap.TileLayer({
        getTileUrl:
          "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile",
      }); //定义谷歌卫星切片图层

      var map = new AMap.Map("allmap2", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: point,
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: zoom,
      });
      //   addMarker();
      // 构造官方卫星、路网图层
      var satelliteLayer = new AMap.TileLayer.Satellite();
      var roadNetLayer = new AMap.TileLayer.RoadNet();
      document.querySelector("#add-satellite-layer").onclick = function() {
        map.add(googleLayer);
       console.log(that.zsbtn) 
      };

      document.querySelector("#remove-satellite-layer").onclick = function() {
        map.remove(googleLayer);
        console.log(that.zsbtn) 
        map.setMapStyle(that.$mapStyle);
      };
      //批量添加图层
        // map.add([googleLayer]);
      var zftlist = [
        [105.068514, 29.588433],
        [105.070805, 29.586213]
      ];
      var zfgllist = [
        [105.066752, 29.587113],
        [105.068528, 29.587006]
      ];
      var ysgllist = [
        [105.06775, 29.585322],
        [105.069193, 29.584431]
      ];
      var dlyhlist = [
        [105.059647, 29.58494],
        [105.063155, 29.581861]
      ];
      var infoWindow = new AMap.InfoWindow({ 
          offset: new AMap.Pixel(-30, -30),
             autoMove: true,
        // 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容）
        isCustom: true,
        anchor: 'bottom-center',
        // 弹出位置偏移量，可根据图标大小修改
           });
      makermap(
        zftlist,
        require("../assets/img/icon/zft@2x.png"),
        "xxxx路段发生车祸"
      );
      makermap(
        zfgllist,
        require("../assets/img/icon/zfgl.png"),
        "xxxx路段发生抢劫事件"
      );
      makermap(
        ysgllist,
        require("../assets/img/icon/ysgl.png"),
        "15：00发往红旗村汽车发生爆胎"
      );
      makermap(
        dlyhlist,
        require("../assets/img/icon/dlyh.png"),
        "xxxx道路养护中..."
      );
      function makermap(list, icon, content) {
        for (var i = 0, marker; i < list.length; i++) {
          var marker = new AMap.Marker({
            icon: icon,
            position: list[i],
            map: map
          });
          marker.content = that.$refs.infowindow.$el;
          marker.text=content
          marker.on("click", markerClick);
          // marker.emit('click', {target: marker}); //默认触发第一个事件
        }
      }

      function markerClick(e) {
        console.log(e.target.text);
        var text=e.target.text
        that.$refs.infowindow.infow=true;
        //当打开子组件是需要给子组件传递参数
        that.infowprops(text);
        infoWindow.setContent(e.target.content);
        map.setFitView([e.target]);
        infoWindow.open(map, e.target.getPosition());
      }
    },
    infowprops(text){
       this.showMarker=text 
    },
    carlistchange(i){
            var newlist = this.carlist;
      for (var item of newlist) {
        item.bool = false;
      }
      newlist[i].bool = true;
      if(newlist[i].bool = true){
        this.carActive=newlist[i].num
      }
      this.carlist = newlist;
    },
    peoplelistchange(i){
            var newlist = this.peoplelist;
      for (var item of newlist) {
        item.bool = false;
      }
       if(newlist[i].bool = true){
        this.peopleActive=newlist[i].num
      }
      newlist[i].bool = true;
      this.peoplelist = newlist;
    },
    announ() {
      this.centerbool=true
    },
    lookmapadd(point, zoom) {
      this.map(point, 20);
    }
  }
};
</script>
<style>
.policevue .amap-info-content {
  color: #000;
  min-width: 140px;
  font-size: 0.75rem;
}
.date_time input.el-input__inner {
  background: transparent;
  height: 2.275rem;
  width: 8.25rem;
  min-width:100px;
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
}
.policevue .el-icon-time{
 display: none;
}
.address input[type="text"] {
  background: transparent !important;
  border: 0;
}
.address input.el-input__inner {
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  background: transparent;
  height: 2.275rem!important;
}
.address .el-select__input {
  color: #00f8f8;
}
.address .el-input__icon {
  line-height: 1.875rem;
}
.el-select-dropdown {
  background: rgba(10, 29, 66, 0.7) !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #0086fb;
}
.el-select-dropdown__item {
  color: #fff;
}
.date_time .el-input--prefix .el-input__inner,
.date_time .el-input--suffix .el-input__inner {
  padding: 0.625rem;
}
.date_time div.el-input {
  width: 7.625rem;
}
</style>
<style lang="less" scoped>
.cont_left {
  width: 15%;
  position: absolute;
  // margin-top: 1.25rem;
  overflow-y: auto;
  left: 0;
  height: 100%;
  top: 0;
  padding-top: 10rem;
  z-index: 99;
  letter-spacing: 0.0625rem;
  padding-left: 1.5625rem;
  background: rgb(8, 23, 62);
  // border: 1px solid #0086fb;
  .flex {
    margin-bottom: 1.4625rem;
  }
  .img_box {
    margin-right: 0.625rem;
    vertical-align: middle;
  }
  .tit {
    letter-spacing: 0.125rem;
  }
  .rednum {
    font-size: 1.2rem;
    color: #fff;
  }
  .num {
    font-size: 1.2rem;
    color: #fff;
  }
  .sj_podium {
    width: 90%;
    // margin:auto;
    // margin-top: 3.125rem;
    position: relative;
     margin-top: 2.5rem;
    left: 50%;
    margin-left: -50%;
    .post_jj {
      width: 100%;
      height: 55px;
      background: #000;
      background: url(../assets/img/icon/tab@1x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      text-align: center;
      line-height: 55px;
    }
  }
}
.cont_right {
  width: 20%;
  height: 100%;
  position: absolute;
  background: rgb(8, 23, 62);
  top: 0;
  z-index: 99;
  right: 0.3rem;
  padding-top: 10rem;
  overflow-y: auto;
  .tit_bot_img{
    margin-top: -0.9375rem;
  }
  // margin-top: 3.125rem;
  .right_bj {
    line-height: 3.25rem;
    padding-left: .55rem;

    font-weight: bold;
    // margin-bottom: 1.25rem;
    img {
      width: 2.1875rem;
      object-fit: contain;
      vertical-align: middle;
    }
    > .name {
      margin: 0 .55rem;
      font-size: 1.25rem;
      letter-spacing: 0.0625rem;
    }
    > .num {
      font-size: 1.5rem;
      color: #f40000;
    }
  }
}
.annou_box {
  //   height: 77vh;
  overflow-y: auto;
}
.announc1 {
  padding: 0.975rem 1.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: 0.1s;
  .flex-between {
    padding: 0 0.625rem;
    > span:first-child {
      background: #eb6100;
      padding: 0.1875rem 0.5rem;
      border-radius: 0.625rem;
    }
    > span:last-child {
      background: #0086fb;
      padding: 0.1875rem 0.5rem;
      border-radius: 0.1875rem;
    }
  }
  .luduan {
    font-size: 1rem;
    margin-bottom: 0.1875rem;
  }
  .date > span:first-child {
    display: inline-block;
    margin-right: 0.9375rem;
  }
}

.redannounc1 {
  background: rgba(20, 44, 90, 0.8);
  background: url(../assets/img/icon3/bg@1x.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.redannounc1 .flex-between > span:first-child {
  background: #f70006 !important;
}
.redannounc1 .luduan {
  color: #f70006 !important;
}

#allmap2 {
  width: 100%;
  height: 100%;
  min-height: 64rem;
  position: absolute;
  top: 0;
  z-index: 0;
}
.input-item {
  position: fixed;
  bottom: 0.625rem;
  color: #00f8f8;
  right: -73%;
  > button {
    background: rgba(13, 36, 86, 0.8);
  }
  button:hover {
    background: #0086fb;
  }
}



.cont_center {
    .liangguang{
    position: absolute;
        top: -105px;
    left: -60px;
  }
  width: 40%;
  position: absolute;
  z-index: 99;
  right: 25%;
  top: 35%;
  border: 0.0625rem solid #026ba3c9;
  padding: 0.9375rem;
  background: rgba(13, 36, 86, 0.7);
  .tittle_top {
    font-size: 1.5rem;
    > span {
      color: #00f8f8;
    }
    i {
      font-size: 2.25rem;
    }
  }
  .date_time {
    margin-right: 1.25rem;
  }
}
.carlist_box,
.peoplelist_box,
.teax_box {
  font-size: 1rem;
  .carlist_tit,
  .peoplelist_tit {
    margin-bottom: 0.625rem;
    margin-top: 1.5625rem;
  }
}
.carlist,
.peoplelist,
.teax_box {
  font-size: 1rem;
  > span {
    width: 5.375rem;
    height: 2.1875rem;
    min-width: 68px;
    line-height: 2.1875rem;
    text-align: center;
    margin-right: 0.625rem;
    border: 0.0625rem solid #fff;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
}
.active {
  background: #009cef;
  border: 0 !important;
}
.post_texa {
  margin-top: 0.625rem;
  > div:first-child {
    width: 75%;
    height: 8.125rem;
    background: #fff;
  }
  > div:last-child {
    width: 24%;
    font-size: 1rem;
  }
}
.sq_look {
  color: #0086fb;
  text-align: center;
  padding: 0.375rem 0;
  border: 0.0625rem solid #00b6fb;
  cursor: pointer;
}
.post_tz {
  background: #0086fb;
  color: #fff;
  text-align: center;
  padding: 0.375rem 0;
  border: 0.0625rem solid #00b6fb;
  margin-top: 0.625rem;
  cursor: pointer;
}
.texarea {
  overflow: hidden;
  > textarea {
    width: 100%;
    padding: 0.9375rem;
    border: 0;
    font-size: 1rem;
  }
}
.img_btn {
  margin-top: 0.3125rem;
  > img {
    width: 1.625rem;
    object-fit: contain;
  }
}
.date_time{
  display: inline-block;
  min-width: 140px;
}
</style>