import {readFile,writeFile,stat,readdir} from 'node:fs/promises';
import path from 'node:path';
const dir=path.resolve('.generated/.vitepress/dist');
const pages=JSON.parse(await readFile('.generated/.vitepress/manifest.json','utf8'));
const all=[];
async function walk(folder){for(const item of await readdir(folder,{withFileTypes:true})){const f=path.join(folder,item.name);if(item.isDirectory())await walk(f);else all.push(f);}}
await walk(dir);
const failures=[];let links=0;
for(const page of pages){
 const file=path.join(dir,page.file.replace(/\.md$/,'.html'));
 const html=await readFile(file,'utf8');
 if(!html.includes('<h1'))failures.push(`${page.route}: missing rendered article`);
 if(page.source.includes('cre8-ai-credits')) for(const needle of ['1 USDT','5 USDT','20 USDT','50 USDT',page.locale==='en'?'Draft':'草案'])if(!html.includes(needle)) failures.push(`${page.route}: missing ${needle}`);
 if(page.locale==='zh-CN'&&page.route==='/zh-cn/')for(const label of ['金库规则','金库份额','净资产价值'])if(!html.includes(`<strong>${label}</strong>`))failures.push(`Broken CJK bold: ${label}`);
 for(const [,href]of html.matchAll(/href="([^"?#]+)(?:[?#][^"]*)?"/g)){
  if(!href.startsWith('/')||href.startsWith('//'))continue;
  links++;
  const local=decodeURIComponent(href);
  const name=local.endsWith('/')?local+'index.html':local;
  const options=[name,name+'.html',name+'/index.html'];
  if(!await Promise.any(options.map(async n=>{await stat(path.join(dir,n));return true;})).catch(()=>false))failures.push(`${page.route}: missing local target ${href}`);
 }
}
for(const filename of all){if(/\.(html|js|json|txt)$/.test(filename)){
 const text=await readFile(filename,'utf8');
 if(/PRIVATE_KEY|\b0x[a-fA-F0-9]{40}\b|MandateVault\.sol|\.codex\/worktrees|\/Users\//.test(text)) failures.push(`Unexpected internal detail in ${path.relative(dir,filename)}`);
}}
const report={pages:pages.length,checkedLinks:links,failures:[...new Set(failures)]};
await writeFile('.generated/verification.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(report.failures.length)process.exit(1);
