<template>
 <div id="myChart2" style="width:90%;height:95%"></div>
</template>

<script>
export default {
mounted(){
    this.drawLine2();

},
methods:{
     drawLine2() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        color: ["#91ed43", "#0091be"],
        title: {},
        // tooltip: {
        //     trigger: 'axis'
        // },
        tooltip: {
          //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true //鼠标是否可以移动到tooltip区域内
        },
        legend: {
          // left: "right",
          right:"5%",
          top:'2%',
          orient: "vertical",
          data: ["2020年", "2019年"],
          textStyle: {
            color: "white" // 改变标示线的颜色
          }
        },
        radar: [
          {
            indicator: [
              { text: "设备情况", max: 100 },
              { text: "交通情况", max: 100 },
              { text: "地段情况", max: 100 },
              { text: "道路情况", max: 100 },
              { text: "违章情况", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: 80
          },
          {
            indicator: [
              { text: "设备情况", max: 100 },
              { text: "交通情况", max: 100 },
              { text: "地段情况", max: 100 },
              { text: "道路情况", max: 100 },
              { text: "违章情况", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: 80
          }
        ],

        series: [
          {
            type: "radar",
            radarIndex: 1,
            areaStyle: {},
            data: [
              {
                value: [65, 90, 20, 65, 95],
                name: "2020年"
              },
              {
                value: [35, 80, 95, 10, 93],
                name: "2019年"
              }
            ]
          }
        ]
      });
    }
}
}
</script>

<style>
#myChart2{
  background: rgba(20, 44, 90, 0.8);
   background:url(../../assets/img/icon3/bg@1x.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>