<template>
	<div id="girlIndex">
		<ul class="nav-box">
			<li>
				<!-- logo -->
				<div to="/girl" class="logoGirl-a">
					<h1 class="logoGirl-p">
						起点女生网
					</h1>
				</div>
			</li>
			<li class="nav-box-a">
				<!-- 男生 -->
				<router-link to="/boy" class="nav-btn">
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
					<svg class="icon icon-All icon-login" aria-hidden="true">
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
	  <router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{
		margin: 0 auto;
		padding: 0;
	}
	.nav-box{
		height: 2.75rem;
		list-style-type: none;
		padding: 0.6875rem 0;
		position: relative;
		box-sizing: border-box;
	}
	li{
		display: inline-block;
		margin: 0 10px;
		float: left;
	}
	a{
		color: black;
		text-decoration: none;
	}
	/* logo */
	.nav-box li:nth-child(1){
		position: absolute;
		top: 0.25rem;
		left: 0;
	}
	.logoGirl-a{
		width: 6.25rem;
		padding-right: 0.75rem;
		padding-left: 0.25rem;
		display: inline-block;
	}
	.logoGirl-p{
		width: inherit;
		height: 1.25rem;
		margin: 0.84375rem 0;
		font-size: 1rem;
		color: transparent;
		background: url(../../assets/img/logoGirl.svg);
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
	.nav-box .router-link-exact-active{
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
</style>
