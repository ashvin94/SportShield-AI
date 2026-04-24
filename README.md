# 🛡️ SportShield AI: Digital Asset Protection

**Built for the Google Solution Challenge 2026 - Build with AI**

**Live Platform**: [https://sportshield.netlify.app/](https://sportshield.netlify.app/)
**Backend Engine**: [https://sportshield-ai-ms2l.onrender.com](https://sportshield-ai-ms2l.onrender.com)

**Team Leader**: Ashvin Patidar

SportShield AI is an advanced, decentralized application (dApp) designed to protect the integrity of digital sports media. By leveraging the advanced reasoning of **Google Gemini AI**, the data structure of **Google Firebase**, advanced mathematical hashing, and the immutable security of the **Polygon Blockchain**, we have created a scalable solution to identify, track, and flag unauthorized use of official sports media in near real-time.

---

## 🌟 Google Solution Challenge Focus Areas

### 1. Technical Merit & Complexity (40%)
- **Custom Cryptographic Engine**: Built entirely from scratch in Node.js to generate exact SHA-256 hashes and Perceptual Hashes (pHash) for images, videos, audio, and documents.
- **Gasless Web3 Integration**: Users connect their MetaMask wallets, but the Node.js backend (`ethers.js`) securely handles the gas fees and proxy-mints the NFTs to the Polygon Amoy Testnet, allowing for a seamless Web2-like experience.
- **Robust Architecture**: A decoupled React/Vite frontend (Netlify) communicating with a rate-limited, auto-waking Express backend (Render), ensuring high availability and DDoS protection.
- **Security & Privacy**: Intellectual property is protected by logging a mathematical timestamped proof-of-work (CID) to the IPFS network and Polygon Amoy, avoiding the upload of physically large and private IP-owned files to public servers.

### 2. AI Integration & Innovation (25%)
- **Google Gemini Integration**: Gemini acts as our primary "Forensic Analyst." When an asset is uploaded, the backend streams the data to the `@google/generative-ai` SDK. Gemini analyzes the content, provides rich metadata descriptions, and actively scans for signs of "AI Manipulation" or deepfakes.
- **Multi-Modal Detection Pipeline**: Combines traditional algorithmic distance matrices (Hamming distance) with Generative AI analysis to catch pirates even if they crop, filter, or slightly alter the original media.

### 3. Alignment With Cause (25%)
- **The Problem**: Sports organizations generate massive volumes of high-value digital media that scatter across global platforms. This visibility gap leaves proprietary content highly vulnerable to widespread misappropriation and IP violations.
- **The Solution**: Register once, protect everywhere. SportShield provides immutable ownership records and a fast `/detect` engine to flag piracy instantly.

### 4. User Experience (10%)
- **Frictionless Onboarding**: Seamless Web3 login via MetaMask. No email or password setup required.
- **Engaging UI**: Built with Tailwind CSS and Framer Motion, the interface features a premium aesthetic, glassmorphism, and highly responsive design across mobile and desktop. 
- **Real-Time Feedback**: Users get instant notifications on backend status (Server Waker), AI verification verdicts, and direct links to PolygonScan for blockchain transaction verification.

---

## 🛠️ Architecture & Stack

- **Frontend:** React.js, Tailwind CSS, Vite (Hosted on Netlify)
- **Backend:** Node.js, Express.js, Multer (Hosted on Render)
- **AI Engine:** Google Gemini SDK (`@google/generative-ai`)
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
