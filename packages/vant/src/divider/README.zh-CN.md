# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Divider } from 'vant';

const app = createApp();
app.use(Divider);
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<van-divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容。

```html
<van-divider>文字</van-divider>
```

### 内容位置

通过 `content-position` 指定内容所在位置。

```html
<van-divider content-position="left">文字</van-divider>
<van-divider content-position="right">文字</van-divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<van-divider dashed>文字</van-divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```html
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  文字
</van-divider>
```

## API

### Props

| 参数             | 说明                              | 类型      | 默认值   |
| ---------------- | --------------------------------- | --------- | -------- |
| dashed           | 是否使用虚线                      | _boolean_ | `false`  |
| hairline         | 是否使用 0.5px 线                 | _boolean_ | `true`   |
| content-position | 内容位置，可选值为 `left` `right` | _string_  | `center` |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { DividerProps, DividerContentPosition } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                              | 默认值                    | 描述 |
| --------------------------------- | ------------------------- | ---- |
| --van-divider-margin              | _var(--van-padding-md) 0_ | -    |
| --van-divider-text-color          | _var(--van-text-color-2)_ | -    |
| --van-divider-font-size           | _var(--van-font-size-md)_ | -    |
| --van-divider-line-height         | _24px_                    | -    |
| --van-divider-border-color        | _var(--van-border-color)_ | -    |
| --van-divider-content-padding     | _var(--van-padding-md)_   | -    |
| --van-divider-content-left-width  | _10%_                     | -    |
| --van-divider-content-right-width | _10%_                     | -    |
