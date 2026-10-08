---
description: Separate vault entry, fund-operation, exit performance, and AI credit charges.
---

# Fees

Vault fees and CRE8 AI credits are accounted for separately. The current design has no management fee. Gas, trading, slippage, and underlying protocol costs may still apply.

> This page describes the latest prototype rules. Live creation and deposits are not open. Check rates against the actual vault configuration and transaction-confirmation screen.

## Vault fee rates

| Fee | Current rule | Basis and conditions |
|---|---|---|
| Entry fee | 0.5% | Gross contribution actually used; unused budget is not charged. Creator seed capital also pays it |
| Fund-operation fee | 0.1% | Applicable capital deployments, reductions, and position operations; not every click, approval, or ordinary holder redemption |
| Platform exit performance fee | 10% of positive profit | Based on that address's cost basis for this exit |
| Creator exit performance fee | 0–20% of positive profit | Fixed at creation; total with the platform fee is 10–30% |

Fund-operation fees are measured in fixed 365-day periods beginning at vault initialization. The cumulative charge is limited by a cap of 1% of the latest valid recorded pre-fee NAV. A NAV decline does not recover fees already charged. It is not a guarantee that fees collected remain below 1% of current NAV at every moment, or a rolling 365-day limit.

## Address-specific cost basis and exit profit

Each holding address records its own net actual contributions as cost basis. Partial exits allocate cost proportionally to shares. Cash redemptions charge performance fees on the positive difference between actual liquidation proceeds and the cost basis allocated to that exit. Without a positive difference, no performance fee applies to that exit.

For example, cost basis 100, actual proceeds 120, and a creator rate of 10% give profit of 20. The platform receives 2, the creator receives 2, and the holder receives 116 net. The example ignores smallest-unit rounding. The 100 is net cost basis, not the original payment including entry fees.

Costs are not netted across different vaults, wallets, or all historical exits. The current system does not charge against a pooled unrealized high-water mark or settle fees by issuing fee shares.

## In-kind exits and previews

An in-kind exit with reliable valuation calculates performance fees on the proportional inventory and takes them from those same assets. If reliable pricing is unavailable, the unpriceable fee for that exit is waived to preserve the in-kind route. Token or receipt transfer is still not guaranteed.

Entry may reserve a 1% execution buffer. Unused buffer is refunded; it is not an extra fixed fee. Previews should separately show contribution, entry fee, cost basis, estimated profit, performance fee, and minimum net proceeds. Actual results depend on execution and rounding.

## Other costs and economic interests

Entry and fund-operation fees go to the platform. The platform and creator also charge on positive exit profit, creating potential conflicts in operations, strategy, and promotion. A fee-recipient role does not grant authority to withdraw for holders.

BNB gas, PancakeSwap pool fees and slippage, supply-market costs, and other protocol charges depend on actual operations. Failed transactions may still consume gas. AI conversations and proposals use credits. See [CRE8 AI and credits](../guides/cre8-ai-credits.md) for draft prices and charges.
