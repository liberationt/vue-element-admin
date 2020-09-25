<template>
    <div>
        <Header />
        <div class="joinImg"></div>
        <div class="cooperationMain">
            <div class="mainWidth">
                <div class="cooperationContent">
                    <div class="cooperation">合作申请功能概述：</div>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="姓名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="合作类型">
                            <el-radio-group v-model="form.type">
                                <el-radio label="合作代理"></el-radio>
                                <el-radio label="友情链接"></el-radio>
                                <el-radio label="站外广告发布"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="留言">
                            <el-input type="textarea" :rows="6" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">申请合作</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
               </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from "../header"
import Footer from "../footer"
export default {
    components:{Header,Footer},
    data(){
        return {
            form: {
                name: '',
                phone:'',
                type:'',
                desc:''
            }
        }
    },
    methods:{
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style lang="scss" scoped>
    .joinImg{
       height:235px;
       background:url("../../assets/images/join.png");
       background-size:100% 100%;
       background-repeat: no-repeat;
   } 
   @media screen and (max-width: 1280px){
       .joinImg{
           width:1280px;
       }
   }
   .cooperationMain{
       position: relative;
       height:1020px;
       background:url("../../assets/images/bj.png");
       background-size:100% 100%;
       background-repeat: no-repeat;
       .cooperationContent{
            height:700px;
            background:rgba(255,255,255,1);
            box-shadow:0px 6px 21px 3px rgba(0, 0, 0, 0.18);
            padding:6% 10%;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
       }
       @media screen and (max-width: 1280px){
            .cooperationContent{
                width:960px;
            }
        }
        @media screen and (min-width: 1280px){
            .cooperationContent{
                width:960px;
            }
        }
        .cooperation{
            color:#666666;
            margin-bottom: 30px;
        }
   }
   @media screen and (max-width: 1280px){
        .cooperationMain{
            width:1280px;
        }
    }
</style>