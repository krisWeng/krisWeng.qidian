<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
	*{
		margin: 0 auto;
		padding: 0;
	}
	body{
		background: #f6f7f9;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.icon {
		width: 1rem;
		height: 1rem;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
