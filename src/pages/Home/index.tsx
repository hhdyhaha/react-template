import React, { useEffect } from 'react';
// 如果使用Zustand，需要导入store
import { useLoadingStore } from '@/store/loading';

const Home: React.FC = () => {
  useEffect(() => {
    useLoadingStore.getState().setLoading(true);
    // 这里可以添加数据获取逻辑
    // 数据获取完成后设置 loading 为 false
    return () => {
      useLoadingStore.getState().setLoading(false);
    };
  }, []);

  return (
    <div className="home-container">
      <h1>首页</h1>
      <p>欢迎来到我们的应用</p>
    </div>
  );
};

export default Home; 