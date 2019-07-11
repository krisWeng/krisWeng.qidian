<template>
	<div id="mybook">
		<div class="BigBox">
			<!-- 未登录 -->
			<div class="unlogin">
				<router-link to="/login">登录</router-link>
				<p>登录后实时同步进度</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			back(){
				this.$router.go('-1')
			}
		}
	}
</script>

<style>
	/* 未登录 */
	.unlogin{
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -3rem;
		text-align: center;
	}
	.unlogin a{
		width: 17.375rem;
		font-size: 1rem;
		line-height: 2.5rem;
		display: inline-block;
		padding-right: 1em;
		padding-left: 1em;
		text-align: center;
		color: #fff;
		border-radius: 99px;
		background-color: #ed424b;
	}
	.unlogin p{
		font-size: 1rem;
		margin-top: 0.84375rem;
		color: #969ba3;
	}
</style>
