<template>
	<div id="reading">
		<div class="BigBox">
			<!-- 未登录 -->
			<div class="unlogin-box">
				<strong>使用书架便捷追更</strong>
				<span>·</span>
				<router-link to="/login">登录</router-link>
			</div>
			
			<!-- 暂无记录 -->
			<div class="space">
				暂无阅读记录
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
	*{
		margin: 0 auto;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	/* 未登录 */
	.unlogin-box{
		font-size: 0.875rem;
		line-height: 3.125rem;
		text-align: center;
		background: #f6f7f9;
	}
	.unlogin-box a{
		color: #4284ed;
	}
	/* 暂无记录 */
	.space{
		height: 5.484375rem;
		font-size: 0.875rem;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		max-width: 50%;
		margin: auto;
		text-align: center;
		color: #969ba3;
	}
	.space::before{
		content: '';  
		width: 2.53125rem;
		height: 3.375rem;
		display: block;
		margin: 0 auto .75rem;
		background: url(../../assets/img/space.svg) no-repeat center;
		background-size: 100% 100%;
	}
</style>
