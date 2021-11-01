// 获取应用实例
const app = getApp()

Page({
  data: {
    dataSource: [],
    columns: []
  },
  onLoad() {
    setTimeout(() => {
      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];

      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: '住址',
          dataIndex: 'address',
          width: 150,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          width: 150,
        },
      ];

      this.setData({
        dataSource,
        columns
      })
    }, 1000);
  },
})
