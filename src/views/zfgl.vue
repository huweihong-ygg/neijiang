<template>
  <div class="zfglvue">
    <div class="cont_left">
      
      <!-- <div class="title">内江市交通执法指挥台</div> -->
      <div class="item_l item">
          <fourbg></fourbg>
        <p class="ptit">车辆筛查情况</p>
            <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
        <!-- <div id="myChart" style="width:90%;height:85%"></div> -->
        <circles></circles>
      </div>
      <div class="item_l_2 item">
        
  <fourbg></fourbg>
        <p class="ptit">今日执法力量</p>
        <div class="sj_podium">
          <div class="flex-around">
            <div>
              <p style="color:#0086fb">
                <span class="top_btit">35/</span>人
              </p>
              <p>
                <span>在岗执法人员</span>
                <span style="color:#0086fb"></span>
              </p>
            </div>
            <div>
              <p style="color:#0086fb">
                <span class="top_btit">19/</span>辆
              </p>
              <p>
                <span>在岗执法车辆</span>
              </p>
            </div>
          </div>
          <!-- <img src="../assets/img/icon/icon_reli@1x.png" alt /> -->
          <div class="center_text">
            <span class="text">今日执法</span>
          </div>
          <div class="flex-around">
            <div>
              <p>
                <span class="top_btit">31/</span>人
              </p>
              <p>
                <span>可调动人员数量</span>
              </p>
            </div>
            <div>
              <p>
                <span class="top_btit">319/</span>辆
              </p>
              <p>
                <span>可调动车辆数量</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 城市安全 -->
      <div class="item_l_3">
          <fourbg></fourbg>

        <p class="ptit" style="padding: .625rem;">执法计划</p>
        <!-- <div id="myChart2" style="width:90%;height:95%"></div> -->
        <!-- <leida></leida> -->
        <div class="table2">
          <el-table
            :data="tableData2"
            @row-click="rowclick"
            stripe
            height="78%"
            style="width:98.6%;margin:auto;height:78%"
          >
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column prop="bm" label="部门"></el-table-column>
            <el-table-column prop="address" label="地点"></el-table-column>
            <el-table-column prop="lr" label="执法内容" min-width="150"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="cont_right">
      <div class="flex right_bj">
        <img src="../assets/img/icon2/icon_baojing@1x.png" alt />
        <span class="name">报警事件</span>
        <span class="num">32</span>
      </div>
      <div class="annou_box">
      <div
        class="announc1"
        @click="lookmapadd(item.point,20)"
        :class="item.checked?'redannounc1':'announc1'"
        v-for="(item,i) of list"
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

    <div class="cont_center" v-if="centerbool">
      <div class="flex-between tittle_top">
        <span>大洲路 — 河坝街</span>
        <i class="el-icon-close" @click="()=>{this.centerbool=false}"></i>
      </div>
      <p>
        <span class="date_time">2019-4-28</span>
        <span>10:46:00</span>
      </p>
      <div class="carlist_box">
        <div class="carlist_tit">附近可调配车辆</div>
        <div class="flex flex-wrap carlist">
          <span :class="item.bool?'active':''" v-for="(item,i)  of carlist" :key="i">{{item.num}}</span>
        </div>
      </div>
      <div class="peoplelist_box">
        <div class="peoplelist_tit">附近可调配人员</div>
        <div class="flex flex-wrap peoplelist">
          <span :class="item.bool?'active':''" v-for="(item,i) of peoplelist" :key="i">{{item.num}}</span>
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
    <!-- 执法查看 -->
    <div class="lookzf flex-between" v-if="lookzf">
      <div class="look_left">
        <i class="el-icon-close" @click="()=>{this.lookzf=false}"></i>
        <div class="item1">
          <p>执法时间：2020-07-01 16：35：02</p>
          <p>执法地点：河坝街道团结路口</p>
          <p>执法内容：卡口检测，危险车检测</p>
        </div>
        <div class="item2">
          <p>执法部门：1中队</p>
          <p class="bmry">部门人员：</p>
          <ul>
            <li v-for="(item,i) of 3" :key="i">
              <p>张三 1812828295</p>
              <p class="flex imgbtn">
                <img src="../assets/img/icon2/icon_dianhua@1x.png" alt />
                <img src="../assets/img/icon2/icon_shiping@1x.png" alt />
                <img src="../assets/img/icon2/icon_yuying@1x.png" alt />
                 <span  class="playzf" @click="()=>{lookzfhm=true}">启动执法画面</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="look_right" v-if="lookzfhm">
         <i class="el-icon-close" @click="()=>{this.lookzfhm=false}"></i>
         <div class="imgbox">
            <!-- <img src="../assets/img/icon3/1.png" alt=""> -->
            <video controls src="../assets/img/sg1.mp4"></video>
         </div>
      </div>
    </div>

    <div id="allmap2"></div>

       <div class="input-item">
      <button class="btn" v-show="zsbtn" @click="()=>{this.zsbtn=!this.zsbtn}" id="add-satellite-layer" style="margin-right:1rem;">切换3D</button>
      <button class="btn" v-show="!zsbtn"  @click="()=>{this.zsbtn=!this.zsbtn}" id="remove-satellite-layer">切换2D</button>
    </div>

  </div>
</template>

<script>
import circles from "./echarts/circle";

import MapLoader from '../assets/Amap/Amap.js'
import fourbg from "./echarts/bg4";
// import leida from "./echarts/leida";
export default {
  components: {
    circles,
    fourbg
  },
  data() {
    return {
      text: "",
      zsbtn:false,
      tableData2: [
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "团结街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测"
        }
      ],
      centerbool: false,
      lookzf: false,
      lookzfhm:false,
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
      list: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point:[105.068514,29.588433],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
            point:[105.070805,29.586213],
          checked: true
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
            point:[105.070311,29.593019],
          checked: false
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
            point:[105.06382,29.593466],
          checked: false
        },
        {
         ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
            point:[105.067533,29.591489],
          checked: false
        },
       
      ]
      // tableData: [{
      //   date: '较为缓慢',
      //   name: '30',
      //   address: '3452'
      // }]
    };
  },
  mounted() {
  MapLoader().then(AMap => {
     this.map([105.06675492680017, 29.586301350821902], 16)
     })
  },
  methods: {
    lookmapadd(point,zoom){
      this.map(point,20)
    },
    map(point,zoom){
      var that=this
      var map = new AMap.Map("allmap2", {
      resizeEnable: true,
      mapStyle:that.$mapStyle,
      center: point,
        //   pitch:47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode:'3D',
      zoom: zoom
    });
    addMarker();
    // 构造官方卫星、路网图层
    var satelliteLayer = new AMap.TileLayer.Satellite();
    var roadNetLayer = new AMap.TileLayer.RoadNet();

    //批量添加图层
    map.add([satelliteLayer]);
    //添加marker标记
    function addMarker() {
      map.clearMap();
    //  let pointlist=[
    //    {point:[105.068514,29.588433],icon:require('../assets/img/icon/yellow.png')},
    //    {point:[105.070805,29.586213],icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'},
    //    {point:[105.070311,29.593019],icon:require('../assets/img/icon/yellow.png')},
    //    {point:[105.06382,29.593466],icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'},
    //    {point:[105.067533,29.591489],icon:require('../assets/img/icon/yellow.png')},
    //  ];

// for(var item of pointlist){
  var marker = new AMap.Marker({
        icon:require('../assets/img/icon/yellow.png'),
        map: map,
        position:[105.068514,29.588433],
        offset: new AMap.Pixel(-23, -30)
      });
    
      marker.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker.on("click", function() {
        infoWindow2.open(map, marker.getPosition());
          map.setFitView([ marker ])
      });
    }

      var marker1 = new AMap.Marker({
        icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
        map: map,
        position:[105.070805,29.586213],
        offset: new AMap.Pixel(-23, -30)
      });
    
      marker1.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker1.on("click", function() {
        infoWindow.open(map, marker1.getPosition());
          map.setFitView([ marker1 ])
      });

          var marker2 = new AMap.Marker({
        icon:require('../assets/img/icon/yellow.png'),
        map: map,
        position:[105.070311,29.593019],
        offset: new AMap.Pixel(-23, -30)
      });
    
      marker2.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker2.on("click", function() {
        infoWindow2.open(map, marker2.getPosition());
          map.setFitView([ marker2 ])
      });
            var marker = new AMap.Marker({
          icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
        map: map,
        position:[105.066864,29.586772],
        offset: new AMap.Pixel(-23, 30)
      });
    
      marker.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker.on("click", function() {
        infoWindow.open(map, marker.getPosition());
          map.setFitView([ marker ])
      });


                var marker3 = new AMap.Marker({
          icon:'//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
        map: map,
        position:[105.065276,29.589338],
        offset: new AMap.Pixel(-23, -30)
      });
    
      marker3.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker3.on("click", function() {
        infoWindow.open(map, marker3.getPosition());
          map.setFitView([ marker3 ])
      })

      
                var marker4 = new AMap.Marker({
          icon:require('../assets/img/icon/yellow.png'),
        map: map,
        position:[105.067533,29.591489],
        offset: new AMap.Pixel(-23, -30)
      });
    
      marker4.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker4.on("click", function() {
        infoWindow.open(map, marker4.getPosition());
          map.setFitView([ marker4 ])
      })
    
    //实例化信息窗体
    var title = `<div class="map_top" style="  width: 18.75rem;
  border-radius: 0.9375rem;
  background: rgba(160, 32, 40, 0.7);"> <div class="top" style="padding: 0.9375rem;"> <p style=" margin-bottom: 0.3125rem;">事件时间：2019-04-28 10:47:00</p><p style=" margin-bottom: 0.3125rem;">事件地点：内江市交通路建设银行</p><p style=" margin-bottom: 0.3125rem;">事件地点：发生重大车祸事故</p></div><div class="bot" style=" background: #d2221f;
    padding: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;">预计影响范围2.9km ，请及时疏导！</div><div class="sj" style=" width: 0;
    height: 0;
    position: absolute;
    left: 40%;
    border-width: 1.275rem;
    border-style: solid;
    border-color: red transparent transparent transparent;"></div></div>`,
      content = [];

    var infoWindow = new AMap.InfoWindow({
      isCustom: true, //使用自定义窗体
      content: createInfoWindow(title, content.join("<br/>")),
      offset: new AMap.Pixel(16, -45)
    });

    //构建自定义信息窗体
    function createInfoWindow(title, content) {
      var info = document.createElement("div");
      // info.className = "custom-info input-card content-window-card";

      //可以通过下面的方式修改自定义窗体的宽高
      // info.style.width = "400px";
      // 定义顶部标题
      var top = document.createElement("div");
      var titleD = document.createElement("div");
      var closeX = document.createElement("i");
      // top.className = "info-top";
      titleD.innerHTML = title;
      // closeX.innerHTML = "x";
      closeX.style.position = "absolute";
      closeX.className = "el-icon-close";
      closeX.style.fontSize = "30px";
      closeX.style.right = "2%";
      closeX.style.top = "2%";
      closeX.onclick = closeInfoWindow;

      top.appendChild(titleD);
      top.appendChild(closeX);
      info.appendChild(top);

      return info;
    }

// 2
 var mes2 = "事故发生了";
      var title2 = `<div class="map_top" style="  width: 18.75rem;
 
  border-radius: 0.9375rem;
  background: #E6A23C83;"> <div class="top" style="padding: 0.9375rem;"> <p style=" margin-bottom: 0.3125rem;">事件地点: 玉溪路公园街390号</p><p style=" margin-bottom: 0.3125rem;">养护人员：刘晓波</p></div><div class="bot" style=" background: #E6A23C;
    padding: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;">道路施工中养护中,路段较拥挤</div><div class="sj" style=" width: 0;
    height: 0;
    position: absolute;
    left: 40%;
    border-width: 1.275rem;
    border-style: solid;
    border-color: #E6A23C transparent transparent transparent;"></div></div>`,
        content2 = [];

      var infoWindow2 = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: createInfoWindow(title2, content2.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
      });

      //构建自定义信息窗体
      function createInfoWindow(title, content) {
        var info = document.createElement("div");
        // info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        // info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("i");
        // top.className = "info-top";
        titleD.innerHTML = title;
        // closeX.innerHTML = "x";
        closeX.style.position = "absolute";
        closeX.className = "el-icon-close";
        closeX.style.fontSize = "30px";
        closeX.style.right = "2%";
        closeX.style.top = "2%";
        closeX.onclick = closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);

        return info;
      }




document.querySelector("#add-satellite-layer").onclick = function() {
      map.add(satelliteLayer);
    }

    document.querySelector("#remove-satellite-layer").onclick = function() {
      map.remove(satelliteLayer);
    }

    //关闭信息窗体
    function closeInfoWindow() {
      map.clearInfoWindow();
    }
    },
    rowclick() {
      this.lookzf = true;
    },
    post() {
      this.$message.success(this.text);
    },
    announ(i) {
      // var newlist = this.list;
      // for (var item of newlist) {
      //   item.checked = false;
      // }
      // newlist[i].checked = true;
      // this.list = newlist;
      this.centerbool = true;
    }
  }
};
</script>
<style>
.redannounc1 .el-table td {
  color: #f70006;
}
.announc1 tr > th:nth-child(1),
.announc1 tr > td:nth-child(1) {
  width: 33%;
}
.announc1 tr > th:nth-child(2),
.announc1 tr > td:nth-child(2) {
  width: 33%;
}
.announc1 tr > th:nth-child(3),
.announc1 tr > td:nth-child(3) {
  width: 34%;
}
.table2 .el-progress-bar__outer {
  background: transparent;
}
.table2 .el-table th {
  text-align: center;
  height: 1.875rem;
  font-size: 0.9375rem;
  background: rgba(10, 29, 66, 0.7);
  color: #fff;
}
.table2 .el-table td {
  text-align: center;
  height: 1.875rem;
  font-size: 0.75rem;
  color: #fff;
  border-bottom: none;
}
.table2 .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba(10, 29, 66, 0.7);
}
.table2 .el-table--enable-row-hover .el-table__body tr > td {
  background: rgba(14, 37, 85, 0.7);
}
.table2 .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #0086fb;
  cursor: pointer;
}
</style>
<style lang="less" scoped>
.zfglvue {
  color: #fff;
  font-size: 0.875rem;
}
.cont_left {
  width: 20%;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  padding-top: 10rem;;
  left: 1.25rem;
  .item {
    margin-bottom: 1rem;
    .tit_bot_img{
      margin-top: -0.7075rem;
    }
  }
  .title {
    font-size: 2.125rem;
    margin-top: 1.25rem;
  }

  .item_l {
    width: 100%;
    height: 23vh;
    position: relative;
    margin-top: .5rem;
    padding: .625rem;
    background: rgba(20, 44, 90, 0.9);
  }
}
.ptit {
  font-size: 1.5rem;
  color: #fefefe;
}
.item_l_2 {
  position: relative;
  height: 26vh;
  padding:.625rem;
  background: rgba(20, 44, 90, 0.9);
}
#myChart,
#myChart2 {
  // background: rgba(20, 44, 90, 0.9);
}
.sj_podium {
  width: 100%;
  text-align: center;
  position: relative;
  .flex-around {
    margin-bottom: 1.875rem;
  }
  // img {
  //   position: absolute;
  //   top: 50%;
  //   margin-left: -2.6875rem;
  //   margin-top: -2.3125rem;
  //   left: 50%;
  // }
}
.center_text {
  position: absolute;
  width: 5rem;
  height: 5rem;
  padding: 1.25rem;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-left: -2.5rem;
  margin-top: -2.5rem;
  background: url(../assets/img/icon/icon_reli@1x.png);
  background-size: contain;
  background-repeat: no-repeat;
  .text {
    display: inline-block;
    margin-top: -0.375rem;
    color: #00f8f8;
  }
}
.top_btit {
  font-size: 1.75rem;
}
.sj_podium {
  // background: rgba(20, 44, 90, 0.9);
  // background: url(../assets/img/icon3/bg@1x.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.625rem;
}
.item_l_3 {
  width: 100%;
  height: 29vh;
  position: relative;

  background: rgba(20, 44, 90, 0.9);
  .table2 {
    height: 90%;
    position: relative;
  }
}

.cont_right {
  width: 20%;
  height:100%;
  position: absolute;
 background: rgb(8, 23, 62);
top: 0;
  z-index: 99;
  right: .3rem;
  padding-top: 10rem;
  // margin-top: 3.125rem;
  .right_bj {
    line-height: 2.25rem;
    margin-bottom: 1.25rem;
    img {
      width: 2.1875rem;
      object-fit: contain;
      vertical-align: middle;
    }
    > .name {
      margin: 0 1.25rem;
      font-size: 1rem;
      letter-spacing: 0.0625rem;
    }
    > .num {
      font-size: 1.5rem;
      color: #f40000;
    }
  }
}
.annou_box{
 height:77vh;
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
.table3 {
  margin-top: 1.25rem;
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
.cont_center {
  width: 40%;
  position: absolute;
  z-index: 99;
  right: 25%;
  top: 35%;
  border: 0.0625rem solid #009cef;
  padding: 0.9375rem;
  background: rgba(13, 36, 86, 0.7);
  .tittle_top {
    font-size: 1.5rem;
    > span {
      color: #f70006;
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
    line-height: 2.1875rem;
    text-align: center;
    margin-right: 0.625rem;
    border: 0.0625rem solid #fff;
    margin-bottom: 0.5rem;
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
}
.post_tz {
  background: #0086fb;
  color: #fff;
  text-align: center;
  padding: 0.375rem 0;
  border: 0.0625rem solid #00b6fb;
  margin-top: 0.625rem;
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

//
.lookzf {
  width: 51.875rem;
  height: 26rem;
  position: fixed;
  z-index: 99;
  left: 24%;
  bottom: 10%;
}
.look_left {
  width: 38%;
  background: rgb(14, 38, 86);
  padding: 1.375rem 0.9375rem;
  font-size: 0.9375rem;
  // overflow-y: auto;
  position: relative;
  .el-icon-close {
    position: absolute;
    top: 0.3125rem;
   font-size: 2.675rem;
    right: 0.625rem;
  }
  .item1 {
    p {
      margin-bottom: 0.425rem;
    }
  }
  .item2 {
    margin-top: 2.5rem;
    .bmry {
      margin: 0.625rem 0;
    }
    ul > li {
      margin-bottom: 0.625rem;
    }
    .imgbtn {
      margin-top: 0.4125rem;
      > img {
        width: 1.825rem;
        height: 1.825rem;
        object-fit: contain;
        margin-right: 1.25rem;
      }
      .playzf{
        background: #eb6100;
        
        padding:.125rem .625rem;
        border-radius: .9375rem;
        cursor: pointer;
      }
    }
  }
}
.look_right {
  width: 60%;
 background: rgb(14, 38, 86);
  position: relative;
  z-index:99;
  text-align: right;
  .el-icon-close {
    top: 0.3125rem;
    font-size: 2.675rem;
    right: 0.625rem;
  }
  .imgbox{
    width: 95%;
    height: 22rem;
    margin: auto;
    padding: 0 1.25rem .625rem .625rem;
    overflow: hidden;
    >video{
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
}
#allmap2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
}

.input-item{
  position: fixed;
  bottom:.625rem;
  color: #00f8f8;
  right:-73%;
  >button{
      background: rgba(13, 36, 86, 0.8);
  }
  button:hover{
    background: #0086fb;
  }
}
</style>