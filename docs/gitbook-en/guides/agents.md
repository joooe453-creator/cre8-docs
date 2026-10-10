---
description: How agents prepare, simulate, request signatures, and verify operations within their permissions.
---

# Agent guide

CRE8 agent tools read fund state, check conditions, prepare transactions, and simulate outcomes. MCP returns unsigned transaction information. It does not collect private keys, sign transactions, or broadcast them for your wallet.

> Live funds and live MCP availability have not been verified as open. Examples or downloads do not show an operational live service. This page explains the intended workflow.

## AI model

CRE8 AI uses **Anthropic Claude Sonnet 5.5** for conversations and proposal generation, including Compare funds, Design a fund, and Review a plan. Model output does not grant transaction or AI agent permissions.

For chat, pricing, and usage charges, see [CRE8 AI and credits](cre8-ai-credits.md). Routine plan execution runs on approved rules without calling the chat model or using AI credits each time.

## Two distinct use cases

A **holder's assistant** can explain a fund and prepare deposits or withdrawals. That holder's wallet confirms the transactions.

The fund's **AI agent** (the Operator role) is appointed by the creator and allocates assets using its own signer within a fixed scope. Holders do not approve every later action.

Being able to explain a fund does not give an assistant that fund's AI agent permissions.

## Operation sequence

### 1. Read state

Check network, fund, roles, assets, markets, caps, whether deposits are paused and why, fees, and pending changes. Review timestamps, availability, and deployment status.

Examples, undeployed configurations, or unverifiable setups can be read or designed, but are not executable live operations.

### 2. Prepare a permitted action

Prepare creation, deposit, withdrawal, allocation, reduction, or risk checks according to the role and mandate. Specify assets, amount, recipient, minimum acceptable result, and deadline.

Plan text or natural-language instructions do not expand permissions. If a designated destination is unavailable, the agent cannot silently switch to another market.

### 3. Check and simulate

Use the latest available state. Simulation previews conditions at that time; it does not reserve a risk state, execute a trade, or lock a price.

Recheck after changes to the wallet, network, asset, amount, or terms. Markets may change after simulation, so the live result may differ.

### 4. Have an authorized wallet sign

Before signing, check action, network, asset, amount, recipient, spender and allowance, minimum proceeds, and deadline. The signer must have authority for this operation.

Never paste private keys or seed phrases into chat, websites, or document-reading fields. MCP transaction preparation does not need them.

### 5. Verify the actual outcome

A hash identifies a trackable transaction; it does not alone show completion. Verify the transaction and the actual action, then the shares or assets received and the updated state.

For example, a deployment check may keep a paused outcome without deploying any capital. An agent should not record a completed purchase only because a transaction was included onchain.

## Unknown results

Keep the original hash and operation details, and query that same transaction. Find out whether it is pending, failed, completed, or needs more checking because of replacement or network state.

A timeout or a transaction that is briefly missing does not justify an automatic resubmission. Repeating it may duplicate creation, deposits, or withdrawals. After a confirmed failure, prepare again against current state.

## Agent explanations and commitments

Clearly separate examples, estimates, simulations, pending confirmation, and verified results. Do not present unsupported roadmap items as executable features, or promise principal, performance, or withdrawal timing.

See [Supported protocols and operations](../product/integrations.md) and [Roles and permissions](../product/permissions.md).
