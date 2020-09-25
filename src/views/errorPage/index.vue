<template>
    <div>
        <div class="errorInfor">
            <div class="title">您要找的页面不存在！</div>
            <img src="@/assets/404_images/img404.png" alt="">
            <div class="buttonInfor">
                <el-button style="margin-right:80px;" type="primary" @click="toHome">返回首页</el-button>
                <el-button type="primary" @click="returnGo">后退一步</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        toHome(){
            this.$router.push('/')
        },
        returnGo(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .errorInfor{
        text-align: center;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        .title{
            margin-bottom:30px;
            font-size:30px;
            font-weight: 900;
        }
        .buttonInfor{
            margin-top:50px;
        }
    }
</style>