<template>
  <div class="driveschool">
    <div class="cont_top">
      <fourbg></fourbg>
      <div class="top_number">
        <span v-for="(item,i) of num1" :key="i">{{item}}</span>
        <div class="subtit">驾校总数</div>
      </div>
      <div class="top_number top_r_num">
        <span v-for="(item,i) of num2" :key="i">{{item}}</span>
        <div class="subtit">驾校考试点总数</div>
      </div>
      <!-- map -->
      <div class="map">
        <!-- <img style="width:100%;height:100%;object-fit:cover" src="../../assets/img/icon3/1.png" alt /> -->
        <div id="allmap5"></div>
           <div class="input-item">
      <button class="btn" v-show="zsbtn" @click="()=>{this.zsbtn=!this.zsbtn}" id="add-satellite-layer" style="margin-right:1rem;">切换3D</button>
      <button class="btn" v-show="!zsbtn"  @click="()=>{this.zsbtn=!this.zsbtn}" id="remove-satellite-layer">切换2D</button>
    </div>
      </div>
    </div>
    <div class="cont_bot flex-between">
      <div class="cont_bot_left">
        <fourbg></fourbg>
        <div class="flex-between search_tit">
          <div class="jxjk">驾校即时监控</div>
          <div class="flex">
            <div>
              <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input2"></el-input>
            </div>
            <div class="look_bth">全屏查看</div>
          </div>
        </div>
        <div class="jk_more_box flex-wrap">
          <div
            v-for="(item,i) of 21"
            :key="i"
            style="width:9.375rem;height:5.625rem;margin-bottom:.625rem;margin-left:.5rem"
          >
            <img
              style="width:100%;height:100%;object-fit:cover"
              src="../../assets/img/icon3/1.png"
              alt
            />
            <div class="look_more">
              <div>xxxx驾校</div>
              <div @click="()=>{innercont=true}">查看更多</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont_bot_right">
        <fourbg></fourbg>
        <div class="flex-between search_tit">
          <div class="jxjk">考点考试监控</div>
          <div class="flex">
            <div>
              <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input2"></el-input>
            </div>
            <div class="look_bth">全屏查看</div>
          </div>
        </div>
        <div class="jk_more_box flex-wrap">
          <div
            v-for="(item,i) of 21"
            :key="i"
            style="width:9.375rem;height:5.625rem;margin-bottom:.625rem;margin-left:.5rem"
          >
            <img
              style="width:100%;height:100%;object-fit:cover"
              src="../../assets/img/icon3/1.png"
              alt
            />
            <div class="look_more">
              <div>xxxx驾校</div>
              <div @click="()=>{innercont=true}">查看更多</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_inner" v-if="innercont">
      <div class="flex-between inner_tit">
        <span class="name">xxxx驾校</span>
        <span>
          <i @click="()=>{innercont=false}" class="el-icon-close"></i>
        </span>
      </div>
      <div class="inner_cont flex-between">
        <div>
          <p>地址：xxxxxxxxxxxxx</p>
          <p>负责人：张小三</p>
          <p>联系电话：150121315511</p>
          <div class="img_box flex-wrap flex-between">
            <img
              v-for="(item,i) of imglist"
              @click="lookimg(item.src)"
              :key="i"
              :src="item.src"
              alt
            />
          </div>
        </div>
        <div class="look_img">
          <img :src="imgsrc" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fourbg from "../echarts/bg4";
import MapLoader from '../../assets/Amap/Amap.js'
export default {
  components: {
    fourbg
  },
  data() {
    return {
      innercont: false,
      zsbtn:false,
      imgsrc: "",
      imglist: [
        { src: require("../../assets/img/icon3/1.png") },
        { src: require("../../assets/img/icon3/jt.jpg") },
        { src: require("../../assets/img/icon3/jt.jpg") },
        { src: require("../../assets/img/icon3/1.png") }
      ],
      num1: '008',
      input2: "",
      num2: '068'
    };
  },
  created() {
    var num1 = this.num1.toString().split("");
    var num2 = this.num2.toString().split("");
    this.num1 = num1;
    this.num2 = num2;
    this.imgsrc = this.imglist[0].src;
  },
    mounted() {
     MapLoader().then(AMap => {
     this.map([105.06675492680017, 29.586301350821902], 15);
     })
  },
  methods: {
    lookimg(src) {
      this.imgsrc = src;
    },
    map(point,zoom){
    var that=this
   var map = new AMap.Map("allmap5", {
      resizeEnable: true,
         mapStyle:that.$mapStyle,
      center: point,
      zoom: zoom
    });
    // 构造官方卫星、路网图层
    var satelliteLayer = new AMap.TileLayer.Satellite();
    var roadNetLayer = new AMap.TileLayer.RoadNet();
    document.querySelector("#add-satellite-layer").onclick = function() {
      map.add(satelliteLayer);
    }

    document.querySelector("#remove-satellite-layer").onclick = function() {
      map.remove(satelliteLayer);
    }
    //批量添加图层
    map.add([satelliteLayer]);
    var marker1 = new AMap.Marker({
        position: [105.06093390709741, 29.586945225112032],
        anchor:'bottom-center',
        offset: new AMap.Pixel(0, 0)
    });

    marker1.setMap(map);
 marker1.setTitle('内江市天天驾校');

 // 设置label标签
    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
    marker1.setLabel({
        direction:'right',
        offset: new AMap.Pixel(2, 0),  //设置文本标注偏移量
        content: "<div style='color:#f00;border:0'>天天驾校</div>", //设置文本标注内容
    });
 marker1.on("click", function() {
       that.innercont=true
      });
        var marker2 = new AMap.Marker({
        position: [105.0674376389875, 29.58303485797507],
        anchor:'bottom-center',
        offset: new AMap.Pixel(0, 0)
    });

    marker2.setMap(map);
 marker2.setTitle('内江市长安驾校');

 // 设置label标签
    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
    marker2.setLabel({
        direction:'right',
        offset: new AMap.Pixel(2, 0),  //设置文本标注偏移量
        content: "<div style='color:#f00;border:0'>长安驾校</div>", //设置文本标注内容
    });
 marker2.on("click", function() {
       that.innercont=true
      });

            var marker3 = new AMap.Marker({
        position: [105.07355866119736, 29.591609197779086],
        anchor:'bottom-center',
        offset: new AMap.Pixel(0, 0)
    });

    marker3.setMap(map);
 marker3.setTitle('内江市翔飞驾校');

 // 设置label标签
    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
    marker3.setLabel({
        direction:'right',
        offset: new AMap.Pixel(2, 0),  //设置文本标注偏移量
        content: "<div style='color:#f00;border:0'>翔飞驾校</div>", //设置文本标注内容
    });
 marker3.on("click", function() {
       that.innercont=true
      });

  
    }
  },

  activated() {}
};
</script>
<style>
.driveschool .amap-marker-label{
 border:0;
 background: transparent;
 font-size: 1.5rem;
 font-weight: bold;
}
 input.el-input__inner {
  background: transparent;
  border: 0.0625rem solid #0086fb;
  color: #fff;
  height: 2.275rem;
}
.el-input__icon {
  line-height: 2.275rem;
  font-size: 1.5625rem;
  color: #0086fb;
}
</style>
<style lang="less" scoped>
.driveschool {
  font-size: 14px;
  color: #fff;
}
.cont_top {
  width: 94%;
  // height: 45%;
  min-height: 24.25rem;
  height: 40vh;
  // left: 50%;
  margin: auto;
  margin-top: 3.125rem;
  position: relative;
  z-index: 99;
  .subtit {
    font-size: 0.875rem;
    margin-left: 0.9375rem;
    margin-top: 0.3125rem;
    font-weight: bold;
    color: #0086fb;
  }
  .map {
    width: 100%;
    height: 100%;
    #allmap5 {
      width: 100%;
      height: 100%;
    }
  }
  .top_r_num {
    position: absolute;
    z-index: 99;
    margin-top: 0.9375rem;
    right: 0.625rem;
  }
  .top_number {
    font-size: 2.5rem;
    margin-top: 0.9375rem;
    margin-left: 0.625rem;
    position: absolute;
    z-index: 99;
    > span {
      display: inline-block;
      background-image: radial-gradient(
        rgb(1, 66, 99),
        rgba(78, 123, 146, 0.7)
      );
      border-radius: 0.5rem;
      padding: 0.5rem 0.9375rem;
      margin-left: 0.375rem;
    }
  }
}
.cont_bot {
  width: 94%;
  // height: 38%;
  // height: 23rem;
  height: 34vh;
  // left: 50%;
  position: relative;
  margin: auto;
  margin-top: 1.25rem;
  bottom: 0.625rem;
  z-index: 99;
  .search_tit {
    padding: 0.625rem;
  }
  .jxjk {
    font-size: 1.125rem;
    font-weight: bold;
  }
  .look_bth {
padding: 0 0.625rem;
    line-height: 2.3125rem;
    background: #0086fb;
    border-radius: 0.5rem;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
  }
  > div {
    width: 49%;
    height: 100%;
    position: relative;
    background: rgb(14, 37, 86);
    border: 0.0625rem solid #026ba3c9;
  }
}

.jk_more_box {
  margin-top: 0.625rem;
  height: 77%;
  text-align: center;
  overflow-y: auto;
  flex-shrink: 1;
  > div {
    position: relative;
    overflow: hidden;
  }
  .look_more {
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    z-index: 9;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: rgba(0, 135, 252, 0.6);
    top: -100%;
    transition: 0.4s;
    > div:first-child {
      margin-top: 1.125rem;
      width: 100%;
      font-size: 1.25rem;
    }
    > div:last-child {
      width: 100%;
      margin-top: 0.3125rem;
      color: #ffca60;
      cursor: pointer;
    }
  }
  > div:hover .look_more {
    top: 0;
  }
}
.cont_inner {
  position: fixed;
  width: 46.875rem;
  min-height: 22.5rem;
  background: rgb(14, 37, 86);
  top: 26%;
  right: 14%;
  z-index: 99;
  border: 0.0625rem solid rgb(255, 202, 96);
  padding: 1.125rem;

  .inner_tit {
    .name {
      color: #ffca60;
      font-size: 1.5rem;
    }
    i {
      font-size: 2.375rem;
    }
  }
  .inner_cont {
    > div:first-child {
      width: 44%;
    }
    > div:last-child {
      width: 54%;
    }
    p {
      margin-top: 0.625rem;
    }
    .img_box {
      margin-top: 1.25rem;
      img {
        width: 48%;
        height: 5.5rem;
        margin-top: 0.3125rem;
      }
      img:hover {
        border: 0.1875rem solid #ffca60;
        cursor: pointer;
      }
    }
    .look_img {
      img {
        width: 100%;
        height: 100%;
        object-position: cover;
      }
    }
  }
}

.input-item{
  position: absolute;
  width: 4.4375rem;
  bottom:.625rem;
  color: #00f8f8;
  right:.625rem;
  >button{
      background: rgba(13, 36, 86, 0.8);
  }
  button:hover{
    background: #0086fb;
  }
}
</style>