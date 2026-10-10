---
description: CRE8 prototype, deployment, testing, audits, performance, and legal-document status.
---

# Security and service status

As of **2026-10-10**, CRE8 is a prototype without a verified deployment accepting live funds or a completed independent third-party security audit.

## Status overview

| Item | Status |
|---|---|
| Product interface | Example flows can be read and explored |
| Fund design | Select assets, destinations, caps, and other settings, and export designs |
| Live creation and deposits | Not open |
| Live deployment | No verified available deployment or official live contract addresses |
| Fund execution design | Designated swaps, holdings, supply, and some rule-based plans implemented; separate LP and debt positions need independent checks |
| Engineering verification | Local tests, some mainnet-fork testing, and limited model verification exist |
| CRE8 third-party security audit | Incomplete |
| Marketplace holdings and performance | Simulated |
| Live historical performance | Not provided |
| MCP | Transaction preparation implemented; live service availability needs separate confirmation |
| Operating entity and open markets | Not finalized |
| Legal documents | Drafts not in effect |
| CRE8 AI and credits | Prototype and draft prices exist; live payments and availability need separate acceptance |
| Multi-asset, multi-plan features | Designs and partial branch implementations exist; full integration and acceptance incomplete |

## What testing establishes

Local tests check defined workflows, permissions, and exceptional conditions. Mainnet-fork tests use real protocol state at a particular point in an isolated environment for selected operations. They do not send public-chain transactions or guarantee future market state.

Limited model verification addresses properties under specific assumptions. It does not fully prove that every contract, external protocol, and execution path is free of flaws.

These checks do not replace independent audits. Future audit reports should identify version, date, scope, and unresolved findings. A component audit is not a guarantee for the entire service.

## How to verify live availability

Live information should establish network, fund identity, deployed version, enabled features, eligibility, fees, and document status. Catalogs, branding, test addresses, and design exports cannot replace that evidence.

There is currently no official fund contract address for live deposits. Stop if someone claims to unlock access, promises results, or asks for your keys.

## Your own wallet still has management risk

CRE8 does not hold holders' private keys. After you deposit, the plan or the AI agent may act on its own within the mandate. Assess plan, signer, third-party protocol, and overall asset risk.

Reading confirmations, simulations, and successful approvals do not eliminate those risks.

## Status updates

Documentation will be updated as actual deployment, features, audits, and eligibility arrangements change. A document date is not a launch date or a promise of performance, completed audits, or delivery.

See [Documentation versions](../reference/updates.md) and [Before you use CRE8](../legal/before-you-use.md).
