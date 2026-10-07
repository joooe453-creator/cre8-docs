---
description: Which protocol operations exist in the prototype and which remain planned or unsupported.
---

# Supported protocols and operations

CRE8 defines execution scope through complete asset and market combinations. Showing a protocol in the interface does not enable every market or operation it offers.

> The table describes prototype implementation, not a live service list. No verified deployment accepts live funds. Networks and markets must be checked individually.

## Current implementation scope

| Protocol or destination | Operation | What to note |
|---|---|---|
| Token holdings | Hold approved assets | Tokens retain price, issuer, and transfer risks |
| PancakeSwap V3 | Swap a fixed input into or out of designated assets through specified direct pools | Basic swaps do not support arbitrary routing or all PancakeSwap features; V3 LP is a separate position prototype |
| Venus | Supply to and withdraw from designated markets | This supply entry excludes borrowing; separate debt positions need independent checks |
| Designated Lista third-party vaults | Deposit into and redeem specified vault shares | Does not enable every Lista vault, loan, or staking feature |
| Aave V3 | Supply to and withdraw from designated markets | This supply entry excludes borrowing; separate debt positions need independent checks |

Caps, pauses, liquidity, and governance changes may temporarily block a lending market or third-party vault. Approved combinations still need checks for each operation.

## How protocols are used

### Lista: designated third-party vaults

CRE8 may supply selected assets to approved Lista vaults and receive their shares. Those vaults may allocate into multiple lending markets. Assess their curator, market choices, and liquidity in addition to Lista protocol risk.

Fixing a Lista vault does not freeze its underlying allocations. Management and governance can affect capacity, valuation, and exits. An in-kind redemption may deliver its third-party shares.

Third-party reading: [Lista Lending Earn](https://docs.bsc.lista.org/user-guide/lista-lending/lista-lending-earn), [Third-Party Vault Risk Management](https://docs.bsc.lista.org/introduction/lista-lending/third-party-vault-risk-management).

### Aave V3: designated supply markets

CRE8's supply scope covers supplying to and withdrawing from specified Aave V3 markets, excluding borrowing in this flow. Supply rates, caps, pauses, and available withdrawal liquidity affect operations.

A recorded supply position does not guarantee sufficient unborrowed assets for withdrawal. In-kind exits may deliver receipts whose later redemption still depends on the market.

Aave documentation also covers V4 and other products. Check the version; this page does not expand CRE8's V3 scope.

Third-party reading: [Supply Tokens](https://www.aave.com/help/supplying/supply-tokens), [Withdraw Tokens](https://www.aave.com/help/supplying/withdraw-tokens).

### PancakeSwap V3: designated swap markets

CRE8 swaps between the accounting asset and selected holdings through designated direct pools. Pool fees, liquidity, price impact, and slippage affect proceeds.

Check the actual pool's rate. Do not assume a universal PancakeSwap fee or treat its interface routing and Auto Slippage as CRE8 features. Failure to meet minimum output can fail the trade while consuming gas.

Third-party reading: [Token Swaps](https://docs.pancakeswap.finance/trade/pancakeswap-exchange/trade), [Slippage explanation](https://docs.pancakeswap.finance/trading-tools/pancakeswap-auto-slippage).

### Venus: designated supply markets

CRE8 supplies to and redeems from specified Venus markets. Supply creates protocol receipts whose value reflects the underlying and market income. An in-kind exit may deliver these receipts.

Supply caps limit new deposits; available cash and pauses may affect withdrawals. Borrowing, collateral, and leverage guides in Venus documentation do not mean those operations are enabled in this supply flow.

Third-party reading: [Supplying and borrowing](https://docs-v4.venus.io/guides/supply-borrow), [Risk Management](https://docs-v4.venus.io/risk/risk-management).

## Choosing assets and destinations

Creators first choose assets, then holding, third-party vaults, or supply destinations. The system checks whether the complete combination fits a reviewed configuration.

Identical names do not establish identical addresses, and different networks cannot share one configuration. Finding an asset, exporting a design, or matching a name does not make a live vault available.

## Other capabilities and current progress

Buy-once, scheduled and dip buying, and some rebalancing have basic implementations. Separate debt and PancakeSwap V3 LP prototypes also exist. This does not establish that all modes can be combined in one vault or have completed live acceptance.

See [Strategy and feature status](strategy-status.md) for multi-asset strategies, BNB staking, and borrowing-to-supply plans and branch progress. Stock and RWA issuers, pricing, depth, and eligibility require individual review. Aster accounts are a separate integration, with balances excluded from vault NAV. Futures and perpetuals are outside this round's vault strategies.

## Branding and underlying risk

Names, logos, and integrations do not imply protocol endorsement of CRE8, creators, strategies, or principal safety. An underlying audit does not mean CRE8's integration or individual vault has been independently audited.

Read [Security and service status](security-and-status.md).
