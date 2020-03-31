<template>
    <div id="mine">
        <!-- 顶部 -->
        <header id="header">
            <div class="header-wrapper"> 
                <span class="page-name">我的</span>
                <router-link to="/set">
                   <span class="site">设置</span> 
                </router-link>
            </div>
            <router-link to="/login">
                <div class="message">
                    <!-- 头像 -->
                    <span class="avatar"></span>
                    <!-- 昵称 电话号 -->
                    <span class="user-text">
                        <div class="nickname">
                            昵称：<p>xxxxxx</p>
                        </div>
                        <div class="phone">
                            电话：<p>18888888888</p>
                        </div>
                    </span>
                    <!-- 修改个人信息 -->
                    <i class="iconfont icon-youjiantou-copy"></i>
                </div>
            </router-link>

        </header>
        <!-- 导航按钮 -->
        <nav id="nav">
            <ul class="nav-wrapper">
                <li v-for="(item,index) in navList" :key="index" class="nav-list">
                    <router-link :to="item.path">
                        <img :src="item.url">
                        <p>{{ item.name }}</p>
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- 内容 -->
        <div id="content">
            <ul class="content-wrapper">
                <li v-for="(item,index) in menuList" :key="index" class="menu-list">
                    <router-link :to="item.path">
                    <div>
                        <img :src="item.url">
                        <p>{{ item.name }}</p>
                        <i class="iconfont icon-youjiantou-copy"></i>
                    </div>
                    </router-link>
                </li>
            </ul>
            <div class="apply">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            navList: [
                {
                    path: '/issue',
                    name: '我的发布',
                    url: require('../assets/image/0.png')
                },
                {
                    path: '/collent',
                    name: '我的收藏',
                    url: require('../assets/image/2.png')
                },
                {
                    path: '/appoint',
                    name: '我的预约',
                    url: require('../assets/image/3.png')
                },
                {
                    path: '/history',
                    name: '历史记录',
                    url: require('../assets/image/4.png')
                },
            ],
            menuList: [
                {
                    path: '/apply',
                    name: '申请成为教师',
                    url: require('../assets/image/1.png')
                },
                {
                    path: '/message',
                    name: '我的信息（留言）',
                    url: require('../assets/image/5.png')
                },
                {
                    path: '/appoint',
                    name: '帮助中心',
                    url: require('../assets/image/6.png')
                },
                {
                    path: '/history',
                    name: '问题反馈',
                    url: require('../assets/image/7.png')
                },
                {
                    path: '/history',
                    name: '关于',
                    url: require('../assets/image/8.png')
                }
            ]
        }
    },
    
}
</script>

<style lang="scss" scoped>
    // 头部我的以及设置部分
    #header{
        width: 100%;
        height: 3.2rem;
        background: #29ac38;
        box-shadow: 0 0 5px 5px #666;
        position: relative;
        .header-wrapper{
            width: 100%;
            height: 0.8rem;
            border-bottom: 1px solid #cccccc;
            // 我的
            .page-name{
                display: block;
                text-align: center;
                line-height: 0.8rem;
                font-size: 0.4rem;
                color: #fff;
            }
            // 设置
            .site{
                position: absolute;
                top: 0;
                right: 10px;
                color: #fff;
                line-height: 0.8rem;
            }
        }
        // 我的信息
        .message{
            width: 100%;
            height: 2.4rem;
            display: flex;
            // 头像
            .avatar{
                display: block;
                width: 1.6rem;
                height: 1.6rem;
                margin-left: 0.4rem;
                margin-top: 0.4rem;
                border-radius: 50%;
                background: #fff;
            }
            // 昵称+电话
            .user-text{
                margin-top: 0.4rem;
                margin-left: 0.4rem;
                color: #fff;
                .nickname,.phone{
                    display: flex;
                }
                .phone{
                    margin-top: 0.4rem;
                }
            //修改个人信息
            }
            i{
                line-height: 2.4rem;
                float: right;
                position: absolute;
                right: 0.2rem;
                color: #fff;
                font-size: 0.6rem;
            }
        }   
    }
    // 导航按钮列表
    #nav{
        width: 100%;
        margin-top: 0.15rem;
        // box-shadow: 0 0 0 5px #666;
        background: #fff;
        .nav-wrapper{
            display: flex;
            justify-content: space-around;
            color: #333;
            background: #fff;
            .nav-list{
                box-sizing: border-box;
                padding: 0.1rem;
                text-align: center;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                }
                a{
                    font-size: 0.28rem;
                    color: #000000;
                }
            }
        }
    }
    // 我的 内容
    #content{
        .content-wrapper{
            // 申请
            font-size: 0.3rem;
            li:nth-child(1){
                margin-top: 0.2rem;
                margin-bottom: 0.2rem;
            }
            li:nth-child(3)::after,
            li:nth-child(4)::after,li:nth-child(5)::after
            {
                content: '';
                width: 200%;
                height: 200%;
                position: absolute;
                top: 0;
                left: 0;
                border: 1px solid #bfbfbf;
                border-radius: 4px;
                -webkit-transform: scale(0.5,0.5);
                transform: scale(0.5,0.5);
                -webkit-transform-origin: top left;
            }
            // 通用
            .menu-list{
                box-sizing: border-box;
                padding-left: 0.4rem;
                display: flex;
                height: 0.8rem;
                line-height: 0.8rem;
                background: #fff;
                position:relative;
                width: 100%;
                div{
                    width: 7rem;
                    img{
                        position: absolute;
                        top: 50%;
                        left: 0.2rem;
                        transform: translate(0,-50%);
                        width: 0.5rem;
                        height: 0.5rem;
                    }
                    p{
                        margin-left: 0.6rem;
                        color: #000000;
                    }
                    // 箭头
                    i{
                        z-index: 11;
                        position: absolute;
                        line-height: 0.8rem;
                        right: 0; 
                        top: 0;
                        color: #cccccc;
                        font-size: 0.4rem;
                    }  
                }
                
            }
        }
    }
</style>