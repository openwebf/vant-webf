import {
  type CSSProperties,
  defineComponent,
  type ExtractPropTypes,
  type PropType,
  ref,
} from 'vue';

// Utils
import {
  createNamespace,
  extend,
  isDef,
  numericProp,
  truthProp,
  unknownProp,
} from '../utils';

// Composables
import { routeProps, useRoute } from '../composables/use-route';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('cell');

export type CellSize = 'normal' | 'large';

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export const cellSharedProps = {
  icon: String,
  size: String as PropType<CellSize>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | CSSProperties>,
  arrowDirection: String as PropType<CellArrowDirection>,
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
};

const cellProps = extend({}, cellSharedProps, routeProps);

export type CellProps = ExtractPropTypes<typeof cellProps>;

export default defineComponent({
  name,

  props: cellProps,

  setup(props, { slots }) {
    const route = useRoute();
    const active = ref(false);
    const renderLabel = () => {
      const showLabel = slots.label || isDef(props.label);

      if (showLabel) {
        return (
          <div class={[bem('label'), props.labelClass]}>
            {slots.label ? slots.label() : props.label}
          </div>
        );
      }
    };

    const renderTitle = () => {
      if (slots.title || isDef(props.title)) {
        return (
          <div
            class={[bem('title'), props.titleClass]}
            style={props.titleStyle}
          >
            {slots.title ? slots.title() : <span>{props.title}</span>}
            {renderLabel()}
          </div>
        );
      }
    };

    const renderValue = () => {
      // slots.default is an alias of slots.value
      const slot = slots.value || slots.default;
      const hasValue = slot || isDef(props.value);

      if (hasValue) {
        const hasTitle = slots.title || isDef(props.title);
        return (
          <div class={[bem('value', { alone: !hasTitle }), props.valueClass]}>
            {slot ? slot() : <span>{props.value}</span>}
          </div>
        );
      }
    };

    const renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return (
          <Icon
            name={props.icon}
            class={bem('left-icon')}
            classPrefix={props.iconPrefix}
          />
        );
      }
    };

    const renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      if (props.isLink) {
        const name = props.arrowDirection
          ? `arrow-${props.arrowDirection}`
          : 'arrow';
        return <Icon name={name} class={bem('right-icon')} />;
      }
    };
    const renderAfter = () => <span class="van-cell__after" />;
    const renderBefore = () => (
      <span class="van-cell--required__before">*</span>
    );
    const onTouchend = () => {
      active.value = false;
    };
    const onTouchstart = () => {
      active.value = true;
    };
    return () => {
      const { size, center, border, isLink, required } = props;
      const clickable = props.clickable ?? isLink;

      const classes: Record<string, boolean | undefined> = {
        center,
        required,
        clickable,
        borderless: !border,
      };
      if (size) {
        classes[size] = !!size;
      }

      return (
        <div
          class={
            active.value
              ? `van-cell--clickable__active ${bem(classes)}`
              : bem(classes)
          }
          onTouchstart={clickable ? onTouchstart : undefined}
          onTouchend={clickable ? onTouchend : undefined}
          role={clickable ? 'button' : undefined}
          tabindex={clickable ? 0 : undefined}
          onClick={route}
        >
          {required && renderBefore()}
          {renderLeftIcon()}
          {renderTitle()}
          {renderValue()}
          {renderRightIcon()}
          {slots.extra?.()}
          {border && renderAfter()}
        </div>
      );
    };
  },
});
