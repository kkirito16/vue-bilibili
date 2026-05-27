# 基于 Vue 3 的仿 B 站 Web 端首页

这是我第一次找实习前，为了面试准备而独立完成的练手项目。目标是尽量还原 B 站首页的布局与交互，同时练习 Vue 生态下的组件拆分、状态管理和样式还原能力。

## 关于项目

项目最初写于求职准备阶段，用于作品集展示和面试讲解。页面数据与媒体资源均来自 B 站公开接口/CDN，仅供学习交流，与 bilibili 官方无关。

## 技术栈

- **Vue 3**（Composition API + `<script setup>`）
- **Vite** 构建与本地开发
- **Pinia** 状态管理（标签页、UI 浮层、视频数据等）
- **Vue Router** 路由
- **Element Plus** UI 组件
- **Swiper** 轮播
- **Sass** 样式

## 最近更新

### 首页重构（2025）

- 将原先臃肿的首页拆分为模块化结构：`AppHeader`、`CategoryBar`、`MainContent`，由 `HomePage` 统一组装
- 引入 **Pinia** 管理头部标签、下拉浮层、视频列表等状态
- 抽取 `useSearch` 等 composable，样式按区域拆分到独立 SCSS 文件
- 配置 `@` 路径别名，优化 Vite 工程结构

### 资源与依赖维护

- 替换已失效的本地/外链视频与封面，改用 B 站真实 CDN 资源，恢复悬停预览等功能
- 修复依赖中的安全漏洞，升级至当前稳定的 Vue 3 / Vite 6  toolchain
- 本地开发时在 `index.html` 设置 `referrer: no-referrer`，避免 B 站 CDN 因 Referer 拦截 localhost 请求

## 项目结构（节选）

```
src/
├── components/home/
│   ├── HomePage.vue          # 首页入口
│   ├── AppHeader/            # 顶栏导航、搜索、用户区
│   ├── CategoryBar/          # 分区图标栏
│   └── MainContent/          # 轮播 + 视频推荐流
├── composables/useSearch.js
├── stores/                   # tabs / ui / video
├── styles/home-layout.scss
└── views/HomeView.vue
```

## 安装与运行

推荐使用 [pnpm](https://pnpm.io/)（仓库内已有 `pnpm-lock.yaml`）：

```bash
pnpm install
pnpm dev
```

也可使用 npm：

```bash
npm install
npm run dev
```

构建与预览：

```bash
pnpm build
pnpm preview
```

## 已实现功能

- 仿 B 站头部导航栏，各栏目均带下拉面板（收藏 / 历史等支持 Tab 切换）
- 轮播图还原 B 站布局：左右切换、圆点指示、标题联动、自动播放
- 视频预览：鼠标悬停封面时小窗自动播放
- 样式细节：顶栏渐变、分区栏布局、页面缩放时的自适应等

## 参考截图

![首页整体](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002124590.png)

![头部导航](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002204125.png)

![轮播区域](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002214593.png)

![视频推荐流](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002232280.png)

## 后续计划

- 视频弹幕与详情页（弹幕填充技术已有雏形，实时更新仍在推进）
- 栏目切换与交互动画
- 评论区

## 许可与说明

本项目仅作个人学习与面试展示，请勿用于商业用途。若 B 站 CDN 策略变更导致资源无法加载，可在 `src/stores/video.js` 等处更新视频地址。
