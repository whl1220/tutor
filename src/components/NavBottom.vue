<template>
    <div id="nav-bottom">
        <van-tabbar v-model="active"
            active-color="#29AC38"
            inactive-color="#666666">
            <van-tabbar-item  to="/home">
                <span>首页</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active1 : icon.inactive1"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/find">
                <span>发现</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active2 : icon.inactive2"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/release">
                <span>发布</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active3 : icon.inactive3"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/mine">
                <span>我的</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active4 : icon.inactive4"
                >
            </van-tabbar-item>
        </van-tabbar>        
    </div>
</template>
<script>
    export default {
    data() {
        return {
            active: 0,
            icon: {
                active1: require('@/assets/image/home1.png'),
                inactive1: require('@/assets/image/home2.png'),
                active2: require('@/assets/image/find1.png'),
                inactive2: require('@/assets/image/find2.png'),
                active3: require('@/assets/image/release1.png'),
                inactive3: require('@/assets/image/release2.png'),
                active4: require('@/assets/image/mine1.png'),
                inactive4: require('@/assets/image/mine2.png'),
            }
        }
    }  
    }
</script>
<style lang="scss" scoped>
    
</style>