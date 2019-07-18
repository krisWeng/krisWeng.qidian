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
				<router-link to="/girl" class="nav-btn nav-btn-girl">
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
						<router-link to="/boy-hotbook">
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
		<span class="readBox Box-icon" id="lately" @click="appear()">
			最近阅读
		</span>
		<span class="backTop Box-icon" id="TOPBack" @click="top()" style="display: none;">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-fanhuidingbu"></use>
			</svg>
		</span>

		<!-- 最近阅读 -->
		<transition name="fade">
			<aside v-show="show" id="aside">
				<i class="gray-box" @click="appear()"></i>
				<div class="reading-box">
					<h3 class="content-one">最近阅读</h3>
					<div class="content-two">
						<div class="two-bookname">
							<span class="bookname-tit">泼辣小厨娘</span>
							<p class="bookname-toRead">
								继续阅读
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
								</svg>
							</p>
						</div>
						<p>读至 第三章 深夜熬粥（新书求推荐、收藏）</p>
						<p>5天前</p>
						<span class="all-reading">以上为全部阅读记录</span>
					</div>
					<div class="content-three">
						<router-link to="/login" class="content-three-a">
							登录去书架
						</router-link>
					</div>
				</div>
			</aside>
		</transition>
	</main>
</template>

<script>
	export default{
		data(){
			return {
				num: 0,
				num01: 0,
				num02: 0,
				show: false,
        rotation: [],
        hot: [],
        free: [],
        listBtnName: [],
        rankList: [],
        NewBook: [],
        EndBook: [],
        TypeBtnName: [],
        typeList01: [],
        TypeBtnName02: [],
        typeList02: [],
        LightNovel: [],
        theme: []
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
			appear(){
				this.show =! this.show
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
				//变量scrollTop是滚动条滚动时，距离顶部的距离
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let browserHeight = window.outerHeight;
				//变量windowHeight是可视区的高度
				let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				//变量scrollHeight是滚动条的总高度
				let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
				if (scrollTop > browserHeight) {
					TOPBack.style.display = 'block';
				} else {
					TOPBack.style.display = 'none';
				}
				if(scrollTop+windowHeight==scrollHeight){
					TOPBack.style.display = 'none';
					lately.style.display = 'none';
				}else{
					lately.style.display = 'block';
				}
			},
			destroyed () {
				window.removeEventListener('scroll', this.scrollToTop);
        window.removeEventListener('setInterval',this.function);
			}
		},
		mounted(){
      this.$http.get("./data/boy.json")
      .then((res)=>{
        this.rotation = res.data.boyList.rotation
        this.hot = res.data.boyList.hot
        this.free = res.data.boyList.free
        this.listBtnName = res.data.boyList.listBtnName
        this.rankList = res.data.boyList.rankList
        this.NewBook = res.data.boyList.NewBook
        this.EndBook = res.data.boyList.EndBook
        this.TypeBtnName = res.data.boyList.TypeBtnName
        this.typeList01 = res.data.boyList.typeList01
        this.TypeBtnName02 = res.data.boyList.TypeBtnName02
        this.typeList02 = res.data.boyList.typeList02
        this.LightNovel = res.data.boyList.LightNovel
        this.theme = res.data.boyList.theme
      })

			this.function()
			setInterval(this.function)
      // window.addEventListener('setInterval', this.function)

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
	ol{
		list-style: none;
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
  .nav-box li:nth-child(2){
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
	.nav-btn-girl{
		color: #ED424B;
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
	/* 最近阅读 */
	aside{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 5;
	}
	.gray-box{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.6;
		background: #000;
	}
	.reading-box{
		height: 100%;
		position: absolute;
		left: 2.5rem;
		right: 0;
		background: #fff;
		overflow: hidden;
	}
	.content-one{
		line-height: 1.9375rem;
		padding: 18px 18px 0 18px;
		text-align: center;
		display: block;
	}
	.content-two{
		padding: 1.125rem;
	}

	.two-bookname{
		overflow: hidden;
	}
	.bookname-tit{
		float: left;
		font-size: 1.125rem;
		font-weight: bolder;
		margin-bottom: 0.1875rem;
	}
	.content-two p{
		color: #969ba3;
	}
	.bookname-toRead{
		float: right;
		margin-right: 0;
	}
	.bookname-toRead,
	.bookname-toRead .icon{
		font-size: 0.875rem;
	}
	.all-reading{
		font-size: 0.875rem;
		color: #969ba3;
		display: block;
		line-height: 3.125rem;
		text-align: center;
		border-top: 0.0625rem solid #f0f1f2;
		margin-top: 1.125rem;
	}
	.content-three{
		padding: 1.125rem;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.content-three-a{
		width: 60%;
		margin-bottom: 0.84375rem;
		text-decoration: none;
		color: #fff;
		background: #ED424B;
		border-radius: 99px;
		padding: 0 1.125rem;
		line-height: 2.5rem;
		display: inline-block;
		box-sizing: border-box;
	}
	/*显示*/
	.fade-enter{
		width: 0;
	}
	.fade-enter-to{
		width: 60%;
	}
	.fade-enter-active{
		transition: all 0.5s;
	}
	/*隐藏*/
	.fade-leave{
		width: 60%;
	}
	.fade-leave-to{
		width: 0;
	}
	.fade-leave-active{
		transition: all 0.5s;
	}
</style>
