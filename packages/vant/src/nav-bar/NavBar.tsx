import {
  ref,
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  truthProp,
  numericProp,
  BORDER_BOTTOM,
  getZIndexStyle,
  createNamespace,
  HAPTICS_FEEDBACK,
} from '../utils';

// Composables
import { usePlaceholder } from '../composables/use-placeholder';

// Components
import { Icon } from '../icon';

const [name, bem] = createNamespace('nav-bar');

const navBarProps = {
  title: String,
  fixed: Boolean,
  zIndex: numericProp,
  border: truthProp,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  placeholder: Boolean,
  safeAreaInsetTop: Boolean,
};

export type NavBarProps = ExtractPropTypes<typeof navBarProps>;

export default defineComponent({
  name,

  props: navBarProps,

  emits: ['click-left', 'click-right'],

  setup(props, { emit, slots }) {
    const navBarRef = ref<HTMLElement>();
    const renderPlaceholder = usePlaceholder(navBarRef, bem);

    const onClickLeft = (event: MouseEvent) => emit('click-left', event);
    const onClickRight = (event: MouseEvent) => emit('click-right', event);

    const renderLeft = () => {
      if (slots.left) {
        return slots.left();
      }

      return [
        props.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
        props.leftText && <span class={bem('text')}>{props.leftText}</span>,
      ];
    };

    const renderRight = () => {
      if (slots.right) {
        return slots.right();
      }

      return <span class={bem('text')}>{props.rightText}</span>;
    };

    const renderNavBar = () => {
      const { title, fixed, border, zIndex } = props;
      const style: CSSProperties = getZIndexStyle(zIndex);

      const hasLeft = props.leftArrow || props.leftText || slots.left;
      const hasRight = props.rightText || slots.right;

      return (
        <div
          ref={navBarRef}
          style={style}
          class={[
            bem({ fixed }),
            {
              [BORDER_BOTTOM]: border,
              'van-safe-area-top': props.safeAreaInsetTop,
            },
          ]}
        >
          <div class={bem('content')}>
            {hasLeft && (
              <div
                class={[bem('left'), HAPTICS_FEEDBACK]}
                onClick={onClickLeft}
              >
                {renderLeft()}
              </div>
            )}
            <div class={[bem('title'), 'van-ellipsis']}>
              {slots.title ? slots.title() : title}
            </div>
            {hasRight && (
              <div
                class={[bem('right'), HAPTICS_FEEDBACK]}
                onClick={onClickRight}
              >
                {renderRight()}
              </div>
            )}
          </div>
        </div>
      );
    };

    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }
      return renderNavBar();
    };
  },
});
