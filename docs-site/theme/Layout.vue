<script setup>
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
const { lang }=useData();
const route=useRoute();
const cn=computed(()=>lang.value==='zh-Hans');
const tag=computed(()=>route.path.includes('/legal/') ? (cn.value?'法律文件 · 草稿':'LEGAL · DRAFT') : (cn.value?'CRE8 产品文档':'CRE8 DOCUMENTATION'));
</script>
<template>
  <DefaultTheme.Layout>
    <template #doc-before><div class="page-kicker">{{ tag }}</div></template>
    <template #sidebar-nav-before><div class="sidebar-intro"><span class="status-dot"></span>{{cn?'产品设计 · 原型阶段':'Product design · Prototype'}}</div></template>
    <template #doc-footer-before><div class="doc-note">{{cn?'本文描述产品设计。正式服务、可用功能及法律条款以实际发布状态为准。':'These docs describe the product design. Live availability, features, and legal terms depend on the actual release.'}}</div></template>
  </DefaultTheme.Layout>
</template>
