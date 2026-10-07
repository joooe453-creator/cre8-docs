---
description: Distinguish NAV, actual redemption proceeds, historical returns, protocol rates, and simulated performance.
---

# NAV and performance

NAV expresses estimated vault assets in the accounting asset. Share value reflects assets, accrued income, fees, and share supply, and changes with markets and operations.

> Marketplace and example-vault holdings, performance, and history are simulated. CRE8 has not provided verified live vault performance records.

## What each figure means

| Figure | Meaning | What to check |
|---|---|---|
| NAV / share value | Valuation based on available assets and price data | Not a guaranteed execution or redemption price |
| Estimated redemption | Proceeds estimated from current holdings and data | May differ from actual proceeds; check the minimum |
| Period return | Change in share value over a selected period | Fee treatment, period, and whether data is simulated |
| Annualized return | A historical return expressed on an annual scale | Not a forecast; annualizing short periods can magnify changes |
| Protocol APY / APR | An underlying market's interest or yield measure | Variable; not the whole vault's net return |
| TVL | Total value of assets in the vault | Growth may be new deposits rather than strategy profit |

## Reading performance charts

Choose a period, then check data type, source, and timestamp. 7D, 30D, 90D, and All cover different intervals. Short-term changes can differ from longer-term outcomes.

For example, a fee-adjusted share value moving from 1.00 to 1.05 represents approximately 5% return over that period. New deposits can increase total assets and should not be counted as share returns.

This illustrates reading a chart. Current examples use simulated share values and fees, not onchain performance or evidence of executed trades.

**Maximum drawdown** describes the decline from a high to a low over the selected data interval. It depends on complete data for that period. It is not a future maximum-loss guarantee and differs from agent-operation loss protection.

## Valuation versus proceeds

Asset prices, receipt values, interest, and available liquidity change. Valuation prices may differ from actual swap prices; exits can incur slippage, trading costs, or third-party fees.

An in-kind exit may deliver receipts. Displayed NAV does not establish immediately redeemable cash.

## Missing or stale data

Missing prices, holdings, or market state may prevent valuation and block some deposits or new deployment. The last successful reading describes only its own timestamp.

Keep Unavailable, Stale, and incomplete periods visible in your interpretation. Missing values are not zero returns, and protocol APY should not be substituted for vault performance.

## Supply rates and additional rewards

Check whether a market rate represents supply interest, additional token rewards, or a combination. Rewards may have eligibility, claim, lockup, or expiry conditions. Do not assume every vault receives them or includes them in share value.

Supply rates change with utilization. A high rate does not establish available deposit capacity or withdrawal liquidity; review market status as well.

## Your own profit and loss

Different deposit, additional-contribution, and exit times mean your results may differ from a vault's period return. Check your contributions, share changes, actual redemptions, and transaction costs.

Live historical sources, coverage, and presentation will be updated when confirmed. The prototype has historical-data processing, but implementation is not a live performance record. Cost basis and exit fees are address-specific; vault charts do not replace your actual net profit or loss.
