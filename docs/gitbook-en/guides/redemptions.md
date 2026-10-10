---
description: Compare Withdraw as USDT and Withdraw as assets, actual proceeds, liquidity, and failure conditions.
---

# Withdrawals and exits

A withdrawal processes the proportional assets behind your shares. You may convert that share of the holdings into the fund's accounting asset, or receive the original assets and protocol receipts directly.

There is currently no deployment open to live participation. This page describes the design; available routes must be checked against the future fund and market state.

## Two exit routes

| Route | What you may receive | Main conditions |
|---|---|---|
| Withdraw as USDT | The accounting token, such as USDT | Requires market withdrawals and swaps; depends on valuation, liquidity, minimum proceeds, and deadline |
| Withdraw as assets | Proportional idle accounting tokens, holding tokens, and protocol receipts | Does not first convert everything into the accounting token; token and receipt transfers remain subject to third-party restrictions |

Withdraw as USDT pays out the fund's accounting token on the network. It does not promise a bank transfer or fiat withdrawal.

## Withdraw as USDT

Once open, select the shares to withdraw, check estimated proceeds, minimum proceeds, and deadline, check the recipient, and sign.

The system processes your proportional share of the holdings. You receive the matching idle assets and the actual exit proceeds. Swap slippage, exit costs, or losses affect the amount received. You may not be able to sell at the displayed valuation.

If a required market exit, swap, or minimum-proceeds check fails, the whole withdrawal reverts; it is never left half done. A failed transaction can still cost gas.

## Withdraw as assets

This route is an alternative when valuation, swaps, or withdrawals from third-party protocols are difficult. Before signing, review the tokens and receipts you may receive and whether you can handle them later, such as turning them back into the underlying asset or transferring them.

For example, you may receive a lending-market receipt held by the fund. Getting its underlying asset back still requires available liquidity at the original protocol and permitted transfers there. The receipt may have no trading market, or may be impossible to turn back into the underlying because of a pause, insolvency, or token restrictions.

Withdraw as assets does not promise a fixed amount of the accounting asset. Transfer failures, insufficient gas, and network issues can also prevent it.

## Fees on exit

The performance fee is charged only on your own realized profit when you withdraw: CRE8 10% plus the creator's 0–20% (fixed at creation; default 10%), at most 30%. No profit, no fee. For Withdraw as USDT, profit is based on your address's cost basis for this withdrawal and the actual sale proceeds. When valuation is reliable, Withdraw as assets settles fees against the value of your proportional share and takes the fees from those same assets. It is not automatically fee-free.

When valuation is unavailable, the current design waives the performance fee that cannot be priced for that withdrawal as assets, to keep the route open. This does not make receipts immediately usable or promise that the transaction succeeds.

There is no withdrawal fee. DEX fees and slippage go to the DEX, not CRE8.

## Pauses and lockups

When a fund shows Deposits paused with its reason, new deposits and new deployment stop. By design, holders can still withdraw their proportional share and risk can still be reduced. Third-party protocol, token, or network restrictions may still affect these operations.

Ordinary holders have no fixed lockup. Creators also have no fixed time lock, but while others remain they must keep at least 2% of circulating shares after withdrawing. The last actual holder may exit completely.

After the last actual holder exits, the current design closes the fund permanently to new deposits. A final Withdraw as USDT may also deliver remaining original assets or receipts. Precision and rounding can leave small residuals; recovery of every smallest token unit is not promised.

## If you cannot exit

Check shares, creator minimum ownership, recipient, gas, deadline, minimum proceeds, and third-party market state. Keep the original hash and check an unknown result rather than submitting again.

Read [Risk controls and remaining risks](../product/risk-controls.md) and [Risk disclosure](../legal/risk.md).

For specific errors or unknown results, see [Troubleshooting](../reference/troubleshooting.md).
