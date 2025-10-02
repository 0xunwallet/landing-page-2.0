## Unwallet Client

How Unwallet Makes Privacy-First Smart Accounts Possible

Overview

Unwallet provides privacy-by-default smart accounts with programmable ERC-7579 modules, enabling users and agents to manage funds privately while accessing automated features like yield generation and token swapping.

Core Architecture

1. User Onboarding & Wallet Creation
   When users or agents join the platform:

Embedded Wallet Creation: Users can create wallets using email, phone number, or connect existing wallets
Privacy Configuration: Upon login, users configure desired modules (Auto Earn, Auto Swap, zkEmail Recovery)
Stealth Address Generation: System pre-computes stealth addresses for enhanced privacy

2. Stealth Address System
   Address Pre-computation Process:

User signs a message upon login
System uses ECDH and ECDSA to generate two key pairs:
Spending Public Key + Viewing Private Key → Generate stealth addresses
Spending Private Key + Viewing Public Key → Generate private keys for fund access
TEE pre-computes all addresses and generates new ones on request

3. Module System (ERC-7579)
   Our platform uses ERC-7579 modules built on Kernel accounts:

Available Modules:

Auto Earn: Automatically deposits received funds into yield-generating protocols
Auto Swap: Swaps received tokens to user's default token (set during config)
zkEmail Recovery: Enables recovery for all stealth smart accounts

Module Installation:

Modules are installed on smart accounts based on user configuration
Each module executes only its designated function (security by design)
Swap module → token swapping only
Earn module → vault deposits only

4. TEE Integration
   Current & Future State:

Current: Hosted on traditional server (AWS EC2)
Future: Full TEE (Trusted Execution Environment) deployment

TEE Benefits:

Payers can verify TEE attestation
Ensures funds are sent to correct addresses
Validates proper address computation
Enhanced trust and security

5. Agent Compatibility
   Google A2A Integration:

Supports Google's A2A (Agent-to-Agent) payment standard using x402
SDK abstracts A2A implementation
Provides smart account features + modules + privacy through stealth addresses
Seamless agent integration

Getting Started

Run the dev server with Bun:

```bash
bun run dev
```

Open http://localhost:3000 to view the landing page.
