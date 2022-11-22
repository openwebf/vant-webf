import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import {
  Button,
  Calendar,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  CountDown,
  DatetimePicker,
  Dialog,
  Field,
  Form,
  NumberKeyboard,
  Picker,
  Popup,
  Radio,
  RadioGroup,
  Row,
  Space,
  Swipe,
  SwipeItem,
  Switch,
  Toast
} from 'vant';
import 'vant/es/toast/style';
import DemoBlock from "@/view/mobile/components/DemoBlock";
import DemoSection from "@/view/mobile/components/DemoSection";

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Cell);
app.use(CellGroup);
app.use(Col);
app.use(Row);
app.use(Popup);
app.use(Space);
app.use(Toast);
app.use(Calendar);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(DatetimePicker);
app.use(Field);
app.use(Form);
app.use(NumberKeyboard);
app.use(Picker);
app.use(Radio);
app.use(RadioGroup);
app.use(Switch);
app.use(Dialog);
app.use(Collapse);
app.use(CollapseItem);
app.use(CountDown);
app.use(Swipe);
app.use(SwipeItem);
app.component(DemoBlock.name, DemoBlock);
app.component(DemoSection.name, DemoSection);
app.mount('#app');