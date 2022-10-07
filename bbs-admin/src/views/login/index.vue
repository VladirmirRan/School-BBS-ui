<template>
  <div class="login">
    <div class="title">Romantic Night 校园墙</div>
    <a-form :form="form"
            :colon="false"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 18 }"
            @submit="handleSubmit">
      <a-form-item label="账号">
        <a-input v-decorator="[
            'usrName',
            { rules: [{ required: true,
            message: '请输入账号' }],
            initialValue: 'dxy'  },
          ]" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input type="password"
                 v-decorator="[
            'password',
            {
              rules: [{ required: true, }],
              initialValue: '123456'
            },
          ]" />
      </a-form-item>
      <div class="center">
        <a-space>
          <a-button type="primary"
                    html-type="submit">登录</a-button>
          <a-button type="primary"
                    @click="handleReset">重置</a-button>
        </a-space>
      </div>
    </a-form>
  </div>
</template>



<script>
// import { getPublicKey } from "@/api/login";
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
    };
  },

  computed: {
    // ...mapActions("user", ["login"]),
  },

  methods: {
    // 自定义校验规则
    validator1(rule, value) {
      let testResult = /[0-9]+/.test(value) && /[a-zA-Z]+/.test(value);

      return new Promise((resolve, reject) => {
        if (!value) {
          reject("请输入密码！");
        } else if (value.length < 8) {
          // reject("密码不小于8位！");
        } else if (!testResult) {
          // reject("密码需包含字母和数字！");
        } else {
          resolve();
        }
      });
    },

    handleReset() {
      this.form.resetFields();
    },

    handleSubmit(e) {
      console.log(11);

      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.$store.dispatch("user/login", values);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  .title {
    text-align: center;
    font-size: 20px;
    margin: 20px 0;
  }
  // border: 1px solid black;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  .center {
    margin-bottom: 10px;
  }
}
</style>