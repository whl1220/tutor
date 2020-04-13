<template>
<!-- 头部 -->
  <div class="loginContainer">
      <div class="login-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
          <h2 class="login_logo">智能家教</h2>
      </div>
      <!-- 输入框 -->
      <div class="login-content">
          <input type="text" maxlength="8" placeholder="账号">
          <input type="password" maxlength="8" placeholder="密码">
          <div class="login-hint">
              温馨提示：未注册智能家教的账号帐号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </div>
            <button>登录</button>  
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .loginContainer{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .login-header{
            width: 100%;
            
            i{
                line-height: 0.8rem;
                font-size: 0.45rem;
                margin-left: 0.1rem;
                font-weight: 600;
                color: #29AC38;
            }
            h2{
                font-size: 40px;
                font-weight: bold;
                color: #29AC38;
                text-align: center;
                margin-top: 1.8rem;
            }
        }
        .login-content{
            width: 80%;
            height: 100%;
            margin-left: 10%;
            input{
                width: 100%;
                height: 0.96rem;
                padding-left: 10px;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-radius: 4px;
                outline: 0;
                margin-top: 0.2rem;
                font: 400 14px Arial;
                  &:focus{
                      border: 1px solid #29AC38;
                  }  
            } 
            .login-hint{
                margin-top: 0.24rem;
                color: #999;
                font-size: 0.28rem;
                line-height: 0.4rem;
                a{
                   color: #29AC38;
                }
                    
            }
            button{
                width: 100%;
                height: 0.84rem;
                margin-top: 0.6rem;
                border-radius: 4px;
                background: #29AC38;
                color: #fff;
                text-align: center;
                font-size: 0.32rem;
                line-height: 0.84rem;
                border: 0;
            }
              
        }
    }
</style>