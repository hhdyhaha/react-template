import React from 'react';
// 如果使用Zustand，需要导入store
import { useLoadingStore } from '@/store/loading';

const Home: React.FC = () => {
  // 添加loading状态 - Zustand方式
  useLoadingStore.getState().setLoading(true);
  return (
    <div className="home-container">
      <h1>首页</h1>
      <p>欢迎来到我们的应用</p>
    </div>
  );
};

export default Home; 