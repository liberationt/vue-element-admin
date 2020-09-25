<template>
    <div class="homePageTop">
        <div class="mainWidth">
            <div class="displayFlex">
                <div @click="toHome" style="cursor:pointer">hi~   欢迎来到E寻</div>
                <div class="homeLogin">
                    <span @click="toLogin" v-if="!user.username">登录</span>
                    <span style="margin:0 10px;" v-if="!user.username">|</span>
                    <span @click="toRegister" v-if="!user.username">注册</span>
                    <span @click="toRegister" class="colorInfor" v-if="user.username"><i class="el-icon-user-solid mr5" ></i>{{user.username?user.username:''}}</span>
                    <span style="margin:0 10px;">|</span>
                    <span @click="toMember">会员充值</span>
                    <span style="margin:0 10px;">|</span>
                    <span @click="toCooperation">合作申请</span>
                    <span style="margin:0 10px;">|</span>
                    <span @click="toComplaint">投诉建议</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            user:{}
        }
    },
    computed:{
        // ...mapGetters([
        //   'userInfor',
        // ]),
    },
    methods:{
        toCooperation(){
            this.$router.push('/cooperation')
        },
        toComplaint(){
            this.$router.push('/complaint')
        },
        toLogin(){
            this.$router.push('/login')
        },
        toRegister(){
            this.$router.push('/register')
        },
        toMember(){
            this.$router.push('/member')
        },
        toHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        this.user = this.$store.getters.userInfor ? this.$store.getters.userInfor : JSON.parse(sessionStorage.getItem('userInfor'))
    },
}
</script>
<style lang="scss" scoped>
    .homePageTop{
       height:50px;
       background:rgba(245,245,245,1);
   } 
   @media screen and (max-width: 1280px){
       .homePageTop{
           width:1280px;
       }
   }
   .displayFlex{
       display: flex;
       justify-content: space-between;
       height:50px;
       align-items: center;
       color:#6C6C6C;
       font-size:14px;
   }
   .homeLogin{
       display: flex;
       align-items: center;
       span{
           cursor: pointer;
       }
       .colorInfor{
           color:#0aa9f2
       }
       span:hover{
           color:red;
       }
   }
</style>