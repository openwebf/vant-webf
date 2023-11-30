import { defineComponent, type ExtractPropTypes } from 'vue';
import { createNamespace, makeStringProp, truthProp } from '../utils';

const [name, bem] = createNamespace('divider');

export type DividerContentPosition = 'left' | 'center' | 'right';

const dividerProps = {
  dashed: Boolean,
  hairline: truthProp,
  contentPosition: makeStringProp<DividerContentPosition>('center'),
};

export type DividerProps = ExtractPropTypes<typeof dividerProps>;

export default defineComponent({
  name,

  props: dividerProps,

  setup(props, { slots }) {
    const renderBefore = () => (
      <span
        class={[
          bem('before'),
          bem(`content-${props.contentPosition}__before`),
          props.hairline ? bem('hairline__before') : '',
        ]}
      ></span>
    );
    const renderAfter = () => (
      <span
        class={[
          bem('after'),
          bem(`content-${props.contentPosition}__after`),
          props.hairline ? bem('hairline__after') : '',
        ]}
      ></span>
    );
    return () => (
      <div
        role="separator"
        class={bem({
          dashed: props.dashed,
          hairline: props.hairline,
          [`content-${props.contentPosition}`]: !!slots.default,
        })}
      >
        {renderBefore()}
        {slots.default?.()}
        {slots.default && renderAfter()}
      </div>
    );
  },
});
