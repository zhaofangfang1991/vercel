---
title: 基础范式
sidebar: false
---

### 公共响应参数

<app-table :tbody="rep" />

### 列表请求公共参数

<app-table :tbody="req_list" />

### 列表响应公共参数

<app-table :tbody="rep_list" />

<script setup>
const req_list = [
  [
    {value: 'current'},
    {value: 'int'},
    {value: '是'},
    {value: '当前页'},
    {value: 1}
  ],
  [
    {value: 'size'},
    {value: 'int'},
    {value: ''},
    {value: '每页条数(默认10)'},
    {value: 10}
  ]
]
const rep = [
  [
    {value: 'code'},
    {value: 'int'},
    {value: '是'},
    {value: '代码'},
    {value: '-1|0|1'}
  ],
  [
    {value: 'msg'},
    {value: 'string'},
    {value: '是'},
    {value: '信息'},
    {value: 'SUCC'}
  ],
  [
    {value: 'data'},
    {value: 'Object'},
    {value: ''},
    {value: '数据'},
    {value: ''}
  ]
]
const rep_list = [
  [
    {value: 'data'},
    {value: 'Array'},
    {value: '是'},
    {value: '列表'},
    {value: '[{x:y}]'}
  ],
  [
    {value: 'total'},
    {value: 'int'},
    {value: '是'},
    {value: '总条数'},
    {value: '0'}
  ]
]
</script>