// components/carrot-table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataSource: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
      }
    },
    columns: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tbodyData: []
  },

  lifetimes: {
    attached: function () {
      console.log('aaaa');
      // 在组件实例进入页面节点树时执行
    },
    ready() {
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    parseProperties(dataSource, columns) {
      const tbodyData = []
      dataSource.forEach((item, index) => {
        tbodyData[index] = []
        Object.keys(item).forEach((dataSourceProp) => {
          console.log(dataSourceProp);
          const dataIndex = columns.findIndex(column => column.dataIndex === dataSourceProp)
          if (dataIndex > -1) {
            console.log(dataIndex, "dataIndex", item[dataSourceProp]);
            tbodyData[index][dataIndex] = { data: item[dataSourceProp], props: columns[dataIndex] }
          }
        })
      });

      this.setData({
        tbodyData
      })
    }
  },
  observers: {
    'dataSource,columns'(dataSource, columns) {
      if (dataSource.length && columns.length) {
        this.parseProperties(dataSource, columns)
      }
    }
  }
})
