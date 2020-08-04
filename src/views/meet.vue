<template>
  <div class="meetvue">
    <div class="content">
      <div class="cont_top flex-around">
        <div class="map" id="map1">
          <div class="tit_num">报警事件(2)</div>
        </div>
        <div class="map" id="map2">
          <div class="tit_num">应急预警(2)</div>
        </div>
        <div class="map" id="map3">
          <div class="tit_num">执法预警(2)</div>
        </div>
      </div>
      <div class="cont_bot flex-around">
        <div id="map4">
          <div class="tit_num">异常车辆(2)</div>
        </div>
        <div id="map5">
          <div class="tit_num">紧急养护(2)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapLoader from "../assets/Amap/Amap.js";
export default {
  mounted() {
    MapLoader().then(AMap => {
      this.map1();
      this.map2();
      this.map3();
      this.map4();
      this.map5();
    });
  },
  methods: {
    map1() {
      // ssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      var that = this;
      var map = new AMap.Map("map1", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: [105.06675492680017, 29.586301350821902],
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: 14
      });
      // 构造官方卫星
      var satelliteLayer = new AMap.TileLayer.Satellite();
      //批量添加图层
      map.add([satelliteLayer]);
      var zftlist = [
        [105.06675492680017, 29.586301350821902],
        [105.0674376389875, 29.58303485797507]
      ];
      for (var item of zftlist) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/icon_bjsj@1x.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on("click", function() {
          that.$router.push("/Podium");
        });
      }
    },
    map2() {
      var that = this;
      var map = new AMap.Map("map2", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: [105.068514, 29.588433],
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: 14
      });
      // 构造官方卫星
      var satelliteLayer = new AMap.TileLayer.Satellite();
      //批量添加图层
      map.add([satelliteLayer]);
      var zftlist = [
        [105.068514, 29.588433],
        [105.070805, 29.586213]
      ];
      for (var item of zftlist) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/yjyj.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on("click", function() {
          that.$router.push("/police");
        });
      }
    },
    map3() {
      var that = this;
      var map = new AMap.Map("map3", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: [105.068514, 29.588433],
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: 14
      });
      // 构造官方卫星
      var satelliteLayer = new AMap.TileLayer.Satellite();
      //批量添加图层
      map.add([satelliteLayer]);
      var zftlist = [
        [105.068115, 29.600024],
        [105.092646, 29.598424]
      ];
      for (var item of zftlist) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/zfyj.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on("click", function() {
          that.$router.push("/zfgl");
        });
      }
    },
    map4() {
      var that = this;
      var map = new AMap.Map("map4", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: [105.068324, 29.574973],
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: 14
      });
      // 构造官方卫星
      var satelliteLayer = new AMap.TileLayer.Satellite();
      //批量添加图层
      map.add([satelliteLayer]);
      var zftlist = [
        [105.068324, 29.574973],
        [105.067809, 29.577189]
      ];
      for (var item of zftlist) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/ycyj.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on("click", function() {
          that.$router.push("/ysgl/Urbanpublic");
        });
      }
    },
    map5() {
      var that = this;
      var map = new AMap.Map("map5", {
        resizeEnable: true,
        mapStyle: that.$mapStyle,
        center: [105.068324, 29.574973],
        // pitch: 47, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "3D",
        zoom: 14
      });
      // 构造官方卫星
      var satelliteLayer = new AMap.TileLayer.Satellite();
      //批量添加图层
      map.add([satelliteLayer]);
      var zftlist = [
        [105.057785, 29.572904],
        [105.058322, 29.566278]
      ];
      for (var item of zftlist) {
        var marker4 = new AMap.Marker({
          // icon: require("../assets/img/icon/icon_mt@1x.png"),
          icon: new AMap.Icon({
            image: require("../assets/img/icon/yhyj.png"),
            size: new AMap.Size(62, 62), //图标大小
            imageSize: new AMap.Size(32, 32)
          }),
          map: map,
          position: item,
          offset: new AMap.Pixel(-23, -30)
        });
        marker4.setMap(map);
        marker4.on("click", function() {
          that.$router.push("/dlyh/people");
        });
      }
    }
  }
};
</script>
<style>
.amap-logo {
  display: none !important;
}
.amap-copyright {
  display: none !important;
}
</style>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding-top: 10.5rem;
  // background: pink;
  .cont_top {
    width: 100%;
    height: 48%;
    > div {
      height: 100%;
      position: relative;
      width: 33%;
      // background: #000;
      border: 1px solid #026ba3c9;
    }
  }
  .cont_bot {
    width: 100%;
    height: 48%;
    margin-top: 0.625rem;
    > div {
      height: 100%;
      width: 49%;
      // background: #000;
      border: 1px solid #026ba3c9;
    }
  }
}
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
.tit_num {
  position: absolute;
  z-index: 999;
  font-weight: bold;
  // width: 9.375rem;
  padding: 0.125rem 0.3125rem;
  color: #f00;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
}
</style>