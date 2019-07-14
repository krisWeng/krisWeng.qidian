<template>
	<main id="boyIndex">
		<!-- 头部 -->
		<ul class="nav-box">
			<li>
				<!-- logo -->
				<router-link to="/" class="logoBoy-a">
					<h1 class="logoBoy-p">
						起点中文网
					</h1>
				</router-link>
			</li>
			<li class="nav-box-a">
				<!-- 男生 -->
				<router-link to="/boy" class="nav-btn nav-btn-a">
					男生
				</router-link>
				<!-- 女生 -->
				<router-link to="/girl" class="nav-btn">
					女生
				</router-link>
			</li>
			<li>
				<!-- 登录 -->
				<router-link to="/login" class="icon-btn">
				<strong></strong>	<svg class="icon icon-All icon-login" aria-hidden="true">
						<use xlink:href="#icon-denglu"></use>
					</svg>
				</router-link>
				<!-- 书架 -->
				<router-link to="/bookshelf" class="icon-btn">
					<svg class="icon icon-All" aria-hidden="true">
						<use xlink:href="#icon-wodeshujia"></use>
					</svg>
				</router-link>
			</li>
		</ul>
		
		<!-- 图片轮播 -->
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in rotation" :key="index">
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
			<router-link to='/boy-type' class="home-nav-a">
				<i class="nav-icon classify"></i>
				<h4>分类</h4>
			</router-link>
			<router-link to='/boy-rank' class="home-nav-a">
				<i class="nav-icon charts"></i>
				<h4>排行榜</h4>
			</router-link>
			<router-link to='/boy-free' class="home-nav-a">
				<i class="nav-icon free"></i>
				<h4>免费</h4>
			</router-link>
			<router-link to='/boy-end' class="home-nav-a">
				<i class="nav-icon endBook"></i>
				<h4>完本</h4>
			</router-link>
			<router-link to='/boy-god' class="home-nav-a">
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
					<li v-for="(item,index) in hot" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
						</p>
					</li>
				</ol>
			</div>
		</div>
		
		<!-- 按钮导航 -->
		<div class="home-btn">
			<nav>
				<h3>
					<router-link to="/boy">
						新书强推
					</router-link>
				</h3>
				<h3>
					<router-link  to="/boy">
						三江<span>·</span>网文新风
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
					<li v-for="(item,index) in free" :key="index">
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
					<h3 v-for="(item,index) in listBtnName" :key="index">
						<span class="TOP-btn-span" @click="change(index)" v-bind:class="{active: index==num}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in rankList" :key="index" v-show="index==num">
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
			
		<!-- 广告 -->
		<div class="advert">
			<img src="../../assets/img/boy/advert.jpg" alt="">
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
					<li v-for="(item,index) in NewBook" class="NewBook-li" :key="index">
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
					<li v-for="(item,index) in EndBook" class="NewBook-li" :key="index">
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
					<h3 v-for="(item,index) in TypeBtnName" :key="index">
						<span class="TOP-btn-span" @click="change01(index)" v-bind:class="{active: index==num01}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in typeList01" :key="index" v-show="index==num01">
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
					<h3 v-for="(item,index) in TypeBtnName02" :key="index">
						<span class="TOP-btn-span" @click="change02(index)" v-bind:class="{active: index==num02}">{{item.ListName}}</span>
					</h3>
				</nav>
			</div>
			<!-- 图片列表02 -->
			<div class="slide">
				<ol class="slide-ol-active slide-ol" v-for="(item,index) in typeList02" :key="index" v-show="index==num02">
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
		
		<!-- 轻小说 -->
		<div class="module">
			<div class="header">
				<div class="header-title">
					<h3>轻小说</h3>
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
					<li v-for="(item,index) in LightNovel" :key="index">
						<img :src="item.pic" class="Book-img">
						<figcaption>{{item.bookName}}</figcaption>
						<p>
							<span>{{item.author}}</span>
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
					<li v-for="(item,index) in theme" class="slide-img" :key="index">
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
	</main>
</template>
	
<script>
	export default{
		data(){
			return {
				num: 0,
				num01: 0,
				num02: 0,
				rotation: [
					{
						pic: require('../../assets/img/boy/Pic-rotationB01.jpg')
					},
					{
						pic: require('../../assets/img/boy/Pic-rotationB02.jpg')
					},
					{
						pic: require('../../assets/img/boy/Pic-rotationB03.jpg')
					},
					{
						pic: require('../../assets/img/boy/Pic-rotationB04.jpg')
					},
					{
						pic: require('../../assets/img/boy/Pic-rotationB05.jpg')
					}
				],
				hot: [
					{
						pic: require('../../assets/img/boy/hotBookB01.jpg'),
						bookName: '狂探',
						author: '旷海忘湖'
					},
					{
						pic: require('../../assets/img/boy/hotBookB02.jpg'),
						bookName: '我真要逆天啦',
						author: '柳一条'
					},
					{
						pic: require('../../assets/img/boy/hotBookB03.jpg'),
						bookName: '大医凌然',
						author: '志鸟村'
					},
					{
						pic: require('../../assets/img/boy/hotBookB04.jpg'),
						bookName: '从大佬到武林盟主',
						author: '小楼听风云'
					},
					{
						pic: require('../../assets/img/boy/hotBookB05.jpg'),
						bookName: '无相进化',
						author: '宁悦岳'
					},
					{
						pic: require('../../assets/img/boy/hotBookB06.jpg'),
						bookName: '我不想五五开',
						author: '小木不是小暮'
					},
					{
						pic: require('../../assets/img/boy/hotBookB07.jpg'),
						bookName: '秘战',
						author: '沉默似铁'
					}
				],
				free: [
					{
						pic: require('../../assets/img/boy/freeB01.jpg'),
						bookName: '舌尖上的霍格沃茨',
						author: '幽萌之羽'
					},
					{
						pic: require('../../assets/img/boy/freeB02.jpg'),
						bookName: '神级卡徒',
						author: '请叫我小佳佳'
					},
					{
						pic: require('../../assets/img/boy/freeB03.jpg'),
						bookName: '寻宝全世界',
						author: '行走的驴'
					},
					{
						pic: require('../../assets/img/boy/freeB04.jpg'),
						bookName: '凌天战尊',
						author: '风轻扬'
					},
					{
						pic: require('../../assets/img/boy/freeB05.jpg'),
						bookName: '会穿越的道观',
						author: '古夏扬'
					},
					{
						pic: require('../../assets/img/boy/freeB06.jpg'),
						bookName: '战国野心家',
						author: '最后一个名'
					}
				],
				listBtnName: [
					{
						ListName: '热销榜'
					},
					{
						ListName: '风云榜'
					},
					{
						ListName: '签约榜'
					},
					{
						ListName: '推荐榜'
					}
				],
				rankList: [
					{
						top1: 'top1',
						pic1: require('../../assets/img/boy/HotSellB01.jpg'),
						bookName1: '全球高武',
						author1: '老鹰吃小鸡',
						
						top2: 'top2',
						pic2: require('../../assets/img/boy/HotSellB02.jpg'),
						bookName2: '诡秘之主',
						author2: '爱潜水的乌贼',
						
						top3: 'top3',
						pic3: require('../../assets/img/boy/HotSellB03.jpg'),
						bookName3: '九星毒奶',
						author3: '育',
						
						top4: 'top4',
						pic4: require('../../assets/img/boy/HotSellB04.jpg'),
						bookName4: '欧神',
						author4: '辰机唐红豆',
						
						top5: 'top5',
						pic5: require('../../assets/img/boy/HotSellB05.jpg'),
						bookName5: '史上最强赘婿',
						author5: '沉默的糕点',
						
						top6: 'top6',
						pic6: require('../../assets/img/boy/HotSellB06.jpg'),
						bookName6: '明朝败家子',
						author6: '上山打老虎额',
						
						top7: 'top7',
						pic7: require('../../assets/img/boy/HotSellB07.jpg'),
						bookName7: '牧神记',
						author7: '宅猪',
						
						top8: 'top8',
						pic8: require('../../assets/img/boy/HotSellB08.jpg'),
						bookName8: '凡人修仙之仙界篇',
						author8: '忘语',
						
						top9: 'top9',
						pic9: require('../../assets/img/boy/HotSellB09.jpg'),
						bookName9: '修真聊天群',
						author9: '圣骑士的传说',
						
						top10: 'top10',
						pic10: require('../../assets/img/boy/HotSellB10.jpg'),
						bookName10: '民国谍影',
						author10: '寻青藤'
					},
					{
						top1: 'top1',
						pic1: require('../../assets/img/boy/WindB01.jpg'),
						bookName1: '大符篆师',
						author1: '小刀锋利',
						
						top2: 'top2',
						pic2: require('../../assets/img/boy/WindB02.jpg'),
						bookName2: '星空最强大圣',
						author2: '紫雨哥',
						
						top3: 'top3',
						pic3: require('../../assets/img/boy/WindB03.jpg'),
						bookName3: '生活系神豪',
						author3: '起酥面包',
						
						top4: 'top4',
						pic4: require('../../assets/img/boy/WindB04.jpg'),
						bookName4: '从1983开始',
						author4: '睡觉会变白',
						
						top5: 'top5',
						pic5: require('../../assets/img/boy/WindB05.jpg'),
						bookName5: '大美时代',
						author5: '中秋月明',
						
						top6: 'top6',
						pic6: require('../../assets/img/boy/WindB06.jpg'),
						bookName6: '咫尺之间人尽敌国',
						author6: '乘风御剑',
						
						top7: 'top7',
						pic7: require('../../assets/img/boy/WindB07.jpg'),
						bookName7: '超凡黎明',
						author7: '文抄公',
						
						top8: 'top8',
						pic8: require('../../assets/img/boy/WindB08.jpg'),
						bookName8: '龙城',
						author8: '方想',
						
						top9: 'top9',
						pic9: require('../../assets/img/boy/WindB09.jpg'),
						bookName9: '神豪宁败家',
						author9: '偷名',
						
						top10: 'top10',
						pic10: require('../../assets/img/boy/WindB10.jpg'),
						bookName10: '重生晚点没事吧',
						author10: '38大虾'
					},
					{	
						top1: 'top1',
						pic1: require('../../assets/img/boy/Contract01.jpg'),
						bookName1: '九龙吞珠',
						author1: '齐家七哥',
						
						top2: 'top2',
						pic2: require('../../assets/img/boy/Contract02.jpg'),
						bookName2: '我在英伦当贵族',
						author2: '羞涩的小恶魔',
						
						top3: 'top3',
						pic3: require('../../assets/img/boy/Contract03.jpg'),
						bookName3: '重启完美年代',
						author3: '天所以资',
						
						top4: 'top4',
						pic4: require('../../assets/img/boy/Contract04.jpg'),
						bookName4: '龙王大人在上',
						author4: '雨魔',
						
						top5: 'top5',
						pic5: require('../../assets/img/boy/Contract05.jpg'),
						bookName5: '诸天大佬聊天室',
						author5: '笑畏余生',
						
						top6: 'top6',
						pic6: require('../../assets/img/boy/Contract06.jpg'),
						bookName6: '段子的平行世界',
						author6: '丸子爱面子',
						
						top7: 'top7',
						pic7: require('../../assets/img/boy/Contract07.jpg'),
						bookName7: '别惹那个酒仙',
						author7: '中华牌香烟',
						
						top8: 'top8',
						pic8: require('../../assets/img/boy/Contract08.jpg'),
						bookName8: '悠闲时代',
						author8: '呆萌的雪豹',
						
						top9: 'top9',
						pic9: require('../../assets/img/boy/Contract09.jpg'),
						bookName9: '漫威里的阿拉德枪神',
						author9: '神小兜',
						
						top10: 'top10',
						pic10: require('../../assets/img/boy/Contract10.jpg'),
						bookName10: '神级国宝培育系统',
						author10: '熊猫奇达'
					},
					{
						top1: 'top1',
						pic1: require('../../assets/img/boy/RecommendationB01.jpg'),
						bookName1: '太初',
						author1: '高楼大厦',
						
						top2: 'top2',
						pic2: require('../../assets/img/boy/RecommendationB02.jpg'),
						bookName2: '诡秘之主',
						author2: '爱潜水的乌贼',
						
						top3: 'top3',
						pic3: require('../../assets/img/boy/RecommendationB03.jpg'),
						bookName3: '英雄联盟：我的时代',
						author3: '骷髅精灵',
						
						top4: 'top4',
						pic4: require('../../assets/img/boy/RecommendationB04.jpg'),
						bookName4: '狂探',
						author4: '旷海忘湖',
						
						top5: 'top5',
						pic5: require('../../assets/img/boy/RecommendationB05.jpg'),
						bookName5: '王者时刻',
						author5: '蝴蝶蓝',
						
						top6: 'top6',
						pic6: require('../../assets/img/boy/RecommendationB06.jpg'),
						bookName6: '大符篆师',
						author6: '小刀锋利',
						
						top7: 'top7',
						pic7: require('../../assets/img/boy/RecommendationB07.jpg'),
						bookName7: '赝太子',
						author7: '荆柯守',
						
						top8: 'top8',
						pic8: require('../../assets/img/boy/RecommendationB08.jpg'),
						bookName8: '貌似大魔王',
						author8: '牛云',
						
						top9: 'top9',
						pic9: require('../../assets/img/boy/RecommendationB09.jpg'),
						bookName9: '地球第一剑',
						author9: '言归正传',
						
						top10: 'top10',
						pic10: require('../../assets/img/boy/RecommendationB10.jpg'),
						bookName10: '我修的可能是假仙',
						author10: '明月地上霜'
					}
				],
				NewBook: [
					{
						pic: require('../../assets/img/boy/NewBookB01.jpg'),
						title: '欧神',
						des: '灵气复苏。洪小福觉醒了，他觉醒的居然是运气！这下就厉害了！看看他的技能：参见欧神、以石击卵、飞来横祸、天降正义、落地成盒……这是一个小人物一步一步终于成为全人类膜拜的幸运之神的故事……————————这是一本超级有爱的书。————————发布一下书友群欧神全订群：709162463，弟子以上粉丝+全订阅欧神普群：791716023，每天投票即可',
						author: '辰机唐红豆',
						gray: '都市',
						red: '连载中',
						blue: '105.14万字'
						
					},
					{
						pic: require('../../assets/img/boy/NewBookB02.jpg'),
						title: '第一序列',
						des: '这次是一个新的故事。浩劫余生，终见光明。',
						author: '会说话的肘子',
						gray: '都市',
						red: '连载中',
						blue: '49.01万字'
						
					},
					{
						pic: require('../../assets/img/boy/NewBookB03.jpg'),
						title: '超神道术',
						des: '你感觉自己力量不足，力量+1，你修炼了金钟罩，武功等级+1，你捡到了一本道经，悟性+1，你的对手力大无穷，金钟罩大圆满，你将金钟罩，铁布衫，十三横练全部+1，练成了金刚不坏神功，对手刀砍不动，崩溃自杀。',
						author: '当年烟火',
						gray: '玄幻',
						red: '连载中',
						blue: '68.19万字'
					}
				],
				EndBook: [
					{
						pic: require('../../assets/img/boy/ENDB01.jpg'),
						title: '斗罗大陆',
						des: '唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。这里没有魔法，没有斗气，没有武术，却有神',
						author: '唐家三少',
						gray: '玄幻',
						red: '完本',
						blue: '291.62万字'
						
					},
					{
						pic: require('../../assets/img/boy/ENDB02.jpg'),
						title: '第一序列',
						des: '叶默蓦然清醒过来的时候，才发现周围的一切似乎都变了，美女师父也不见了。他也发现了自己成了被世家抛弃的弃子，被别人退婚的苦逼,还是被女人站在讲台上拿着他情书羞辱的对象......但是',
						author: '鹅是老五',
						gray: '仙侠',
						red: '完本',
						blue: '49.01万字'
						
					},
					{
						pic: require('../../assets/img/boy/ENDB03.jpg'),
						title: '超神道术',
						des: '“倘若这宇宙，真是一片残酷血腥的黑暗森林，我们修真者，也会燃烧自己的生命，绽放出微弱的火花！”“哪怕这火花再微弱，再短暂，再渺小，可是只要我们源源不断，前赴后继，终有一日，火花会点',
						author: '卧牛真人',
						gray: '科幻',
						red: '完本',
						blue: '68.19万字'
					}
				],
				TypeBtnName: [
					{
						ListName: '玄幻奇幻'
					},
					{
						ListName: '武侠仙侠'
					},
					{
						ListName: '都市职场'
					}
				],
				typeList01: [
					{
						pic1: require('../../assets/img/boy/Fantasy01.jpg'),
						bookName1: '随身带个抽奖面板',
						author1: '再入江湖',
						
						pic2: require('../../assets/img/boy/Fantasy02.jpg'),
						bookName2: '支配神话',
						author2: '轻若君子',
						
						pic3: require('../../assets/img/boy/Fantasy03.jpg'),
						bookName3: '我夺舍了魔教教主',
						author3: '雪满林间',
						
						pic4: require('../../assets/img/boy/Fantasy04.jpg'),
						bookName4: '恐怖，如斯',
						author4: '虫梦',
						
						pic5: require('../../assets/img/boy/Fantasy05.jpg'),
						bookName5: '永夜支配者',
						author5: '肃冬'
					},
					{
						pic1: require('../../assets/img/boy/swordsman01.jpg'),
						bookName1: '逆行神话',
						author1: '西城冷月',
						
						pic2: require('../../assets/img/boy/swordsman02.jpg'),
						bookName2: '放开封神让我来',
						author2: '木木涛',
						
						pic3: require('../../assets/img/boy/swordsman03.jpg'),
						bookName3: '洪荒之天帝纪年',
						author3: '击楫中流',
						
						pic4: require('../../assets/img/boy/swordsman04.jpg'),
						bookName4: '九龙吞珠',
						author4: '齐家七哥',
						
						pic5: require('../../assets/img/boy/swordsman05.jpg'),
						bookName5: '武林最富有的崽',
						author5: '六六小和尚'
					},
					{
						pic1: require('../../assets/img/boy/Urban01.jpg'),
						bookName1: '悠闲时代',
						author1: '呆萌的雪豹',
						
						pic2: require('../../assets/img/boy/Urban02.jpg'),
						bookName2: '黑科技算命大师',
						author2: '何一柯',
						
						pic3: require('../../assets/img/boy/Urban03.jpg'),
						bookName3: '我怎么就火了呢',
						author3: '奈何笑忘川',
						
						pic4: require('../../assets/img/boy/Urban04.jpg'),
						bookName4: '全球制造',
						author4: '二将',
						
						pic5: require('../../assets/img/boy/Urban05.jpg'),
						bookName5: '神级国宝培育系统',
						author5: '熊猫奇达'
					}
				],
				TypeBtnName02: [
					{
						ListName: '历史军事'
					},
					{
						ListName: '游戏体育'
					},
					{
						ListName: '科幻灵异'
					}
				],
				typeList02: [
					{
						pic1: require('../../assets/img/boy/history01.jpg'),
						bookName1: '大唐第一闲王',
						author1: '末日游侠',
						
						pic2: require('../../assets/img/boy/history02.jpg'),
						bookName2: '战国野心家',
						author2: '最后一个名',
						
						pic3: require('../../assets/img/boy/history03.jpg'),
						bookName3: '宋朝探花郎',
						author3: '晨风天堂',
						
						pic4: require('../../assets/img/boy/history04.jpg'),
						bookName4: '盛唐大救星',
						author4: '萧玄武.',
						
						pic5: require('../../assets/img/boy/history05.jpg'),
						bookName5: '密战无痕',
						author5: '长风'
					},
					{
						pic1: require('../../assets/img/boy/game01.jpg'),
						bookName1: '死灵神话',
						author1: '羽民',
						
						pic2: require('../../assets/img/boy/game02.jpg'),
						bookName2: '我真的控制不住自己',
						author2: '张扬的五月',
						
						pic3: require('../../assets/img/boy/game03.jpg'),
						bookName3: '无限二次元大乱斗',
						author3: '挨个喷',
						
						pic4: require('../../assets/img/boy/game04.jpg'),
						bookName4: '精灵之从头再来',
						author4: '倚夜听雨.',
						
						pic5: require('../../assets/img/boy/game05.jpg'),
						bookName5: '我，中国队长',
						author5: '大头文'
					},
					{
						pic1: require('../../assets/img/boy/strangeB01.jpg'),
						bookName1: '诸天万界剧透群',
						author1: '摘星上人',
						
						pic2: require('../../assets/img/boy/strangeB02.jpg'),
						bookName2: '诸天祭祀',
						author2: '古今兮',
						
						pic3: require('../../assets/img/boy/strangeB03.jpg'),
						bookName3: '流浪陨石',
						author3: '陆小缝',
						
						pic4: require('../../assets/img/boy/strangeB04.jpg'),
						bookName4: '超次元之反派交流群',
						author4: '枫情豆沙包.',
						
						pic5: require('../../assets/img/boy/strangeB05.jpg'),
						bookName5: '恐慌马赛克',
						author5: '猫右卫'
					}
				],
				LightNovel: [
					{
						pic: require('../../assets/img/boy/LightNovel01.jpg'),
						bookName: '唯一指定玩家',
						author: '悲伤之人...'
					},
					{
						pic: require('../../assets/img/boy/LightNovel02.jpg'),
						bookName: '漫威里的萌王',
						author: '梦之绯月'
					},
					{
						pic: require('../../assets/img/boy/LightNovel03.jpg'),
						bookName: '我给万物加个点',
						author: '常世'
					},
					{
						pic: require('../../assets/img/boy/LightNovel04.jpg'),
						bookName: '诸天大佬聊天室',
						author: '笑畏余生.'
					},
					{
						pic: require('../../assets/img/boy/LightNovel05.jpg'),
						bookName: '漫威里的阿拉德枪神',
						author: '神小兜'
					}
				],
				theme: [
					{
						pic: require('../../assets/img/boy/themeB01.jpg')
					},
					{
						pic: require('../../assets/img/boy/themeB02.jpg')
					},
					{
						pic: require('../../assets/img/boy/themeB03.jpg')
					},
					{
						pic: require('../../assets/img/boy/themeB04.jpg')
					}
				]
			}
		},
		methods:{
			change(index){
				this.num=index
			},
			change01(index){
				this.num01=index
			},
			change02(index){
				this.num02=index
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
	.nav-box{
		height: 2.75rem;
		list-style-type: none;
		padding: 0.6875rem 0;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}
	.nav-box li{
		display: inline-block;
		margin: 0 10px;
		float: left;
	}
	/* logo */
	.nav-box li:nth-child(1){
		position: absolute;
		top: 0.25rem;
		left: 0;
	}
	.logoBoy-a{
		width: 6.25rem;
		padding-right: 0.75rem;
		padding-left: 0.25rem;
		display: inline-block;
	}
	.logoBoy-p{
		width: inherit;
		height: 1.25rem;
		margin: 0.84375rem 0;
		font-size: 1rem;
		color: transparent;
		background: url(../../assets/img/logo.svg);
		background-size: 100%;
	}
	/* btn */
	.nav-box-a{
		margin: 0.5rem 0;
		position: absolute;
		top: 0.25rem;
		left: 38%;
	}
	.nav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
	}
	.nav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;
	}
	.nav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.27rem;
	}
	.nav-btn-a{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.nav-box li:nth-child(3){
		margin: 0.5rem 0.5625rem 0.5rem 0;
		position: absolute;
		top: 0.4375rem;
		right: 0;
	}
	.icon-btn{
		display: inline-block;
	}
	.icon-All{
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 0.4375rem;
		color: #ED424B;
	}
	.icon-login{
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 0.4375rem;
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
		display: box;
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
