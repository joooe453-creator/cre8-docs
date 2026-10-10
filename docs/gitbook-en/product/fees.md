---
description: Separate the creation, deposit, and performance fees from CRE8 AI credit charges.
---

# Fees

Fund fees and CRE8 AI credits are accounted for separately. A fund has three fees: a creation fee, a deposit fee, and a performance fee. There is no annual fee, management fee, operation fee, or withdrawal fee. Gas, DEX fees, slippage, and underlying protocol costs may still apply.

> This page describes the latest prototype rules. Live creation and deposits are not open. Check rates against the actual fund configuration and transaction-confirmation screen.

## Fund fee rates

| Fee | Rate | Who pays | To whom |
|---|---|---|---|
| Creation fee | 1% of the creator's seed, charged once when the fund goes live | Creator | CRE8 |
| Deposit fee | 1% of every deposit (not the seed), on the gross amount actually used; unused budget is refunded | Whoever deposits, including the creator's later deposits | CRE8 |
| Performance fee | 10% of profit (CRE8, fixed) + 0–20% (creator, fixed at creation; default 10%), at most 30%. Charged only on the holder's own realized profit when they withdraw; no profit, no fee | Holder | CRE8 and creator |

The seed is 100 accounting-asset units. With the 1% creation fee, the standard net contribution is 99 units. The seed pays no deposit fee on top.

On screen, the performance fee is shown as one total, for example "Performance fee 25% (CRE8 10% + creator 15%)".

## Address-specific cost basis and withdrawal profit

Each holding address records its own net actual contributions as cost basis. Partial withdrawals allocate cost proportionally to shares. When you withdraw as USDT, the performance fee applies to the positive difference between actual sale proceeds and the cost basis allocated to that withdrawal. Without a positive difference, no performance fee applies to that withdrawal.

For example, cost basis 100, actual proceeds 120, and a creator rate of 10% give profit of 20. CRE8 receives 2, the creator receives 2, and the holder receives 116 net. The example ignores smallest-unit rounding. The 100 is net cost basis, not the original payment including the deposit fee.

Costs are not netted across different funds, wallets, or all historical withdrawals. The current system does not charge against a pooled unrealized high-water mark or settle fees by issuing fee shares.

## Withdrawing as assets and previews

When you withdraw as assets and reliable valuation is available, the performance fee is calculated on the proportional inventory and taken from those same assets. If reliable pricing is unavailable, the unpriceable fee for that withdrawal is waived to keep the "Withdraw as assets" route open. Token or receipt transfer is still not guaranteed.

A deposit quote may reserve a 1% execution buffer. Unused buffer is refunded; it is not a fee. Previews should separately show the deposit, deposit fee, cost basis, estimated profit, performance fee, and minimum net proceeds. Actual results depend on execution and rounding.

## Other costs and economic interests

Creation and deposit fees go to CRE8. CRE8 and the creator also share the performance fee on positive withdrawal profit, creating potential conflicts in operations, plans, and promotion. A fee-recipient role does not grant authority to withdraw for holders.

BNB gas, DEX fees and slippage (such as PancakeSwap pool fees), supply-market costs, and other protocol charges depend on actual operations. DEX fees and slippage go to the DEX, not CRE8. Failed transactions may still consume gas. AI conversations and proposals use credits. See [CRE8 AI and credits](../guides/cre8-ai-credits.md) for draft prices and charges.
