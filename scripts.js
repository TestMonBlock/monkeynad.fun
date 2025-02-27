let provider, signer, contract, web3Modal;

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const MONAD_TESTNET_CHAIN_ID = "0x1A4"; // Replace with actual Monad Testnet Chain ID
const MONAD_TESTNET_RPC_URL = "https://testnet-rpc.monad.xyz/"; // Replace with actual Monad testnet RPC

async function loadWeb3Modal() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/web3modal@1.9.4/dist/index.js";
    script.onload = () => {
      console.log("✅ Web3Modal Loaded Successfully!");
      resolve();
    };
    script.onerror = () => {
      console.error("🚨 Web3Modal failed to load!");
      reject(new Error("Web3Modal failed to load."));
    };
    document.body.appendChild(script);
  });
}

async function checkScriptsLoaded() {
  console.log("Checking if all scripts are loaded...");

  if (typeof ethers === "undefined") {
    console.error("🚨 Ethers.js failed to load!");
    alert("Ethers.js did not load. Refresh the page or check your internet connection.");
    return false;
  }

  if (typeof Web3Modal === "undefined") {
    console.error("🚨 Web3Modal failed to load! Retrying in 2 seconds...");
    await loadWeb3Modal();
    return false;
  }

  if (typeof WalletConnectProvider === "undefined") {
    console.error("🚨 WalletConnectProvider failed to load!");
    alert("WalletConnect did not load. Refresh the page.");
    return false;
  }

  console.log("✅ All scripts loaded successfully!");
  return true;
}

document.addEventListener("DOMContentLoaded", async function () {
  console.log("🔄 Attempting to Load Web3Modal...");
  await loadWeb3Modal();
  setTimeout(async () => {
    if (!await checkScriptsLoaded()) return;
    init();
  }, 1000); // Wait 1 second to ensure all scripts are loaded
});

async function init() {
  console.log("Initializing Web3Modal...");

  if (typeof Web3Modal === "undefined") {
    console.error("🚨 Web3Modal is still not defined. Retrying in 2 seconds...");
    setTimeout(init, 2000); // Retry after 2 seconds
    return;
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          [parseInt(MONAD_TESTNET_CHAIN_ID, 16)]: MONAD_TESTNET_RPC_URL
        }
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions
  });

  console.log("✅ Web3Modal Initialized Successfully!");
}

async function connectWallet() {
  try {
    if (!web3Modal) {
      console.error("⚠ Web3Modal is not initialized");
      return;
    }

    console.log("🔗 Connecting Wallet...");
    const instance = await web3Modal.connect();
    provider = new ethers.providers.Web3Provider(instance);
    signer = provider.getSigner();
    const address = await signer.getAddress();

    document.getElementById("walletAddress").innerText = address;
    console.log("✅ Wallet connected:", address);
  } catch (err) {
    console.error("🚨 Wallet connection error:", err);
    alert("Failed to connect wallet.");
  }
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
