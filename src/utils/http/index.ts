import axios, {type InternalAxiosRequestConfig, type AxiosInstance, type AxiosResponse,type AxiosError} from 'axios';
// 如果使用Zustand，需要导入store
import { useLoadingStore } from '@/store/loading';

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
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        // 添加loading状态 - Zustand方式
        useLoadingStore.getState().setLoading(true);
        
        return config;
    },
    (error: AxiosError) => {
        // 处理请求错误
        console.error('请求拦截器错误:', error);
        return Promise.reject(error);
    },
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        
        // 关闭loading - Zustand方式
        useLoadingStore.getState().setLoading(false);
        
        // 这里可以根据后端返回的数据结构进行调整
        const res = response.data;
        
        // 假设后端返回的数据结构为 { code, data, message }
        if (res.code === 200 || res.code === 0) {
            return res.data;
        } else {
            // 处理业务错误
            console.error('业务错误:', res.message || '未知错误');
            // 可以使用React组件库的提示，例如antd
            // message.error(res.message || '未知错误');
            return Promise.reject(new Error(res.message || '未知错误'));
        }
    },
    (error: AxiosError) => {
        // 关闭loading - Zustand方式
        useLoadingStore.getState().setLoading(false);
        
        // 处理HTTP错误
        let message = '网络错误，请稍后重试';
        
        if (error.response) {
            const status = error.response.status;
            
            switch (status) {
                case 400:
                    message = '请求错误';
                    break;
                case 401:
                    message = '未授权，请重新登录';
                    // 可以在这里处理登出逻辑 - React Router方式
                    // import { useNavigate } from 'react-router-dom';
                    // const navigate = useNavigate();
                    // navigate('/login');
                    break;
                case 403:
                    message = '拒绝访问';
                    break;
                case 404:
                    message = '请求的资源不存在';
                    break;
                case 500:
                    message = '服务器内部错误';
                    break;
                default:
                    message = `连接错误${status}`;
            }
        } else if (error.request) {
            message = '网络异常，请检查您的网络连接';
        } else {
            message = '发送请求异常';
        }
        
        console.error('请求失败:', message);
        // 使用React组件库的提示，例如antd
        // message.error(message);
        
        return Promise.reject(error);
    },
);

export default axiosInstance;
