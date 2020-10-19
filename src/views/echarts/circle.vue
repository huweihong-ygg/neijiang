<template>
 <div id="myChart" style="width:100%;height:12.5rem"></div>
</template>

<script>
export default {
mounted(){
    this.drawLine();

},
methods:{
  drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        color: ["#d3214d", "#009cff"],
        tooltip: {
          trigger: "item",
          position: ['40%', '10%'],
          formatter: "{a} <br/>{b} : {c} 辆({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "3%",
          top:"2%",
          data: ["问题车辆", "全部车辆"],
          textStyle: {
            color: "white" // 改变标示线的颜色
          }
        },
        series: [
          {
            name: "车辆检测",
            type: "pie",
            radius: ["30%", "70%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ["50%", "55%"],
            data: [
              { value: 95, name: "问题车辆" },
              { value: 310, name: "全部车辆" }
            ],
            labelLine: {
              normal: {
                smooth: 0.2,
                length: 10, // 改变标示线的长度
                length2: 30,
                lineStyle: {
                  color: "white" // 改变标示线的颜色
                }
              }
            },
            label: {
              //饼图图形上的文本颜色设置
              normal: {
                show: true,
                // position: "inner", //标签的位置
                textStyle: {
                  fontWeight: 300,
                  fontSize: 14 //文字的字体大小
                },
                formatter: function(params) {
                  var res = [];
                  var mySeries = params;
                  console.log(mySeries);
                  for (const key in mySeries.data) {
                    if (mySeries.data[key].name == params.name) {
                      return (
                        mySeries.data[key].name + `{img` + key + `|}` + "\n\n"
                      );
                    }
                  }
                }
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "车辆检测",
            type: "pie",
            radius: ["30%", "70%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ["50%", "55%"],
            data: [
              { value: 95, name: "问题车辆" },
              { value: 310, name: "全部车辆" }
            ],
            itemStyle: {
              normal: {
                label: {
                  //此处为指示线文字
                  show: true,
                  position: "inner", //标签的位置
                  textStyle: {
                    fontWeight: 200,
                    fontSize: 14 //文字的字体大小
                  },
                  formatter: "{d}%" //指示线对应文字
                }
              }
            }
          }
        ]
      });
    },
}
}
</script>

<style>
#myChart{
  /* background: rgba(20, 44, 90, 0.8); */
   /* background:url(../../assets/img/icon3/bg@1x.png); */
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
}
</style>