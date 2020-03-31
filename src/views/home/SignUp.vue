<template>
    <div id="body">
        <img id="cancel" src="../../assets/image/叉.png" alt="" @click="back()">
        <h2 id="title">登录</h2>
        <ul id="contain">
            <li class="list" >
                <input type="tel" placeholder="账号" @blur="blur()" v-model="input">
            </li>
            <li class="list" >
                <input type="text" placeholder="密码">
            </li>
        </ul>
        <button id="submit" @click="submit">登录</button>
        <section id="other">
            <span @click="signin">注册</span>
            <span @click="signup2">忘记密码，手机验证码登录?</span>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input:''
        }
    },
    methods:{
        signin(){
            this.$router.push('/register')
        },
        signup2(){
            this.$router.push('/signup2');
        },
        submit(){
            this.$dialog.alert({
            message: '登录成功'
            }).then(()=>{
                setTimeout(()=>{
                    this.$router.push('/home')
                },1000)
            })
        },
        back(){
            this.$router.push('/home')
        },
        blur(){
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.input)&&this.input.length){
                this.input='';
                alert('电话号码格式有误')
            }
        }
    }
}
</script>

<style scoped>
#cancel{
    display: block;
    width: .5rem;
    height: .5rem;
    margin-top: .2rem;
    margin-left: .2rem;
}
#title{
    font-weight: bold;
    margin-top: .5rem 0;
    margin-left: 3rem;
}
#contain{
    width: 6.7rem;
    height: 2.4rem;
    margin-top: .5rem;
    margin-left: .4rem;
    margin-bottom: .4rem;
    border: 1px solid #000000;
    border-radius: .1rem;
}
.list{
    width: 6.5rem;
    height: 1.2rem;
    border-bottom: 1px solid #000000;
    padding-left: .2rem;
    overflow: hidden;
    position: relative;
}
.list:nth-child(2){
    border: none;
}
.list>input{
    width: 100%;
    height: 1rem;
    margin: .1rem;
    line-height: 1.0;
}
#submit{
    width: 7.1rem;
    height: 1.2rem;
    background: #27ac38;
    line-height: 1.0;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin: .5rem .2rem .2rem .2rem;
    border-radius: 5px;
}
#other{
    width: 100%;
    height: 1rem;
    position: relative;
}
#other span:nth-child(1){
    position: absolute;
    top: .2rem;
    left: .5rem;
    color: #27ac38;
}
#other span:nth-child(2){
    position: absolute;
    top: .2rem;
    right: .5rem;
    color: #27ac38;
}
</style>