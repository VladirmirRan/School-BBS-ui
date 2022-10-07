module.exports = {
  // 本地开发服务器代理
  devServer: {
    proxy: "http://wanghey.top:7070",
  },

  // 修改 ant-design-vue 默认 less 变量
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
