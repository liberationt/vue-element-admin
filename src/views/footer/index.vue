<template>
    <div class="homeBottom">
        <div class="mainWidth display bottomTop">
            <div>
                <h3>关于我们</h3>
                <div class="bottomStyle">
                    <span>本公司致力于各行业数据资源整合，让个人以及企业用户</span>
                    <span>节省时间和人力成本，提高调研统计效率。</span>
                    <span>由于数据资源丰富，费用低廉上线以来，深受用户青睐，</span>
                    <span>为此我们会更加努力的为您提供更具有性价比的服务。</span>
                </div>
            </div>
            <div>
                <h3>快速定制</h3>
                <div class="bottomStyle">
                    <span>专属APP定制</span>
                    <span>微信小程序定制</span>
                    <span>专属网站定制</span>
                </div>
            </div>
            <div>
                <h3>栏目分类</h3>
                <div class="bottomStyle"> 
                    <span>分类查询</span>
                    <span>数据超市</span>
                    <span>API超市</span>
                </div>
            </div>
            <div>
                <h3>官方公众号</h3>
                <div class="ewmCode"></div>
                <span>扫一扫，关注公众号</span>
            </div>
        </div>
        <div class="mainWidth bottomBottom">
            内蒙古易恒网络科技有限责任公司版权所有  
            <a style="cursor:pointer" href="http://www.beian.miit.gov.cn">蒙ICP备20002589号</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .homeBottom{
       height:300px;background:#181818;color:#fff;
       font-size:14px;
       padding-top:45px;
       .bottomTop{
           border-bottom:1px solid #fff;
           padding-bottom:20px;
       }
       h3{
           font-size:16px;
           margin-bottom:30px;
       }
       .bottomStyle{
           display: flex;
           flex-direction: column;
           span{
               line-height: 30px;
           }
       }
       .ewmCode{
           width:100px;
           height:100px;
           border-radius: 10px;
           background:#fff;
           margin-bottom:20px;
       }
       .bottomBottom{
           text-align: center;
           line-height: 64px;
       }
       
   }
   @media screen and (max-width: 1280px){
       .homeBottom{
           width:1280px;
       }
   }
</style>