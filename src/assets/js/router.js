import VueRouter from 'vue-router'

// 当前路径 ./ 
// 上一级 ../
import boyIndex from '../../components/index/boyIndex.vue'
import girlIndex from '../../components/index/girlIndex.vue'
import boy from '../../components/index/boy.vue'
import girl from '../../components/index/girl.vue'
import search from '../../components/index/search.vue'

import login from '../../components/login/login.vue'
import register from '../../components/login/register.vue'

import bookshelf from '../../components/bookshelf/bookshelf.vue'

import boyType from '../../components/boy/boy-type.vue'
import boyRank from '../../components/boy/boy-rank.vue'
import boyFree from '../../components/boy/boy-free.vue'
import boyEnd from '../../components/boy/boy-end.vue'
import boyGod from '../../components/boy/boy-god.vue'
import boyHot from '../../components/boy/boy-hotbook.vue'

import girlType from '../../components/girl/girl-type.vue'
import girlRank from '../../components/girl/girl-rank.vue'
import girlFree from '../../components/girl/girl-free.vue'
import girlEnd from '../../components/girl/girl-end.vue'
import girlGod from '../../components/girl/girl-god.vue'
import girlHot from '../../components/girl/girl-hotbook.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: boyIndex
		},
		{
			path: '/boy',
			component: boy
		},	
		{
			path: '/',
			component: girlIndex,
			children: [
				{
					path: '/girl',
					component: girl
				}
			]
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/register',
			component: register
		},
		{
			path: '/bookshelf',
			component: bookshelf
		},
		{
			path: '/boy-type',
			component: boyType
		},
		{
			path: '/boy-rank',
			component: boyRank
		},
		{
			path: '/boy-free',
			component: boyFree
		},
		{
			path: '/boy-end',
			component: boyEnd
		},
		{
			path: '/boy-god',
			component: boyGod
		},
		{
			path: '/boy-hotbook',
			component: boyHot
		},
		{
			path: '/girl-type',
			component: girlType
		},
		{
			path: '/girl-rank',
			component: girlRank
		},
		{
			path: '/girl-free',
			component: girlFree
		},
		{
			path: '/girl-end',
			component: girlEnd
		},
		{
			path: '/girl-god',
			component: girlGod
		},
		{
			path: '/girl-hotbook',
			component: girlHot
		},
		{
			path: '/search',
			component: search
		}
	]
})