<script setup>
import { computed, ref } from 'vue';
import { useData } from 'vitepress';
const { lang }=useData();
const cn=computed(()=>lang.value==='zh-Hans');
const selected=ref('all');
const choices=computed(()=>cn.value ? [['all','全部'],['deposit','存款人'],['create','创作者'],['ai','AI 用户']] : [['all','All'],['deposit','Depositors'],['create','Creators'],['ai','AI users']]);
const pages=[
  {id:'01',roles:['deposit','create','ai'],path:'getting-started/vaults',en:['Understand vaults','Start with the roles, shares, and rules behind a CRE8 vault.'],cn:['了解金库','从角色、份额与操作规则开始认识 CRE8。']},
  {id:'02',roles:['deposit'],path:'guides/depositors',en:['Participate in a vault','Review a vault, understand your shares, and plan your exit.'],cn:['参与金库','评估金库，了解您的份额与退出方式。']},
  {id:'03',roles:['create'],path:'guides/creators',en:['Create a vault','Define the operating scope, fees, and permissions for your vault.'],cn:['建立金库','设定操作范围、费用与金库权限。']},
  {id:'04',roles:['ai','create'],path:'guides/cre8-ai-credits',en:['CRE8 AI & credits','Learn how credits work and review the draft pricing.'],cn:['CRE8 AI 与点数','了解使用、扣点方式与草案价格表。']},
  {id:'05',roles:['create'],path:'guides/agents',en:['Work with agents','Understand agent responsibilities and the limits on execution.'],cn:['使用 Agent','了解 Agent 的职责与执行权限限制。']},
  {id:'06',roles:['deposit','create','ai'],path:'legal/before-you-use',en:['Before you begin','Check risks, service status, and draft legal documents.'],cn:['使用前先确认','查看风险、服务状态与法律文件草稿。']}
];
const cards=computed(()=>pages.filter(p=>selected.value==='all'||p.roles.includes(selected.value)));
</script>
<template>
<section class="start-section" :aria-label="cn?'从您的角色开始':'Start with your role'">
  <div class="start-heading"><h2>{{cn?'从您的角色开始':'Find your starting point'}}</h2><div class="role-tabs" role="group" :aria-label="cn?'选择角色':'Choose a role'"><button v-for="[key,label] in choices" :key="key" :aria-pressed="selected===key" :class="{selected:selected===key}" @click="selected=key">{{label}}</button></div></div>
  <div class="start-grid"><a v-for="page in cards" :key="page.id" :href="(cn?'/zh-cn/':'/')+page.path" class="start-card"><span class="card-number">{{page.id}}</span><h3>{{page[cn?'cn':'en'][0]}}</h3><p>{{page[cn?'cn':'en'][1]}}</p><span class="card-action">{{cn?'阅读指南':'Read guide'}}<span aria-hidden="true">↗</span></span></a></div>
</section>
</template>
