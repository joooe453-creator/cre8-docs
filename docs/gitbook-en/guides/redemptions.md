---
description: Compare cash and in-kind redemptions, actual proceeds, liquidity, and failure conditions.
---

# Redemptions and exits

Redemption processes the proportional assets corresponding to your shares. You may convert that inventory into the vault's accounting asset or receive the original assets and protocol receipts directly.

There is currently no deployment open to live participation. This page describes the design; available routes must be checked against the future vault and market state.

## Two exit routes

| Route | What you may receive | Main conditions |
|---|---|---|
| Cash redemption | The accounting token, such as USDT | Requires market withdrawals and swaps; depends on valuation, liquidity, minimum proceeds, and deadline |
| In-kind redemption | Proportional idle accounting tokens, holding tokens, and protocol receipts | Does not first convert everything into the accounting token; token and receipt transfers remain subject to third-party restrictions |

“Cash” means the vault's accounting token. It does not promise a bank transfer or fiat withdrawal.

## Cash redemption

Once open, select shares to redeem, check estimated proceeds, minimum proceeds, and deadline, verify the recipient, and sign.

The system processes your proportional inventory. You receive the corresponding idle assets and actual exit proceeds. Swap slippage, exit costs, or losses affect the amount received. The displayed valuation does not guarantee sale at that price.

If a required market exit, swap, or minimum-proceeds check fails, the entire redemption reverts rather than leaving a partially completed redemption. A failed transaction can still consume gas.

## In-kind redemption

This route provides an alternative when valuation, swaps, or third-party cash withdrawals are difficult. Before signing, review the tokens and receipts you may receive and whether you can handle later redemption or transfer.

For example, you may receive a lending-market receipt held by the vault. Redeeming its underlying still requires available funds and permitted transfers and redemptions at the original protocol. The receipt may lack a trading market or be unredeemable due to a pause, insolvency, or token restrictions.

An in-kind exit does not promise a fixed accounting-asset amount. Transfer failures, insufficient gas, and network issues can also prevent it.

## Fees on exit

Cash exit performance fees apply to positive profit based on that address's cost basis for this exit and actual liquidation proceeds: platform 10% plus creator 0–20%. An in-kind exit with reliable valuation settles fees against the proportional inventory's value and allocates fees from the same assets. It is not automatically fee-free.

When valuation is unavailable, the current design waives the unpriceable performance fee for that in-kind exit to preserve the exit route. This does not make receipts immediately redeemable or guarantee transaction success.

## Pauses and lockups

A vault pause blocks new deposits and new deployment while retaining proportional holder exits and risk reduction by design. Third-party protocol, token, or network restrictions may still affect these operations.

Ordinary depositors have no fixed product lockup. Creators also have no fixed time lock, but must retain at least 2% of circulating shares after redemption while others remain. The last actual holder may exit completely.

After the last actual holder exits, the current design closes the vault permanently to new cohorts. A final cash exit may also deliver remaining original assets or receipts. Precision and rounding can leave small residuals; recovery of every smallest token unit is not promised.

## If you cannot exit

Check shares, creator minimum ownership, recipient, gas, deadline, minimum proceeds, and third-party market state. Preserve the original hash and check an unknown result rather than submitting again.

Read [Risk controls and remaining risks](../product/risk-controls.md) and [Vault risk disclosure](../legal/risk.md).

For specific errors or unknown results, see [Troubleshooting](../reference/troubleshooting.md).
