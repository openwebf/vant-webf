# Cascader

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Cascader } from 'vant';

const app = createApp();
app.use(Cascader);
```

## Usage

### Basic Usage

```html
<van-field
  v-model="fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="Select Area"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const options = [
      {
        text: 'Zhejiang',
        value: '330000',
        children: [{ text: 'Hangzhou', value: '330100' }],
      },
      {
        text: 'Jiangsu',
        value: '320000',
        children: [{ text: 'Nanjing', value: '320100' }],
      },
    ];
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### Custom Color

```html
<van-cascader
  v-model="cascaderValue"
  title="Select Area"
  :options="options"
  active-color="#1989fa"
  @close="show = false"
  @finish="onFinish"
/>
```

### Async Options

```html
<van-field
  v-model="fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="Select Area"
    :options="options"
    @close="show = false"
    @change="onChange"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const options = ref([
      {
        text: 'Zhejiang',
        value: '330000',
        children: [],
      },
    ]);
    const onChange = ({ value }) => {
      if (value === options.value[0].value) {
        setTimeout(() => {
          options.value[0].children = [
            { text: 'Hangzhou', value: '330100' },
            { text: 'Ningbo', value: '330200' },
          ];
        }, 500);
      }
    };
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### Custom Field Names

```html
<van-cascader
  v-model="code"
  title="Select Area"
  :options="options"
  :field-names="fieldNames"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const code = ref('');
    const fieldNames = {
      text: 'name',
      value: 'code',
      children: 'items',
    };
    const options = [
      {
        name: 'Zhejiang',
        code: '330000',
        items: [{ name: 'Hangzhou', code: '330100' }],
      },
      {
        name: 'Jiangsu',
        code: '320000',
        items: [{ name: 'Nanjing', code: '320100' }],
      },
    ];

    return {
      code,
      options,
      fieldNames,
    };
  },
};
```

### Custom Content

```html
<van-cascader v-model="code" title="Select Area" :options="options">
  <template #options-top="{ tabIndex }">
    <div class="current-level">Current level is {{ tabIndex }}</div>
  </template>
</van-cascader>

<style>
  .current-level {
    padding: 10px 16px 0;
  }
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const code = ref('');
    const options = [
      {
        name: 'Zhejiang',
        code: '330000',
        items: [{ name: 'Hangzhou', code: '330100' }],
      },
      {
        name: 'Jiangsu',
        code: '320000',
        items: [{ name: 'Nanjing', code: '320100' }],
      },
    ];

    return {
      code,
      options,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| value | Value of selected option | _string \| number_ | - |
| options | Options | _CascaderOption[]_ | `[]` |
| placeholder | Placeholder of unselected tab | _string_ | `Select` |
| active-color | Active color | _string_ | `#ee0a24` |
| swipeable `v3.0.11` | Whether to enable gestures to slide left and right | _boolean_ | `false` |
| closeable | Whether to show close icon | _boolean_ | `true` |
| show-header `v3.4.2` | Whether to show header | _boolean_ | `true` |
| close-icon `v3.0.10` | Close icon name | _string_ | `cross` |
| field-names `v3.0.4` | Custom the fields of options | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Data Structure of CascaderOption

| Key                | Description               | Type                        |
| ------------------ | ------------------------- | --------------------------- |
| text               | Option text               | _string_                    |
| value              | Option value              | _string \| number_          |
| color `v3.1.0`     | Text color                | _string_                    |
| children           | Cascade children          | _CascaderOption[]_          |
| disabled `v3.1.2`  | Whether to disable option | _boolean_                   |
| className `v3.1.0` | className for the option  | _string \| Array \| object_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when active option changed | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| finish | Emitted when all options is selected | _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| close | Emitted when the close icon is clicked | - |
| click-tab | Emitted when a tab is clicked | _activeTab: number, title: string_ |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| title | Custom title | - |
| option `v3.1.4` | Custom option text | _{ option: CascaderOption, selected: boolean }_ |
| options-top `v3.2.7` | Custom the content above the options | _{ tabIndex: number }_ |
| options-bottom `v3.2.8` | Custom the content below the options | _{ tabIndex: number }_ |

### Types

The component exports the following type definitions:

```ts
import type { CascaderProps, CascaderOption, CascaderFieldNames } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-cascader-header-height | _48px_ | - |
| --van-cascader-header-padding | _0 var(--van-padding-md)_ | - |
| --van-cascader-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-cascader-title-line-height | _20px_ | - |
| --van-cascader-close-icon-size | _22px_ | - |
| --van-cascader-close-icon-color | _var(--van-gray-5)_ | - |
| --van-cascader-selected-icon-size | _18px_ | - |
| --van-cascader-tabs-height | _48px_ | - |
| --van-cascader-active-color | _var(--van-danger-color)_ | - |
| --van-cascader-options-height | _384px_ | - |
| --van-cascader-tab-color | _var(--van-text-color)_ | - |
| --van-cascader-unselected-tab-color | _var(--van-text-color-2)_ | - |
