---
description: Distinguish basic vault implementation, AI services, and multi-asset strategy plans.
---

# Strategy and feature status

As of 2026-10-07, CRE8 remains a prototype. This page distinguishes basic implementation from next-version plans and does not establish live availability.

## Latest basic version

The basic prototype implements designated spot swaps, holdings, Venus / Lista / Aave V3 supply, buy-once, scheduled and dip buying, and some rebalancing. Per-asset and personal exit conditions depend on the enabled mode.

Separate position prototypes cover borrowing and PancakeSwap V3 LP. They cannot simply be inserted into ordinary supply vaults, and do not establish that every market, wallet, and exit flow has passed acceptance. Recursive borrowing in existing implementation is outside the next version's permitted strategies.

CRE8 AI has proposal and credit flows. Chat, credit purchases, and vault execution services each require deployment and acceptance. Routine strategy execution follows fixed rules rather than calling the chat model each time.

## Multi-asset, multi-strategy direction

The latest design allows multiple assets, strategies, LPs, and isolated debt positions in one vault. An asset may be split between core and trading inventory. Each strategy has its own budget and ownership attribution; funds cannot be allocated twice. This is broader than the basic seven-entry model and does not remove its current capacity limit automatically.

| Planned type | Purpose | Status boundary |
|---|---|---|
| Scheduled, dip, staged buying, and spot grids | Accumulate or trade by time and price | Implementation and acceptance differ by mode |
| Multi-asset baskets, rebalancing, and rotation | Manage weights and approved candidates | Prices, budgets, and complete inventory checks are necessary |
| LPs, range rebuilding, and income compounding | Provide spot liquidity and manage income | Impermanent loss and exit costs apply; migration between pools for the same pair is second-stage work |
| Idle stablecoin supply and BNB staking | Earn protocol interest or staking distributions | Individually approved destinations only; BNB unstaking may require a wait |
| Collateralized stablecoin borrowing and supply | Earn a spread after debt costs and other expenses | Debt, reserves, deleveraging, and exits must be handled; no recursive re-collateralization |
| Shared stops, profit targets, and time-sliced execution | Manage specified positions under conditions | Triggers do not guarantee execution price or timing |

Asset plans cover verifiable bStocks, individually approved major crypto assets, and designated stablecoins such as U, USDT, USD1, and USDC. A catalog does not approve every BNB version for trading, collateral, or LP. Listings and market capabilities are checked separately.

This round excludes futures, perpetuals, options, recursive re-collateralization, and cross-pool arbitrage. Research or interface options are not execution commitments.

## Engineering progress and availability

The mainline includes partial multi-asset, mixed-position and rule-execution implementation, with local tests and selected market-fork checks. Strategy gaps and full market and exit acceptance remain. Test evidence does not establish a live deployment, and the whole tool list cannot be marked complete.

Live availability must match deployment, approved markets, execution services, fees, eligibility, and actual exit capability. Live creation and deposits are not open. See [Supported protocols and operations](integrations.md) and [Security and service status](security-and-status.md).
