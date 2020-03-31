<template>
  <div class="apply">
      <div class="apply-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </div>
      <ul class="apply-content">
          <li>
              姓名:
              <input type="text">
          </li>
          <li>
              性别:
              男 <input type="radio" name="sex" value="man" />
              女 <input type="radio" name="sex" value="woman" />
          </li>
          <li>
              年龄:
              <input type="text">
          </li>
          <li>
              所在院校:
              <input type="text">
          </li>
          <li>
              擅长学科:
              <input type="text">
          </li>
          <li>
              是否有教师资格证:
              是 <input type="radio" name="aa" value="true" />
              否 <input type="radio" name="aa" value="false" />
              </li>
          <li class="apply-intro">
              个人简介:
              <textarea cols="30" rows="10"></textarea>
          </li>
          <li>
              <button>提交</button>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .apply{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .apply-header{
            background: #29AC38;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #ffffff;
            i{
                width: 10px;
                margin-left: 0.1rem;
                font-size: 0.45rem;
                font-weight: 600;
            }
        }
        .apply-content{
            width: 80%;
            margin-left: 10%;
            li{
                margin-top: 0.6rem;
                font: 400 0.32rem Arial;
                input{
                    vertical-align:middle;
                    height: 0.4rem;
                    border: 1px solid #cccccc;
                    border-radius: 4px;
                    font: 400 14px Arial;
                    &:focus{
                        border: 1px solid #29AC38;
                  }  
                }
                button{
                    width: 100%;
                    height: 0.84rem;
                    border-radius: 4px;
                    background: #29AC38;
                    color: #fff;
                    text-align: center;
                    font-size: 0.32rem;
                    line-height: 0.84rem;
                    border: 0;
                }
            }
            .apply-intro{
                textarea{
                    width: 100%;
                   height: 2rem; 
                   border: 1px solid #cccccc;
                   border-radius: 4px;
                   margin-top: 0.2rem;
                   &:focus{
                        border: 1px solid #29AC38;
                  } 
                } 
            }
               
        }
    }
</style>