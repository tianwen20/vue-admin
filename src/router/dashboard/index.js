import Layout from '@/layout/index'

const dashboard_Router = {
  path: '/dashboard',
  component: Layout,
  redirect: '/dashboard/index',
  name: 'dashboard',
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'index',
      name: 'dashboard-index',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '统计', noCache: true }
    },
    {
      path: 'detail',
      name: 'dashboard-detail',
      component: () => import('@/views/dashboard/detail'),
      meta: { title: '详情', noCache: true },
      hidden: true
    }
  ]
}

export default dashboard_Router
