<template>
	<div id="login">
		<img src="../../assets/img/loginTop.png" alt="" class="Top-pic">
		<div class="login-box">
			<div class="login-logo">
				<img src="../../assets/img/AppLogo.png" alt="">
			</div>
			<!-- 输入框内容 -->
			<div class="login-cont">
				<div class="login-input">
					<ul>
						<li>
							<em class="user"></em>
							<input type="text" id="user" class="userColor" placeholder="请输入邮箱/个性账号" @click="Noshow()" v-model="user" @input="checkUser(user)">
						</li>
						<li>
							<em class="lock"></em>
							<input :type="passwdType" id="passwd" placeholder="请输入密码" @click="Noshow()" v-model="passwd" @input="checkPass(passwd)">
							<div class="passwd-r">
                <img :src="openeye" class="eye" alt="" @click="changeType()">
							</div>
						</li>
					</ul>
				</div>
        <p class="point"></p>
				<div class="login-link">
					<router-link to="/login">忘记密码</router-link>
					<router-link to="/register">用户注册</router-link>
				</div>
				<div class="login-btn">
					<span @click="Nonull()" class="login-btn-span dis">
						登录
					</span>
				</div>
			</div>

			<!-- 其他登录方式 -->
			<div class="login-other">
				<ul>
					<li>
						<p class="QQ"></p>
						<span>QQ</span>
					</li>
					<li>
						<p class="phone"></p>
						<span>短信登录</span>
					</li>
					<li>
						<p class="more" @click="show()"></p>
						<span>更多</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- 更多 -->
		<div class="loginMore" v-if="if1">
			<div class="retract" @click="show()">
				收起
				<i class="down-icon"></i>
			</div>
			<ul>
				<li>
					<p class="weibo"></p>
					<span>微博</span>
				</li>
				<li>
					<p class="alipay"></p>
					<span>支付宝</span>
				</li>
				<li>
					<p class="baidu"></p>
					<span>百度</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				if1: false,
        user: '',
        passwd: '',
        passwdType: 'password', // 密码类型
        openeye: require('../../assets/img/unlook.svg'), //图片地址
			}
		},
		methods:{
			show(){
				this.if1 =! this.if1
			},
      // 点击输入框，隐藏头部logo
      Noshow(){
        $('.Top-pic').css('display','none')
      },
      // 密码可见/不可见
      changeType(){
        this.passwdType = this.passwdType == 'password' ? 'text' : 'password';
        this.openeye = this.openeye == require("../../assets/img/unlook.svg") ? require("../../assets/img/look.svg") : require("../../assets/img/unlook.svg");
      },
      // 检验帐号，如果帐号为空或不正确，则会提示；如果帐号正确，则无提示且字体、按钮透明度为1
      checkUser(msg){
        if(msg.length == ''){
          $('.point').html('请输入帐号')
        }else{
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(!reg.test(msg)){
            $('.point').html('用户名不正确');
          }else{
            $('.point').html('')
            $('.userColor').css('opacity','1')
            $('.dis').css('opacity','1')
          }
        }
      },
      // 检验密码
      checkPass(res){
        if(res.length == ''){
          $('.point').html('请输入密码')
        }else{
          $('.point').html('')
        }
      },
      // 登录按钮点击，如果帐号密码为空，则提示；如果帐号密码输入正确，则跳转到指定页面
      Nonull(){
        if(this.user == '' || this.passwd == ''){
          $('.point').html('请输入帐号、密码')
        }
        if(this.user == '18475969926@163.com' || this.passwd == '123321'){
          this.$router.push({path:'/'})
        }
      }
    }
  }
</script>

<style>
  html{
    height: 100%;
    background: #fff;
  }
	#login{
		padding-bottom: 7.42rem;
		background: #fff;
	}
	a{
		text-decoration: none;
	}
	ul li{
		list-style: none;
	}
	/* 顶部 */
	.Top-pic{
		width: 100%;
		height: 5.5rem;
	}
	/* 主要内容 */
	.login-box{
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 2;
		margin: -0.625rem auto 0;
		background: #FFF;
		border-radius: 8px 8px 0 0;
	}
	/* logo */
	.login-logo{
		padding: 1.625rem 0;
		text-align: center;
	}
	.login-logo img{
		display: inline-block;
		height: 3.3125rem;
	}
	/* 输入框 */
	.login-input{
		padding: 0 35px;
	}
	.login-input ul{
		list-style: none;
	}
	.login-input ul li{
		width: 100%;
		position: relative;
		z-index: 1;
		border-bottom: 1px solid #EEE;
		margin-bottom: 1.1rem;
	}
	.login-input ul li input{
		width: 60%;
		height: 3.1875rem;
		display: inline-block;
		vertical-align: middle;
		line-height: 3.1875rem;
		background: none;
		font-size: 1.125rem;
		outline: none;
		border: none;
		opacity: 0.5;
	}
	.login-input ul li em{
		width: 1.1rem;
		height: 1.1rem;
		margin: 0 1.1rem 0 0.4125rem;
		background-repeat: no-repeat;
		background-size: 100%;
		display: inline-block;
		vertical-align: middle;
	}
	.passwd-r{
		width: 3.3125rem;
		height: 3.3125rem;
		float: right;
	}
	.passwd-r img{
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		margin: 1.1rem auto 0;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.user{
		background: url(../../assets/img/user.svg);
	}
	.lock{
		background: url(../../assets/img/lock.svg);
	}
	/* 忘记密码 */
	.login-link{
		padding: 0 2.1875rem;
		margin-bottom: 1.65625rem;
	}
	.login-link a{
		color: #0091DE;
		font-size: 0.8125rem;
	}
	.login-link a:last-child{
		float: right;
	}
	/* 登录 */
	.login-btn{
		padding: 0 2.1875rem;
		text-align: center;
	}
	.login-btn-span{
    width: 100%;
		border-radius: 1.725rem;
		line-height: 3.3125rem;
		font-size: 1.125rem;
		background: linear-gradient(to right, #EE434C, #F14B4E);
		position: relative;
		z-index: 1;
		display: inline-block;
		text-align: center;
		color: #FFF;
	}
  .dis{
    opacity: .7;
  }
	/* 其他登录方式 */
	.login-other,
	.loginMore{
		padding: 2.75rem 2.1875rem;
		text-align: center;
	}
	.login-other ul,
	.loginMore ul{
		display: flex;
		justify-content: center;
	}
	.login-other ul li,
	.loginMore ul li{
		float: left;
		margin: 0;
		font-size: 0.8125rem;
		cursor: pointer;
	}
	.login-other ul li:nth-child(1),
	.login-other ul li:nth-child(2),
	.loginMore ul li:nth-child(1),
	.loginMore ul li:nth-child(2){
		margin-right: 2.0625rem;
	}
	.login-other p,
	.loginMore p{
		width: 3.3125rem;
		height: 3.3125rem;
		margin: 0 auto 1.1rem;
		background-size: 100%;
	}
	.QQ{
		background: url(../../assets/img/qq.svg);
	}
	.phone{
		background: url(../../assets/img/phone.svg);
	}
	.more{
		background: url(../../assets/img/more.svg);
	}
	/* 更多登录方式 */
	.loginMore{
		height: 10.9375rem;
		position: fixed;
		padding: 0;
		z-index: 10;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFF;
		box-shadow: 0 -2px 5px 0 #EEE;
		transition: bottom .3s;
	}
	.retract{
		padding: 1.1rem 0 1.65625rem;
		text-align: center;
	}
	.down-icon{
		width: 8px;
		height: 5px;
		display: inline-block;
		vertical-align: middle;
		margin-left: .16rem;
		background-image: url(../../assets/img/down.svg);
	}
	.weibo{
		background: url(../../assets/img/weibo.svg);
	}
	.alipay{
		background: url(../../assets/img/alipay.svg);
	}
	.baidu{
		background: url(../../assets/img/baidu.svg);
	}
  .point{
    margin-left: 2.2rem;
    color: #ef5b00;
    margin-bottom: 0.625rem;
  }
</style>
