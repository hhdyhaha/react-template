import { Suspense } from 'react';
import { LazyExoticComponent, ComponentType } from 'react';

interface LazyLoadProps {
  Component: LazyExoticComponent<ComponentType<object>>;
}

const LazyLoad = ({ Component }: LazyLoadProps) => (
  <Suspense fallback={<div>加载中...</div>}>
    <Component />
  </Suspense>
);

export default LazyLoad; 