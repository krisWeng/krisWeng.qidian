<template>
	<main id="search">
		<!-- 搜索框 -->
		<header class="search-box">
			<div class="search-a">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-sousuokuang"></use>
				</svg>
				<input type="text" placeholder="覆汉" class="search-input">
			</div>
			<span class="search-cancel" @click="back()">取消</span>
		</header>
		<h5 class="search-all">大家都在搜</h5>
		<div class="search-tag">
			<span v-for="item in tagList">{{item.name}}</span>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				tagList:[
					{
						name: '大美时代'
					},
					{
						name: '百亿富豪的退休生活'
					},
					{
						name: '随身带个抽奖面板'
					},
					{
						name: '我的父亲叫灭霸'
					},
					{
						name: '超凡大卫'
					},
					{
						name: '我想当巨星'
					},
					{
						name: '回到北宋当大佬'
					},
					{
						name: '前任无双'
					},
					{
						name: '带着鬼王分身闯聊斋'
					},
					{
						name: '这个日式灵异不太冷'
					}
				]
			}
		},
		methods:{
			back(){
				this.$router.go('-1')
			}
		}
	}
</script>

<style>
	#search{
		position: fixed;
		z-index: 20;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #fff;
	}
	a{
		text-decoration: none;
	}
	/* 搜索框 */
	.search-box{
	    height: 3.125rem;
		box-sizing: border-box;
		padding-top: 0.773437rem;
		padding-bottom: 0.703125rem;
		border-bottom: 1px solid #f0f1f2;
		background: #fff;
	}
	.search-a{
		height: 2.25rem;
		position: absolute;
		top: 0;
		right: 3.75rem;
		bottom: 0;
		left: 1rem;
		margin: 0.390625rem 0;
		border-radius: .25rem;
		background: #f6f7f9;
	}
	.search-a .icon{
		position: absolute;
		top: 0;
		bottom: 0;
		left: .5rem;
		margin: 0.5625rem 0;
		color: #969ba3;
	}
	.search-input{
		width: 78%;
		height: inherit; 
		line-height: 2.25rem;
		font-size: 1rem;
		padding: 0 2.25rem;
		border: 0 none;
		background: #f6f7f9;
	}
	.search-cancel{
		width: 3.25rem;
		height: 2.25rem;
		font-size: 1rem;
		line-height: 2rem;
		position: absolute;
		top: 0;
		right: .25rem;
		bottom: 0;
		margin: 0.5625rem 0;
		text-align: center;
		background: #fff;
		color: #2c3e50;
	}
	/*  */
	.search-all{
		padding: 1.054687rem 1.125rem 0;
		line-height: 2rem;
		color: #969ba3;
		font-weight: 400;
		background: #f6f7f9;
	}
	/* 标签框 */
	.search-tag{
		padding: 0.28125rem 0.5625rem 0.84375rem 1.125rem;
		background: #fff;
	}
	.search-tag span{
		font-size: 0.875rem;
		line-height: 1.875rem;
		display: inline-block;
		padding: 0 0.703125rem;
		margin: 0.5625rem 0.5625rem 0 0;
		text-align: center;
		border: 1px solid;
		border-radius: 99px;
		color: #969ba3;
	}
</style>
