/*
 * @Author: your name
 * @Date: 2020-05-31 12:54:36
 * @LastEditTime: 2020-06-01 10:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \crmQD\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)


const routes = [

	// {
	// 	path: '/',
	// 	name: 'index',
	// 	component: (resolve) =>
	// 	require(['@/views/index'],resolve),
	// 	meta:{title:'指挥台'}, 
	// },
	// {
	// 	path: '/',
	// 	name: 'login',
	// 	component: (resolve) =>
	// 	require(['@/views/login'],resolve),
	// 	meta:{title:'登录',permission:['index']}, 
		
	// },

	{
		path: '/mapfive',
		name: 'mapfive',
		component: (resolve) =>
		require(['@/views/mapfive'],resolve),
		meta:{title:'应急查看',keepAlive:true},				
	},
	{
		path:'/',
		name:'index',
		component: (resolve) =>
				require(['@/views/index'],resolve),
		redirect: '/Podium2',
		meta:{title:'指挥台',keepAlive:true}, 
		children:[	
			{
				path: '/Podium',
				name: 'Podium',
				component: (resolve) =>
				require(['@/views/Podium'],resolve),
				meta:{title:'指挥台',keepAlive:true},				
			},	
			{
				path: '/Podium2',
				name: 'Podium2',
				component: (resolve) =>
				require(['@/views/Podium2'],resolve),
				meta:{title:'指挥台2',keepAlive:true},				
			},	
			{
				path: '/meet',
				name: 'meet',
				component: (resolve) =>
				require(['@/views/meet'],resolve),
				redirect: '/',
				meta:{title:'应急查看',keepAlive:true},				
			},
			{
				path: '/police',
				name: 'Podpoliceium',
				component: (resolve) =>
				require(['@/views/police'],resolve),
				meta:{title:'应急指挥',keepAlive:true},				
			},	
			{
				path: '/table',
				name: 'table',
				component: (resolve) =>
				require(['@/views/table'],resolve),
				meta:{title:'报表查询',keepAlive:true},				
			},	
			{
				path: '/zfgl',
				name: 'zfgl',
				component: (resolve) =>
				require(['@/views/zfgl'],resolve),
				meta:{title:'执法管理',keepAlive:true},				
			},{
				path: '/ysgl',
				name: 'ysgl',
				component: (resolve) =>
				require(['@/views/ysgl'],resolve),
				redirect: '/ysgl/Countrybus',
				meta:{title:'运输管理',keepAlive:true},
				children:[
			   
				{
					path:'/ysgl/Countrybus',
					name:'Countrybus',
				   component: (resolve) =>
				  require(['@/views/ysgl/Countrybus'],resolve),
				  meta:{title:'客运站',keepAlive:true},
				  },
				  {
					path:'/ysgl/Urbanpublic',
					name:'Urbanpublic',
				   component: (resolve) =>
				  require(['@/views/ysgl/Urbanpublic'],resolve),
				  meta:{title:'乡村客运',keepAlive:true},
				  },
				  {
					path:'/ysgl/driveschool',
					name:'driveschool',
				   component: (resolve) =>
				  require(['@/views/ysgl/driveschool'],resolve),
				  meta:{title:'驾校',keepAlive:true},
				  },
				  {
					path:'/ysgl/Maintenance',
					name:'Maintenance ',
				   component: (resolve) =>
				  require(['@/views/ysgl/Maintenance'],resolve),
				  meta:{title:'维修点',keepAlive:true},
				  },
			]				
			},
			{
				path: '/dlyh',
				name: 'dlyh',
				component: (resolve) =>
				require(['@/views/dlyh'],resolve),
				redirect: '/dlyh/people',
				meta:{title:'道路养护',keepAlive:true},	
				children:[
			   
					{
						path:'/dlyh/people',
						name:'Countrybus',
					   component: (resolve) =>
					  require(['@/views/dlyh/people'],resolve),
					  meta:{title:'养护人员',keepAlive:true},
					  },
					  {
						path:'/dlyh/car',
						name:'Urbanpublic',
					   component: (resolve) =>
					  require(['@/views/dlyh/car'],resolve),
					  meta:{title:'养护车辆',keepAlive:true},
					  },
					  {
						path:'/dlyh/money',
						name:'driveschool',
					   component: (resolve) =>
					  require(['@/views/dlyh/money'],resolve),
					  meta:{title:'养护财产',keepAlive:true},
					  },
				]				
			},
			
		]
	},


]

const router = new VueRouter({
	routes,
})

export default router
