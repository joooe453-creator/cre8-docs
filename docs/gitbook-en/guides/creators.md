---
description: Configure assets, markets, caps, the Operator, seed capital, and fixed fees.
---

# Creator guide

Creators define a vault's operating scope and appoint its Operator. These choices affect depositors' asset risks, fees, and exit options.

> You can currently design and export a vault proposal. Live creation is not open. An export does not create a vault, contribute seed capital, or buy assets automatically.

## Define the strategy first

Write a summary depositors can understand: intended holdings, markets, potential adjustments, main risks, and conditions that could prevent an exit. The description must match the permitted operations.

A strategy name, AI description, or target allocation does not add functionality. Scheduled buying, dip buying, and rebalancing instructions work only where the corresponding operation is actually supported.

## Design sequence

1. **Set the name and accounting asset.** Confirm the token participants deposit and the unit for NAV and cash redemption.
2. **Select holding assets.** The current basic vault allows at most 7 distinct asset allocation entries.
3. **Select destinations.** For each asset, choose holding, an approved third-party vault, or a supply market. Each asset is bound to one designated destination.
4. **Set caps.** Their total must not exceed 95% of vault value. After each new deployment, at least 5% must remain idle in the vault.
5. **Appoint the Operator.** Use an Operator address separate from the creator wallet and verify its ability to execute within scope. A valid address format does not establish management competence.
6. **Set the creator performance fee.** It is 0–20% of positive exit profit, fixed at creation. The platform separately charges a fixed 10%, for a total of 10–30%. Entry and fund-operation fees apply separately.
7. **Review the complete proposal.** The asset and market combination must match a reviewed execution configuration. Valid form fields do not establish approval for live service.

## Seed capital

Live creation requires 100 accounting-asset units. The seed also pays the 0.5% entry fee, giving a standard net contribution of 99.5 units. Shares are nontransferable, with no fixed 90-day lock. While other holders remain, the creator must retain at least 2% of circulating shares after redemption.

This establishes an initial creator contribution; it does not guarantee strategy performance or compensate other participants for losses. Seed funds initially remain idle, and the agent subsequently allocates them under the rules.

## What can change after creation

| Setting | Current rule |
|---|---|
| Tightening allocation caps | Immediate; tightening cancels a pending cap increase |
| Increasing allocation caps | Announce, wait at least 24 hours, then apply through the required process |
| Adding markets or changing destinations | Requires another vault |
| Creator and risk-management roles | Fixed at creation |
| Execution agent | Can be disabled immediately; replacement requires announcement and at least 24 hours |
| Creator performance fee and fee recipients | Fixed at creation; platform performance fee is fixed at 10% |
| Pause and resume | Subject to role permissions, waiting periods, and current risk conditions |

Reducing a cap does not automatically sell an existing position. Price changes may also push a holding's allocation above its cap. New agent deployment must still pass current checks.

## Explain the vault to participants

State the strategy type, assets, markets, caps, Operator, rates, fee arrangements, and main risks. Label performance as actual or simulated and identify the covered period.

Do not present unsupported features, unverified deployments, or incomplete audits as available capabilities. Creators receive performance fees; participants must understand that economic interest and potential conflicts.

Creators must check their qualifications and responsibilities against their actual management, promotion, and location. CRE8's live operating entity and markets are not finalized. Completing a design does not permit accepting live funds.
