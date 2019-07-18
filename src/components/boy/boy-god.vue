<template>
	<main id="boy-god">
		<!-- 头部 -->
		<header>
			<ul class="boyend-ul">
				<li class="out">
					<router-link to="/boy">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">大神</p>
				<li class="boy-end-link">
					<router-link to="/boy-god" class="godnav-btn">
						男生
					</router-link>
					<router-link to="/girl-god" class="godnav-btn">
						女生
					</router-link>
				</li>
				<li class="boy-end-icon">
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

		<!-- 隐藏 -->
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

		<!-- 大神新书 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>大神新书</h3>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in GodNew" :key="index">
						<img :src="item.pic" class="GodNew-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span class="author-name">{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>

		<!-- 白金列表 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>白金列表</h3>
				</div>
			</div>
			<div class="slide">
				<ol>
					<li class="PlatinumGod-li" v-for="(item,index) in PlatinumMsg" :key="index">
						<div class="PlatinumGod-All">
							<div class="PlatinumGod-img">
								<img :src="item.pic">
								<span class="label">白金</span>
							</div>
							<div class="PlatinumGod-cont">
								<h4 class="PlatinumGod-title">{{item.PlatinumName}}</h4>
								<p class="PlatinumGod-des">{{item.PlatinumIntro}}</p>
								<svg class="icon god-more" aria-hidden="true">
									<use xlink:href="#icon-gengduo"></use>
								</svg>
							</div>
						</div>
					</li>
				</ol>
			</div>
		</div>

		<!-- 大神列表 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>大神列表</h3>
				</div>
			</div>
			<div class="slide">
				<ul>
				<!-- <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"> -->
					  <li  class="PlatinumGod-li" v-for="(item,index) in OkamiMsg" :key="index">
						<div class="PlatinumGod-All">
							<div class="PlatinumGod-img">
								<img :src="item.pic">
								<span class="label-Okami">大神</span>
							</div>
							<div class="PlatinumGod-cont">
								<h4 class="PlatinumGod-title">{{item.OkamiName}}</h4>
								<p class="PlatinumGod-des">{{item.OkamiIntro}}</p>
								<svg class="icon god-more" aria-hidden="true">
									<use xlink:href="#icon-gengduo"></use>
								</svg>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- 底部 -->
		<footer>
			<!-- 登录 -->
			<div class="footer-login">
				<strong>登录后获得更多特色功能</strong>
				<span>·</span>
				<router-link to="/login" class="blue">立即登录</router-link>
			</div>
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
			<img src="../../../data/img/AppLogo.png" alt="">
			<h3>安装起点读书客户端</h3>
			<p>看更多正版好书</p>
			<span>下载</span>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show01: false,
				GodNew:[],
				PlatinumMsg:[],
        OkamiMsg:[]
      }
		},
		methods: {
			show(){
				this.show01 = ! this.show01
			},
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					let last = this.OkamiMsg[this.OkamiMsg.length - 1];
					for (let i = 1; i <= 10; i++) {
					  this.OkamiMsg.push(last + i);
					}
					this.loading = false;
				}, 2500);
			}
		},
    mounted(){
      this.$http.get("./data/boy-god.json")
      .then((res)=>{
        this.GodNew = res.data.GodBoy.GodNew
        this.PlatinumMsg = res.data.GodBoy.PlatinumMsg
        this.OkamiMsg = res.data.GodBoy.OkamiMsg
      })
    }
	}
</script>

<style>*{
		margin: 0 auto;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	header{
		height: 3.09375rem;
	}
.boyend-ul{
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
	.header-p{
		position: absolute;
		left: 10%;
	}
	/* btn */
	.boy-end-link{
		position: absolute;
		left: 37%;
	}
	.godnav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.godnav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;

	}
	.godnav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.5rem;
	}
	.boy-end-link .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.boy-end-icon{
		margin: 0.5rem 0.5625rem 0.5rem 0;
		position: absolute;
		top: 0;
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
		background: url(../../../data/img/nav-icon.png);
		background-position: -31px 0;
		background-size: 87px 87px;
	}
	.hide-icon-type{
		width: 24px;
		height: 24px;
		background: url(../../../data/img/nav-icon.png);
		background-position: -63px -28px;
		background-size: 87px 87px;
	}
	.hide-icon-rank{
		width: 27px;
		height: 26px;
		background: url(../../../data/img/nav-icon.png);
		background-position: 0 0;
		background-size: 87px 87px;
	}
	.hide-icon-free{
		width: 26px;
		height: 26px;
		background: url(../../../data/img/nav-icon.png);
		background-position: 0 -30px;
		background-size: 87px 87px;
	}
	.hide-icon-end{
		width: 20px;
		height: 27px;
		background: url(../../../data/img/nav-icon.png);
		background-position: 0 -60px;
		background-size: 87px 87px;
	}
	.hide-icon-money{
		width: 24px;
		height: 24px;
		background: url(../../../data/img/nav-icon.png);
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
	/* 内容 */
	.module{
		margin: .75rem 0;
		background-color: #fff;
	}
	/* 盒子头部 */
	.header{
		height: 1.75rem;
		padding: 0 1rem;
		border-top: 1rem solid transparent;
	}
	.header-title{
		float: left;
	}
	.header-title h3{
		font-family: FZZCYSK;
		display: inline;
		color: #33373d;
	}
	.header-title h3::before{
		content: '';
		width: .625rem;
		height: 1em;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: -.22ex;
		color: transparent;
		border-left: 2px solid #ed424b;
	}
	.header-title span{
		font-size: 0.875rem;
		margin-left: .5rem;
		color: #969ba3;
	}
	.slide ol{
		/* min-height: 10.75rem; */
		position: relative;
		overflow-x: auto;
		overflow-y: hidden;
		padding-left: .5rem;
	}
	.slide-ol{
		white-space: nowrap;
	}
	.slide-ol::-webkit-scrollbar {
		display: none;
	}
	.slide-ol li{
		width: 4.640625rem;
		display: inline-block;
		vertical-align: top;
		white-space: normal;
		padding: 0.84375rem 0.5625rem 0.5625rem;
	}
	.GodNew-img{
		width: inherit;
		height: 6.1875rem;
		display: block;
		box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.slide figcaption{
		font-size: 0.875rem;
		line-height: 1.25;
		overflow: hidden;
		margin: .5rem 0 .125rem;
	}
	.author-name{
		font-size: 0.8125rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	    color: #969ba3;
	}
	.header-more{
		float: right;
	}
	/* 白金列表 */
	.PlatinumGod-All{
		position: relative;
		display: block;
		overflow: hidden;
		padding: 1rem;
		transition: padding-left .15s;
	}
	.PlatinumGod-li::after{
		content: '';
		display: block;
		margin-top: -1px;
		margin-left: 1rem;
		border-bottom: 1px solid #f0f1f2;
	}
	.PlatinumGod-img{
		width: 3.375rem;
		height: 3.375rem;
		position: relative;
		float: left;
		margin-right: 0.84375rem;
	}
	.PlatinumGod-li img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		box-shadow: 0 0 1px rgba(0,0,0,.1);
		display: block;
	}
	.label,
	.label-Okami{
		min-width: 2.5rem;
		position: absolute;
		bottom: 0;
		left: 12%;
		font-size: 0.8125rem;
		line-height: 1.125rem;
		display: inline-block;
		box-sizing: border-box;
		text-align: center;
		border-radius: 40px;
		background-image: linear-gradient(to bottom,rgba(255,255,255,.2),rgba(255,255,255,.2) 50%,rgba(255,255,255,0) 50%);
		color: #fff;
	}
	.label{
		background-color: #a091ff;
	}
	.label-Okami{
		background-color: #ed424b;
	}
	.PlatinumGod-cont{
		overflow: hidden;
	}
	.PlatinumGod-title{
		line-height: 1.4;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 1.125rem;
	}
	.PlatinumGod-des{
		line-height: 1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 1rem;
		overflow: hidden;
		margin: 0.421875rem 1.6875rem 0.421875rem 0;
		color: #969ba3;
	}
	.god-more{
		position: absolute;
		top: 0;
		right: 1rem;
		bottom: 0;
		margin: auto;
		color: #969ba3;
	}
	/* 底部 */
	footer{
		background: #fff;
	}
	.footer-login{
		width: 90%;
		text-align: center;
		font-size: 1rem;
		line-height: 3.4375rem;
		padding: 0 1rem;
		border-bottom: 1px solid #f0f1f2;
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
