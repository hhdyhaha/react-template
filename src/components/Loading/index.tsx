import React from 'react';
import { Spin } from 'antd';
import { useLoadingStore } from '@/store/loading';

const Loading: React.FC = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <Spin size="large" />
    </div>
  );
};

export default Loading; 