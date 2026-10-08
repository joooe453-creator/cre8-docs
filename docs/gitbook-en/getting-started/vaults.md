---
description: Follow the lifecycle from creation and deposits to agent operations and exits.
---

# How vaults work

A CRE8 vault manages multiple participants' assets under shared rules. Its creator selects investable assets, designated markets, and allocation caps, then appoints an agent operator. Depositors receive vault shares and participate in changes in asset value under those rules.

CRE8 is currently a prototype. The following describes the design; live creation and deposits are not open.

## How funds move

1. **The creator configures the vault.** Choose assets, destinations, allocation caps, an Operator, and a fixed performance fee. Asset and market combinations must be within the reviewed execution scope.
2. **The creator provides seed capital.** On completion of creation, contribute 100 accounting-asset units, subject to the 0.5% entry fee. There is no fixed time lock. While other holders remain, the creator must retain at least 2% of circulating shares. Funds initially remain idle; the agent then allocates them under the rules.
3. **Depositors contribute the accounting asset.** Shares are issued at the applicable price. Eligible new deposits can still enter while the vault holds positions.
4. **The agent performs permitted operations.** It may trade designated assets, hold tokens, or supply assets to designated protocols. New deployment must satisfy allocation caps and idle requirements.
5. **Holders choose an exit.** Redeem the proportional position into the accounting asset, or receive original assets and protocol receipts in kind.

The vault operates continuously. An exit processes the departing holder's proportional inventory. Ordinary holders have no fixed product lockup, but prices, fees, liquidity, and third-party restrictions still affect exits.

## Accounting assets, holdings, and receipts

| Type | Purpose | Example |
|---|---|---|
| Accounting asset | Expresses NAV and is used for deposits and cash redemptions | USDT designated by a vault |
| Holding asset | An asset the agent may buy or hold | An approved token |
| Protocol receipt | Records a position supplied to a lending market or third-party vault | A lending receipt or third-party vault share |
| CRE8 vault share | Records participation in this vault | Shares received after a deposit |

These assets serve different purposes. Whether a receipt can be transferred or redeemed depends on its original protocol and token conditions. CRE8 share value reflects vault assets, fees, and exit results.

## Rules and strategy instructions

An **allocation cap** limits how much vault value the agent may deploy when adding a position. **Target weights, strategy descriptions, or rebalancing instructions** express the creator's intended approach. An unsupported instruction does not become executable simply because it appears in a design.

For example, “at most 30% in an asset” is an allocation limit. “Return to 20% every week” also needs the corresponding agent and execution setup; check which automation mode the vault actually enables. Buy-once, scheduled buying, dip buying, and some rebalancing have prototype implementations. See [Strategy and feature status](../product/strategy-status.md) for mixed multi-asset strategies.

## Which settings are fixed

The accounting asset, designated markets, creator, risk-management roles, and performance fee are fixed at creation. The creator may tighten allocation caps immediately. Increasing a cap requires announcement and a wait of at least 24 hours. Adding a new market requires another vault. The execution agent can be disabled immediately; replacement requires announcement and at least 24 hours.

See [Roles and permissions](../product/permissions.md) for who may pause, resume, or execute operations.
