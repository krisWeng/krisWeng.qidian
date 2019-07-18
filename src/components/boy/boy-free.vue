<template>
	<main id="boy-free">
		<!-- 头部 -->
		<header>
			<ul class="boyfree-ul">
				<li class="out">
					<router-link to="/boy">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">免费</p>
				<li class="boy-free-link">
					<router-link to="/boy-free" class="boyfreenav-btn">
						男生
					</router-link>
					<router-link to="/girl-free" class="boyfreenav-btn">
						女生
					</router-link>
				</li>
				<li class="boy-free-icon">
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
				NowFree:[
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy01.jpg'),
						bookName: '我的丹田是地球',
						author: '女孩穿短裙'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy02.jpg'),
						bookName: '杨小落的便宜奶爸',
						author: '寒门'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy03.jpg'),
						bookName: '随机惩罚一名幸运观众',
						author: '宝巨'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy04.jpg'),
						bookName: '诸天修道者',
						author: '分飞雁'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy05.jpg'),
						bookName: '娱乐玩童',
						author: '金色火烧云'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy06.jpg'),
						bookName: '修真高手的田园生活',
						author: '小学嗣业'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy07.jpg'),
						bookName: '网游之星剑传奇',
						author: '星辰旅者'
					},
					{
						pic: require('../../assets/img/freeBoy/NowfreeBoy08.jpg'),
						bookName: '吃货唐朝',
						author: '肥皂快乐水'
					}
				],
				NextFree:[
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy01.jpg'),
						bookName: '重生商纣王',
						author: '星辰雨'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy02.jpg'),
						bookName: '坐忘长生',
						author: '飞翔的黎哥'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy03.jpg'),
						bookName: '超神学院的宇宙',
						author: '荣誉与忠诚'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy04.jpg'),
						bookName: '我是夸雷斯马',
						author: '王大布'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy05.jpg'),
						bookName: '西游之掠夺万界',
						author: '五阿哥'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy06.jpg'),
						bookName: '华娱之白金年代',
						author: '蜗橙'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy07.jpg'),
						bookName: '扶明',
						author: '话凄凉'
					},
					{
						pic: require('../../assets/img/freeBoy/NextfreeBoy08.jpg'),
						bookName: '我不可能这么俗',
						author: '懒扎衣'
					}
				],
				PublicBook:[
					{
						pic: require('../../assets/img/freeBoy/PublicfreeBoy01.jpg'),
						title: '赤兔记',
						des: '金古温梁黄，武侠万年长！在《红缨记》的故事结束半年后，大江湖又迎来了新的风波。黄系武侠，破碎虚空，所有的黄系高手济济一堂，向着武学的最高境界发起了挑战。令东来、传鹰、庞斑、厉若海、石之轩、秦梦瑶、婠婠',
						author: '东郊林公子',
						gray: '游戏',
						red: '连载',
						blue: '191.62万字'

					},
					{
						pic: require('../../assets/img/freeBoy/PublicfreeBoy02.jpg'),
						title: '蹩脚诗人流浪记',
						des: '一个人流浪，一个人远走他乡！一个人写诗，一个人挣扎彷徨！一个人爱恨，一个人跌撞人间。我不知道对错，因为有不同的喜好；我不知道方向，因为有不同的渴望；所以，只撒一片文字，只丢一抹情绪，只在沧海桑田的人途',
						author: '流风云',
						gray: '短篇',
						red: '连载',
						blue: '3.41万字'

					},
					{
						pic: require('../../assets/img/freeBoy/PublicfreeBoy03.jpg'),
						title: '变身之武侠到神话',
						des: '这本书讲述的是一名宅男重生成大唐双龙世界的一普通小姐，带着可以增加属性点的金手指大杀四方的故事！咳咳...以上的大家看看就可以了，莫当真，实际上讲述的是主角变成妹子后，在无限的世界慢慢变强的故事！理论',
						author: '涛哥霸气',
						gray: '轻小说',
						red: '连载',
						blue: '130.29万字'
					}
				],
				TheNewBook:[
					{
						pic: require('../../assets/img/freeBoy/NewfreeBoy01.jpg'),
						title: '暗黑之处',
						des: '万事万物皆有灵性，除人类之外的其它物种之所以没有人类那么出类拔萃，是因为它们体内的灵气是潜藏的，未被激发。事无绝对，先天的东西后天可能因某种机缘巧合而改变，它们中的极少数佼佼者能够通过修炼来吸收天地间',
						author: '天北之颜',
						gray: '奇幻',
						red: '连载',
						blue: '1.26万字'

					},
					{
						pic: require('../../assets/img/freeBoy/NewfreeBoy02.jpg'),
						title: '惊魂生死情',
						des: '生命只剩下一周时间，对每个人来说都是最为悲催的事件。本故事讲述的是一位大学才子，研究生毕业即将步入社会，在体检时却被发现感染血液疾病，生命只剩下七天时间。在这七天时间里，他绝望、彷徨、反思，经历了人生',
						author: '海唐花',
						gray: '短篇',
						red: '完结',
						blue: '5.22万字'

					},
					{
						pic: require('../../assets/img/freeBoy/NewfreeBoy03.jpg'),
						title: '守护圣道',
						des: '当仙路断绝，当凌然的修真文明开始没落，当拥有各种奇葩遭遇的，穿越者、重生者、外来者，以及蛰伏的轮回强者，科技文明里的阴谋家，开始在天衍星域，疯狂抢夺最后的修真资源时，是谁，在守护修真文明的最后一片净土',
						author: '戒赌的阿布',
						gray: '仙侠',
						red: '连载',
						blue: '6字'
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
			},
      destroyed(){
      	window.removeEventListener('setInterval',this.function);
      }
		},
		mounted(){
			this.function()
			setInterval(this.function)
      window.addEventListener('setInterval', this.function)
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
	.boyfree-ul{
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
	.boy-free-link{
		position: absolute;
		left: 38%;
	}
	.boyfreenav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.boyfreenav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;

	}
	.boyfreenav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.5rem;
	}
	.boy-free-link .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.boy-free-icon{
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
