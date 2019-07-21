<template>
	<div id="register">
		<section class="register-box">
      <header>
        <div class="back" @click="back()">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Fill"></use>
            </svg>
          </span>
          手机注册
        </div>
      </header>
      <div class="registerBox">
        <ul>
          <li @click="PhoneNumTo()">
            <span class="address">{{fromName}}</span>
            <svg class="icon right" aria-hidden="true">
              <use xlink:href="#icon-xiangyou"></use>
            </svg>
          </li>
          <li class="phoneBor">
            <span class="phoneNum">{{fromNum}}</span>
            <input class="phoneInp" type="number" placeholder="请输入手机号码" v-model="number" @input="checkPhone(number)" @click="getChange()">
          </li>
        </ul>
        <p class="getPoint"></p>
        <div class="message" id="numbtn" style="background: rgba(37, 129, 250, 0.2);" @click="getNum(number)">
          获取手机验证码
        </div>
        <p>我同意<span>用户服务协议</span></p>
      </div>
    </section>

    <!-- 手机归属地 -->
    <transition name="fade">
      <section class="phoneFrom" v-show="show">
        <header>
          <div class="back" @click="PhoneNumTo()">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Fill"></use>
              </svg>
            </span>
            请选择手机归属地
          </div>
        </header>
        <ol class="phone-China" v-for="(item,index) in ChinaList">
          <li @click="Tosend(item.Fromname,item.PhoneNum)">{{item.Fromname}}<span>{{item.PhoneNum}}</span></li>
        </ol>
        <h3 id="A" class="PhoneFrom-name">A</h3>
        <ol class="phone-China" v-for="(item,index) in AList">
          <li @click="Tosend(item.Fromname,item.PhoneNum)">{{item.Fromname}}<span>{{item.PhoneNum}}</span></li>
        </ol>
        <h3 id="B" class="PhoneFrom-name">B</h3>
        <ol class="phone-China" v-for="(item,index) in BList">
          <li @click="Tosend(item.Fromname,item.PhoneNum)">{{item.Fromname}}<span>{{item.PhoneNum}}</span></li>
        </ol>
        <div class="PhoneLetter">
          <dl>
            <dd>
              <a href="#A">A</a>
            </dd>
            <dd>
              <a href="#B">B</a>
            </dd>
          </dl>
        </div>
      </section>
    </transition>

    <!-- 手机注册，验证码 -->
    <transition name="fade">
      <section class="phoneFrom" v-show="show01">
        <header>
          <div class="back" @click="CodeTo()">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Fill"></use>
              </svg>
            </span>
            手机注册
          </div>
        </header>
        <div class="SendCode">
          <ul>
            <li class="sendcode-title">
               <p>
                验证码已发送至 <span>{{number}}</span>
              </p>
            </li>
            <li class="sendcode-write">
              <input class="phoneCode" type="number" placeholder="请输入6位数验证码" v-model="code" @input="checkCode(code)">
              <em>|</em>
              <span>重新发送</span>
            </li>
             <li class="sendcode-title">
               <p>设置登录密码</p>
            </li>
            <li class="sendcode-pass">
              <img src="../../assets/img/pass.svg" class="pass-img">
              <input class="phonePasswd" :type="passwdType" placeholder="6-18位大小字母、符号或数字" v-model="passwd" @input="checkPasswd(passwd)">
              <div class="passwd-see">
                <img :src="openeye" class="eye" alt="" @click="changeType()">
              </div>
            </li>
          </ul>
          <div class="Tologin" id="loginbtn" style="background: rgba(37, 129, 250, 0.2);">
            完成并登录
          </div>
        </div>
      </section>
    </transition>

  </div>
</template>

<script>
	export default{
    data(){
      return{
        number: '',
        code: '',
        passwd: '',
        show: false,
        show01: false,
        fromName: '中国大陆',
        fromNum: '+86',
        passwdType: 'password', // 密码类型
        openeye: require('../../assets/img/unlook.svg'), //图片地址
        ChinaList:[
          {
            Fromname: '中国大陆',
            PhoneNum: '+86'
          },
          {
            Fromname: '中国香港',
            PhoneNum: '+852'
          },
          {
            Fromname: '中国台湾',
            PhoneNum: '+886'
          },
          {
            Fromname: '中国澳门',
            PhoneNum: '+853'
          }
        ],
        AList:[
          {
            Fromname: '阿富汗',
            PhoneNum: '+93'
          },
          {
            Fromname: '阿尔巴尼亚',
            PhoneNum: '+355'
          },
          {
            Fromname: '阿尔及利亚',
            PhoneNum: '+213'
          },
          {
            Fromname: '安哥拉',
            PhoneNum: '+244'
          },
          {
            Fromname: '安道尔共和国',
            PhoneNum: '+376'
          },
          {
            Fromname: '安圭拉岛',
            PhoneNum: '+1264'
          },
          {
            Fromname: '安提瓜及巴布达',
            PhoneNum: '+1268'
          },
          {
            Fromname: '阿根廷',
            PhoneNum: '+54'
          },
          {
            Fromname: '阿鲁巴',
            PhoneNum: '+297'
          },
          {
            Fromname: '奥地利',
            PhoneNum: '+43'
          },
          {
            Fromname: '阿塞拜疆',
            PhoneNum: '+994'
          },
          {
            Fromname: '埃及',
            PhoneNum: '+20'
          },
          {
            Fromname: '爱沙尼亚',
            PhoneNum: '+372'
          }
        ],
        BList:[
          {
            Fromname: '巴哈马',
            PhoneNum: '+1242'
          },
          {
            Fromname: '巴林',
            PhoneNum: '+973'
          },
          {
            Fromname: '孟加拉共和国',
            PhoneNum: '+880'
          },
          {
            Fromname: '巴巴多斯',
            PhoneNum: '+1246'
          },
          {
            Fromname: '白俄罗斯',
            PhoneNum: '+375'
          },
          {
            Fromname: '比利时',
            PhoneNum: '+32'
          },
          {
            Fromname: '伯利兹',
            PhoneNum: '+501'
          },
          {
            Fromname: '贝宁',
            PhoneNum: '+229'
          },
          {
            Fromname: '百慕大',
            PhoneNum: '+1441'
          },
          {
            Fromname: '不丹',
            PhoneNum: '+395'
          },
          {
            Fromname: '玻利维亚',
            PhoneNum: '+591'
          },
          {
            Fromname: '波斯尼亚和黑塞哥维那',
            PhoneNum: '+387'
          },
          {
            Fromname: '博茨瓦纳',
            PhoneNum: '+267'
          }
        ]
      }
    },
		methods:{
      // 返回上一页
      back(){
        this.$router.go(-1)
      },
      // 手机归属地返回
      PhoneNumTo(){
        this.show=!this.show
      },
      // 验证码输入返回
      CodeTo(){
        this.show01 =! this.show01
      },
      // 选择手机归属地，返回
      Tosend(a,b){
        this.fromName = a;
        this.fromNum = b;
        this.show=!this.show
      },
      // 密码可见/不可见
      changeType(){
        this.passwdType = this.passwdType == 'password' ? 'text' : 'password';
        this.openeye = this.openeye == require("../../assets/img/unlook.svg") ? require("../../assets/img/look.svg") : require("../../assets/img/unlook.svg");
      },
      // 检验注册按钮，如果手机号为空或者不正确，按钮为浅色；如果手机号正确或者不为空，按钮为深色
      checkPhone(num){
        if(num.length == ''){
          numbtn.style.background = 'rgba(37, 129, 250, 0.2)'
        }else{
          // var reg = /^[0-9a-zA-Z]{4,11}$/ || /^\w+@\w+(.\w+)+$/ || /^1\d{11}/;
          let reg = /^1\d{10}$/;
          if(!reg.test(num)){
            numbtn.style.background = 'rgba(37, 129, 250, 0.2)'
          }else{
            numbtn.style.background = '#2581FA'
            $('.phoneInp').css({"color":"#2c3e50","opacity":"1"});
          }
        }
      },
      // 点击获取手机验证码按钮，检验手机号，
      // 如果手机号不正确，提示输入正确的手机号且字体颜色为红色；
      // 如果正确，则无提示且字体颜色不变，跳转到收验证码
      getNum(a){
        let reg = /^1\d{10}$/;
        if(!reg.test(this.number)){
          $('.getPoint').html('请输入有效的手机号码')
          $('.phoneInp').css({"color":"#ED424B","opacity":"1"});
          $('.phoneNum').css('color','#ED424B')
          $('.phoneBor').css('borderColor','#ED424B')
        }else{
          $('.getPoint').html('')
          $('.phoneInp').css({"color":"#2c3e50","opacity":"1"});
          $('.phoneNum').css('color','#2c3e50')
          $('.phoneBor').css('borderColor','#fff')
          this.show01 =! this.show01
        }
      },
      // 点击手机号输入框，清空输入框，样式恢复原样
      getChange(){
        $('.getPoint').html('')
        $('.phoneInp').css({"color":"#2c3e50","opacity":"0.6"});
        $('.phoneNum').css('color','#2c3e50')
        $('.phoneBor').css('borderColor','#fff')
      },
      // 检验验证码格式
      checkCode(){
        let reg = /^[0-9]\d{5}$/;
        if(!reg.test(this.code)){
          $('.phoneCode').css({"color":"#2c3e50","opacity":"0.5"});
        }else{
          $('.phoneCode').css({"color":"#2c3e50","opacity":"1"});
        }
      },
      // 检验密码格式，密码不为空，按钮为深色；密码为空，按钮为浅色
      checkPasswd(){
        let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$/;
        if(!reg.test(this.passwd)){
          $('.phonePasswd').css({"color":"#2c3e50","opacity":"1"});
          loginbtn.style.background = 'rgba(37, 129, 250, 0.2)'
        }else{
          loginbtn.style.background = '#2581FA'
        }
      }
		}
	}
</script>

<style>
  #register{
    background: #fff;
  }
	.register-box{
		padding-bottom: 26.15625rem;
		background: #fff;
	}
	ol,
  ul li{
		list-style: none;
	}
	header{
		height: 2.75rem;
		border-bottom: 1px solid #EEE;
	}
	.back{
		height: 2.75rem;
		display: inline-block;
		padding-right: 0.2rem;
		cursor: pointer;
	}
	.back span{
		width: 2.75rem;
		height: 2.75rem;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		line-height: 2.75rem;
	}
	.registerBox{
		padding: 4.125rem 1.65625rem 0;
	}
	.registerBox ul li{
		min-height: 2.75rem;
		background: #F6F7F9;
		margin-bottom: 0.8125rem;
		border-radius: 4px;
		overflow: hidden;
		padding-left: 1.1rem;
		position: relative;
	}
	.address{
		width: 100%;
		line-height: 2.75rem;
	}
	.right{
		width: 0.875rem;
		position: absolute;
		right: 0.625rem;
		top: 0.75rem;
		color: #000;
	}
  .phoneBor{
    border: 1px solid;
    border-color: #fff;
  }
	.phoneNum{
		width: 3.875rem;
		display: inline-block;
		vertical-align: middle;
		line-height: 2.75rem;
	}
	.phoneInp{
		width: 75%;
		padding: 0.6875rem 0 0.6875rem 1.25rem;
		line-height: 1.375rem;
		background: none;
		outline: 0;
    border: 0;
		font-size: 1rem;
		opacity: 0.6;
		float: right;
	}
  .registerBox .getPoint{
    text-align: left;
    color: #ED424B;
  }
	.message,
  .Tologin{
		width: 100%;
		margin: 1.65625rem 0 0.6875rem;
		line-height: 2.75rem;
		border-radius: 100px;
		color: white;
		text-align: center;
	}
	.registerBox p{
		text-align: center;
	}
	.registerBox p span{
		color: #2581FA;
		cursor: pointer;
	}
  /* 手机归属地 */
  .phoneFrom{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    overflow-y: scroll;
    background: #fff;
  }
  .phone-China{
    padding-left: 1.375rem;
  }
  .phone-China li{
    margin-right: 2.0625rem;
    line-height: 3.375rem;
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .phone-China li span{
    position: absolute;
    left: 50%;
  }
  .PhoneFrom-name{
    background: #F0F1F3;
    padding-left: 1.375rem;
  }
  .PhoneLetter{
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
  }
  .PhoneLetter dd{
    line-height: 1.375rem;
  }
  .PhoneLetter dd a{
    color: #2c3e50;
    text-decoration: none;
  }
  /*显示*/
  .fade-enter{
   width: 0;
  }
  .fade-enter-to{
   width: 100%;
  }
  .fade-enter-active{
   transition: all 0.5s;
  }
  /*隐藏*/
  .fade-leave{
   width: 100%;
  }
  .fade-leave-to{
   width: 0;
  }
  .fade-leave-active{
   transition: all 0.5s;
  }
  /* 发送验证码 */
  .SendCode{
    padding: 4.125rem 1.65625rem 0 1.65625rem;
  }
  .sendcode-title{
    margin-bottom: 0.96875rem;
    line-height: 2.75rem;
  }
  .SendCode ul li input{
    width: 60%;
    line-height: 2.75rem;
    background: none;
    font-size: 0.875rem;
    outline: none;
    border: none;
    opacity: 0.5;
  }
  .sendcode-write{
    padding-left: 1.09375rem;
    margin-bottom: 1.65625rem;
    background: #F6F7F9;
  }
  .sendcode-write em{
    opacity: 0.5;
  }
  .sendcode-write span{
    width: 35%;
    color: #2581FA;
    display: inline-block;
    text-align: center;
  }
  .sendcode-pass{
    margin-bottom: 1.65625rem;
    background: #F6F7F9;
  }
  .pass-img{
    width: 1.25rem;
    margin: 0.53125rem 0.825rem;
    opacity: 0.5;
    float: left;
  }
  .passwd-see{
		width: 3.3125rem;
    line-height: 2.75rem;
		float: right;
    text-align: center;
	}
</style>
