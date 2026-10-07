---
description: Understand the scope of depositors, creators, Operators, the Risk Council, and platform administrators.
---

# Roles and permissions

CRE8 limits operations through the vault mandate. Understanding who may trade, change caps, pause, and resume helps you assess management risk.

This page describes the prototype. Live use still requires checking the particular vault's roles and settings.

## Who can do what

| Role | Permitted activity | Limits |
|---|---|---|
| Depositor / share holder | Deposit, hold nontransferable shares, and redeem proportional assets | Cannot replace the vault Operator individually; no per-trade approval of agent operations |
| Creator / Manager | Create the vault, set strategy scope, adjust caps, pause, and resume when eligible | Cannot arbitrarily add markets or increase fixed fees; execution-agent replacement waits at least 24 hours. Manager status does not grant withdrawal authority over others |
| Execution agent / Operator | Allocate or reduce positions within designated assets, markets, operations, and caps | Cannot make arbitrary calls or redeem others' shares merely by being Operator |
| Risk Council | Pause new-risk activity and impose a resume delay of at least 24 hours | Cannot arbitrarily redirect holder assets; the Manager resumes subject to conditions |
| Platform configuration administrator | Review assets and configurations for new vaults and control whether new creation is open | Review is not a safety guarantee; approving a new configuration does not replace an existing vault's fixed markets |
| Fee recipient | Claim its own accrued fees; in-kind exit fees may be delivered in assets | Fee status does not authorize redemption of another holder's shares |

A holder may separately authorize a representative to handle their shares. This authority is distinct from agent operations; check the recipient of that authorization and its amount separately.

## Autonomous operations

After deposit, the Operator uses its own signer to act continuously within the mandate. Each swap or supply operation does not request another signature from every depositor.

Keeping your own wallet keys does not remove strategy and execution risk. Deposited assets follow the common rules. Revoking a wallet allowance alone does not withdraw assets already deposited.

## Rule changes

The vault fixes asset and market scope. Creators may tighten caps immediately; increases require announcement and at least 24 hours. Tightening cancels pending increases.

Fees and core markets are fixed after creation. The execution agent may be disabled immediately; replacement requires announcement and at least 24 hours. Another market set or operating scope requires another vault, which participants assess independently.

## Pause and resume

The Manager and Risk Council may pause the vault. A pause blocks new deposits and new deployment while retaining proportional exits and risk reduction by design.

After a Risk Council pause, the Manager must wait at least 24 hours before attempting to resume, and current risk conditions must also pass. A new UTC day does not cancel that wait. Another Risk Council pause restarts it.

The platform may also stop new vault creation. That has a different scope from pausing an individual vault. Website availability alone does not establish the status of existing positions.

## External permissions

Third-party governance or administrators may change parameters, upgrade, pause, or restrict transfers. Token issuers may freeze assets or maintain blacklists. CRE8's fixed market configuration does not eliminate these external controls or risks.

Read [Risk controls and remaining risks](risk-controls.md) and [Redemptions and exits](../guides/redemptions.md).
