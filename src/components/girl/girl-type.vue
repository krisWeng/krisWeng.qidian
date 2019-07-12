<template>
	<div id="girl-type">
		<!-- 头部 -->
		<header>
			<ul class="girltype-ul">
				<li class="out">
					<router-link to="/girl">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">分类</p>
				<li class="girl-type-link">
					<router-link to="/boy-type" class="girltypenav-btn">
						男生
					</router-link>
					<router-link to="/girl-type" class="girltypenav-btn">
						女生
					</router-link>
				</li>
				<li class="girl-type-icon">
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
		
		<!-- 内容 -->
		<div class="module-box">
			<ul>
				<li v-for="(item,index) in typeCont" :key="index">
					<div class="type-sbox-title" >
						<h3>{{item.title}}</h3>
						<span>共 {{item.booknum}} 本作品</span>
						<svg class="icon type-icon-right" aria-hidden="true">
							<use xlink:href="#icon-right"></use>
						</svg>
					</div>
					<div class="type-sbox-cont">
						<span>{{item.typeName01}}</span>
						<span>{{item.typeName02}}</span>
						<span>{{item.typeName03}}</span>
						<span>{{item.typeName04}}</span>
						<span>{{item.typeName05}}</span>
						<span>{{item.typeName06}}</span>
						<span>{{item.typeName07}}</span>
						<span>{{item.typeName08}}</span>
						<span>{{item.typeName09}}</span>
						<span>{{item.typeName10}}</span>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
				</li>
			</ul>
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
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show01: false,
				typeCont:[
					{
						title: '古代言情',
						booknum: '209993',
						typeName01: '女尊王朝',
						typeName02: '古典架空',
						typeName03: '古代情缘',
						typeName04: '穿越奇情',
						typeName05: '宫闱宅斗',
						typeName06: '经商种田',
						typeName07: '西方时空',
						typeName08: '清穿民国',
						typeName09: '上古蛮荒',
						typeName10: '热血江湖'
					},
					{
						title: '现实生活',
						booknum: '25',
						typeName01: '家与情感',
						typeName02: '行业人生',
						typeName03: '探索科幻',
						typeName04: '人文博览'
					},
					{
						title: '仙侠奇缘',
						booknum: '36198',
						typeName01: '武侠情缘',
						typeName02: '古典仙侠',
						typeName03: '现代修真',
						typeName04: '远古洪荒',
						typeName05: '仙侣奇缘'
						
					},
					{
						title: '现代言情',
						booknum: '288703',
						typeName01: '都市生活',
						typeName02: '婚恋情缘',
						typeName03: '娱乐明星',
						typeName04: '商战职场',
						typeName05: '都市异能',
						typeName06: '豪门世家',
						typeName07: '极道江湖',
						typeName08: '民国情缘',
						typeName09: '异国情缘'
					},
					{
						title: '浪漫青春',
						booknum: '174218',
						typeName01: '青春校园',
						typeName02: '青春疼痛',
						typeName03: '叛逆成长',
						typeName04: '青春纯爱'
					},
					{
						title: '玄幻言情',
						booknum: '137990',
						typeName01: '东方玄幻',
						typeName02: '异界大陆',
						typeName03: '远古神话',
						typeName04: '异族恋情',
						typeName05: '魔法幻情',
						typeName06: '西方奇幻',
						typeName07: '异能超术'
					},
					{
						title: '悬疑灵异',
						booknum: '12113',
						typeName01: '推理侦探',
						typeName02: '恐怖惊悚',
						typeName03: '悬疑探险',
						typeName04: '灵异鬼怪',
						typeName05: '神秘文化',
						typeName06: '幽冥情缘'
					},
					{
						title: '科幻空间',
						booknum: '21473',
						typeName01: '未来世界',
						typeName02: '进化变异',
						typeName03: '星际恋歌',
						typeName04: '时空穿梭',
						typeName05: '古武机甲',
						typeName06: '超级科技',
						typeName07: '末世危机'
					},
					{
						title: '游戏竞技',
						booknum: '6742',
						typeName01: '电子竞技',
						typeName02: '网游情缘',
						typeName03: '游戏异界',
						typeName04: '体育竞技'
					},
					{
						title: '轻小说',
						booknum: '14000',
						typeName01: '同人衍生',
						typeName02: '唯美幻想',
						typeName03: '萌系变身',
						typeName04: '青春日常',
						typeName05: '搞笑吐槽'
					},
					{
						title: '纯爱',
						booknum: '11000',
						typeName01: '古纯',
						typeName02: '现纯',
						typeName03: '幻爱'
					}
				]
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
	header{
		height: 3.09375rem;
	}
	.girltype-ul{
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
	.girl-type-link{
		position: absolute;
		left: 37%;
	}
	.girltypenav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.girltypenav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
		
	}
	.girltypenav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.5rem;
	}
	.girl-type-link .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.girl-type-icon{
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
	.hide-icon-type{
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
	.module-box{
		background: #fff;
	}
	/* 标题 */
	.type-sbox-title{
		line-height: 2.625rem;
		position: relative;
		display: block;
		padding: 0 1.125rem;
	}
	.type-sbox-title h3{
		font-family: FZZCYSK;
		display: inline;
		color: #33373d;
	}
	.type-sbox-title span{
		font-family: 'pingfang sc';
		font-size: 0.875rem;
		margin-left: .5rem;
		color: #969ba3;
	}
	.type-icon-right{
		position: absolute;
		top: 0;
		right: .875rem;
		bottom: 0;
		margin: auto;
		color: #969ba3;
	}
	.type-sbox-title::after{
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		left: 1rem;
		border-bottom: 1px solid #f0f1f2;
	}
	/* 分类 */
	.type-sbox-cont{
		font-size: .75rem;
		line-height: 0;
		padding: 0 1rem 1rem;
		text-align: justify;
	}
	.type-sbox-cont>span,
	.type-sbox-cont i:empty{
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
	.type-sbox-cont i:empty{
		visibility: hidden;
		overflow: hidden;
		height: 0;
		vertical-align: top;
		border-width: 0 1px;
	}
	.type-sbox-cont i::before{
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
	.footer-btnLink{
		padding: .5625rem 1.1875rem 0;
		text-align: center;
		color: #969ba3;
	}
	.footer-btnLink li{
		display: inline-block;
		vertical-align: top;
		white-space: normal;
		padding: 0.84375rem 0.875rem 0.5625rem;
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
