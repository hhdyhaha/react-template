import axiosInstance from "@/utils/http/index";

// Demo API 接口

// 用户相关接口

// 登录参数
interface LoginParams {
  username: string;
  password: string;
}

// 用户登录
export const login = (data: LoginParams) => {
  return axiosInstance({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 注册参数
interface RegisterParams {
  username: string;
  password: string;
  email: string;
  phone?: string;
}

// 用户注册
export const register = (data: RegisterParams) => {
  return axiosInstance({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

// 获取用户列表参数
interface GetUserListParams {
  page?: number;
  pageSize?: number;
}

// 获取用户列表
export const getUserList = (params?: GetUserListParams) => {
    return axiosInstance({
        url: `/api/users`,
        method: 'get',
        params
    })
}

// 获取用户详情
export const getUserDetail = (userId: string) => {
    return axiosInstance({
        url: `/api/users/${userId}`,
        method: 'get'
    })
}

interface UpdateUserParams {
  name?: string;
  email?: string;
  phone?: string;
}

// 更新用户信息
export const updateUser = (userId: string, data: UpdateUserParams) => {
    return axiosInstance({
        url: `/api/users/${userId}`,
        method: 'put',
        data
    })
}

// 删除用户
export const deleteUser = (userId: string) => {
    return axiosInstance({
        url: `/api/users/${userId}`,
        method: 'delete'
    })
}

// 修改密码参数
interface ChangePasswordParams {
  oldPassword: string;
  newPassword: string;
}

// 修改密码
export const changePassword = (userId: string, data: ChangePasswordParams) => {
  return axiosInstance({
    url: `/api/users/${userId}/password`,
    method: 'put',
    data
  })
}
