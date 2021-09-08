---
title: 示例
sidebar: false
---

## 下单

下单描述

### 接口说明

请求URL：URL

请求方式：POST

### 请求参数

<app-table :tbody="rep" />

### 请求示例

```json
{
  x: y
}
```

### 返回参数

<app-table :tbody="rep" />

### 返回示例

```json
{
  code: 1,
  msg: '',
  data: {}
}
```

<script setup>
const rep = [
  [
    {value: 'code'},
    {value: 'int'},
    {value: '是'},
    {value: '代码'},
    {value: 1}
  ]
]
</script>