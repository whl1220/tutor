<template>
    <div id="hole-edit">
        <div class="top">
            <button class="cancel" @click="cancel()">取消</button>
            <button class="confirm" @click="releaseHole()">发表</button>
        </div>
        <div class="text">随便写点什么</div>
        <ul class="imgs-list">
            <li><img class="img-item" src="@/assets/image/avatar2.jpg" alt="#"></li>
            <li><img class="img-item" src="@/assets/image/avatar1.jpg" alt="#"></li>
            <li><img class="img-item more" src="@/assets/image/add.png" alt="#"></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        cancel: function(){
            this.$router.push('hole');
            
        },
        releaseHole: function(){
            this.$toast.success('发布成功！');
            this.$router.push('hole');
        }
    }  

}
</script>

<style lang="scss" scoped>
    #hole-edit{
        background-color: #ffffff;
        .top{
            width: 100%;
            height: 40px;
            line-height: 40px;
            .cancel{
                float: left;
                width: 30px;
                height: 20px;
                margin: 10px;
                font-size: 12px;
                line-height: 12px;
            } 
            .confirm{
                float: right;
                width: 30px;
                height: 20px;
                margin: 10px;
                font-size: 12px;
                line-height: 12px;
                color: #ffffff;
                background-color: #29AC38;
            }
        }
        .text{
            margin: 0 10px;
            height: 50px;
            background-color: #f6f6f6;
            // border-radius: 5px;
        }
        .imgs-list{
            margin: 10px;
            .img-item{
                float: left;
                width: 100px;
                height: 100px;
                margin-bottom: 5px;
                margin-right: 5px;
                &.more{
                    border: 1px solid #cccccc;
                }
            }
            &::after{
                display: block;
                content: '';
                clear: both;
            }  
        }
        

    }
</style>