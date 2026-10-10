---
description: Understand token approval, deposits, minimum shares, and transaction confirmation.
---

# Depositing assets

You deposit a fund's designated accounting asset to receive shares. The shares you receive depend on the share price at execution, the deposit fee, and the amount actually used. An earlier screen value does not set the final result.

> Live deposits are not open. This page describes the intended live flow. Connecting a wallet, reading documents, or simulating transactions in the prototype does not open live deposits.

## Before depositing

Check that the service and the fund are open, your eligibility, and the network. Read the mandate, actual fees, current caps, and withdrawal conditions. Prepare the accepted accounting token and the network's gas asset.

Names and symbols can be duplicated. Check the network and full token address; tokens with the same name or on different networks are not interchangeable.

## Once live deposits are open

1. **Choose a fund and connect your wallet.** Check the account and network.
2. **Enter the amount.** Check estimated shares, minimum acceptable shares, and the deadline.
3. **Read the documents.** Read Fund facts and check rules, fees, risks, and eligibility. The deposit entry asks whether you have read it. Choosing to read opens Fund facts and stops that attempt; start again after reading. Continuing only moves on to preparation or preview. It is not acceptance of live terms or a completed transaction.
4. **Check token approval.** If the current allowance is too low, the wallet may ask for a separate approval transaction. Check the spender and amount.
5. **Confirm the deposit.** Recheck the fund, token, amount, share recipient, minimum shares, and deadline before signing and sending through your wallet.
6. **Check the result.** Wait for a verified transaction result, then check the assets actually deducted and the shares received.

Reading, approval, and deposit are separate steps. A successful approval does not necessarily mean money has been deposited. A successful simulation does not mean the live transaction succeeded.

## Minimum shares and deadline

**Minimum shares** set the least number of shares you will accept. If the actual result falls below that value, the transaction fails instead of executing on worse terms.

The **deadline** limits when the operation may execute. After it expires, prepare a new transaction using current amounts and minimum shares.

Failed transactions may still cost gas. An approval already completed is not automatically revoked when a later deposit fails.

## Why estimates and results differ

Prices, interest, other deposits or withdrawals, and fee settlement can change after preview. A 1% deposit fee applies to the gross amount actually used; unused budget is refunded. The rest receives shares based on conservative valuation and actual deployment. A fund that already holds assets may reserve a 1% execution buffer. This is refundable transaction budget, not a fee. Precision and rounding also affect shares.

Use minimum shares to state the result you accept, and verified transaction data to confirm what you received.

## When a deposit is blocked

Deposits paused (the fund shows the reason), incomplete deployment, unverified configuration, invalid data, or third-party market conditions can block deposits. A new deposit that would push creator ownership below 2% may also be blocked. Do not use an unverified address to get around checks, and do not send money to anyone who claims they can unlock access.

If the result is unknown, check the original transaction hash first. A screen timeout is not a reason to repeat the deposit. See the [Agent guide](agents.md) for transaction confirmation.

See [Troubleshooting](../reference/troubleshooting.md) to check network, approval, and market conditions.
