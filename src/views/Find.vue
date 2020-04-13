<template>
    <div id="find">
        <div class="top">发现</div>
        <van-cell is-link to="/hole">
            <template #title>
                <div><img id="icon_hole" src="@/assets/image/hole_icon.jpg" alt="没有找到图片资源"/></div>
                <span id="tag_hole" class="custom-title">深夜树洞</span>
            </template>
        </van-cell>
        
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {

    }    
}
</script>

<style lang="scss" scoped>
    .top{
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        background-color: #29AC38;
    }
    .van-cell{
        margin-top: 5px;
        & #icon_hole{
            float: left;
            width: 24px;
            height: 24px;
            border-radius: 12px;
        }
        & #tag_hole{
            margin-left: 5px;
        }
        
    }
</style>