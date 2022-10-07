import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/styles/index.less'

import { Button,Layout,Menu,Icon, message, Table, Space, Form, Input } from "ant-design-vue";
Vue.use(Button).use(Layout).use(Menu).use(Icon).use(Table).use(Space).use(Form).use(Input);
Vue.prototype.$message = message;
/* Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$error = Modal.error;
Vue.prototype.$success = Modal.success; */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
