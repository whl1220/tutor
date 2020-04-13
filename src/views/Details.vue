<template>
  <div class="details">
      <div class="details-header">
          <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </div>
      <div class="details-pre">
          <img src="http://img5.imgtn.bdimg.com/it/u=2816592558,2897793657&fm=11&gp=0.jpg" alt="">
          <div class="details-pre-money">
              <p>老师</p>
              <h3>￥100/小时</h3>
              <p>在职单位：***</p>
          </div>
      </div>
      <div class="details-center">
          <h3>老师简介:</h3>
          <p>
              老师又作教师、师长、导师等，是一种职业，古已有之，指传授学生知识的人员，有各种教育类型（如语文、数学等），班主任也为老师之一；也泛指在某方面值得学习和能够给大家带来一定正确知识和指导，有能力的人。相关节日是“教师节”。
          </p>
      </div>
      <div class="details-message">
          <h3>授课信息:</h3>
          <p>
              老师又作教师、师长、导师等，是一种职业，古已有之，指传授学生知识的人员，有各种教育类型（如语文、数学等），班主任也为老师之一；也泛指在某方面值得学习和能够给大家带来一定正确知识和指导，有能力的人。相关节日是“教师节”。
          </p>
      </div>
      <div class="details-bottom">
          <span class="call">联系</span>
          <span class="status">已预约</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .details{
        width: 100%;
        height: 100%;
        background: #ffffff;
        .details-header{
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
        .details-pre{
            margin-top: 0.8rem;
            width: 100%;
            height: 3rem;
            padding: 0.2rem;
            border: 1px solid #cccccc;
            position: relative;
            box-sizing: border-box;
            img{

                width: 2rem;
                height: 2.6rem;
                margin-right: 0.2rem;
            }
            .details-pre-money{
                display: inline-block;
                position: absolute;
                top: 0.2rem;
                line-height: 0.8rem;
                h3{
                    color: #29AC38;
                    font-weight: 600;
                }
            }
        }
        .details-center{
            margin-top: 0.2rem;
            width: 100%;
            padding: 0.2rem;
            box-sizing: border-box;
            border: 1px solid #cccccc;
            h3{
                color: #29AC38;
            }
            p{
                text-indent: 2em;
            }
        }
        .details-message{
            margin-top: 0.2rem;
            width: 100%;
            padding: 0.2rem;
            box-sizing: border-box;
            border: 1px solid #cccccc;
            margin-bottom: 1rem;

            h3{
                color: #29AC38;
            }
            p{
                text-indent: 2em;
            }
        }
        .details-bottom{
            width: 100%;
            height: 1rem;
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            text-align: center;
            line-height: 1rem;
            color: #ffffff;
            .call{
                height: 1rem;
                flex: 1;
                display: inline-block;
                background: goldenrod;
            }
            .status{
                height: 1rem;
                flex: 2;
                display: inline-block;
                background: #29AC38;
            }
        }
    }
</style>