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
				show01: false,
				GodNew:[
					{
						pic: require('../../assets/img/godBoy/GodNewBoy01.jpg'),
						bookName: '重生之最好时代',
						author: '九灯和善'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy02.jpg'),
						bookName: '我真不是暴发户',
						author: '晨光路西法'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy03.jpg'),
						bookName: '老胡同',
						author: '隐为者'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy04.jpg'),
						bookName: '战神无双',
						author: '尘风'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy05.jpg'),
						bookName: '氪金成仙',
						author: '五志'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy06.jpg'),
						bookName: '一剑斩破九重天',
						author: '流浪的蛤蟆'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy07.jpg'),
						bookName: '前任无双',
						author: '跃千愁'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy08.jpg'),
						bookName: '九天',
						author: '黑山老鬼'
					},
					{
						pic: require('../../assets/img/godBoy/GodNewBoy09.jpg'),
						bookName: '我是丹田掌控者',
						author: '南极海'
					}
				],
				PlatinumMsg:[
					{
						pic: require('../../assets/img/godBoy/PlatinumBoy01.png'),
						PlatinumName: '辰东',
						PlatinumIntro: '阅文集团白金作家，网络文学代表人物之一，中国作协会员。'
					},
					{
						pic: require('../../assets/img/godBoy/PlatinumBoy02.png'),
						PlatinumName: '骷髅精灵',
						PlatinumIntro: '阅文集团白金作家，网络文学著名作家，上海网络作家协会副会长，上海青年文联副会长。'
					},
					{
						pic: require('../../assets/img/godBoy/PlatinumBoy03.png'),
						PlatinumName: '小刀锋利',
						PlatinumIntro: '阅文集团白金作家，著名网络作家，作品磅礴大气，在业内及粉丝群体中极富盛名。'
					},
					{
						pic: require('../../assets/img/godBoy/PlatinumBoy04.png'),
						PlatinumName: '尘风',
						PlatinumIntro: '阅文集团白金作家，网络文学著名作家，2015福布斯中国原创文学风云榜第三名。'
					},
					{
						pic: require('../../assets/img/godBoy/PlatinumBoy05.png'),
						PlatinumName: '血红',
						PlatinumIntro: '阅文集团白金作家，上海网络作家协会会长，理工高材生哲学硕士，富豪榜榜上作家。'
					}
				],
				OkamiMsg:[
					{
						pic: require('../../assets/img/godBoy/OkamiBoy01.jpg'),
						OkamiName: '幻雨',
						OkamiIntro: '阅文大神级作者，在仙侠小说创作上独具特色，聚集了众多粉丝，代表作品《百炼成仙》、《仙碎虚空》。'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy02.jpg'),
						OkamiName: '睡觉会变白',
						OkamiIntro: '网络文学大神作家'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy03.jpg'),
						OkamiName: '狗狍子',
						OkamiIntro: '网络小说大神级人物。已完本作品《官术》被网友封为都市官文小说经典，目前新书《最强校草》正在火爆连载中！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy04.png'),
						OkamiName: '秒速九光年',
						OkamiIntro: '阅文集团旗下起点中文网大神作家，作品世界构建宏伟缜密，未来感十足！《超级基因装甲》正在起点中文网火热连载中！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy05.jpg'),
						OkamiName: '天堂羽',
						OkamiIntro: ' 学历本科，专业电子信息工程，兴趣……看书、动漫、游戏、旅游度假'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy06.jpg'),
						OkamiName: '夜独醉',
						OkamiIntro: ' 创世大神作者'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy07.jpg'),
						OkamiName: '萧舒',
						OkamiIntro: '阅文集团大神级作者，在武侠类小说创作方面极具个人特色。作品武侠风很浓重，吸引了大量读者和粉丝。目前新作《白袍总管》正在火热连载中！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy08.jpg'),
						OkamiName: '宝石猫',
						OkamiIntro: '爱小说，所以也想写写。'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy09.jpg'),
						OkamiName: '曾经拥有的方向感',
						OkamiIntro: '阅文集团旗下起点中文网大神作家，作品风格热血爽白，剧情节奏感很强！《傲世武皇》正在起点中文网火热连载中！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy10.jpg'),
						OkamiName: '打死都要钱',
						OkamiIntro: '著名玄幻作者，作品风格热血，构思别具一格，擅长对高潮剧情节奏的把握深受读者喜爱。'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy11.jpg'),
						OkamiName: '花都大少',
						OkamiIntro: '极品全能学生'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy12.jpg'),
						OkamiName: '争斤论两花花帽',
						OkamiIntro: '阅文集团大神作家，一名立志于做人民教师的公司职员'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy13.png'),
						OkamiName: '傅啸尘',
						OkamiIntro: '阅文集团旗下起点中文网大神作家，代表作品《武神空间》以热血爽快见长，剧情精彩，让人拍案叫绝，目前正火热连载中！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy14.jpg'),
						OkamiName: '新丰',
						OkamiIntro: '阅文集团大神作家，其作品风格幽默诙谐，玄幻品类热销榜前列作家。行文张扬不羁，节奏感强。代表作《最强的系统》《彪悍的人生》《无敌真寂寞》新书《我不想逆天啊》火热连载中。'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy15.jpg'),
						OkamiName: '沉默的糕点',
						OkamiIntro: '起点大神作者'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy16.jpg'),
						OkamiName: '乘风御剑',
						OkamiIntro: ' 学历：专科。专业：法律。兴趣：貌似兴趣就是看小说，看电影，暴走之类的了。'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy17.png'),
						OkamiName: '相思洗红豆',
						OkamiIntro: '雄性，自尊心很强的雄性！'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy18.jpg'),
						OkamiName: '迪巴拉爵士',
						OkamiIntro: '网络文学大神作者'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy19.png'),
						OkamiName: '文抄公',
						OkamiIntro: '网络文学大神作家'
					},
					{
						pic: require('../../assets/img/godBoy/OkamiBoy20.jpg'),
						OkamiName: '上山打老虎额',
						OkamiIntro: '阅文集团旗下起点中文网大神作家，作品幽默风趣，可读性极强，连贯性突出，环节紧凑！《明朝败家子》正在起点中文网火热连载中！'
					}
				]
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
