<template>
	<main id="girl-hotbook">
		<!-- 隐藏 -->
		<div class="more-Hide" v-if="show01">
			<i class="hide-bg"></i>
			<div class="hide-cont">
				<div class="hide-nav">
					<router-link to="/girl">
						<i class="hide-icon hide-icon-home"></i>
						<h4>首页</h4>
					</router-link>
					<router-link to="/girl-type">
						<i class="hide-icon hide-icon-type"></i>
						<h4>分类</h4>
					</router-link>
					<router-link to="/girl-rank">
						<i class="hide-icon hide-icon-rank"></i>
						<h4>排行榜</h4>
					</router-link>
					<router-link to="/girl-free">
						<i class="hide-icon hide-icon-free"></i>
						<h4>免费</h4>
					</router-link>
					<router-link to="/girl-end">
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

		<!-- 书本的详细信息 -->
		<div class="bookIntro">
			<!-- 头部 -->
			<header class="book-intro-header">
				<ul class="header-hotbook">
					<li class="out">
						<router-link to="/girl">
							<span>
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-Fill"></use>
								</svg>
							</span>
						</router-link>
					</li>
					<p class="header-p">泼辣小厨娘</p>
					<li>
						<!-- 搜索 -->
						<router-link to="/search" class="type-icon">
							<svg class="icon type-icon-search" aria-hidden="true">
								<use xlink:href="#icon-sousuo"></use>
							</svg>
						</router-link>
						<!-- 更多 -->
						<div class="typeMore" @click="show()"></div>
					</li>
				</ul>
			</header>

			<!-- 书本介绍 -->
			<div class="bookIntro-box">
				<div class="bookIntro-one">
					<img src="../../../src/assets/img/hotbook/girl-book.jpg" alt="">
					<div class="book-cell">
						<h2>泼辣小厨娘</h2>
						<div class="box-auo">
							<aria>马家大小姐</aria>
							<span>Lv.3</span>
						</div>
						<div class="box-score">
							<output>
								<span class="star">6</span>
							</output>
							<span class="grade">9.4分/40人评过</span>
						</div>
						<p class="hotbook-type">现代言情/都市生活</p>
						<p class="hotbook-type">178.7万字<span>|</span>连载</p>
					</div>
				</div>
				<div class="bookIntro-two">
					<ul>
						<li>
							<span class="span-left" style="background: #ed424b;color: #fff;">免费试读</span>
						</li>
						<li>
							<span class="span-center">加入书架</span>
						</li>
						<li>
							<span class="span-right">VIP订阅</span>
						</li>
					</ul>
				</div>
				<div class="bookIntro-three">
					<span>下载起点读书App</span>
				</div>
			</div>
		</div>

		<!-- 目录 -->
		<div class="book-msg">
			<span class="book-synopsis">
				爆笑、纯美食文、日常、休闲、无CP、不虐、不圣母。更新给力、稳定，有完本老书保证。
			</span>
			<div class="book-list">
				<span class="book-list-one">目录</span>
				<div>
					<p>11小时前<span>·</span>连载至第八百三十三章 改变3</p>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
					</svg>
				</div>
			</div>
		</div>

		<!-- 投票 -->
		<div class="book-vote">
			<ul>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-toupiao"></use>
					</svg>
					<h5>投月票</h5>
					<p>43票<span>·</span>第631位</p>
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-toupiao"></use>
					</svg>
					<h5>投推荐票</h5>
					<p>1051周推荐票<span>·</span>第1019位</p>
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dashang"></use>
					</svg>
					<h5>打赏</h5>
					<p>本周1人打赏</p>
				</li>
			</ul>
		</div>

		<!-- 粉丝榜 -->
		<div class="book-fans">
			<div class="book-list">
				<span class="book-list-one">粉丝榜</span>
				<div>
					<p style="font-size: 1.125rem;margin-right: 0.25rem;">1.63万</p>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
					</svg>
				</div>
			</div>
			<div class="fans-list">
				<ul>
					<li class="fansList-li">
						<div class="fansList-All">
							<div class="fansList-img">
								<img src="../../../src/assets/img/hotbook/girl-fans01.jpg">
								<span class="label">掌门</span>
							</div>
							<h4 class="fansList-title">月月迷津渡</h4>
						</div>
					</li>
					<li class="fansList-li">
						<div class="fansList-All">
							<div class="fansList-img">
								<img src="../../../src/assets/img/hotbook/girl-fans02.jpg">
								<span class="label">堂主</span>
							</div>
							<h4 class="fansList-title">汝娃娃唬唬</h4>
						</div>
					</li>
					<li class="fansList-li">
						<div class="fansList-All">
							<div class="fansList-img">
								<img src="../../../src/assets/img/hotbook/girl-fans03.jpg">
								<span class="label">舵主</span>
							</div>
							<h4 class="fansList-title">好作品的书虫</h4>
						</div>
					</li>
					<li class="fansList-li fansList-last">
						<div class="fansList-All">
							<div class="fansList-img">
								<img src="../../../src/assets/img/hotbook/fans.jpg">
							</div>
							<h4 class="fansList-title">我<span>·</span>未登录</h4>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- 广告 -->
		<div class="advert">
			<img src="../../../src/assets/img/hotbook/adver.jpg" alt="">
		</div>

		<!-- 作者简介 -->
		<div class="book-fans">
			<div class="book-list">
				<span class="book-list-one">本书作者</span>
			</div>
			<div class="fans-list">
				<ul>
					<li class="PlatinumGod-li">
						<div class="PlatinumGod-All">
							<div class="PlatinumGod-img">
								<img src="../../../src/assets/img/hotbook/girl-auo.jpg">
								<span class="label">Lv.3</span>
							</div>
							<div class="PlatinumGod-cont">
								<h4 class="PlatinumGod-title">马家大小姐</h4>
								<p class="PlatinumGod-des">暂无作者简介</p>
								<svg class="icon god-more" aria-hidden="true">
									<use xlink:href="#icon-gengduo"></use>
								</svg>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- 相关标签 -->
		<div class="book-fans">
			<div class="book-list">
				<span class="book-list-one">相关标签</span>
			</div>
			<div class="fans-list book-titl">
				<span>平凡生活</span>
				<span>才女</span>
				<span>爆笑</span>
				<span>美食</span>
				<span>逗逼</span>
				<i></i>
				<i></i>
				<i></i>
				<i></i>
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
			<img src="../../assets/img/AppLogo.png" alt="">
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
				show01: false
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
	ol{
		list-style: none;
	}
	header{
		height: 3.09375rem;
	}
	.book-intro-header{
		position: relative;
		top: 0;
		z-index: 6;
	}
	.header-hotbook{
		height: 3.09375rem;
		list-style-type: none;
		padding: 0.6875rem 0;
		position: relative;
		box-sizing: border-box;
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
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5rem;
		position: absolute;
		left: 3rem;
	}
	/* btn */
	.typenav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
	}
	.typenav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
		position: absolute;
		left: 34%;
	}
	.typenav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		position: absolute;
		left: 48%;
	}
	.btnBox .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.type-icon{
		position: absolute;
		top: 0.3125rem;
		right: 12%;
	}
	.type-icon-search{
		width: 1.125rem;
		height: 1.125rem;
		margin: 0.625rem;
	}
	/* 更多 */
	.typeMore:empty{
		width: 2.25rem;
		height: 2.25rem;
		position: relative;
		top: -0.3125rem;
		right: 3%;
	}
	.typeMore{
		float: right;
		overflow: hidden;
	}
	.typeMore:empty::after,
	.typeMore:empty::before{
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
	.typeMore:empty::before{
		height: 4px;
		transform-origin: top center;
		border-bottom: 1px solid;
		top: 1.25rem;
	}
	/* 隐藏 */
	.more-Hide{
		position: fixed;
		z-index: 5;
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
	/* 内容 */
	.hotbook-bigbox{
		position: fixed;
		z-index: 3;
		top: 2.5rem;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.bookIntro{
		position: relative;
		margin: 0;
		background: #fff;
	}
	.bookIntro:after{
		content: "";
		width: 100%;
		height: 100%;
		background: url(../../../src/assets/img/hotbook/girl-book.jpg);
		position: absolute;
		top: 0;
		display: inline-block;
		opacity: calc(0.2);
		filter: blur(1.125rem);
		z-index: 1;
	}
	.bookIntro-box{
		position: relative;
		/* padding-top: 3.09375rem; */
		z-index: 3;
	}
	/* 第一部分 */
	.bookIntro-one{
		position: relative;
		padding: 1.125rem;
	}
	.bookIntro-one img{
		width: 5.90625rem;
		margin-right: 0.5625rem;
		float: left;
	}
	.book-cell{
		overflow: hidden;
	}
	.book-cell h2{
		font-size: 1.125rem;
	}
	.box-auo aria{
		font-size: 0.875rem;
	}
	.box-auo span{
		font-size: 0.25rem;
		background: #f0643a;
		color: #fff;
		padding: 0 0.125rem;
	}
	output{
		width: 5.375rem;
		height: 0.8125rem;
		display: inline-block;
		background: url(../../../src/assets/img/hotbook/star2.svg);
	}
	.star{
		width: 4.9375rem;
		display: block;
		line-height: 0.8125rem;
		color: transparent;
		background: url(../../../src/assets/img/hotbook/star.svg);
		/* background: 0 center repeat-x; */
		background-size: 18px 13px;
		float: left;
	}
	.grade{
		color: gray;
		font-size: 0.875rem;
		line-height: 1.75rem;
	}
	.hotbook-type{
		font-size: 0.8125rem;
		line-height: 1.75rem;
	}
	/* 第二部分 */
	.bookIntro-two,
	.bookIntro-three{
		padding: 0 1.125rem 1.125rem;
	}
	.bookIntro-two ul{
		display: table;
	}
	.bookIntro-two ul li{
		float: left;
		display: table-cell;
	}
	.bookIntro-two ul li span{
		width: 7.125rem;
		display: block;
		text-align: center;
		font-size: 0.875rem;
		line-height: 2.0625rem;
		background: #fff;
		box-shadow: inset 1px 0 #e3e4e6, inset 0 1px #e3e4e6, inset 0 -1px #e3e4e6, inset -1px 0 #e3e4e6;
	}
	.span-left{
		margin-right: 8px;
	}
	.span-center{
		margin: 0 8px;
	}
	.span-right{
		margin-left: 8px;
	}
	/* 第三部分 */
	.bookIntro-three span{
		width: 100%;
		background: #fff;
		display: block;
		line-height: 2.0625rem;
		text-align: center;
		box-shadow: inset 1px 0 #e3e4e6, inset 0 1px #e3e4e6, inset 0 -1px #e3e4e6, inset -1px 0 #e3e4e6;
	}
	/* 目录 */
	.book-msg{
		background: #fff;
		overflow: hidden;
	}
	.book-synopsis{
		font-size: 1rem;
		display: block;
		margin-left: 1.125rem;
		padding: 1.125rem 1.125rem 1.125rem 0;
		border-top: 1px solid transparent;
		border-bottom: 1px solid transparent;
		box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
	}
	.book-list{
		padding: 0 18px;
		line-height: 3.0625rem;
		overflow: hidden;
	}
	.book-list-one{
		font-size: 1.25rem;
		font-weight: bold;
		float: left;
	}
	.book-list>div{
		float: right;
	}
	.book-list p{
		font-size: 0.8125rem;
		color: #969ba3;
		float: left;
	}
	.book-list .icon{
		color: #969ba3;
	}
	/* 投票 */
	.book-vote,
	.book-fans{
		margin: 0.84375rem 0;
		z-index: 4;
		background: #fff;
	}
	.book-vote ul{
		display: table;
		margin: 0;
	}
	.book-vote ul li{
		width: 23%;
		text-align: center;
		padding: 0.84375rem 0 0.5625rem 0;
		display: table-cell;
	}
	.book-vote .icon{
		width: 2.5rem;
		height: 2.5rem;
		color: #fea527;
	}
	.book-vote p{
		font-size: 0.625rem;
		color: #969ba3;
	}
	/* 粉丝榜 */
	.fans-list{
		overflow: hidden;
		border-top: 1px solid #f0f1f2;
	}
	.fansList-li{
		float: left;
	}
	.fansList-li::after{
		content: '';
		display: block;
		margin-top: -1px;
		margin-left: 1rem;
		border-bottom: 1px solid #f0f1f2;
	}
	.fansList-last{
		border-left: 1px solid #f0f1f2;
	}
	.fansList-All{
		position: relative;
		display: block;
		overflow: hidden;
		padding: 0.9375rem;
	}
	.fansList-img{
		width: 3.375rem;
		height: 3.375rem;
		position: relative;
		margin-right: 0.84375rem;
	}
	.fansList-li img{
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
		background-color: #f0643a;
	}
	.label-Okami{
		background-color: #f0643a;
	}
	.fansList-cont{
		overflow: hidden;
	}
	.fansList-title{
		line-height: 1.4;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.875rem;
	}
	.fansList-des{
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
	/* 广告 */
	.advert{
		padding: 0 1rem;
		display: block;
		overflow: hidden;
		margin: .75rem 0;
		position: relative;
	}
	.advert img{
		width: 100%;
		height: 100%;
	}
	.advert::after{
		content: '广告';
		font-size: 12px;
		line-height: 1;
		position: absolute;
		right: 1rem;
		bottom: 0.375rem;
		padding: 1px;
		transform: translateY(-3px) scale(.75);
		opacity: .6;
		color: #fff;
		border: 1px solid;
		background-color: rgba(0,0,0,.3);
	}
	/* 作者简介 */
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
	/* 相关标签 */
	.book-titl{
		font-size: .75rem;
		line-height: 0;
		padding: 0 1rem;
		text-align: justify;
	}
	.book-titl>span,
	.book-titl i:empty{
		font-size: 0.875rem;
		line-height: 1.875rem;
		display: inline-block;
		padding: 0 0.703125rem;
		text-align: center;
		border: 1px solid;
		border-radius: 99px;
		margin-top: 0.84375rem;
		color: #969ba3;
	}
	.book-titl i:empty{
		visibility: hidden;
		overflow: hidden;
		height: 0;
		vertical-align: top;
		border-width: 0 1px;
	}
	.book-titl i::before{
		content: '四字中文';
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
	.blue{
		color: #4284ed;
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
