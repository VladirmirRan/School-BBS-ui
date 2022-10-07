<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed"
                    :trigger="null"
                    collapsible>
      <div style="color:#fff; font-size:16px;text-align:center;padding:5px 3px;background-color: #364452;margin: 10px;">
        Romantic Night 校园墙
      </div>
      <a-menu theme="dark"
              mode="inline"
              :default-selected-keys="['1']">
        <a-menu-item key="1"
                     @click="$router.push('/user')">
          <a-icon type="user" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="2"
                     @click="$router.push('/article')">
          <a-icon type="file" />
          <span>帖子管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex;justify-content: space-between;">
        <a-icon class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)" />
        <div>
          <span style="padding:0 20px;">admin</span>
          <a-button style="margin-right:20px;"
                    @click="logout">退出</a-button>
        </div>

      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
