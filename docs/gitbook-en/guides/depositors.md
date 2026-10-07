---
description: Evaluate a vault's rules, managers, fees, data, and exit options.
---

# Depositor guide

Choose a vault whose operating scope and exit conditions you understand. Vaults with the same assets or similar performance figures may have different creators, Operators, allocation caps, and third-party risks.

> Example vaults and performance are simulated. They do not establish actual management ability and cannot accept live funds.

## Evaluate a vault

| What to check | Questions to answer |
|---|---|
| Status and network | Is this an example, test environment, or verified live vault? Which network does it use? |
| Accounting and holding assets | What do you deposit? What can it buy? Are there price or depeg risks? |
| Designated markets | Which protocols receive assets? How are receipts redeemed? |
| Creator and Operator | Who sets the strategy? Who executes autonomously? Who may pause it? |
| Allocation caps | What is the maximum allocation per asset? Are changes pending? |
| Fees | What is the total performance fee? What counts as chargeable profit? What other costs apply? |
| Performance data | Is it simulated, estimated, or actual history? What period is covered, and when was it updated? |
| Exits | What assets can you receive? What happens if liquidity or valuation fails? |

## What you receive

Depositing the accounting asset gives you shares recorded by the vault. They let you participate in asset value and redemption results under the rules. Gains and losses both affect share value.

Shares are nontransferable and do not protect principal. Each holding address has a separate net-contribution cost basis for exit performance fees. See [Fees](../product/fees.md).

## Who acts after your deposit

The Operator uses its own signer within the vault's designated scope. Depositors do not approve every subsequent trade or supply operation.

An individual depositor cannot replace the vault Operator. The creator can disable or replace the execution agent through the applicable governance process and delay. Revoking a token allowance in your wallet affects future access to assets in that wallet; it does not revoke the Operator's authority over assets already deposited in the vault.

The Operator role does not grant special authority to withdraw for you. If you separately authorize someone to handle your vault shares, check that authorization independently.

## What to monitor

Check holdings, allocations and caps, data timestamps, pause status, and announced changes that are not yet effective. When data is unavailable, do not treat blanks, stale values, or example charts as the current asset position.

Live performance records have not been established. Simulated figures only illustrate how to read the interface. See [NAV and performance](../product/nav-and-performance.md).

## Read next

- [Depositing assets](deposits.md): allowances, deposits, and result verification.
- [Redemptions and exits](redemptions.md): cash and in-kind routes.
- [Before you use CRE8](../legal/before-you-use.md): eligibility, permissions, fees, and risks.
