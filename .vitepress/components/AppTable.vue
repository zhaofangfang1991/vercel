<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item,index) in thead" :key="index" :style="{width:item.width?item.width:false,'text-align':item.align?item.align:'left'}" :width="item.width">{{item.value}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in tbody" :key="index">
        <td v-for="(item2,index2) in item" :key="index2">{{item2.value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'app-table',
  props: {
    thead: {
      type: Array,
      default: [
        {
          value: '参数',
          width: '15%'
        },
        {
          value: '类型[长度限制]',
          width: '20%'
        },
        {
          value: '必填',
          width: '10%'
        },
        {
          value: '描述'
        },
        {
          value: '示例值',
          width: '10%'
        }
      ]
    },
    tbody: {
      type: Array,
      default: []
    }
  }
}
</script>>