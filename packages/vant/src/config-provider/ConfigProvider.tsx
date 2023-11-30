import {
  provide,
  computed,
  watchEffect,
  defineComponent,
  type PropType,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import {
  kebabCase,
  makeStringProp,
  createNamespace,
  type Numeric,
} from '../utils';
import { setGlobalZIndex } from '../composables/use-global-z-index';

const [name, bem] = createNamespace('config-provider');

export type ConfigProviderProvide = {
  iconPrefix?: string;
};

export const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide> =
  Symbol(name);

const configProviderProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  zIndex: Number,
  themeVars: Object as PropType<Record<string, Numeric>>,
  iconPrefix: String,
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

function mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {
  const cssVars: Record<string, Numeric> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

export default defineComponent({
  name,

  props: configProviderProps,

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });

    provide(CONFIG_PROVIDER_KEY, props);

    watchEffect(() => {
      if (props.zIndex !== undefined) {
        setGlobalZIndex(props.zIndex);
      }
    });

    return () => (
      <props.tag class={bem()} style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});
