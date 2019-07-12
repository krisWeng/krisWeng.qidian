<template>
	<main id="girl-free">
		<!-- 头部 -->
		<header>
			<ul class="header-ulbox">
				<li class="out">
					<router-link to="/girl">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">免费</p>
				<li class="btnBox">
					<router-link to="/boy-free" class="typenav-btn">
						男生
					</router-link>
					<router-link to="/girl-free" class="typenav-btn">
						女生
					</router-link>
				</li>
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
		
		<!-- 本期免费 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>本期免费</h3>
					<span id="d" style="background: #ED424B; color: #fff">00</span>
					<span id="h" style="background: #000000; color: #fff">00</span>
					<span id="m" style="background: #000000; color: #fff">00</span>
					<span id="s" style="background: #000000; color: #fff">00</span>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in NowFree" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 下期限免 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>下期限免</h3>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in NextFree" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 人气免费 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>人气免费</h3>
					<span>人气最高的免费作品</span>
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
					<li v-for="(item,index) in PublicBook" class="NewBook-li" :key="index">
						<div class="NewBook-All">
							<img :src="item.pic" class="Book-img">
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
	
		<!-- 新书免费 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>新书免费</h3>
					<span>点击最高的免费新书</span>
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
					<li v-for="(item,index) in TheNewBook" class="NewBook-li" :key="index">
						<div class="NewBook-All">
							<img :src="item.pic" class="Book-img">
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
				NowFree:[
					{
						pic: require('../../assets/img/freeGirl/NowfreeGirl01.jpg'),
						bookName: '女boss坑仙路',
						author: '两颗虎牙'
					},
					{
						pic: require('../../assets/img/freeGirl/NowfreeGirl02.jpg'),
						bookName: '戏精打脸日常',
						author: '升麻'
					},
					{
						pic: require('../../assets/img/freeGirl/NowfreeGirl03.jpg'),
						bookName: '八零甜妻萌宝宝',
						author: '席祯'
					},
					{
						pic: require('../../assets/img/freeGirl/NowfreeGirl04.jpg'),
						bookName: '闺门秀',
						author: 'Loeva'
					},
					{
						pic: require('../../assets/img/freeGirl/NowfreeGirl05.jpg'),
						bookName: '三国吕布之女',
						author: 'real觅尔'
					}
				],
				NextFree:[
					{
						pic: require('../../assets/img/freeGirl/NextfreeGirl01.jpg'),
						bookName: '星际脱单指南',
						author: '尤前'
					},
					{
						pic: require('../../assets/img/freeGirl/NextfreeGirl02.jpg'),
						bookName: '炮灰女的另类修仙',
						author: '一壶龙井茶'
					},
					{
						pic: require('../../assets/img/freeGirl/NextfreeGirl03.jpg'),
						bookName: '重生星际养娃日常',
						author: '黑马系'
					},
					{
						pic: require('../../assets/img/freeGirl/NextfreeGirl04.jpg'),
						bookName: '重生特工小娇妻',
						author: '海星99'
					},
					{
						pic: require('../../assets/img/freeGirl/NextfreeGirl05.jpg'),
						bookName: '大香师',
						author: '沐水游'
					}
				],
				PublicBook:[
					{
						pic: require('../../assets/img/freeGirl/PublicfreeGirl01.jpg'),
						title: '朝华赋',
						des: '我叫苏暮颜，您可以叫我暮颜或者颜儿，府里的下人都称呼我颜小姐――――我的母亲出身青楼，是集才貌于一身的花魁娘子，所以我天生就有一副好皮囊！父亲则是高高在上的南安侯，所以我也就理所当然的成了庶女！―――',
						author: '红烛喃呢',
						gray: '古代言情',
						red: '连载',
						blue: '18.43万字'
						
					},
					{
						pic: require('../../assets/img/freeGirl/PublicfreeGirl02.jpg'),
						title: '星际女王养成',
						des: '沈冰幸运的成为了冰冻计划的实验者，本以为会被当做白老鼠，没想到她连这个资格都没有，政府的欺骗，家园的毁灭，她只能拼命的向前冲。探索星际，磨练自己，杀丧失，战兽人，因为身边始终有他的支持。沈冰：“哥哥，',
						author: '萧风飘渺',
						gray: '科幻空间',
						red: '连载',
						blue: '38.78万字'
						
					},
					{
						pic: require('../../assets/img/freeGirl/PublicfreeGirl03.jpg'),
						title: '婚姻生活的微分定理',
						des: '徐娜一直觉得，她与胡兴崴婚姻生活美满，要说真有不足的地方，也就那么一点点，可现实又会一次次让她不得不承认，很多时候差的那一点点，却是一个巨大的分水岭。',
						author: '八匹',
						gray: '现代言情',
						red: '连载',
						blue: '5.49万字'
					}
				],
				TheNewBook:[
					{
						pic: require('../../assets/img/freeGirl/NewfreeGirl01.jpg'),
						title: '他口袋里有星光',
						des: '外婆家附近不知道什么时候搬过来一个神仙颜值的少年。他懒散中染了几分不羁的狠劲儿，整个一中都怵他。而他却唯独栽在一个转校生身上？每天各种宠，花式撩，甜到齁！——向应递给她一团粉色的草莓棉花糖:“给你的。',
						author: '凉小温',
						gray: '浪漫青春',
						red: '连载',
						blue: '1.55万字'
						
					},
					{
						pic: require('../../assets/img/freeGirl/NewfreeGirl02.jpg'),
						title: '霸道琳川爱上我',
						des: 'H市霸道总裁苗琳川爱上性感女神柏东延。高冷与性感，寡言与热情，这几者之间会产生怎样的火花?命运之轮是否会再次转动，将二者的灵魂再度碰撞在一起?一切还是未知。我们的故事就从他们的电校相遇开始…………',
						author: '悦槿木花',
						gray: '浪漫青春',
						red: '连载',
						blue: '2054字'
						
					},
					{
						pic: require('../../assets/img/freeGirl/NewfreeGirl03.jpg'),
						title: '狐念，寻',
						des: '混沌初开时产生的生命能量创造了天地，万物不可无序，掌管这一切的是天道，然而天道这次遇见了一个和它同时出现的少女，那少女竟也可以控制着一切，天道这是要丢了铁饭碗吗？？',
						author: '玄幻言情',
						gray: '仙侠',
						red: '连载',
						blue: '3381字'
					}
				]
			}
		},
		methods: {
			show(){
				this.show01 = ! this.show01
			},
			function(){
				var now = new Date().getTime();
				//月份时0-11，不要忘记+1
				var date = new Date(2019,6,25).getTime();
				var time = date-now;
				//1000毫秒=1秒 1分钟=60秒 1小时=60分钟 1天=24小时
				var day = parseInt(time/1000/60/60/24);
				
				var hour = parseInt(time/1000/60/60%24);
				
				var minute = parseInt(time/1000/60%60);
				
				var second = parseInt(time/1000%60);
				d.innerHTML = day;
				h.innerHTML = hour;
				m.innerHTML = minute;
				s.innerHTML = second;
			}
		},
		mounted(){
			this.function()
			setInterval(this.function)
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
	.header-ulbox{
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
