<template>
  <div class="demo-button">
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <van-button type="primary">{{ 'primary' }}</van-button>
        <van-button type="success">{{ 'success' }}</van-button>
        <van-button type="default">{{ 'default' }}</van-button>
      </div>
      <van-button type="danger">{{ 'danger' }}</van-button>
      <van-button type="warning">{{ 'warning' }}</van-button>
    </demo-block>

    <demo-block title="plain">
      <van-button plain type="primary" text="plan"/>
      <van-button plain type="success" text="plan"/>
    </demo-block>

    <demo-block title="hairline not support">
<!--      <van-button plain hairline type="primary" text="hairlineButton"/>-->
<!--      <van-button plain hairline type="success" text="hairlineButton"/>-->
    </demo-block>

    <demo-block title="disabled">
      <van-button disabled type="primary" text="disabled"/>
      <van-button disabled type="success" text="disabled"/>
    </demo-block>

    <demo-block title="loadingStatus-not support">
<!--      <van-button loading type="primary"/>-->
<!--      <van-button loading type="primary" loading-type="spinner"/>-->
<!--      <van-button loading :loading-text="'loadingText'" type="success"/>-->
    </demo-block>

    <demo-block title="shape">
      <van-button type="primary" square text="square"/>
      <van-button type="success" round text="round"/>
    </demo-block>

    <demo-block title="icon not support">
<!--      <van-button type="primary" icon="plus"/>-->
<!--      <van-button type="primary" icon="plus" text="button"/>-->
<!--      <van-button-->
<!--          plain-->
<!--          type="primary"-->
<!--          :icon="('user-active.png')"-->
<!--          text="button"-->
<!--      />-->
    </demo-block>

    <demo-block title="size">
      <van-button type="primary" size="large">{{ 'large' }}</van-button>
      <van-button type="primary" size="normal">{{ 'normal' }}</van-button>
      <van-button type="primary" size="small">{{ 'small' }}</van-button>
      <van-button type="primary" size="mini">{{ 'mini' }}</van-button>
    </demo-block>

    <demo-block title="blockElement">
      <van-button type="primary" block>{{ 'blockElement' }}</van-button>
    </demo-block>

    <demo-block title="router">
      <van-button
          text="urlRoute"
          type="primary"
          url="https://github.com/vant-ui/vant"
      />
      <van-button text="vueRoute" type="primary" to="index"/>
    </demo-block>

    <demo-block title="customColor">
      <van-button color="#7232dd" text="pure"/>
      <van-button plain color="#7232dd" text="pure"/>
      <van-button
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          text="gradient"
      />
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-button {
  background: var(--van-background-color-light);

  .van-button {
    &--large {
      margin-bottom: var(--van-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--van-padding-md);
    }
  }

  .van-doc-demo-block {
    padding: 0 20px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--van-padding-sm);
  }
}
</style>