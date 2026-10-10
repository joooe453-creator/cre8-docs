---
description: Configure assets, markets, caps, the AI agent, seed capital, and fixed fees.
---

# Creator guide

Creators define a fund's operating scope and appoint its AI agent. These choices affect holders' asset risks, fees, and withdrawal options.

> You can currently design and export a fund proposal. Live creation is not open. An export does not create a fund, contribute seed capital, or buy assets automatically.

## Define the plan first

Write a summary holders can understand: intended holdings, markets, possible adjustments, main risks, and conditions that could prevent a withdrawal. The description must match the permitted operations.

A plan name, AI description, or target allocation does not add functionality. Scheduled buying, dip buying, and rebalancing instructions work only where the matching operation is actually supported.

## Design sequence

1. **Set the name and accounting asset.** Confirm the token holders deposit and the unit for the share price and for Withdraw as USDT.
2. **Select holding assets.** The current basic fund allows at most 7 distinct asset allocation entries.
3. **Select destinations.** For each asset, choose holding, an approved third-party vault, or a supply market. Each asset is bound to one designated destination.
4. **Set caps.** Their total must not exceed 95% of fund value. After each new deployment, at least 5% must remain idle in the fund.
5. **Appoint the AI agent.** Use an AI agent address (the Operator role) separate from the creator wallet, and check that it can execute within scope. A valid address format does not show management competence.
6. **Set the creator performance fee.** It is 0–20% of each holder's own realized profit when they withdraw (default 10%), fixed at creation. CRE8 separately charges a fixed 10%, for a total of 10–30%. The fund page shows one total, for example “Performance fee 25% (CRE8 10% + creator 15%)”. Holders also pay a 1% deposit fee on each deposit. There is no annual, management, or operation fee.
7. **Review the complete proposal.** The asset and market combination must match a reviewed execution configuration. Valid form fields do not mean approval for live service.

## Seed capital

Live creation requires 100 accounting-asset units. A 1% creation fee is charged once on the seed when the fund goes live, giving a standard net contribution of 99 units. The seed pays no deposit fee on top; your later deposits pay the 1% deposit fee like anyone else's. Shares are nontransferable, with no fixed 90-day lock. While other holders remain, the creator must keep at least 2% of circulating shares after withdrawing.

This sets an initial creator contribution; it does not promise fund performance or cover other holders' losses. The seed stays idle at first, and the plan or the AI agent then allocates it under the rules.

## What can change after creation

| Setting | Current rule |
|---|---|
| Tightening allocation caps | Immediate; tightening cancels a pending cap increase |
| Increasing allocation caps | Announce, wait at least 24 hours, then apply through the required process |
| Adding markets or changing destinations | Requires another fund |
| Creator and risk-management roles | Fixed at creation |
| AI agent | Can be disabled immediately; replacement requires announcement and at least 24 hours |
| Creator performance fee and fee recipients | Fixed at creation; CRE8's performance fee is fixed at 10% |
| Pause and resume | Subject to role permissions, waiting periods, and current risk conditions |

Reducing a cap does not automatically sell an existing position. Price changes may also push a holding's allocation above its cap. New AI agent deployment must still pass current checks.

## Explain the fund to holders

State the plan type, assets, markets, caps, AI agent, rates, fee arrangements, and main risks. Label performance as actual or simulated and name the period covered.

Do not present unsupported features, unverified deployments, or incomplete audits as available capabilities. Creators receive performance fees; holders must understand that economic interest and possible conflicts.

Creators must check their qualifications and responsibilities against their actual management, promotion, and location. CRE8's live operating entity and markets are not finalized. Completing a design does not permit accepting live deposits.
