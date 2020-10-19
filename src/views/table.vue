<template>
  <div class="tablevue">
    <div class="cont_left">
      <!-- <fourbg></fourbg> -->
      <div
        class="flex"
        v-for="(item,i) of list"
        @click="activechange(i)"
        :key="i"
        :class="item.checked?'active':''"
      >
        <div class="img_box">
          <img :src="item.img" alt />
        </div>
        <div>
          <div class="tit">{{item.tit}}</div>
          <div class="num">{{item.num}}</div>
        </div>
      </div>
    </div>
    <div class="cont_right">
      <!-- 1 -->
      <div class="table_box" v-show="list[0].checked">
        <div class="title flex-between">
          <span>车辆行驶统计(16)</span>
          <div class="flex">
            <div class="datesearch">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
            <div class="flex-between right_search">
              <el-input v-model="search1" placeholder="请输入关键字查询"></el-input>
              <div class="search_btn" @click="searchbtn(search1,1)">搜索</div>
            </div>
          </div>
        </div>
        <el-table
          :data="tableData.slice((currentPage1-1)*pagesize1,currentPage1*pagesize1)"
          @row-click="rowclick"
          show-summary
          stripe
          height="90%"
          style="width:100%;margin:auto;height:90%;border-bottom:1px solid #fff"
        >
          <el-table-column prop="xl" label="线路"></el-table-column>
          <el-table-column prop="gs" label="公司"></el-table-column>
          <el-table-column prop="cp" label="车牌号"></el-table-column>
          <el-table-column prop="xsday" label="应行驶天数"></el-table-column>
          <el-table-column prop="sjxsday" label="实际行驶天数"></el-table-column>
          <el-table-column prop="xsdaycj" label="行驶天数差距"></el-table-column>
          <el-table-column prop="xslc" label="总行驶里程"></el-table-column>
          <el-table-column prop="ycxs" label="异常行驶天数"></el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="pagesize1"
            layout="prev, pager, next, jumper"
            :total="tableData.length"
          ></el-pagination>
        </div>

        <div class="excel">报表导出</div>
      </div>
      <!-- 2 -->
      <div class="table_box" v-show="list[1].checked">
        <div class="title flex-between">
          <span>执法管理统计(16)</span>

          <div class="flex">
            <div class="datesearch">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
            <div class="flex-between right_search">
              <el-input v-model="search2" placeholder="请输入关键字查询"></el-input>
              <div class="search_btn" @click="searchbtn(search2,2)">搜索</div>
            </div>
          </div>
        </div>
        <el-table
          :data="tableData2.slice((currentPage2-1)*pagesize2,currentPage2*pagesize2)"
          @row-click="rowclick"
          stripe
          show-summary
          height="90%"
          style="width:100%;margin:auto;height:90%;border-bottom:1px solid #fff"
        >
          <el-table-column prop="zfd" label="执法队"></el-table-column>
          <el-table-column prop="zs" label="任务总数"></el-table-column>
          <el-table-column prop="overnum" label="任务完成数"></el-table-column>
          <el-table-column prop="drz" label="待完成任务数"></el-table-column>
          <el-table-column prop="car" label="总检测车辆数"></el-table-column>
          <el-table-column prop="discar" label="问题车辆数"></el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-size="pagesize2"
            layout="prev, pager, next, jumper"
            :total="tableData2.length"
          ></el-pagination>
        </div>
        <div class="excel">报表导出</div>
      </div>
      <!-- 3 -->
      <div class="table_box" v-show="list[2].checked">
        <div class="title flex-between">
          <span>养护统计(16)</span>
          <div class="flex">
            <div class="datesearch">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
            <div class="flex-between right_search">
              <el-input v-model="search3" placeholder="请输入关键字查询"></el-input>
              <div class="search_btn" @click="searchbtn(search3,3)">搜索</div>
            </div>
          </div>
        </div>
        <el-table
          :data="tableData3.slice((currentPage3-1)*pagesize3,currentPage3*pagesize3)"
          @row-click="rowclick"
          stripe
          show-summary
          height="90%"
          style="width:100%;margin:auto;height:90%;border-bottom:1px solid #fff"
        >
          <el-table-column prop="status" label="类型(人员/车辆)"></el-table-column>
          <el-table-column prop="zs" label="任务总数"></el-table-column>
          <el-table-column prop="overnum" label="任务完成数"></el-table-column>
          <el-table-column prop="dnum" label="待完成任务数"></el-table-column>
          <el-table-column prop="ycnum" label="报告异常情况数"></el-table-column>
          <el-table-column prop="company" label="公司"></el-table-column>
          <el-table-column prop="ycxj" label="巡检异常情况数"></el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="pagesize3"
            layout="prev, pager, next, jumper"
            :total="tableData3.length"
          ></el-pagination>
        </div>
        <div class="excel">报表导出</div>
      </div>
    </div>
  </div>
</template>

<script>
import fourbg from "./echarts/bg4";
export default {
  components: {
    fourbg
  },
  data() {
    return {
      value1: "",
      currentPage3: 1,
      currentPage2: 1,
      currentPage1: 1,
      pagesize1: 5,
      pagesize2: 5,
      pagesize3: 5,
      centerbool: false,
      table1: true,
      table2: false,
      table3: false,
      search1: "",
      search2: "",
      search3: "",
      tableData: [
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "3",
          xsdaycj: "2",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "2",
          xsdaycj: "3",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        },
        {
          xl: "内江市汽车站-红旗村",
          gs: "xxx公司",
          cp: "川A32134",
          xsday: "5",
          sjxsday: "4",
          xsdaycj: "1",
          xslc: "1200KM",
          ycxs: "2"
        }
      ],
      tableData2: [
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        },
        {
          zfd: "执法一中队",
          zs: 6,
          overnum: 5,
          drz: 1,
          car: 120,
          discar: 10
        }
      ],
      tableData3: [
        {
          status: "川A321332",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "川A321332",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "川K231321",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "川K231321",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "川K231321",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "川K231321",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "川K231321",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 0
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        },
        {
          status: "李晓明",
          zs: 20,
          overnum: 16,
          dnum: 2,
          ycnum: 2,
          company: "内江市汽车站",
          ycxj: 2,
          ispeople: 1
        }
      ],
      list: [
        {
          img: require("../assets/img/icon/clxs.png"),
          tit: "车辆行驶统计",
          num: 32,
          checked: true
        },
        {
          img: require("../assets/img/icon/zfgltable.png"),
          tit: "执法管理统计",
          num: 32,
          checked: false
        },
        {
          img: require("../assets/img/icon/yhtable.png"),
          tit: "养护统计",
          num: 32,
          checked: false
        }
      ]
    };
  },
  methods: {
    rowclick() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    searchbtn(val, num) {
      this.$message.success(val);
    },
    activechange(i) {
      var newlist = this.list;
      for (var item of newlist) {
        item.checked = false;
      }
      newlist[i].checked = true;
      this.list = newlist;
    }
  }
};
</script>
<style>
.el-table__footer-wrapper tbody td {
  background: rgba(10, 29, 66, 0.7);
  font-weight: bold;
}
.datesearch .el-input__inner {
  background: transparent;
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
  min-height: 24px;
}
.datesearch .el-date-editor .el-range__icon {
  line-height: 2.225rem;
  color: #00f8f8;
}
.datesearch .el-range-input {
  color: #00f8f8;
}
.datesearch input::placeholder {
  color: #00f8f8 !important;
}
.datesearch .el-range-separator {
  color: #00f8f8;
  line-height: 2.025rem;
}
.datesearch input.el-range-input {
  background: transparent;
}
 .el-picker-panel{
  background: rgba(10, 29, 66, 0.9)!important;
  color:#fff;
}
.el-date-table td.in-range div{
  background: #0086f8!important;
}
.el-date-table th,.el-date-table td{
  color: #fff;
}
.right_search input::placeholder {
  color: #00f8f8 !important;
}
.pagination input.el-input__inner {
  width: auto !important;
}
.pagination .el-pagination__jump {
  color: #00f8f8;
}
.pagination .el-pagination .btn-next,
.el-pagination .btn-prev {
  background: center center no-repeat #0086f8;
  color: #fff;
}
.pagination .el-pagination {
  color: #fff;
}
.pagination .el-pager li.active {
  color: #00f8f8;
}
.pagination .el-pager li {
  background: #0086f8;
}
.tablevue .el-table th {
  text-align: center;
  height: 1.875rem;
  font-size: 0.9375rem;
  background: rgba(10, 29, 66, 0.7);
  color: #fff;
}
.tablevue .el-table td {
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
.right_search input.el-input__inner{
min-width: 130px;
}
.tablevue input.el-input__inner,
.tablevue input.el-input__inner {
  background: transparent;
  height: 2.275rem;
  width: 14.25rem;
  border: 0.0625rem solid #00f8f8;
  color: #00f8f8;
  height: 2.275rem;
  min-height: 24px;
}
.tablevue .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgba(10, 29, 66, 0.7);
}
.tablevue .el-table--enable-row-hover .el-table__body tr > td {
  background: rgba(14, 37, 85, 0.7);
}
.tablevue .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #0086fb;
  cursor: pointer;
}
/* .tablevue .table2 tr > th:nth-child(1),
.tablevue .table2 tr > td:nth-child(1) {
  width: 30%;
}
.tablevue .table2 tr > th:nth-child(2),
.tablevue .table2 tr > td:nth-child(2) {
  width: 20%;
}
.tablevue .table2 tr > th:nth-child(3),
.tablevue .table2 tr > td:nth-child(3) {
  width: 30%;
}
.tablevue .table2 tr > th:nth-child(4),
.tablevue .table2 tr > td:nth-child(4) {
  width: 20%;
} */
</style>
<style lang="less" scoped>
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

  background: rgb(8, 23, 62);
  border-right: 0.0625rem solid #0086fb;
  .flex {
    margin-bottom: 1.4625rem;
    padding-left: 1.5625rem;
    cursor: pointer;
  }
  .img_box {
    margin-right: 0.625rem;

    vertical-align: middle;
    > img {
      width: 2.5rem;
      height: 2.5rem;
      margin-top: 0.405rem;
      object-fit: contain;
      vertical-align: middle;
    }
  }
  .tit {
    letter-spacing: 0.125rem;
  }
  .rednum {
    font-size: 1.2rem;
    color: #fff;
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
    bottom: 5%;
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
  width: 85%;
  height: 100%;
  //   background: pink;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  right: 0;
  padding-top: 10rem;
  .table_box {
    border-top: 0.0625rem solid #0086fb;
    height: 90%;
    width: 100%;
    .excel {
      width: 9.375rem;
      background: #0086fb;
      height: 2.1875rem;
      border-radius: 0.9375rem;
      text-align: center;
      line-height: 2.1875rem;
      float: right;
      margin-top: -1.625rem;
      cursor: pointer;
      margin-right: 0.625rem;
      transition: 0.3s;
    }
    .excel:hover {
      color: #00f8f8;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.625rem;
      border-bottom: 0.0625rem solid #999;
      // .right_search{
      //     width: 600px;
      // }
      .search_btn {
        width: 6.55rem;
        height: 2.1875rem;
        font-size: 1.125rem;
        border-radius: 0.9375rem;
        line-height: 2.1875rem;
        text-align: center;
        cursor: pointer;
        background: #0086fb;
        transition: 0.3s;
      }
      .search_btn:hover {
        color: #00f8f8;
      }
    }
  }
}
.active {
  background: rgba(0, 135, 252, 0.6);
}
.pagination {
  // margin-top: 4px;
}
.datesearch {
  margin-right: 0.625rem;
}
</style>