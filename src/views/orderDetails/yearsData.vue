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
                <div class="baseContent">
                    <div class="baseInfor">
                        <div :class="index==1?'sgyBlue':''" @click="showBase(1)">指标</div>
                        <div :class="index==2?'sgyBlue':''" @click="showBase(2)">时间</div>
                        <div :class="index==3?'sgyBlue':''" @click="showBase(3)">地区</div>
                    </div>
                    <div class="baseInforRight">
                        <div class="baseContentCenter" v-if="showTable">
                            <div style="display:flex;" v-show="index==1">
                                <div class="baseStyle">
                                    <div class="titleInfor">
                                        <div>
                                            <span>指标</span>
                                            <span><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></span>
                                        </div>
                                        <div>
                                            <el-input v-model="targetFilterText" placeholder="请输入内容" style="width:300px" clearable>
                                                <el-button slot="append" icon="el-icon-search"></el-button>
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="baseTree">
                                        <!-- <el-tree
                                            class="my-tree"
                                            :data="dataList"
                                            show-checkbox
                                            default-expand-all
                                            :default-expanded-keys="defaultTargetCheackList"
                                            :filter-node-method="filterNode"
                                            node-key="id"
                                            ref="tree"
                                            highlight-current
                                            :check-strictly = "false"
                                            @check-change="handleCheckChange"
                                            ></el-tree>  -->
                                         <el-tree
                                            class="my-tree"
                                            ref="tree"
                                            :data="dataList"
                                            :props="props"
                                            :load="loadNode"
                                            :default-expanded-keys="defaultTargetCheackList"
                                            :filter-node-method="filterNode"
                                            lazy
                                            node-key="id"
                                            show-checkbox
                                            @check-change="handleCheckChange"
                                            />
                                    </div>
                                </div>
                                <div class="baseStyle" style="margin-left:5px;">
                                    <div class="titleInfor">
                                        <div>
                                            <span>已选指标</span>
                                        </div>
                                    </div>
                                    <div class="baseTree cheackData">
                                        <el-checkbox-group v-model="checkTargetListData">
                                            <el-checkbox :label="item.id" v-for="(item,i) in checkTargetList" :key="i">{{item.name}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </div>
                           </div>
                           <div style="display:flex;" v-show="index==2">
                                <div class="baseStyle">
                                    <div class="titleInfor">
                                        <div>
                                            <span>时间</span>
                                            <span><el-checkbox :indeterminate="timeisIndeterminate" v-model="checkTimeAll" @change="handleCheckTimeAllChange">全选</el-checkbox></span>
                                        </div>
                                        <div>
                                            <el-input v-model="timeFilterText" placeholder="请输入内容" style="width:300px" clearable>
                                                <el-button slot="append" icon="el-icon-search"></el-button>
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="baseTree">
                                        <el-tree
                                            class="my-tree"
                                            :data="timeDataList"
                                            show-checkbox
                                            default-expand-all
                                            :default-expanded-keys="defaultTimeCheackList"
                                            :filter-node-method="timefilterNode"
                                            node-key="id"
                                            ref="timetree"
                                            highlight-current
                                            :check-strictly = "false"
                                            @check-change="handleCheckTimeChange">
                                        </el-tree>
                                    </div>
                                </div>
                                <div class="baseStyle" style="margin-left:5px;">
                                    <div class="titleInfor">
                                        <div>
                                            <span>已选时间</span>
                                        </div>
                                    </div>
                                    <div class="baseTree cheackData">
                                        <el-checkbox-group v-model="checkTimeListData">
                                            <el-checkbox :label="item.id" v-for="(item,i) in checkTimeList" :key="i">{{item.label}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </div>
                           </div>
                           <div style="display:flex;" v-show="index==3">
                                <div class="baseStyle">
                                    <div class="titleInfor">
                                        <div>
                                            <span>国家</span>
                                            <span><el-checkbox :indeterminate="areaisIndeterminate" v-model="checkAreaAll" @change="handleCheckAreaAllChange">全选</el-checkbox></span>
                                        </div>
                                        <div>
                                            <el-input v-model="areaFilterText" placeholder="请输入内容" style="width:300px" clearable>
                                                <el-button slot="append" icon="el-icon-search"></el-button>
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="baseTree">
                                        <el-tree
                                            class="my-tree"
                                            :data="areaDataList"
                                            show-checkbox
                                            default-expand-all
                                            :default-expanded-keys="defaultAreaCheackList"
                                            :filter-node-method="areafilterNode"
                                            node-key="id"
                                            ref="areatree"
                                            highlight-current
                                            :check-strictly = "false"
                                            @check-change="handleCheckAreaChange">
                                        </el-tree>
                                    </div>
                                </div>
                                <div class="baseStyle" style="margin-left:5px;">
                                    <div class="titleInfor">
                                        <div>
                                            <span>已选国家</span>
                                        </div>
                                    </div>
                                    <div class="baseTree cheackData">
                                        <el-checkbox-group v-model="checkAreaListData">
                                            <el-checkbox :label="item.id" v-for="(item,i) in checkAreaList" :key="i">{{item.label}}</el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </div>
                           </div>
                        </div>
                        <div v-else class=""baseInforTable>
                            <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="指标"
                                >
                            </el-table-column>
                            <el-table-column
                                prop=""
                                label="时间"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="国家">
                            </el-table-column>
                              <el-table-column
                                prop="source_name"
                                label="来源">
                              </el-table-column>
                              <el-table-column
                                prop="introduce"
                                show-overflow-tooltip
                                label="介绍">
                              </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {getYearsData,getYears,getYearsList} from "@/api/homePage"
import qs from 'qs'
export default {
        data(){
        return{
            dataList:[],
            tableData: [],
            index:1,
            isIndeterminate:true,
            checkAll:false,
            showTable:true,
            checkTargetList:[],
            checkTargetListData:[],
            //指标
            defaultTargetCheackList:[],
            isTargetminate:true,
            targetAll:false,
            targetFilterText:'',
            chackTargetDataList:[],
            props:{
                label: 'name',
                children: 'content',
                isLeaf: 'is_end'
            },
            params:{
                query:'',
                obj_id:''
            },
            checkTimeAll:false,
            timeFilterText:"",
            timeisIndeterminate:true,
            timeDataList:[],
            defaultTimeCheackList:[],
            checkTimeList:[],
            checkTimeListData:[],
            //地区
            checkAreaAll:false,
            areaFilterText:"",
            areaisIndeterminate:true,
            areaDataList:[],
            defaultAreaCheackList:[],
            checkAreaList:[],
            checkAreaListData:[],
            dataInfor:[]
        }
    },
     watch: {
      targetFilterText(val) {
        this.$refs.tree.filter(val);
      },
      timeFilterText(val){
        this.$refs.timetree.filter(val);
      },
      areaFilterText(val){
        this.$refs.areatree.filter(val);
      },
    },
    methods:{
        //指标
        loadNode(node, resolve){
            if (node.level === 0) {
                getYearsData(this.params).then(res => {
                    if (res.content && res.content.length) {
                        this.chackTargetDataList = res.content
                        return resolve(res.content)
                    }
                })
            } else {
                getYearsData({ query: node.data.name, obj_id: node.data.obj_id }).then(res => {
                if (res.content && res.content.length) {
                    res.content.forEach(item => {
                        if(item.is_end===true){
                            this.dataInfor.push(item.id)
                        }
                    })
                    return resolve(res.content)
                } else {
                    return resolve([])
                }
                })
            }
        },
        queryList(){
            let query =[]
            let obj_id = []
            let date_list = []
            if(this.checkTargetList&&this.checkTargetList.length){
                this.checkTargetList.forEach(item=>{
                    query.push(item.name)
                    obj_id.push(item.obj_id)
                })

            }
            if(this.checkTimeList &&this.checkTimeList.length){
                this.checkTimeList.forEach(item=>{
                    date_list.push(item.label)
                })
            }
            // query=query.join(','),
            // obj_id=obj_id.join(','),
            // date_list=date_list.join(',')
            let params = {
              query:query.length?query.join(','):'',
              obj_id:obj_id.length?obj_id.join(','):'',
              date_list:date_list.length?date_list.join(','):''
            }
            getYearsList(params).then(res=>{
                if(res.code==200){
                    this.showTable = false
                    this.tableData = res.content
                }
            })
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.name.indexOf(value) !== -1;
        },
        handleCheckAllChange(val){
            this.checkAll = val
            if(val===true){
                this.isIndeterminate = false
                // this.$refs.tree.setCheckedNodes(this.chackTargetDataList)
                // this.checkTargetList = this.$refs.tree.getCheckedNodes()
                this.$refs.tree.setCheckedKeys(this.dataInfor)
                // this.checkTargetList = this.$refs.tree.getCheckedKeys()
                this.checkTargetList = this.$refs.tree.getCheckedNodes(true)
            }else{
                this.inverse()
                this.$refs.tree.setCheckedKeys([])
                this.checkTargetList = []
            }
        },
        handleCheckChange(val,item){
            this.checkTargetList = this.$refs.tree.getCheckedNodes(true)
            // this.checkTargetList=this.$refs.tree.getCheckedKeys(true);
        },
        // 反选
        inverse() {
            this.$refs.tree.setCheckedNodes([])
        },
        //时间
        setCheckedTimeKeys(){
            this.$refs.timetree.setCheckedNodes(this.timeDataList)
        },
        handleCheckTimeAllChange(val){
            this.checkTimeAll = val
            if(val===true){
                this.timeisIndeterminate = false
                this.setCheckedTimeKeys()
                this.checkTimeList = this.$refs.timetree.getCheckedNodes(true)
            }else{
                // this.inverse()
                this.$refs.timetree.setCheckedNodes([])
                this.checkTimeList = []
            }
        },
        timefilterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleCheckTimeChange(val,item){
            this.checkTimeList = this.$refs.timetree.getCheckedNodes(true)
        },
        //地区

        setCheckedAreaKeys(){
            this.$refs.areatree.setCheckedNodes(this.areaDataList)
        },
        handleCheckAreaAllChange(val){
            this.checkAreaAll = val
            if(val===true){
                this.areaisIndeterminate = false
                this.setCheckedAreaKeys()
                this.checkAreaList = this.$refs.areatree.getCheckedNodes(true)
            }else{
                this.$refs.areatree.setCheckedNodes([])
                this.checkAreaList = []
            }
        },
        areafilterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleCheckAreaChange(val,item){
            this.checkAreaList = this.$refs.areatree.getCheckedNodes(true)
        },

        showBase(num){
            this.showTable = true
            this.index = num
        },
        getData(){
            getYearsData(this.params).then(res=>{
                if(res.code==200){
                }
            })
        },
        getYearTarget(){
            getYears({}).then(res=>{
                if(res.code==200){
                    if(res.date&&res.date.length){
                        res.date.forEach((item,i) => {
                            this.timeDataList.push({
                                id:i,
                                label:item,
                                children:[]
                            })
                        });
                    }
                    if(res.city_list&&res.city_list.length){
                        res.city_list.forEach((item,i)=>{
                            this.areaDataList.push({
                                id:i,
                                label:item,
                                children:[]
                            })
                        })
                    }
                }
            })
        }
    },
    mounted(){
        this.params.query = this.$route.query.type
        this.params.obj_id = this.$route.query.id
        this.getYearTarget()
        // this.getData()
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
    .baseInfor{
        background:#fff;width:10%;text-align:center;line-height:40px;cursor: pointer;
        min-height: calc( 100vh - 285px);margin-right:5px;
        div:hover{
            background:#ecf5ff;
        }
        .sgyBlue{
            background:#d3e9ff;
            color: #000;
            font-weight: 700;
        }
        .sgyBlue:hover{
            background:#d3e9ff;
        }
    }
    @media screen and (max-width: 1440px){
      .baseInfor{
        width:140px;
      }
      .baseInforRight{
        width:1290px !important;
      }
    }
    .baseContent{
        display: flex;
        .titleInfor{
            height:50px;background:#fff;
            line-height: 50px;padding:0 20px;display: flex;
            justify-content:space-between;margin-bottom:5px;
        }
        .baseInforRight{
          width:90%;
          background:#fff;
          min-height: calc( 100vh - 285px);
        }
        .baseContentCenter{
          width:100%;
            .baseTree{
                height:calc(100vh - 340px);
                background:#fff;
                overflow: auto;
            }
            .cheackData{
                padding:10px;
                .el-checkbox-group{
                    display: flex;
                    flex-direction: column;
                    line-height: 25px;
                }
            }
            .baseStyle{
                width:50%;
            }
        }
        .baseInforTable{
          width:100%;
          background: #fff;
        }
        @media screen and (max-width: 1440px){
          .functionButton{
            width:1290px;
          }
          .baseContentCenter{
            width:1290px;
          }
        }
    }

</style>
