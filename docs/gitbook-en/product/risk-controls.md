---
description: Understand the limits of allocation caps, idle assets, agent loss protection, and stop orders.
---

# Risk controls and remaining risks

Designated assets and markets, allocation caps, idle requirements, and permissions limit new risk. They do not guarantee returns, a maximum loss, or exit timing. You may lose your entire principal.

## Caps and idle assets

The current basic vault supports at most 7 distinct underlying-asset entries, each with one designated destination. Caps total at most 95%. After new agent deployment, at least 5% of NAV must remain in idle accounting assets.

Market moves and exits change later ratios. The 5% is not a continuous cash guarantee. Creators may tighten caps immediately; increases require announcement and at least 24 hours. Tightening does not automatically sell, and market movement may push existing positions above caps.

## Agent-operation loss protection

Protection records positive NAV losses caused by the agent's capital actions, comparing before and after under the same prices. This differs from holding losses caused by market price moves. The default and platform maximum are 5%. Observations cover roughly the last 24 hours, with the oldest record potentially retained for almost an extra hour.

**An action crossing the threshold completes before the agent is disabled.** The 5% is therefore not a hard cap on a single action, cumulative loss, or total vault loss. It is not continuous market monitoring or guaranteed stop-loss execution. Disabling the agent differs from pausing the entire vault; holder exits and Manager reductions retain their own routes.

## Stops, profit targets, and continuous execution

The prototype has per-asset and personal stop-loss and take-profit flows. Verify trigger scope and recipient separately. Target prices do not guarantee execution prices. Invalid market data, delays, insufficient liquidity, or execution-service interruptions may delay or prevent exits.

See [Strategy and feature status](strategy-status.md) for additional multi-asset planning and implementation. Defining conditions does not mean every mode is deployed or that a trigger guarantees execution.

## Pauses and agent replacement

The Manager or Risk Council may pause under the rules while retaining reductions and holder exit routes. A Manager resume after a Risk Council pause requires at least 24 hours and valid risk conditions. The execution agent may be disabled immediately; replacement requires announcement and at least 24 hours.

These arrangements do not remove third-party upgrades, freezes, blacklists, receipt transfer failures, or network limits.

## Other risks

| Type | Potential effect |
|---|---|
| Markets, stablecoins, and issuers | Price decline, depeg, or changes to asset rights |
| Agents and smart contracts | Authorized trades may lose money; bugs or integration errors may cause losses |
| Data and oracles | Unreliable valuation or blocked entry and exits |
| Third-party liquidity and governance | Pauses, withdrawal shortages, changed fees, or insolvency |
| LP and borrowing plans | Impermanent loss, variable rates, debt, and liquidation risk beyond simple supply risk |
| Law and eligibility | A feature or transfer may be unavailable |

CRE8 has not completed an independent third-party audit. See [Security and service status](security-and-status.md) and [Vault risk disclosure](../legal/risk.md).
