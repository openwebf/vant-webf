import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import { createNamespace, isDef, makeStringProp, numericProp } from '../utils';

// Components
import { Tag } from '../tag';
import { Image } from '../image';

const [name, bem] = createNamespace('card');

const cardProps = {
  tag: String,
  num: numericProp,
  desc: String,
  thumb: String,
  title: String,
  price: numericProp,
  centered: Boolean,
  lazyLoad: Boolean,
  currency: makeStringProp('¥'),
  thumbLink: String,
  originPrice: numericProp,
};

export type CardProps = ExtractPropTypes<typeof cardProps>;

export default defineComponent({
  name,

  props: cardProps,

  emits: ['click-thumb'],

  setup(props, { slots, emit }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return (
          <div class={[bem('title'), 'van-multi-ellipsis--l2']}>
            {props.title}
          </div>
        );
      }
    };

    const renderThumbTag = () => {
      if (slots.tag || props.tag) {
        return (
          <div class={bem('tag')}>
            {slots.tag ? (
              slots.tag()
            ) : (
              <Tag mark type="danger">
                {props.tag}
              </Tag>
            )}
          </div>
        );
      }
    };

    const renderThumbImage = () => {
      if (slots.thumb) {
        return slots.thumb();
      }

      return (
        <Image
          src={props.thumb}
          fit="cover"
          width="100%"
          height="100%"
          lazyLoad={props.lazyLoad}
        />
      );
    };

    const renderThumb = () => {
      if (slots.thumb || props.thumb) {
        return (
          <a
            href={props.thumbLink}
            class={bem('thumb')}
            onClick={(event: MouseEvent) => emit('click-thumb', event)}
          >
            {renderThumbImage()}
            {renderThumbTag()}
          </a>
        );
      }
    };

    const renderDesc = () => {
      if (slots.desc) {
        return slots.desc();
      }
      if (props.desc) {
        return <div class={[bem('desc'), 'van-ellipsis']}>{props.desc}</div>;
      }
    };

    const renderPriceText = () => {
      const priceArr = props.price!.toString().split('.');
      return (
        <span style="display:inline-block">
          <span class={bem('price-currency')}>{props.currency}</span>
          <span class={bem('price-integer')}>{priceArr[0]}</span>.
          <span class={bem('price-decimal')}>{priceArr[1]}</span>
        </span>
      );
    };

    return () => {
      const showNum = slots.num || isDef(props.num);
      const showPrice = slots.price || isDef(props.price);
      const showOriginPrice = slots['origin-price'] || isDef(props.originPrice);
      const showBottom =
        showNum || showPrice || showOriginPrice || slots.bottom;
      const OriginPrice = showOriginPrice && (
        <span class={bem('origin-price')}>
          {slots['origin-price']
            ? slots['origin-price']()
            : `${props.currency} ${props.originPrice}`}
        </span>
      );
      const Price = showPrice && (
        <div class={bem('price')}>
          {slots.price ? slots.price() : renderPriceText()}
          {OriginPrice}
        </div>
      );

      const Num = showNum && (
        <div class={bem('num')}>
          {slots.num ? slots.num() : `x${props.num}`}
        </div>
      );

      const Footer = slots.footer && (
        <div class={bem('footer')}>{slots.footer()}</div>
      );

      const Bottom = showBottom && (
        <div class={bem('bottom')}>
          {slots['price-top']?.()}
          {Price}
          {Num}
          {slots.bottom?.()}
        </div>
      );

      return (
        <div class={bem()}>
          <div class={bem('header')}>
            {renderThumb()}
            <div class={bem('content', { centered: props.centered })}>
              <div>
                {renderTitle()}
                {renderDesc()}
                {slots.tags?.()}
              </div>
              {Bottom}
            </div>
          </div>
          {Footer}
        </div>
      );
    };
  },
});
