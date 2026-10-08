---
description: 哪些协议操作已在现行设计内实作，哪些仍属设计或未支持范围。
---

# 支持的协议与操作

CRE8 以完整资产与市场组合界定执行范围。某个协议出现在介面中，不代表它的所有市场或操作都可以使用。

> 下表为现行原型的实作范围，并非正式服务清单。尚无经核实、可接受正式资金的部署；各网路与市场须分别确认。

## 现行实作范围

| 协议或目的地 | 允许的操作类型 | 需要注意 |
|---|---|---|
| 持有代币 | 保留已核准的持仓资产 | 代币本身仍有价格、发行人与转移风险 |
| PancakeSwap V3 | 在指定直接交易池，以固定投入金额换入或换回指定资产 | 基础换币不包含任意路由或全部 PancakeSwap 功能；V3 LP 是独立部位原型 |
| Venus | 对指定供款市场存入及提回资产 | 本列供款不包含借款；独立借款部位须另外核对 |
| Lista 指定第三方金库 | 存入及赎回指定金库份额 | 不代表所有 Lista 金库或借贷、质押功能都已支持 |
| Aave V3 | 对指定市场供款及提回资产 | 本列供款不包含借款；独立借款部位须另外核对 |

借贷市场或第三方金库可能因额度、暂停、流动性与治理变化而暂时无法使用。已核准的组合仍需要当次操作检查。

## 各协议在金库中的用途

### Lista：指定第三方金库

CRE8 可将选定资产存入已核准的 Lista 金库，取得相应第三方金库份额。底层资金可能再被配置到多个借贷市场，因此除了 Lista 协议风险，也需要了解该金库的管理者、市场选择与流动性。

固定选择某一档 Lista 金库，不代表其底层配置永远不变。底层管理与治理条件可能影响可存入额、估值或退出。原资产赎回可能交付这些第三方份额。

第三方阅读：[Lista Lending Earn](https://docs.bsc.lista.org/user-guide/lista-lending/lista-lending-earn)、[Third-Party Vault Risk Management](https://docs.bsc.lista.org/introduction/lista-lending/third-party-vault-risk-management)。

### Aave V3：指定供款市场

CRE8 的范围是向指定 Aave V3 市场供款与提回，不包含借款操作。供款利率、供款额度、暂停状态与可提回流动性，会影响当次操作。

帐面上有供款部位，不保证市场当时有足够未借出资产可提回。原资产退出可能交付相关收据，后续兑回仍依赖底层市场。

Aave 文件亦涵盖 V4 与其他产品，请核对版本；本页没有扩大 CRE8 的 V3 执行范围。

第三方阅读：[Supply Tokens](https://www.aave.com/help/supplying/supply-tokens)、[Withdraw Tokens](https://www.aave.com/help/supplying/withdraw-tokens)。

### PancakeSwap V3：指定换币市场

CRE8 使用指定直接交易池，在金库计价资产与选定持仓资产之间换币。实收受该池交易费、可用流动性、价格影响及滑价影响。

费率按实际指定池确认，不能套用 PancakeSwap 所有交易的统一费率，也不能把其介面的自动路由或 Auto Slippage 当成 CRE8 功能。未满足本次最低输出时，交易可能失败并仍消耗网路费。

第三方阅读：[Token Swaps](https://docs.pancakeswap.finance/trade/pancakeswap-exchange/trade)、[Slippage 说明](https://docs.pancakeswap.finance/trading-tools/pancakeswap-auto-slippage)。

### Venus：指定供款市场

CRE8 支持对指定 Venus 市场供款与赎回。供款会形成相应协议收据，部位价值依底层资产与市场收益变化；原资产退出可能交付这些收据。

供款额度限制新增存入，市场可用资金与暂停状态则可能影响提回。Venus 文件中的借款、抵押与杠杆流程，不表示 CRE8 已支持这些操作。

第三方阅读：[Supplying and borrowing](https://docs-v4.venus.io/guides/supply-borrow)、[Risk Management](https://docs-v4.venus.io/risk/risk-management)。

## 选择资产与目的地

创作者先选择资产，再为该资产选择持有、第三方金库或供款市场。系统确认整个组合是否符合已审查的执行配置。

代币名称相同不代表地址相同，网路不同也不能共用同一份配置。找得到资产、能汇出设计或符合名称，均不表示该组合已可建立正式金库。

## 其他能力与最新进度

买一次、定期、回撤买入与部分再平衡已有基础实作；独立借贷与 PancakeSwap V3 LP 部位也有原型。这不表示全部模式可混入同一金库或已正式验收。

多资产、多策略、BNB 质押及借款再供款的最新设计与分支进度，见[策略与功能进度](strategy-status.md)。股票及 RWA 的实际发行人、定价、深度与资格须逐项确认。Aster 帐户是独立整合，其余额不计入金库 NAV；期货及永续不属这轮金库策略。

## 品牌与底层风险

协议名称、标志与整合不表示其对 CRE8、创作者、策略或本金安全背书。底层协议曾受审计，也不代表 CRE8 的整合或个别金库已完成第三方审计。

请搭配[安全与服务状态](security-and-status.md)阅读。