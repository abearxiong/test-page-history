# test-page-history

测试 github pages 中的使用 html 的 histoy 路有模式，当刷新页面是否会丢失 state。

## 结论

使用此方法可以实现使用 html history 路有刷新不会 404，但是会丢失 state。

## 方法

假设我的仓库的名称为`r-test-name`;

### 1. 建立 404.html

```
<head>
  <script>
    sessionStorage.redirect = location.href;
  </script>

  <meta http-equiv="refresh" content="0;URL='/r-test-name'">
  </meta>
</head>
```

只需要在 404 当中修改对应 URL 的路径即可

### 2. 在`index.html`的 head 标签添加内容

```
<script>
  (function () {
    let redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```
### 备注

我在about和home路有页面当中记录了count数据，每次点击都会自增，当刷新count的数据能保持即state是存在的，否之则不存在。

正常情况后端hold或者nginx配置后会保持history state的数据。（刷新页面state不变）

### github-pages 刷新重定向的原理

当github page没有发现页面的时候会自动转到404.html页面，404.html页面会自动重定向到index.html，index.html获取到原始路径，然后被vue-router控制。实现在页面中刷新能够跳到对应位置，但是会丢失histoy state（注：hash路由一样没有持有state）