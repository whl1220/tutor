<template>
  <div class="message">
      <div class="message-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </div>
      <ul class="message-menu">
          <li>
              <h3>用户：***</h3>
              <p>有一首歌是这么唱的:友谊地久天长。希望我和朋友的友情也能永不改变。</p>
              <span>2020.02.02发布</span>
          </li>
          <li>
              <h3>用户：***</h3>
              <p>有一首歌是这么唱的:友谊地久天长。希望我和朋友的友情也能永不改变。</p>
              <span>2020.02.02发布</span>
          </li>
          <li>
              <h3>用户：***</h3>
              <p>有一首歌是这么唱的:友谊地久天长。希望我和朋友的友情也能永不改变。</p>
              <span>2020.02.02发布</span>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .message{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .message-header{
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
        .message-menu{
            width: 80%;
            list-style: none;
            margin-left: 10%;
            margin-top: 1rem;
            li{
                width: 100%;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 4px;
                padding: 0.2rem;
                position: relative;
                margin-top: 0.2rem;
                h3{
                    color: #29AC38;
                }
                p{
                    text-indent: 2em;
                    color: #222222;
                }
                span{
                    position: absolute;
                    bottom: 0.2rem;
                    right: 0.2rem;
                }
            }
        }
    }
</style>