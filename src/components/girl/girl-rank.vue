<template>
	<div id="boy-rank">
		<!-- 头部 -->
		<header>
			<ul class="girlrank-ul">
				<li class="out">
					<router-link to="/girl">
						<span>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-Fill"></use>
							</svg>
						</span>
					</router-link>
				</li>
				<p class="header-p">排行榜</p>
				<li class="girl-rank-link">
					<router-link to="/boy-rank" class="girlranknav-btn">
						男生
					</router-link>
					<router-link to="/girl-rank" class="girlranknav-btn">
						女生
					</router-link>
				</li>
				<li class="girl-rank-icon">
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

		<div class="module-box" v-for="(item,index) in rankListGirl" :key="index">
			<span class="rank-left">
				<img :src="item.pic">
				<h2 class="rank-title">{{item.title01}}<br>{{item.title02}}</h2>
				<svg class="icon rank-icon" aria-hidden="true">
					<use xlink:href="#icon-xiangyouyuanjiantouyoujiantoumianxing"></use>
				</svg>
			</span>
			<ol class="rank-ol">
				<li>
					<a>
						<h3>{{item.book01}}</h3>
						<span class="rankmore-icon">
							<svg class="icon " aria-hidden="true">
								<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a>
						<h3>{{item.book02}}</h3>
						<span class="rankmore-icon">
							<svg class="icon " aria-hidden="true">
								<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a>
						<h3>{{item.book03}}</h3>
						<span class="rankmore-icon">
							<svg class="icon " aria-hidden="true">
								<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a>
						<h3>{{item.book04}}</h3>
						<span class="rankmore-icon">
							<svg class="icon " aria-hidden="true">
								<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
							</svg>
						</span>
					</a>
				</li>
				<li>
					<a>
						<h3>{{item.book05}}</h3>
						<span class="rankmore-icon">
							<svg class="icon " aria-hidden="true">
								<use xlink:href="#icon-tiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></use>
							</svg>
						</span>
					</a>
				</li>
			</ol>
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
				rankListGirl:[]
			}
		},
		methods: {
			show(){
				this.show01 = ! this.show01
			}
		},
    mounted(){
      this.$http.get("./data/rank.json")
      .then((res)=>{
        this.rankListGirl = res.data.rankList.rankListGirl
      })
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
  ol{
    list-style: none;
  }
	.girlrank-ul{
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
	.girl-rank-link{
		position: absolute;
		left: 38%;
	}
	.girlranknav-btn{
		font-size: 0.875rem;
		padding: 0 0.875rem;
		border: 1px solid #ed424b;
		line-height: 1.75rem;
		display: inline-block;
		color: #ED424B;
		top: 0.625rem;
		cursor: pointer;
	}
	.girlranknav-btn:nth-child(1){
		border-radius: 0.25rem 0 0 0.25rem;

	}
	.girlranknav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		margin-left: -0.5rem;
	}
	.girl-rank-link .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.girl-rank-icon{
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
		width: 15%;
		height: 3.625rem;
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
		width: 75%;
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
		position: relative;
		margin-bottom: 0.84375rem;
		overflow: hidden;
	}
	.rank-left{
		width: 32.61%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}
	.rank-left img{
		width: 100%;
		height: 100%;
		display: block;
	}
	.rank-title{
		position: absolute;
		right: 0;
		bottom: 6rem;
		left: 0;
		transform: scaleX(1.2);
		font-size: 1.625rem;
		text-align: center;
		color: #fff;
	}
	.rank-icon{
		width: 1.875rem;
		height: 1.875rem;
		position: absolute;
		right: 0;
		bottom: 2rem;
		left: 0;
		margin: auto;
		color: #fff;
	}
	/* 右边 */
	.rank-ol{
		overflow: hidden;
		margin-left: 32.61%;
		padding-left: 38px;
		counter-reset: bookrank;
		list-style: none;
	}
	.rank-ol li{
		box-shadow: 0 1px #f0f1f2;
		position: relative;
	}
	.rank-ol li a{
		line-height: 1.6875rem;
		/* display: block; */
		display: flex;
		margin-left: -15.77%;
		padding: 2.8% 7.47% 2.8% 17.74%;
	}
	.rank-ol li::before{
		content: counter(bookrank) '.';
		height: 1.6875rem;
		font: bold 1.125rem 'DIN Alternate';
		position: absolute;
		top: 0;
		bottom: 0;
		left: -1.125rem;
		margin: auto;
		counter-increment: bookrank;
	}
	.rank-ol li h3{
		font-size: 1rem;
		display: inline-block;
		margin: 0;
	}
	.rankmore-icon{
		float: right;
		margin-right: 0;
	}
	.rankmore-icon .icon{
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
