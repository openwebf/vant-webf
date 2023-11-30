# List

### Intro

A list component to show items and control loading status.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { List } from 'vant';

const app = createApp();
app.use(List);
```

## Usage

### Basic Usage

```html
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="Finished"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      onLoad,
      loading,
      finished,
    };
  },
};
```

### Error Info

```html
<van-list
  v-model:loading="loading"
  v-model:error="error"
  error-text="Request failed. Click to reload"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const onLoad = () => {
      fetchSomeThing().catch(() => {
        error.value = true;
      });
    };

    return {
      list,
      error,
      onLoad,
      loading,
    };
  },
};
```

### PullRefresh

```html
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="Finished"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      finished.value = false;
      loading.value = true;
      onLoad();
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:loading | Whether to show loading info, the `load` event will not be Emitted when loading | _boolean_ | `false` |
| v-model:error | Whether loading is error, the `load` event will be Emitted only when error text clicked | _boolean_ | `false` |
| finished | Whether loading is finished, the `load` event will not be Emitted when finished | _boolean_ | `false` |
| offset | The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset | _number \| string_ | `300` |
| loading-text | Loading text | _string_ | `Loading...` |
| finished-text | Finished text | _string_ | - |
| error-text | Error loaded text | _string_ | - |
| immediate-check | Whether to check loading position immediately after mounted | _boolean_ | `true` |
| direction | Scroll direction, can be set to `up` | _string_ | `down` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| load | Emitted when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get List instance and call instance methods.

| Name  | Description           | Attribute | Return value |
| ----- | --------------------- | --------- | ------------ |
| check | Check scroll position | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type { ListProps, ListInstance, ListDirection } from 'vant';
```

`ListInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { ListInstance } from 'vant';

const listRef = ref<ListInstance>();

listRef.value?.check();
```

### Slots

| Name     | Description          |
| -------- | -------------------- |
| default  | List content         |
| loading  | Custom loading tips  |
| finished | Custom finished tips |
| error    | Custom error tips    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                         | Default Value             | Description |
| ---------------------------- | ------------------------- | ----------- |
| --van-list-text-color        | _var(--van-text-color-2)_ | -           |
| --van-list-text-font-size    | _var(--van-font-size-md)_ | -           |
| --van-list-text-line-height  | _50px_                    | -           |
| --van-list-loading-icon-size | _16px_                    | -           |

## FAQ

### How does List component work?

List will listen to the scroll event of the browser and calculate the position. When the distance between the bottom of the list and the visible area is less than `offset`, the List component will trigger a `load` event.

### Why does the load event triggered immediately after mounted?

A load event will be triggered immediately to load the first screen data. This feature can be disabled by the `immediate-check` prop.

### Why does the load event triggered continuously?

If the amount of data loaded in one request is too small, the List will continue to trigger the `load` event until the content fills the screen or the data is fully loaded.

Therefore, you need to adjust the amount of data per request. Ideally, the amount of data per request should be able to fill the height of one screen.

### What is the meaning of loading and finished?

`List` has three states, understanding these states will help you use the component:

- `loading = false`: Not in loading. The component will detect whether to trigger the `load` event according to the scroll position (if the content of the list is less than one screen, it will be triggered directly).
- `loading = true`: During loading. Indicating that an request is being sent, and the `load` event will not be triggered.
- `finished = true`: Loading is complete. No `load` will not be triggered.

After each request, you need to manually set `loading` to `false`, indicating the end of loading.

### Always trigger loading after using float layout?

If you use the float layout on the content, you can add the `van-clearfix` class to the container to clear the float, so that the List can get the element position correctly.

```html
<van-list>
  <div class="van-clearfix">
    <div class="float-item" />
    <div class="float-item" />
    <div class="float-item" />
  </div>
</van-list>
```

### Always trigger loading after setting overflow on html and body?

If the `overflow-x: hidden` style is set on the html and body tags, it will cause the List to always trigger loading.

```css
html,
body {
  overflow-x: hidden;
}
```

The reason is that when an element is styled with `overflow-x: hidden`, the element's `overflow-y` will be set to `auto` by the browser, instead of the default value of `visible`, causing the List can not determine the scroll container correctly. The workaround is to remove this style, or add the `height: 100%` style to the html and body tags.

### Always trigger loading when the direction prop is set to up?

Setting the `direction` prop to up will trigger the loading of the List component when the scrollbar is at the page top.

When using this prop, it is recommended to scroll the scroll bar to the page bottom after each data request is completed.
