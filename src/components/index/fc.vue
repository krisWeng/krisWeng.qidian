<template>
	<main id="fs">
		<aside>
			<i class="gray-box"></i>
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
					<router-link to="/bookshelf" class="content-three-a">登录去书架</router-link>
				</div>
			</div>
		</aside>
	</main>
</template>

<script>
</script>

<style>
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
		margin-right: 1.875rem;
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
</style>
