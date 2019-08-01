import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: resolve => require(['@/views/index.vue'], resolve),
			children: [{
				path: 'news',
				name: 'news',
				component: resolve => require(['@/components/news.vue'], resolve),
				children: [{
						path: 'nba',
						name: 'nba',
						component: resolve => require(['@/components/news/nba.vue'], resolve),
					},
					{
						path: 'football',
						name: 'football',
						component: resolve => require(['@/components/news/football.vue'], resolve),
					}
				]
			}]
		}, 
		{
			path:'/main',
			name:'main',
			component: resolve => require(['@/views/main.vue'], resolve),
		}
	]
})