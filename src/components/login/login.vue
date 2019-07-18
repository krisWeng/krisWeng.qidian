<template>
	<div id="login">
		<img src="../../../data/img/loginTop.png" alt="" class="Top-pic">
		<div class="login-box">
			<div class="login-logo">
				<img src="../../../data/img/AppLogo.png" alt="">
			</div>
			<!-- 输入框内容 -->
			<div class="login-cont">
				<div class="login-input">
					<ul>
						<li>
							<em class="user"></em>
							<input type="text" id="user" placeholder="请输入邮箱/个性账号" @click="Noshow()" v-model="user" @input="checkUser(user)">
						</li>
						<li>
							<em class="lock"></em>
							<input type="password" id="passwd" placeholder="请输入密码" @click="Noshow()" v-model="passwd">
							<div class="passwd-r">
								<i class="unlook" @click="unpress()"></i>
                <i class="look" style="display: none;" @click="press()">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-look"></use>
                  </svg>
                </i>
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
					<router-link to="/login">
						登录
					</router-link>
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
			<div class="retract">
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
				if1: false
			}
		},
		methods:{
			show(){
				this.if1 =! this.if1
			},
      Noshow(){
        $('.Top-pic').css('display','none')
      },
      press(){
        $('.look').css('display','none');
        $('.unlook').css('display','block');

      },
      unpress(){
        $('.look').css('display','block');
        $('.unlook').css('display','none');
      },
      checkUser(msg){
          if(msg.length == ''){
            $('.point').html('请输入帐号')
          }else{
            var reg = /^[0-9a-zA-Z]{4,10}$/ || /^\w+@\w+(.\w+)+$/ || /^1\d{10}/;
            if(!reg.test(msg)){
              $('.point').html('用户名不正确');
            }else{
              $('.point').html('')
            }
          }
        }
      },
      // checking(msg02){
      //     if(msg02.length == ''){
      //       $('.point').html('密码不能为空')
      //     }else{
      //       $('.point').html('')
      //     }
      // }
	}
</script>

<style>
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
	.passwd-r i{
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		margin: 1.1rem auto 0;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.user{
		background: url(../../../data/img/user.svg);
	}
	.lock{
		background: url(../../../data/img/lock.svg);
	}
	.unlook{
		margin: 1.03125rem 1.1rem 0;
		background: url(../../../data/img/unlook.svg);
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
	.login-btn a{
	    width: 100%;
		height: 3.3125rem;
		border-radius: 1.725rem;
		line-height: 3.3125rem;
		font-size: 1.125rem;
		opacity: .7;
		background: linear-gradient(to right, #EE434C, #F14B4E);
		position: relative;
		z-index: 1;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		color: #FFF;
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
		background: url(../../../data/img/qq.svg);
	}
	.phone{
		background: url(../../../data/img/phone.svg);
	}
	.more{
		background: url(../../../data/img/more.svg);
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
		background-image: url(../../../data/img/down.svg);
	}
	.weibo{
		background: url(../../../data/img/weibo.svg);
	}
	.alipay{
		background: url(../../../data/img/alipay.svg);
	}
	.baidu{
		background: url(../../../data/img/baidu.svg);
	}
  .point{
    margin-left: 2.2rem;
    color: #ef5b00;
    margin-bottom: 0.625rem;
  }
</style>
