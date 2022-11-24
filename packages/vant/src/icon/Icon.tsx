import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  inject,
  type PropType,
} from 'vue';
import {
  addUnit,
  createNamespace,
  makeStringProp,
  numericProp,
} from '../utils';
import { Badge, type BadgeProps } from '../badge';
import { CONFIG_PROVIDER_KEY } from '../config-provider/ConfigProvider';
import codeMap from './config';

const [name, bem] = createNamespace('icon');

const isImage = (name?: string) => name?.includes('/');

const iconProps = {
  dot: Boolean,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('i'),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  classPrefix: String,
};

export type IconProps = ExtractPropTypes<typeof iconProps>;

export default defineComponent({
  name,

  props: iconProps,

  setup(props) {
    const config = inject(CONFIG_PROVIDER_KEY, null);

    const classPrefix = computed(
      () => props.classPrefix || config?.iconPrefix || bem()
    );
    return () => {
      const { tag, dot, name, size, badge, color } = props;
      const isImageIcon = isImage(name);
      const renderCode = (iconName: any) => (
        <span innerHTML={`&#x${codeMap[iconName].content}`}></span>
      );
      return (
        <Badge
          dot={dot}
          tag={tag}
          class={[
            classPrefix.value,
            isImageIcon ? '' : `${classPrefix.value}-${name}`,
          ]}
          style={{
            color,
            fontSize: addUnit(size),
          }}
          content={badge}
          {...props.badgeProps}
        >
          {isImageIcon ? (
            <img class={bem('image')} src={name} />
          ) : (
            renderCode(`${classPrefix.value}-${name}`)
          )}
        </Badge>
      );
    };
  },
});
