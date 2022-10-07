<template>
  <div>
    <a-button type="primary"
              style="margin-bottom:20px;">新增用户</a-button>
    <a-table bordered
             :data-source="list"
             :loading="loading"
             @change="onChange"
             rowKey="code"
             :pagination="{
          total,
          current,
          pageSize,
          showTotal: (total) => `共 ${total} 条记录`,
        }">
      <a-table-column title="编号"
                      data-index="code"
                      align="center" />
      <a-table-column title="用户名"
                      data-index="name"
                      align="center" />
      <a-table-column title="性别"
                      data-index="sex"
                      align="center" />
      <a-table-column key="control"
                      title="操作"
                      align="center">
        <template slot-scope="text">
          <a-space>
            <a @click="$router.push($route.path + '/update?id=' + text.id)">编辑</a>
            <a class="danger"
               @click.prevent="del(text.id)">删除</a>
          </a-space>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "dxy",
          code: "123",
          sex: "男",
        },
      ],
      total: 0,
      current: 1,
      pageSize: 10,
      loading: false,
    };
  },
  methods: {
    getList() {},
    onChange(pagination) {
      this.current = pagination.current;
      this.pageSize = pagination.pageSize;
      this.getList();
    },
    del() {},
  },
};
</script>
<style lang="less" scoped>
</style>
