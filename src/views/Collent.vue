<template>
  <div class="collent">
      <div class="collent-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
          <span class="collent-manage">管理</span>
      </div>
      <ul class="collent-content">
          <li>
             <div class="collent-img">
              <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="collent-pre">
                <h3>姓名：***</h3>
                <p>个人简介：毕业于***大学，擅长***学科，性格***</p>
            </div> 
          </li>
           <li>
             <div class="collent-img">
              <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="collent-pre">
                <h3>姓名：***</h3>
                <p>个人简介：毕业于***大学，擅长***学科，性格***</p>
            </div> 
          </li>
           <li>
             <div class="collent-img">
              <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="collent-pre">
                <h3>姓名：***</h3>
                <p>个人简介：毕业于***大学，擅长***学科，性格***</p>
            </div> 
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .collent{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .collent-header{
            background: #29AC38;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #ffffff;
            i{
                margin-left: 0.1rem;
                font-size: 0.45rem;
                font-weight: 600;
            }
            .collent-manage{
                float: right;
                margin-right: 0.1rem;
                font-size: 0.3rem;
                font-weight: 550;
            }
        }
        .collent-content{
            width: 80%;
            margin-left: 10%;
            li{
                margin-top: 0.2rem;
                position: relative;
                width: 100%;
                // height: 3rem;
                padding: 0.2rem;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 4px;
                .collent-img{
                    display: inline-block;
                    margin-right: 0.2rem;
                  img{
                    width: 2rem;
                    height: 2.6rem;
                    }  
                }
                .collent-pre{
                    height: 2.6rem;
                    display: inline-block;
                    position: absolute;
                    top: 0.2rem;
                    p{
                        font-size: 0.28rem;  
                        color: #111111;
                    }
                }
                
                
            }
            
        }
    }
</style>