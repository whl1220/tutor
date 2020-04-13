<template>
  <div class="appoint">
      <div class="appoint-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
          <span class="appoint-manage">管理</span>
      </div>
      <ul class="appoint-content">
          <router-link to="/details">
              <li>
             <div class="appoint-img">
              <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="appoint-pre">
                <h3>姓名：***</h3>
                <p>个人简介：毕业于***大学，擅长***学科，性格***</p>
                <span>已预约</span>
            </div> 
          </li>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .appoint{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .appoint-header{
            background: #29AC38;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #ffffff;
            i{
                margin-left: 0.1rem;
                font-size: 0.45rem;
                font-weight: 600;
            }
            .appoint-manage{
                float: right;
                margin-right: 0.1rem;
                font-size: 0.3rem;
                font-weight: 550;
            }
        }
        .appoint-content{
            width: 80%;
            margin-left: 10%;
            margin-top: 0.2rem;
            li{
                position: relative;
                width: 100%;
                // height: 3rem;
                padding: 0.2rem;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 4px;
                .appoint-img{
                    display: inline-block;
                    margin-right: 0.2rem;
                  img{
                    width: 2rem;
                    height: 2.6rem;
                    }  
                }
                .appoint-pre{
                    height: 2.6rem;
                    display: inline-block;
                    position: absolute;
                    top: 0.2rem;
                    p{
                        font-size: 0.28rem;  
                        color: #111111;
                    }
                    span{
                        position: absolute;
                        bottom: 0rem;
                        right: 0.2rem;
                        color: #29AC38;
                    }
                }
                
                
            }
            
        }
    }
</style>