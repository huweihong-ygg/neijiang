<template>
  <div class="ysglvue">
    <div class="cont_left">
      <div class="stop_num flex-between">
        <div class="stop_left">
          <p>今日进站数量</p>
          <p class="f_nowrap">233</p>
        </div>
        <div class="stop_right">
          <p>今日进站数量</p>
          <p class="f_nowrap">235</p>
        </div>
      </div>
      <!-- 2 -->
      <!-- <div id="myChart3" style="width:100%;height:18.125rem"></div> -->
      <div class="cartj">
        <fourbg></fourbg>
        <div class="flex-between cartit">
          <div class="name">今日车辆统计</div>
          <div class="flex">
            <span>市内</span>
            <span class="active">省内</span>
            <span>省外</span>
          </div>
        </div>
        <div class="carpost flex-around">
          <div class="item">
            <p>
              <span>发往成都</span>
              <span>28</span>
            </p>
            <p>
              <span>发往绵阳</span>
              <span>28</span>
            </p>
            <p>
              <span>发往自贡</span>
              <span>28</span>
            </p>
            <p>
              <span>发往攀枝花</span>
              <span>28</span>
            </p>
            <p>
              <span>发往泸州</span>
              <span>28</span>
            </p>
            <p>
              <span>发往德阳</span>
              <span>28</span>
            </p>
            
          </div>
          <div class="item">
            <p>
              <span>发往成都</span>
              <span>28</span>
            </p>
            <p>
              <span>发往绵阳</span>
              <span>28</span>
            </p>
            <p>
              <span>发往自贡</span>
              <span>28</span>
            </p>
            <p>
              <span>发往攀枝花</span>
              <span>28</span>
            </p>
            <p>
              <span>发往泸州</span>
              <span>28</span>
            </p>
            <p>
              <span>发往德阳</span>
              <span>28</span>
            </p>
           
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="line_box">
        <fourbg></fourbg>
        <p class="one_tit">过检人员同比分析</p>
        <div class="flex line_inner">
          <span class="left_mouth">上月</span>
          <div class="progress">
            <el-progress color="#9ccb6c" :show-text="false" :percentage="60" :stroke-width="15"></el-progress>
          </div>
          <span class="right_num1 right_num">123,232,00</span>
        </div>
        <div class="flex line_inner">
          <span class="left_mouth">上月</span>
          <div class="progress">
            <el-progress color="#3fb778" :show-text="false" :percentage="77" :stroke-width="15"></el-progress>
          </div>
          <span class="right_num2 right_num">123,232,00</span>
        </div>

        <p class="one_tit">重点进站人员同比分析</p>
        <div class="flex line_inner">
          <span class="left_mouth">上月</span>
          <div class="progress">
            <el-progress color="#ec5a62" :show-text="false" :percentage="60" :stroke-width="15"></el-progress>
          </div>
          <span class="right_num3 right_num">123,232,00</span>
        </div>
        <div class="flex line_inner">
          <span class="left_mouth">上月</span>
          <div class="progress">
            <el-progress color="#eb8f58" :show-text="false" :percentage="77" :stroke-width="15"></el-progress>
          </div>
          <span class="right_num4 right_num">123,232,00</span>
        </div>
      </div>
      <!-- 4 -->
      <div class="table2 ysglvuetable">
        <p class="one_tit">当日进站重点人员</p>
        <el-table :data="tableData" stripe height="88%" style="width: 98.6%;margin:auto;heigth:88%;min-height:200px">
          <el-table-column prop="date" label="通过时间"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="mes" label="信息"></el-table-column>
          <el-table-column prop="status" label="类别"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="cont_right">
      <!-- 1 -->
      <div class="flex-around car_item">
       <fourbg></fourbg>
        <div v-for="(item,i) of carlist" :key="i">
          <p>{{item.tit}}</p>
          <p class="num">
            <span>{{item.num.slice(0,1)}}</span>
            {{item.num.slice(1)}}
          </p>
        </div>
      </div>
      <!-- 公司表 -->
      <div class="companytable" style="height:70vh">
        <fourbg></fourbg>
            <div class="flex-between selected_xia" style="padding:.8rem 1rem">
          <p class="one_tit" style="margin-top:.5rem">交通运输管理</p>
          <el-select v-model="value" filterable placeholder="请选择公司">
            <el-option
              v-for="item in options"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
               <el-table
          :data="company"
          @row-click="rowclick"
          stripe
          height="88%"
          style="width:98.6%;margin:auto;height:88%"
        >
          <el-table-column prop="name" label="公司名称"></el-table-column>
          <el-table-column prop="bc" label="当日总班次"></el-table-column>
          <el-table-column prop="sp" label="售票情况"></el-table-column>
        </el-table>
    

      </div>
      <!-- table -->
    

    </div>
    <!-- <div class="center_lit" v-if="centerbox">
      <div class="flex-between top_tit">
        <span>事故警报</span>
        <i class="el-icon-close" @click="()=>{this.centerbox=false}"></i>
      </div>
      <div class="item flex car_name">
        <span>川K4856</span>
        <span>追尾</span>
      </div>
      <div class="item">
        <span>目的地：</span>
        <span>xxxxx镇</span>
      </div>
      <div class="item">
        <span>司机：</span>
        <span class="uname">王华机</span>
        <span>15896453658</span>
      </div>
      <div class="item">
        <span>追尾定位：</span>
        <span>内江市市中区xxx街道xxx路</span>
      </div>
      <div class="imgbox">
        <video controls autoplay src="../../assets/img/sg1.mp4"></video>
      </div>
      <div class="sg_btn flex-around">
        <span>调度协调</span>
        <span>司机连线</span>
      </div>
    </div> -->

      <div class="ysglvuetable carlinebox"  v-show="linetable">
             <fourbg></fourbg>
        <div class="flex-between selected_xia" style="padding:.5rem 1rem">
          <p class="one_tit" style="margin-top:.5rem">黄桷井汽车站</p>
             <el-select v-model="value" filterable placeholder="请选择区域">
            <el-option
              v-for="item in options"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="line_select">
          <i class="el-icon-close" @click="()=>{this.linetable=false}"></i>
          </div>
        </div>

        <el-table
          :data="tableData2"
          @row-click="rowclick2"
          stripe
          height="80.5%"
          style="width:98.6%;margin:auto;height:80.5%"
        >
          <el-table-column prop="cp" label="车牌"></el-table-column>
          <el-table-column prop="address" label="目的地"></el-table-column>
          <el-table-column prop="sj" label="司机"></el-table-column>
          <el-table-column prop="sp" label="售票情况"></el-table-column>
          <el-table-column prop="cz" label="出站时间"></el-table-column>
        </el-table>
      </div>

    <div class="center_bit">
      
      <div class="one_tit">站内监控
   <div style="position:absolute;left:50%;margin-left:2.1875rem;margin-top:-1.875rem" @click="centerbitboolclick">
        <el-button  type="" v-if="centerbitbool" icon="el-icon-caret-bottom" plain style="height:1.875rem;width:4.375rem;padding:0"></el-button>
        <el-button type="" v-else icon="el-icon-caret-top" plain style="height:1.875rem;width:4.375rem;padding:0"></el-button>
    </div>
        
      </div>
      <div class="sg_img flex-wrap" v-show="centerbitbool">
        <!-- <img
          @click="()=>{centerbox=true}"
          src="../../assets/img/icon3/1.png"
          v-for="(item,i) of 14"
          :key="i"
          alt
        /> -->
        <video   v-for="(item,j) of 3"
          :key="j" controls  src="../../assets/img/sg1.mp4"></video>
            <!-- <img
          @click="()=>{centerbox=true}"
          src="../../assets/img/icon3/1.png"
          v-for="(item,index) of 13"
          :key="index"
          alt
        /> -->
      </div>
    </div>
    <!-- 长的查看 -->
    <div class="long_kan" v-if="long_look">
      <div class="flex-between top_tit">
        <span>川K4586</span>
        <i class="el-icon-close" @click="()=>{this.centerbox=true;this.long_look=false}"></i>
      </div>
      <div class="item">
        <p>
          <span>始发地：</span>
          <span>xxxxxx镇</span>
        </p>
        <p>
          <span>目的地：</span>
          <span>xxxxxx镇</span>
        </p>
        <p>
          <span>总公里数：</span>
          <span>172km</span>
        </p>
      </div>
      <div class="item">
        <p>
          <span>司机：</span>
          <span>王华及</span>
        </p>
        <p>
          <span>电话：</span>
          <span>1814146461444</span>
        </p>
        <p>
          <span>公司：</span>
          <span>内江市市中区xxx街道xxx路</span>
        </p>
      </div>
      <div class="item">
        <p>
          <span>售票情况：</span>
          <span>
            <i class="number">32</i> /32
          </span>
        </p>
        <p>
          <span>乘客量：</span>
          <span>
            <i class="number">32</i> /32
          </span>
        </p>
        <p>
          <span>例行性能检查：</span>
          <span class="db">安全达标</span>
        </p>
        <p>
          <span>出站时间：</span>
          <span class="date">2020-10-1</span>
          <span>18:12:12</span>
        </p>
        <p>
          <span>出站签字负责人：</span>
          <span>李俊是</span>
        </p>
      </div>
      <!-- <img class="one_img" src="../../assets/img/icon3/1.png" alt /> -->
      <img class="two_img" src="../../assets/img/icon3/1.png" alt />
      <div class="flex-around">
        <div>查看乘客信息</div>
        <div class="sjlx" @click="phonesj">司机连线</div>
      </div>
    </div>
    <div id="allmap3"></div>
          <div class="input-item">
      <button class="btn" v-show="zsbtn" @click="()=>{this.zsbtn=!this.zsbtn}" id="add-satellite-layer" style="margin-right:1rem;">切换3D</button>
      <button class="btn" v-show="!zsbtn"  @click="()=>{this.zsbtn=!this.zsbtn}" id="remove-satellite-layer">切换2D</button>
    </div>
  </div>
</template>

<script>
// import  json  from '../assets/map1.json'
import fourbg from "../echarts/bg4";
import MapLoader from '../../assets/Amap/Amap.js'
export default {
  components: {
    fourbg
  },
  data() {
    return {
      centerbitbool:false,
      centerbox: true,
      linetable:false,
      zsbtn:true,
      value:'',
      options:[
        {value:'绵阳',label:"绵阳"},
        {value:'德阳',label:"德阳"},
        {value:'自贡',label:"自贡"},
        {value:'资阳',label:"资阳"},
      ],
      long_look: false,
      carlist: [
        { tit: "今日工作车辆", num: "506" },
        { tit: "以出站车辆", num: "476" },
        { tit: "站内车辆", num: "56" },
        { tit: "今日事故", num: "6" }
      ],
      company:[
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'黄桷井汽车站',bc:15,sp:400},
        {name:'黄桷井汽车站',bc:15,sp:400},
        {name:'黄桷井汽车站',bc:15,sp:400},
        {name:'黄桷井汽车站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
        {name:'内江市汽车客运站',bc:15,sp:400},
      ],
      tableData2: [
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },{
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },{
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
        {
          cp: "川K23567",
          sj: "刘晓军",
          address: "显应庙",
          sp:'38/42',
          cz:'16:23:12'
        },
      ],
      tableData: [
        {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        }, {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
       {
          date: "2016-05-02  16:23:12",
          name: "王小虎",
          mes: "513901199711365424",
          status:"正常"
        },
      ]
    };
  },
  mounted() {
      MapLoader().then(AMap => {
     this.map( [105.06772,29.576237], 17);
     })
    // this.draw();
    // var map = new BMap.Map('allmap3');
     
    //批量添加图层
    // map.add([satelliteLayer]);
  
  },
  methods: {
    centerbitboolclick(){
      this.centerbitbool=!this.centerbitbool
    },
    phonesj(){//司机连线
      window.location.href='tel://18512828295'
    },
    map(point,zoom){
      var that=this
var map = new AMap.Map("allmap3", {
      resizeEnable: true,
             mapStyle:that.$mapStyle,
      center: point,
      zoom: zoom
    });
    // 构造官方卫星、路网图层
    var satelliteLayer = new AMap.TileLayer.Satellite();
    var roadNetLayer = new AMap.TileLayer.RoadNet();
      var marker = new AMap.Marker({
          map: map,
            icon:require("../../assets/img/icon/icon_gongjiao@1x.png"),
          position: [105.06772,29.576237],
          offset: new AMap.Pixel(-23, -30)
        });
        marker.setMap(map);
        marker.on('click', markerClick);
      function markerClick(e) {//普通标记弹框的方法
       var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        infoWindow.setContent('内江市市区汽车站');
        infoWindow.open(map, e.target.getPosition());
         map.setFitView([ marker ])
    }
      document.querySelector("#add-satellite-layer").onclick = function() {
      map.add(satelliteLayer);
    }

    document.querySelector("#remove-satellite-layer").onclick = function() {
      map.remove(satelliteLayer);
    }
    },
   changemap(add1, add2) {
     var that=this;
      var map = new AMap.Map("allmap3", {
        resizeEnable: true,
          mapStyle:that.$mapStyle,
        center: [105.06675492680017, 29.586301350821902], //地图中心点
        zoom: 14 //地图显示的缩放级别
      });
      //构造路线导航类
      var driving = new AMap.Driving({
        map: map
        // panel: "panel"//不需要指示
      });
         document.querySelector("#add-satellite-layer").onclick = function() {
      map.add(satelliteLayer);
    }

    document.querySelector("#remove-satellite-layer").onclick = function() {
      map.remove(satelliteLayer);
    }
      var satelliteLayer = new AMap.TileLayer.Satellite();
        map.add([satelliteLayer]);
      driving.search(
        [
          { keyword: add1, city: "内江" },
          { keyword: add2, city: "内江" }
        ],
        function(status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === "complete") {
            // log.success('绘制驾车路线完成')
            console.log("绘制驾车路线完成");
          } else {
            // log.error('获取驾车数据失败：' + result)
            console.log("获取驾车数据失败：");
          }
        }
      );
    },
    rowclick(row, column, event) {
      // console.log(row, column, event);
      // this.changemap('黄桷井市场客运站','显应庙')
      this.centerbox = false;
      this.linetable=true
      // this.long_look = true;
    },
    rowclick2(row, column, event){
     this.long_look = true;
    },
    format(percentage) {
      return percentage;
    },
    // draw() {
    //   var myChart = this.$echarts.init(document.getElementById("myChart3"));
    //   myChart.setOption({
    //     color: ["#00ccfe", "#f30"],
    //     title: {
    //       text: "近七日目的地统计TOP10",
    //       left: "2%",
    //       top: "3%",
    //       textStyle: {
    //         color: "#fff",
    //         fontSize: 18
    //       }
    //     },
    //     // 工具箱

    //     tooltip: {
    //       trigger: "axis"
    //     },
    //     // 图例
    //     legend: {
    //       orient: "vertical",
    //       right: "5%",
    //       top: "3%",
    //       data: ["过检人员", "重点人员"],
    //       textStyle: {
    //         color: "#fff"
    //       }
    //     },
    //     // x轴
    //     xAxis: {
    //       data: [
    //         "2020-10-1",
    //         "2020-10-2",
    //         "2020-10-3",
    //         "2020-10-4",
    //         "2020-10-5",
    //         "2020-10-6",
    //         "2020-10-7"
    //       ],
    //       splitLine: {
    //         show: false
    //       },
    //       axisLabel: {
    //         interval: 0,
    //         rotate: 40,
    //         color: "#fff", //坐标值得具体的颜色
    //         fontSize: 9
    //       }
    //     },
    //     yAxis: [
    //       {
    //         type: "value",
    //         min: 0,
    //         max: 250,
    //         interval: 50,
    //         splitLine: {
    //           show: false
    //         },
    //         axisLabel: {
    //           formatter: "{value}",
    //           color: "#fff", //坐标值得具体的颜色
    //           fontSize: 12
    //         }
    //       },
    //       {
    //         type: "value"
    //       }
    //     ],
    //     // 数据
    //     series: [
    //       {
    //         name: "过检人员",
    //         type: "bar",
    //         barWidth: 20, //柱图宽度
    //         data: [50, 220, 136, 110, 110, 120, 136]
    //       },
    //       {
    //         name: "重点人员",
    //         type: "line",
    //         data: [50, 220, 116, 190, 70, 180, 136]
    //       }
    //     ]
    //   });
    // }
  }
};
</script>
<style>
.ysglvuetable .el-progress-bar__outer,.companytable .el-progress-bar__outer{
  background: transparent;
 
}
.el-progress-bar__outer{
 height: 0.9375rem!important;
}
.ysglvuetable .el-table th ,.companytable .el-table th{
  text-align: center;
  height: 1.875rem;
  font-size: 0.9375rem;
  background: rgba(10, 29, 66, 0.7);
  color: #fff;
}
.ysglvuetable .el-table td ,.companytable .el-table td{
  text-align: center;
  height: 1.875rem;
  font-size: 0.75rem;
  color: #fff;
  border-bottom: none;
}
.el-select-dropdown{
    background: rgba(10, 29, 66,.7)!important;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
   background: #0086fb;
}
.el-select-dropdown__item{
  color: #fff;
}
.ysglvuetable input.el-input__inner,
.ysglvuetable input.el-input__inner,
.companytable input.el-input__inner,
.companytable input.el-input__inner{
  background: transparent;
  height: 2.275rem;
  width: 8.25rem;
  border:.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
   
}
.ysglvuetable .el-table--striped .el-table__body tr.el-table__row--striped td,
.companytable .el-table--striped .el-table__body tr.el-table__row--striped td{
  background: rgba(10, 29, 66, 0.7);
}
.ysglvuetable .el-table--enable-row-hover .el-table__body tr > td ,
.companytable .el-table--striped .el-table__body tr.el-table__row--striped td{
  background: rgba(14, 37, 85, 0.7);
}
.ysglvuetable .el-table--enable-row-hover .el-table__body tr:hover > td, 
.companytable .el-table--enable-row-hover .el-table__body tr:hover > td{
  background: #0086fb;
  cursor: pointer;
}
.selected_xia i{
  line-height: 0!important;
}
.selected_xia .el-input__inner{
  min-width: 105px;
}
.ysglvue .table2 tr > th:nth-child(1),
.ysglvue .table2 tr > td:nth-child(1) {
  width: 35%;
}
.ysglvue .table2 tr > th:nth-child(2),
.ysglvue .table2 tr > td:nth-child(2) {
  width: 15%;
}
.ysglvue .table2 tr > th:nth-child(3),
.ysglvue .table2 tr > td:nth-child(3) {
  width: 35%;
}
.ysglvue .table2 tr > th:nth-child(4),
.ysglvue .table2 tr > td:nth-child(4) {
  width: 15%;
}
.ysglvue .amap-info-content{
  color: #000;
 min-width:140px;
 font-size: .75rem;
}
</style>
<style lang="less" scoped>
.ysglvue {
  font-size: 0.875rem;
  color: #fff;
}
.cont_left {
  width: 22%;
  height: 100%;
  // background:palevioletred;
  position: absolute;
  overflow-y: auto;
  z-index: 99;
  left: 1.25rem;
  top:0;
  padding-top: 10rem;
  .stop_num {
    padding: 1.125rem 2.1875rem;
    height: 10.5vh;
    min-height:6.775rem;
    background: rgba(20, 44, 90, 0.9);
    border: 0.0625rem solid #0086fb;
  }
  .stop_left {
    color: #0086fb;
    > p:last-child {
      font-size: 1.875rem;
    }
  }
  .stop_right {
    color: #ffca60;
    > p:last-child {
      font-size: 1.875rem;
    }
  }
}
.cont_right {
  width: 20%;
  height: 100%;
  // background:palevioletred;
  overflow-y: auto;
  position: absolute;
  z-index: 99;
  right: 1.25rem;
  top:0;
  padding-top: 10.5rem;
}
#myChart3 {
  margin-top: 0.625rem;
  background: url(../../assets/img/icon3/bg@1x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.line_inner {
  > div {
    width: 70%;
  }
}
.line_box {
  padding: 0.9375rem 0.625rem;
  margin-top: 0.625rem;
  position: relative;
  // background: url(../../assets/img/icon3/bg@1x.png);
   background: rgba(20, 44, 90, 0.9);
  background-size: 100% 100%;
  // height: 22vh;
    min-height: 12.975rem;
  background-repeat: no-repeat;
  .one_tit {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
    font-weight: bold;
  }
  .left_mouth {
    margin-right: 0.25rem;
  }
  .progress {
    margin-top: 0.125rem;
    margin-bottom: 0.625rem;
  }
  .right_num {
    font-weight: bold;
  }
  .right_num1 {
    color: #9ccb6c;
  }
  .right_num2 {
    color: #3fb778;
  }
  .right_num3 {
    color: #ec5a62;
  }
  .right_num4 {
    color: #eb8f58;
  }
}
.table2 {
  margin-top: 0.625rem;
  min-height: 12.975rem;
   height: 22vh;
   
  padding: 0.9375rem 0;
  background: url(../../assets/img/icon3/bg@1x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .one_tit {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
    padding: 0 0.9375rem;
    font-weight: bold;
  }
}
.car_item {
  padding: 1.25rem 0.625rem;
  // background: url(../../assets/img/icon3/bg@1x.png);
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
  position: relative;
  background: rgba(20, 44, 90, 0.9);

  > div:nth-child(2) {
    .num {
      color: #ffca60;
      font-size: 1.5rem;
      span {
        font-size: 1.875rem;
      }
    }
  }
  > div:nth-child(3) {
    .num {
      color: #0086fb;
      font-size: 1.5rem;
      span {
        font-size: 1.875rem;
      }
    }
  }
  > div:nth-child(4) {
    .num {
      color: #0086fb;
      font-size: 1.5rem;
      span {
        font-size: 1.875rem;
      }
    }
  }
  > div:last-child {
    .num {
      color: #fb0000;
      font-size: 1.5rem;
      span {
        font-size: 1.875rem;
      }
    }
  }
}
.ysglvuetable {
  margin-top: 0.625rem;
  position: relative;
  //  background: url(../../assets/img/icon3/bg@1x.png);
  background: rgba(20, 44, 90, 0.9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  > img {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
    position: absolute;
  }
  > img:first-child {
    top: -0.1875rem;
    left: -0.1875rem;
  }
  > img:nth-child(2) {
    top: -0.1875rem;
    right: -0.1875rem;
  }
  > img:nth-child(3) {
    bottom: -0.1875rem;
    left: -0.1875rem;
  }
  > img:nth-child(4) {
    bottom: -0.1875rem;
    right: -0.1875rem;
  }
}
.ysglvuetable .one_tit {
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  padding: 0 0.9375rem;
  font-weight: bold;
}
.center_lit {
  position: absolute;
  z-index: 99;
  background: rgba(20, 44, 90, 0.9);
  width: 17.5rem;
  // height: 25rem;
  border: 0.0625rem solid #0086fb;
  right: 22%;
  top: 20%;
  padding: 0.625rem;
}
.center_bit {
  position: fixed;
  z-index: 99;
  background: rgba(20, 44, 90, 0.9);

  width: 54%;
  // height: 17.5rem;
  bottom: 0.625rem;
  left: 51%;
  margin-left: -27%;
  border: 0.0625rem solid #026ba3c9;
  padding: 0.625rem;
  overflow-y: auto;
  .one_tit {
    font-size: 1.125rem;
    margin-bottom: 0.625rem;
    padding: 0 0.9375rem;
    font-weight: bold;
  }
  .sg_img {
    height: 15.5rem;
        img {
      width: 8.375rem;
      height: 6.25rem;
      object-fit: contain;
      margin-left: 0.625rem;
      margin-bottom: 0.625rem;
    }
    img:hover {
      transform: scale(1.04);
      cursor: pointer;
    }
    video {
      width: 8.375rem;
      height: 6.25rem;
      object-fit: contain;
      margin-left: 0.625rem;
      margin-bottom: 0.625rem;
    }
    video:hover {
      transform: scale(1.04);
      cursor: pointer;
    }
  }
}
.center_lit {
  .top_tit {
    span {
      font-size: 1.5rem;
      background: #f00;
      padding: 0.3125rem 1.5625rem;
      border-radius: 0.5rem;
    }
    i {
      font-size: 2.375rem;
    }
  }
  > .item {
    margin-top: 0.625rem;
  }
  .uname {
    margin-right: 1.25rem;
  }
  .car_name {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    span {
      margin-right: 1.25rem;
    }
  }
  .imgbox {
    width: 100%;
    height: 8.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.sg_btn {
  span {
    padding: 0.5625rem 1.375rem;
    font-size: 0.9375rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
  }
  > span:first-child {
    background: #00b6fb;
  }
  > span:last-child {
    background: #cd4a00;
  }
}
.item_btn {
  position: absolute;
  width: 30%;
  height: 1.875rem;
  left: 50%;
  margin-left: -15%;
  color: #0086fb;
  font-weight: bold;
  > div {
    width: 5rem;
    // border: 1px solid #eee;
    line-height: 1.875rem;
    text-align: center;
    background: url(../../assets/img/icon3/icon_2@1x.png);
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  > .active {
    background: url(../../assets/img/icon3/icon_1@1x.png);
    background-size: contain;
    background-repeat: no-repeat;
    color: #ffca60;
  }
}

.long_kan {
  position: absolute;
  z-index: 99;
  right: 44%;
  top: 14.5rem;
  width: 17.5rem;
  min-width: 215px;
  // height: 78%;
  // min-height: 48.4375rem;
  border: 0.0625rem solid #00b6fb;
  background: rgba(20, 44, 90, 0.9);
  padding: 0.9375rem;
  .flex-around {
    margin-top: 0.9375rem;
    div {
      width: 6.875rem;
      height: 2.1875rem;
      min-width: 90px;
      min-height: 24px;
      text-align: center;
      font-size: 0.875rem;
      color: #0086fb;
      border: 0.0625rem solid #0086fb;
      padding: 0.375rem 0.625rem;
      border-radius: 0.3125rem;
    }
    div:hover {
      background: #0086fb;
      color: #fff;
      cursor: pointer;
    }
  }
  .one_img {
    width: 100%;
    height: 8.125rem;
    object-fit: cover;
  }
  .two_img {
    width: 100%;
    margin-top: 0.625rem;
    height: 11.25rem;
    object-fit: cover;
  }
  .top_tit {
    span {
      font-size: 1.5rem;
    }
    i {
      font-size: 2.25rem;
    }
  }
  .item {
    margin-top: 1.125rem;
    p {
      display: flex;
      margin-bottom: 0.3125rem;
      .number {
        font-size: 1.125rem;
        color: #0086fb;
      }
      .db {
        font-size: 1.125rem;
        color: #3fb778;
      }
      .date {
        margin-right: 0.625rem;
      }
    }
  }
}

#allmap3 {
  width: 100%;
  height: 100%;
  min-height: 64rem;
  position: absolute;
  top: 0;
  z-index: 0;
}

.cartj {
  width: 100%;
  height: 14.5rem;
  min-height: 14.5rem;
  margin-top: 0.625rem;
  overflow: hidden;
  position: relative;
  background: rgba(20, 44, 90, 0.9);
  .cartit {
    padding: 10px;
    .name {
      font-size: 1.125rem;
      font-weight: bold;
    }
    .flex {
      > span {
        display: block;
        width: 3.425rem;
        height: 1.35rem;
        min-width: 55px;
        min-height: 18px;
        border-radius: 0.9375rem;
        text-align: center;
        border: 0.0625rem solid #0086fb;
        color: #0086fb;
        margin-left: 0.625rem;
        cursor: pointer;
      }
      .active {
        background: #0086fb;
        color: #fff;
      }
    }
  }
  .carpost {
   
    > div {
      width: 40%;
      height:11rem;
      overflow-y: auto;
    }
    p {
      display: flex;
      justify-content: space-between;
      padding-left: 1.25rem;
      margin-top: 0.3125rem;
    }
    .item p > span:first-child {
      width: 7.375rem;
      text-align: left;
    }
    .item p > span:last-child {
      font-size: 1rem;
      color: #00f8f8;
    }
  }
}
#allmap3 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
}
.input-item{
  position: absolute;
  width: 4.4375rem;
  bottom:5.225rem;
  color: #00f8f8;
  left:24%;
  >button{
      background: rgba(13, 36, 86, 0.8);
  }
  button:hover{
    background: #0086fb;
  }
}
// .sjlx{
//   color: #0086fb;
// }

.companytable {
  margin-top: 0.625rem;
  position: relative;
  //  background: url(../../assets/img/icon3/bg@1x.png);
  background: rgba(20, 44, 90, 0.9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 70vh!important;
  overflow: hidden;
  .one_tit {
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  padding: 0 0.9375rem;
  font-weight: bold;
}
}
.carlinebox{
  width: 25rem;
  height: 26rem;
  min-width: 310px;
   position: absolute;
   top: 14rem;
  right: 22%;
  z-index: 999;
}
.line_select{
 overflow: hidden;
  i{
    font-size: 1.875rem;
    margin-left: 1.25rem;
    // margin-top: .625rem;
  }
}
</style>