// Using native fetch (Node 18+)
import dotenv from 'dotenv';

dotenv.config();

const RENDER_URL = process.env.RENDER_EXTERNAL_URL || 'https://sportshield-ai-ms2l.onrender.com';

async function keepAlive() {
  console.log(`\n⏰ [${new Date().toISOString()}] Starting Keep-Alive Ping...`);
  try {
    const response = await fetch(`${RENDER_URL}/test`);
    const data = await response.json();
    if (response.ok) {
      console.log(`✅ Success: Server is awake! Status: ${response.status}`);
      console.log(`📡 Server Message: ${data.message}`);
    } else {
      console.log(`⚠️ Warning: Server responded with status ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ Error: Could not reach the server at ${RENDER_URL}`);
    console.error(`📝 Detail: ${error.message}`);
  }
}

keepAlive();
