# CRE8 draft vault risk disclosure

Version: 2026-10-07-draft.8. Status: not in effect. Read with the Terms, Eligibility and jurisdiction restrictions, and individual vault documents. The live entity and open markets remain undecided. The prototype accepts no live deposits; performance and example holdings are simulated. Full documents remain in Docs and the footer. The vault list and individual pages show depositor notices, and Create shows a creator notice. You may hide that version for the same browser and wallet; further activity on that page does not repeat the general notice. Deposit and Safe funding flows separately ask about the Fund prospectus; Create does not add that question. The general notice has no Close or X. Pressing Escape instead of “I understand the risks” returns to the previous page, or home if there is none, without recording understanding, document reading, terms acceptance, or transaction acceptance. Neither notice is a jurisdiction declaration or eligibility check. Each transaction still needs review.

This page adapts the public draft of that version for product reading. It is not the identical file in the original legal bundle or an effective agreement.

## I. You may lose all principal

Vaults do not guarantee principal, fixed returns, deposit insurance, or exits at any moment. Token volatility, stablecoin or wrapped-asset depegs, issuer or protocol default, bugs, governance changes, oracle errors, congestion, transaction ordering, MEV, and insufficient liquidity may cause partial or total loss.

Public code, source verification, internal or fork tests, simulations, and third-party audits do not guarantee safety or profit. There is no verified live deployment or vault accepting live deposits. Internal checks are not an independent audit.

## II. Shares and agent operations

Current vaults use custom nontransferable shares. Share authorization is for designated exit uses; participation and redemption follow the rules. Valuation, fees, and redeemable results may be below your contribution. Legal classification depends on rights and applicable law, not technical names alone.

The platform does not hold your keys. The interface asks your wallet to sign and submit transactions; MCP provides unsigned information. Operators use their own signers within approved assets, markets, operations, and caps without each depositor signing subsequent activity. Their actions still affect holdings, fees, and risk.

Operator status alone grants no special holder-withdrawal authority; representative redemption needs share authorization. Manage token and share allowances separately and avoid excessive amounts. The creator may disable the agent immediately; rotation requires at least 24 hours and valid activation conditions. An individual depositor cannot revoke or replace the vault-wide Operator. Revoking wallet approval does not revoke authority over deposited funds. Your shares may be redeemed subject to rules and actual liquidity.

## III. Management and rule changes

Designated markets and core configuration are fixed; the Operator may be rotated through delayed governance. Creators may tighten caps, but loosening requires an onchain announcement and at least 24 hours. Creators and the Risk Council may pause specified activities. Resumption after a Council pause requires at least 24 hours and risk conditions.

External protocols may be controlled by governance, administrators, upgrade proxies, oracles, or other roles. Parameters, pauses, transfer restrictions, and redemptions may change. CRE8 restrictions do not remove those permissions or dependencies.

## IV. Controls are not loss limits

Agent protection records positive NAV losses from capital actions under the same before-and-after prices. Default and platform maximum are 5%, observing roughly 24 hours with the oldest record potentially retained nearly an extra hour. The crossing action settles before the agent is disabled in that transaction. It does not cap total market or single-action loss or guarantee price. Actual losses may exceed 5%.

Personal and per-asset stops and profit targets still depend on conditions, keepers, oracles, networks, and markets. A target does not guarantee timely execution or receipt at that price.

The minimum 5% idle check applies after agent deployment or supply. It does not guarantee that ratio continuously or immediate redemption for everyone. Asset selection, limits, and pauses cannot eliminate principal loss.

## V. Valuation, income, and information

NAV and share value are estimates from contracts and oracles, not guaranteed execution prices. Supply rates vary and differ from the vault's return after all fees. Historical, simulated, estimated, and annualized figures do not guarantee future results.

Data and AI explanations may be stale, incomplete, or inaccurate. The personal agent's offchain proposals differ from the Operator managing funds. Task payments or credits do not guarantee a correct strategy, expand withdrawal permissions, or open live vaults. Borrowing, leverage, and liquidity positions add debt, liquidation, rate, impermanent-loss, and gas risks; read the relevant configuration. Incomplete mixed-strategy work is not executable availability. Check sources, times, networks, and addresses. Unverifiable data or valuation may block preparation or execution.

## VI. Fees and interests

There is no management fee. Deposits pay 0.5% of gross accounting assets actually used, rounded up in raw units. Chargeable deployments, reductions, and separate position operations pay 0.1%; ordinary holder exits do not additionally pay 0.1% for that reason. The operation cap uses the remaining amount of 1% of the latest valid pre-fee NAV in each fixed 365-day period from initialization. NAV declines do not recover paid fees. It is not a continuous or rolling-year 1% guarantee.

Exit performance fees use each address's net cost basis and positive profit for that exit: platform 10% plus fixed-at-creation creator 0–20%, totaling 10–30%. Partial exits allocate cost proportionally. No positive profit means no performance fee for that exit. Costs are not netted across wallets, vaults, or all historical exits. There is no pooled unrealized high-water mark, 90/10 split, or issuance of fee shares.

Cash exits use actual liquidation proceeds. Reliably valued in-kind exits take a fee proportion from the same assets, without guaranteeing their value can all be converted into cash. Unpriceable fees are waived for that exit. Entry and operation fees go to the platform, and both platform and creator collect their performance fees, creating potential conflicts. Gas, trading, slippage, and protocol costs are separate. A refundable execution buffer is not an extra fixed fee.

## VII. Exits, liquidity, and creator ownership

Creators contribute 100 accounting-asset units and pay the 0.5% entry fee. There is no seed time lock; while other holders remain, they must hold at least 2% of circulating shares, limiting redemption. Ordinary holders have no fixed time lock. All shares are nontransferable, so secondary-market sale is not an exit route. No time lock does not mean original assets are always recoverable immediately.

Cash redemption means the accounting token, such as USDT, rather than fiat. It processes proportional inventory, subject to routes, oracles, minimum proceeds, and deadlines. Any failed exit component may revert the entire transaction.

In-kind redemption may deliver tokens, lending receipts, or third-party vault shares for you to transfer or redeem later. Markets, transferability, and principal recovery are not guaranteed. Protocol pauses, blacklists, insolvency, and liquidity shortages affect exits.

Refusing new commercial terms alone does not remove existing-position exit information. Exits remain subject to law, sanctions, and contract conditions; legally prohibited transfers are not promised.

## VIII. Signatures, approvals, and irreversible transactions

Check network, contract, token, amount, spender and allowance, minimum proceeds, and deadline. Approval differs from deposit or creation. A previously larger allowance is not automatically reduced or revoked when you enter a smaller amount.

Onchain transactions usually cannot be reversed, and failures may consume gas. For unknown status, query the original hash rather than resubmitting. A preview or simulation is not a completed onchain transaction.

## IX. Third parties, eligibility, and rights

Read underlying protocols' and relevant features' terms, risks, and eligibility limits. Third-party branding does not endorse a vault, creator, strategy, or principal safety. An underlying audit is not an audit of this integration.

Eligibility depends on entity, user conditions, feature, and applicable law. An accessible page, connected wallet, or callable contract does not establish local legal permission. User declarations do not replace platform duties.

Stock and RWA tokens are not live merely because they appear in a catalog. Issuers, rights, transfers, redemptions, custody, and eligibility need asset-specific review. Securities, issuer, corporate-action, market-closure, and cross-border distribution risks may apply.

This draft does not exclude non-excludable liability, consumer rights, complaints, or remedies. Technical irreversibility does not waive lawful rights.
