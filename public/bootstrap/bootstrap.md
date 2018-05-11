# Bootstrap4

Bootstrap 是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的 WEB 项目。
Bootstrap4 目前是 Bootstrap 的最新版本,仅支持 IE9 以上 以及 iOS 7 以上版本的浏览器

Boostrap4 是 Bootstrap 的最新版本，与 Bootstrap3 相比拥有了更多的具体的类以及把一些有关的部分变成了相关的组件。同时 Bootstrap.min.css 的体积减少了40%以上。

Bootstrap可以通过下载或直接调用BootCDN上的库

## 引用

```
<!-- Bootstrap4 核心 CSS 文件 如已下载将href链接改为本地路径-->
<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
 
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
 
<!-- popper.min.js 用于弹窗、提示、下拉菜单 -->
<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
 
<!-- Bootstrap4 核心 JavaScript 文件 如已下载将href链接改为本地路径-->
<script src="https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
```

**Bootstrap下载文件不包含javascript依赖库jquery和popper**

* Bootstrap 要求使用 HTML5 文件类型，所以需要添加 HTML5 doctype 声明。

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"> 
  </head>
</html>
```

* 为了让 Bootstrap 开发的网站对移动设备友好，确保适当的绘制和触屏缩放，需要在网页的 head 之中添加 viewport meta 标签

```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

width=device-width 表示宽度是设备屏幕的宽度。

initial-scale=1 表示初始的缩放比例。

shrink-to-fit=no 自动适应手机屏幕的宽度。


## 使用

### 容器

Bootstrap 4 需要一个容器元素来包裹网站的内容。
以使用以下两个容器类：

 > .container 类用于固定宽度并支持响应式布局的容器。

 > .container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。

### 网格系统

Bootstrap 提供了一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。

**Bootstrap 4 网格系统有以下 5 个类:**

* .col- 针对所有设备

* .col-sm- 平板 - 屏幕宽度等于或大于 576px

* .col-md- 桌面显示器 - 屏幕宽度等于或大于 768px)

* .col-lg- 大桌面显示器 - 屏幕宽度等于或大于 992px)

* .col-xl- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)

创建相等宽度的列，Bootstrap 自动布局

```
<div class="row">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>
```

**可以通过在col-数字来调节各自的比例，如不加数字则Bootstrap自动布局**
