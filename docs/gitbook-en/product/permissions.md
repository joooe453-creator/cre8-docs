---
description: Understand the scope of holders, creators, AI agents, the Risk Council, and platform administrators.
---

# Roles and permissions

CRE8 limits operations through each fund's mandate. Knowing who may trade, change caps, pause deposits, and resume helps you assess management risk.

This page describes the prototype. Live use still requires checking the particular fund's roles and settings.

CRE8 AI uses **Anthropic Claude Sonnet 5.5** for conversations and proposal generation. Model choice does not change any role’s permissions; routine plan execution runs on approved rules without calling the chat model each time.

## Who can do what

| Role | Permitted activity | Limits |
|---|---|---|
| Holder | Deposit, hold nontransferable shares, and withdraw their proportional assets | Cannot replace the fund's AI agent individually; no per-trade approval of AI agent operations |
| Creator | Create the fund, set the plan and its scope, adjust caps, pause deposits, and resume when eligible | Cannot arbitrarily add markets or increase fixed fees; AI agent replacement waits at least 24 hours. Being the creator does not grant withdrawal authority over others |
| AI agent | Allocate or reduce positions within designated assets, markets, operations, and caps | Cannot make arbitrary calls or withdraw others' shares merely by being the AI agent |
| Risk Council | Pause new-risk activity and impose a resume delay of at least 24 hours | Cannot arbitrarily redirect holder assets; the creator resumes subject to conditions |
| Platform configuration administrator | Review assets and configurations for new funds and control whether new creation is open | Review is not a guarantee; approving a new configuration does not replace an existing fund's fixed markets |
| Fee recipient | Claim its own accrued fees; fees on a withdrawal as assets may be delivered in those assets | Fee status does not authorize withdrawing another holder's shares |

A holder may separately authorize a representative to handle their shares. This authority is distinct from AI agent operations; check the recipient of that authorization and its amount separately.

## Autonomous operations

After you deposit, the plan or the AI agent acts within the mandate on its own. An AI agent uses its own signer. Holders are not asked to sign each later swap or supply operation.

Keeping your own wallet keys does not remove plan and execution risk. Deposited assets are governed by the common rules. Revoking a wallet allowance alone does not withdraw assets already deposited.

## Rule changes

The fund fixes asset and market scope. Creators may tighten caps immediately; increases require announcement and at least 24 hours. Tightening cancels pending increases.

Fees and core markets are fixed after creation. The AI agent may be disabled immediately; replacement requires announcement and at least 24 hours. Another market set or operating scope requires another fund, which you assess on its own.

## Pause and resume

The creator and the Risk Council may pause a fund. A paused fund is shown as "Deposits paused" with its reason. A pause blocks new deposits and new deployment while keeping proportional withdrawals and risk reduction by design.

After a Risk Council pause, the creator must wait at least 24 hours before attempting to resume, and current risk conditions must also pass. A new UTC day does not cancel that wait. Another Risk Council pause restarts it.

The platform may also stop new fund creation. That has a different scope from pausing an individual fund. Website availability alone does not establish the status of existing positions.

## External permissions

Third-party governance or administrators may change parameters, upgrade, pause, or restrict transfers. Token issuers may freeze assets or maintain blacklists. CRE8's fixed market configuration does not eliminate these external controls or risks.

Read [Risk controls and remaining risks](risk-controls.md) and [Withdrawals and exits](../guides/redemptions.md).
