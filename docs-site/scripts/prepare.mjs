import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const target = path.join(root, 'docs-site/.generated');
// This disposable directory contains only the allowlisted public documents below.
await rm(target, {recursive:true, force:true});
await mkdir(path.join(target, '.vitepress'), {recursive:true});
await mkdir(path.join(target, 'public'), {recursive:true});
const editions = [['en', 'gitbook-en', ''], ['zh-CN', 'gitbook-zh-CN', 'zh-cn/']];
const routeFor = file => file.replace(/README\.md$/, 'index.md').replace(/\.md$/, '');
const metadata = {};
const manifest = [];
for (const [locale, folder, prefix] of editions) {
  const source = path.join(root, 'docs', folder);
  const summary = await readFile(path.join(source, 'SUMMARY.md'), 'utf8');
  const groups = [];
  let group = {text: locale === 'en' ? 'Explore CRE8' : '认识 CRE8', items:[]};
  groups.push(group);
  for (const line of summary.split('\n')) {
    if (line.startsWith('## ')) { group = {text:line.slice(3), items:[]}; groups.push(group); }
    const match = line.match(/^\s*\* \[([^\]]+)\]\(([^)]+\.md)\)/);
    if (!match) continue;
    const [, label, file] = match;
    const route = '/' + prefix + routeFor(file).replace(/index$/, '');
    group.items.push({text:file === 'README.md' ? (locale==='en'?'Welcome to CRE8':'欢迎了解 CRE8') : label, link:route});
    let text = await readFile(path.join(source, file), 'utf8');
    const front = text.match(/^---\n([\s\S]*?)\n---\n/);
    const description = front?.[1].match(/^description:\s*(.*)$/m)?.[1] ?? '';
    text = text.replace(/^---\n[\s\S]*?\n---\n/, '');
    const title = text.match(/^# (.*)$/m)?.[1] ?? label;
    // Resolve links from their source folder; emit predictable locale routes.
    text = text.replace(/\]\(([^)]+\.md)(#[^)]*)?\)/g, (_, href, hash='') => {
      const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(file), href));
      return `](/${prefix}${routeFor(resolved).replace(/index$/, '')}${hash})`;
    });
    if (file === 'README.md') {
      const paragraphs=text.split('\n\n');
      const secondIntro=paragraphs[2];
      text=text.replace(secondIntro+'\n\n','');
      text = text.replace(/^# Welcome to CRE8/m, locale==='en'?'# Explore CRE8':'# 认识 CRE8');
      text = text.replace(/## (Start with your role|从您的角色开始)[\s\S]*?(?=## (Three core concepts|三个核心概念))/, '<StartCards />\n\n'+secondIntro+'\n\n');
    }
    const outFile = path.join(target, prefix, file.replace(/README\.md$/, 'index.md'));
    await mkdir(path.dirname(outFile), {recursive:true});
    await writeFile(outFile, `---\ntitle: ${JSON.stringify(file==='README.md' ? (locale==='en'?'Explore CRE8':'认识 CRE8') : title)}\ndescription: ${JSON.stringify(description)}\n${file==='README.md'?'aside: false\n':''}---\n${text}`);
    manifest.push({locale, source:`docs/${folder}/${file}`, route, file:path.relative(target,outFile), title, description});
  }
  // The active page opens its own group; other sections start collapsed.
  metadata[locale] = groups.map(group => ({...group, collapsed:true}));
}
await writeFile(path.join(target,'.vitepress/sidebar.json'), JSON.stringify(metadata,null,2));
await writeFile(path.join(target,'.vitepress/manifest.json'), JSON.stringify(manifest,null,2));
await cp(path.join(root,'docs-site/config.mjs'), path.join(target,'.vitepress/config.mjs'));
await cp(path.join(root,'docs-site/theme'), path.join(target,'.vitepress/theme'), {recursive:true});
for (const [from,to] of [['cre8-logo-light.svg','logo-light.svg'],['cre8-logo-dark.svg','logo-dark.svg']]) {
  await cp(path.join(root,'docs/gitbook-brand',from),path.join(target,'public',to));
}
await cp(path.join(root,'docs/gitbook-brand/avatars/cre8-avatar-light-background.svg'), path.join(target,'public/favicon.svg'));
await writeFile(path.join(target,'public/CNAME'),'docs.cre8.finance\n');
await writeFile(path.join(target,'public/.nojekyll'),'');
await writeFile(path.join(target,'public/robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://docs.cre8.finance/sitemap.xml\n');
await writeFile(path.join(target,'public/llms.txt'), '# CRE8 documentation\n\nPublic product design; prototype and draft status apply.\n\n' + manifest.map(p=>`- [${p.title}](https://docs.cre8.finance${p.route}): ${p.description}`).join('\n') + '\n');
console.log(`Prepared ${manifest.length} allowlisted public pages in English and Simplified Chinese.`);
