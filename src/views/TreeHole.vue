<template>
    <div id="tree-hole">
        <div class="back" @click="goBack()"/>
        <img class="hole-bg" src="@/assets/image/hole_bg.jpg" alt="#"/>
        <img class="hole-avatar" src="@/assets/image/hole_avatar.jpg" alt="#"/>
        <img class="photo-select" src="@/assets/image/picture.png" alt="#" @click="goEdit"/>
        <ul class="contents-list">
            <li class="content-item" v-for="(item,index) in showList" :key="index">
                <div class="top">
                    <img class="user-avatar" :src="item.userAvatar" alt="#">
                    <div class="user-name">{{item.userName}}</div>
                    <div class="upload-time">{{item.uploadTime}}</div>
                </div>
                <ul class="imgs-list">
                    <li class="img-item" v-for="(img,index) in item.uploadImgs" :key="index">
                        <img :src="img" alt="#"/>
                    </li>
                </ul>
                <div class="upload-text">{{item.uploadText}}</div>
                <div class="bottom">
                    <img class="like-icon" :src="item.likeActive ? likeActive : like" alt="#"/>
                    <span class="like-number">{{item.likeNumber}}</span>
                    <img class="comment-icon" src="@/assets/image/comment.png" alt="#">
                    <span class="comment-tag">评论</span>
                </div>
                <ul class="comments-list">
                    <li class="commemt-item"  v-for="(comment,index) in item.comments" :key="index">
                        <span class="commentator">{{comment.userName}} </span>
                        <span class="comment-content">: {{comment.detail}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            like: require('@/assets/image/like.png'),
            likeActive: require('@/assets/image/like-active.png'), 
            showList:[
                {
                    userName: '嘤嘤怪',
                    userAvatar: require('@/assets/image/avatar1.jpg'),
                    uploadTime: '13:25',
                    uploadImgs:[
                        require('@/assets/image/avatar1.jpg'),
                        require('@/assets/image/avatar1.jpg'),
                        require('@/assets/image/avatar1.jpg')], 
                    uploadText: '心动！！！',
                    likeNumber: 456,
                    likeActive:true,
                    comments: [
                        {
                            userName: 'Alex',
                            detail: '我怎么没有！！', 
                        },
                        {
                            userName: 'Lily',
                            detail: '真好看', 
                        },
                        {
                            userName: 'Joe',
                            detail: 'awsl', 
                        }
                    ]
                },
                {
                    userName: 'Frank',
                    userAvatar: require('@/assets/image/avatar2.jpg'),
                    uploadTime: '昨天',
                    uploadImgs:[
                        require('@/assets/image/avatar2.jpg'),
                        require('@/assets/image/avatar2.jpg'),],
                    uploadText: '难过的一天',
                    likeNumber: 41,
                    likeActive:false,
                    comment: [
                        {
                            userName: 'Alex',
                            detail: '来，请你喝酒', 
                        },
                        {
                            userName: 'Lily',
                            detail: '怎么了?', 
                        },
                        {
                            userName: 'Joe',
                            detail: 'what?', 
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        goBack: function(){
            this.$router.push('find');
        },
        goEdit: function(){
            console.log(this.$router);
            this.$router.push('hole_edit');
        }
    },
    created(){ 
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #tree-hole{
        overflow: hidden;
        margin-bottom: 50px;
        .back{
            width: 10px;
            height: 10px;
            border-bottom: 2px solid #666666;
            border-left: 2px solid #666666;
            transform:rotate(45deg);
            -ms-transform:rotate(45deg); 	/* IE 9 */
            -moz-transform:rotate(45deg); 	/* Firefox */
            -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
            -o-transform:rotate(45deg); 	/* Opera */
            position: fixed;
            top: 15px;
            left: 15px;
        }
        .hole-bg{
            display: block;
            width: 100%;
            height: 160px;
        }
        .hole-avatar{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 10px;
            top: 135px;
        }
        .photo-select{
            display: block;
            width: 30px;
            height: 30px;
            margin: 10px;
        }
        .contents-list{
            width: 100%;
            background-color: #ffffff;
            .content-item{
                overflow: hidden;
                margin: 0 10px ;
                border-bottom: 1px solid #eeeeee;
                .top{
                    height: 50px;
                    overflow: hidden;
                    .user-avatar{
                        width: 30px;
                        height: 30px;
                        margin: 10px;
                        float: left;
                    }
                    .user-name{
                        margin: 5px 0;
                        font-size: 14px;
                        color: #29AC38;
                    }
                    .upload-time{
                        font-size: 10px;
                    }  
                }
                .imgs-list{
                    margin-left: 50px;
                    &::after{
                        display: block;
                        content: '';
                        clear: both;
                    }
                    .img-item{
                        float: left;
                        width: 80px;
                        height: 80px;
                        margin-right: 5px;
                        margin-bottom: 5px;
                        img{
                            width: 80px;
                            height: 80px;
                        }
                    }
                }
                .upload-text{
                    margin-left: 50px;
                    color: black;
                }
                .bottom{
                    float: right;
                    height: 20px;
                    margin-right: 10px;
                    .like-icon{
                        float: left;
                        width: 16px;
                        height: 16px;
                        margin: 2px;
                        line-height: 20px;
                    }
                    .like-number{
                        display: block;
                        float: left;
                        font-size: 12px;
                        line-height: 20px;
                        color: #6666;
                    }
                    .comment-icon{
                        float: left;
                        width: 16px;
                        height: 16px;
                        margin: 2px;
                        margin-left: 12px;
                        line-height: 20px;
                    }
                    .comment-tag{
                        display: block;
                        float: left;
                        font-size: 12px;
                        line-height: 20px;
                        color: #6666;
                        // &::after{
                        //     display: block;
                        //     content: '';
                        //     clear: both;
                        // }
                    } 
                }
                // &::after{
                //     display: block;
                //     content: '';
                //     clear: both;
                // }
                .comments-list{
                    margin: 20px 0 20px 50px;
                    // background-color: #29AC38;
                    .commentator{
                        font-size: 14px;
                        color: #29AC38;
                    }
                    .comment-content{
                        font-size: 14px;
                        color: black;
                    }
                }
                
            }
        }
    }



</style>