---
description: Understand the limits of allocation caps, idle assets, AI agent loss protection, and stop orders.
---

# Risk controls and remaining risks

Designated assets and markets, allocation caps, idle requirements, and permissions limit new risk. They do not guarantee performance, a maximum loss, or withdrawal timing. You may lose your entire principal.

## Caps and idle assets

The current basic fund supports at most 7 distinct underlying-asset entries, each with one designated destination. Caps total at most 95%. After any operation that adds risk, at least 5% of fund value must remain in idle accounting assets.

Market moves and withdrawals change later ratios. The 5% is not a continuous cash guarantee. Creators may tighten caps immediately; increases require announcement and at least 24 hours. Tightening does not automatically sell, and market movement may push existing positions above caps.

## AI agent loss protection

Protection records losses in fund value caused by the AI agent's own capital actions, comparing before and after under the same prices. This differs from holding losses caused by market price moves. The creator picks the threshold between 2% and 10% (default 5%); tightening it takes effect immediately, loosening it waits 1 day. Losses are summed over the last 25 hours in hourly buckets, and a warning shows at 2% (or at half the threshold when it is below 4%).

**An action crossing the threshold completes before the AI agent is disabled.** The threshold is therefore not a hard cap on a single action, cumulative loss, or total fund loss. It is not continuous market monitoring or guaranteed stop-loss execution. Disabling the AI agent differs from pausing the entire fund; holder withdrawals and creator reductions keep their own routes.

## Stops, profit targets, and continuous execution

The prototype has per-asset and personal stop-loss and take-profit flows. Verify trigger scope and recipient separately. Target prices do not guarantee execution prices. Invalid market data, delays, insufficient liquidity, or execution-service interruptions may delay or prevent exits.

See [Plans and feature status](strategy-status.md) for further multi-asset, multi-plan design and implementation. Defining conditions does not mean every mode is deployed or that a trigger guarantees execution.

## Pauses and AI agent replacement

The creator or Risk Council may pause under the rules while keeping reductions and holder withdrawal routes. A creator resume after a Risk Council pause requires at least 24 hours and valid risk conditions. The AI agent may be disabled immediately; replacement requires announcement and at least 24 hours.

These arrangements do not remove third-party upgrades, freezes, blacklists, receipt transfer failures, or network limits.

## Other risks

| Type | Potential effect |
|---|---|
| Markets, stablecoins, and issuers | Price decline, depeg, or changes to asset rights |
| AI agents and smart contracts | Authorized trades may lose money; bugs or integration errors may cause losses |
| Data and oracles | Unreliable valuation or blocked deposits and withdrawals |
| Third-party liquidity and governance | Pauses, withdrawal shortages, changed fees, or insolvency |
| LP and borrowing positions | Impermanent loss, variable rates, debt, and liquidation risk beyond simple supply risk |
| Law and eligibility | A feature or transfer may be unavailable |

CRE8 has not completed an independent third-party audit. See [Security and service status](security-and-status.md) and [Risk disclosure](../legal/risk.md).
