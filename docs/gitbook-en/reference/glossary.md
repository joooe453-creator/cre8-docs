---
description: Common CRE8 terms for vaults, permissions, returns, and exits.
---

# Glossary

| Term | Meaning in CRE8 |
|---|---|
| Vault | An arrangement where participants contribute and hold assets under shared rules |
| Mandate | Permitted assets, markets, operations, and allocation limits |
| Creator / Manager | Defines scope, appoints the Operator, and manages caps and pauses within its authority |
| Agent | Software assisting analysis, preparation, or execution; permissions depend on its role and vault settings |
| Operator | The designated execution role using its own signer within the rules |
| Risk Council | A risk-management role that can pause new-risk activity |
| Shares | Units recording participation and redemption rights; currently nontransferable |
| Cost basis | Net contributions recorded per holding address, allocated proportionally on partial exits |
| CRE8 AI credits | Account units for chat and planning services; not transferable or withdrawable |
| Accounting asset | Token used to express NAV, deposit, and settle cash redemptions |
| Underlying | Actual asset corresponding to a position or protocol receipt |
| Market | The specific protocol market where an asset may trade or be supplied |
| Supply | Depositing assets into a designated lending market or third-party vault |
| Receipt | Evidence of a third-party position, such as a lending receipt or vault share |
| NAV | Estimated vault assets expressed in the accounting asset |
| NAV per share | Valuation corresponding to shares, affected by assets, fees, and share changes |
| TVL | Total value of assets in a vault |
| Cap | Maximum allowed share of vault value for an asset when adding deployment |
| Target weight | Desired allocation; does not alone establish automatic execution |
| Idle reserve | Accounting assets not deployed into third-party positions |
| Performance fee | Fee on that address's positive profit for the current exit |
| Seed | Creator's initial 100 accounting-asset units |
| Cash redeem | Converts proportional inventory into the accounting token, without promising bank cash withdrawal |
| In-kind redeem | Delivers proportional original holdings, receipts, and idle assets |
| Slippage | Difference between expected and actual execution price |
| Price impact | Effect of a trade's size on its achievable price, depending on pool liquidity |
| Minimum received | Least acceptable operation result; failure to meet it fails the transaction |
| Deadline | Latest time the transaction may execute |
| Allowance | Authorization for an address to use particular tokens or shares; check each separately |
| Oracle | Source of external data such as asset prices |
| APR / APY | Annualized rate or yield; check source methodology and compounding |
| Return | Value change over a selected period; check fees and data methodology |
| Annualized return | Observed period return expressed annually, not a forecast |
| Drawdown | Decline from a high to a low over the chosen interval |
| Simulated | Data generated for demonstration or research, not live onchain performance |
| Stale | Data beyond its validity period, not current state |
| MCP | Interface for agent/tool information exchange; CRE8 transaction preparation does not collect keys, sign, or broadcast |
| Non-custodial | CRE8 does not hold depositor keys; deposited assets remain subject to common rules and Operator actions |

Definitions aid reading. Check actual conditions in [Product rules](../product/permissions.md), [Fees](../product/fees.md), and [Draft terms](../legal/terms.md).
