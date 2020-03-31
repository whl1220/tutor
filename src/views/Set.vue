<template>
  <div class="set">
      <div class="set-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </div>
      <div class="set-btn">
          <button>修改密码</button>
          <button>注销</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .set{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .set-header{
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
        .set-btn{
            width: 100%;
            margin-top: 1.5rem;
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