<template>
    <div class="homePageMain">
        <Header />
        <div class="homePageCenter">
            <div class="mainWidth">
                <div class="centerTop display">
                    <div><img src="@/assets/images/logo.png" alt=""></div>
                    <div class="homePageSearch">
                        <el-input  v-model="search" class="input-with-select">
                            <el-button slot="append">搜索</el-button>
                        </el-input>
                    </div>
                    <div class="phoneImg">
                        <!-- <span><img src="@/assets/images/phone.png" alt=""></span>
                        <span>&nbsp;&nbsp;15904762305</span> -->
                        <span>联系客服</span>
                        <span class="qrcodeImg"></span>
                    </div>
                </div>
                <div class="centerBottom">
                    <div class="dataAnalysis">数据导航</div>
                    <div><span class="dataType" @click="tosupermarket">数据超市</span></div>
                    <div><span class="dataType">问卷发放</span></div>
                </div>
            </div>
        </div>
        <div class="homePageSwipper">
            <el-carousel trigger="click" height="500px">
                <el-carousel-item v-for="(item,i) in bannerListSwiper" :key="i">
                    <img :src='item.url' alt="" style="width:100%;height:100%">
                </el-carousel-item>
            </el-carousel>
            <div class="mainWidth bannerList">
                <ul @mouseleave="showbannerRigth">
                    <li v-for="(item,i) in bannerList" :key="i">
                        <div class="oneDataInfor" :class="{hoverBg:isClassBg===i}" @mouseenter="addClass(i)" >{{item.name}}</div> 
                        <div class="bannerRigth" :class="{showBannerRigth:isClassBg===i}" >
                            <div class="display">
                                <div class="bannerLeft">
                                    <div v-for="(list,k) in item.secondary" :key="k" class="bannerRigthCon">
                                        <span class="bannerRightTop">{{list.secondary_name}}</span>
                                        <span style="padding:5px 0;">
                                                <span v-for="(last,j) in list.titles" :key="j"  class="hoverTitle" @click="toDataListDetais(last.title_name,last.obj_id,item.label)">{{last.title_name}}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="bannerRightImg">
                                    <div><img src="@/assets/401_images/401.gif" alt=""></div>
                                    <div><img src="@/assets/404_images/404.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="homePageBottom">
            <!-- <div class="mainWidth">
                <div class="homePageTit">
                    <span></span>
                    <p>站外数据分析服务</p>
                </div>
                <div>
                    <div class="box">
                        <ul class="ullist" @mouseleave="clearTimeout" @mouseenter="beginTimeout">
                            <li><img src="@/assets/401_images/401.gif" alt="" class="Liwidth"></li>
                            <li><img src="@/assets/404_images/404.png" alt=""></li>
                            <li><img src="@/assets/401_images/401.gif" alt=""></li>
                            <li><img src="@/assets/404_images/404.png" alt=""></li>
                            <li><img src="@/assets/401_images/401.gif" alt=""></li>
                            <li><img src="@/assets/404_images/404.png" alt=""></li>
                            <li><img src="@/assets/401_images/401.gif" alt=""></li>
                            <li><img src="@/assets/404_images/404.png" alt=""></li>
                            <li><img src="@/assets/401_images/401.gif" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div> -->
            <div class="mainWidth" style="margin:80px auto;">
                <div class="mainWidth commonTitle">
                    <h3>关于我们</h3>
                    <span>About us</span>
                </div>
                <div style="text-align:center;line-height:50px">
                   <p>本公司致力于各行业数据资源整合，让个人以及企业用户节省时间和人力成本，提高调研统计效率。</p>
                   <p>由于数据资源丰富，费用低廉上线以来，深受用户青睐，为此我们会更加努力的为您提供更具有性价比的服务。</p>
                </div>
                <!-- <div class="displayPic">
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>提供电商流量行情，关键词统计数据，降低运营成本</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>全行业市场统计，舆情资讯，价格趋势分析，提高决策效率</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>全球宏观统计，为企业，学校，学生提供方便的调研资源</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                    </div>
                </div> -->
            </div>
            <div class="mainWidth commonTitle">
                <h3>我们的优势</h3>
                <span>Our advantage</span>
            </div>
            <div class="mainWidth display">
                <div class="newInfor">
                    <div class="newInforImg"><img src="@/assets/images/pic1.png" alt=""></div>
                    <div class="newInforDetail">
                        <div><img src="@/assets/images/1.png" alt=""></div>
                        <h4>精准化数据分析平台</h4>
                        <p>可查询各行业宏观微观统计数据</p>
                    </div>
                </div>
                <div class="newInfor">
                    <div class="newInforImg"><img src="@/assets/images/pic2.png" alt=""></div>
                    <div class="newInforDetail">
                        <div><img src="@/assets/images/2.png" alt=""></div>
                        <h4>精准化数据下载</h4>
                        <p>能够精准的筛选想要的目标数据</p>
                    </div>
                </div>
                <div class="newInfor">
                    <div class="newInforImg"><img src="@/assets/images/pic3.png" alt=""></div>
                    <div class="newInforDetail">
                        <div><img src="@/assets/images/3.png" alt=""></div>
                        <h4>个性化定制页面</h4>
                        <p>可按您的需求定制数据查询页面</p>
                    </div>
                </div>
                <div class="newInfor">
                    <div class="newInforImg"><img src="@/assets/images/pic4.png" alt=""></div>
                    <div class="newInforDetail">
                        <div><img src="@/assets/images/4.png" alt=""></div>
                        <h4>超高性价比数据</h4>
                        <p>让您可以享受更实惠的数据资源</p>
                    </div>
                </div>
            </div>
            <div class="mainWidth" style="margin:100px auto;">
                <div class="mainWidth commonTitle">
                    <h3>经典案例</h3>
                    <span>The classic case</span>
                </div>
                <div class="displayPic">
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>提供电商流量行情，关键词统计数据，降低运营成本</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>全行业市场统计，舆情资讯，价格趋势分析，提高决策效率</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                        <span>全球宏观统计，为企业，学校，学生提供方便的调研资源</span>
                    </div>
                    <div class="picItem">
                        <img src="@/assets/images/al.png" alt="">
                    </div>
                </div>
            </div>
            <div class="mainWidth">
                <div class="mainWidth commonTitle">
                    <h3>帮助中心</h3>
                    <span>Help Center</span>
                </div>
                <div style="width:60%;margin:0 auto 100px">
                    <el-carousel :interval="4000" type="card" height="540px">
                        <el-carousel-item>
                            <div class="swierInforItem">
                                <div class="bgImg"></div>
                                <h4 class="swiperInfor">数据的资源</h4>
                                <p class="swiperText">
                                    本站用于，全球宏观经济，国内宏观经济，区县级别数据统计，全球人口，市场，就业，指数，贸易，旅游等数据；全球气象，天气数据；国内工商信息数据，司法类裁判文书；股票期货证券类交易数据，财报舆情等数据，各个商品价格，指数以及电商运营类数据。
                                </p>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="swierInforItem">
                                <div class="bgImg"></div>
                                <h4 class="swiperInfor">数据的来源</h4>
                                <p class="swiperText">
                                    本站数据主要来源于，国家统计局、世界银行、气象局、证监会、各国官方统计网站等官方网站；因此我们会尽可能的保证数据的真实性，但很少部分数据为手动整理，因此很难保证数据全部准确无误差望您理解。
                                </p>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="swierInforItem">
                                <div class="bgImg"></div>
                                <h4 class="swiperInfor">售后服务</h4>
                                <p class="swiperText">
                                   我们有专门的售后人员，如果您在使用过程中遇到了问题，可以随时联系我们的售后人员，工作时间为上午9.00—11.30，下午2.30—5.30 。非工作时间售后人员回复可能会不及时，请您理解。
                                </p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from "../header"
import Footer from "../footer"
import {getSwiperList} from "@/api/homePage"
export default {
    components:{Header,Footer},
    data(){
        return{
            bannerListSwiper:[
                {
                    url:require('@/assets/images/banner1.jpg')
                },
                {
                    url:require('@/assets/images/banner2.jpg')
                },
                {
                    url:require('@/assets/images/banner3.jpg')
                }
            ],
            bannerList:[ ],
            isClassBg:null,
            search:'',
            screenWidth:'',
            boxWidth:0,
            isClear:0,
            timer:null,
            left:0,
            timerRun:false,
        }
    },
    methods:{
        toLogin(){
            this.$router.push('/login')
        },
        toRegister(){
            this.$router.push('/register')
        },
        //数据超市
        tosupermarket(){
            this.$router.push("/supermarket")
        },
        //划过添加类名
        addClass(i){
            this.isClassBg=i
        },
        //划过添加类名
        removeClass(i){
            this.isClassBg=i
        },
        //控制显示隐藏
        showbannerRigth(){
            var showbannerRigth = document.getElementsByClassName('bannerRigth')[0]
            showbannerRigth.style.display='none';
            this.isClassBg=null
        },
        //获取窗口的宽度
        getListLeng(){
            this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
            var ul = document.getElementsByClassName('ullist')[0]
            var length = ul.children.length
            ul.style.width=length*230+'px'
            this.runTimeout(ul,this.boxWidth,length)
        },
        //轮播效果
        runTimeout(ul,boxWidth,length){
            let that = this
            this.timer=setInterval(function(){
                // move();
                
                that.move(ul,boxWidth,length)
            },50)	
        },
        //轮播图走的方法
        move(ul,boxWidth,length){
            var num = this.left--
            var allWidth =length*230-boxWidth
            if(Math.abs(num)>allWidth){
                ul.style.left=0+'px'
                this.left=0
            }
            ul.style.left=num+'px'
        },
        //移入
        beginTimeout(){
            clearInterval(this.timer)
        },
        //移出
        clearTimeout(){
            clearInterval(this.timer)
            this.timer = null
            this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
            let ul = document.getElementsByClassName('ullist')[0]
            let length = ul.children.length
            ul.style.width=length*230+'px'
            this.runTimeout(ul,this.boxWidth,length)
        },
        toDataListDetais(name,id,label){
            if(label == 2){
                this.$router.push(`/yearsData?type=${name}&id=${id}`)

            }else{
                this.$router.push(`/orderDetails?type=${name}`)
            }
            // if(this.$store.getters.token){
            //     this.$router.push(`/orderDetails?type=${name}`)
            // }else{
            //     this.$confirm('暂无权限，请先登录', '提示', {
            //         confirmButtonText: '确定',
            //         cancelButtonText: '取消',
            //         type: 'warning'
            //     }).then(() => {
            //         this.$router.push("/login")
            //     }).catch(()=>{
            //         this.$router.push("/login")
            //     })
            // }
        }
    },
    mounted(){
        getSwiperList().then(res=>{
            this.bannerList = res.data
        })
        this.getListLeng()
        window.onresize = () => {
            return (() => {
                this.boxWidth = document.getElementsByClassName('box')[0].offsetWidth
            })()
        }
       
    },
    //页面销毁的时候 关闭定时器
    destroyed () {
        clearInterval(this.timer)
    }
}
</script>
<style lang="scss" scoped>
   .homePageCenter{
        height:140px;
        .centerTop{
            height:100px;
            padding-top:20px;
            >div{
                text-align: center;
                width:15%;
                height:80px;
            }
            .phoneImg{
                display: flex;
                align-items: center;
                color:#6C6C6C;
                // font-size:22px;
                .qrcodeImg{
                    width:85px;height:85px;margin-left: 10px;
                    background-image: url('../../assets/images/qrcodeImg.jpg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }
        @media screen and (max-width: 1280px){
            .centerBottom{
                height:40px;
                display: flex;
                line-height: 40px;
                color:#1e50ae;
                font-weight: 500;
                .dataAnalysis{
                    width:160px;
                    color:#ffffff;
                    background:#1e50ae;
                    text-align: center;
                }
                .dataType{
                    padding:5px 40px;
                    border-right:1px solid #1e50ae;
                    cursor: pointer;
                }
            }
        }
        @media screen and (min-width: 1280px){
            .centerBottom{
                height:40px;
                display: flex;
                line-height: 40px;
                color:#1e50ae;
                font-weight: 700;
                .dataAnalysis{
                    width:15%;
                    color:#ffffff;
                    background:#1e50ae;
                    text-align: center;
                }
                .dataType{
                    padding:5px 40px;
                    border-right:1px solid #1e50ae;
                    cursor: pointer;
                }
            }
        }
   }
   .homePageSwipper{
       height:500px;
        @media screen and (min-width: 1280px) {
        .bannerList{
            position: relative;
            top:-500px;
            z-index: 9;
            height:500px;
            width:80%;
            .oneDataInfor{
                width:15%;
                line-height: 40px;
                color:#ffffff;
                background:rgba(5, 5, 5,.3);
                text-indent: 30px;
                cursor: pointer;
            }
            .hoverBg{
                background:rgb(5, 5, 5)
            }
            .bannerRigth{
                position: absolute;
                left:15%;;
                top:0;
                z-index: 9999;
                display: none;
                background:#fff;
                width:80%;
                padding:10px 20px;
                transform:all 2s;
            }
            .showBannerRigth{
                    display: block !important;
                    transform:all 2s;
                    width:80%;
            }
            .bannerRigthCon{
                display: flex;
                flex-direction:column;
                margin-bottom:3px;
                .bannerRightTop{
                    border-bottom:1px solid #E6E6E6;
                    padding:10px 0;
                }
            }
            .bannerLeft{
                width:70%;
                font-size:14px;
                .hoverTitle{
                    margin-right:8px;line-height:14px;cursor:pointer;
                }
                .hoverTitle:hover{
                    color:#FF8844;
                    font-size:16px;
                    transition: all .2s;
                }
            }
            .bannerRightImg{
                padding:10px 0;
                width:20%;
                div{
                    width:100%;
                    height:40%;
                    margin:10px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
        }
        @media screen and (max-width: 1280px) {
        .bannerList{
            position: relative;
            top:-500px;
            z-index: 9;
            height:500px;
            width:98%;
            .oneDataInfor{
                width:160px;
                line-height: 40px;
                color:#ffffff;
                background:rgba(5, 5, 5,.3);
                text-indent: 10px;
                font-size: 14px;;
                cursor: pointer;
            }
            .hoverBg{
                background:rgb(5, 5, 5)
            }
            .bannerRigth{
                position: absolute;
                left:160px;;
                top:0;
                z-index: 9999;
                display: none;
                background:#fff;
                width:80%;
                padding:10px 20px;
                transform:all 2s;
                height:500px;
            }
            .showBannerRigth{
                    display: block !important;
                    transform:all 2s;
                    width:80%;
            }
            .bannerRigthCon{
                display: flex;
                flex-direction:column;
                margin-bottom:3px;
                .bannerRightTop{
                    border-bottom:1px solid #E6E6E6;
                    padding:6px 0;
                }
            }
            .bannerLeft{
                width:80%;
                font-size:14px;
                .hoverTitle{
                    margin-right:8px;line-height:20px;cursor:pointer;
                }
                .hoverTitle:hover{
                    color:#FF8844;
                    font-size:16px;
                    transition: all .2s;
                }
            }
            .bannerRightImg{
                padding:10px 0;
                width:15%;
                div{
                    width:100%;
                    height:40%;
                    margin:10px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
        }
   }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .homePageBottom{
    //   padding:40px 0 500px 0;
    //   background: url("../../assets/images/bg_img.png");
    //   background-size: 100% 100%;
    //   background-repeat: no-repeat;
    .commonTitle{
        text-align: center;
        height:226px;
        padding-top:100px;
        h3{
            font-size:30px;
            margin-bottom: 10px;
        }
        span{
            color:#666666
        }
    }
      .homePageTit{
          display: flex;
          font-weight: bold;
          color:#1e50ae;
          align-items: center;
          margin-bottom:20px;
          p{
              margin:0 10px;
          }
          span{
              color:#999999;
              font-weight: normal;
          }
      }
      .bottomSwiper{
          height:490px;
          ul{
              display: flex;
              flex-wrap: wrap;
              li{
                  width:20%;
                  height:50%;
                  img{
                      width:100%;
                      height:242px;
                  }
              }
          }
      }
      .newInfor{
          width:285px;height:377px;background:#fff;
          box-shadow: 0px 8px 9px 0px rgba(0, 0, 0, 0.2);
          .newInforImg{
              width:285px;height:180px;
              margin-bottom:36px;
              overflow: hidden;
              img{width:100%;transition: all 0.6s;}
              img:hover{transform: scale(1.1);}

          }
          .newInforDetail{
              text-align: center;

              h4{
                  font-size: 20px;
                  margin:20px 0 12px;
              }
              p{
                font-size: 18px;
                color:#777C92;
              }
          }
      }
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .box{
       height:230px;
       margin: 0 auto;
       position: relative;
       overflow: hidden;
       ul{
           position: absolute;
       }
       li{
           float: left;
           height:230px;
            width:230px;
           img{
               height:230px;
                width:230px;
           }
       }
   }
   
   .swiperInfor{
       text-align: center;
       margin:30px 0;
   }
   .bgImg{
        height:220px;
        background:url('../../assets/images/common.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .swiperText{
        padding:0 35px;line-height: 22px;
    }
    .swierInforItem{
        box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.2);
        border-radius:6px;
        height:540px;
        // border:1px solid rgba(0, 0, 0, 0.14)
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #fff;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #fff;
    }
    .displayPic{
        display: flex;
        justify-content: space-between;
        .picItem{
            position: relative;
            span{
                background:rgba(0,0,0,.4);
                height:40px;
                display: block;
                position: absolute;
                bottom:5px;
                color: #fff;
                font-size: 12px;
                width:100%;
                line-height: 40px;
                text-align: center;
                display: none;
            }
        }
        .picItem:hover span{
              display:block  
        }

    }
</style>