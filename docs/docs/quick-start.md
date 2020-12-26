## 快速上手

本节将介绍如何安装和使用 rol-ui

### npm 或 yarn 安装

```shell
npm install rol-ui --save
//or
yarn add rol-ui -S
```

### 引入 rol-ui

在 main.js 中写入以下内容

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import RolUI from 'rol-ui'
import 'rol-ui/style/css/index.css'

const app = createApp(App)
app.use(RolUI)
app.mount('#app')
```

如果使用 scss，可以引入 scss 文件，使用相关 scss 变量，mixin，函数等

```javascript
import 'rol-ui/style/scss/index.scss'
```
