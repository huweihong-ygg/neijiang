<template>
  <div class="peoplevue">
    <div class="cont_left">
      <div class="canvas">
        <fourbg></fourbg>
        <div id="myChart4" style="width:100%;height:100%"></div>
      </div>
      <!--  -->
      <div class="flex-between">
        <div class="list_lb">
          <fourbg></fourbg>
          <div>
            <p class="num">
              1200
              <span class="merry">万公里</span>
            </p>
            <p class="subtit">公路里程</p>
          </div>
          <div>
            <p class="num">
              26
              <span class="merry">座</span>
            </p>
            <p class="subtit">桥梁</p>
          </div>
          <div>
            <p class="num">
              38
              <span class="merry">辆</span>
            </p>
            <p class="subtit">养护车辆</p>
          </div>
          <div>
            <p class="num">
              298
              <span class="merry">人</span>
            </p>
            <p class="subtit">养护人员</p>
          </div>
          <div>
            <p class="num">
              9800
              <span class="merry">TB</span>
            </p>
            <p class="subtit">数据量</p>
          </div>
          <div>
            <p class="num">
              750
              <span class="merry">万条</span>
            </p>
            <p class="subtit">记录条数</p>
          </div>
        </div>
        <div class="tub_box">
          <div class="tub">
            <p class="num">72</p>
            <p class="subtit">今日在线</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 养护人员 -->
    <div class="curing" v-show="curing">
      <fourbg></fourbg>
      <div class="title flex-between">
        <div class="yh_peo">养护人员</div>
        <div class="flex">
          <span
            :class="item.checked?'active':''"
            @click="changetab(i)"
            v-for="(item,i) of tablist"
            :key="i"
          >{{item.name}}</span>
          <i  class="el-icon-close" @click="curing=false"></i>
        </div>
      </div>
      <div class="yh_table">
        <el-table
          :data="tableData2"
          @row-click="rowclick"
          stripe
          height="90.5%"
          style="width:98.6%;margin:auto;height:90.5%"
        >
          <el-table-column prop="id" label="编号">
            <template slot-scope="scope">
              <span v-if="scope.row.status==-2" style="color:#f00">{{scope.row.id}}</span>
              <span v-else-if="scope.row.status==-1" style="color:#666">{{scope.row.id}}</span>
              <span v-else-if="scope.row.status==0" style="color:#666">{{scope.row.id}}</span>
              <span v-else-if="scope.row.status==1">{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="cp" label="电话"></el-table-column>
          <el-table-column prop="sj" label="司机">
            <template slot-scope="scope">
              <span v-if="scope.row.status==-2" style="color:#f00">{{scope.row.sj}}</span>
              <span v-else-if="scope.row.status==-1" style="color:#666">{{scope.row.sj}}</span>
              <span v-else-if="scope.row.status==0" style="color:#666">{{scope.row.sj}}</span>
              <span v-else-if="scope.row.status==1">{{scope.row.sj}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="当前状态">
            <template slot-scope="scope">
              <span v-if="scope.row.status==-2" style="color:#f00">异常情况</span>
              <span v-else-if="scope.row.status==-1" style="color:#666">离线中</span>
              <span v-else-if="scope.row.status==0" style="color:#666">休息中</span>
              <span v-else-if="scope.row.status==1" style="color:#00a73f">工作中</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 养护人员所属公司 -->
    <div class="cont_right">
      <fourbg></fourbg>
      <div class="title flex-between">
        <div class="yh_peo">养护人员所属公司</div>
       
      </div>
      <div class="yh_table">
        <el-table
          :data="company"
          @row-click="rowclick2"
          stripe
          height="88.5%"
          style="width:98.6%;margin:auto;height:88.5%"
        >
          <el-table-column prop="name" label="公司名称"></el-table-column>
          <el-table-column prop="bc" label="当日养护人员"></el-table-column>
          <el-table-column prop="sp" label="当日养护情况"></el-table-column>
         
        </el-table>
      </div>
    </div>
    <div class="message_box" v-if="message">
      <div class="flex-between mes_tit">
        <span>刘传军</span>
        <i class="el-icon-close" @click="()=>{message=false}"></i>
      </div>
      <div class="flex-between user_mes">
        <div class="user_img">
          <img src="../../assets/img/icon_4_1/icon_touxiang@1x.png" alt />
        </div>
        <div class="right_user">
          <div>编号：2746</div>
          <div>电话：18512828295</div>
          <div class="flex-around thr_img">
            <img src="../../assets/img/icon_4_1/icon_shiping@1x.png" alt />
            <img src="../../assets/img/icon_4_1/icon_tonghua@1x.png" alt />
            <img src="../../assets/img/icon_4_1/icon_yuying@1x.png" alt />
          </div>
        </div>
      </div>
      <div class="item1">
        <p>开始时间：2020-12-23 16:23:12</p>
        <p>开始位置：环城路</p>
        <p>当前位置：新华路</p>
        <p class="flex-between">
          <span>工作时长：48分钟</span>
          <span>工作公里数：12KM</span>
        </p>
      </div>

      <div class="item2">
        <div class="list">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">异常情况</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 新华路</span>
          </p>
        </div>

        <div class="list listtg">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">正常作业</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 新华路</span>
          </p>
        </div>

        <div class="list listtg">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">正常作业</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 腾飞路</span>
          </p>
        </div>
        <div class="list listtg">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">正常作业</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 新华路</span>
          </p>
        </div>

        <div class="list">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">异常情况</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 新华路</span>
          </p>
        </div>
        <div class="list">
          <p class="item_list">
            <span class="cir"></span>
            <span class="date">08:00:00 - 09:30:00</span>
            <span class="yic">异常情况</span>
          </p>
          <p class="jiedao">
            <span>环城路 - 新华路</span>
          </p>
        </div>
      </div>
    </div>

    <div id="allmap"></div>
    <div id="tip">鼠标悬停热点试试</div>
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
import fourbg from "../echarts/bg4";
import MapLoader from "../../assets/Amap/Amap.js";
export default {
  components: {
    fourbg
  },
  data() {
    return {
      message: false,
      zsbtn: false,
      curing:false,
      tablist: [
        { name: "全部", checked: true },
        { name: "工作中", checked: false },
        { name: "休息中", checked: false }
      ],
      company: [
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '优' },
        { name: "黄桷井养护公司", bc: 15, sp: '良好' },
        { name: "黄桷井养护公司", bc: 15, sp: '优' },
        { name: "黄桷井养护公司", bc: 15, sp: '良好' },
        { name: "黄桷井养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' },
        { name: "xxxx养护公司", bc: 15, sp: '良好' }, 
        { name: "xxxx养护公司", bc: 15, sp: '良好' }
      ],
      tableData2: [
        //    1工作中，0休息，-1离线，-2异常情况
        {
          id: 1,
          cp: "18512828295",
          point: [105.06705, 29.589433],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06684, 29.588878],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.066583, 29.584567],
          sj: "刘小军",
          status: -2
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.057313, 29.583354],
          sj: "刘小军",
          status: 0
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06049, 29.578238],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.094994, 29.593539],
          sj: "刘小军",
          status: -1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.042465, 29.598241],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.070897, 29.599867],
          sj: "刘小军",
          status: -1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.086045, 29.567697],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.053816, 29.577159],
          sj: "刘小军",
          status: 0
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.064673, 29.574733],
          sj: "刘小军",
          status: -1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.058322, 29.566278],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.064673, 29.574733],
          sj: "刘小军",
          status: -1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.050554, 29.576841],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.062055, 29.57951],
          sj: "刘小军",
          status: 0
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.053816, 29.577159],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06049, 29.578238],
          sj: "刘小军",
          status: -2
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06049, 29.578238],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.053816, 29.577159],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.062055, 29.57951],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.053816, 29.577159],
          sj: "刘小军",
          status: 0
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06049, 29.578238],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.053816, 29.577159],
          sj: "刘小军",
          status: -1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.062055, 29.57951],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.06049, 29.578238],
          sj: "刘小军",
          status: 1
        },
        {
          id: 1,
          cp: "18512828295",
          point: [105.062055, 29.57951],
          sj: "刘小军",
          status: 1
        }
      ]
    };
  },
  mounted() {
    this.draw();
    MapLoader().then(AMap => {
      this.map([105.06675492680017, 29.586301350821902], 15);
    });
  },
  methods: {
    map(point, zoom) {
      var that = this;
      var map = new AMap.Map("allmap", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: point,
        isHotspot: true,
        zoom: zoom
      });

      // addMarker();
      // 构造官方卫星、路网图层
      var satelliteLayer = new AMap.TileLayer.Satellite();
      var roadNetLayer = new AMap.TileLayer.RoadNet();
      var placeSearch = new AMap.PlaceSearch(); //构造地点查询类
      var infoWindow = new AMap.InfoWindow({});

      document.querySelector("#add-satellite-layer").onclick = function() {
        map.add(satelliteLayer);
      }; //转换3d的方法

      document.querySelector("#remove-satellite-layer").onclick = function() {
        map.remove(satelliteLayer);
      }; //移除3d的方法

      map.add([satelliteLayer]); //批量添加图层
      // icon_ren@1x

      var positionlist = [
        [105.06705, 29.589433],
        [105.06684, 29.588878],
        [105.066583, 29.584567],
        [105.057313, 29.583354],
        [105.06049, 29.578238],
        [105.094994, 29.593539],
        [105.042465, 29.598241],
        [105.070897, 29.599867],
        [105.086045, 29.567697],
        [105.077011, 29.568667],
        [105.053816, 29.577159],
        [105.057335, 29.57533],
        [105.057785, 29.572904],
        [105.058322, 29.566278],
        [105.071239, 29.576114],
        [105.064673, 29.574733],
        [105.050554, 29.576841],
        [105.062055, 29.57951]
      ];

      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      for (var i = 0, marker; i < positionlist.length; i++) {
        var marker = new AMap.Marker({
          icon: require("../../assets/img/icon_4_1/icon_ren@1x.png"),
          position: positionlist[i],
          map: map
        });
        marker.content = "养护人员：" + "刘" + (i + 1) + "大";
        marker.on("click", markerClick);
        // marker.emit('click', {target: marker}); //默认触发第一个事件
      }
      function markerClick(e) {
        console.log(e);
        infoWindow.setContent(e.target.content);
        map.setFitView([e.target]);
        that.message=true;
        infoWindow.open(map, e.target.getPosition());
      }
      that.$router.push("/dlyh/people");

      //  var zftlist = [
      //      [105.057785,29.572904],
      //     [105.058322,29.566278],
      //       ];
      //       for (var item of zftlist) {
      //         var marker4 = new AMap.Marker({
      //           // icon: require("../assets/img/icon/icon_mt@1x.png"),
      //           icon: new AMap.Icon({
      //             image: require("../../assets/img/icon/yhyj.png"),
      //             size: new AMap.Size(62, 62), //图标大小
      //             imageSize: new AMap.Size(32, 32)
      //           }),
      //           map: map,
      //           position: item,
      //           offset: new AMap.Pixel(-23, -30)
      //         });
      //         marker4.setMap(map);
      //         marker4.content = "道路紧急养护中.."+'</br>'+'养护人员：'+'刘晓东';
      //         marker4.on("click",markerClick);
      //       }
      // for(var item in positionlist){
      //   var marker = new AMap.Marker({
      //         icon:require("../../assets/img/icon_4_1/icon_ren@1x.png"),
      //         map: map,
      //         position: positionlist[item],
      //         offset: new AMap.Pixel(-23, -40)
      //       });

      //       marker.setMap(map);
      //  marker.setTitle('养护人员刘小军');
      //  marker.on("click", function(e) {
      //    var hs=e;
      //     // infoWindow.setContent(hs['address'+hs]);//点击以后窗口展示的内容
      //        that.message=true;
      //         that.map([e.lnglat.lng,e.lnglat.lat],18)

      //       });
      // }

      // 设置label标签
      // label默认蓝框白底左上角显示，样式className为：amap-marker-label
      //鼠标点击marker弹出自定义的信息窗体
      // marker.on("click", function() {
      //   alert("")
      // });
    },
      rowclick(row, column, event) {
     
      // this.message = true;
      this.map(row.point, 20);
    },
    rowclick2(row, column, event) {
       this.curing=true
    },
    changetab(i) {
      var newlist = this.tablist;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.tablist = newlist;
    },
    draw() {
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#FE0600", "#1DFFE8", "#00A73F", "#FFCA60"],
        legend: {
          orient: "vertical",
          right: "2%",
          top: "20%",
          data: ["紧急养护处理", "日常养护", "养护巡查", "其他事件"],
          textStyle: {
            color: ["#FE0600", "#1DFFE8", "#00A73F", "#FFCA60"]
          },

          formatter: function(name) {
            var total = 0;
            var data = [
              { value: 335, name: "紧急养护处理" },
              { value: 310, name: "日常养护" },
              { value: 234, name: "养护巡查" },
              { value: 158, name: "其他事件" }
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
          }
        },
        series: [
          {
            name: "今日",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["20%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "紧急养护处理" },
              { value: 310, name: "日常养护" },
              { value: 234, name: "养护巡查" },
              { value: 158, name: "其他事件" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style>
.yh_table .el-progress-bar__outer {
  background: transparent;
}
.yh_table .el-table th {
  text-align: center;
  height: 30px;
  font-size: 15px;
  background: rgba(10, 29, 66, 0.7);
  color: #fff;
}
.yh_table .el-table td {
  text-align: center;
  height: 30px;
  font-size: 12px;
  color: #fff;
  border-bottom: none;
}
.yh_table .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba(10, 29, 66, 0.7);
}
.yh_table .el-table--enable-row-hover .el-table__body tr > td {
  background: rgba(14, 37, 85, 0.7);
}
.yh_table .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #0086fb;
  cursor: pointer;
}
.info-title {
  font-weight: bolder;
  color: #000;
  font-size: 14px;
  width: 250px;
  line-height: 26px;
  padding: 0 0 0 6px;
}
.info-content {
  width: 250px;
  padding: 4px;
  color: #666666;
  line-height: 23px;
  font: 12px Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", Arial;
}
.info-content img {
  float: left;
  margin: 3px;
}
.amap-info-combo .keyword-input {
  height: auto;
}
.peoplevue .amap-info-content {
  color: #000;
  min-width: 140px;
  font-size: 0.75rem;
}
</style>
<style lang="less" scoped>
.cont_left {
  position: absolute;
  // overflow-y: auto;
  left: 1.25rem;
  z-index: 99;
  width: 21%;
  top: 0;
  height: 100%;
  padding-top: 10.5rem;
  
  //   background: #458793;
  .canvas {
    width: 100%;
    height: 9.375rem;
    position: relative;
    background: rgba(10, 29, 66, 0.9);
    border: 1px solid #026ba3c9;
  }
  .tub_box {
    width: 50%;
    min-height: 35.25rem;
    height: 60vh;
    position: relative;
    margin-top: 3.125rem;
    .tub {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 9.375rem;
      height: 9.375rem;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      text-align: center;

      background: url(../../assets/img/icon4_1/bg@3x.png);
      background-repeat: no-repeat;
      background-size: contain;
      .num {
        font-size: 2.5rem;
        margin-top: 2.1875rem;
        color: #ffca60;
      }
    }
  }
  .list_lb {
    width: 50%;
    padding-left: 0.625rem;
    padding-top: 0.625rem;
    min-height: 35.25rem;
    height: 60vh;
    position: relative;
    margin-top: 2.125rem;
    background: rgba(10, 29, 66, 0.9);
    border: 0.0625rem solid #026ba3c9;

    > div {
      margin-top: 0.75rem;
    }
    .num {
      font-size: 1.525rem;
      color: #ffca60;
    }
    .merry {
      color: #fff;
      font-size: 0.875rem;
    }
    .subtit {
      color: #0086fb;
      font-size: 1.75rem;
    }
  }
}
.curing{
  position: absolute;
  overflow: hidden;
  z-index: 99;
  right: 22.5%;
  top: 13.5rem;
  width: 25rem;
  min-width: 300px;
  height: 65%;
  background: rgba(10, 29, 66, 0.9);
  border: 0.0625rem solid #026ba3c9;
  .title {
    padding: 0.9375rem 0.625rem;
    .yh_peo {
      font-size: 1.125rem;
    }
    i{
      font-size: 1.875rem;
      color:#fff;
      margin-left: 1.25rem;
    }
    i:hover{
      color: #0086fb;
    }
    .flex {
      color: #0086fb;
      > span {
        border: 0.0625rem solid #0086fb;
        padding: 0 0.5rem;
        border-radius: 0.9375rem;
        margin-left: 0.625rem;
        cursor: pointer;
      }
      .active {
        background: #0086fb;
        color: #fff;
      }
    }
  }
}
.cont_right {
  position: absolute;
  z-index: 99;
  right: 1.25rem;
  top: 13.5rem;
  width: 21%;
  height:55vh;
  overflow: hidden;
  background: rgba(10, 29, 66, 0.9);
  border: 0.0625rem solid #026ba3c9;
  .title {
    padding: 0.9375rem 0.625rem;
    .yh_peo {
      font-size: 1.125rem;
    }
    
    .flex {
      color: #0086fb;
      > span {
        border: 0.0625rem solid #026ba3c9;
        padding: 0 0.5rem;
        border-radius: 0.9375rem;
        margin-left: 0.625rem;
        cursor: pointer;
      }
        
      .active {
        background: #0086fb;
        color: #fff;
      }
    }
  }
}
.yh_table {
  height: 96%;
  overflow-y: auto;
}
.message_box {
  position: absolute;
  z-index: 99;
  width: 23.75rem;
  min-width:245px;
  padding: 0.9375rem;
  font-size: 0.875rem;
  // height: 79%;
  right: 44%;
  top: 14.25rem;
  //   background: darkgrey;
  background: rgba(10, 29, 66, 0.7);
  border: 0.0625rem solid #026ba3c9;
  .user_mes {
    margin-top: 0.625rem;
    .user_img {
      width: 7.25rem;
      height: 7.25rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .item1 {
    padding: 0.9375rem;
    margin-top: 1.25rem;
    background: rgb(11, 56, 119);
    > p {
      margin-bottom: 0.625rem;
    }
  }
  .right_user {
    font-size: 0.875rem;
    margin-right: 1.875rem;
    > div {
      margin-bottom: 1.025rem;
    }
  }
  .thr_img {
    > img {
      width: 2.1875rem;
      height: 2.1875rem;
      object-fit: contain;
    }
  }
  .mes_tit {
    span {
      font-size: 1.5rem;
    }
    i {
      font-size: 2.25rem;
    }
  }
}
.item2 {
  font-size: 0.875rem;
  height: 19rem;
  overflow-y: auto;
  .list {
    margin-top: 0.9375rem;
  }
  .listtg {
    .cir {
      display: inline-block;
      width: 0.8075rem;
      height: 0.8075rem;
      border-radius: 50%;
      background: #00a73f !important;
      margin-right: 1.25rem;
    }
    .yic {
      color: #fff !important;
    }
  }
  .item_list {
    .cir {
      display: inline-block;
      width: 0.8075rem;
      height: 0.8075rem;
      border-radius: 50%;
      background: #f00;
      margin-right: 1.25rem;
    }
    .date {
      margin-right: 1.125rem;
    }
    .yic {
      color: #f00;
    }
  }
  .jiedao {
    display: block;
    padding-left: 3.75rem;
    margin-top: 0.225rem;
  }
}
#allmap {
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
</style>