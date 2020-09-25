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
                <div>
                    <div class="suptop"></div>
                    <div class="supcenter"></div>
                    <div class="supbottom">啊撒打发是</div>
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
       padding:10px 0 200px;
       .supbottom,.supcenter{
           margin-top:30px;
           height:200px;
           padding:20px 170px;
           background:#fff
       }
   }
</style>