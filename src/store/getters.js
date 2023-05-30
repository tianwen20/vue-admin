const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  user_id: state => state.user.user_id,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  description: state => state.user.description,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  table_data: state => state.table.table_data,
  show_data: state => state.table.show_data,
  show_api_key: state => state.table.show_api_key,
  show_proxy: state => state.table.show_proxy
}
export default getters
