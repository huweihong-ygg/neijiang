<template>
  <div class="content flex-between">
    <div class="cont_left flex-between flex-wrap">
      <!-- 1 -->
      <div class="box">
        <fourbg></fourbg>
        <div class="flex-between title">
          <span class="left_tit1">道路实时监控画面</span>
          <div class="flex title_r">
            <div>
              <p class="n1">723</p>
              <p>全部</p>
            </div>
            <div>
              <p class="n21">731</p>
              <p>在线</p>
            </div>
            <div>
              <p class="n3">13</p>
              <p>异常</p>
            </div>
          </div>
        </div>
        <div class="flex-wrap monitor">
          <div class="img_item" v-for="(item,i) of 12" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="box">
        <fourbg></fourbg>
        <div class="flex-between title">
          <span class="left_tit2">道路入口实时监控画面</span>
          <div class="flex title_r">
            <div>
              <p class="n1">723</p>
              <p>全部</p>
            </div>
            <div>
              <p class="n22">731</p>
              <p>在线</p>
            </div>
            <div>
              <p class="n3">13</p>
              <p>异常</p>
            </div>
          </div>
        </div>
        <div class="flex-wrap monitor">
          <div class="img_item" v-for="(item,i) of 7" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="box">
        <fourbg></fourbg>
        <div class="flex-between title">
          <span class="left_tit3">道路出口实时监控画面</span>
          <div class="flex title_r">
            <div>
              <p class="n1">723</p>
              <p>全部</p>
            </div>
            <div>
              <p class="n23">731</p>
              <p>在线</p>
            </div>
            <div>
              <p class="n3">13</p>
              <p>异常</p>
            </div>
          </div>
        </div>
        <div class="flex-wrap monitor">
          <div class="img_item" v-for="(item,i) of 7" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="box">
        <fourbg></fourbg>
        <div class="flex-between title">
          <span class="left_tit4">重点施工监管画面</span>
          <div class="flex title_r">
            <div>
              <p class="n1">723</p>
              <p>全部</p>
            </div>
            <div>
              <p class="n24">731</p>
              <p>在线</p>
            </div>
            <div>
              <p class="n3">13</p>
              <p>异常</p>
            </div>
          </div>
        </div>
        <div class="flex-wrap monitor">
          <div class="img_item" v-for="(item,i) of 7" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div class="box">
        <fourbg></fourbg>
        <div id="myChart5"></div>
      </div>
      <!-- 6 -->
      <div class="box">
        <fourbg></fourbg>
        <div class="flex-between title">
          <span class="left_tit6">危病桥监管画面</span>
          <div class="flex title_r">
            <div>
              <p class="n1">723</p>
              <p>全部</p>
            </div>
            <div>
              <p class="n26">731</p>
              <p>在线</p>
            </div>
            <div>
              <p class="n3">13</p>
              <p>异常</p>
            </div>
          </div>
        </div>
        <div class="flex-wrap monitor">
          <div class="img_item" v-for="(item,i) of 7" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_right">
        <fourbg></fourbg>
      <div class="top">
        <div id="myChart6"></div>
        <div class="bot_text flex-around">
          <div>
            <p style="color:#e2393d">
              <span class="num">3/</span>
              <span>1m²</span>
            </p>
            <p>
              <span class="sl">人群密集度：</span>
              <span style="color:#e2393d">高</span>
            </p>
          </div>
          <div>
            <p style="color:#e2393d">
              <span class="num">313/</span>
              <span>分</span>
            </p>
            <p>
              <span class="sl">车辆密集度：</span>
              <span style="color:#e2393d">高</span>
            </p>
          </div>
          <div>
            <p>
              <span class="num">71/</span>
              <span>分</span>
            </p>
            <p>
              <span class="sl">道路标准承载量</span>
            </p>
          </div>
          <div>
            <p>
              <span class="num">45/</span>
              <span>分</span>
            </p>
            <p>
              <span class="sl">城市事故可控量</span>
            </p>
          </div>
        </div>
      </div>
      <div class="r_bottom">
        <div class="title">实时路段摄像头数据</div>
        <div class="flex-wrap flex-around monitor">
          <div class="img_item" v-for="(item,i) of 12" :key="i">
            <img src="../../assets/img/icon3/1.png" alt />
            <p class="subtit f_nowrap">G8-274 xxxxx路口</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fourbg from "../echarts/bg4";
export default {
  components: {
    fourbg
  },
  mounted() {
    this.draw();
    this.draw2();
  },
  methods: {
    draw() {
      let myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart.setOption({
        color: ["#F59144", "#0085FA", "#F6716A", "#CD5DD9"],
        title: {
          text: "地灾检测",
          textStyle: {
            color: "#fff",
            fontWeight:"bold"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["踩空塌陷", "滑坡", "泥石流", "其它"],
          right: "8%",
          padding: 0,
          width: "55%",
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: ".8rem"
          }
        },
        toolbox: {
          show: true
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            axisLabel: {
              interval: 0,
              rotate: 40,
              color: "#fff", //坐标值得具体的颜色
              fontSize: ".875rem"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              interval: 0,
              rotate: 0,
              color: "#fff", //坐标值得具体的颜色
              fontSize: ".875rem"
            }
          }
        ],
        series: [
          {
            name: "踩空塌陷",
            barGap: "0%",
            type: "bar",
            data: [10, 150, 59, 12, 90, 70, 175]
          },
          {
            name: "滑坡",
            type: "bar",
            data: [50, 70, 97, 126, 128, 70, 75]
          },
          {
            name: "泥石流",
            type: "bar",
            data: [120, 50, 9, 126, 28, 70, 175]
          },
          {
            name: "其它",
            type: "bar",
            data: [20, 150, 9, 66, 128, 170, 75]
          }
        ]
      });
    },
    draw2() {
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制图表
      myChart.setOption({
        color: "rgb(24,195,226,.8)",
        title: {
          text: "车流量检测",
          left: "2%",
          top: "3%",
          textStyle: {
            color: "#fff",
             fontWeight:"bold"
          }
        },
        legend: {
          show: false,
          data: ["车流量检测"]
        },
        tooltip: {
          //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true //鼠标是否可以移动到tooltip区域内
        },
        radar: [
          {
            indicator: [
              { max: 180, text: "设备情况"},
              { max: 180, text: "交通情况"},
              { max: 180, text: "地段情况"},
              { max: 180, text: "道路情况"},
              { max: 180, text: "施工及其他"},
              { max: 180, text: "违章情况"}
            ],
            center: ["50%", "50%"],
            radius: 80,
            shape: "circle",
            name: {
              formatter: "{value}",
              itemStyle: {
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            type: "radar",
            data: [
              {
                value: [160, 115, 130, 160, 150, 180],
                name: "车流量检测",
                areaStyle: {
                  color: "rgba(7, 87, 168,.9)"
                }
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 96%;
  height: 76vh;
  margin: 2.75rem auto 0;
  font-size: 0.875rem;
  .cont_left {
    width: 74%;
    height: 100%;
    > div {
      width: 32.5%;
      height: 49%;
      background: rgba(14, 37, 86, 0.9);
      position: relative;
      padding: 0.825rem;
      margin-bottom: .825rem;
    }
    .box {
      .left_tit1 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #ffca60;
      }
      .left_tit2 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #0085f5;
      }
      .left_tit3 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #f6716a;
      }

      .left_tit4 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #cd5dd9;
      }
      .left_tit6 {
        font-size: 1.125rem;
        font-weight: bold;
        color: #00f7dd;
      }

      .title_r {
        > div {
          margin-right: 0.625rem;
        }
      }
      .n1,
      .n2,
      .n3 {
        font-size: 1.75rem;
      }
      .n1 {
        color: #fff;
      }
      .n21 {
        color: #ffca60;
        font-size: 1.75rem;
      }
      .n22 {
        color: #0085f5;
        font-size: 1.75rem;
      }
      .n23 {
        color: #f6716a;
        font-size: 1.75rem;
      }
      .n24 {
        color: #cd5dd9;
        font-size: 1.75rem;
      }
      .n26 {
        color: #00f7dd;
        font-size: 1.75rem;
      }
      .n3 {
        color: #f00;
      }
      .monitor {
        margin-top: 0.925rem;
        height: 80%;
        overflow-y: auto;
        > div {
          width: 33%;
          margin-bottom: 0.625rem;
        }
      }
      .img_item {
        > img {
          width: 8.125rem;
          height: 5rem;
          object-fit: cover;
        }
      }
    }
  }
  .cont_right {
    width: 25%;
    height: 100%;
    position: relative;
   background: rgba(14, 37, 86, 0.9);
    .top {
      width: 100%;
      height: 50%;
    }
    .bot_text {
      .num {
        font-size: 1.875rem;
      }
      .sl {
        font-size: 0.75rem;
      }
    }
  }
}
.r_bottom {
   height: 50%;
  .title {
    font-size: 1.125rem;
    font-weight: bold;
    
  }
  .monitor {
        margin-top: 0.925rem;
        height:85%;
        overflow-y: auto;
        > div {
          width: 48%;
          margin-bottom: 0.625rem;
           > img {
          width:100%;
          
          height:120px;
          object-fit: cover;
        }
        
        }
        .subtit{
            text-align: center;
        }
      }
       
}
#myChart5 {
  width: 110%;
  height: 110%;
}
#myChart6 {
  width: 100%;
  height: 80%;
}
</style>