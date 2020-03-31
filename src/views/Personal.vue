<template>
  <div class="personal">
      <div class="personal-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </div>

      <ul class="personal-list">
          <li class="list-first">
              <span>
                  头像
              </span>
              <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
              <i class="iconfont icon-youjiantou-copy"></i>
          </li>
          <li>
              <span>名字</span>
              <span class="list-menu">Liberty</span>
              <i class="iconfont icon-youjiantou-copy"></i>
          </li>
          <li>
              <span>ID</span>
              <span class="list-menu">3101616188</span>
              <i class="iconfont icon-youjiantou-copy"></i>
          </li>
          <li>
              <span>更多</span>
              <i class="iconfont icon-youjiantou-copy"></i>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .personal{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .personal-header{
            background: #29AC38;
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #ffffff;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            i{
                margin-left: 0.1rem;
                font-size: 0.45rem;
                font-weight: 600;
            }
        }
        .personal-list{
            margin-top: 0.8rem;
            width: 100%;
            .list-first{
                height: 1.2rem;
                line-height: 1.2rem;
                img{
                    position: absolute;
                    top: 0.1rem;
                    right: 0.6rem;
                    width: 1rem;
                    height: 1rem;

                }
            }
            li{
                box-sizing: border-box;
                width: 100%;
                height: 0.7rem;
                line-height: 0.7rem;
                border-bottom: 1px solid #cccccc;
                position: relative;
                padding-left: 0.2rem;
                }
                .list-menu{
                    position: absolute;
                    right: 0.6rem;
                }
                i{
                    float: right;
                    margin-right: 0.2rem;
                }
            }
    }
</style>