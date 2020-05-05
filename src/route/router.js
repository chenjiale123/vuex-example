import Vue from 'vue'// 引入vue
import Router from 'vue-router' // 引入路由

import login from '@/views/login' // 引入需要用到路由的页面
import index from '@/views/index'
import user from '@/views/user'
import power from '@/views/power'
import welcome from '@/views/welcome'
import manage from '@/views/manage'
Vue.use(Router) // vue使用路由

export default new Router({ // 创建路由
        mode: 'history', // 去掉链接中的#
        routes: [ // 此处写路由
                {
                        path: '/', // 链接中的显示路劲
                        name: 'login', // 名字
                        component: login // 引入的路由名称，必须与import里的名称一样
                },
                {
                        path: '/index', // 链接中的显示路劲
                        name: 'index', // 名字
                        component: index,
                        redirect: '/welcome',
                        children: [{
                                path: '/welcome', // 链接中的显示路劲
                                name: 'welcome', // 名字
                                component: welcome
                        },{
                                path: '/manage', // 链接中的显示路劲
                                name: 'manage', // 名字
                                component: manage
                        }]
                },
                {
                        path: '/user', // 链接中的显示路劲
                        name: 'user', // 名字
                        component: user,
                        children: [{

                                path: '/power', // 链接中的显示路劲
                                name: 'power', // 名字
                                component: power
                        }]
                }
        ]
})
