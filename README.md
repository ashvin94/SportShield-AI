# 🛡️ SportShield AI: Digital Asset Protection

**Built for the Google Solution Challenge 2026 - Build with AI**

**Live Platform**: [https://sportshield-ai.web.app/](https://sportshield-ai.web.app/)
**Backend Engine**: [https://sportshield-ai-ms2l.onrender.com](https://sportshield-ai-ms2l.onrender.com)

**Team Leader**: Ashvin Patidar

## 📖 Overview
**The Problem:** Sports creators produce highly valuable digital media, but once published online, it is easily stolen, altered, or deepfaked. Creators lack a fast, reliable way to prove ownership and track piracy across the internet.

**The Solution:** SportShield AI is a digital copyright registry that combines the advanced reasoning of **Google Gemini AI** with the immutable security of the **Polygon Blockchain** to create permanent, tamper-proof ownership records for sports media.

---

## 🌟 Google Solution Challenge Focus Areas

### 1. Alignment With Cause & Problem Solving (25%)
- **Undeniable Proof:** By minting media fingerprints (hashes) as NFTs on the Polygon blockchain, we create a public, unchangeable timestamp proving exactly who created a file and when, eliminating copyright disputes.
- **Smart Piracy Detection:** If a pirate steals an image and alters it (e.g., cropping or adding filters), our detection engine calculates structural similarity (pHash distance) to match it back to the original blockchain record, catching thieves who try to trick the system.

### 2. AI Integration & Innovation (25%)
- **Google Gemini API (`gemini-flash-latest`):** We leverage the Gemini 1.5 Flash model for multi-modal forensic analysis.
- **Upload & Analyze:** When a creator uploads a photo or video, Gemini instantly scans it to generate descriptive metadata, tag the content, and detect any signs of AI manipulation or deepfakes.
- **Text & Document Analysis:** We extract text from uploaded contracts or documents and pass it to Gemini to scan for plagiarism or unauthorized alterations.

### 3. Technical Merit & Complexity (40%)
- **Custom Cryptographic Engine:** Built entirely from scratch in Node.js to generate exact SHA-256 hashes and Perceptual Hashes (pHash) for images, videos, audio, and documents.
- **Gasless Web3 Integration:** Users connect their MetaMask wallets, but the Node.js backend securely handles gas fees and proxy-mints the NFTs, allowing for a seamless Web2-like experience.
- **Robust Architecture:** A decoupled React/Vite frontend (Firebase Hosting) communicating with a rate-limited, auto-waking Express backend (Render).
- **Decentralized Storage:** Intellectual property metadata is pinned to the IPFS network via Pinata, ensuring immutable storage.

### 4. User Experience (10%)
- **Frictionless Onboarding:** Seamless Web3 login via MetaMask. No email or password setup required.
- **Engaging UI:** Built with Tailwind CSS and Framer Motion, featuring a premium aesthetic, glassmorphism, and responsive design.
- **Real-Time Feedback:** Instant notifications on AI verification verdicts and direct links to PolygonScan for blockchain transaction verification.

---

## 🛠️ Architecture & Stack

- **Frontend:** React.js, Tailwind CSS, Vite (Hosted on Firebase Hosting)
- **Backend:** Node.js, Express.js, Multer (Hosted on Render)
- **AI Engine:** Google Gemini API (`@google/generative-ai`, `gemini-flash-latest`)
- **Database Engine:** Google Firebase (Firestore)
- **Blockchain:** Polygon Amoy Testnet, `ethers.js` (v6)
- **Decentralized Storage:** IPFS (via Pinata)
- **Media Processing:** `sharp` (Images), `ffmpeg` (A/V), `ipfs-only-hash`

---

## 💻 Running the Project Locally

### 1. Backend Setup
```bash
cd backend
npm install
# Create a .env file based on .env.example
npm start
```
*The backend runs on `http://localhost:5000`.*

### 2. Frontend Setup
```bash
cd frontend
npm install
# Ensure .env is configured with the VITE_API_URL and VITE_FIREBASE config
npm run dev
```
*The frontend runs on `http://localhost:5173`.*

---
*Created with ❤️ for the Google Solution Challenge 2026*
