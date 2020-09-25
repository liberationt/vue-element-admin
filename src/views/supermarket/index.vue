<template>
    <div>
        <Header/>
        <div>
            <div class="mainWidth">
                <div class="superTop">
                    <div><img src="@/assets/images/logo.png" alt=""></div>
                    <div class="homePageSearch supSearch">
                        <el-input  v-model="search" class="input-with-select">
                            <el-button slot="append">搜索</el-button>
                        </el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="supBg"></div>
        <div class="supMain">
            <div class="mainWidth"> 
                <div class="optionData">
                    <div style="line-height:30px;">年份：</div>
                    <div class="supCheckBox">
                        <!-- <el-checkbox-group v-model="checkboxGroup2" size="medium">
                            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                        </el-checkbox-group> -->
                        <Options :options="cities" v-model='value' :isMultiply='isMultiply'></Options>
                    </div>
                </div>
                <div class="inforData">
                    <div style="color:#2d6de6">
                        共有数据<span style="color:#f86923">1100</span>个
                    </div>
                    <div class="display">
                        <div class="inforListLeft">
                            <div class="dataInforContent"  v-for="item in 5" :key="item">
                                <div>
                                    <div class="font24 mb20">智慧城市细分领域需求结构</div>
                                    <div class="font14 lableInfor">
                                        <span style="color:#f86923">智慧城市需求</span>
                                        <span style="color:#35bc7a">智慧城市结构</span>
                                    </div>
                                </div>
                                <div>
                                    <div style="color:#f86923">
                                        <span class="font20">￥260</span>
                                        <span class="font14">积分</span>
                                    </div>
                                    <div class="InforDetails" @click="todetails()">详情 ></div>
                                </div>
                            </div>
                        </div>
                        <div class="inforListRight">
                            <h3>热门数据榜</h3>
                            <div>
                                <span>1</span>
                                <span>2018年智慧城市各细分领域规模</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../header"
import Footer from "../footer"
import Options from "../options"
export default {
    components:{Header,Footer,Options},
    data(){
        return{
            search:'',
            checkboxGroup2:[],
            isMultiply:true,
            value:[],
            cities:['广州','深圳','上海']
        }
    },
    methods:{
        todetails(){
            this.$router.push("/supermarketDetail")
        }
    }
}
</script>
<style lang="scss">
   .superTop{
       padding:30px 0;
       position: relative;
       .supSearch{
           position: absolute;
           top:50%;
           left:50%;
           transform: translate(-50%,-50%);
       }
   } 
   .supBg{
       background:url("../../assets/images/supBg.png");
       background-repeat: no-repeat;
       background-size: 100% 100%;
       height:235px;
   }
   .supMain{
       background:#eff6fc;
       padding-top:10px;
   }
   .optionData{
       display: flex;
       background:#fff;
       padding:30px;
    //    flex-wrap: wrap;
   }
   .inforData{
       padding:30px;
       .dataInforContent{
           display: flex;
           justify-content: space-between;
           align-items: center;
           width: 100%;
           margin-top: 30px;
           padding:30px;
           background:#fff;
       }
       .lableInfor{
           span{
               padding:5px 10px;
               border:1px solid #eeeeee
           }
       }
       .inforListLeft{
           width:62%;
           .InforDetails{
               text-align: right;
               margin-top:10px;
               cursor: pointer;
               color:#2d6de6;
           }
       }
       .inforListRight{
           width:35%;
           background:#fff;
           padding:0 30px;
           margin-top:30px;
           h3{
               line-height: 60px;
               border-bottom:1px solid #eeeeee;
               margin-bottom: 20px;
           }
       }
   }
    @media screen and (max-width: 1280px){
        .superTop,.supMain{
            width:1280px;
        }
        .supBg{
            width: 1280px;
        }
        .optionData{
            width:1280px;
        }
        .inforData .inforListLeft{
            width:750px
        }
        .inforData .inforListRight{
            width:400px;
        }
   }
</style>