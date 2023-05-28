import Layout from '@/layout/index'

const summary_Router = {
  path: '/summary',
  component: Layout,
  redirect: '/summary/index',
  name: 'summary',
  meta: {
    title: 'summary', roles: ['admin']
  },
  children: [
    {
      path: 'index',
      name: 'summary-index',
      component: () => import('@/views/summary/index'),
      meta: { title: 'summary', noCache: true }
    }
  ]
}

export default summary_Router
