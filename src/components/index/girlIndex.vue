<template>
	<div id="girlIndex">
		<ul>
			<li>
				<!-- logo -->
				<div to="/girl" class="logoGirl-a">
					<h1 class="logoGirl-p">
						起点女生网
					</h1>
				</div>
			</li>
			<li>
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
	ul{
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
	.logoGirl-a{
		width: 6.25rem;
		padding: 0 1.125rem;
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
	}
	.logoGirl-p{
		width: inherit;
		height: 1.25rem;
		margin: 0.90625rem 0;
		font-size: 1rem;
		color: transparent;
		background: url(../../assets/img/logoGirl.svg);
		background-size: 100%;
	}
	/* btn */
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

		position: absolute;
		left: 35%;
	}
	.nav-btn:nth-child(2){
		border-radius: 0 0.25rem 0.25rem 0;
		position: absolute;
		left: 49%;
	}
	ul .router-link-exact-active{
		background: #ED424B;
		color: #fff;
	}
	/* icon */
	.icon-btn:nth-child(1){
		position: absolute;
		top: 0;
		right: 12%;
	}
	.icon-btn:nth-child(2){
		position: absolute;
		top: 0;
		right: 2%;
	}
	.icon-All{
		width: 1.5rem;
		height: 1.5rem;
		margin: 0.625rem;
		color: #ED424B;
	}
	.icon-login{
		width: 1.625rem;
		height: 1.625rem;
		margin: 0.625rem;
	}
</style>
