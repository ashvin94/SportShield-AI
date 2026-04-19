# 🛡️ ChainGuard Sports: AI-Powered Media Anti-Piracy Platform

**Built for the Google "Build with AI" Hackathon 2026**

ChainGuard Sports is an advanced, wallet-less decentralized application (dApp) designed to protect intellectual property in the sports media industry. By leveraging the advanced reasoning of **Google Gemini AI**, the ultra-fast data syncing of **Google Firebase**, perceptual hashing, and the immutable security of the **Polygon Blockchain**, we've created a frictionless pipeline for creators to protect their assets from deepfakes and piracy exactly the moment they are created.

---

## 🔥 Powered by Google Technologies

This project heavily utilizes the Google Cloud ecosystem to deliver lightning-fast, highly accurate AI & Database operations required for real-time piracy prevention:

- **🤖 Google Gemini v2.5 (Flash):** Deployed as a zero-shot multi-modal deepfake and contextual analyzer. The system feeds raw video frames, audio extractions, documents, and images straight into Gemini to instantly determine manipulation, outputting detailed contextual reports permanently etched into the blockchain.
- **⚡ Google Firebase (Firestore):** Used as the hyper-speed "Similarity Engine". Instead of reading heavy state arrays from the blockchain, Firebase instantly queries thousands of perceptual hashes (`pHash`), cryptographic hashes (`SHA256`), and audio-signatures concurrently.

## 🌟 Key Features

1. **Wallet-Free Web3 UX:** Users achieve true Web3 decentralized security without ever installing MetaMask, signing transactions, or paying gas fees. The centralized backend securely proxy-mints the NFTs to the blockchain on behalf of the users safely.
2. **Multi-Modal Asset Detection:**
   - **🖼️ Images:** pHash distance matrix calculations for visual duplicates.
   - **🎬 Video:** Extracts 5 independent keyframes (via `ffmpeg`), running comparative pHashes bound together by majority-vote bit combination.
   - **🎵 Audio:** Generates temporal energy profiles converting audio PCM to binary Hamming distance fingerprinting.
   - **📄 Documents (PDF/TXT):** Evaluates dense word-frequency mapping patterns using Google Gemini analysis combined with SHA256 locking.
3. **Decentralized Privacy:** Protects your intellectual property by logging a mathematical timestamped proof-of-work (CID) to the IPFS network and Polygon Amoy, completely avoiding the uploading of the physically large and private IP-owned file to the public internet space.
4. **Insta-Piracy Blocking (409 Status):** Attempting to register an asset that shares a similarity distance of >10% immediately aborts the mint and warns the user of the exact registration timestamp of the original owner.

---

## 🛠️ Architecture & Stack

- **Frontend:** React.js, Context API
- **Backend:** Node.js, Express.js (Multer for Memory Streaming)
- **AI Engine:** `@google/generative-ai` (Gemini 2.5 Flash SDK)
- **Database Engine:** Google Firebase Admin SDK
- **Blockchain Connectivity:** `ethers.js` (v6), Hardhat
- **Smart Contract:** Solidity (Deployed on Polygon Amoy Testnet)
- **Signal Processing:** `sharp` (Images), `ffmpeg` (A/V extraction), `ipfs-only-hash` (Local Hash Gen)

---

## 🚀 Future Roadmap for Google Cloud Integration
As we expand ChainGuard Sports moving forward, we actively plan to integrate:
- **Google Cloud Storage (GCP):** For enterprise-grade encrypted media blob hosting.
- **Google Vertex AI:** Custom tuning a model specifically for evaluating subtle jersey and broadcast watermark stripping.

## 💻 Running the App Locally

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```
The application will launch on `http://localhost:3000`.

---
*Created with ❤️ for the Google Build Hackathon*
