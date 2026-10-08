---
description: Understand token approval, deposits, minimum shares, and transaction confirmation.
---

# Depositing assets

You deposit a vault's designated accounting asset to receive shares. The shares received depend on pricing at execution, the entry fee, and the actual contribution. An earlier screen value does not determine the final result.

> Live deposits are not open. This page describes the intended live flow. Connecting a wallet, reading documents, or simulating transactions in the prototype does not open live deposits.

## Before depositing

Verify service and vault availability, eligibility, and network. Read the mandate, actual fees, current caps, and exit conditions. Prepare the accepted accounting token and the network's gas asset.

Names and symbols can be duplicated. Check the network and full token address; tokens with the same name or on different networks are not interchangeable.

## Once live deposits are open

1. **Choose a vault and connect your wallet.** Verify the account and network.
2. **Enter the amount.** Check estimated shares, minimum acceptable shares, and the deadline.
3. **Read the documents.** Read the Fund prospectus and check rules, fees, risks, and eligibility. The deposit entry asks whether you have read it. Choosing to read opens the description and stops that attempt; start again after reading. Continuing only proceeds to preparation or preview, and is not acceptance of live terms or a completed transaction.
4. **Check token approval.** If the current allowance is insufficient, the wallet may request a separate approval transaction. Verify the spender and amount.
5. **Confirm the deposit.** Recheck the vault, token, amount, share recipient, minimum shares, and deadline before signing and sending through your wallet.
6. **Verify the result.** Wait for a verified transaction result, then check assets actually deducted and shares received.

Reading, approval, and deposit are separate steps. A successful approval does not necessarily mean funds have been deposited. A successful simulation does not mean the live transaction succeeded.

## Minimum shares and deadline

**Minimum shares** set the least number of shares you will accept. If the actual result falls below that value, the transaction fails instead of executing on worse terms.

The **deadline** limits when the operation may execute. After it expires, prepare a new transaction using current amounts and minimum shares.

Failed transactions may still incur gas. An approval already completed is not automatically revoked when a later deposit fails.

## Why estimates and results differ

Prices, interest, other deposits or redemptions, and fee settlement can change after preview. An entry fee of 0.5% applies to the gross contribution actually used. The remainder receives shares based on conservative valuation and actual deployment; unused budget is refunded. A nonempty vault may reserve a 1% execution buffer. This is refundable transaction budget, not an additional fixed fee. Precision and rounding also affect shares.

Use minimum shares to express your acceptable result, and verified transaction data to establish what you received.

## When a deposit is blocked

A pause, incomplete deployment, unverified configuration, invalid data, or third-party market conditions can block deposits. A new deposit that would push creator ownership below 2% may also be blocked. Do not substitute an unverified address to bypass checks or transfer funds to someone claiming to unlock access.

If the result is unknown, check the original transaction hash first. A screen timeout is not a reason to repeat the deposit. See the [Agent guide](agents.md) for transaction confirmation.

See [Troubleshooting](../reference/troubleshooting.md) to check network, approval, and market conditions.
