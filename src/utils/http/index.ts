import axios, {type InternalAxiosRequestConfig, type AxiosInstance, type AxiosResponse,type AxiosError} from 'axios';

// 通过create方法,创建axios实例
const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error: AxiosError) => {
        // 处理请求错误
        return Promise.reject(error);
    },
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        return response;
    },
    (error: AxiosError) => {
        // 处理响应错误
        return Promise.reject(error);
    },
);

export default axiosInstance;
