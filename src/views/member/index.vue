<template>
    <div>
        <Header />
        <div class="hyImg"></div>
        <div>
            <div class="mainWidth memberContent">
                <div class="displayFlexCenter">
                    <div class="memberMain">
                        <div class="memberImg pt60">
                            <p>积分充值</p>
                            <div class="memberImgPosition mt20">
                                <span class="position">￥</span>
                                <span class="font30">1</span>
                                <span>元/100积分</span>
                            </div>
                            <div style="width:48%;margin:10px auto 0;">
                                <el-input v-model="payMoneys" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入充值金额"></el-input>
                            </div>
                        </div>
                        <div class="memberMainBottom">
                            <p>一数据一积分 </p>
                            <p class="mt10 mb45">（数据超市与API价格按显示价格消耗积分）</p>
                            <div class="rightBool" @click="purchase(1)">立即购买</div>
                        </div>
                    </div>
                    <div class="memberMain">
                        <div class="memberImg1 pt60">
                            <p>月会员</p>
                            <div class="memberImgPosition mt20">
                                <span class="position">￥</span>
                                <span class="font30">199</span>
                                <span>元/月</span>
                            </div>
                        </div>
                        <div class="memberMainBottom">
                            <p>会员期内可以任意下载数据</p>
                            <p class="mt10 mb45">（数据超市内容与api除外）</p>
                            <div class="rightBool rightBool1" @click="purchase(2)">立即购买</div>
                        </div>
                    </div>
                    <div class="memberMain">
                        <div class="memberImg2 pt60">
                            <p>年会员</p>
                            <div class="memberImgPosition mt20">
                                <span class="position">￥</span>
                                <span class="font30">1999</span>
                                <span>元/年</span>
                            </div>
                        </div>
                        <div class="memberMainBottom">
                            <p>会员期内可以任意下载数据</p>
                            <p class="mt10 mb45">（数据超市内容与api除外）</p>
                            <div class="rightBool rightBool2" @click="purchase(3)">立即购买</div>
                        </div>
                    </div>
                    <div class="memberMain">
                        <div class="memberImg3 pt60">
                            <p>企业会员</p>
                            <div class="memberImgPosition mt20">
                                <span class="position">￥</span>
                                <span class="font30">10000</span>
                                <span>元/起</span>
                            </div>
                        </div>
                        <div class="memberMainBottom">
                            <p>可以定制专属规则的页面</p>
                            <p>将数据库与页面整理一个用户专用的页面</p>
                            <p>也可以给用户分享数据库</p>
                            <p class="mb22">具体价格需要沟通来定</p>
                            <div class="rightBool rightBool3" @click="purchase(4)">立即购买</div>
                        </div>
                    </div>
                </div>
                <div class="mainWidth paymentContent" v-if="isShow">
                    <div>
                        应付金额：<span class="money">{{payMoney}}</span> 元
                    </div>
                    <div class="displayMoney">
                        <div>
                            <div id="qrcode"></div>
                            <div style="margin-top:30px">微信支付</div>
                        </div>
                        <div>
                            <div id="qrcode"></div>
                            <div style="margin-top:30px">支付宝支付</div>
                        </div>
                    </div>
                </div>
                <div style="color:red;line-height:40px;padding:0 15px;">
                    <p>使用&发票说明</p>
                    <p>1、在使用期限内，用户可以访问和下载任意数据（不包含数据超市中的数据集）；</p>
                    <p>2、在使用期限内，账号仅授权本人使用；严禁恶意请求数据，如使用爬虫、自动化程序频繁请求页面，一经发现直接封号，请您理解。</p>
                    <p>3、如需开票，请您60天内联系本站客服，提交相应开票信息，以及订单信息，我们会在5个工作日内发出发票。</p>
                </div>
            </div>
        </div>
        <div class="dialog">
            <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%"
                :show-close='false'>
                <span>充值成功，{{number}}s后将自动返回主页</span>
            </el-dialog>
        </div>
        
        <Footer />
    </div>
</template>
<script>
import Header from "../header"
import Footer from "../footer"
import { getUrlCode,getPayStatus } from '@/api/homePage'
import QRCode from "qrcodejs2"
import qrcode from 'qrcodejs2'
export default {
    components:{Header,Footer},
    data(){
        return{
            dialogVisible:false,
            isShow:false,
            payMoney:'',
            payMoneys:'',
            params:{
                id:'',
                username:'',
                amount:''
            },
            timer:null,
            number:3
        }
    },
    methods:{
        purchase(num){
            this.isShow = false
            clearInterval(this.timer)
            this.timer = null
            switch(num){
                case 1:
                    this.payMoney = this.payMoneys?this.payMoneys:1
                    break;
                case 2:
                    this.payMoney = 199
                    break;
                case 3:
                    this.payMoney = 1999
                    break;
                case 4:
                    this.payMoney = 10000
                    break;
            }
            this.isShow = true
            this.params.amount = Number(this.payMoney)
            getUrlCode(this.params).then(res=>{
                if(res.code==200){
                    this.qrcode(res.code_url)
                    this.timer = setInterval(() => {
                        this.paySuccess(res.order_no)
                    }, 3000)
                }
            })
        },
        paySuccess(orderNo){
            getPayStatus({order_no:orderNo}).then(res=>{
                if(res.code==200 && res.status =='支付成功'){
                    this.dialogVisible = true
                    clearInterval(this.timer)
                    this.timer = null
                    var _this = this
                    function numClock(){
                         _this.number>1? _this.number--:clearInterval(init)
                         if(_this.number==1){
                             _this.$router.push('/homePage')
                         }
                    }
                    var init = setInterval(numClock,1000)
                }
            })
        },
        qrcode(url){
                document.getElementById("qrcode").innerHTML = ""
            // this.$nextTick(() => {
                let qrcode = new QRCode("qrcode", {
                    width: 150,
                    height: 150, // 高度
                    colorLight: "#ffffff",
                    text:url // 二维码内容
                })
            // })
        }
    },
    mounted(){
        let userInfor = this.$store.getters.userInfor ? this.$store.getters.userInfor : JSON.parse(sessionStorage.getItem('userInfor'))
        this.params.id = userInfor.id
        this.params.username = userInfor.username
    }
}
</script>
<style lang="scss" scoped>
   .hyImg{
       height:265px;
       background:url("../../assets/images/hy.png");
       background-size:100% 100%;
       background-repeat: no-repeat;
   } 
   @media screen and (max-width: 1280px){
       .hyImg{
           width:1280px;
       }
   }
   .memberContent{
       padding:80px 0 200px;
   }
   @media screen and (max-width: 1500px){
       .memberContent{
           width:1280px;
       }
   }
   .memberMain{
       width:283px;
       height:445px;
       text-align: center;
       color:#fff;
       box-shadow:0px 6px 20px 3px rgba(0, 0, 0, 0.18);
        border-radius:6px;
       .font30{
           font-size:30px;
           font-weight: bold;
       }
       .memberImgPosition{
           position: relative;
           .position{
               position: relative;
               top:-10px;
               left:5px;
           }
       }
       .memberMainBottom{
           color:#333;
           font-size:14px;
           padding-top:25px;
       }
   }
   .memberImg{
       background:url('../../assets/images/hy1.png');
        background-size:100% 100%;
       background-repeat: no-repeat;
       height:269px;
   }
   .memberImg1{
       background:url('../../assets/images/hu2.png');
       background-size:100% 100%;
       background-repeat: no-repeat;
       height:269px;
   }
   .memberImg2{
       background:url('../../assets/images/hy3.png');
       background-size:100% 100%;
       background-repeat: no-repeat;
       height:269px;
   }
   .memberImg3{
       background:url('../../assets/images/hy4.png');
       background-size:100% 100%;
       background-repeat: no-repeat;
       height:269px;
   }
   .rightBool{
        width:144px;
        height:36px;
        background:rgba(27,199,177,1);
        border-radius:18px;
        line-height: 36px;
        margin:0 auto;
        color:#fff;
        cursor: pointer;
   }
   .rightBool1{
       background:#FFB143;
   }
   .rightBool2{
       background:#FF2969;
   }
   .rightBool3{
       background:#1593FF;
   }
   .displayFlexCenter{
       display: flex;
       justify-content: space-around;
       align-items: center;
       margin-bottom:104px;
   }
   .paymentContent{
       height:406px;
       text-align: center;
       border:1px dashed rgba(194,193,193,1);
       padding:56px 0;
       margin-bottom:30px;
   }
   .money{
       color:#FF8900;
   }
   .displayMoney{
       display: flex;
       justify-content: space-around;
       align-items: center;
       margin-top: 50px;
   }
   .brCode{
       width:160px;
       height:160px;
       border:1px solid rgba(73,175,25,1);
       margin-bottom: 20px;
   }
   
</style>