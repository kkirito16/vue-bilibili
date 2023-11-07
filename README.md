## 基于Vue.js的仿web端b站首页项目

### 技术栈

- Vue.js
- Element plus
- Swiper
- Sass

### 安装

```
npm install
npm install vue-awesome-swiper --save
```

### 运行

```
npm run dev
```

### 已实现功能

- 仿b站头部导航栏所有栏目均写了下拉框（其中收藏和历史下拉框栏目可切换）
- 轮播图完全仿照b站布局、实现左右切换图片、点击小圆点显示相应图片及标题、自动播放等
- 视频预览：当鼠标移动到视频的封面时，自动小窗播放视频
- 一些css的模仿：如顶部图的linear-gradient设置、部分布局、当缩小&放大网页的自适应等

### 参考图

![image-20231108002124590](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002124590.png)

![image-20231108002204125](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002204125.png)

![image-20231108002214593](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002214593.png)

![image-20231108002232280](https://cdn.jsdelivr.net/gh/kkirito16/ImgPicGo/img/image-20231108002232280.png)

### 未来计划

- 视频弹幕的填充，以及视频详情页的制作（目前已实现弹幕的填充技术，但是还正在实现及时更新弹幕）
- 栏目交互动画
- 评论区
