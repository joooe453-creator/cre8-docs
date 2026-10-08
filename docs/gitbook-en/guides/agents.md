---
description: How agents prepare, simulate, request signatures, and verify operations within their permissions.
---

# Agent guide

CRE8 agent tools read vault state, check conditions, prepare transactions, and simulate outcomes. MCP returns unsigned transaction information. It does not collect private keys, sign transactions, or broadcast them for your wallet.

> Live vaults and live MCP availability have not been verified as open. Examples or downloads do not establish an operational live service. This page explains the intended workflow.

## AI model

CRE8 AI uses **Anthropic Claude Sonnet 5.5** for conversations and proposal generation, including vault comparisons, vault design, and strategy reviews. Model output does not grant transaction or Operator permissions.

For chat, plans, and usage charges, see [CRE8 AI and credits](cre8-ai-credits.md). Routine strategy execution follows approved rules without calling the chat model or consuming AI credits each time.

## Two distinct use cases

A **depositor's assistant** can explain a vault and prepare deposits or exits. That depositor's wallet confirms the transactions.

The **vault Operator** is appointed by the creator and allocates assets using its own signer within a fixed scope. Depositors do not approve every subsequent action.

An agent's ability to explain a vault does not grant it that vault's Operator permissions.

## Operation sequence

### 1. Read state

Check network, vault, roles, assets, markets, caps, pause status, fees, and pending changes. Review timestamps, availability, and deployment status.

Examples, undeployed configurations, or unverifiable setups can be read or designed, but are not executable live operations.

### 2. Prepare a permitted action

Prepare creation, deposit, exit, allocation, reduction, or risk checks according to the role and mandate. Specify assets, amount, recipient, minimum acceptable result, and deadline.

Strategy text or natural-language instructions do not expand permissions. If a designated destination is unavailable, the agent cannot silently substitute another market.

### 3. Check and simulate

Use the latest available state. Simulation previews conditions at that time; it does not reserve a risk state, execute a trade, or lock a price.

Recheck after changes to the wallet, network, asset, amount, or terms. Markets may change after simulation, so the live result may differ.

### 4. Have an authorized wallet sign

Before signing, verify action, network, asset, amount, recipient, spender and allowance, minimum proceeds, and deadline. The signer must have authority for this operation.

Never paste private keys or seed phrases into chat, websites, or document-reading fields. MCP transaction preparation does not need them.

### 5. Verify the actual outcome

A hash identifies a trackable transaction; it does not alone establish completion. Verify the transaction and actual action, then shares or assets received and updated state.

For example, a deployment check may retain a pause outcome without deploying funds. An agent should not record a completed purchase merely because a transaction was included onchain.

## Unknown results

Preserve the original hash and operation details, and query that same transaction. Establish whether it is pending, failed, completed, or needs further checking due to replacement or network state.

A timeout or temporarily missing transaction does not justify an automatic resubmission. Repeating it may duplicate creation, deposits, or exits. After confirmed failure, prepare again against current state.

## Agent explanations and commitments

Clearly distinguish examples, estimates, simulations, pending confirmation, and verified results. Do not present unsupported plans as executable features or guarantee principal, returns, or exit timing.

See [Supported protocols and operations](../product/integrations.md) and [Roles and permissions](../product/permissions.md).
