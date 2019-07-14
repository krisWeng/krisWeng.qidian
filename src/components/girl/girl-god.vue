<template>
	<main id="girl-god">
		<!-- 头部 -->
		<header>
			<ul class="girlgod-ul">
				<li class="out">
					<router-link to="/girl">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">大神</p>
				<li class="girl-god-link">
					<router-link to="/boy-god" class="girlgodnav-btn">
						男生
					</router-link>
					<router-link to="/girl-god" class="girlgodnav-btn">
						女生
					</router-link>
				</li>
				<li class="girl-god-icon">
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
						pic: require('../../assets/img/godGirl/GodNewGirl01.jpg'),
						bookName: '余生有你甜又暖',
						author: '囧囧有妖'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl02.jpg'),
						bookName: '嫁入豪门77天后',
						author: '绛美人'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl03.jpg'),
						bookName: '金粉',
						author: '青铜穗'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl04.jpg'),
						bookName: '九零长女有点苏',
						author: '燕小陌'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl05.jpg'),
						bookName: '只想爱你再多一点点',
						author: '古萧'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl06.jpg'),
						bookName: '王妃娘娘，爷在墙外等你',
						author: '七叶槿'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl07.jpg'),
						bookName: '藏不住的欢喜',
						author: '银子洛'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl08.jpg'),
						bookName: '穿越五十年代之养殖大户',
						author: '小硕鼠5030'
					},
					{
						pic: require('../../assets/img/godGirl/GodNewGirl09.jpg'),
						bookName: '世界第一甜',
						author: '为你穿高跟鞋'
					}
				],
				PlatinumMsg:[
					{
						pic: require('../../assets/img/godGirl/PlatinumGirl01.jpg'),
						PlatinumName: '叶非夜',
						PlatinumIntro: '白金作家，创下单日销售24万元记录的言情天后，2015年福布斯中国原创风云榜年度人气作家第一名，代表作《国民老公带回家》。'
					},
					{
						pic: require('../../assets/img/godGirl/PlatinumGirl02.png'),
						PlatinumName: '夏染雪',
						PlatinumIntro: '阅文集团旗下小说阅读网白金作家，至今，已创作40多部作品，涉猎题材众多，聚揽人气过亿，写作风格独树一帜。多部小说长期位居热销榜前列。'
					},
					{
						pic: require('../../assets/img/godGirl/PlatinumGirl03.jpg'),
						PlatinumName: '苏小暖',
						PlatinumIntro: '白金作家，常年雄踞人气畅销榜第一,并荣获第一届福布斯原创文学风云榜女性榜单总榜第一名。深受90后、00后读者喜爱。'
					},
					{
						pic: require('../../assets/img/godGirl/PlatinumGirl04.jpg'),
						PlatinumName: '吱吱',
						PlatinumIntro: '阅文集团白金作者，起点女生网顶级大神，古言天后。她笔下的故事，总是精致而考究，又带有人文关怀。情节细腻而环环相扣，角色形象鲜明，衣食住行等细节都值得细细揣摩和品味。'
					},
					{
						pic: require('../../assets/img/godGirl/PlatinumGirl05.jpg'),
						PlatinumName: '安知晓',
						PlatinumIntro: '白金作家。擅长写多主角故事，行文流畅，文风大气，语言幽默爆笑。文章跌宕起伏，充满爱情和悬疑的色彩，元素众多，男女主角个性鲜明，敢爱敢恨。'
					}
				],
				OkamiMsg:[
					{
						pic: require('../../assets/img/godGirl/OkamiGirl01.png'),
						OkamiName: '金铃动',
						OkamiIntro: '阅文集团大神作家，起点女频仙侠文代表作家。作者擅长构架宏大的修仙世界，文笔简练，想象力极其丰富。他笔下的主角个性鲜明，突破传统女性仙侠文的桎梏，为读者展现了一个自立自强，凭借个人能力问鼎修仙巅峰的女性形象。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl02.jpg'),
						OkamiName: '罗衣对雪',
						OkamiIntro: '云起书院现言大神，行文流畅，故事新颖，人物形象特别丰满，代表作《Boss太嚣张：老公，结婚吧》'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl03.jpg'),
						OkamiName: '六月浩雪',
						OkamiIntro: '阅文旗下云起书院知名宅斗作家，完结小说《重生之温婉》曾进入百度风云榜前五十，颇受读者追捧，新书《嫡女重生记》正在火热连载中。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl04.jpg'),
						OkamiName: '莫小淘',
						OkamiIntro: '莫小淘，云起书院大神作者，擅长甜宠文，题材新颖创新，笔下的男主深情专一，深受万千读者喜爱。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl05.jpg'),
						OkamiName: '银子洛',
						OkamiIntro: '云起书院大神作者'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl06.jpg'),
						OkamiName: '麻辣千金',
						OkamiIntro: ' 云起书院作者，擅长现代小说，行文视角新颖，喜欢塑造思想活跃女性，力求创作出不一样的现代文。 '
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl07.png'),
						OkamiName: '黛蜜儿',
						OkamiIntro: '云起书院大神作家'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl08.png'),
						OkamiName: '莉莉薇',
						OkamiIntro: '喜欢干净单纯纯粹的感情，喜欢他只爱我，我只爱他的唯一！'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl09.jpg'),
						OkamiName: '楠楠李',
						OkamiIntro: '阅文集团大神作家'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl10.jpg'),
						OkamiName: '卿云',
						OkamiIntro: '云起书院古言大神，擅长宝宝文，文风萌宠甜蜜，代表作《全能王妃：偷个王爷生宝宝》'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl11.jpg'),
						OkamiName: '吉祥夜',
						OkamiIntro: '阅文集团大神作家'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl12.jpg'),
						OkamiName: '冷青衫',
						OkamiIntro: '人气大神作者，擅长古言类作品的创作，作品《替身侍婢魅君心：一夜弃妃》曾长期位于全平台销售榜第一！'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl13.jpg'),
						OkamiName: '单兮',
						OkamiIntro: '云起书院新锐作者，擅长现代言情小说。文风轻松幽默，笔下的人物形象鲜明，深受读者喜欢。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl14.jpg'),
						OkamiName: '忆昔颜',
						OkamiIntro: '新浪微博http://weibo.com/u/5624155185/home?topnav=1&amp;wvr=6'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl15.jpg'),
						OkamiName: '一路烦花',
						OkamiIntro: '不嫌弃。不抛弃。不放弃。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl16.jpg'),
						OkamiName: '浮屠妖',
						OkamiIntro: '云起书院高人气大神作者，主打现代言情。拥有多年写作经验，文笔深厚，感情细腻。著有多本畅销书籍，长据全平台各大榜单前列，在各大渠道平台上成绩斐然。'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl17.jpg'),
						OkamiName: '洛日',
						OkamiIntro: '云起大神作者，文风轻松活泼，笔下的人物十分逗趣，可卖萌可严肃，可逗比可正经，百变小能手，你值得拥有。代表作《誓要休夫：邪王私宠小萌妃》'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl18.jpg'),
						OkamiName: '战西野'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl19.jpg'),
						OkamiName: '百香蜜',
						OkamiIntro: '云起书院大神作家'
					},
					{
						pic: require('../../assets/img/godGirl/OkamiGirl20.png'),
						OkamiName: '逍遥游游',
						OkamiIntro: '1.请大家记得评价票一定投五星！五星！五星！重要的事情说三遍！！！如果觉得本文还不够好，请把评价票留给你觉得值得五颗星的其他文，否则不但会拉低了文的点数，还会浪费大家的评价票(*￣3￣)2，支持正版，人人有责。下面有学生党除了充值以外支持正版的方法，所以不要为了盗版找借口哟！也请看盗版的朋友绕道，不要在正版评论区找存在感了，这样每天需要辛辛苦苦熬夜花上几个小时码字的我看到会很心塞的=_=☆_☆_☆_☆_☆学生党怎么样支持正版呢？☆_☆_☆_☆_☆下载潇湘书院的手机APP软件，进入首页后大约右下角的位置有一个写着“签”字的蓝色圆形，每天一次点击签到，就可以得到元宝。元宝和潇湘币一样能用来订阅VIP章节！每一个支持正版的小可爱都是我的心头宝，谢谢小天使们，么么哒~\(≧▽≦)/~'
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
	.girlgod-ul{
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
	.girl-god-link{
		position: absolute;
		left: 38%;
	}
	.girlgodnav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.girlgodnav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
		
	}
	.girlgodnav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.5rem;
	}
	.girl-god-link .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.girl-god-icon{
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
	.hide-icon-god{
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
