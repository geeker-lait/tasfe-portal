import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/**
 * note: submenu only apppear when children.length>=1
 */

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: 'documentation',
      meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'system',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'account',
      component: () => import('@/views/system/account/index'),
      name: 'systemAccount',
      meta: {
        title: 'systemAccount',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },{
      path: 'role',
      component: () => import('@/views/system/role/index'),
      name: 'systemRole',
      meta: {
        title: 'systemRole',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'permission',
      component: () => import('@/views/system/permission/index'),
      name: 'systemPermission',
      meta: {
        title: 'systemPermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'resources',
      component: () => import('@/views/system/resources/index'),
      name: 'systemResources',
      meta: {
        title: 'systemResources',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'accredit', //  授权管理
      component: () => import('@/views/system/accredit/index'),
      name: '授权管理',
      meta: {
        title: '授权管理',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'cofig',
      component: () => import('@/views/system/config/index'),
      name: 'systemConfig',
      meta: {
        title: 'systemConfig'
        // if do not set roles, means: this page does not require permission
      }
    }]
  }, {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'userManger',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'list',
      component: () => import('@/views/user/index'),
      name: 'userList',
      meta: {
        title: 'userList',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  }, {
    path: '/merchant',
    component: Layout,
    redirect: '/merchant/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'merchantManger',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'list',
      component: () => import('@/views/merchant/index'),
      name: 'merchantList',
      meta: {
        title: 'merchantList',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  }, {
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'productManger',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'list',
      component: () => import('@/views/product/dslist'),
      name: 'supplyDemandList',
      meta: {
        title: 'supplyDemandList',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'categories',
      component: () => import('@/views/product/categories/index'),
      name: 'productCategories',
      meta: {
        title: 'productCategories'
        // if do not set roles, means: this page does not require permission
      }
    }]
  }, {
    path: '/order',
    component: Layout,
    redirect: '/order/index',
    alwaysShow: true,
    meta: {
      title: 'orderManger',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'list',
      component: () => import('@/views/order/list'),
      name: 'orderList',
      meta: {
        title: 'orderList',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]
