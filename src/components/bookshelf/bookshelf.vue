<template>
	<div id="bookshelf">
		<div class="bookshelf-box">
			<!-- 头部 -->
			<header>
				<ul>
					<li class="out">
						<router-link to="/boy">
							<span>
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-Fill"></use>
								</svg>
							</span>
						</router-link>
					</li>
					<li class="btnBox">
						<div class="booknav-btn" @click="tabname='mybook'" v-bind:class="{btnBoxActive:tabname=='mybook'}">
							我的书架
						</div>
						<div class="booknav-btn" @click="tabname='reading'" v-bind:class="{btnBoxActive:tabname=='reading'}">
							最近阅读
						</div>
					</li>
					<li>
						<!-- 搜索 -->
						<router-link to="/search" class="book-icon">
							<svg class="icon book-icon-search" aria-hidden="true">
								<use xlink:href="#icon-sousuo"></use>
							</svg>
						</router-link>
						<!-- 更多 -->
						<div class="bookMore" @click="show()"></div>
					</li>
				</ul>
			</header>
			
			<div class="more-Hide" v-if="show01">
				<i class="hide-bg"></i>
				<div class="hide-cont">
					<div class="hide-nav">
						<router-link to="/boy">
							<i class="hide-icon hide-icon-home"></i>
							<h4>首页</h4>
						</router-link>
						<router-link to="/boy-type">
							<i class="hide-icon hide-icon-type"></i>
							<h4>分类</h4>
						</router-link>
						<router-link to="/boy-rank">
							<i class="hide-icon hide-icon-rank"></i>
							<h4>排行榜</h4>
						</router-link>
						<router-link to="/boy-free">
							<i class="hide-icon hide-icon-free"></i>
							<h4>免费</h4>
						</router-link>
						<router-link to="/boy-end">
							<i class="hide-icon hide-icon-end"></i>
							<h4>完本</h4>
						</router-link>
						<router-link to="/login">
							<i class="hide-icon hide-icon-money"></i>
							<h4>账户</h4>
						</router-link>
					</div>
					<div class="hide-btn">
						<router-link to="/bookshelf">
							我的书架
						</router-link>
					</div>
				</div>
			</div>
		</div>
		
		<component :is="tabname"></component>
		
		<!-- 底部 -->
		<footer>
			<!-- 按钮信息 -->
			<div class="footer-btnLink">
				<ol>
					<li>客户端</li>
					<li class="dark">触屏版</li>
					<li>电脑版</li>
					<li>帮助</li>
					<li>反馈</li>
				</ol>
			</div>
			<p class="footer-copy">
				Copyright © 2002-2019 m.qidian.com
			</p>
		</footer>
		
		<!-- 下载提示 -->
		<div class="downApp">
			<img src="../../assets/img/AppLogo.png" alt="">
			<h3>安装起点读书客户端</h3>
			<p>看更多正版好书</p>
			<span>下载</span>
		</div>
	</div>
</template>

<script>
	import mybook from './mybook.vue'
	import reading from './reading.vue'
	
	export default{
		components:{
			mybook,
			reading
		},
		data(){
			return{
				show01: false,
				tabname: 'mybook'
			}
		},
		methods: {
			show(){
				this.show01 = ! this.show01
			}
		}
	}
</script>

<style>
	*{
		margin: 0 auto;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	.BigBox{
		min-height: calc(100vh - 13rem);
		background-color: #fff;
	}
	header{
		height: 3.09375rem;
	}
	.bookshelf-box ul{
		height: 3.09375rem;
		list-style-type: none;
		padding: 0.6875rem 0;
		position: relative;
		box-sizing: border-box;
		border-bottom: 1px solid #EEE;
		background: #fff;
	}
	.out{
		display: inline-block;
		margin: 0 10px;
		float: left;
	}
	.out span{
		width: 2.75rem;
		height: 2.75rem;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		line-height: 2.75rem;
		position: absolute;
		top: 0.125rem;
		left: 0;
	}
	/* btn */
	.btnBox{
		position: absolute;
		left: 30%;
	}
	.booknav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.booknav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
		
	}
	.booknav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.27rem;
	}
	.btnBoxActive{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.bookshelf-box ul li:nth-child(3){
		margin: 0.5rem 0.5625rem 0.5rem 0;
		position: absolute;
		top: 0.4375rem;
		right: 0;
	}
	.book-icon-search{
		width: 1.125rem;
		height: 1.125rem;
		margin: 0.25rem 0.625rem 0 0.625rem;
	}
	/* 更多 */
	.bookMore:empty{   
		width: 2.25rem;
		height: 2.25rem; 
		position: relative;
		top: -0.3125rem;
		right: 3%;
	}
	.bookMore{
		float: right;
		overflow: hidden;
	}
	.bookMore:empty::after,
	.bookMore:empty::before{
		content: ''; 
		width: 1.25rem;
		position: absolute;
		left: 50%;
		margin-top: -1px;
		margin-left: -0.625rem;
		transition: transform .15s;
		border-top: 1px solid;
		top: 0.92rem;
	}
	.bookMore:empty::before{
		height: 4px;
		transform-origin: top center;
		border-bottom: 1px solid;
		top: 1.25rem;
	}
	/* 隐藏 */
	.more-Hide{
		position: fixed;
		z-index: 3;
		top: 3.05rem;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
		visibility: visible;
		transition: visibility .25s;
	}
	.hide-bg{
		background: #000;
		opacity: 0.6;
		transition: opacity 0.25s;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.hide-cont{
		position: relative;
		overflow: hidden;
		padding: 0 1.125rem;
		transition: transhideform .15s;
		/* transform: translateY(-100%); */
		background-color: #fff;
	}
	.hide-nav{
		text-align: justify;
	}
	.hide-nav::after{
		content: '';
		display: inline-block;
		width: 100%;
		height: 0;
		vertical-align: top;
	}
	.hide-nav a{
		width: 3.9375rem;
		height: 4.0625rem;
		font-size: 0.875rem;
		position: relative;
		display: inline-block;
		text-align: center;
		margin: 0.84375rem 1.6875rem;
		color: #33373d;
	}
	.hide-nav a h4{
		position: absolute;
		right: 0;
		bottom: .1875rem;
		left: 0;
		font-size: 0.8125rem;
	}
	.hide-icon{
		position: absolute;
		right: 0;
		bottom: 1.625rem;
		left: 0;
		margin: auto;
	}
	.hide-icon-home{
		width: 28px;
		height: 25px;
		background: url(../../assets/img/nav-icon.png);
		background-position: -31px 0;
		background-size: 87px 87px;
	}
	.hide-icon-type{
		width: 24px;
		height: 24px;
		background: url(../../assets/img/nav-icon.png);
		background-position: -63px -28px;
		background-size: 87px 87px;
	}
	.hide-icon-rank{
		width: 27px;
		height: 26px;
		background: url(../../assets/img/nav-icon.png);
		background-position: 0 0;
		background-size: 87px 87px;
	}
	.hide-icon-free{
		width: 26px;
		height: 26px;
		background: url(../../assets/img/nav-icon.png);
		background-position: 0 -30px;
		background-size: 87px 87px;
	}
	.hide-icon-end{
		width: 20px;
		height: 27px;
		background: url(../../assets/img/nav-icon.png);
		background-position: 0 -60px;
		background-size: 87px 87px;
	}
	.hide-icon-money{
		width: 24px;
		height: 24px;
		background: url(../../assets/img/nav-icon.png);
		background-position: -63px 0;
		background-size: 87px 87px;
	}
	/* 按钮 */
	.hide-btn{
		margin-top: -0.3125rem;
		margin-bottom: 1.6875rem;
		text-align: center;
	}
	.hide-btn a{
		width: 19.6875rem;
		font-size: 1rem;
		line-height: 2.5rem;
		display: inline-block;
		padding-right: 1.15625rem;
		padding-left: 1.15625rem;
		text-align: center;
		color: #fff;
		border-radius: 99px;
		background-color: #ed424b;
		box-sizing: border-box;
	}
	/* 未登录 */
	.unlogin{
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -3rem;
		text-align: center;
	}
	.unlogin a{
		width: 17.375rem;
		font-size: 1rem;
		line-height: 2.5rem;
		display: inline-block;
		padding-right: 1em;
		padding-left: 1em;
		text-align: center;
		color: #fff;
		border-radius: 99px;
		background-color: #ed424b;
	}
	.unlogin p{
		font-size: 1rem;
		margin-top: 0.84375rem;
		color: #969ba3;
	}
	/* 底部 */
	footer{
		background: #fff;
	}
	.footer-btnLink{
		padding: 2.46% 5.15% 0;
		text-align: center;
		color: #969ba3;
		overflow: hidden;
	}
	.footer-btnLink,
	.footer-btnLink ol{
		overflow: hidden;
	}
	.footer-btnLink li{
		width: 20%;
		float: left;
		padding: 0.5625rem 0;
	}
	.dark{
		color: #33373d;
	}
	.footer-copy{
		font-size: 0.875rem;
		font-weight: 300;
		padding-top: .25rem;
		padding-bottom: 1rem;
		text-align: center;
		color: #969ba3;
	}
	/* 下载APP */
	.downApp{
		height: 3.75rem;
	    position: relative;
		display: block;
		box-sizing: border-box;
		padding: .75rem 6rem 0 4rem;
	}
	.downApp img{
		position: absolute;
		top: .75rem;
		width: 2.25rem;
		height: 2.25rem;
		left: 1rem;
	}
	.downApp h3{
		font-size: 1rem;
	}
	.downApp p{
		font-size: 0.8125rem;
		color: #969ba3;
	}
	.downApp span{
		height: 2rem;
		position: absolute;
		top: 0;
		right: 1rem;
		bottom: 0;
		margin: auto;
		font-size: .875rem;
		line-height: 2rem;
		display: inline-block;
		padding-right: 1.3em;
		padding-left: 1.3em;
		text-align: center;
		color: #fff;
		border-radius: 99px;
		background-color: #ed424b;
	}
</style>
