<template>
    <div>
        <div style="height:107px;">
            <div class="mainWidths">
                <div class="orderTop">
                    <span></span>
                    <span class="logoTit">智能化数据整合平台</span>
                </div>
            </div>
        </div>
        <div class="content" style="background:#e2e6ef">
            <div class="mainWidths orderContent">
                <div class="functionButton">
                    <!-- <el-input placeholder="请输入关键词" v-model="serch" clearable style="width:240px;"></el-input> -->
                    <el-button type="primary" icon="el-icon-s-shop" @click="queryList">显示数据</el-button>
                    <el-button type="primary" icon="el-icon-refresh">转换行列</el-button>
                    <el-button type="primary" icon="el-icon-bottom">下载</el-button>
                </div>
                <div class="orderInfor" element-loading-text="拼命加载中" v-loading="showLoading">
                    <div v-if="flag">
                    <div class="dataLeft">
                        <div>
                            <div class="isShowClass display" @click="isShowClick">
                                <span>基本信息</span>
                                <span>
                                    <i class="el-icon-arrow-right" v-if="!isShow"></i>
                                    <i class="el-icon-arrow-down" v-else></i>
                                </span>
                            </div>
                            <div style="display:flex;margin-bottom:10px;" v-if="isShow">
                                <div class="orderInofCheek">
                                    <h5 style="border-bottom:1px solid #F2F2F2;padding-bottom:10px;">基本信息</h5>
                                    <div class="inforDetail" v-for="(item,index) in baseDateList" :key="index">
                                        <span style="font-size:14px;">{{item.label}}</span>
                                        <div class="displayFlex" style="margin-top:5px;">
                                            <el-input placeholder="请输入内容" v-model="baseDateInfor[index].baseDateInfor" clearable style="margin-right:10px"></el-input>
                                            <el-checkbox :indeterminate="isIndeterminate[index].isIndeterminate" v-model="checkAll[index].checkAll" @change="handleCheckAllChange(index,isIndeterminate[index].isIndeterminate)">全选</el-checkbox>
                                        </div>
                                        <div class="inforDetailCheck">
                                            <el-checkbox-group v-model="baseDateInfor[index].baseDateInforList" @change="changeBaseDate(index,baseDateInfor[index].baseDateInforList)">
                                                <el-checkbox :label="items" v-for="(items,i) in filterData[index]" :key="i"></el-checkbox>
                                            </el-checkbox-group>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkData">
                                    <h5 style="border-bottom:1px solid #F2F2F2;padding-bottom:10px;">已选基本信息</h5>
                                    <div class="chooseInfor">
                                        <div v-for="(item,i) in chooseList" :key="i">
                                            <span style="cursor:pointer" @click="removeItem(item,i)"><i class="el-icon-delete"></i></span>
                                            <span>{{item}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                        <div class="isShowClass display" style="background:#ffeed4" @click="isShowClicks">
                            <span>指标信息</span>
                            <span>
                                <i class="el-icon-arrow-right" v-if="!isShows"></i>
                                <i class="el-icon-arrow-down" v-else></i>
                            </span>
                        </div>
                        <div style="display:flex" v-if="isShows">
                            <div class="orderInofCheek bgorderInofCheek">
                                <h5 style="border-bottom:1px solid #F2F2F2;padding-bottom:10px;">指标信息</h5>
                                <div class="inforDetail">
                                    <div class="displayFlex">
                                        <el-input placeholder="请输入内容" v-model="tagetDateInfors" clearable style="margin-right:10px"></el-input>
                                        <el-checkbox :indeterminate="isIndeterminates" v-model="checkTagAll" @change="handleCheckTagAllChange(isIndeterminates)">全选</el-checkbox>
                                    </div>
                                    <div class="inforDetailCheck inforTargetCheck">
                                        <el-checkbox-group v-model="tagetDateInfor" @change="changeTargetDate">
                                            <el-checkbox :label="item" v-for="(item,i) in targetListInfo" :key="i">{{item}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </div>
                            </div>
                            <div class="checkData">
                                <h5 style="border-bottom:1px solid #F2F2F2;padding-bottom:10px;">已选指标信息</h5>
                                <div class="chooseInfor">
                                    <div v-for="(item,i) in chooseTargetList" :key="i">
                                        <span style="cursor:pointer" @click="removetargetItem(item,i)"><i class="el-icon-delete"></i></span>
                                        <span>{{item}}</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                    <div class="tableData" v-if="flag">
                        <div class="progress">
                            <div style="margin-bottom:20px;color:red">收费说明：1积分/值，缺失值部分不计费，基本信息内容不计费，指标字段标题不计费，高级会员不计费</div>
                        </div>
                        <el-table
                            :header-cell-style="{background:'#A6DAFE'}"
                            :cell-style="cellStyle"
                            v-loading="loading"
                            :data="tableData"
                            style="width: 100%"
                            @selection-change="handleSelectionChange"
                            :row-class-name="tableRowClassName">
                            <el-table-column type="selection" width="55" v-if="formData.length"></el-table-column>
                            <el-table-column v-for="(item,i) in formData" :key="i" show-overflow-tooltip :prop="item.value" :label="item.label" min-width="180"></el-table-column>
                        </el-table>
                        <div>
                            <el-pagination class="pagination"
                                background
                                v-if="formData.length"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="params.page"
                                :page-sizes="[30, 40,50,100]"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                            </el-pagination>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getOrderList,getOrderDetailList,getOrdeInfo,getField} from "@/api/homePage"
import _ from "lodash"
export default {
    data(){
        return{
            activeName:['1'],
            serch:'',
            isShow:true,
            isShows:false,
            loading:true,
            params:{
               query:'',
                page:1,
                size:30,
                search:{},
                target:[]
            },
            total:0,
            percentage:0,
            formData:[],
            flag:false,
            //基本信息
            baseDateList:[],
            chooseList:[],
            chooseTargetList:[],
            tagetDateInfor:[],
            baseDateInfor:[], 
            baseDateInforList:[],
            isIndeterminate:[],
            isIndeterminates:true,
            checkAll:[],
            tagetDateInfors:"",
            checkTagAll:false,
            tableData: [],
            targetList:[],
            targetSearchList:[],
            startData:null,
            showLoading:false
        }
    },
     computed:{
        filterData(){
            let arrList =[]
            this.baseDateList.forEach((item,i)=>{
                arrList.push([])
                item.value.forEach((items,key)=>{
                    if(items.indexOf(this.baseDateInfor[i].baseDateInfor)!=-1){
                        arrList[i].push(items)
                    }
                })
            })
            return arrList
        },
        targetListInfo(){
            let arrList =[]
            this.targetList.map(item=>{
                if(item.indexOf(this.tagetDateInfors)!=-1){
                    arrList.push(item)
                }
            })
            return arrList;
        }
    },
    methods:{
        cellStyle({row, column, rowIndex, columnIndex}){
            if((rowIndex%2)==0){
                return 'background:#DFEFFF'
            }else{
                return "background:#ffeed4"
            }
        },
        isShowClick(){
            this.isShow=!this.isShow
        },
        isShowClicks(){
            this.isShows=!this.isShows
        },
        //分页
        handleSizeChange(value){
            this.params.size=value
            this.params.page =1
            this.queryList()
        },
        handleCurrentChange(value){
            this.params.page = value
            this.queryList()
        },
        handleSelectionChange(value){
        },
        //显示数据
        queryList(){
            if(this.$store.getters.token){
                let dataList = []
                let targetList=[]
                let params = {}
                let target = []
                this.formData=[]
                this.loading = true
                this.baseDateInfor.forEach((item,i)=>{
                    if(item.baseDateInforList&&item.baseDateInforList.length){
                        let obj ={}
                        obj[item.filterName+'__in'] = item.baseDateInforList
                        dataList.push(obj)
                    }
                })
                dataList.forEach((item,i)=>{
                    params[Object.keys(item)] = Object.values(item)[0]
                })
                const newArr = _.cloneDeep(this.params)
                if(this.chooseTargetList.length){
                    this.targetSearchList.forEach((item,i)=>{
                        this.chooseTargetList.forEach((items,key)=>{
                            if(item.name==items){
                            targetList.push(item.label)
                            }
                        })
                    })
                }
                if(targetList.length){
                    newArr.target=JSON.stringify(targetList)
                }
                newArr.search = params
                getOrderDetailList(newArr).then(res=>{
                    if(res.code=='200'){
                        this.loading = false
                        this.tableData = res.content
                        this.total = res.total
                        //处理动态表头
                        var data = [];           
                        for (let i in res.field_name) {
                            let o = {};
                            o[i] = res.field_name[i];
                            data.push(o)
                        }
                        let key = {}
                        data.forEach(item=>{
                            let obj={
                                value:Object.keys(item).join(','),
                                label:Object.values(item).join(',')
                            }
                            this.formData.push(obj)
                        })
                    }
                }).catch(err=>{
                    console.log(err)
                    this.loading = false
                })
            }else{
                this.$confirm('暂无权限，请先登录', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push("/login")
                }).catch(()=>{
                    this.$router.push("/login")
                })
            }
        },
        changeBaseDate(index,value){
            //选择的时候清空
            this.chooseList = []
            //判断 防止为空的时候 全选bug
            if(value&&value.length){
                let checkedCount = value.length;
                this.checkAll[index].checkAll = checkedCount === this.baseDateList[index].value.length;
                this.isIndeterminate[index].isIndeterminate = checkedCount > 0 && checkedCount < this.baseDateList[index].value.length;
            }else{
                this.checkAll[index].checkAll = false
                this.isIndeterminate[index].isIndeterminate=true
            }
            this.baseDateInfor.forEach(item=>{
                this.chooseList=this.chooseList.concat(item.baseDateInforList)
            })
        },
        changeTargetDate(value){
            this.chooseTargetList = []
            if(value&&value.length){
                let checkedCount = value.length;
                this.checkTagAll = checkedCount===this.targetList.length
                this.isIndeterminates = checkedCount>0&&checkedCount<this.targetList.length
            }else{
                this.checkTagAll = false
                this.isIndeterminates = true
            }
            this.chooseTargetList=value
        },
        handleCheckAllChange(index,value) {
            //全选的时候清空
            this.chooseList=[]
            this.baseDateInfor[index].baseDateInforList = value ? this.baseDateList[index].value:[]
            //全选的时候重新赋值
            this.baseDateInfor.forEach(item=>{
                this.chooseList=this.chooseList.concat(item.baseDateInforList)
            })
            this.isIndeterminate[index].isIndeterminate=!value
        },
        handleCheckTagAllChange(value){
            let targetList = _.cloneDeep(this.targetList)
            this.chooseTargetList = []
            this.tagetDateInfor = value ?targetList:[]
            this.chooseTargetList = value? targetList:[]
            this.isIndeterminates  = !value
        },
        removeItem(type,i){
            //列表清空给
            this.chooseList.splice(i,1)
            //定义一个新的 防止数组删除时的bug
            let baseDateInfor = _.cloneDeep(this.baseDateInfor)
            baseDateInfor.forEach((item,key)=>{
                if(item.baseDateInforList&&item.baseDateInforList.length){
                    item.baseDateInforList.forEach((items,i)=>{
                        if(items.indexOf(type)>-1){
                            item.baseDateInforList.splice(i,1)
                        }
                    })
                    //避免删除时 反全选问题 
                    if(item.baseDateInforList.length==this.baseDateList[key].value.length){
                        this.checkAll[key].checkAll = true
                        this.isIndeterminate[key].isIndeterminate=false
                    }else{
                        this.checkAll[key].checkAll = false
                        this.isIndeterminate[key].isIndeterminate=true
                    }
                }
            })
            //清空的同时把左边已选择的清掉
            this.baseDateInfor = baseDateInfor
        },
        removetargetItem(type,i){
            this.chooseTargetList.splice(i,1)
            if(this.chooseTargetList.length==this.targetList.length){
                 this.checkTagAll = true
                this.isIndeterminates = false
            }else{
                this.checkTagAll = false
                this.isIndeterminates = true
            }
        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
            return 'warning-row';
            } else if (rowIndex === 3) {
            return 'success-row';
            }
            return '';
        },
        getOrder(form){
            this.showLoading = true
            this.formData=[]
            this.baseDateList=[]
            this.baseDateInfor=[]
            this.loading = true
            getOrderList(form).then(res=>{
                if(res.code=="200"){
                    this.showLoading = false
                    this.flag=true
                    this.loading = false
                    this.tableData = res.content
                    this.total = res.total
                    //处理动态表头
                    var data = [];           
                    for (let i in res.field_name) {
                        let o = {};
                        o[i] = res.field_name[i];
                        data.push(o)
                    }
                    let key = {}
                    data.forEach(item=>{
                        let obj={
                            value:Object.keys(item).join(','),
                            label:Object.values(item).join(',')
                        }
                        this.formData.push(obj)
                    })
                    if(res.filter){
                        //处理基本信息筛选赋值
                        res.filter.forEach((item,i)=>{
                            let params ={
                                query:this.params.query,
                                field:item.field
                            }
                            getField(params).then(res=>{
                                if(res.code==200){
                                    let dataObj={
                                        baseDateInfor:'',
                                        baseDateInforList:[],
                                        filterName:item.field
                                    }
                                    let obj ={
                                        value:res.data,
                                        label:item.field_name
                                    }
                                    this.baseDateList.push(obj)
                                    this.baseDateInfor.push(dataObj)
                                }
                            })
                            //处理基本信息赋值
                            let obj ={
                                // value:Object.values(item)[0],
                                // label:Object.keys(item)[0],
                                value:item.field,
                                label:item.field_name
                            }
                            // let dataObj={
                            //     baseDateInfor:'',
                            //     baseDateInforList:[],
                            //     filterName:Object.values(item)[1]
                            // }
                            let checkAll ={
                                checkAll:false
                            }
                            let isIndeter ={
                                isIndeterminate:true
                            }
                            // this.baseDateList.push(obj)
                            //处理动态绑定筛选
                            // this.baseDateInfor.push(dataObj)
                            //处理动态全反选
                            this.checkAll.push(_.cloneDeep(checkAll))
                            this.isIndeterminate.push(isIndeter)
                        })
                    }
                    if(res.filter_target){
                        res.filter_target.forEach(item=>{
                            this.targetList.push(
                                item.field_name,
                            )
                            this.targetSearchList.push(
                                {
                                    name:item.field_name,
                                    label:item.field
                                }
                            )
                        })
                    }   
                }
            }).catch(err=>{
                this.showLoading = false
            })
        }
    },
   
    mounted(){
        this.params.query = this.$route.query.type
        this.getOrder(this.params)
    }
}
</script>
<style lang="scss" scoped> 
    .orderTop{
        line-height: 107px;
    }
    .logoTit{
        font-size: 30px;
        color:#275FFE;
    }
    .orderContent{
        padding:20px 0;
    }
    @media screen and (max-width: 1440px){
       .orderContent{
           width:1440px;
       }
    }
    .functionButton{
        height:100px;
        background:#fff;
        line-height: 100px;
        padding-left:30px;
        margin-bottom:10px;
    }
    .orderInfor{
        padding:30px 0;
        background:#fff;
        min-height: 800px;
        border:1px solid #f2f2f2;
        .orderInofCheek{
            width:260px;
            background:#DFEFFF;
            padding:30px 10px;
        }
        .dataLeft{
            width:510px;
            float: left;
            background: #fff;
            
        }
        .bgorderInofCheek{
            background: #ffeed4;
        }
        .inforDetail{
            margin-top:10px;
            background:#fff;
            padding:7px;
            .inforDetailCheck{
                margin-top:6px;
                height:120px;
                overflow: auto;
                padding:10px 0;
            }
            .inforTargetCheck{
                height:160px;
            }
        }
        .checkData{
            padding:30px 10px;
            width:220px;
            margin:0 15px;
            border: 1px solid #f2f2f2;
            background:#fff;
            .chooseInfor{
                div{
                    margin-top:10px;
                }
            }
        }
        .tableData{
            background:#fff;
            overflow: auto;
            padding:0 30px;
            min-width: 400px;
            overflow: auto;
        }
    }
    .pagination{
        margin-top:20px;
        float:right;
    }
    // .progress{
    //     width:70%;
    //     margin:100px auto 0;
    //     text-align: center;
    // }
    .isShowClass{
        background:#DFEFFF;margin-right:15px;cursor:pointer;height:50px;line-height:50px;
        margin-bottom:5px;padding: 0 5px;
    }
</style>