<template>
  <div id="app">
    <div class="content">
        <!-- <keep-alive> -->
       <transition name="slide-left">
        <!-- <keep-alive> -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
         <transition name="slide-left">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
          </transition>
        <!-- </keep-alive> -->
    </div>
  </div>
</template>



<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {};
  },
    computed: {
   
 
  }
       
};
</script>


<style>
 
   ::-webkit-scrollbar {
      width: 5px; /*滚动条宽度*/
      height: 3px; /*滚动条高度*/
      background-color: #333;
      }
      .scrollbar{
           width: 5px; /*滚动条宽度*/
      height: 3px; /*滚动条高度*/
      background-color: #333;
      }
  
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(0,240,253); /*滚动条的背景颜色*/
  border-radius:1.8375rem;
  }
#to-top-btn{
  width: 1.875rem;
  height: 1.875rem;
  position: fixed;
  display: none;
  right: .625rem;
  bottom:3.4375rem;
}
* {
  margin: 0;
  padding: 0;
}
html,
body,
div,
span,
p {
  font-family: SourceHanSansSC !important;
}
.BMap_bubble_content{
  color:#000;
}
body{
  /* background:url(./assets/img/jt.jpg); */
       background: rgb(7, 23, 60);
  /* background-size: 100%; */
}
main {
  /* background: #999 !important; */
}
main .el-button--primary {
  color: #fff;
  background-color: #17b3a3 !important;
  border-color: #17b3a3 !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav {
  padding: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}


ul {
  list-style: none;
}
a {
  text-decoration: none;
  letter-spacing: 0.034267rem;
}
img {
  vertical-align: top;
  border: none;
}
em,
i {
  font-style: normal;
}
.clearf:after,
.clearf:before {
  content: "";
  display: block;
  clear: both;
}
.content {
  padding-top: px2rem(100px);
  /* background: #f5f5f5; */
}
.tabar {
  margin-bottom: px2rem(120px);
}
/* //渐变动效 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-in;
  opacity: 1;
}
.slide-left-enter,
.slide-left-leave-active {
  opacity: 0;
}
/* 左滑动效 */
/* .slide-left-enter-active {
    animation: slideLeft 1.7s ;
   } */

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translate(100%, 0);
    visibility: visible;
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.amap-logo{
  display: none!important;
}
.amap-copyright{
  display: none!important;
}
</style>

