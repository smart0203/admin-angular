/**
 * API_URL:接口地址
 * HTTPStatus:http状态
 */
export const CONSTANTS = {
  JWT: {
    COOKIE_NAME: "JWT-TOKEN"
  },
  API_URL: {
    // 登录地址
    login: "/login",
    // 注册地址
    register: "/api/register",
    // 菜单模块地址
    user: {
      page: "/api/user/page", // 查询用户信息
      delete: "/api/user/delete",// 根据Id删除用户信息
      isExistsUserName:"/api/user/isExistsUserName" // 验证用户名是否存在
    },
    menu: {
      list: "/api/menu/list",// 首页加载菜单列表
      page: "/api/menu/page",// 查询菜单信息
      delete: "/api/menu/delete",// 根据Id删除菜单信息
      save: "/api/menu/save",// 新增和编辑菜单
      parentList:"api/menu/parentList",// 获取父级菜单
      getById:"api/menu/get"// 根据Id获取菜单信息

    }
  },
  HTTPStatus: {
    SUCCESS: 200, // 成功
    FAIL: 0, // 成功
    NO_CONTENT: 204, // 删除成功
    UNAUTHORIZED: 401,// 没有权限
    INTERNAL_SERVER_ERROR: 500,// 系统异常
    GATEWAY_TIMEOUT: 504,// 服务器断开
    FORBIDDEN: 403// 禁止访问
  }
}

