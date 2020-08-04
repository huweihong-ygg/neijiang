<template>
  <div class="podium">
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
      <!-- <fourbg></fourbg> -->
      <!-- <div class="sj_podium">
        <div class="post_jj" @click="()=>{this.centerbool=true}">发布紧急调度</div>
      </div>-->
      <!-- 实时视频监控画面 -->
      <div class="monitor">
        <div class="tit">
          <img src="../assets/img/icon/fk.png" alt /> 实时视频监控画面
          <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt="">
          </div>
        </div>
        <div class="changebtn flex-around">
          <span
            :class="item.checked?'active':''"
            @click="change(i)"
            v-for="(item,i) of changbth"
            :key="i"
          >{{item.name}}</span>
        </div>
        <div class="flex-between flex-wrap videobox">
          <div v-for="(item,i) of 16" :key="i" @click.stop="change1map">
            <video :controls="i==0?true:false" src="../assets/img/huasan.mp4"></video>
            <p class="video_bot flex-between" style="cursor: pointer;">
              <span>
                <span class="gre_cir"></span> 环城路路口
              </span>
              <span>12:35:12</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 标记图层div -->
    <div class="map_top" v-if="false">
      <div class="top">
        <p>事件时间：2020-07-02</p>
        <p>事件地点：xxx街道xxx路三段xx路口</p>
        <p>事件地点：发生重大车祸事故</p>
      </div>
      <div class="bot">预计影响范围2.9km ，请及时疏导！</div>
      <div class="sj"></div>
    </div>

    <div class="cont_center" v-show="centerbool">
      <img class="liangguang" src="../assets/img/xiugai/liangguang@1x.png" alt="">
      <fourbg class="fourbg"></fourbg>
      <div class="flex-between tittle_top">
        <span>发布调度信息</span>
        <i class="el-icon-close" @click="()=>{this.centerbool=false}"></i>
      </div>
      <p>
        <span class="date_time">
          时间：
          <el-time-select
            v-model="value"
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
    <div id="allmap"></div>

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
  </div>
</template>

<script>
import json from "../assets/map1.json";

import MapLoader from "../assets/Amap/Amap.js";
import fourbg from "./echarts/bg4";
export default {
  components: {
    fourbg
  },
  data() {
    return {
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
      zsbtn: false,
      value: "",
      text: "",
      mapjson: json.mapList,
      centerbool: false,
      changbth: [
        { name: "全部", checked: true },
        { name: "客运站", checked: false },
        { name: "道路卡口", checked: false },
        { name: "维修站", checked: false },
        { name: "驾校", checked: false }
      ],
      carlist: [
        { num: "G863441", bool: false },
        { num: "G863442", bool: false },
        { num: "G863443", bool: false },
        { num: "G863444", bool: false },
        { num: "G863445", bool: false },
        { num: "G863446", bool: false },
        { num: "G863447", bool: false },
        { num: "G863448", bool: true },
        { num: "G863449", bool: false },
        { num: "G863410", bool: false },
        { num: "G863411", bool: false },
        { num: "G863412", bool: false }
      ],
      peoplelist: [
        { num: "张三1", bool: false },
        { num: "张三2", bool: false },
        { num: "张三3", bool: false },
        { num: "张三4", bool: false },
        { num: "张三5", bool: false },
        { num: "张三6", bool: false },
        { num: "张三7", bool: false },
        { num: "张三8", bool: true },
        { num: "张三9", bool: false },
        { num: "张四1", bool: false },
        { num: "张四2", bool: false },
        { num: "张四3", bool: false }
      ],
      list: [
        {
          img: require("../assets/img/icon/icon_baojing@1x.png"),
          tit: "报警事件",
          num: 32,
          bool: true
        },
        {
          img: require("../assets/img/icon/icon_jiankong@1x.png"),
          tit: "城市监控",
          num: 42354,
          bool: false
        },
         {
          img: require("../assets/img/icon/yanghu.png"),
          tit: "养护公司",
          num: 3,
          bool: true
        },
        {
          img: require("../assets/img/icon/yunsu.png"),
          tit: "运输公司",
          num: 3,
          bool: false
        },
        {
          img: require("../assets/img/icon/daolik.png"),
          tit: "道路卡口管控点",
          num: 3452,
          bool: false
        },

        {
          img: require("../assets/img/icon/yellowkk (1).png"),
          tit: "维修线路",
          num: 5,
          bool: false
        },
        {
          img: require("../assets/img/icon/icon_keyundian@1x.png"),
          tit: "客运线路",
          num: 325,
          bool: false
        },

        {
          img: require("../assets/img/icon/icon_matou@1x.png"),
          tit: "码头",
          num: 52,
          bool: false
        },
        {
          img: require("../assets/img/icon/icon_xunjian@1x.png"),
          tit: "在线巡查人员",
          num: 52,
          bool: false
        },
        {
          img: require("../assets/img/icon/icon_yanghurenyuan@1x.png"),
          tit: "在线养护人员",
          num: 532,
          bool: false
        },
        {
          img: require("../assets/img/icon/icon_weixiuzhan@1x.png"),
          tit: "维修站",
          num: 532,
          bool: false
        }
      ],
      peopleActive:'',
      carActive:'',
    };
  },
  methods: {
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
    change1map() {
      this.map([105.067106, 29.589528], 19);
      this.zsbtn=false
    },
    map(center, zoom) {
      var that = this;
      //   var googleLayer = new AMap.TileLayer({
      //   getTileUrl:
      //     "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile",
      // }); //定义谷歌卫星切片图层
      var map = new AMap.Map("allmap", {
        resizeEnable: true,
        disableSocket:true,
        viewMode:'3D',
        mapStyle:that.$mapStyle,
        center: center,
        pitch: 53, // 地图俯仰角度，有效范围 0 度- 83 度/
        // viewMode: "3D",
        zoom: zoom,
        // layers: [googleLayer], //设置图层
      });
      addMarker();
      // 构造官方卫星、路网图层
      var satelliteLayer = new AMap.TileLayer.Satellite();

      //批量添加图层
      // that.$nextTick(()=>{
        map.add([satelliteLayer]);
      // }) 
      // map.setMapStyle(that.$mapStyle);
       
      //养护公司
      var yhcompany = [
        { point: [105.069319, 29.586975], text: "爱德华汽车养护公司" },
        { point: [105.065787, 29.589186], text: "内江市汽车养护公司" },
        { point: [105.066012, 29.586341], text: "明明汽车养护公司" }
      ];
      var yscompany = [
        { point: [105.074705, 29.569962], text: "爱德华汽车运输公司" },
        { point: [105.074925, 29.586446], text: "内江市汽车运输公司" },
        { point: [105.073793, 29.591327], text: "明明汽车运输公司" }
      ];
      for (var item of yhcompany) {
        var marker4 = new AMap.Marker({
          icon: new AMap.Icon({
            image: require("../assets/img/icon/yhcompany.png"),
            size: new AMap.Size(62, 62) //图标大小
            // imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });

        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }

      for (var item of yscompany) {
        var marker4 = new AMap.Marker({
          icon: new AMap.Icon({
            image: require("../assets/img/icon/yscompany.png"),
            size: new AMap.Size(62, 62) //图标大小
            // imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });

        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
   
        marker4.on("click", markerClick);
      }

      // 码头
      var matou = [
        { mat: [105.07047, 29.588374], text: "湾湾码头" },
        { mat: [105.06657, 29.589755], text: "龙门码头" },
        { mat: [105.070765, 29.591303], text: "内江老码头" },
        { mat: [105.066141, 29.593402], text: "滴滴码头" }
      ];
      for (var item of matou) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_mt@1x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.mat,
          offset: new AMap.Pixel(-23, -30)
        });

        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }

      //监控
      var jk = [
        { point: [105.067106, 29.589528], text: "道路养护人员:李晓迪" },
        { point: [105.063673, 29.589943], text: "道路养护人员:艾晓迪" },
        { point: [105.066833, 29.586696], text: "道路养护人员:李晓迪" },
        { point: [105.071848, 29.583864], text: "道路养护人员:李晓迪" },
        { point: [105.070851, 29.586244], text: "道路养护人员:李晓迪" },
        { point: [105.068329, 29.594314], text: "道路养护人员:太晓迪" },
        { point: [105.062493, 29.593082], text: "道路养护人员:李晓迪" }
      ];
      for (var item of jk) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_yh@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_yh@1x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }

      // yellowkk (1)
      var kakou = [
        { point: [105.067535, 29.59151], text: "西林大桥卡口" },
        { point: [105.068184, 29.593973], text: "西林大道卡口" },
        { point: [105.070346, 29.592905], text: "临江路卡口" },
        { point: [105.067722, 29.577316], text: "汽车站卡口" },
        { point: [105.076283, 29.579201], text: "新江路卡口" }
      ];
      for (var item of kakou) {
        var marker4 = new AMap.Marker({
          icon: require("../assets/img/icon/daolik.png"),
          //                icon: new AMap.Icon({
          //             image:   require("../assets/img/icon/daolik.png"),
          //             size: new AMap.Size(62, 62),  //图标大小
          //             imageSize: new AMap.Size(36,36)
          //         }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }
      var car = [
        { point: [105.069503, 29.57295], text: "黄桷井市场客运站" },
        { point: [105.06772, 29.576237], text: "内江市汽车站" }
      ];
      for (var item of car) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_che@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_che@1x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }

      var wx = [
        { point: [105.059346, 29.58105], text: "维修站" },
        { point: [105.046933, 29.5791], text: "维修站" },
        { point: [105.055109, 29.589064], text: "维修站" },
        { point: [105.056782, 29.575106], text: "维修站" }
      ];
      for (var item of wx) {
        var marker4 = new AMap.Marker({
          // icon:,
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_wxz@1x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item.point,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.setTitle(item.text);
        marker4.content = item.text;
        marker4.on("click", markerClick);
      }
      function markerClick(e) {
        //普通标记弹框的方法
        var infoWindow = new AMap.InfoWindow({
          offset: new AMap.Pixel(0, -30)
        });
        infoWindow.setContent(e.target.content);
        map.setFitView([e.target]);
        infoWindow.open(map, e.target.getPosition());
      }
      //添加marker标记
      function addMarker() {
        map.clearMap();
        // var marker = new AMap.Marker({
        //   map: map,
        //   position: [105.06675492680017, 29.586301350821902]
        // });
        var marker = new AMap.Marker({
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_bjsj@2x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(36, 36)
          }),
          map: map,
          zIndex: 500,
          position: [105.06675492680017, 29.586301350821902],
          offset: new AMap.Pixel(-23, -40)
        });

        marker.setMap(map);
        //鼠标点击marker弹出自定义的信息窗体
        marker.on("click", function() {
          infoWindow.open(map, marker.getPosition());
          map.setFitView([marker]);
        });
      }

      var marker2 = new AMap.Marker({
        icon: new AMap.Icon({
          image: require("../assets/img/icon/icon_bjsj@2x.png"),
          size: new AMap.Size(62, 62), //图标大小
          imageSize: new AMap.Size(36, 36)
        }),
        map: map,
        zIndex: 500,
        position: [105.0674376389875, 29.58303485797507],
        offset: new AMap.Pixel(-23, -40)
      });

      marker2.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker2.on("click", function() {
        infoWindow.open(map, marker2.getPosition());
        map.setFitView([marker2]);
      });

      var marker3 = new AMap.Marker({
        // icon: ,
        map: map,
        icon: new AMap.Icon({
          image: require("../assets/img/icon/icon_bjsj@2x.png"),
          size: new AMap.Size(62, 62), //图标大小
          imageSize: new AMap.Size(36, 36)
        }),
        zIndex: 500,
        position: [105.07355866119736, 29.591609197779086],
        offset: new AMap.Pixel(-23, -40)
      });

      marker3.setMap(map);
      //鼠标点击marker弹出自定义的信息窗体
      marker3.on("click", function() {
        infoWindow.open(map, marker3.getPosition());
        map.setFitView([marker3]);
      });

      //实例化信息窗体
      var mes1 = "事故发生了";
      var title = `<div class="map_top" style="  width: 18.75rem;
 
  border-radius: 0.9375rem;
  background: rgba(160, 32, 40, 0.7);"> <div class="top" style="padding: 0.9375rem;"> <p style=" margin-bottom: 0.3125rem;">事件时间：2020-07-02</p><p style=" margin-bottom: 0.3125rem;">事件地点：xxx街道xxx路三段xx路口</p><p style=" margin-bottom: 0.3125rem;">事件地点：发生重大车祸事故</p></div><div class="bot" style=" background: #d2221f;
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
      
      document.querySelector("#add-satellite-layer").onclick = function() {
        map.add(satelliteLayer);
        //  console.log(that.zsbtn)
      };

      document.querySelector("#remove-satellite-layer").onclick = function() {
        map.remove(satelliteLayer);
        //  map.setMapStyle(that.$mapStyle);
        //  console.log(that.zsbtn)
          // mapStyle:that.$mapStyle,
      };

      //  { point: [105.06323,29.582053], text: "西林大道卡口" },
      // 绘画路线点击显示信息

      // var path = [//每个弧线段有两种描述方式
      //       [105.059641,29.581054],//起点
      //       //第一段弧线
      //       [105.061208,29.581255,105.060382,29.581059],//控制点，途经点
      //       //第二段弧线
      //       [105.063166,29.582062,105.0622,29.581661],//控制点，途经点//弧线段有两种描述方式1
      //       //第三段弧线
      //       [//弧线段有两种描述方式2
      //        105.064491,29.582622,//控制点

      //       ],
      //       //第四段弧线

      //       //控制点，控制点，途经点，每段最多两个控制点
      //   ];

      var markerxl = new AMap.Marker({
        icon: require("../assets/img/icon/yellowkk (1).png"),
        map: map,
        position: [105.062195, 29.58168],
        offset: new AMap.Pixel(0, -15)
      });

      markerxl.setMap(map);
      markerxl.on("click", function() {
        infoWindow2.open(map, markerxl.getPosition());
        map.setFitView([polygon]);
      });

      var markerxl2 = new AMap.Marker({
        icon: require("../assets/img/icon/yellowkk (1).png"),
        map: map,
        position: [105.069882, 29.587595],
        offset: new AMap.Pixel(0, -15)
      });

      markerxl2.setMap(map);
      //     //鼠标点击marker弹出自定义的信息窗体
      markerxl2.on("click", function() {
        infoWindow2.open(map, markerxl2.getPosition());
        map.setFitView([polygon2]);
      });

      //   bezierCurve.setMap(map)
      // 缩放地图到合适的视野级别
      // map.setFitView([ bezierCurve ])

      //实例化信息窗体
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
      //

      var path = [
        [105.061207, 29.581252],
        [105.061331, 29.581154],
        [105.06338, 29.581994],
        [105.063305, 29.58212]
      ];
      var path2 = [
        [105.069362, 29.588011],
        [105.069882, 29.587595],
        [105.070462, 29.586741],
        [105.070767, 29.586222],
        [105.070813, 29.586239],
        [105.070215, 29.587222],
        [105.069923, 29.587612],
        [105.069391, 29.588043]
      ];

      var polygon = new AMap.Polygon({
        map: map,
        path: path, //设置多边形边界路径
        strokeColor: "#f20",
        strokeWeight: 6,
        strokeOpacity: 0.9,
        fillOpacity: 0.8,
        fillColor: "#f00",
        zIndex: 50
      });
      var polygon2 = new AMap.Polygon({
        map: map,
        path: path2, //设置多边形边界路径
        strokeColor: "#f20",
        strokeWeight: 6,
        strokeOpacity: 0.9,
        fillOpacity: 0.8,
        fillColor: "#f00",
        zIndex: 50
      });

      // rectangle.setMap(map)
      // 缩放地图到合适的视野级别
      // 缩放地图到合适的视野级别

      // 缩放地图到合适的视野级别

      var polyEditor = new AMap.PolyEditor(map, polygon);
      polygon.on("click", function() {
        infoWindow2.open(map, markerxl.getPosition());
        map.setFitView([polygon]);
      });
      var polyEditor2 = new AMap.PolyEditor(map, polygon2);
      polygon2.on("click", function() {
        infoWindow2.open(map, markerxl2.getPosition());
        map.setFitView([polygon2]);
      });
      //  circle.off('click', showInfoC);
      //关闭信息窗体
      function closeInfoWindow() {
        map.clearInfoWindow();
      }
    },
    post() {
      console.log(this.carActive,this.peopleActive)
      this.$message.success(this.text);
       
    },
    change(i) {
      var newlist = this.changbth;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.changbth = newlist;
    }
  },
  mounted() {
    MapLoader().then(AMap => {
      this.map([105.06675492680017, 29.586301350821902], 16);
    });
  }
};
</script>
<style >
.date_time input.el-input__inner {
  background: transparent;
  height: 2.275rem;
  width: 8.25rem;
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
}
.address input[type="text"] {
  background: transparent !important;
  border: 0;
}
.address input.el-input__inner {
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  background: transparent;
  height: 2.275rem;
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
div.el-picker-panel {
  background: rgba(10, 29, 66, 0.7) !important;
  color: #fff;
}
.date_time i.el-input__icon {
  display: none !important;
}
.time-select-item:hover {
  background: #0086fb;
}
.amap-info-content {
  color: #000;
  min-width: 140px;
  font-size: 0.75rem;
}
  .fourbg img{
      width:40px!important;
      height:40px!important;
  }
</style>
<style lang="less" scoped>

// rem
.podium {
  color: #fff;
}
.cont_left {
  width: 15%;
  position: absolute;
  // margin-top: 1.25rem;
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
    margin-bottom: .6625rem;
  }
  .img_box {
    margin-right: 0.625rem;
    vertical-align: middle;
    >img{
      width: 1.875rem;
      height:1.875rem;
      object-fit: contain;
    }
  }
  .tit {
    letter-spacing: 0.125rem;
  }
  .rednum {
    font-size:1rem;
    color: #f40000;
  }
  .num {
    font-size: 1.2rem;
    color: #fff;
  }
  .sj_podium {
    width: 90%;
    // margin:auto;
    // margin-top: 3.125rem;
    position: absolute;
    bottom: 3%;
    left: 50%;
    margin-left: -45%;
    .post_jj {
      width: 100%;
      height: 5rem;
      background: #000;
      background: url(../assets/img/icon/tab@1x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      text-align: center;
      line-height: 5rem;
    }
  }
}
.cont_right {
  width: 22%;
  padding: 0 1.25rem;
  position: absolute;
  height: 100%;
  background: rgb(8, 23, 62);
  top: 0%;
  right: 0;
  z-index: 99;
  padding-top: 10rem;
  // padding-top: 3.125rem;
  // margin-top: 1.25rem;
  .sj_podium {
    width: 90%;
    margin: auto;
    position: relative;
    .post_jj {
      width: 100%;
      height: 5rem;
      background: #000;
      background: url(../assets/img/icon/tab@1x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: 1.5rem;
      cursor: pointer;
      text-align: center;
      line-height: 5rem;
    }
  }
  .top_btit {
    font-size: 1.875rem;
  }
}
.monitor {
  // margin-top: 0.625rem;

  .tit {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.0125rem;
  }
  .changebtn {
    margin-bottom: 0.625rem;
    > span {
      color: #0086fb;
      border: 0.0625rem solid #0086fb;
      display: block;
      width: 4.375rem;
      height: 1.5875rem;
      line-height: 1.5875rem;
      text-align: center;
      border-radius: 0.9375rem;
      font-size: 0.875rem;
      cursor: pointer;
    }
    .active {
      background: #0086fb;
      color: #fff;
    }
  }
  .videobox {
    height: 73vh;
    background: rgba(7, 23, 60, 0.2);
    overflow-y: auto;
    > div {
      width: 49%;
      margin-bottom: 0.625rem;
      video {
        width: 100%;
      }
      .video_bot {
        background: #888;
        margin-top: -0.3125rem;
        padding: 0.25rem 0.625rem;
        .gre_cir {
          width: 0.625rem;
          height: 0.625rem;
          display: inline-block;
          background: #0086fb;
          border-radius: 50%;
        }
      }
    }
  }
}
.text_box {
  width: 80%;
  .whi_cir {
    width: 0.625rem;
    height: 0.625rem;
    display: inline-block;
    margin-right: 1.25rem;
    border-radius: 50%;
    background: #fff;
  }
  .flex-between {
    margin-bottom: 0.3125rem;
  }
}
.more:hover {
  color: #0086fb;
  cursor: pointer;
}
.map_top {
  width: 18.75rem;
  position: absolute;
  z-index: 99;
  top: 40%;
  left: 40%;
  border-radius: 0.9375rem;
  background: rgba(160, 32, 40, 0.7);
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
.center_text {
  position: absolute;
  width: 5rem;
  height: 5rem;
  padding: 1.5rem;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-left: -2.5rem;
  margin-top: -1.875rem;
  background: url(../assets/img/icon/icon_reli@1x.png);
  background-size: contain;
  background-repeat: no-repeat;
  .text {
    display: inline-block;
    margin-top: -0.375rem;
    color: #0086fb;
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
#allmap {
  width: 100%;
  height: 100%;
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
</style>