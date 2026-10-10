---
description: Common CRE8 terms for funds, roles, fees, performance and withdrawals.
---

# Glossary

| Term | Meaning in CRE8 |
|---|---|
| Fund | Assets that holders own shares of, run under rules the contract enforces. Each fund is a non-custodial vault contract |
| Thesis | The one-sentence idea a fund is built around, shown at the top of its page |
| Mandate | What a fund may never break: the assets it may hold, each asset's cap and the protocols it may use. The contract enforces it |
| Plan | What a fund does automatically: when to buy, how often to rebalance, when to take profit |
| Run by | Who runs the fund day to day: `Plan` or `AI agent` |
| Creator | Opens the fund, sets its mandate and fixed performance fee, appoints the Operator, and manages caps and pauses within their authority |
| Holder | Anyone who holds shares of a fund |
| CRE8 AI | CRE8's assistant: helps draft and compare funds and never touches your money |
| AI agent | The creator's own AI, which runs a fund shown as "Run by: AI agent" within its mandate |
| Operator | The designated execution role using its own signer within the rules |
| Risk Council | A risk-management role that can pause new-risk activity |
| Shares | Units recording your stake in a fund and your right to withdraw; nontransferable |
| Creator stake | The part of the fund the creator holds; at least 2% while other holders remain |
| Cost basis | Net contributions recorded per holding address, allocated proportionally on partial withdrawals |
| CRE8 AI credits | Account units for chat and planning services; not transferable or withdrawable |
| Accounting asset | Token used to express the share price, take deposits and pay out "Withdraw as USDT" |
| Underlying | Actual asset corresponding to a position or protocol receipt |
| Market | The specific protocol market where an asset may trade or be lent |
| Lending | Supplying assets to a designated lending market or third-party vault to earn interest |
| Receipt | Evidence of a third-party position, such as a lending receipt or vault share |
| Share price | Value of one share in the accounting asset, affected by assets, fees and share changes. Technical documents call it NAV per share (NAV: net asset value) |
| Fund size | Total value of a fund's assets |
| Holdings | What a fund holds and in what proportion |
| Cap | Maximum share of fund value an asset may reach when a position is added |
| Target weight | Allocation a plan aims for; does not alone establish automatic execution |
| Idle reserve | Accounting assets not deployed into third-party positions |
| Creation fee | 1% of the creator's seed, charged once when the fund goes live |
| Deposit fee | 1% of each deposit (the seed excepted), paid to CRE8 |
| Performance fee | Fee on that address's positive profit for the current withdrawal: CRE8 10% plus the creator's 0–20% |
| Seed | Creator's initial 100 accounting-asset units |
| Withdraw as USDT | Sells your proportional holdings for the accounting asset; not a bank cash-out |
| Withdraw as assets | Delivers your proportional holdings, receipts and idle assets directly |
| Fund facts | A fund's fees, rules version, creator stake and data sources |
| Deposits paused | New deposits are stopped, always with a stated reason; withdrawals stay open |
| Slippage | Difference between expected and actual execution price |
| Price impact | Effect of a trade's size on its achievable price, depending on pool liquidity |
| Minimum received | Least acceptable operation result; failure to meet it fails the transaction |
| Deadline | Latest time the transaction may execute |
| Allowance | Authorization for an address to use particular tokens or shares; check each separately |
| Oracle | Source of external data such as asset prices |
| APR / APY | Annualized rates some protocols publish; CRE8 does not show them for funds. Check the source's method and compounding |
| Performance | Change in share price over 7D, 30D, 90D or All, after fees |
| Max drop | Decline from a high to a low over the chosen period |
| Simulated | Data generated for demonstration or research, not live onchain performance |
| Stale | Data beyond its validity period, not current state |
| MCP | Interface for agent/tool information exchange; CRE8 transaction preparation does not collect keys, sign, or broadcast |
| Non-custodial | CRE8 does not hold holders' keys; assets in a fund remain subject to its rules and the Operator's actions |

Definitions aid reading. Check actual conditions in [Product rules](../product/permissions.md), [Fees](../product/fees.md), and [Draft terms](../legal/terms.md).
