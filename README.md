# React 项目模板

这是一个基于 React 18 + TypeScript + Vite + Ant Design + TailwindCSS 构建的现代 React 应用模板。该模板提供了完善的项目结构和最新的技术栈配置，帮助你快速开始 React 应用开发。

## 技术栈

- React 18.2.0
- TypeScript 5.3.3
- Vite 5.1.4
- ESLint 9.21.0
- Ant Design 5.24.5
- TailwindCSS 4.0.17
- PostCSS 8.5.3

## 开发环境设置

### 前置要求

- Node.js (推荐 v18+)
- PNPM (推荐，也可以使用 npm 或 yarn)

### 安装依赖

```bash
pnpm install
```

### 开发服务器

启动开发服务器，支持热模块替换 (HMR)：

```bash
pnpm dev
```

### 构建项目

构建生产环境代码：

```bash
pnpm build
```

### 代码检查

运行 ESLint 代码检查：

```bash
pnpm lint
```

### 预览构建结果

预览构建后的生产环境代码：

```bash
pnpm preview
```

## 项目结构

本项目采用功能模块化的目录结构，便于维护和扩展：

```
src/
├── api/                # API调用相关函数
│   ├── endpoints/      # 按功能分类的API端点
│   └── services/       # API服务
├── assets/             # 静态资源
│   ├── images/         # 图片
│   ├── fonts/          # 字体
│   └── icons/          # 图标
├── components/         # 可复用组件
│   ├── common/         # 通用组件（按钮、输入框等）
│   ├── layout/         # 布局组件
│   └── feature/        # 特定功能组件
├── constants/          # 常量定义
├── contexts/           # React上下文
├── hooks/              # 自定义hooks
├── locales/            # 国际化文件
├── pages/              # 页面组件
│   ├── Home/
│   ├── Login/
│   └── Dashboard/
├── routes/             # 路由配置
├── store/              # 状态管理
│   └── slices/         # Redux切片或其他状态模块
├── styles/             # 全局样式和主题
│   ├── global/
│   └── themes/
├── types/              # TypeScript类型定义
├── utils/              # 工具函数
├── App.tsx             # 应用根组件
└── main.tsx            # 应用入口
```

## ESLint 配置

本项目使用了 ESLint 的最新配置方式。如果需要开发生产级应用，推荐启用类型检查的 lint 规则：

```js
export default tseslint.config({
  extends: [
    // 移除 ...tseslint.configs.recommended 并替换为以下配置
    ...tseslint.configs.recommendedTypeChecked,
    // 或者使用更严格的规则
    ...tseslint.configs.strictTypeChecked,
    // 可选：添加样式规则
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // 其他选项...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## 许可证

MIT
