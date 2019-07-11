<template>
	<div id="register">
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
				<li>
					<span class="address">中国大陆</span>
					<svg class="icon right" aria-hidden="true">
						<use xlink:href="#icon-xiangyou"></use>
					</svg>
				</li>
				<li>
					<span class="phoneNum">+86</span>
					<input type="text" placeholder="请输入手机号码">
				</li>
			</ul>
			<div class="message disabled">
				获取手机验证码
			</div>
			<p>我同意<span>用户服务协议</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go('-1')
			}
		}
	}
</script>

<style>
	#register{
		padding-bottom: 26.15625rem;
		background: #fff;
	}
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
		display: inline-block;
		vertical-align: middle;
		line-height: 2.75rem;
	}
	.right{
		width: 0.875rem;
		position: absolute;
		right: 0.625rem;
		top: 0.75rem;
		color: #000;
	}
	.phoneNum{
		width: 3.875rem;
		display: inline-block;
		vertical-align: middle;
		line-height: 2.75rem;
	}
	.registerBox input{
		width: 75%;
		height: 1.375rem;
		display: inline-block;
		vertical-align: middle;
		padding: 0.6875rem 0 0.6875rem 1.25rem;
		line-height: .2rem;
		background: none;
		border: 0;
		font-size: 1rem;
		opacity: 0.6;
		float: right;
	}
	.message{
		width: 100%;
		height: 2.75rem;
		display: block;
		margin: 1.65625rem 0 0.6875rem;
		line-height: 2.75rem;
		border-radius: 100px;
		position: relative;
		z-index: 1;
		color: white;
		text-align: center;
	}
	.disabled{
		border-color: rgba(37, 129, 250, 0.2);
		background: rgba(37, 129, 250, 0.2);
	}
	.registerBox p{
		text-align: center;
	}
	.registerBox p span{
		color: #2581FA;
		cursor: pointer;
	}
</style>
