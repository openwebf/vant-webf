import {
  ref,
  watch,
  nextTick,
  onMounted,
  watchEffect,
  onBeforeUnmount,
  defineComponent,
  type PropType,
  type CSSProperties,
  type TeleportProps,
  type ExtractPropTypes,
} from 'vue';
import { Instance, createPopper, offsetModifier } from '@vant/popperjs';

// Utils
import {
  pick,
  extend,
  truthProp,
  numericProp,
  unknownProp,
  BORDER_BOTTOM,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  type ComponentInstance,
} from '../utils';

// Composables
import { useClickAway } from '@vant/use';

// Components
import { Icon } from '../icon';
import { Popup } from '../popup';

// Types
import {
  PopoverTheme,
  PopoverAction,
  PopoverTrigger,
  PopoverPlacement,
} from './types';

const [name, bem] = createNamespace('popover');

const popupProps = [
  'show',
  'overlay',
  'duration',
  'teleport',
  'overlayStyle',
  'overlayClass',
  'closeOnClickOverlay',
] as const;

const popoverProps = {
  show: Boolean,
  theme: makeStringProp<PopoverTheme>('light'),
  overlay: Boolean,
  actions: makeArrayProp<PopoverAction>(),
  trigger: makeStringProp<PopoverTrigger>('click'),
  duration: numericProp,
  showArrow: truthProp,
  placement: makeStringProp<PopoverPlacement>('bottom'),
  iconPrefix: String,
  overlayClass: unknownProp,
  overlayStyle: Object as PropType<CSSProperties>,
  closeOnClickAction: truthProp,
  closeOnClickOverlay: truthProp,
  closeOnClickOutside: truthProp,
  offset: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => [0, 8],
  },
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
};

export type PopoverProps = ExtractPropTypes<typeof popoverProps>;

export default defineComponent({
  name,

  props: popoverProps,

  emits: ['select', 'touchstart', 'update:show'],

  setup(props, { emit, slots, attrs }) {
    let popper: Instance | null;

    const popupRef = ref<HTMLElement>();
    const wrapperRef = ref<HTMLElement>();
    const popoverRef = ref<ComponentInstance>();

    const getPopoverOptions = () => ({
      placement: props.placement,
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: false,
            gpuAcceleration: false,
          },
        },
        extend({}, offsetModifier, {
          options: {
            offset: props.offset,
          },
        }),
      ],
    });

    const createPopperInstance = () => {
      if (wrapperRef.value && popoverRef.value) {
        return createPopper(
          wrapperRef.value,
          popoverRef.value.popupRef.value,
          getPopoverOptions()
        );
      }
      return null;
    };

    const updateLocation = () => {
      nextTick(() => {
        if (!props.show) {
          return;
        }

        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions(getPopoverOptions());
        }
      });
    };

    const updateShow = (value: boolean) => emit('update:show', value);

    const onClickWrapper = () => {
      if (props.trigger === 'click') {
        updateShow(!props.show);
      }
    };

    const onClickAction = (action: PopoverAction, index: number) => {
      if (action.disabled) {
        return;
      }

      emit('select', action, index);

      if (props.closeOnClickAction) {
        updateShow(false);
      }
    };

    const onClickAway = () => {
      if (
        props.show &&
        props.closeOnClickOutside &&
        (!props.overlay || props.closeOnClickOverlay)
      ) {
        updateShow(false);
      }
    };

    const renderActionContent = (action: PopoverAction, index: number) => {
      if (slots.action) {
        return slots.action({ action, index });
      }

      return [
        action.icon && (
          <Icon
            name={action.icon}
            classPrefix={props.iconPrefix}
            class={bem('action-icon')}
          />
        ),
        <div class={[bem('action-text'), BORDER_BOTTOM]}>{action.text}</div>,
      ];
    };

    const renderAction = (action: PopoverAction, index: number) => {
      const { icon, color, disabled, className } = action;
      return (
        <div
          role="menuitem"
          class={[bem('action', { disabled, 'with-icon': icon }), className]}
          style={{ color }}
          tabindex={disabled ? undefined : 0}
          aria-disabled={disabled || undefined}
          onClick={() => onClickAction(action, index)}
        >
          {renderActionContent(action, index)}
        </div>
      );
    };

    onMounted(() => {
      updateLocation();
      watchEffect(() => {
        popupRef.value = popoverRef.value?.popupRef.value;
      });
    });

    onBeforeUnmount(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });

    watch(() => [props.show, props.offset, props.placement], updateLocation);

    useClickAway([wrapperRef, popupRef], onClickAway, {
      eventName: 'touchstart',
    });

    return () => (
      <>
        <span ref={wrapperRef} class={bem('wrapper')} onClick={onClickWrapper}>
          {slots.reference?.()}
        </span>
        <Popup
          ref={popoverRef}
          class={bem([props.theme])}
          position={''}
          transition="van-popover-zoom"
          lockScroll={false}
          onUpdate:show={updateShow}
          {...attrs}
          {...pick(props, popupProps)}
        >
          {props.showArrow && <div class={bem('arrow')} />}
          <div role="menu" class={bem('content')}>
            {slots.default ? slots.default() : props.actions.map(renderAction)}
          </div>
        </Popup>
      </>
    );
  },
});
