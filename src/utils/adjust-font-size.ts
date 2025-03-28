export function adjustRootValue() {
  const screenWidth = window.innerWidth;
  let fontSize;

  // 判断是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screenWidth <= 750;

  if (isMobile) {
    // 移动端使用响应式计算
    // 设计稿宽度750px时，除以7.5得到100px的基准字体大小
    fontSize = screenWidth / 7.5;
  } else {
    // PC端保持固定值
    fontSize = 75;
  }

  // 设置html根元素的字体大小
  document.documentElement.style.fontSize = `${fontSize}px`;

  // 添加调试信息
  // console.log('当前屏幕宽度：', screenWidth);
  // console.log('设备类型：', isMobile ? '移动端' : 'PC端');
  // console.log('设置的字体大小：', fontSize);
}

// 页面加载和改变窗口大小时都要调用
window.addEventListener('resize', adjustRootValue);
window.addEventListener('DOMContentLoaded', adjustRootValue);