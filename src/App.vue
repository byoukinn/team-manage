<template>
	<div id="app">
		<div class="container">
			<div id="row">
				<router-link v-for="i in routerList" :key="i.id" :to="i.path"> {{ i.text }} </router-link>
			</div>
			<div class="row">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data: function () {
			return {
				routerList: [{
						text: '主233页',
						path: '/'
					},
					{
						text: '关于',
						path: '/about'
					},
					{
						text: 'DEMO页面',
						path: '/Demo'
					},
					{
						text: '老师简介',
						path: '/Teachers'
					},
				],
			}
		},
		methods: {
			democlick: function () {
				console.log('进来了', this.demolist)
			},

		},
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	div.router-view {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 80%;
		margin: auto;
	}
</style>