<template>
  <div class="Urbanpublicvue">
    <div class="cont_left">
      <!-- 1.1 -->
      <div class="daycar">
        <fourbg></fourbg>
        <ul>
          <li>
            <p class="oncar">今日工作车辆</p>
            <p class="onnum">32</p>
          </li>
          <li>
            <p class="gdcar">今日固定班次</p>
            <p class="gdnum">14</p>
          </li>
          <li>
            <p>今日区域班次</p>
            <p class="bcnum">14</p>
          </li>
          <li>
            <p>今日异常车辆</p>
            <p class="errcar">2</p>
          </li>
        </ul>
      </div>
      <!-- 1 -->
      <!-- <div class="ybp_3 f4bg">
        <fourbg></fourbg>
        <div class="title flex-around">
          <span class="s1">车辆总数</span>
          <span class="s2">今日上线</span>
          <span class="s3">今日报警</span>
        </div>
        <div class="chart_box flex-around">
          <div id="chart1"></div>
          <div id="chart2"></div>
          <div id="chart3"></div>
        </div>
      </div>-->
      <!-- 2.1 -->
      <!-- <div class="box2 flex-between">
        <div class="box2_left f4bg">
          <fourbg></fourbg>
          <p class="tit f_nowrap">当前警情数 (起)</p>
          <div class="flex">
            <div class="number">67</div>
            <div class="f_nowrap">
              <p class="day ">日环比: +3% ↑</p>
              <p class="zhou ">周环比: -2% ↓</p>
            </div>
          </div>
        </div>
        <div class="box2_right f4bg">
          <fourbg></fourbg>
          <p class="tit f_nowrap">区域拥堵指数</p>
          <div class="flex">
            <div class="number">1.4</div>
            <div class="f_nowrap">
              <p class="hx">缓行</p>
              <p class="">平均车速:335KM/H</p>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="box3 flex-between">
        <div class="box3_left f4bg">
          <fourbg></fourbg>
          <p class="tit f_nowrap">当前路面警力 (名)</p>
          <div class="flex">
            <div class="number f_nowrap">99</div>
            <div class="f_nowrap">
              <p class="day ">日环比: +3% ↑</p>
              <p class="zhou ">周环比: -2% ↓</p>
            </div>
          </div>
        </div>
        <div class="box3_right f4bg">
          <fourbg></fourbg>
          <p class="tit f_nowrap">当月违章次数 (次)</p>
          <div class="f_nowrap">
            <span class="number">1421</span>
            <span class="zhou">月环比:2%↓</span>
          </div>
        </div>
      </div>-->
      <!-- 3 -->
      <!-- <div class="Traffic f4bg">
        <fourbg></fourbg>
        <p class="tit">交通影响因素</p>
        <ul>
          <li>
            下班高峰期间,较为拥堵,请减速,下班高峰期间,较为拥堵,请减速下班高峰期间,较为拥堵,请减速
            <span>2020-10-01</span>
          </li>
          <li>
            下班高峰期间,较为拥堵,请减速,下班高峰期间,较为拥堵,请减速下班高峰期间,较为拥堵,请减速
            <span>2020-10-01</span>
          </li>
          <li>
            下班高峰期间,较为拥堵,请减速,下班高峰期间,较为拥堵,请减速下班高峰期间,较为拥堵,请减速
            <span>2020-10-01</span>
          </li>
          <li>
            下班高峰期间,较为拥堵,请减速,下班高峰期间,较为拥堵,请减速下班高峰期间,较为拥堵,请减速
            <span>2020-10-01</span>
          </li>
        </ul>
      </div>-->
      <!--  -->
      <!-- <div class="table1 f4bg">
        <fourbg></fourbg>
        <p class="tit">街道拥堵排名</p>
        <el-table
          :data="tableData"
          stripe
          height="71.5%"
          style="width:98.6%;margin:auto;height:71.5%"
        >
          <el-table-column prop="id" label="车牌">
            <template slot-scope="scope">
              <span :class="scope.row.num>0.5?'ydfont':''">{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="目的地">
            <template slot-scope="scope">
              <span :class="scope.row.num>0.5?'ydfont':''">{{scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="num" label="售票情况">
            <template slot-scope="scope">
              <span :class="scope.row.num>0.5?'ydfont':''">{{scope.row.num}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>-->
    </div>
    <div class="cont_right">
      <div class="flex-between right_1">
        <div class="flex">
          <div class="left">
            <span>已覆盖村落</span>
            <span class="fgnum">42</span>
          </div>
          <div class="right">
            <span>未覆盖村落</span>
            <span class="dfgnum">17</span>
          </div>
        </div>
        <fourbg></fourbg>
      </div>
      <!-- 2 -->
      <div class="cartj">
        <fourbg></fourbg>
        <div class="flex-between cartit">
          <div class="name">今日线路统计</div>
          <div class="flex">
            <span>
              共计
              <span style="color:#0086fb">9</span>条线路
            </span>
          </div>
        </div>
        <div class="carpost flex-around">
          <div class="item">
            <p @click="changemap('内江市中医院','显应寺')">
              <span class="f_nowrap">中医院-显应寺</span>
              <span>21</span>
            </p>
            <p @click="changemap('内江市汽车站','郑家弯')">
              <span class="f_nowrap">汽车站-郑家弯</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','马家庄')">
              <span class="f_nowrap">汽车站-马家庄</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','红旗村')">
              <span class="f_nowrap">汽车站-红旗村</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','九龙村')">
              <span class="f_nowrap">汽车站-九龙村</span>
              <span>28</span>
            </p>
          </div>
          <div class="item">
            <p @click="changemap('内江市汽车站','全安镇')">
              <span class="f_nowrap">汽车站-全安镇</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','马家坪')">
              <span class="f_nowrap">汽车站-马家坪</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','汪家湾')">
              <span class="f_nowrap">汽车站-汪家湾</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','永兴村')">
              <span class="f_nowrap">汽车站-永兴村</span>
              <span>28</span>
            </p>
            <p @click="changemap('内江市汽车站','联合村')">
              <span class="f_nowrap">汽车站-联合村</span>
              <span>28</span>
            </p>
          </div>
        </div>
      </div>

      <div class="f4bg table2">
        <fourbg></fourbg>
        <div class="flex-between selected_xia" style="padding-right:.8rem;padding-top:.8rem">
          <p class="tit">今日固定班次工作车辆</p>
          <el-select v-model="value" filterable placeholder="请选择线路">
            <el-option
              v-for="item in options"
              :key="item.label"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-table
          :data="tableData2"
          stripe
          @row-click="rowclick"
          height="70%"
          style="width:98.6%;margin:auto;height:70%"
        >
          <el-table-column prop="xl" label="线路">
            <template slot-scope="scope">
              <span>{{scope.row.xl}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="cp" label="车牌">
            <template slot-scope="scope">
              <span>{{scope.row.cp}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="司机">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="班次时间">
            <template slot-scope="scope">
              <span>{{scope.row.date}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- <div class="jk_box f4bg">
        <fourbg></fourbg>
        <div class="flex-between toptit">
          <span class="tit">公交监控</span>
          <span class="right_btn">全屏查看</span>
        </div>
        <div class="imgbox flex-wrap flex-around">
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
          <video controls src="../../assets/img/huasan.mp4" />
        </div>
      </div>-->

      <div class="table3">
        <fourbg></fourbg>
        <div class="flex-between selected_xia" style="padding-right:.8rem;padding-top:.8rem">
          <p class="tit">今日区域班次工作车辆</p>

          <el-select v-model="value" filterable placeholder="请选择区域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-table
          flex-around
          :data="tableData2"
          stripe
          @row-click="rowclick2"
          height="66%"
          style="width:98.6%;margin:auto;height:66%"
        >
          <el-table-column prop="xl" label="线路">
            <template slot-scope="scope">
              <span>{{scope.row.xl}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="cp" label="车牌">
            <template slot-scope="scope">
              <span>{{scope.row.cp}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="司机">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="班次时间">
            <template slot-scope="scope">
              <span>{{scope.row.date}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 长的查看 -->
    <div class="long_kan" v-if="long_look">
      <div class="flex-between  top_tit">
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
          <span>线路号：</span>
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
          <span>当前拥挤度：</span>
          <span>
            <i class="number">拥挤</i>
          </span>
        </p>
        <p>
          <span>当前位置：</span>
          <span class="lk">xxxx街xxx路口</span>
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
      <div class="imgbox flex-around flex-wrap">
        <img class="one_img" src="../../assets/img/icon3/1.png" alt />
        <img class="two_img" src="../../assets/img/icon3/1.png" alt />
        <img class="two_img" src="../../assets/img/icon3/1.png" alt />
        <img class="two_img" src="../../assets/img/icon3/1.png" alt />
      </div>

      <div class="flex-around">
        <div class="f_nowrap">查看乘客信息</div>
        <div class="f_nowrap">司机连线</div>
      </div>
    </div>
    <div id="allmap4"></div>
    <div id="panel"></div>

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
// import ''
import fourbg from "../echarts/bg4";
import MapLoader from '../../assets/Amap/Amap.js'
export default {
  components: {
    fourbg
  },
  data() {
    return {
      value: "",
      zsbtn:false,
      options: [
        {
          value: "内江市市区",
          label: "内江市市区"
        }
      ],
      long_look: false,
      tableData2: [
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        },
        {
          xl: "xxx村-xxx村",
          cp: "川K38590",
          name: "张三",
          date: "16:35:12"
        }
      ],
      tableData: [
        {
          id: 1,
          address: "xxxx街道",
          num: 1
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.2
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.8
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.7
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.3
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.2
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.5
        },
        {
          id: 1,
          address: "xxxx街道",
          num: 0.4
        },
        {
          id: 1,
          address: "王小虎",
          num: 0.3
        }
      ]
    };
  },
  mounted() {
  
   MapLoader().then(AMap => {
     this.changemap("内江市汽车站", "显应寺");
     })
  },
  methods: {
    changemap(add1, add2) {

/*百度地图实列
   // GL版命名空间为BMapGL
	var map = new BMapGL.Map("allmap4");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(105.06675492680017, 29.586301350821902), 15);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式

 var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
    scale: 0.6,//图标缩放大小
    strokeColor:'#fff',//设置矢量图标的线填充颜色
    strokeWeight: '2',//设置线宽
});
var icons = new BMap.IconSequence(sy, '10', '30');
// 创建polyline对象
var pois = [
	new BMapGL.Point(105.074311,29.581921),
	new BMapGL.Point( 105.074877,29.581948),
	new BMapGL.Point(105.074913,29.581764),
  new BMapGL.Point( 105.0744,29.577771),
  new BMapGL.Point(105.075838,29.576742),
  new BMapGL.Point( 105.081282,29.575745),
  new BMapGL.Point(105.083747,29.574427),
  new BMapGL.Point( 105.086676,29.574148),
  new BMapGL.Point( 105.087439,29.57447),
  new BMapGL.Point( 105.090098,29.574757),
  new BMapGL.Point( 105.091414,29.574294),
];
var pois2 = [
	new BMapGL.Point(105.091414,29.574294),
	new BMapGL.Point(105.092533,29.573685),
	new BMapGL.Point( 105.09552,29.572146),
	new BMapGL.Point(105.096288,29.570736),
  new BMapGL.Point( 105.099544,29.571443),
  new BMapGL.Point(105.100191,29.571423),
  new BMapGL.Point( 105.101089,29.571082),
  new BMapGL.Point(105.10219,29.57116),

];
	var data_info = [[105.091414,29.574294,],
					 [105.068324,29.574973,],
					 [105.067809,29.577189,]
          ];
   var opts = {
				// width : 180,     // 信息窗口宽度
				// height: 80,     // 信息窗口高度
				// title : "信息窗口" , // 信息窗口标题
				// enableMessage:true//设置允许信息窗发送短息
         };   
    for(var i=0;i<data_info.length;i++){
        var myIcon = new BMapGL.Icon(require("../../assets/img/icon/ycyj.png"), new BMapGL.Size(36,36));
        	// var marker = new BMapGL.Marker(pt,{icon:myIcon});  // 创建标注
		var marker = new BMapGL.Marker(new BMapGL.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
		var content = `<div class="map_top" style="  width: 18.75rem;
 
  border-radius: 0.9375rem;color:#f00;
  margin-top:35px;margin-left:-15px;
  font-weight:bold;
  background: #E6A23C99;"> <div class="top" style="padding: 0.9375rem;"> <p style=" margin-bottom: 0.3125rem;">事件地点: 玉溪路公园街390号</p><p style=" margin-bottom: 0.3125rem;">司机：刘晓波</p></div><div class="bot" style=" background: #E6A23C;
    padding: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;">车辆轮胎漏气,正在维护中</div><div class="sj" style=" width: 0;
    height: 0;
    position: absolute;
    left: 40%;
    border-width: 1.275rem;
    border-style: solid;
    border-color: #E6A23C transparent transparent transparent;"></div></div>`;
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
  }
      function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
    var p = e.target;
		var point = new BMapGL.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMapGL.InfoWindow(content);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
var polyline =new BMapGL.Polyline(pois, {
   enableEditing: false,//是否启用线编辑，默认为false
   enableClicking: true,//是否响应点击事件，默认为true
   icons:[icons],
   strokeWeight:'1',//折线的宽度，以像素为单位
   strokeOpacity: 0.9,//折线的透明度，取值范围0 - 1
   strokeColor:"#0f0" //折线颜色
});
var polyline2 =new BMapGL.Polyline(pois2, {
   enableEditing: false,//是否启用线编辑，默认为false
   enableClicking: true,//是否响应点击事件，默认为true
   icons:[icons],
   strokeWeight:'1',//折线的宽度，以像素为单位
   strokeOpacity: 0.9,//折线的透明度，取值范围0 - 1
   strokeColor:"#f00" //折线颜色
});

map.addOverlay(polyline);  
map.addOverlay(polyline2);  
*/








      // return false
         var that=this
      var map = new AMap.Map("allmap4", {
        resizeEnable: true,
            mapStyle:that.$mapStyle,
        center: [105.06675492680017, 29.586301350821902], //地图中心点
        zoom: 15 //地图显示的缩放级别
      });

       var kakou = [
        [105.068324,29.574973],
         [105.067809,29.577189]
       
      ];
     
        var marker4 = new AMap.Marker({
          icon: require("../../assets/img/icon/yxyj.png"),
          map: map,
          position: [105.109689,29.567461],
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on('click', markerClickyq);

         function markerClickyq(e) {//普通标记弹框的方法
       var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        infoWindow.setContent('刘小波司机越线行驶');
        infoWindow.open(map, e.target.getPosition());
    }
      //        var marker5 = new AMap.Marker({
      //     icon: require("../../assets/img/icon/yichang.png"),
      //     map: map,
      //     position: kakou[1].point,
      //     offset: new AMap.Pixel(-23, -30)
      //   });
      //   marker5.setMap(map);
      //       marker5.on("click", function() {
      //              infoWindow2.open(map, marker5.getPosition());
      //         map.setFitView([ marker5 ])
      // });
      




     var mes2 = "事故发生了";
      var title2 = `<div class="map_top" style="  width: 18.75rem;
 
  border-radius: 0.9375rem;color:#f00;
  font-weight:bold;
  background: #E6A23C93;"> <div class="top" style="padding: 0.9375rem;"> <p style=" margin-bottom: 0.3125rem;">事件地点: 玉溪路公园街390号</p><p style=" margin-bottom: 0.3125rem;">司机：刘晓波</p></div><div class="bot" style=" background: #E6A23C;
    padding: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;">车辆轮胎漏气,正在维护中</div><div class="sj" style=" width: 0;
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

          for (var i = 0, marker; i < kakou.length; i++) {
        var marker = new AMap.Marker({
          icon:require("../../assets/img/icon/ycyj.png"),
            position: kakou[i],
            map: map
        });
        marker.on('click', markerClick);
        // marker.emit('click', {target: marker});//默认触发第一个事件
    }
    function markerClick(e) {
       console.log(e)
        // infoWindow.setContent(e.target.content);
         map.setFitView([ e.target ])
        infoWindow2.open(map, e.target.getPosition());
    }

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
    function closeInfoWindow() {//关闭弹框
        map.clearInfoWindow();
      }

     //路线区域绘制
var path=[
      [105.06709,29.576149],
      [105.066747,29.570625],
      [105.077304,29.567489],
      [105.084642,29.567041],
      [105.088848,29.564167],
      [105.094985,29.563794],
      [105.099792,29.565138],
      [105.10477,29.566444],
      [105.109233,29.566108],
     

      [105.110477,29.567975],
      [105.108074,29.569169],
      [105.104684,29.568572],
      [105.102324,29.568572],
      [105.100993,29.567415],
      [105.097045,29.56678],
      [105.090436,29.566034],
      [105.085115,29.569057],
      [105.079235,29.568982],
      [105.075416,29.570401],
      [105.06945,29.571558],
      [105.06842,29.572566],
      [105.068678,29.576671],


    ]
       var polygon = new AMap.Polygon({//行驶区域
        map: map,
         path: path,//设置多边形边界路径
        strokeColor: "#f20", 
        strokeWeight: 6,
        strokeOpacity: 0.4,
        fillOpacity: 0.3,
        fillColor: '#f00',
        zIndex: 50,
    }) 

     var polyEditor = new AMap.PolyEditor(map, polygon)
 polygon.on("click", function() {
        //  infoWindow2.open(map, markerxl.getPosition());
                 map.setFitView([ polygon ])
      });

   //构造路线导航类
     // 构造路线导航类
      var drivingOption = {
        policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
        ferry: 1, // 是否可以使用轮渡
        province: '川', // 车牌省份的汉字缩写  
    }
    var driving = new AMap.Driving(drivingOption)

    // 根据起终点经纬度规划驾车导航路线
    driving.search(new AMap.LngLat(105.067621,29.576501), new AMap.LngLat(105.123583,29.567991), function(status, result) {
        // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            if (result.routes && result.routes.length) {
                // 绘制第一条路线，也可以按需求绘制其它几条路线
                drawRoute(result.routes[0])
            }
        } else {
            log.error('获取驾车数据失败：' + result)
        }
    });

    function drawRoute (route) {
        var path = parseRouteToPath(route)

        var startMarker = new AMap.Marker({
            position: path[0],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
            map: map
        })

        var endMarker = new AMap.Marker({
            position: path[path.length - 1],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
            map: map
        })

        var routeLine = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: '#ffeeee',
            borderWeight: 2,
            strokeWeight: 5,
             zIndex:50,
            strokeColor: '#0091ff',
            lineJoin: 'round'
        })

        routeLine.setMap(map)

        // 调整视野达到最佳显示区域
        // map.setFitView([ startMarker, endMarker, routeLine ])
    }

    // 解析DrivingRoute对象，构造成AMap.Polyline的path参数需要的格式
    // DrivingResult对象结构参考文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DriveRoute
    function parseRouteToPath(route) {
        var path = []

        for (var i = 0, l = route.steps.length; i < l; i++) {
            var step = route.steps[i]

            for (var j = 0, n = step.path.length; j < n; j++) {
              path.push(step.path[j])
            }
        }

        return path
    }

      var drivingOption2 = {
        policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
        ferry: 1, // 是否可以使用轮渡
        province: '川', // 车牌省份的汉字缩写  
    }
    var driving = new AMap.Driving(drivingOption2)

    // 根据起终点经纬度规划驾车导航路线
    driving.search(new AMap.LngLat(105.115858,29.563437), new AMap.LngLat(105.123583,29.567991), function(status, result) {
        // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            if (result.routes && result.routes.length) {
                // 绘制第一条路线，也可以按需求绘制其它几条路线
                console.log(result)
                drawRoute2(result.routes[0])
            }
        } else {
            log.error('获取驾车数据失败：' + result)
        }
    });

    function drawRoute2 (route) {
        var path = parseRouteToPath2(route)

        var startMarker = new AMap.Marker({
            position: path[0],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/null.png',
            map: map
        })

        var endMarker = new AMap.Marker({
            position: path[path.length - 1],
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
            map: map
        })

        var routeLine = new AMap.Polyline({
            path: path,
            isOutline: true,
            outlineColor: '#ffeeee',
            borderWeight: 2,
            strokeWeight: 5,
             zIndex: 60,
            strokeColor: '#f00',
            lineJoin: 'round'
        })

        routeLine.setMap(map)

        // 调整视野达到最佳显示区域
        // map.setFitView([ startMarker, endMarker, routeLine ])
    }

    // 解析DrivingRoute对象，构造成AMap.Polyline的path参数需要的格式
    // DrivingResult对象结构参考文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DriveRoute
    function parseRouteToPath2(route) {
        var path = []

        for (var i = 0, l = route.steps.length; i < l; i++) {
            var step = route.steps[i]

            for (var j = 0, n = step.path.length; j < n; j++) {
              path.push(step.path[j])
            }
        }

        return path
    }
    //   //构造路线导航类
    //   var driving = new AMap.Driving({
    //     map: map
    //     // panel: "panel"//不需要指示
    //   });
      var satelliteLayer = new AMap.TileLayer.Satellite();
      map.add([satelliteLayer]);
      document.querySelector("#add-satellite-layer").onclick = function() {
      map.add(satelliteLayer);
    }

    document.querySelector("#remove-satellite-layer").onclick = function() {
      map.remove(satelliteLayer);
    }
    //   // 根据起终点名称规划驾车导航路线
    //   driving.search(
    //     [
    //       { keyword: add1, city: "内江" },
    //       { keyword: add2, city: "内江" }
    //     ],
    //     function(status, result) {
    //       // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
    //       if (status === "complete") {
    //         // log.success('绘制驾车路线完成')
    //         console.log("绘制驾车路线完成");
    //       } else {
    //         // log.error('获取驾车数据失败：' + result)
    //         console.log("获取驾车数据失败：");
    //       }
    //     }
    //   );
    },
    rowclick(row, column, event) {
      console.log(row, column, event);
      this.long_look = true;
    },
    rowclick2(row, column, event) {
      this.changemap("内江市汽车站", "内江四初中");
      //   var map = new AMap.Map("allmap4", {
      //     resizeEnable: true,
      //     zoom: 13
      // });
      //   var satelliteLayer = new AMap.TileLayer.Satellite();
      //  map.add([satelliteLayer]);
      // var path = [
      //     [105.04282406802224, 29.59803161846096],
      //     [105.01077252743681, 29.578307663635304],
      //     [105.01077252743681, 29.554307028861267],
      //     [105.03075084197212, 29.54324720616345],
      //     [105.05777187170334, 29.52476954840758],
      //     [105.07200103097668, 29.527409422613292],
      //     [105.09542883866916, 29.521123893426743],
      //     [105.1192878330063, 29.50528261033136],
      //     [105.13682275655528, 29.524140996672273],
      //     [105.14817733819766, 29.533694557254936],
      //     [105.17419226575802, 29.575040900329167],
      //     [105.1336607211612, 29.616118954434267],
      //     [105.0967223986031, 29.63508201450085],
      //     [105.07961866169877, 29.663080467403006],
      //     [105.05274136084911, 29.64839167720939],
      //     [105.04440508571928, 29.620891454751007],
      //     [105.0559033962432, 29.591624901022875],
      //   [105.04282406802224, 29.59803161846096],

      // ];
      // var polygon = new AMap.Polygon({
      //     map: map,
      //     fillOpacity:0.4,
      //     path: path
      // });

      // map.setFitView();
    }

  }
};
</script>
<style>
/* baidu */
.BMap_bubble_top{
  display: none;
}
.BMap_bubble_pop{
  background: transparent!important;
  border:0!important;
}
.BMap_bubble_bottom+img{
  display: none;
}
.BMap_bubble_content{
  overflow: inherit!important;
    /* overflow: auto!important; */
}
.Urbanpublicvue .el-progress-bar__outer {
  background: transparent;
}
.Urbanpublicvue .el-table th {
  text-align: center;
  height: 1.875rem;
  font-size: 0.9375rem;
  background: rgba(10, 29, 66, 0.7);
  color: #fff;
}
.Urbanpublicvue .el-table td {
  text-align: center;
  height: 1.875rem;
  font-size: 0.75rem;
  color: #fff;
  border-bottom: none;
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
.selected_xia i{
  line-height: 0!important;
}
.selected_xia .el-input__inner{
  min-width: 105px;
}
.table3 input.el-input__inner,
.table2 input.el-input__inner {
  background: transparent;
  height: 2.275rem;
  width: 8.25rem;
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
}
.Urbanpublicvue
  .el-table--striped
  .el-table__body
  tr.el-table__row--striped
  td {
  background: rgba(10, 29, 66, 0.7);
}
.Urbanpublicvue .el-table--enable-row-hover .el-table__body tr > td {
  background: rgba(14, 37, 85, 0.7);
}
.table2 .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #0086fb;
  cursor: pointer;
}
.table3 .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #0086fb;
  cursor: pointer;
}
.el-input__icon {
  line-height: 1.875rem;
}
.Urbanpublicvue .amap-info-content{
  color: #000;
 min-width:140px;
 font-size: .75rem;
}
</style>
<style lang="less" scoped>
div,
p,
span {
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
.Urbanpublicvue {
  color: #fff;
  font-size: 0.875rem;
}
.f4bg {
  background: rgba(20, 44, 90, 0.9);
  //  overflow: hidden;
  position: relative;
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
.cont_left {
  position: absolute;
  overflow-y: auto;
  z-index: 99;
  width: 7.4%;
    height: 100%;
  //   background: coral;
  left: 1.25rem;
  top: 0;
  padding-top: 11rem;
  .ybp_3 {
    height: 10.625rem;
    background: rgba(20, 44, 90, 0.9);
    //  overflow: hidden;
    position: relative;
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
    .chart_box {
      width: 100%;
      height: 100%;
      > div {
        width: 26%;
        height: 77%;
      }
    }
  }
  //   #chart1 {
  //     width: 33%;
  //     height: 100%;
  //   }
  .title {
    display: flex;
    justify-content: space-around;

    padding-top: 0.625rem;
    > span {
      display: block;
      text-align: center;
      font-size: 1.125rem;
      font-weight: bold;
      width: 33%;
    }
    .s1 {
      color: #00e4ff;
    }
    .s2 {
      color: #ecff6f;
    }
    .s3 {
      color: #ff4d24;
    }
  }
}
.box2 {
  // height: 100px;
  margin-top: 0.625rem;
  > div {
    background: rgba(20, 44, 90, 0.9);
    height: 100%;
  }
  > .box2_left {
    width: 38%;
    padding: 0.625rem 0.3125rem;
    position: relative;
    .tit {
      font-size: 1rem;
    }
    .number {
      font-size: 2.5rem;
      color: #20dbfd;
      text-shadow: 0rem 0.125rem 0.375rem #20dbfd;
      margin-top: 0.375rem;
      margin-right: 0.3125rem;
    }
    .day {
      color: #fe3e12;
      margin-top: 0.9375rem;
    }
    .zhou {
      color: #12fe81;
    }
  }
  > .box2_right {
    width: 58%;
    padding: 0.625rem 0.5rem;
    .tit {
      font-size: 1rem;
    }
    .number {
      font-size: 2.5rem;
      color: #20dbfd;
      text-shadow: 0 0.125rem 0.375rem #20dbfd;
      margin-top: 0.375rem;
      margin-right: 0.3125rem;
    }
    .hx {
      margin-top: 0.9375rem;
    }
  }
}
.box3 {
  //   height: 100px;
  margin-top: 0.625rem;
  > div {
    background: rgba(20, 44, 90, 0.9);
    height: 100%;
  }
  .tit {
    font-size: 1rem;
  }
  > .box3_left {
    width: 38%;
    padding: 0.625rem 0.3125rem;
    position: relative;
    .number {
      font-size: 2.5rem;
      color: #20dbfd;
      text-shadow: 0rem 0.125rem 0.375rem #20dbfd;
      margin-top: 0.375rem;
      margin-right: 0.3125rem;
    }
    .day {
      color: #fe3e12;
      margin-top: 0.9375rem;
    }
    .zhou {
      color: #12fe81;
    }
  }
  > .box3_right {
    width: 58%;
    padding: 0.625rem 0.5rem;
    .tit {
      font-size: 1rem;
      padding-left: 1.25rem;
    }
    .number {
      display: inline-block;
      font-size: 2.5rem;
      color: #20dbfd;
      text-shadow: 0 0.125rem 0.375rem #20dbfd;
      margin-top: 0.375rem;
      margin-right: 0.3125rem;
    }
    .zhou {
      color: #12fe81;
    }
  }
}
.Traffic {
  position: relative;
  height: 12.5rem;
  margin-top: 0.625rem;
  padding: 0.9375rem;
  .tit {
    font-size: 1.125rem;
    font-weight: bold;
  }
  ul {
    height: 9.875rem;
    overflow-y: auto;
  }
  ul > li {
    margin-top: 1.125rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    position: relative;
    > span {
      display: block;
      text-align: right;
      margin-right: 1.05rem;
    }
  }
}
.ydfont {
  color: #0086fb;
}
.table1 {
  background: rgba(20, 44, 90, 0.9);
  margin-top: 0.625rem;
  height: 15.9375rem;
  position: relative;
  .tit {
    font-size: 1.125rem;
    padding: 0.9375rem;
    font-weight: bold;
  }
}
.cont_right {
  position: absolute;
  z-index: 99;
  width: 21%;
  height: 100%;
  top:0;
  overflow-y: auto;
  padding-top: 10.5rem;
  right: 0;
  // background: oldlace;
  .table2 {
    min-height: 198px;
    height: 26vh;
    .tit {
      font-size: 1.125rem;
      padding: 0.9375rem;
      font-weight: bold;
    }
  }
}
.jk_box {
  position: relative;
  background: rgba(20, 44, 90, 0.9);
  margin-top: 0.9375rem;
  min-height: 24.375rem;
  height: 40%;
  .toptit {
    padding: 0.9375rem 0.625rem;
  }
  .tit {
    font-size: 1.125rem;
    font-weight: bold;
  }
  .right_btn {
    background: #0086fb;
    padding: 0.25rem 0.625rem;
    border-radius: 0.3125rem;
    cursor: pointer;
  }
  .imgbox {
    height: 18.75rem;
    overflow-y: auto;
    > video {
      width: 31.5%;
      height: 5.625rem;
      object-fit: cover;
      margin-bottom: 0.625rem;
    }
  }
}
.long_kan {
  position: absolute;
  z-index: 99;
  right: 23%;
  top:10.3125rem;
  min-width: 215px;
  width: 17.5rem;
  min-height: 80%;
  min-height: 48.4375rem;
  border: 0.0625rem solid #00b6fb;
  background: rgba(20, 44, 90, 0.9);
  padding: 0.9375rem;
  .imgbox {
    > img {
      width: 48%;
      height: 6.25rem;
      margin-bottom: 0.3125rem;
      object-fit: cover;
    }
  }
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
  .lk {
    font-size: 1.125rem;
    color: #0086fb;
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
        color: #ff0000;
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

.daycar {
  width: 8.5rem;
  // height: 20.75rem;
  min-width: 100px;
  background: rgba(20, 44, 90, 0.9);
  position: relative;
  padding: 0.9375rem 0.625rem;
  ul > li {
  }
  .oncar {
    margin-top: 0.3125rem;
    font-size: 1rem;
    color: #00f8f8;
  }
  .onnum {
    font-size: 3rem;
    color: #00f8f8;
  }
  .gdnum,
  .bcnum {
    font-size: 2.125rem;
    color: #ffca60;
  }
  .errcar {
    color: #f00;
    font-size: 2.125rem;
  }
}
.right_1 {
  width: 100%;
  height: 4.625rem;
  background: rgba(20, 44, 90, 0.9);
  position: relative;
  padding:.3125rem   1.25rem  0.9375rem;
  // margin-bottom: 0.825rem;
  font-size: 1rem;
  .left {
    margin-left: 1.05rem;
  }
  .right {
    margin-left: 3.25rem;
  }
  .fgnum {
    font-size: 2.25rem;
    color: #00f8f8;
    margin-left: 1.25rem;
  }
  .dfgnum {
    font-size: 2.25rem;
    color: #ffca60;
    margin-left: 1.25rem;
  }
}

.cartj {
  width: 100%;
  min-height: 155px;
  height: 20vh;
  margin-top: 0.625rem;
  position: relative;
  margin-bottom: 0.9375rem;
  background: rgba(20, 44, 90, 0.9);
  .cartit {
    padding: 10px;
    .name {
      font-size: 1.125rem;
      font-weight: bold;
    }
  }
  .carpost {
    > div {
      width: 40%;
    }
    p {
      display: flex;
      justify-content: space-between;
      padding-left: 1.25rem;
      margin-top: 0.3125rem;
    }
    p:hover {
      background: #0086fb;
      cursor: pointer;
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
.table3 {
  min-height: 210px;
  height:22vh;
  position: relative;
  margin-top: 0.9375rem;
  background: rgba(20, 44, 90, 0.9);
  .tit {
    font-size: 1.125rem;
    padding: 0.9375rem;
    font-weight: bold;
  }
}
#allmap4 {
  width: 100%;
  height: 100%;
  min-height: 64rem;
  position: absolute;
  top: 0;
  z-index: 0;
}

#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.input-item {
  position: fixed;
  bottom: 0.625rem;
  color: #00f8f8;
  right: -3%;
  > button {
    background: rgba(13, 36, 86, 0.8);
  }
  button:hover {
    background: #0086fb;
  }
}
</style>