import { defineComponent, type ExtractPropTypes, type InjectionKey } from 'vue';
import { makeStringProp, makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('steps');

export type StepsDirection = 'horizontal' | 'vertical';

const stepsProps = {
  active: makeNumericProp(0),
  direction: makeStringProp<StepsDirection>('horizontal'),
  activeIcon: makeStringProp('checked'),
  iconPrefix: String,
  finishIcon: String,
  activeColor: String,
  inactiveIcon: String,
  inactiveColor: String,
};

export type StepsProps = ExtractPropTypes<typeof stepsProps>;

export type StepsProvide = {
  props: StepsProps;
  onClickStep: (index: number) => void;
};

export const STEPS_KEY: InjectionKey<StepsProvide> = Symbol(name);

export default defineComponent({
  name,

  props: stepsProps,

  emits: ['click-step'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(STEPS_KEY);

    const onClickStep = (index: number) => emit('click-step', index);

    linkChildren({
      props,
      onClickStep,
    });

    return () => (
      <div class={bem([props.direction])}>
        <div class={bem('items')}>{slots.default?.()}</div>
      </div>
    );
  },
});
