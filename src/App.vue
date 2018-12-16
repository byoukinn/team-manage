<template>
	<div id="app">
		<div id="nav">
			<router-link v-for="item in routerList" :to="item.path"> {{ item.text }} </router-link> 
		</div>
		<div class="router-view">
			<router-view/>
		</div>
	</div>
</template>

<script>
import Teachers from '@/views/Teachers.vue'

export default {
	name: 'app',
	data: function () {
		return {
			routerList: [
				{text:'主233页', path: '/'},
				{text:'关于', path: '/about'},
				{text:'DEMO页面', path: '/Demo'},
				{text:'老师简介', path: '/Teachers'},
			],
		}
	},
	components: {
		Teachers
	},
	methods: {
		democlick: function() {
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
