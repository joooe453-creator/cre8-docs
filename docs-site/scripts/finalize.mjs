import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
const dist=path.resolve('.generated/.vitepress/dist');
const pages=JSON.parse(await readFile('.generated/.vitepress/manifest.json','utf8'));
// Directory indexes make deep links portable to GitHub Pages without rewrite rules.
for(const page of pages){if(page.file.endsWith('/index.md')||page.file==='index.md')continue;
 const stem=page.file.replace(/\.md$/,'');
 await mkdir(path.join(dist,stem),{recursive:true});
 await copyFile(path.join(dist,stem+'.html'),path.join(dist,stem,'index.html'));
}
for(const [from,to] of Object.entries({'/docs/':'/','/zh-cn/shu-hui-yu-tui-chu/':'/zh-cn/guides/redemptions/'})){
 const dir=path.join(dist,from);await mkdir(dir,{recursive:true});
 await writeFile(path.join(dir,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://docs.cre8.finance${to}"><title>CRE8 Docs</title></head><body><a href="${to}">Continue to CRE8 Docs</a></body></html>`);
}
console.log('Added portable deep links and known legacy redirects.');
