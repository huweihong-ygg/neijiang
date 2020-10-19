<template>
  <div class="zfglvue">
    <div class="cont_left">
      <!-- <div class="title">内江市交通执法指挥台</div> -->
      <div class="item_l item">
        <p class="ptit">车辆筛查情况</p>
        <div class="tit_bot_img">
          <img src="../assets/img/xiugai/biankuang@1x.png" alt />
        </div>
        <!-- <div id="myChart" style="width:90%;height:85%"></div> -->
        <div class="circles_box" style="width:100%;height:100%">
          <circles></circles>
        </div>
      </div>
      <div class="item_l_2 item">
        <p class="ptit">今日执法力量</p>
        <div class="tit_bot_img">
          <img src="../assets/img/xiugai/biankuang@1x.png" alt />
        </div>
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
      <div class="item_l_3 item">
        <p class="ptit">今日运输统计</p>
        <div class="tit_bot_img">
          <img src="../assets/img/xiugai/biankuang@1x.png" alt />
        </div>
        <div class="ybp">
          <!-- <border></border> -->
          <div class="btns flex-center">
            <div>乡村客运</div>
            <div class="active">客运站</div>
            <div>维修点</div>
            <div>驾校</div>
          </div>
          <div class="three_ybp flex-around">
            <div id="myChart1"></div>
            <div id="myChart2"></div>
            <div id="myChart3"></div>
          </div>
          <div class="chunluo flex-between">
            <img src="../assets/img/xiugai/kuang@1x.png" alt />
            <img src="../assets/img/xiugai/kuang@1x.png" alt />
            <img src="../assets/img/xiugai/kuang@1x.png" alt />
            <img src="../assets/img/xiugai/kuang@1x.png" alt />
            <div class="cl_item flex">
              <span class="tit">已覆盖村落</span>
              <span class="fg_OK">17</span>
            </div>
            <div class="cl_item flex">
              <span class="tit">未覆盖村落</span>
              <span class="wfg_OK">17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_right">
      <!-- 1 -->
      <div>
        <div class="sj_podium">
          <div class="post_jj" @click="()=>{this.centerbool=true}">发布紧急调度</div>
        </div>
      </div>
      <!-- 2 -->
      <div class="item2 flex-wrap flex-around">
        <div class="n_item">
          <p>公路总里程数</p>
          <p>
            <span class="nums">120</span> 公里
          </p>
        </div>
        <div class="n_item">
          <p>桥梁总数</p>
          <p>
            <span class="nums">120</span> 座
          </p>
        </div>
        <div class="n_item">
          <p>养护人员总数</p>
          <p>
            <span class="nums">120</span> 人
          </p>
        </div>
        <div class="n_item">
          <p>养护车辆总数</p>
          <p>
            <span class="nums">120</span> 辆
          </p>
        </div>
      </div>
      <!-- 3 -->
      <div class="item3">
        <div class="tit">道路养护</div>
        <div class="biankuang">
          <img src="../assets/img/xiugai/biankuang@1x.png" alt />
        </div>
        <div class="dlyh_canvas">
          <div id="myChart4" style="width:100%;height:100%"></div>
        </div>
      </div>
      <!-- 4 -->
      <div class="monitor">
        <div class="tit">
          实时视频监控画面
          <div class="tit_bot_img">
            <img src="../assets/img/xiugai/biankuang@1x.png" alt />
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
          <div v-for="(item,i) of 6" :key="i" @click.stop="change1map">
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

    <div class="center_box">
      <fourbg></fourbg>
      
      <div class="map_box">
        <div id="allmap2">
          <img src="../assets/img/icon/bg_s@1x.png" alt />
        </div>
      </div>
    </div>
<div class="cont_center flex-wrap">
   <div style="position:absolute;left:50%;margin-left:-2.1875rem;margin-top:-2.875rem" @click="centerbotbool">
        <el-button  type="" v-if="center_botbool" icon="el-icon-caret-bottom" plain style="height:1.875rem;width:4.375rem;padding:0"></el-button>
        <el-button type="" v-else icon="el-icon-caret-top" plain style="height:1.875rem;width:4.375rem;padding:0"></el-button>
    </div>

        <img class="topbg" src="../assets/img/xiugai/light_s@1x.png" alt />
        <img class="botbg" src="../assets/img/xiugai/light@1x.png" alt />
        <div v-show="center_botbool" class="flex c_item" v-for="(item,i) of sjlist" :key="i">
          <div>
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <p class="f_nowrap">{{item.tit}}</p>
            <p class="nums" :class="i==0?'rednum':''">{{item.num}}</p>
          </div>
        </div>
      </div>
    <div class="cont_center_mes" v-show="centerbool">
      <img class="liangguang" src="../assets/img/xiugai/liangguang@1x.png" alt />
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
          <span
            @click="carlistchange(i)"
            :class="item.bool?'active':''"
            v-for="(item,i)  of carlist"
            :key="i"
          >{{item.num}}</span>
        </div>
      </div>
      <div class="peoplelist_box">
        <div class="peoplelist_tit">附近可调配人员</div>
        <div class="flex flex-wrap peoplelist">
          <span
            @click="peoplelistchange(i)"
            :class="item.bool?'active':''"
            v-for="(item,i) of peoplelist"
            :key="i"
          >{{item.num}}</span>
        </div>
      </div>

      <div class="teax_box">
        <div class="teax_box_tit">
          调度信息文本
        </div>
        <div class="post_texa flex-between">
          <div class="texarea">
            <textarea v-model="text" cols="30" rows="10"></textarea>
          </div>
          <div>
            <div class="sq_look">收起查看地图</div>
            <div class="post_tz" @click="posts">发送通知</div>
            <div class="flex-around img_btn">
              <img src="../assets/img/icon2/icon_shiping@1x.png" alt />
              <img src="../assets/img/icon2/icon_yuying@1x.png" alt />
              <img src="../assets/img/icon2/icon_dianhua@1x.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="allmap2"></div> -->

    <!-- <div class="input-item">
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
    </div>-->
  </div>
</template>

<script>
import circles from "./echarts/circle";

import MapLoader from "../assets/Amap/Amap";
import fourbg from "./echarts/bg4";
// import border from "./echarts/border";
// import leida from "./echarts/leida";
export default {
  components: {
    circles,
    fourbg,
    // border
  },
  data() {
    return {
      center_botbool:false,
      text: "",
      zsbtn: false,
      value: "",
      value2: "",
      centerbool: false,
      options: [
        {
          value: "客运站",
          label: "客运站",
        },
        {
          value: "驾校",
          label: "驾校",
        },
        {
          value: "维修站",
          label: "维修站",
        },
      ],
      changbth: [
        { name: "全部", checked: true },
        { name: "客运站", checked: false },
        { name: "道路卡口", checked: false },
        { name: "维修站", checked: false },
        { name: "驾校", checked: false },
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
        { num: "G863412", bool: false },
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
        { num: "张四3", bool: false },
      ],
      sjlist: [
        {
          img: require("../assets/img/icon/icon_baojing@1x.png"),
          tit: "报警事件",
          num: 32,
          bool: true,
        },
        {
          img: require("../assets/img/icon/icon_jiankong@2x.png"),
          tit: "城市监控",
          num: 42354,
          bool: false,
        },
        {
          img: require("../assets/img/icon/yanghu.png"),
          tit: "养护公司",
          num: 3,
          bool: true,
        },
        {
          img: require("../assets/img/icon/yunsu.png"),
          tit: "运输公司",
          num: 3,
          bool: false,
        },
        {
          img: require("../assets/img/icon/daolik.png"),
          tit: "道路卡口管控点",
          num: 3452,
          bool: false,
        },

        {
          img: require("../assets/img/icon/yellowkk (1).png"),
          tit: "维修线路",
          num: 5,
          bool: false,
        },
        {
          img: require("../assets/img/icon/icon_keyundian@1x.png"),
          tit: "客运站点",
          num: 325,
          bool: false,
        },

        {
          img: require("../assets/img/icon/icon_matou@2x.png"),
          tit: "码头",
          num: 52,
          bool: false,
        },
        {
          img: require("../assets/img/icon/icon_xunjian@1x.png"),
          tit: "在线巡查人员",
          num: 52,
          bool: false,
        },
        {
          img: require("../assets/img/icon/icon_yanghurenyuan@1x.png"),
          tit: "在线养护人员",
          num: 532,
          bool: false,
        },
        {
          img: require("../assets/img/icon/icon_weixiuzhan@1x.png"),
          tit: "维修站",
          num: 532,
          bool: false,
        },
      ],
      tableData2: [
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "团结街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
        {
          date: "2016-05-02",
          bm: "中队1",
          address: "河坝街",
          lr: "卡口检测，危险车辆检测",
        },
      ],

      lookzf: false,
      lookzfhm: false,

      list: [
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.068514, 29.588433],
          checked: false,
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.070805, 29.586213],
          checked: true,
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.070311, 29.593019],
          checked: false,
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.06382, 29.593466],
          checked: false,
        },
        {
          ld1: "内江市中医院",
          ld2: "第二人民医院",
          tableData: [{ date: "较为缓慢", name: "30", address: "3452" }],
          point: [105.067533, 29.591489],
          checked: false,
        },
      ],
      // tableData: [{
      //   date: '较为缓慢',
      //   name: '30',
      //   address: '3452'
      // }]
    };
  },

  mounted() {
    MapLoader().then((AMap) => {
      // console.log(AMap)
      this.map([104.963946, 29.542282], 11.8, AMap);
    });
    this.draw();
    this.myChart1();
    this.myChart2();
    this.myChart3();
    var that = this;
    window.onload = function () {
      var url = document.location.href; //获取浏览器访问栏里的地址
      if (url.indexOf("podium2") == -1) {
        //判断地址后面是否多了某些值，没有就进方法里进行刷新
        var t = new Date();
        that.$router.push("/podium2");
      }
    };
  },

  methods: {
    centerbotbool(){
      this.center_botbool=!this.center_botbool
    },
    carlistchange(i) {
      var newlist = this.carlist;
      for (var item of newlist) {
        item.bool = false;
      }
      newlist[i].bool = true;
      if ((newlist[i].bool = true)) {
        this.carActive = newlist[i].num;
      }
      this.carlist = newlist;
    },
    peoplelistchange(i) {
      var newlist = this.peoplelist;
      for (var item of newlist) {
        item.bool = false;
      }
      if ((newlist[i].bool = true)) {
        this.peopleActive = newlist[i].num;
      }
      newlist[i].bool = true;
      this.peoplelist = newlist;
    },
    post() {
      // console.log(this.carActive, this.peopleActive);
      this.$message.success(this.text);
    },
    map(point, zoom, AMap) {
      var that = this;
      var opts = {
        subdistrict: 0,
        extensions: "all",
        level: "city",
      };
      //利用行政区查询获取边界构建mask路径
      //也可以直接通过经纬度构建mask路径

      var googleLayer = new AMap.TileLayer({
        getTileUrl:
          "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile",
      }); //定义谷歌卫星切片图层

      var district = new AMap.DistrictSearch(opts);
      district.search("市中区", function (status, result) {
        // console.log(result);
        var bounds = result.districtList[2].boundaries;

        var mask = [];
        for (var i = 0; i < bounds.length; i += 1) {
          mask.push([bounds[i]]);
        }
        // console.log(JSON.stringify(mask))
        var map = new AMap.Map("allmap2", {
          mask: mask,
          center: point,
          disableSocket: true,
          viewMode: "3D",
          features: ["bg", "road"],
          mapStyle: that.$mapStyle,
          showLabel: false,
          labelzIndex: 130,
          top: 0,
          pitch: 48, //3D下有效果
          // rotation: 45,//旋转角度
          resizeEnable: true,
          rotateEnable: true,
          zoom: zoom,
          // layers: [googleLayer],
        });

        // var layer = new Loca.LinkLayer({
        //   map: map,
        //   fitView: false,
        // });
        // var linecir = [
        //   {
        //     lnglat: [
        //       ["104.918467", "29.47055"],
        //       ["104.937669", "29.490922"],
        //     ],
        //     dis: 1550,
        //   },
        //   {
        //     lnglat: [
        //       ["104.970444", "29.508862"],
        //       ["104.949082", "29.463676"],
        //     ],
        //     dis: 1427,
        //   },
        //   {
        //     lnglat: [["104.971218 ,29.626548"], ["104.927263 ,29.55435"]],
        //     dis: 1620,
        //   },
        // ];
        // layer.setData(linecir.slice(0, 3), {
        //   lnglat: "lnglat",
        // });
        // console.log(linecir);

        // layer.setOptions({
        //   blendMode: "lighter",
        //   style: {
        //     // 曲率 [-1, 1] 区间
        //     curveness: function (data) {
        //       console.log(data)
        //       if (data.value.dis < 100) {
        //         return 0.07;
        //       } else if (data.value.dis < 300) {
        //         return 0.05;
        //       } else if (data.value.dis < 500) {
        //         return 0.02;
        //       } else if (data.value.dis < 700) {
        //         return 0.01;
        //       } else {
        //         return 0.005;
        //       }
        //     },
        //     opacity: 0.9,
        //     color: "#5DFBF9",
        //   },
        // });
        // layer.render();

        var markercar,
          lineArr = [
            [105.068315, 29.576059],
            [105.068288, 29.574687],
            [105.067763, 29.572178],
            [105.065603, 29.573944],
            [105.064747, 29.574245],
            [105.061804, 29.573711],
            [105.058548, 29.573681],
            [105.057481, 29.57454],
            [105.056536, 29.575239],
            [105.055331, 29.575744],
            [105.05298, 29.57809],
            [105.047018, 29.577973],
            [105.044838, 29.576376],
            [105.044423, 29.576274],
            [105.042125, 29.576701],
            [105.036735, 29.576858],
            [105.03452, 29.577204],
            [105.033989, 29.577259],
            [105.032302, 29.576112],
            [105.029551, 29.574021],
            [105.028919, 29.573842],
            [105.026051, 29.573828],
            [105.024262, 29.573153],
            [105.020046, 29.568964],
            [105.016211, 29.566837],
            [105.014096, 29.56514],
            [105.011238, 29.560003],
            [105.00803, 29.556458],
            [105.006133, 29.554994],
            [105.004594, 29.554377],
            [104.993941, 29.553105],
            [104.992088, 29.552573],
            [104.991333, 29.552956],
            [104.990587, 29.552967],
            [104.989684, 29.553725],
            [104.989181, 29.5538],
            [104.988286, 29.553527],
            [104.987624, 29.55379],
            [104.987152, 29.554212],
            [104.987406, 29.555395],
            [104.987982, 29.556438],
            [104.988832, 29.557037],
            [104.990223, 29.556886],
            [104.991885, 29.556346],
            [104.992585, 29.556613],
            [104.993346, 29.557416],
            [104.995379, 29.557416],
            [104.995621, 29.557223],
            [104.995808, 29.5568],
            [104.998636, 29.55667],
            [104.999156, 29.55744],
            [105.000549, 29.558274],
            [105.000574, 29.559058],
            [105.000971, 29.560757],
            [105.001265, 29.561204],
            [105.00345, 29.564104],
            [105.004273, 29.565577],
            [105.004384, 29.566162],
            [105.003806, 29.568242],
            [105.013595, 29.576768],
            [105.022664, 29.580217],
            [105.02608, 29.582451],
            [105.028535, 29.584127],
            [105.032963, 29.587511],
            [105.035279, 29.586773],
            [105.036142, 29.586788],
            [105.037098, 29.585468],
            [105.038588, 29.58461],
            [105.038927, 29.583289],
            [105.041467, 29.582518],
            [105.041536, 29.581675],
            [105.042749, 29.58142],
            [105.043057, 29.580657],
            [105.043816, 29.580591],
            [105.043265, 29.578591],
            [105.043286, 29.5785],
            [105.047206, 29.57805],
            [105.052025, 29.578127],
            [105.052533, 29.578312],
            [105.054163, 29.580517],
            [105.055798, 29.581108],
            [105.060437, 29.580988],
            [105.06476, 29.582625],
            [105.065243, 29.58456],
            [105.0678, 29.584101],
            [105.067272, 29.582893],
            [105.067808, 29.581346],
            [105.067093, 29.578812],
            [105.068013, 29.576712],
          ];

        markercar = new AMap.Marker({
          map: map,
          position: point,
          icon: new AMap.Icon({
            image: require("../assets/img/cars/icon_huoche@1x.png"),
            size: new AMap.Size(31, 16), //图标大小
            imageSize: new AMap.Size(31, 16),
          }),
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle: -5,
        });

        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: map,
          path: lineArr,
          showDir: true,
          strokeColor: "#00f8f8", //线颜色
          strokeOpacity: 1, //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        markercar.on("moving", function (e) {
          passedPolyline.setPath(e.passedPath);
          // console.log(e)
          if (e.passedPath.length == lineArr.length) {
            startAnimation();
          }
        });
        markercar.on("click", function (e) {
          map.setFitView([markercar]);
        });

        // map.setFitView();

        function startAnimation() {
          markercar.moveAlong(lineArr, 300);
        }

        startAnimation();

        //第2条路线
        var markerline2,
          lineArr2 = [
            [105.070667, 29.573182],
            [105.070226, 29.570761],
            [105.067675, 29.571813],
            [105.058136, 29.57376],
            [105.056934, 29.570213],
            [105.058265, 29.566138],
            [105.049822, 29.55813],
            [105.049613, 29.557699],
            [105.050573, 29.55695],
            [105.050284, 29.556311],
            [105.050278, 29.554981],
            [105.051852, 29.553353],
            [105.050891, 29.552528],
            [105.046368, 29.548374],
            [105.043853, 29.543528],
            [105.042775, 29.543567],
            [105.043063, 29.541935],
            [105.043076, 29.540784],
            [105.043994, 29.539659],
            [105.043587, 29.538621],
            [105.043701, 29.538129],
            [105.043019, 29.536163],
            [105.041614, 29.533398],
            [105.038369, 29.531893],
            [105.036266, 29.532069],
            [105.035952, 29.531432],
            [105.034633, 29.530999],
            [105.031283, 29.532234],
            [105.030782, 29.532743],
            [105.029379, 29.532936],
            [105.028397, 29.534671],
            [105.026563, 29.533476],
            [105.024194, 29.533816],
            [105.023394, 29.535149],
            [105.020577, 29.535389],
            [105.014683, 29.531537],
            [105.013574, 29.528576],
            [105.010945, 29.52769],
            [105.004483, 29.531697],
            [105.000622, 29.532836],
            [104.987983, 29.528881],
            [104.986905, 29.526308],
            [104.980981, 29.522832],
            [104.977404, 29.524162],
            [104.972905, 29.525974],
            [104.96847, 29.525668],
            [104.953363, 29.523721],
            [104.954939, 29.528063],
            [104.969148, 29.534972],
            [104.974381, 29.54522],
            [104.974718, 29.557481],
            [104.9806, 29.568538],
            [104.993438, 29.600259],
            [104.997735, 29.602068],
            [105.03214, 29.577871],
            [105.047119, 29.577889],
            [105.052945, 29.578007],
            [105.055358, 29.575811],
            [105.05843, 29.573639],
            [105.061859, 29.573657],
            [105.064631, 29.574256],
            [105.065607, 29.573821],
            [105.067811, 29.572067],
            [105.069116, 29.573219],
          ];

        markerline2 = new AMap.Marker({
          map: map,
          position: point,
          icon: new AMap.Icon({
            image: require("../assets/img/cars/icon_keyunche@1x.png"),
            size: new AMap.Size(31, 16), //图标大小
            imageSize: new AMap.Size(31, 16),
          }),
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle: -90,
        });

        // 绘制轨迹
        var polyline2 = new AMap.Polyline({
          map: map,
          path: lineArr2,
          showDir: true,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline2 = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        markerline2.on("moving", function (e) {
          passedPolyline2.setPath(e.passedPath);
          if (e.passedPath.length == lineArr2.length) {
            startAnimation2();
          }
        });
        markerline2.on("click", function (e) {
          map.setFitView([markerline2]);
        });

        function startAnimation2() {
          markerline2.moveAlong(lineArr2, 800);
        }
        startAnimation2();

        //第3条线路
        //第2条路线
        var markerline3,
          lineArr3 = [
            [105.068057, 29.57677],
            [105.06703, 29.578578],
            [105.0678, 29.580986],
            [105.067208, 29.582913],
            [105.067711, 29.584083],
            [105.067222, 29.584419],
            [105.067884, 29.585573],
            [105.067709, 29.586857],
            [105.06626, 29.586458],
            [105.065819, 29.586225],
            [105.064783, 29.586031],
            [105.063144, 29.586195],
            [105.060586, 29.585387],
            [105.058414, 29.584303],
            [105.057309, 29.58338],
            [105.055494, 29.582905],
            [105.050028, 29.580194],
            [105.046833, 29.576494],
            [105.045877, 29.574093],
            [105.04364, 29.573869],
            [105.042112, 29.572683],
            [105.041843, 29.571506],
            [105.039802, 29.570119],
            [105.039488, 29.568232],
            [105.037696, 29.564392],
            [105.035123, 29.563501],
            [105.034343, 29.561945],
            [105.034601, 29.560868],
            [105.033433, 29.559083],
            [105.030489, 29.557225],
            [105.030167, 29.556608],
            [105.025981, 29.552806],
            [105.025735, 29.552426],
            [105.025189, 29.550515],
            [105.025159, 29.547642],
            [105.022697, 29.546621],
            [105.023057, 29.542305],
            [105.023555, 29.540977],
            [105.021143, 29.538808],
            [105.020379, 29.536626],
            [105.020217, 29.534995],
            [104.993421, 29.529799],
            [104.987749, 29.528745],
            [104.987102, 29.526047],
            [104.981494, 29.522552],
            [104.977652, 29.524242],
            [104.941886, 29.511462],
            [104.930362, 29.509699],
            [104.907452, 29.488049],
            [104.904543, 29.488983],
            [104.896942, 29.490173],
            [104.894922, 29.495979],
            [104.901285, 29.504336],
            [104.906492, 29.517141],
            [104.903307, 29.525654],
            [104.909119, 29.529256],
            [104.907509, 29.53603],
            [104.899835, 29.542492],
            [104.900346, 29.552998],
            [104.904095, 29.561277],
            [104.906304, 29.567236],
            [104.904797, 29.576677],
            [104.930453, 29.571694],
            [104.941632, 29.572212],
            [104.948026, 29.571052],
            [104.962329, 29.568552],
            [104.980755, 29.571308],
            [104.994738, 29.604043],
            [105.029916, 29.603793],
            [105.032161, 29.598554],
            [105.032615, 29.595123],
            [105.035569, 29.593954],
            [105.037345, 29.588742],
            [105.038978, 29.586726],
            [105.045976, 29.580736],
            [105.048104, 29.579868],
            [105.049924, 29.58016],
            [105.055563, 29.582972],
            [105.056458, 29.584555],
            [105.061493, 29.587636],
            [105.062581, 29.586038],
            [105.064825, 29.58598],
            [105.067656, 29.586881],
            [105.067889, 29.585526],
            [105.067256, 29.584393],
            [105.06724, 29.582802],
            [105.067831, 29.581231],
            [105.067015, 29.578742],
            [105.068075, 29.576738],
          ];

        markerline3 = new AMap.Marker({
          map: map,
          position: point,
          icon: new AMap.Icon({
            image: require("../assets/img/cars/icon_yanghuche@1x.png"),
            size: new AMap.Size(31, 16), //图标大小
            imageSize: new AMap.Size(31, 16),
          }),
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle: -90,
        });

        // 绘制轨迹
        var polyline3 = new AMap.Polyline({
          map: map,
          path: lineArr3,
          showDir: true,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline3 = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        markerline3.on("moving", function (e) {
          passedPolyline3.setPath(e.passedPath);
          if (e.passedPath.length == lineArr3.length) {
            startAnimation3();
          }
        });
        markerline3.on("click", function (e) {
          map.setFitView([markerline3]);
        });

        function startAnimation3() {
          markerline3.moveAlong(lineArr3, 800);
        }
        startAnimation3();

        //第4条线路
        //第2条路线
        var markerline4,
          lineArr4 = [
            [104.954009, 29.430186],
            [104.954633, 29.431138],
            [104.956024, 29.432254],
            [104.95588, 29.433102],
            [104.956646, 29.433771],
            [104.957214, 29.434905],
            [104.959029, 29.43802],
            [104.960231, 29.438381],
            [104.96003, 29.439996],
            [104.957651, 29.441964],
            [104.957557, 29.443259],
            [104.96334, 29.443642],
            [104.965088, 29.44557],
            [104.964285, 29.450448],
            [104.963822, 29.454673],
            [104.964195, 29.457453],
            [104.970789, 29.455538],
            [104.970603, 29.45417],
            [104.972906, 29.453946],
            [104.974996, 29.452621],
            [104.980124, 29.45417],
            [104.983706, 29.450938],
            [104.983934, 29.448999],
            [104.990036, 29.45001],
            [104.994771, 29.448749],
            [104.998303, 29.450389],
            [105.006019, 29.448654],
            [105.008944, 29.450488],
            [105.011067, 29.449707],
            [105.012521, 29.451288],
            [105.017282, 29.452824],
            [105.018499, 29.455954],
            [105.01978, 29.455641],
            [105.021339, 29.460322],
            [105.028461, 29.462661],
            [105.027808, 29.466464],
            [105.030813, 29.467845],
            [105.030412, 29.470313],
            [105.023493, 29.482183],
            [105.012457, 29.478696],
            [105.004817, 29.479646],
            [104.99005, 29.491807],
            [104.983487, 29.498132],
            [104.979264, 29.509877],
            [104.953139, 29.523566],
            [104.950125, 29.512676],
            [104.938255, 29.508877],
            [104.930991, 29.503643],
            [104.921852, 29.494992],
            [104.916648, 29.487513],
            [104.90573, 29.482741],
            [104.903517, 29.473492],
            [104.901271, 29.471901],
            [104.903127, 29.469134],
            [104.902479, 29.466841],
            [104.905003, 29.464639],
            [104.904273, 29.462413],
            [104.911495, 29.45924],
            [104.913241, 29.452883],
            [104.911599, 29.452076],
            [104.915403, 29.443431],
            [104.916677, 29.442092],
            [104.918667, 29.440974],
            [104.923106, 29.440789],
            [104.925408, 29.439922],
            [104.927021, 29.440651],
            [104.927912, 29.442164],
            [104.929351, 29.446147],
            [104.931338, 29.445634],
            [104.93219, 29.447904],
            [104.937491, 29.449553],
            [104.944022, 29.451455],
            [104.944721, 29.446763],
            [104.944639, 29.442516],
            [104.947948, 29.439183],
          ];

        markerline4 = new AMap.Marker({
          map: map,
          position: point,
          icon: new AMap.Icon({
            image: require("../assets/img/cars/icon_zhifache@1x.png"),
            size: new AMap.Size(31, 16), //图标大小
            imageSize: new AMap.Size(31, 16),
          }),
          // icon: require("../assets/img/icon/icon_car.png"),
          offset: new AMap.Pixel(-26, -13),
          autoRotation: true,
          angle: -90,
        });

        // 绘制轨迹
        var polyline4 = new AMap.Polyline({
          map: map,
          path: lineArr4,
          showDir: true,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline4 = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        markerline4.on("moving", function (e) {
          passedPolyline4.setPath(e.passedPath);
          if (e.passedPath.length == lineArr4.length) {
            startAnimation4();
          }
        });
        markerline4.on("click", function (e) {
          map.setFitView([markerline4]);
        });

        function startAnimation4() {
          markerline4.moveAlong(lineArr4, 800);
        }
        startAnimation4();

        // 5  //
        var markerline5,
          lineArr5 = [
            [104.95588, 29.433102],
            [104.956646, 29.433771],
            [104.957214, 29.434905],
            [104.959029, 29.43802],
            [104.960231, 29.438381],
            [104.96003, 29.439996],
            [104.957651, 29.441964],
            [104.957557, 29.443259],
            [104.96334, 29.443642],
            [104.965088, 29.44557],
            [104.964285, 29.450448],
            [104.963822, 29.454673],
            [104.964195, 29.457453],
            [104.970789, 29.455538],
            [104.970603, 29.45417],
            [104.972906, 29.453946],
            [104.974996, 29.452621],
            [104.980124, 29.45417],
            [104.983706, 29.450938],
            [104.983934, 29.448999],
            [104.990036, 29.45001],
            [104.994771, 29.448749],
            [104.998303, 29.450389],
            [105.006019, 29.448654],
            [105.008944, 29.450488],
            [105.011067, 29.449707],
            [105.012521, 29.451288],
            [105.017282, 29.452824],
            [105.018499, 29.455954],
            [105.01978, 29.455641],
            [105.021339, 29.460322],
            [105.028461, 29.462661],
            [105.027808, 29.466464],
            [105.030813, 29.467845],
            [105.030412, 29.470313],
            [105.023493, 29.482183],
            [105.012457, 29.478696],
            [105.004817, 29.479646],
            [104.99005, 29.491807],
            [104.983487, 29.498132],
            [104.979264, 29.509877],
            [104.953139, 29.523566],
            [104.950125, 29.512676],
            [104.938255, 29.508877],
            [104.930991, 29.503643],
            [104.921852, 29.494992],
            [104.916648, 29.487513],
            [104.90573, 29.482741],
            [104.903517, 29.473492],
            [104.901271, 29.471901],
            [104.903127, 29.469134],
            [104.902479, 29.466841],
            [104.905003, 29.464639],
            [104.904273, 29.462413],
            [104.911495, 29.45924],
            [104.913241, 29.452883],
            [104.911599, 29.452076],
            [104.915403, 29.443431],
            [104.916677, 29.442092],
            [104.918667, 29.440974],
            [104.923106, 29.440789],
            [104.925408, 29.439922],
            [104.927021, 29.440651],
            [104.927912, 29.442164],
            [104.929351, 29.446147],
            [104.931338, 29.445634],
            [104.93219, 29.447904],
            [104.937491, 29.449553],
            [104.944022, 29.451455],
            [104.944721, 29.446763],
            [104.944639, 29.442516],
            [104.947948, 29.439183],
            [104.956024, 29.432254],
            [104.954633, 29.431138],
            [104.954009, 29.430186],
          ];

        markerline5 = new AMap.Marker({
          map: map,
          position: point,
          icon: new AMap.Icon({
            image: require("../assets/img/cars/icon_xiaojiaoche@1x.png"),
            size: new AMap.Size(31, 16), //图标大小
            imageSize: new AMap.Size(31, 16),
          }),
          // icon: require("../assets/img/icon/icon_car.png"),
          offset: new AMap.Pixel(-16, -13),
          autoRotation: true,
          angle: -90,
        });

        // 绘制轨迹
        var polyline5 = new AMap.Polyline({
          map: map,
          path: lineArr5,
          showDir: true,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline5 = new AMap.Polyline({
          map: map,
          // path: lineArr,
          strokeColor: "#00f8f8", //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2, //线宽
          // strokeStyle: "solid"  //线样式
        });

        markerline5.on("moving", function (e) {
          passedPolyline5.setPath(e.passedPath);
          if (e.passedPath.length == lineArr5.length) {
            startAnimation5();
          }
        });
        markerline5.on("click", function (e) {
          map.setFitView([markerline5]);
        });

        function startAnimation5() {
          markerline5.moveAlong(lineArr5, 1600);
        }
        startAnimation5();
        // window.addEventListener()

        // });
        // console.log(AMap)
        var satelliteLayer = new AMap.TileLayer.Satellite();
        // map.add([googleLayer]);

        map.on("click", (e) => {
          console.log(e.lnglat.lng, e.lnglat.lat);
        });
        var maskerIn = new AMap.Marker({
          position: [116.501415, 39.926055],
          map: map,
        });
        var maskerOut = new AMap.Marker({
          //区域外的不会显示
          position: [117.001415, 39.926055],
          map: map,
        });
        //添加高度面
        var object3Dlayer = new AMap.Object3DLayer({ zIndex: 1 });
        map.add(object3Dlayer);
        var height = -5000;
        var color = "#00f8f8"; //rgba
        var wall = new AMap.Object3D.Wall({
          path: bounds,
          height: height,
          color: color,
        });
        wall.transparent = true;
        object3Dlayer.add(wall);
        //添加描边
        for (var i = 0; i < bounds.length; i += 1) {
          new AMap.Polyline({
            path: bounds[i],
            strokeColor: "#99ffff",
            strokeWeight: 6,
            map: map,
          });
        }

        addMarker();
        //养护公司

        var weixiu = [
          { point: [105.074705, 29.569962], text: "爱德华汽车运输公司" },
          { point: [105.074925, 29.586446], text: "内江市汽车运输公司" },
          { point: [105.073793, 29.591327], text: "明明汽车运输公司" },
        ];

        for (var item of weixiu) {
          var marker4 = new AMap.Marker({
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_weixiu@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-23, -30),
          });

          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;

          marker4.on("click", markerClick);
        }

        // 码头
        // 105.066848 29.588996
        var jiankong = [
          { point: [105.066848, 29.588996], text: "xxx路口" },
          { point: [104.905982, 29.486257], text: "xxx路口" },
        ];
        for (var item of jiankong) {
          var marker4 = new AMap.Marker({
            // icon: require("../assets/img/icon/icon_jiankong@1x.png"),
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_jiankong@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-23, -30),
          });
          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }

        var matou = [
          { mat: [105.07047, 29.588374], text: "湾湾码头" },
          { mat: [105.031071, 29.619887], text: "龙门码头" },
          { mat: [105.070765, 29.591303], text: "内江老码头" },
          { mat: [105.041359, 29.594903], text: "滴滴码头" },
        ];
        for (var item of matou) {
          var marker4 = new AMap.Marker({
            // icon: require("../assets/img/icon/icon_mt@1x.png"),
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_matou@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.mat,
            offset: new AMap.Pixel(-23, -30),
          });

          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }

        //监控104.905235 29.576941

        var jk = [
          { point: [104.929404, 29.509733], text: "道路养护人员:李晓迪" },
          { point: [104.922434, 29.501055], text: "道路养护人员:艾晓迪" },
          { point: [104.926076, 29.507198], text: "道路养护人员:李晓迪" },
          { point: [104.905235, 29.576941], text: "道路养护人员:太晓迪" },
          { point: [104.985365, 29.497083], text: "道路养护人员:李晓迪" },
        ];
        for (var item of jk) {
          var marker4 = new AMap.Marker({
            // icon: require("../assets/img/icon/icon_yh@1x.png"),
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_yanghu@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-10, -30),
          });
          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }

        // yellowkk (1)
        var kakou = [
          { point: [104.978967, 29.541609], text: "西林大桥卡口" },
          { point: [104.9558, 29.529229], text: "西林大道卡口" },
          { point: [104.945261, 29.513183], text: "临江路卡口" },
        ];
        for (var item of kakou) {
          var marker4 = new AMap.Marker({
            // icon: require("../assets/img/icon/daolik.png"),
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_daolukakou@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-3, -20),
          });
          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }
        var car = [
          { point: [105.069503, 29.57295], text: "黄桷井市场客运站" },
          { point: [105.06772, 29.576237], text: "内江市汽车站" },
        ];
        for (var item of car) {
          var marker4 = new AMap.Marker({
            // icon: require("../assets/img/icon/icon_che@1x.png"),
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_gongjiao@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-23, -30),
          });
          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }

        var wx = [
          { point: [105.046948, 29.579304], text: "维修站" },
          { point: [105.025492, 29.582325], text: "维修站" },
          { point: [105.022418, 29.482286], text: "维修站" },
        ];
        for (var item of wx) {
          var marker4 = new AMap.Marker({
            // icon:,
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_weixiu@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            position: item.point,
            offset: new AMap.Pixel(-23, -30),
          });
          marker4.setMap(map);
          marker4.setTitle(item.text);
          marker4.content = item.text;
          marker4.on("click", markerClick);
        }
        function markerClick(e) {
          //普通标记弹框的方法
          var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -30),
          });
          infoWindow.setContent(e.target.content);
          map.setFitView([e.target]);
          infoWindow.open(map, e.target.getPosition());
        }
        //添加marker标记
        function addMarker() {
          // map.clearMap();
          // var marker = new AMap.Marker({
          //   map: map,
          //   position: [105.06675492680017, 29.586301350821902]
          // });
          var marker = new AMap.Marker({
            icon: new AMap.Icon({
              image: require("../assets/img/icon/icon_gaojing@1x.png"),
              size: new AMap.Size(20, 23), //图标大小
              imageSize: new AMap.Size(20, 23),
            }),
            map: map,
            zIndex: 500,
            position: [105.086192, 29.547129],
            offset: new AMap.Pixel(-23, -40),
          });
          marker.setAnimation("AMAP_ANIMATION_BOUNCE");
          marker.setMap(map);
          //鼠标点击marker弹出自定义的信息窗体
          marker.on("click", function () {
            infoWindow.open(map, marker.getPosition());
            map.setFitView([marker]);
          });
        }

        var marker2 = new AMap.Marker({
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_gaojing@1x.png"),
            size: new AMap.Size(20, 23), //图标大小
            imageSize: new AMap.Size(20, 23),
          }),
          map: map,
          zIndex: 500,
          position: [105.0674376389875, 29.58303485797507],
          offset: new AMap.Pixel(-23, -40),
        });
        marker2.setAnimation("AMAP_ANIMATION_BOUNCE");
        marker2.setMap(map);
        //鼠标点击marker弹出自定义的信息窗体
        marker2.on("click", function () {
          infoWindow.open(map, marker2.getPosition());
          map.setFitView([marker2]);
        });

        var marker3 = new AMap.Marker({
          // icon: ,
          map: map,
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_gaojing@1x.png"),
            size: new AMap.Size(20, 23), //图标大小
            imageSize: new AMap.Size(20, 23),
          }),
          zIndex: 500,
          position: [105.031898, 29.575864],
          offset: new AMap.Pixel(-23, -40),
        });
        marker3.setAnimation("AMAP_ANIMATION_BOUNCE");
        marker3.setMap(map);
        //鼠标点击marker弹出自定义的信息窗体
        marker3.on("click", function () {
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
          offset: new AMap.Pixel(16, -45),
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

        // document.querySelector("#add-satellite-layer").onclick = function () {
        //   map.add(googleLayer);
        //   map.setMapStyle(that.$mapStyle);
        //   //  console.log(that.zsbtn)
        // };

        // document.querySelector(
        //   "#remove-satellite-layer"
        // ).onclick = function () {
        //   map.remove(googleLayer);
        //   map.setMapStyle(that.$mapStyle);

        // };

        var markerxl = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_kakou@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_kakou@1x.png"),
            size: new AMap.Size(20, 23), //图标大小
            imageSize: new AMap.Size(20, 23),
          }),
          map: map,
          position: [104.985258, 29.546838],
          offset: new AMap.Pixel(-10, -35),
        });

        markerxl.setMap(map);
        markerxl.on("click", function () {
          infoWindow2.open(map, markerxl.getPosition());
          map.setFitView([polygon]);
        });

        var markerxl2 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_kakou@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_kakou@1x.png"),
            size: new AMap.Size(20, 23), //图标大小
            imageSize: new AMap.Size(20, 23),
          }),
          map: map,
          position: [104.950386, 29.518668],
          offset: new AMap.Pixel(-10, -35),
        });

        markerxl2.setMap(map);
        //     //鼠标点击marker弹出自定义的信息窗体
        markerxl2.on("click", function () {
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
          offset: new AMap.Pixel(16, -45),
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

        var path = [
          [104.991897, 29.552534],
          [104.991119, 29.552119],
          [104.990551, 29.551757],
          [104.990071, 29.551404],
          [104.988832, 29.550176],
          [104.987712, 29.549109],
          [104.986619, 29.548061],
          [104.985258, 29.546838],
          [104.9836, 29.545278],
          [104.982047, 29.543747],
          [104.980823, 29.542659],
          [104.980953, 29.542538],
          [104.981837, 29.543237],
          [104.983089, 29.54447],
          [104.985451, 29.546667],
          [104.988718, 29.549811],
          [104.990694, 29.551543],
          [104.991527, 29.552124],
          [104.992117, 29.552374],
        ];
        var path2 = [
          [104.952598, 29.525901],
          [104.95232, 29.525046],
          [104.952028, 29.523968],
          [104.951714, 29.522857],
          [104.951305, 29.521473],
          [104.950901, 29.520047],
          [104.950386, 29.518668],
          [104.950062, 29.518038],
          [104.949613, 29.517288],
          [104.94911, 29.516584],
          [104.948718, 29.516094],
          [104.948902, 29.515976],
          [104.949643, 29.516919],
          [104.950662, 29.518729],
          [104.951028, 29.519683],
          [104.951379, 29.520915],
          [104.951803, 29.522416],
          [104.952175, 29.523721],
          [104.952503, 29.52487],
          [104.952833, 29.525758],
        ];
        var path3 = [
          [104.930194, 29.509944],
          [104.929404, 29.509733],
          [104.928328, 29.509273],
          [104.927171, 29.508514],
          [104.925804, 29.507127],
          [104.925027, 29.505777],
          [104.924157, 29.503965],
          [104.923536, 29.502908],
          [104.922219, 29.501226],
          [104.922434, 29.501055],
          [104.924186, 29.503487],
          [104.926076, 29.507198],
          [104.927299, 29.508391],
          [104.928305, 29.508979],
          [104.929722, 29.509591],
          [104.930341, 29.509737],
        ];

        var polygon = new AMap.Polygon({
          map: map,
          path: path, //设置多边形边界路径
          strokeColor: "#f20",
          strokeWeight: 6,
          strokeOpacity: 0.9,
          fillOpacity: 0.8,
          fillColor: "#f00",
          zIndex: 50,
        });
        var polygon2 = new AMap.Polygon({
          map: map,
          path: path2, //设置多边形边界路径
          strokeColor: "#f20",
          strokeWeight: 6,
          strokeOpacity: 0.9,
          fillOpacity: 0.8,
          fillColor: "#f00",
          zIndex: 50,
        });
        var polygon3 = new AMap.Polygon({
          map: map,
          path: path3, //设置多边形边界路径
          strokeColor: " rgb(255, 217, 47)",
          strokeWeight: 6,
          strokeOpacity: 0.9,
          zooms: [9, 12],
          fillOpacity: 0.8,
          fillColor: " rgb(255, 217, 47)",
          zIndex: 50,
        });

        // rectangle.setMap(map)
        // 缩放地图到合适的视野级别
        // 缩放地图到合适的视野级别

        // 缩放地图到合适的视野级别

        var polyEditor = new AMap.PolyEditor(map, polygon);
        polygon.on("click", function () {
          infoWindow2.open(map, markerxl.getPosition());
          map.setFitView([polygon]);
        });
        var polyEditor2 = new AMap.PolyEditor(map, polygon2);
        polygon2.on("click", function () {
          infoWindow2.open(map, markerxl2.getPosition());
          map.setFitView([polygon2]);
        });
        var polyEditor3 = new AMap.PolyEditor(map, polygon3);
        polygon3.on("click", function () {
          // infoWindow3.open(map, markerxl3.getPosition());
          map.setFitView([polygon3]);
        });
        //  circle.off('click', showInfoC);
        //关闭信息窗体
        function closeInfoWindow() {
          map.clearInfoWindow();
        }
      });
    },
    change1map() {
      this.map([105.067106, 29.589528], 19);
      this.zsbtn = false;
    },
    lookmapadd(point, zoom) {
      this.map(point, 20);
    },
    myChart1() {
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
          position: ["50%", "30%"],
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: {
              show: true,
              formatter: "{value}",
              textStyle: { fontSize: 14 },
            },
            radius: "80%",
            data: [
              {
                value: 20,
                name: "工作车辆",
              },
            ],
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
              lineStyle: {
                // 仪表盘轴线样式。
                color: [
                  [0.33, "#00F8F8"],
                  [0.66, "#FFCA60"],
                  [1, "#FE0600"],
                ], //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 15, //轴线宽度,默认 30。
              },
            },
            splitLine: {
              show: false,
            },
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "85%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#fff", // 文字的颜色,默认 #333。
              fontSize: 14, // 文字的字体大小,默认 15。
            },
            axisTick: {
              show: true,
              splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
              length: 10, // 刻度线长。支持相对半径的百分比,默认 8。
              lineStyle: {
                // 刻度线样式。
                color: "#fff", //线的颜色,默认 #eee。
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 1, //线度,默认 1。
                type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
                shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowColor: "#fff", //阴影颜色。支持的格式同color。
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              // 仪表盘指针。
              show: true, // 是否显示指针,默认 true。
              length: "70%", // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
              width: 5,
            },
            itemStyle: {
              // 仪表盘指针样式。
              color: "auto", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
            },
          },
        ],
      });
    },
    myChart2() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: {
              show: true,
              formatter: "{value}",
              textStyle: { fontSize: 14 },
            },
            radius: "80%",
            data: [
              {
                value: 50,
                name: "工作车辆",
              },
            ],
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
              lineStyle: {
                // 仪表盘轴线样式。
                color: [
                  [0.33, "#00F8F8"],
                  [0.66, "#FFCA60"],
                  [1, "#FE0600"],
                ], //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 15, //轴线宽度,默认 30。
              },
            },
            splitLine: {
              show: false,
            },
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "85%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#fff", // 文字的颜色,默认 #333。
              fontSize: 14, // 文字的字体大小,默认 15。
            },
            axisTick: {
              show: true,
              splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
              length: 10, // 刻度线长。支持相对半径的百分比,默认 8。
              lineStyle: {
                // 刻度线样式。
                color: "#fff", //线的颜色,默认 #eee。
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 1, //线度,默认 1。
                type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
                shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowColor: "#fff", //阴影颜色。支持的格式同color。
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              // 仪表盘指针。
              show: true, // 是否显示指针,默认 true。
              length: "70%", // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
              width: 5,
            },
            itemStyle: {
              // 仪表盘指针样式。
              color: "auto", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
            },
          },
        ],
      });
    },
    myChart3() {
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: {
              show: true,
              formatter: "{value}",
              textStyle: { fontSize: 14 },
            },
            radius: "80%",
            data: [
              {
                value: 80,
                name: "工作车辆",
              },
            ],
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
              lineStyle: {
                // 仪表盘轴线样式。
                color: [
                  [0.33, "#00F8F8"],
                  [0.66, "#FFCA60"],
                  [1, "#FE0600"],
                ], //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 15, //轴线宽度,默认 30。
              },
            },
            splitLine: {
              show: false,
            },
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, "85%"], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "#fff", // 文字的颜色,默认 #333。
              fontSize: 14, // 文字的字体大小,默认 15。
            },
            axisTick: {
              show: true,
              splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
              length: 10, // 刻度线长。支持相对半径的百分比,默认 8。
              lineStyle: {
                // 刻度线样式。
                color: "#fff", //线的颜色,默认 #eee。
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 1, //线度,默认 1。
                type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
                shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowColor: "#fff", //阴影颜色。支持的格式同color。
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              // 仪表盘指针。
              show: true, // 是否显示指针,默认 true。
              length: "70%", // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
              width: 5,
            },
            itemStyle: {
              // 仪表盘指针样式。
              color: "auto", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "solid", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
            },
          },
        ],
      });
    },
    draw() {
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        color: ["#FE0600", "#1DFFE8", "#00A73F", "#FFCA60"],
        legend: {
          orient: "vertical",
          right: "4%",
           icon:'rect',
           itemWidth:15,
        itemHeight:15,
          top: "20%",
          data: ["紧急养护", "日常养护", "养护巡查", "其他事件"],
          fontSize:14,
          textStyle: {
            color: ["#FE0600", "#1DFFE8", "#00A73F", "#FFCA60"],
          },

          formatter: function (name) {
            var total = 0;
            var data = [
              { value: 335, name: "紧急养护" },
              { value: 310, name: "日常养护" },
              { value: 234, name: "养护巡查" },
              { value: 158, name: "其他事件" },
            ];
            var target;
            for (var i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                target = data[i].value;
              }
            }
            var arr = [name + " " + target + "件"];
            return arr;
          },
        },
        series: [
          {
            name: "今日",
            type: "pie",
            radius: ["52%", "70%"],
            center: ["20%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "紧急养护" },
              { value: 310, name: "日常养护" },
              { value: 234, name: "养护巡查" },
              { value: 158, name: "其他事件" },
            ],
          },
        ],
      });
    },
    change(i) {
      var newlist = this.changbth;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.changbth = newlist;
    },

    rowclick() {
      this.lookzf = true;
    },
    posts() {
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
    },
  },
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
.amap-info-content {
  color: #000;
  min-width: 140px;
  font-size: 0.75rem;
}
</style>
<style lang="less" scoped>
.zfglvue {
  color: #fff;
  font-size: 0.875rem;
}
.cont_left {
  width: 18%;
  height: 100vh;
  position: absolute;
  overflow-y: auto;
  z-index: 99;
  top: 0;
  padding-top: 10rem;
  left: 1.25rem;
  .item {
    // margin-bottom: 1rem;
    .tit_bot_img {
      margin-top: -0.7075rem;
    }
  }
  .title {
    font-size: 2.125rem;
    margin-top: 1.25rem;
  }

  .item_l {
    width: 100%;
    // height:18.625rem;
    // margin-bottom: 2.5rem;
    // min-height:12.5rem;
    position: relative;
    // margin-top: 0.5rem;

    // padding: 0.625rem;
    .circles_box {
      background: rgba(20, 44, 90, 0.9);
      border: 0.0625rem solid #026ba3c9;
    }
  }
  .sj_podium {
    width: 100%;
    text-align: center;
    position: relative;
    background: rgba(20, 44, 90, 0.9);
    border: 0.0625rem solid #026ba3c9;
    .flex-around {
      margin-bottom: 1.875rem;
      margin-top:1rem;
    }
    // img {
    //   position: absolute;
    //   top: 50%;
    //   margin-left: -2.6875rem;
    //   margin-top: -2.3125rem;
    //   left: 50%;
    // }
  }
}
.ptit {
  font-size: 1.3rem;
  // height:1.5625rem;
  color: #fefefe;
}
.item_l_2 {
  position: relative;
  // height: 22vh;
  // min-height:14.6875rem;
  margin-top: .525rem;
  // padding: 0.625rem;
}
#myChart,
#myChart2 {
  // background: rgba(20, 44, 90, 0.9);
}

.center_text {
  position: absolute;
  width: 5rem;
  min-width:55px;
  min-height:55px;
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
  // height: 32vh;
  margin-top:.525rem;
  // min-height:17.8125rem;
  position: relative;

  .ybp {
    padding-top: 0.625rem;
    background: rgba(20, 44, 90, 0.9);
    border: 0.0625rem solid #026ba3c9;
    position: relative;
    .btns {
      div {
        width: 6rem;
        min-width:70px;
        min-height:20px;
        text-align: center;
        margin: 0.25rem;
        border-radius: 0.9375rem;
        font-size: 0.8125rem;
        cursor: pointer;
        // height: 1.55rem;
        border: 0.0625rem solid #0086fb;
      }
      .active {
        background: #0086fb;
        color: #fff;
      }
    }
  }
  .three_ybp {
    height: 10.375rem;
    > div {
      width: 33%;
      height: 100%;
    }
  }
  .chunluo {
    padding: 0 1.25rem;
    width: 90%;
    margin: auto;
    position: relative;
    margin-bottom: 2.25rem;
    border: 0.0625rem solid #084f8ddc;
    img {
      position: absolute;
    }
    img:first-child {
      top: -0.0825rem;
      left: -0.0825rem;
    }
    img:nth-child(2) {
      top: -0.0825rem;
      right: -0.0825rem;
    }
    img:nth-child(3) {
      bottom: -0.0825rem;
      left: -0.0825rem;
    }
    img:nth-child(4) {
      bottom: -0.0825rem;
      right: -0.0825rem;
    }
    .tit {
      line-height: 2.875rem;
      margin-right: 0.625rem;
      display: block;
    }
    .fg_OK {
      color: #00f8f8;
      font-size: 1.75rem;
      font-weight: bold;
    }
    .wfg_OK {
      color: #f19b39;
      font-size: 1.75rem;
      font-weight: bold;
    }
  }
}

.cont_right {
  width: 19%;
  height: 100vh;
  position: absolute;
  overflow-y: auto;
  background: rgb(8, 23, 62);
  top: 0;
  z-index: 99;
  right: 0.3rem;
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
  .sj_podium {
    width: 65%;
    margin: auto;
    // margin-top: 3.125rem;
    // position: absolute;
    // bottom: 3%;
    left: 50%;
    // margin-left: -45%;
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
  .item2 {
    > div {
      width: 47%;
      min-height: 62px;
      margin-bottom: 0.625rem;
      padding-left: 1.375rem;
      padding-top: 0.625rem;
      background: url(../assets/img/xiugai/111@1x.png);
      background-repeat: no-repeat;
      background-size:100% 100%;
    }
    p:first-child {
      font-size: 1rem;
    }
    .nums {
      font-size: 1.75rem;
      color: #00f8f8;
      font-weight: 500;
      text-shadow: 0.1125rem 0.125rem 0.375rem #00f8f8;
    }
  }
  .item3 {
    // padding-left: 0.625rem;
    .tit {
      font-size: 1.125rem;
    }
    .biankuang {
      margin-top: -0.5625rem;

      img {
        width: 100%;
      }
    }
    .dlyh_canvas {
      height: 12.375rem;
      background: rgba(20, 44, 90, 0.9);
      border: 0.0625rem solid #026ba3c9;
    }
  }
  .monitor {
    // margin-top: 0.625rem;
    position: relative;
    .tit {
      font-size: 1.25rem;
      // font-weight: bold;
      margin-bottom: 0.0125rem;
    }
    .tit_bot_img {
      margin-top: -0.5rem;
    }
    .changebtn {
      margin-bottom: 0.625rem;
      // margin-top: 1.3125rem;
      > span {
        color: #0086fb;
        border: 0.0625rem solid #0086fb;
        display: block;
        width: 5.375rem;
        min-width:64px;
        height: 1.7875rem;
        line-height: 1.7875rem;
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
      height:11.75rem;
      min-height: 200px;
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
}
.center_box {
  width: 58%;
  position: relative;
  height: 71vh;
  margin-top: 0.5rem;
  left: 50%;
  margin-left: -29%;
}
.cont_center {
  width: 58%;
  // height: 9.375rem;
  position: fixed;
  z-index: 999;
  background: rgba(20, 44, 90, 0.9);
  display: flex;
  flex-wrap: wrap;
  bottom: .2rem;
  margin-left: 21%;
  border: 0.0625rem solid #026ba3c9;
  padding: 0.9375rem;
  .topbg {
    position: absolute;
    top: 0;
    right: 20%;
  }
  .botbg {
    position: absolute;
    bottom: 0;
    left: 20%;
  }
  .c_item {
      width: 9.5rem;
    min-width: 110px;
    margin-left: 1.125rem;
    padding-left: 0.925rem;
    margin-top: .5rem;
    img {
      width: 1.875rem;
      height: 1.875rem;
      object-fit: contain;
    }
    .right {
      margin-left: 0.5125rem;
    }
    .nums {
      font-size: 1.125rem;
      font-weight: 500;
    }
    .rednum {
      color: #f20;
    }
  }
}
.map_box {
  width: 100%;
  height:70vh;

  #allmap2 {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
    background: transparent !important;
    > img {
      width: 100%;
      position: absolute;
      bottom: 0;
      object-fit: contain;
    }
  }
}
.annou_box {
  height: 77vh;
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
// .cont_center {
//   width: 40%;
//   position: absolute;
//   z-index: 99;
//   right: 25%;
//   top: 35%;
//   border: 0.0625rem solid #009cef;
//   padding: 0.9375rem;
//   background: rgba(13, 36, 86, 0.7);
//   .tittle_top {
//     font-size: 1.5rem;
//     > span {
//       color: #f70006;
//     }
//     i {
//       font-size: 2.25rem;
//     }
//   }
//   .date_time {
//     margin-right: 1.25rem;
//   }
// }
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
      .playzf {
        background: #eb6100;
        padding: 0.125rem 0.625rem;
        border-radius: 0.9375rem;
        cursor: pointer;
      }
    }
  }
}
.look_right {
  width: 60%;
  background: rgb(14, 38, 86);
  position: relative;
  z-index: 99;
  text-align: right;
  .el-icon-close {
    top: 0.3125rem;
    font-size: 2.675rem;
    right: 0.625rem;
  }
  .imgbox {
    width: 95%;
    height: 22rem;
    margin: auto;
    padding: 0 1.25rem 0.625rem 0.625rem;
    overflow: hidden;
    > video {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

.cont_center_mes {
  .liangguang {
    position: absolute;
    top: -105px;
    left: -60px;
  }
  width: 40%;
  position: absolute;
  z-index: 999;
  right: 22%;
  top: 22%;
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
</style>