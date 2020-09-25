<template>
    <div class="loginMain">
        <div class="loginMainCont">
            <div class="loginLog"></div>
            <div class="submit">
                <div class="login">用户登录</div>
                <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="" prop="username">
                        <el-input v-model="ruleForm.username" placeholder="请输入账号或手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password" style="margin:50px 0;">
                        <el-input :type="passwordType" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                        <span class="show-pwd" @click="showPwd">
                            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                        </span>
                    </el-form-item>
                    <el-form-item>
                        <div class="disPlay">
                            <span><el-checkbox v-model="checked" label="记住用户名" name="type"></el-checkbox></span>
                            <span class="cursorPointer" style="color:#A8ABB0">忘记密码？</span>
                        </div>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:50px;font-size:18px;letter-spacing:20px;margin:20px 0">登录</el-button>
                    <div class="disPlay">
                        <div class="loginStyle">
                            <span>其它登录账号</span>
                            <span></span>
                            <span><img src="@/assets/images/wxIcon.png" alt=""></span>
                        </div>
                        <span class="cursorPointer" @click="toRegister">立即注册</span>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {toLogin} from "@/api/homePage"
export default {
    data(){
        return{
            passwordType:'password',
            checked:false,
            ruleForm: {
                username: '',
                password: '',
            },
            rules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // toLogin(this.ruleForm).then(res=>{
                //     if(res.code=='200'){
                //         this.$Message.success(res.msg)
                //         localStorage.setItem('token', res.token)
                //         this.$router.push("/homePage")
                //     }else{
                //         this.$Message.error(res.msg);
                //     }
                // })
                this.$store.dispatch("user/login", this.ruleForm).then((res) => {
                    console.log(JSON.stringify(res.user_info),99999)
                    sessionStorage.setItem('userInfor',JSON.stringify(res.user_info))
                    if (localStorage.getItem('LoginSelf') && this.checked == true) {
                        localStorage.removeItem('LoginSelf')
                        localStorage.setItem('LoginSelf', JSON.stringify(this.ruleForm))
                    } else if (!localStorage.getItem('LoginSelf') && this.checked == true) {
                        localStorage.setItem('LoginSelf', JSON.stringify(this.ruleForm))
                    } else if (localStorage.getItem('LoginSelf') && this.checked == false) {
                        localStorage.removeItem('LoginSelf')
                    }
                    if(res.code=='200'){
                        this.$message({
                            message:res.msg,
                            type: 'success'
                        });
                        
                        this.$router.push("/homePage")
                    }else{
                        this.$Message.error(res.msg);
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
        toRegister(){
            this.$router.push("/register")
        },
       
    },
    mounted(){
        if (localStorage.getItem('LoginSelf')) {
            this.ruleForm.username = JSON.parse(localStorage.getItem('LoginSelf')).username
            this.ruleForm.password = JSON.parse(localStorage.getItem('LoginSelf')).password
            this.checked=true
        }
    }   
}
</script>
<style lang="scss" scped>
   .loginMain{
       background:url("../../assets/images/bj.png");
       background-size: 100% 100%;
       background-repeat: no-repeat;;
       width:100%;
       height:100%;
       .login{
           text-align: center;
           font-size: 40px;
           color: #2882FE;
           margin-bottom: 60px;
       }
       .loginMainCont{
            width:1200px;
            margin:auto;
            position: absolute;
            left: 50%;
            height:600px;
            border-radius: 10px;
            top:50%;
            display: flex;
            transform: translate(-50%,-50%);
            .submit{
                width:600px;
                background:#fff;
                padding:60px 70px;
                // padding:100px 80px;
                // width:50%;
                // height:100%;
                border-radius: 0 10px 10px 0;
                .show-pwd{
                    position: absolute;
                    right:20px;
                    top:10px;
                }
                // margin-left:50%
            }
            .loginLog{
                background:url("../../assets/images/logoLeft.png");
                background-size:100% 100%;
                background-repeat: no-repeat;
                height:600px;
                width:600px;
            }
       }
       .loginMainCont:hover{
            // box-shadow:0px 6px 20px 10px rgba(0, 0, 0, 0.18);
       }
       .el-input--medium .el-input__inner{
           height:50px!important;
       }
       .el-form-item__label{
           font-size:16px;
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
       .cursorPointer{
           cursor: pointer;
       }
   }
</style>