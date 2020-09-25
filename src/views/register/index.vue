<template>
    <div class="registerMain">
        <div class="registerMainCont">
            <div class="loginLog"></div>
            <div class="register">
                <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item  prop="username">
                        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone">
                        <el-input v-model="ruleForm.phone" oninput="value=value.replace(/[^\d]/g,'')" maxlength="11" placeholder="请输入您的手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="imgCaptcha">
                        <div style="display:flex">
                            <el-input v-model="ruleForm.imgCaptcha" placeholder="请输入图片验证码" style="width:240px;margin-right:15px"></el-input> 
                            <div @click="refreshCode" style="width:170px;">
                                <s-identify :identifyCode="identifyCode"></s-identify>
                            </div> 
                        </div>  
                        <!-- <el-input v-model="ruleForm.userName" placeholder="请输入图片验证码" style="width:170px;"></el-input> -->
                    </el-form-item>
                    <el-form-item prop="captcha">
                        <div style="display:flex">
                            <el-input v-model="ruleForm.captcha" placeholder="请输入验证码" style="width:240px;margin-right:15px"></el-input>
                            <div class="getCode" @click="flag && getObtain()" style="width:170px;">{{content}}</div>
                        </div>
                        <!-- <el-input type="Button" v-model="ruleForm.userName" style="width:170px;">获取验证码</el-input> -->
                    </el-form-item>
                    <el-form-item  prop="password">
                        <el-input :type="passwordType" v-model="ruleForm.password" placeholder="6位以上，字母、数字或符号组合"></el-input>
                        <span class="show-pwd" @click="showPwd">
                            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                        </span>
                    </el-form-item>
                     <el-form-item prop="twoPassWord">
                        <el-input :type="passwordType1" v-model="ruleForm.twoPassWord" placeholder="请再次输入密码"></el-input>
                        <span class="show-pwd" @click="showPwd1">
                            <svg-icon :icon-class="passwordType1 === 'password' ? 'eye' : 'eye-open'"/>
                        </span>
                    </el-form-item>
                    <el-form-item  prop="invitCode">
                         <el-input v-model="ruleForm.invitCode" placeholder="请输入您的邀请码"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:40px;font-size:18px;margin:20px 0;letter-spacing:5px">立即注册</el-button>
                    <el-form-item prop="agree">
                        <el-checkbox v-model="ruleForm.agree" label="我已阅读并同意" name="type"></el-checkbox>
                        <span style="color:#1890ff;" class="cursorPointer" @click="toAgreement">《 注册协议 》</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import SIdentify from "./sIdentify.vue";
import {userNameCaption,getCaption,getRegister} from "@/api/homePage"
import _ from "lodash"
export default {
    components:{SIdentify},
    data(){
        var validateUserName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入请输入用户名'));
            } else {
                if (this.ruleForm.username !== '') {
                    userNameCaption({username:this.ruleForm.username}).then(res=>{
                        if(res.code=="200"){
                            callback();
                        }else{
                            callback(new Error(res.msg));
                        }
                    }).catch(err=>{
                        callback(new Error(err));
                    })  
                } 
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !==this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
       };
       var validateImg = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入图片验证码'));
            } else if (value !==this.identifyCode) {
                this.refreshCode()
               callback(new Error('请输入正确的图片验证码'));
            } else {
                callback();
            }
       };
        return{
            identifyCode: "",
            identifyCodes: "0123456789abcdefghijklmnopqrstuvwsyz",
            passwordType:'password',
            passwordType1:'password',
            ruleForm: {
                username: '',
                password: '',
                phone:'',
                captcha:'',
                imgCaptcha:'',
                twoPassWord:'',
                invitCode:'',
                agree:''
            },
            rules:{
                username:[
                    { required: true, trigger: 'blur',validator: validateUserName},
                    
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                phone:[
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                captcha:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
                twoPassWord:[
                    { validator: validatePass2, trigger: 'blur' }
                ],
                imgCaptcha:[
                    { validator: validateImg, trigger: 'blur' }
                ],
                agree:[{required: true, message: '请勾选用户协议', trigger: 'blur'}]
            },
            flag:true,
            count:'',
            content:'获取验证码',
            timer:null
        }
    },
    methods:{
        toAgreement(){
            this.$router.push("/agreement")
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let data = _.cloneDeep(this.ruleForm)
                    delete data.imgCaptcha
                    delete data.twoPassWord
                    delete data.invitCode
                    delete data.agree
                    getRegister(data).then(res=>{
                        if(res.code=='200'){
                            this.$message.success(res.msg);
                            this.$router.push("/login")
                        }else{
                            this.$message.error(res.msg);
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        showPwd(){
            if (this.passwordType === "password") {
                this.passwordType = "";
            } else {
                this.passwordType = "password";
            }
        },
        showPwd1(){
            if (this.passwordType1 === "password") {
                this.passwordType1 = "";
            } else {
                this.passwordType1 = "password";
            }
        },
        refreshCode() {
            this.identifyCode = ""
            this.makeCode(this.identifyCodes,4)
        },
        randomNum (min, max) {
            max = max + 1
            return Math.floor(Math.random() * (max - min) + min)
        },
        makeCode (data, len) {
            for (let i = 0; i< len;i++) {
                this.identifyCode += data[this.randomNum(0, data.length - 1)]
            }
        },
        //短信验证码
        getObtain(){
            if(!this.ruleForm.username){
                this.$message.error('请输入用户名');
            }else if(!this.ruleForm.phone){
                this.$message.error('请输入手机号');
            }else{
                this.setTimeout()
                getCaption({'phone':this.ruleForm.phone}).then(res=>{
                    if(res.code=='200'){
                        this.$message.success(res.msg);
                    }else{
                        this.$message.error(res.msg);
                        this.flag=true
                        clearInterval(this.timer)
                    }
                }).catch(err=>{
                    this.flag=true
                    clearInterval(this.timer)
                })
            }
            
        },  
        setTimeout(){
            const TIME_COUNT = 60;
            this.flag = false
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                        this.content = this.count+' s后获取';
                    } else {
                        this.content = '获取验证码';
                        this.flag = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        }
    },
    mounted(){
        this.refreshCode()
    }   
}
</script>
<style lang="scss" scped>
   .registerMain{
       background:url("../../assets/images/bj.png");
       background-size: 100% 100%;
       background-repeat: no-repeat;;
       width:100%;
       height:100%;
       .registerMainCont{
            width:1200px;
            margin:auto;
            position: absolute;
            left: 50%;
            height:600px;
            top:50%;
            display: flex;
            transform: translate(-50%,-50%);
            .register{
                width:600px;
                background:#fff;
                padding:30px 88px;
                .show-pwd{
                    position: absolute;
                    right:20px;
                    top:5px;
                }
                border-radius: 0 10px 10px 0;
            }
            .loginLog{
                background:url("../../assets/images/logoLeft.png");
                background-size:100% 100%;
                background-repeat: no-repeat;
                height:600px;
                width:600px;
            }
       }
       
       .el-input--medium .el-input__inner{
           height:40px!important;
       }
       .el-form-item__label{
           font-size:14px;
       }
       .el-form-item--medium .el-form-item__label{
           line-height: 20px;
       }
       .disPlay{
           display: flex;
           justify-content: space-between;
           align-items: center;
           font-size:14px;
           color:#275FFE;
           padding:0 20px;
       }
       .loginStyle{
           display: flex;
           align-items: center;
           span{
               margin-right:5px;
               cursor: pointer;
           }
       }
       .getCode{
           cursor: pointer;
           display: inline-block;
           border:1px solid #ccc;
           width:170px;
           text-align: center;
       }
       .cursorPointer{
           cursor: pointer;
       }
   }
</style>