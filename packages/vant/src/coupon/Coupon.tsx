import { computed, defineComponent, type PropType } from 'vue';
import {
  makeStringProp,
  createNamespace,
  makeRequiredProp,
  type Numeric,
} from '../utils';
import { getDate, formatAmount, formatDiscount } from './utils';
import { Checkbox } from '../checkbox';

export type CouponInfo = {
  id: Numeric;
  name: string;
  endAt: number;
  value: number;
  startAt: number;
  reason?: string;
  discount?: number;
  unitDesc?: string;
  condition?: string;
  valueDesc?: string;
  description: string;
  denominations?: number;
  originCondition?: number;
};

const [name, bem, t] = createNamespace('coupon');

export default defineComponent({
  name,

  props: {
    chosen: Boolean,
    coupon: makeRequiredProp<PropType<CouponInfo>>(Object),
    disabled: Boolean,
    currency: makeStringProp('¥'),
  },

  setup(props) {
    const validPeriod = computed(() => {
      const { startAt, endAt } = props.coupon;
      return `${getDate(startAt)} - ${getDate(endAt)}`;
    });

    const faceAmount = computed(() => {
      const { coupon, currency } = props;

      if (coupon.valueDesc) {
        return [coupon.valueDesc, <span>{coupon.unitDesc || ''}</span>];
      }

      if (coupon.denominations) {
        const denominations = formatAmount(coupon.denominations);
        return [<span>{currency}</span>, ` ${denominations}`];
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(coupon.discount));
      }

      return '';
    });

    const conditionMessage = computed(() => {
      const condition = formatAmount(props.coupon.originCondition || 0);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    });

    return () => {
      const { chosen, coupon, disabled } = props;
      const description = (disabled && coupon.reason) || coupon.description;

      return (
        <div class={bem({ disabled })}>
          <div class={bem('content')}>
            <div class={bem('head')}>
              <h2 class={bem('amount')}>{faceAmount.value}</h2>
              <p class={bem('condition')}>
                {coupon.condition || conditionMessage.value}
              </p>
            </div>
            <div class={bem('body')}>
              <p class={bem('name')}>{coupon.name}</p>
              <p class={bem('valid')}>{validPeriod.value}</p>
              {!disabled && (
                <Checkbox class={bem('corner')} modelValue={chosen} />
              )}
            </div>
          </div>
          {description && <p class={bem('description')}>{description}</p>}
        </div>
      );
    };
  },
});
