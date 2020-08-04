<template>
  <div class="logo">
    <div class="title">
      <p class="tit1">内江市市中区交通运输局</p>
      <p class="subtit">Neijiang Transportion Bureau</p>
    </div>
    <div class="centerlogo">
      <div class="tit">LOGO</div>
      <div class="jtt">交通运输监管云平台</div>
      <div class="userbox">
        <div class="user">
          <el-input placeholder="用户名" v-model="user">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </div>
        <div class="upwd">
          <el-input placeholder="验证码" v-model="upwd">
         
          </el-input>
        </div>
      </div>

      <div class="yzm flex-between">
          <div class="yzmsr">
              <el-input placeholder="验证码" v-model="yzm">
            <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
          </el-input>
          </div>
          <div class="imgyzm">
              1234
          </div>
      </div>
      <div class="jzmm">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
      </div>
      <div class="logobtn" @click="logo">
          登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:"",
            upwd:"",
            yzm:'',
            checked:false
        }
    },
    methods:{
        logo(){
            this.$router.push('/index')
        }
    }
};
</script>
<style>
.logo input.el-input__inner{
  background: transparent;
  border:.0625rem solid #00f8f8;
  color: #00f8f8;

}
.logo .el-input__prefix{
    color: #00f8f8;
} 
.logo .el-input__icon {
    line-height: 1.975rem;
}
.jzmm .el-checkbox{
   color: #01c1fd;
}
</style>
<style lang="less" scoped>
.logo {
  width: 100vw;
  height: 100vh;
  background: url(../assets/img/logo/bg@3x.png);
  background-repeat: no-repeat;
  background-size: 100%;
}
.title {
  color: #0086fb;
  padding: 0.9375rem 1.25rem;
  .tit1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .subtit {
    font-size: #0086fb;
  }
}
.centerlogo {
  position: fixed;
  width: 50rem;
  height: 37.5rem;
  background: pink;
  background: url(../assets/img/logo/bg2@1x.png);
  background-repeat: no-repeat;
  background-size: 100%;
  top: 50%;
  left: 50%;
  margin-left: -25rem;
  margin-top: -18.75rem;
  .tit {
    background: #01c1fd ;
    width: 8.75rem;
    line-height: 8.75rem;
    font-size: 3rem;
    height: 8.75rem;
    border-radius: 50%;
    margin: auto;
  }
  .jtt {
    font-size: 1.875rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-top: 0.725rem;
  }
  .userbox{
      >div{
          width: 15.5rem;
          margin:.625rem auto;
      }
  }
  .yzm{
       width: 15.5rem;
          margin:.625rem auto;
          .yzmsr{
              width:65%;
          }
          .imgyzm{
              width:34%;
              line-height: 2.3125rem;
              text-align: center;
              font-size: 1.125rem;
              font-weight: bold;
              letter-spacing: .1875rem;
              border-radius: .1875rem;
              background: rgb(16, 62, 131);
          }
  }
  .jzmm{
      width: 15.5rem;
          margin:.625rem auto;
          color: #01c1fd;
          padding-left: .625rem;
  }
}
.logobtn{
    width: 8.25rem;
    height:2.525rem;
    text-align: center;
    line-height: 2.525rem;
    font-size: 1rem;
    border-radius: .3125rem;
    color: #fefefe;
    background: #0ebbfe;
    margin: auto;
    cursor: pointer;
}
</style>