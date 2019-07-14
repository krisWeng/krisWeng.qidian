<template>
	<div id="girl">
		<!-- 图片轮播 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in rotationGirl" :key="index">
				<img :src="item.pic">
			</mt-swipe-item>
		</mt-swipe>
		
		<!-- 搜索框 -->
		<router-link to='/search' class="search">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-sousuokuang"></use>
			</svg>
			覆汉
		</router-link>
		
		<!-- 导航栏 -->
		<nav class="home-nav">
			<router-link to='/girl-type' class="home-nav-a">
				<i class="nav-icon classify"></i>
				<h4>分类</h4>
			</router-link>
			<router-link to='/girl-rank' class="home-nav-a">
				<i class="nav-icon charts"></i>
				<h4>排行榜</h4>
			</router-link>
			<router-link to='/girl-free' class="home-nav-a">
				<i class="nav-icon free"></i>
				<h4>免费</h4>
			</router-link>
			<router-link to='/girl-end' class="home-nav-a">
				<i class="nav-icon endBook"></i>
				<h4>完本</h4>
			</router-link>
			<router-link to='/girl-god' class="home-nav-a">
				<i class="nav-icon God"></i>
				<h4>大神</h4>
			</router-link>
		</nav>
		
		<!-- 热门小说 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>热门小说</h3>
					<span>起点编辑推荐</span>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in hotGirl" :key="index">
						<router-link to="/girl-hotbook">
							<img :src="item.pic" class="Book-img">
							<figcaption>{{item.bookName}}</figcaption>
							<p>
								<span>{{item.author}}</span>
							</p>
						</router-link>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 按钮导航 -->
		<div class="home-btn">
			<nav>
				<h3>
					<router-link to="/girl">
						新书强推
					</router-link>
				</h3>
				<h3>
					<router-link  to="/girl">
						青云<span>·</span>网文新风
					</router-link>
				</h3>
			</nav>
		</div>
	
		<!-- 限时免费 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>限时免费</h3>
					<span id="d" style="background: #ED424B; color: #fff">00</span>
					<span id="h" style="background: #000000; color: #fff">00</span>
					<span id="m" style="background: #000000; color: #fff">00</span>
					<span id="s" style="background: #000000; color: #fff">00</span>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol">
					<li v-for="(item,index) in freeGirl" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
	
		<!-- 排行榜 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>排行榜</h3>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<!-- 按钮切换 -->
			<div class="TOP-btn">
				<nav>
					<h3 v-for="(item,index) in listBtnNameGirl" :key="index">
						<span class="TOP-btn-span" @click="change(index)" v-bind:class="{active: index==numGirl}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in rankListGirl" :key="index" v-show="index==numGirl">
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top1}}</em>
						</span>
						<img :src="item.pic1" class="Book-img">
						<figcaption>{{item.bookName1}}</figcaption>
						<p>
							<span>{{item.author1}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top2}}</em>
						</span>
						<img :src="item.pic2" class="Book-img">
						<figcaption>{{item.bookName2}}</figcaption>
						<p>
							<span>{{item.author2}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top3}}</em>
						</span>
						<img :src="item.pic3" class="Book-img">
						<figcaption>{{item.bookName3}}</figcaption>
						<p>
							<span>{{item.author3}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top4}}</em>
						</span>
						<img :src="item.pic4" class="Book-img">
						<figcaption>{{item.bookName4}}</figcaption>
						<p>
							<span>{{item.author4}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top5}}</em>
						</span>
						<img :src="item.pic5" class="Book-img">
						<figcaption>{{item.bookName5}}</figcaption>
						<p>
							<span>{{item.author5}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top6}}</em>
						</span>
						<img :src="item.pic6" class="Book-img">
						<figcaption>{{item.bookName6}}</figcaption>
						<p>
							<span>{{item.author6}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top7}}</em>
						</span>
						<img :src="item.pic7" class="Book-img">
						<figcaption>{{item.bookName7}}</figcaption>
						<p>
							<span>{{item.author7}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top8}}</em>
						</span>
						<img :src="item.pic8" class="Book-img">
						<figcaption>{{item.bookName8}}</figcaption>
						<p>
							<span>{{item.author8}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top9}}</em>
						</span>
						<img :src="item.pic9" class="Book-img">
						<figcaption>{{item.bookName9}}</figcaption>
						<p>
							<span>{{item.author9}}</span>
						</p>
					</li>
					<li>
						<span class="left-corner TOP1">
							<em>{{item.top10}}</em>
						</span>
						<img :src="item.pic10" class="Book-img">
						<figcaption>{{item.bookName10}}</figcaption>
						<p>
							<span>{{item.author10}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 新书抢鲜 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>新书抢鲜</h3>
					<span>24小说畅销新书</span>
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
					<li v-for="(item,index) in NewBookGirl" class="NewBook-li" :key="index">
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
					<li v-for="(item,index) in EndBookGirl" class="NewBook-li" :key="index">
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
	
		<!-- 分类推荐 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>分类推荐</h3>
					<span>频道主编推荐</span>
				</div>
				<div class="header-more">
					更多
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gengduo"></use>
					</svg>
				</div>
			</div>
			<!-- 按钮切换 -->
			<div class="TOP-btn">
				<nav>
					<h3 v-for="(item,index) in TypeBtnNameGirl" :key="index">
						<span class="TOP-btn-span" @click="change01(index)" v-bind:class="{active: index==numGirl01}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in typeListGirl01" :key="index" v-show="index==numGirl01">
					<li>
						<img :src="item.pic1" class="Book-img">
						<figcaption>{{item.bookName1}}</figcaption>
						<p>
							<span>{{item.author1}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic2" class="Book-img">
						<figcaption>{{item.bookName2}}</figcaption>
						<p>
							<span>{{item.author2}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic3" class="Book-img">
						<figcaption>{{item.bookName3}}</figcaption>
						<p>
							<span>{{item.author3}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic4" class="Book-img">
						<figcaption>{{item.bookName4}}</figcaption>
						<p>
							<span>{{item.author4}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic5" class="Book-img">
						<figcaption>{{item.bookName5}}</figcaption>
						<p>
							<span>{{item.author5}}</span>
						</p>
					</li>
				</ol>
			</div>
			<!-- 按钮切换02 -->
			<div class="TOP-btn TOP-btn02">
				<nav>
					<h3 v-for="(item,index) in TypeBtnNameGirl02" :key="index">
						<span class="TOP-btn-span" @click="change02(index)" v-bind:class="{active: index==numGirl02}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表02 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in typeListGirl02" :key="index" v-show="index==numGirl02">
					<li>
						<img :src="item.pic1" class="Book-img">
						<figcaption>{{item.bookName1}}</figcaption>
						<p>
							<span>{{item.author1}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic2" class="Book-img">
						<figcaption>{{item.bookName2}}</figcaption>
						<p>
							<span>{{item.author2}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic3" class="Book-img">
						<figcaption>{{item.bookName3}}</figcaption>
						<p>
							<span>{{item.author3}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic4" class="Book-img">
						<figcaption>{{item.bookName4}}</figcaption>
						<p>
							<span>{{item.author4}}</span>
						</p>
					</li>
					<li>
						<img :src="item.pic5" class="Book-img">
						<figcaption>{{item.bookName5}}</figcaption>
						<p>
							<span>{{item.author5}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
			
		<!-- 猜你喜欢 -->
		<div class="module module-last">
			<div class="header">
				<div class="header-title">
					<h3>猜你喜欢</h3>
				</div>
				<div class="header-more">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zhuanhuan"></use>
					</svg>
					换一批
				</div>
			</div>
			<div class="header">
				<div class="header-title">
					<h3>精选专题</h3>
				</div>
			</div>
			<div class="slide">
				<ol class="slide-ol-box">
					<li v-for="(item,index) in themeGirl" class="slide-img" :key="index">
						<img :src="item.pic" class="Book-img">
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
		
		<!-- 返回顶部 -->
		<span class="readBox Box-icon">
			<router-link to="/bookshelf">
				最近阅读
			</router-link>
		</span>
		<span class="backTop Box-icon" id="TOPBack" @click="top()">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-fanhuidingbu"></use>
			</svg>
		</span>
	</div>
</template>
	
<script>
	export default{
		data(){
			return {
				numGirl: 0,
				numGirl01: 0,
				numGirl02: 0,
				rotationGirl: [
					{
						pic: require('../../assets/img/Girl/Pic-rotation01.jpg')
					},
					{
						pic: require('../../assets/img/Girl/Pic-rotation02.jpg')
					},
					{
						pic: require('../../assets/img/Girl/Pic-rotation03.jpg')
					},
					{
						pic: require('../../assets/img/Girl/Pic-rotation04.jpg')
					},
					{
						pic: require('../../assets/img/Girl/Pic-rotation05.jpg')
					},
					{
						pic: require('../../assets/img/Girl/Pic-rotation06.jpg')
					}
				],
				hotGirl: [
					{
						pic: require('../../assets/img/girl/hotBook01.jpg'),
						bookName: '泼辣小厨娘',
						author: '马家大小姐'
					},
					{
						pic: require('../../assets/img/girl/hotBook02.jpg'),
						bookName: '燧灵记',
						author: '半山闲居'
					},
					{
						pic: require('../../assets/img/girl/hotBook03.jpg'),
						bookName: '雁西归',
						author: '九月酒'
					},
					{
						pic: require('../../assets/img/girl/hotBook04.jpg'),
						bookName: '掌欢',
						author: '冬天的柳叶'
					},
					{
						pic: require('../../assets/img/girl/hotBook05.jpg'),
						bookName: '炮灰修真指南',
						author: '青莲乐府'
					},
					{
						pic: require('../../assets/img/girl/hotBook06.jpg'),
						bookName: '随身空间好种田',
						author: '我是小雪参'
					}
				],
				freeGirl: [
					{
						pic: require('../../assets/img/girl/free01.jpg'),
						bookName: '星际脱单指南',
						author: '尤前'
					},
					{
						pic: require('../../assets/img/girl/free02.jpg'),
						bookName: '炮灰女的另类修仙',
						author: '一壶龙井茶'
					},
					{
						pic: require('../../assets/img/girl/free03.jpg'),
						bookName: '重生星际养娃日常',
						author: '一壶龙井茶'
					},
					{
						pic: require('../../assets/img/girl/free04.jpg'),
						bookName: '重生特工小娇妻',
						author: '海星99'
					},
					{
						pic: require('../../assets/img/girl/free05.jpg'),
						bookName: '大香师',
						author: '沐水游'
					}
				],
				listBtnNameGirl: [
					{
						ListName: '热销榜'
					},
					{
						ListName: '风云榜'
					},
					{
						ListName: '点击榜'
					},
					{
						ListName: '推荐榜'
					}
				],
				rankListGirl: [
					{
						top1: 'top1',
						pic1: require('../../assets/img/girl/HotSell01.jpg'),
						bookName1: '掌欢',
						author1: '冬天的柳叶',
						
						top2: 'top2',
						pic2: require('../../assets/img/girl/HotSell02.jpg'),
						bookName2: '末日乐园',
						author2: '须尾俱全',
						
						top3: 'top3',
						pic3: require('../../assets/img/girl/HotSell03.jpg'),
						bookName3: '快穿：我只想种田',
						author3: '沧澜止戈',
						
						top4: 'top4',
						pic4: require('../../assets/img/girl/HotSell04.jpg'),
						bookName4: '六宫凤华',
						author4: '寻找失落的爱情',
						
						top5: 'top5',
						pic5: require('../../assets/img/girl/HotSell05.jpg'),
						bookName5: '女战神的黑包群',
						author5: '二谦',
						
						top6: 'top6',
						pic6: require('../../assets/img/girl/HotSell06.jpg'),
						bookName6: '英鸾',
						author6: '君书雁',
						
						top7: 'top7',
						pic7: require('../../assets/img/girl/HotSell07.jpg'),
						bookName7: '第一侯',
						author7: '希行',
						
						top8: 'top8',
						pic8: require('../../assets/img/girl/HotSell08.jpg'),
						bookName8: '重生腹黑娇妻',
						author8: '浮世落华',
						
						top9: 'top9',
						pic9: require('../../assets/img/girl/HotSell09.jpg'),
						bookName9: '快穿：每次都是我躺枪',
						author9: '旺财是只喵',
						
						top10: 'top10',
						pic10: require('../../assets/img/girl/HotSell10.jpg'),
						bookName10: '似锦',
						author10: '冬天的柳叶'
					},
					{
						top1: 'top1',
						pic1: require('../../assets/img/girl/Wind01.jpg'),
						bookName1: '好想住你隔壁',
						author1: '叶非夜',
						
						top2: 'top2',
						pic2: require('../../assets/img/girl/Wind02.jpg'),
						bookName2: '神医凰后',
						author2: '苏小暖',
						
						top3: 'top3',
						pic3: require('../../assets/img/girl/Wind03.jpg'),
						bookName3: '你好，King先生',
						author3: '锦凰',
						
						top4: 'top4',
						pic4: require('../../assets/img/girl/Wind04.jpg'),
						bookName4: '遇见，傅先生',
						author4: '无尽相思',
						
						top5: 'top5',
						pic5: require('../../assets/img/girl/Wind05.jpg'),
						bookName5: '快穿：男神，有点燃！',
						author5: '墨泠',
						
						top6: 'top6',
						pic6: require('../../assets/img/girl/Wind06.jpg'),
						bookName6: '花娇',
						author6: '吱吱',
						
						top7: 'top7',
						pic7: require('../../assets/img/girl/Wind07.jpg'),
						bookName7: '神医弃女',
						author7: 'MS芙子',
						
						top8: 'top8',
						pic8: require('../../assets/img/girl/Wind08.jpg'),
						bookName8: '南城待月归',
						author8: '公子衍',
						
						top9: 'top9',
						pic9: require('../../assets/img/girl/Wind09.jpg'),
						bookName9: '夫人，你马甲又掉了！',
						author9: '一路烦花',
						
						top10: 'top10',
						pic10: require('../../assets/img/girl/Wind10.jpg'),
						bookName10: '邪王追妻',
						author10: '苏小暖'
					},
					{
						top1: 'top1',
						pic1: require('../../assets/img/girl/Click01.jpg'),
						bookName1: '女战神的黑包群',
						author1: '二谦',
						
						top2: 'top2',
						pic2: require('../../assets/img/girl/Click02.jpg'),
						bookName2: '六宫凤华',
						author2: '寻找失落的爱情',
						
						top3: 'top3',
						pic3: require('../../assets/img/girl/Click03.jpg'),
						bookName3: '欢喜记事',
						author3: '木嬴',
						
						top4: 'top4',
						pic4: require('../../assets/img/girl/Click04.jpg'),
						bookName4: '十万里风鹏正举',
						author4: '兔9',
						
						top5: 'top5',
						pic5: require('../../assets/img/girl/Click05.jpg'),
						bookName5: '与你在一起就是最幸福的事',
						author5: '蘑菇里正',
						
						top6: 'top6',
						pic6: require('../../assets/img/girl/Click06.jpg'),
						bookName6: '妖女乱国',
						author6: '樊笼也自然',
						
						top7: 'top7',
						pic7: require('../../assets/img/girl/Click07.jpg'),
						bookName7: '六零小甜妻',
						author7: '修身齐家.QD',
						
						top8: 'top8',
						pic8: require('../../assets/img/girl/Click08.jpg'),
						bookName8: '四爷，你别抓我',
						author8: '夏之琉',
						
						top9: 'top9',
						pic9: require('../../assets/img/girl/Click09.jpg'),
						bookName9: '穿越之双世情缘',
						author9: '长弓瑾澈',
						
						top10: 'top10',
						pic10: require('../../assets/img/girl/Click10.jpg'),
						bookName10: '灵族记',
						author10: '水冰潇'
					},
					{
						top1: 'top1',
						pic1: require('../../assets/img/girl/Recommendation01.jpg'),
						bookName1: '幽后传奇',
						author1: '墨鱼甲乙',
						
						top2: 'top2',
						pic2: require('../../assets/img/girl/Recommendation02.jpg'),
						bookName2: '第一侯',
						author2: '希行',
						
						top3: 'top3',
						pic3: require('../../assets/img/girl/Recommendation03.jpg'),
						bookName3: '末日乐园',
						author3: '须尾俱全',
						
						top4: 'top4',
						pic4: require('../../assets/img/girl/Recommendation04.jpg'),
						bookName4: '花娇',
						author4: '吱吱',
						
						top5: 'top5',
						pic5: require('../../assets/img/girl/Recommendation05.jpg'),
						bookName5: '天芳',
						author5: '云芨',
						
						top6: 'top6',
						pic6: require('../../assets/img/girl/Recommendation06.jpg'),
						bookName6: '大佬退休之后',
						author6: '油爆香菇',
						
						top7: 'top7',
						pic7: require('../../assets/img/girl/Recommendation07.jpg'),
						bookName7: '快穿：我只想种田',
						author7: '沧澜止戈',
						
						top8: 'top8',
						pic8: require('../../assets/img/girl/Recommendation08.jpg'),
						bookName8: '掌欢',
						author8: '冬天的柳叶',
						
						top9: 'top9',
						pic9: require('../../assets/img/girl/Recommendation09.jpg'),
						bookName9: '重生八零锦绣盛婚',
						author9: '幽非芽',
						
						top10: 'top10',
						pic10: require('../../assets/img/girl/Recommendation10.jpg'),
						bookName10: '启禀陛下，夫人装怂',
						author10: '西母娘娘'
					}
				],
				NewBookGirl: [
					{
						pic: require('../../assets/img/girl/NewBook01.jpg'),
						title: '掌欢',
						des: '骆三姑娘仗着其父权倾朝野，恃强凌弱、声名狼藉，没事就领着一群狗奴才上街调戏良家美少年。对清阳郡主来说，这种人敢在她面前撒野，她伸根手指头就弄死了——直到她睁开眼，发现自己叫骆笙。',
						author: '冬天的柳叶',
						gray: '古代言情',
						red: '连载中',
						blue: '12.95万字'
						
					},
					{
						pic: require('../../assets/img/girl/NewBook02.jpg'),
						title: '快穿：反派女主只想暴富',
						des: '贪财拜金女花哨，因为一份巨额财产被迫进入快穿世界。但谁能告诉她，她为什么没有系统？！喂！系统？！你在吗？任务是什么啊？！故事大概要从花哨抢了某男主的系统开始……*某大神系统：“你的任务是使每个世界都he。”花哨：“he？幸福结局？就是变成富婆对吗？好的，没问题！”系统：“……金钱买不来幸福。”花哨：“有钱谁不幸福？”系统：“……”这个宿主每天都想着暴富搞钱。又名《我抢了男主系统》《我，女主，超有钱》PS：真·反派女主【划重点！！！】非传统快穿文，1v1非灵魂碎片，不攻略，不完成心愿！已有完结文《星际萌商时代》《末世源能师》坑品有保证，存稿丰富可放心入坑~~',
						author: '爱喜婉',
						gray: '科幻空间',
						red: '连载中',
						blue: '28.98万字'
						
					},
					{
						pic: require('../../assets/img/girl/NewBook03.jpg'),
						title: '锦绣凤华',
						des: '人间凶兽霍景秀，人见人死，狗见狗躲。修罗两眼一瞪，小妖怪这么可爱，你们都眼瞎？甜宠逗趣，1vs1每天8000+，欢迎入坑！小伙伴们，求多多支持正版呀！',
						author: '陈婉煜Sun',
						gray: '古代言情',
						red: '连载中',
						blue: '25.65万字'
					}
				],
				EndBookGirl: [
					{
						pic: require('../../assets/img/girl/END01.jpg'),
						title: '似锦',
						des: '人都说姜家四姑娘是一等一的美人儿，可惜被安国公府摘走了这朵鲜花。然而姜似出嫁前夕，未婚夫与别的女人跳湖殉情了。。。。',
						author: '冬天的柳叶',
						gray: '古代言情',
						red: '完本',
						blue: '170.77万字'
						
					},
					{
						pic: require('../../assets/img/girl/END02.jpg'),
						title: '六零甜妻有空间',
						des: '【年代+空间＋甜宠。1V1。双洁。】穿到六零怎么办？空间升级三世缘。携手共创致富路，日子红火惹人羡。你要问墨白，最大的苦恼是什么？——顾维安空闲时，总喜欢撩她。PS：小说架空，考究与杠精系列，不喜可移；看不懂就问，打低分可耻，请注意修养。此文脑洞清奇，有点玄幻色彩。能正版看到完结的，都是真爱。',
						author: '郁从文',
						gray: '现代言情',
						red: '完本',
						blue: '59.83万字'
						
					},
					{
						pic: require('../../assets/img/girl/END03.jpg'),
						title: '乘鸾',
						des: '上辈子，明微疲于奔命，终究没能改变国运，失去了最重要的亲人。睁开眼，她发现自己回到了七十年前。昏庸的灵帝还没登位，凶悍的胡人还没建立西魏，南楚的野心家还没掌权，北齐仍然兵强马壮！这还等什么？赶紧把该干掉的干掉，该弄死的弄死，收一波人头啊！接着找到帝星，辅佐他登上帝位，好好治理天下。她就可以美滋滋回去与亲人团聚，享受盛世了。然后——“来都来了，不当个皇后再走？”',
						author: '云芨',
						gray: '古代言情',
						red: '完本',
						blue: '170.43万字'
					}
				],
				TypeBtnNameGirl: [
					{
						ListName: '古代言情'
					},
					{
						ListName: '仙侠奇缘'
					},
					{
						ListName: '现代言情'
					},
					{
						ListName: '浪漫青春'
					}
				],
				typeListGirl01: [
					{
						pic1: require('../../assets/img/girl/Ancient01.jpg'),
						bookName1: '祝琴说',
						author1: '逗跌',
						
						pic2: require('../../assets/img/girl/Ancient02.jpg'),
						bookName2: '田园福妃',
						author2: '滋洋',
						
						pic3: require('../../assets/img/girl/Ancient03.jpg'),
						bookName3: '金粉',
						author3: '青铜穗',
						
						pic4: require('../../assets/img/girl/Ancient04.jpg'),
						bookName4: '权门贵嫁',
						author4: '秦兮',
						
						pic5: require('../../assets/img/girl/Ancient05.jpg'),
						bookName5: '素手调汤',
						author5: '沐清浅'
					},
					{
						pic1: require('../../assets/img/girl/Fairy01.jpg'),
						bookName1: '九州江月寒',
						author1: '唐深藏功与名',
						
						pic2: require('../../assets/img/girl/Fairy02.jpg'),
						bookName2: '狐宠胡宠',
						author2: '斑猪',
						
						pic3: require('../../assets/img/girl/Fairy03.jpg'),
						bookName3: '摘仙令',
						author3: '潭子',
						
						pic4: require('../../assets/img/girl/Fairy04.jpg'),
						bookName4: '无上女仙君',
						author4: '淡淡竹君',
						
						pic5: require('../../assets/img/girl/Fairy05.jpg'),
						bookName5: '炮灰修真指南',
						author5: '青莲乐府'
					},
					{
						pic1: require('../../assets/img/girl/Modern01.jpg'),
						bookName1: '最羡人间五月天',
						author1: '邑小白',
						
						pic2: require('../../assets/img/girl/Modern02.jpg'),
						bookName2: '爱你是平凡的温暖',
						author2: '筱悠独醉',
						
						pic3: require('../../assets/img/girl/Modern03.jpg'),
						bookName3: '带着仓库重生',
						author3: '我尽力了',
						
						pic4: require('../../assets/img/girl/Modern04.jpg'),
						bookName4: '穿越六十年代农家女',
						author4: '红烧豆腐干',
						
						pic5: require('../../assets/img/girl/Modern05.jpg'),
						bookName5: '重回八零小辣妻',
						author5: '持好'
					},
					{
						pic1: require('../../assets/img/girl/Youth01.jpg'),
						bookName1: '两个十年，你是否还要',
						author1: '浪漫肉食主义',
						
						pic2: require('../../assets/img/girl/Youth02.jpg'),
						bookName2: '我知道的，他都懂得',
						author2: '汐潇',
						
						pic3: require('../../assets/img/girl/Youth03.jpg'),
						bookName3: '若是久长时1',
						author3: '清香月',
						
						pic4: require('../../assets/img/girl/Youth04.jpg'),
						bookName4: '小小时光里的小小秘密',
						author4: '温馨的寒冬',
						
						pic5: require('../../assets/img/girl/Youth05.jpg'),
						bookName5: '寻道之路，与君同行',
						author5: '青之荧华'
					}
				],
				TypeBtnNameGirl02: [
					{
						ListName: '玄幻言情'
					},
					{
						ListName: '悬疑灵异'
					},
					{
						ListName: '科幻空间'
					},
					{
						ListName: '游戏竞技'
					}
				],
				typeListGirl02: [
					{
						pic1: require('../../assets/img/girl/Mysterious01.jpg'),
						bookName1: '降生记',
						author1: '东荒尚桃',
						
						pic2: require('../../assets/img/girl/Mysterious02.jpg'),
						bookName2: '帝凤无双',
						author2: '妖精家的小二',
						
						pic3: require('../../assets/img/girl/Mysterious03.jpg'),
						bookName3: '魅上欢',
						author3: '少女不写诗',
						
						pic4: require('../../assets/img/girl/Mysterious04.jpg'),
						bookName4: '仙三代的日常生活',
						author4: '感觉挺冷.',
						
						pic5: require('../../assets/img/girl/Mysterious05.jpg'),
						bookName5: '快穿渣男洗白论',
						author5: '清风静静'
					},
					{
						pic1: require('../../assets/img/girl/suspense01.jpg'),
						bookName1: '罪恶无形',
						author1: '莫伊莱',
						
						pic2: require('../../assets/img/girl/suspense02.jpg'),
						bookName2: '娇妻案中见',
						author2: '落思蕴',
						
						pic3: require('../../assets/img/girl/suspense03.jpg'),
						bookName3: '天师除灵日常',
						author3: '慕凌彬',
						
						pic4: require('../../assets/img/girl/suspense04.jpg'),
						bookName4: '重生之娱乐圈事件簿',
						author4: '爱吃松子.',
						
						pic5: require('../../assets/img/girl/suspense05.jpg'),
						bookName5: '食灵猎人',
						author5: '一缕冥火'
					},
					{
						pic1: require('../../assets/img/girl/strange01.jpg'),
						bookName1: '坑宿主的一百万种方式',
						author1: '机甲小熊',
						
						pic2: require('../../assets/img/girl/strange02.jpg'),
						bookName2: '快穿之厉害了我的宿主',
						author2: '戏精夏',
						
						pic3: require('../../assets/img/girl/strange03.jpg'),
						bookName3: '快穿之养老攻略',
						author3: '快穿狂魔',
						
						pic4: require('../../assets/img/girl/strange04.jpg'),
						bookName4: '快穿之炮灰不伤悲',
						author4: '游7.',
						
						pic5: require('../../assets/img/girl/strange05.jpg'),
						bookName5: '末世幼稚园攻略',
						author5: '包包紫'
					},
					{
						pic1: require('../../assets/img/girl/gtv01.jpg'),
						bookName1: '不负绿茵',
						author1: '音欠生',
						
						pic2: require('../../assets/img/girl/gtv02.jpg'),
						bookName2: '界之柱',
						author2: '不存在的笔名',
						
						pic3: require('../../assets/img/girl/gtv03.jpg'),
						bookName3: '十年养成攻略',
						author3: '花与刃',
						
						pic4: require('../../assets/img/girl/gtv04.jpg'),
						bookName4: '全息之幻想',
						author4: '笔下的世界线',
						
						pic5: require('../../assets/img/girl/gtv05.jpg'),
						bookName5: '百兵图',
						author5: '裘洛'
					}
				],
				themeGirl: [
					{
						pic: require('../../assets/img/girl/theme01.jpg')
					},
					{
						pic: require('../../assets/img/girl/theme02.jpg')
					},
					{
						pic: require('../../assets/img/girl/theme03.jpg')
					},
					{
						pic: require('../../assets/img/girl/theme04.jpg')
					}
				]
			}
		},
		methods:{
			change(index){
				this.numGirl=index
			},
			change01(index){
				this.numGirl01=index
			},
			change02(index){
				this.numGirl02=index
			},
			top(){
				document.documentElement.scrollTop = 0;
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
			scrollToTop(el) {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let browserHeight = window.outerHeight;
				if (scrollTop > browserHeight) {
					  TOPBack.style.display = 'block';
				} else {
					  TOPBack.style.display = 'none';
				}
			},
			destroyed () {
				window.removeEventListener('scroll', this.scrollToTop); 
			}
		},
		mounted(){
			this.function()
			setInterval(this.function)
			
			window.addEventListener('scroll', this.scrollToTop)
		}
	}
</script>

<style>
		*{
		text-decoration: none;
	}
	
	body{
		font-family: sans-serif;
		line-height: 1.5;
		fill: currentColor;
	}
	/*  图片轮播 */
	.mint-swipe{
		height: calc(.314 * (100vw - 1.5rem));
		position: relative;
		overflow: hidden;
		margin: 0.625rem .75rem;
	}
	.mint-swipe img{
		width: 100%;
		height: calc(100% + 25.1897%);
		display: block;
		margin-top: calc(-.1106667 * .314 * (100vw - 1.5rem));
	}
	.mint-swipe-indicators{
		margin-bottom: -0.5rem;
	}
	.mint-swipe-indicators>.mint-swipe-indicator{
		background-color: white;
		opacity: 1;
	}
	.mint-swipe-indicators>.is-active{
		background-color: red;
		opacity: 1;
	}
	/* 搜索框 */
	.search{
		font-size: 0.875rem;
		line-height: 2.25rem;
		display: block;
		margin: .375rem .75rem;
		text-align: center;
		color: #969ba3;
		border-radius: .25rem;
		background-color: #fff;
	}
	.search:focus{
		outline: none;
	}
	/* 导航栏 */
	.home-nav{
		margin: .375rem 0;
		padding: .75em .625rem;
		background-color: #fff;
	}
	.home-nav-a{
		width: 14.214%;
		height: 3.625rem;
		font-size: .75rem;
		position: relative;
		display: inline-block;
		text-align: center;
		color: #000000;
		margin-right: 6.092%;
	}
	.home-nav-a:nth-child(5){
		margin-right: 0;
	}
	.home-nav-a>h4{
		position: absolute;
		right: 0;
		bottom: .1875rem;
		left: 0;
	}
	.nav-icon{
		position: absolute;
		right: 0;
		bottom: 1.625rem;
		left: 0;
		margin: auto;
		background: url(../../assets/img/nav-icon.png);
		background-size: 87px 87px;
	}
	/* 分类 */
	.classify{
		width: 24px;
		height: 24px;
		background-position: -63px -28px;
	}
	
	/* 排行榜 */
	.charts{
		width: 27px;
		height: 26px;
		background-position: 0 0;
	}
	
	/* 免费 */
	.free{
		width: 26px;
		height: 26px;    
		background-position: 0 -30px;
	}
	
	/* 完本 */
	.endBook{
		width: 20px;
		height: 27px;
		background-position: 0 -60px;
	}
	
	/* 大神 */
	.God{
		width: 26px;
		height: 26px;    
		background-position: -30px -30px;
	}
	/* 热门小说 */
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
		color: #2c3e50;
	}
	.slide p span{
		font-size: 0.8125rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	    color: #969ba3;
	}
	/* 按钮导航 */
	.home-btn{
		margin: 1rem;
	}
	.home-btn nav{
		width: 100%;
		display: table;
		margin-right: auto;
		margin-left: auto;
		table-layout: fixed;
	}
	.home-btn h3{
		font-size: 100%;
		font-weight: 400;
		display: table-cell;
	}
	.home-btn h3 a{
		display: block;
		margin: 0 .5625rem;
	    color: #ed424b;
		font-size: 0.875rem;
		line-height: 1.6875rem;
		padding: 0.125rem .625rem;
		text-align: center;
		border: 1px solid;
		border-radius: 99px;
	}
	/* 即时免费 */
	.header-more{
		float: right;
	}
	/* 排行榜 */
	.TOP-btn{
		margin: .4375rem 1rem;
	}
	.TOP-btn nav{
		width: 100%;
		display: table;
		margin-right: auto;
		margin-left: auto;
		table-layout: fixed;
	}
	.TOP-btn h3{
		font-size: 100%;
		font-weight: 400;
		display: table-cell;
	}
	.TOP-btn-span{
		font-size: 0.875rem;
		line-height: 2rem;
		display: block;
		padding: 0 .5rem;
		text-align: center;
		color: #ED424B;
		border: 1px solid #ed424b;
	}
	.TOP-btn h3:first-child > .TOP-btn-span{
		border-radius: 4px 0 0 4px;
	}
	.TOP-btn h3:last-child >.TOP-btn-span{
		border-radius: 0 4px 4px 0;
	}
	.active{
		color: #fff;
		background: #ED424B;
	}
	.slide-ol-active{
		display: block;
	}
	.slide-ol-none{
		display: none;
	}
	.left-corner{
		font-size: 10px;
		position: absolute;
		overflow: hidden;
		width: 30px;
		height: 30px;
		text-align: center;
		z-index: 2;
	}
	.TOP1{
		color: #ed424b;
	}
	.TOP1 em{
		font-size: 9px;
		font-weight: 700;
		line-height: 10px;
		padding-top: 14px;
		text-transform: uppercase;
		position: absolute;
		right: -12px;
		bottom: 0;
		left: 0;
		transform: rotate(-45deg);
	    transform-origin: left bottom;
		color: #fff;
		background-color: #ed424b;
		z-index: 999;
	}
	.left-corner::after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 10px;
		height: 9px;
		background: url(../../assets/img/top.svg) no-repeat center;
		background-size: 100%;
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
	/* 新书抢鲜 */
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
	/* 分类推荐 */
	.TOP-btn02::before{
		content: '';
		position: relative;
		top: -.4375rem;
		display: block;
		padding-top: .6875rem;
		border-top: 1px solid #f0f1f2;
	}
	/* 精选主题 */
	.module-last{
		margin-bottom: 0;
	}
	.slide-ol-box{
		padding: 0.5625rem;
	}
	.slide-img{
		width: 50%;
		float: left;
		box-sizing: border-box;
		padding: .5rem;
	}
	.slide-img img{
		width: 100%;
		height: calc(66rem / 16);
		display: block;
		object-fit: cover;
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
	/* 返回顶部 */
	.Box-icon{
		position: fixed; 
		border: 0.0625rem solid;
		border-radius: 99px;
		cursor: pointer;
	}
	.readBox{
		width: 2rem;
		height: 2rem;
		padding: 0.5625rem;
		display: block;
		right: 20px; 
		bottom: 5rem;
		background: #ed424b;
		color: #fff;
		font-size: 0.8125rem;
		text-align: center;
	}
	.readBox a{
		color: #fff;
	}
	.backTop{
		width: 3.125rem;
		height: 3.125rem;
		right: 20px; 
		bottom: 1rem;
		background: #000;
		opacity: 0.6;
	}
	.backTop .icon{
		width: 1.375rem;
		height: 1.375rem;
		color: #fff;
		position: relative;
		left: 26%;
		top: 27%;
	}
</style>
