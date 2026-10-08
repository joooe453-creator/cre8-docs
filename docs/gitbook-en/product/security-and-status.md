---
description: CRE8 prototype, deployment, testing, audits, performance, and legal-document status.
---

# Security and service status

As of **2026-10-07**, CRE8 is a prototype without a verified deployment accepting live funds or a completed independent third-party security audit.

## Status overview

| Item | Status |
|---|---|
| Product interface | Example flows can be read and explored |
| Vault design | Select assets, destinations, caps, and other settings, and export designs |
| Live creation and deposits | Not open |
| Live deployment | No verified available deployment or official live contract addresses |
| Vault execution design | Designated swaps, holdings, supply, and some rule-based strategies implemented; separate LP and debt positions need independent checks |
| Engineering verification | Local tests, some mainnet-fork testing, and limited model verification exist |
| CRE8 third-party security audit | Incomplete |
| Marketplace holdings and performance | Simulated |
| Live historical performance | Not provided |
| MCP | Transaction preparation implemented; live service availability needs separate confirmation |
| Operating entity and open markets | Not finalized |
| Legal documents | Drafts not in effect |
| CRE8 AI and credits | Prototype and draft prices exist; live payments and availability need separate acceptance |
| Multi-asset, multi-strategy features | Plans and partial branch implementations exist; full integration and acceptance incomplete |

## What testing establishes

Local tests check defined workflows, permissions, and exceptional conditions. Mainnet-fork tests use real protocol state at a particular point in an isolated environment for selected operations. They do not send public-chain transactions or guarantee future market state.

Limited model verification addresses properties under specific assumptions. It does not fully prove every contract, external protocol, and execution path safe.

These checks do not replace independent audits. Future audit reports should identify version, date, scope, and unresolved findings. A component audit is not a guarantee for the entire service.

## How to verify live availability

Live information should establish network, vault identity, deployed version, enabled features, eligibility, fees, and document status. Catalogs, branding, test addresses, and design exports cannot replace that evidence.

There is currently no official vault address for live funding. Stop if someone claims to unlock access, guarantees investment results, or asks for your keys.

## Your own wallet still has management risk

CRE8 does not hold depositor private keys. After deposit, the Operator may act autonomously within the mandate. Assess strategy, signer, third-party protocol, and overall asset risk.

Reading confirmations, simulations, and successful approvals do not eliminate those risks.

## Status updates

Documentation will follow actual deployment, features, audits, and eligibility arrangements. A document date is not a launch date or a promise of returns, completed audits, or delivery.

See [Documentation versions](../reference/updates.md) and [Before you use CRE8](../legal/before-you-use.md).
