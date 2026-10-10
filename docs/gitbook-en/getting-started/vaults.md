---
description: The life of a fund, from creation and deposits to AI agent actions and withdrawals.
---

# How funds work

A CRE8 fund manages many holders' assets under one set of rules, its mandate. Each fund is a non-custodial vault contract. The creator selects the assets the fund may hold, designated markets, and allocation caps, then appoints an AI agent (the Operator role) and chooses who runs the fund day to day: a plan, which runs onchain, or the AI agent, which decides within the mandate. Holders receive fund shares, and the value of those shares moves with the fund's assets under those rules.

CRE8 is currently a prototype. This page describes the design; live creation and deposits are not open.

## How the money moves

1. **The creator sets up the fund.** Choose assets, destinations, allocation caps, an AI agent, and a fixed performance fee. Asset and market combinations must be within the reviewed execution scope.
2. **The creator provides the seed.** On completion of creation, contribute 100 accounting-asset units. A 1% creation fee is charged once when the fund goes live, so the standard net contribution is 99 units. The seed pays no deposit fee on top. There is no fixed time lock. While other holders remain, the creator must keep at least 2% of circulating shares. The seed stays idle at first; the plan or the AI agent then allocates it under the rules.
3. **Holders deposit the accounting asset.** Each deposit pays a 1% deposit fee. Shares are issued at the current share price. Eligible new deposits can still come in while the fund holds positions.
4. **The plan or AI agent performs permitted operations.** A plan's scheduled steps are sent onchain by keeper transactions; an AI agent decides itself, within the mandate. Either may trade designated assets, hold tokens, or supply assets to designated protocols. New deployment must satisfy allocation caps and idle requirements.
5. **Holders choose how to withdraw.** **Withdraw as USDT** sells their proportional share into the accounting asset. **Withdraw as assets** hands over their share of the original assets and protocol receipts directly.

The fund runs continuously. A withdrawal processes only the departing holder's proportional share. Ordinary holders have no fixed lockup, but prices, fees, liquidity, and third-party restrictions still affect withdrawals.

## Accounting assets, holdings, and receipts

| Type | Purpose | Example |
|---|---|---|
| Accounting asset | Sets the unit of the share price; used for deposits and Withdraw as USDT | USDT designated by a fund |
| Holding asset | An asset the AI agent may buy or hold | An approved token |
| Protocol receipt | Records a position supplied to a lending market or third-party vault | A lending receipt or third-party vault share |
| CRE8 fund share | Records your part of this fund | Shares received after a deposit |

These assets serve different purposes. Whether a receipt can be transferred or turned back into its underlying asset depends on its original protocol and token conditions. The CRE8 share price reflects the fund's assets, fees, and withdrawal results.

## Mandate and plan

An **allocation cap** limits how much fund value the AI agent may deploy when adding a position. **Target weights, plan descriptions, or rebalancing instructions** express how the creator wants the fund to run. An unsupported instruction does not become executable simply because it appears in a design.

For example, “at most 30% in an asset” is an allocation limit. “Rebalance to 20% every week” also needs the matching AI agent and execution setup; check which automation mode the fund actually enables. Buy-once, scheduled buying, dip buying, and some rebalancing have prototype implementations. See [Plans and feature status](../product/strategy-status.md) for multi-asset plans.

## Which settings are fixed

The accounting asset, designated markets, creator, risk-management roles, and performance fee are fixed at creation. The creator may tighten allocation caps immediately. Increasing a cap requires an announcement and a wait of at least 24 hours. Adding a new market requires another fund. The AI agent can be disabled immediately; replacing it requires an announcement and at least 24 hours.

See [Roles and permissions](../product/permissions.md) for who may pause, resume, or execute operations.
