<template>
  <div class="">
     <!-- <van-button type="primary">主要按钮</van-button>
<van-button type="success">成功按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

  <van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="success">朴素按钮</van-button>
 
    <van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="success">细边框按钮</van-button>
  
    <van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="success">禁用状态</van-button> -->

  
    <!-- <van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="success" loading-text="加载中..." /> -->

  <!-- </div>  -->
  <!-- <van-button square type="primary">方形按钮</van-button>
<van-button round type="success">圆形按钮</van-button>
<van-button type="primary" block @click="clickHandle" @touchstart="touchstart">块级元素</van-button>
<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" size="normal">普通按钮</van-button>
<van-button type="primary" size="small">小型按钮</van-button>
<van-button type="primary" size="mini">迷你按钮</van-button>
<van-button color="#7232dd">单色按钮</van-button>
<van-button color="#7232dd" plain>单色按钮</van-button>
<van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</van-button> -->
<!-- <van-cell-group> 没有border 谁因为没有支持after
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group> -->
<!-- <van-cell value="内容" is-link> -->
  <!-- 使用 title 插槽来自定义标题 -->
  <!-- <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template> -->
<!-- </van-cell> -->


<!-- <van-image
  width="100"
  height="100"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/> -->
<!-- <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg">
  <template v-slot:error>加载失败</template> // BUG: 嵌套不支持 
</van-image> -->


 
<!-- <van-cell is-link @touchstart="showPopup">展示弹出层</van-cell>
<van-popup v-model:show="show">内容</van-popup> -->


<!-- <van-space>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
  <van-button type="primary">按钮</van-button>
</van-space>
<van-space direction="vertical" fill>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space>
<van-space wrap>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
  <van-button type="primary" block>按钮</van-button>
</van-space> -->



<!-- 最多显示一行 -->
<div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="van-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div class="van-multi-ellipsis--l3" @click="showToast">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
<!-- 淡入 -->

<!-- <van-calendar v-model:show="show" @confirm="onConfirm" /> -->
<van-checkbox v-model="checked">复选框</van-checkbox>
<!-- <van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
/> -->

<!-- <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form> -->
<van-radio-group v-model="checked">
  <van-radio name="1">单选框 1</van-radio>
  <van-radio name="2">单选框 2</van-radio>
</van-radio-group>
<van-switch v-model="checked" />
<van-collapse v-model="activeNames">
  <van-collapse-item title="标题1" name="1">
    代码是写出来给人看的，附带能在机器上运行。
  </van-collapse-item>
  <van-collapse-item title="标题2" name="2">
    技术无非就是那些开发它的人的共同灵魂。
  </van-collapse-item>
  <van-collapse-item title="标题3" name="3">
    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
  </van-collapse-item>
</van-collapse>
<van-count-down :time="time" />


  </div>
</template>

<script>




export default {


  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      activeNames:[],
      currentDate:new Date(2020, 0, 1),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      columns : ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'],
      username: "",
      password:"",
      checked:true,
      visible:true,
      show: true,
      value:"",
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
        ],
      },
    };
  },

  methods: {
    onSubmit(value){
      console.log(value)
    },
    showToast(){
      // this.show = true;
      // eslint-disable-next-line no-undef
      this.$toast('提示文案');


    },
     onConfirm (value)  {
      
     console.log(value);
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    clickHandle(){
      console.log("click");
    },
    touchstart(){
      console.log("touch start")
    },
    onClickCart() {
      this.$router.push('cart');
    },
     showPopup ()  {
      this.show = true;
    },
    
  },
};
</script>

<style >
 .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
  margin: 0;
  padding: 0;
}
.my-div{
  width: 500px;
  height: 200px;
   background-color: var(--bar)
}

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>
