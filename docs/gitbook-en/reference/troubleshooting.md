---
description: Check network, approvals, data, markets, transaction terms, and outcome status.
---

# Troubleshooting

First establish whether you are using an example, test environment, or live deployment. As of 2026-10-10, live creation and deposits are not open. Wallet settings cannot resolve the prototype's incomplete deployment or legal arrangements.

## Check by issue

| Issue | What to inspect | Next step |
|---|---|---|
| Wrong network | Account, network, and selected asset | Switch to the operation's network and read again; mainnet and testnet assets are not interchangeable |
| No available configuration | Whether the complete asset/destination combination is supported | Keep the design; do not substitute another protocol address as the same market |
| Insufficient assets or gas | Available tokens, creator minimum ownership, and gas asset | BNB Smart Chain needs BNB on that network; recheck the amount |
| Approval succeeded but no deposit | Whether only the approval completed | Check approval and deposit separately; confirm the deposit was not sent before continuing |
| Deposit or deployment blocked | Whether deposits are paused and why, caps, idle requirements, and market limits | Read current state; stop new-risk activity when data or conditions fail |
| Share price or asset price unavailable | Timestamp, source, and completeness of positions | Wait for verifiable data; if withdrawing, assess Withdraw as assets and its limits |
| Minimum proceeds not met | Current estimates, slippage, liquidity, and fees | Reassess the new price before preparing; do not blindly lower the minimum merely to execute |
| Expired transaction | Deadline and signing time | Prepare against new state instead of reusing the old preview |
| Withdraw as USDT failed | Which market cannot withdraw or swap, and whether minimum proceeds are met | Verify the failure, then assess Withdraw as assets; protocol receipts may still not be withdrawable from their protocol |
| Withdraw as assets failed | Token/receipt transfer restrictions, gas, and recipient | Establish external restrictions; choosing Withdraw as assets does not remove every limit |
| Unknown transaction result | Original hash and operation details | Query the original transaction; do not resubmit automatically |
| Transaction included but no purchase completed | Actual execution and pause state | Check for a risk-check-only or blocked-deployment outcome; do not record a trade |

## CRE8 AI and credit issues

| Issue | Action |
|---|---|
| Purchase not credited | Check the original order and transaction, and wait for final confirmation; do not pay again |
| Insufficient credits | Balance must cover the displayed maximum; add credits before starting or use fund actions directly |
| Request already running | Wait and check the original request; do not create duplicate tasks |
| No AI delivery | Current credit mode charges nothing without delivery; keep task and balance records |
| Revision requires credits | Each delivered revision is charged separately by usage; check its maximum and original scope |
| AI unavailable or free allowance exhausted | Direct queries, withdrawals, and authority management do not depend on credits; fund and service conditions still apply |

See [CRE8 AI and credits](../guides/cre8-ai-credits.md).

## Slippage and price impact

**Price impact** is the effect of trade size on achievable price. Larger swaps in shallow liquidity may receive worse prices.

**Slippage** is the difference between preview and actual execution, including market moves or confirmation delay. Both can reduce proceeds. Relaxing minimum output does not eliminate them.

Failed transactions may still incur gas. Check the original result before preparing again. Changes to wallet, network, or terms require rechecking prior reading and transaction confirmations.

## Records to keep

Keep network, fund, action, amount, time, original hash, and screen errors. Never include private keys, seed phrases, or unnecessary personal data in reports or chat.

Read [Depositing assets](../guides/deposits.md), [Withdrawals](../guides/redemptions.md), and [Agent confirmations](../guides/agents.md).
