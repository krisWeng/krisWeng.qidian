<template>
	<main id="boy-end">
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
				<p class="header-p">完本</p>
				<li class="boy-end-link">
					<router-link to="/boy-end" class="endnav-btn">
						男生
					</router-link>
					<router-link to="/girl-end" class="endnav-btn">
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
		
		<!-- 影视同期 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>影视同期</h3>
					<span>火热影视原著</span>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in TVEnd" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 经典必读 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>经典必读</h3>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<div class="slide">
				<ol>
					<li class="NewBook-li">
						<div class="NewBook-All">
							<img src='../../assets/img/endBoy/ClassicsBoy.jpg'>
							<div class="NewBook-cont">
								<h4 class="NewBook-title">嚣张狂兵</h4>
								<p class="NewBook-des">嚣张狂兵重返都市。推荐新书《绝色总裁的超级兵王》</p>
								<div class="NewBook-other">
									<div class="NewBook-author">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-geren"></use>
										</svg>木头脑
									</div>
									<div class="NewBook-msg">
										<span class="NewBook-tag gray">都市</span>
										<span class="NewBook-tag red">完结</span>
										<span class="NewBook-tag blue">537.31万字</span>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 大神完本 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>大神完本</h3>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<div class="slide">
				<ol>
					<li v-for="(item,index) in GodEnd" class="NewBook-li" :key="index">
						<div class="NewBook-All">
							<img :src="item.pic">
							<div class="NewBook-cont">
								<h4 class="NewBook-title">{{item.title}}</h4>
								<p class="NewBook-des">{{item.des}}</p>
								<div class="NewBook-other">
									<div class="NewBook-author">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-geren"></use>
										</svg>{{item.author}}
									</div>
									<div class="NewBook-msg">
										<span class="NewBook-tag gray">{{item.gray}}</span>
										<span class="NewBook-tag red">{{item.red}}</span>
										<span class="NewBook-tag blue">{{item.blue}}</span>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ol>
			</div>
		</div>
	
		<!-- 畅销完本 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>畅销完本</h3>
					<span>一周热销完本书</span>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<div class="slide">
				<ol>
					<li v-for="(item,index) in HotEnd" class="NewBook-li" :key="index">
						<div class="NewBook-All">
							<img :src="item.pic">
							<div class="NewBook-cont">
								<h4 class="NewBook-title">{{item.title}}</h4>
								<p class="NewBook-des">{{item.des}}</p>
								<div class="NewBook-other">
									<div class="NewBook-author">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-geren"></use>
										</svg>{{item.author}}
									</div>
									<div class="NewBook-msg">
										<span class="NewBook-tag gray">{{item.gray}}</span>
										<span class="NewBook-tag red">{{item.red}}</span>
										<span class="NewBook-tag blue">{{item.blue}}</span>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ol>
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
				TVEnd:[
					{
						pic: require('../../assets/img/endBoy/TVEndBoy01.jpg'),
						bookName: '极品家丁',
						author: '禹言'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy02.jpg'),
						bookName: '锦衣夜行',
						author: '月关'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy03.jpg'),
						bookName: '回到明朝当王爷',
						author: '月关'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy04.jpg'),
						bookName: '全职高手',
						author: '蝴蝶蓝 '
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy05.jpg'),
						bookName: '盗墓笔记',
						author: '南派三叔 '
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy06.jpg'),
						bookName: '鬼吹灯（盗墓者的经历',
						author: '本物天下霸唱'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy07.jpg'),
						bookName: '鬼吹灯II',
						author: '本物天下霸唱'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy08.jpg'),
						bookName: '陈二狗的妖孽人生',
						author: '烽火戏诸侯'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy09.jpg'),
						bookName: '从前有座灵剑山',
						author: '国王陛下'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy10.jpg'),
						bookName: '冠军之光',
						author: '林海听涛'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy11.jpg'),
						bookName: '大泼猴',
						author: '甲鱼不是龟'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy12.jpg'),
						bookName: '校花的贴身高手',
						author: '鱼人二代'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy13.jpg'),
						bookName: '诛仙（电视名：诛仙青',
						author: '萧鼎'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy14.jpg'),
						bookName: '刑名师爷',
						author: '沐轶'
					},
					{
						pic: require('../../assets/img/endBoy/TVEndBoy15.jpg'),
						bookName: '纳妾记',
						author: '沐轶'
					}
				],
				GodEnd:[
					{
						pic: require('../../assets/img/endBoy/GodEndBoy01.jpg'),
						title: '天牧',
						des: '天荒我未老，仙灭我重生。踏八荒，只为寻一人！斩众神，只求一因果。苍天之上，唯我独行！老书《血冲仙穹》重发，本书与《帝霸》是姊妹篇。',
						author: '厌笔萧生',
						gray: '玄幻',
						red: '完本',
						blue: '345.28万字'
						
					},
					{
						pic: require('../../assets/img/endBoy/GodEndBoy02.jpg'),
						title: '蹩脚诗人流浪记',
						des: '林远发现在炼妖祭坛上，万物皆可妖（niang）！于是，他身边的物品就一个个被妖（niang）化……阅读提示（并不重要）：本书是纯洁的轻玄幻都市轻松文，不需要老司机带路即可观看！',
						author: '蓝领笑笑生',
						gray: '玄幻',
						red: '完本',
						blue: '84.34万字'
						
					},
					{
						pic: require('../../assets/img/endBoy/GodEndBoy03.jpg'),
						title: '变身之武侠到神话',
						des: '【玄幻爆爽精品】一个关于神界神王的秘密！一个关于九柄神剑的传说！造就出一位通天彻地，万古无敌的剑道无敌强者！我之剑道……便是天下第一剑道！',
						author: 'EK巧克力',
						gray: '玄幻',
						red: '完本',
						blue: '159.96万字'
					}
				],
				HotEnd:[
					{
						pic: require('../../assets/img/endBoy/HotEndBoy01.jpg'),
						title: '暗黑之处',
						des: '网游荣耀中被誉为教科书级别的顶尖高手，因为种种原因遭到俱乐部的驱逐，离开职业圈的他寄身于一家网吧成了一个小小的网管，但是，拥有十年游戏经验的他，在荣耀新开的第十区重新投入了游戏，带着对往昔的回忆，和一把未完成的自制武器，开始了重返巅峰之路。===================================',
						author: '蝴蝶蓝 ',
						gray: '游戏',
						red: '完结',
						blue: '535.02万字'
						
					},
					{
						pic: require('../../assets/img/endBoy/HotEndBoy02.jpg'),
						title: '完美世界',
						des: '一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！一个少年从大荒中走出，一切从这里开始……',
						author: '辰东',
						gray: '玄幻',
						red: '完结',
						blue: '658.34万字'
						
					},
					{
						pic: require('../../assets/img/endBoy/HotEndBoy03.jpg'),
						title: '飞天',
						des: '苍穹之下世态炎凉，妖魔鬼怪不敌人情冷暖！纤纤柔荑，美人如玉，怎奈天地之间剑气如虹！浩瀚星空，七情六欲，贪念嗔痴，佛谛如来，任你法力无边！芸芸众生，一腔诚愿却换来血海滔滔！鬼哭神嚎，血海无涯，敢问路在何方！既无路，任它苦海血海，白骨化舟，一飞冲天！',
						author: '跃千愁',
						gray: '仙侠',
						red: '完结',
						blue: '698.48万字'
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
		left: 38%;
	}
	.endnav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.endnav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
		
	}
	.endnav-btn:nth-child(2){
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
	.Book-img{
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
	.slide p span{
		font-size: 0.8125rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	    color: #969ba3;
	}
	.header-more{
		float: right;
	}
	/* 人气免费 */
	.NewBook-All{
		position: relative;
		display: block;
		overflow: hidden;
		padding: 1rem;
		transition: padding-left .15s;
	}
	.NewBook-li::after{
		content: '';
		display: block;
		margin-top: -1px;
		margin-left: 1rem;
		border-bottom: 1px solid #f0f1f2;
	}
	.NewBook-li img{
		width: 4.125rem;
		height: 5.5rem;
		float: left;
		margin-right: .5rem;
		box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.NewBook-cont{
		overflow: hidden;
	}
	.NewBook-title{
		line-height: 1.4;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 1.125rem;
	}
	.NewBook-des{
		height: 2.25rem;
		line-height: 1.1875rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 1rem;
		overflow: hidden;
		margin: .375rem 0;
		color: #969ba3;
		word-break: break-word;
	}
	.NewBook-other{
		font-size: 0.875rem;
		overflow: hidden;
	}
	.NewBook-author{
		max-width: calc(100vw - 2rem - (176rem / 16));
		display: block;
		text-overflow: ellipsis;
		color: #969ba3;
		float: left;
	}
	.NewBook-msg{
		float: right;
	}
	.NewBook-tag{
		font-size: 0.625rem;
		line-height: 1.5;
		display: inline-block;
		margin: 0 -.15em;
		padding: 0 .25em;
		transform: scale(0.9);
		vertical-align: bottom;
		border: 0.0625rem solid;
		border-radius: .11111em;
	}
	.gray{
		color: gray;
	}
	.red{
		color: red;
	}
	.blue{
		color: blue;
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
