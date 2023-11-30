import { computed, defineComponent, type ExtractPropTypes } from 'vue';
import {
  numericProp,
  createNamespace,
  makeNumericProp,
  makeStringProp,
} from '../utils';
import { useParent } from '@vant/use';
import { ROW_KEY } from '../row/Row';

const [name, bem] = createNamespace('col');

const colProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  span: makeNumericProp(0),
  offset: numericProp,
};

export type ColProps = ExtractPropTypes<typeof colProps>;

export default defineComponent({
  name,

  props: colProps,

  setup(props, { slots }) {
    const { parent, index } = useParent(ROW_KEY);

    const style = computed(() => {
      if (!parent) {
        return;
      }

      const { spaces } = parent;

      if (spaces && spaces.value && spaces.value[index.value]) {
        const { left, right } = spaces.value[index.value];
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null,
        };
      }
    });

    return () => {
      const { tag, span, offset } = props;

      return (
        <tag
          style={style.value}
          class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
