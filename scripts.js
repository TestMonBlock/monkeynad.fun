// Import necessary libraries as ES modules:
import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.esm.min.js";
import Web3Modal from "https://esm.sh/web3modal@1.9.4";
import WalletConnectProvider from "https://esm.sh/@walletconnect/web3-provider@1.8.0";

// Global variables:
let provider, signer, contract, web3ModalInstance;

// Replace with your actual contract address, chain ID, and RPC URL:
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const MONAD_TESTNET_CHAIN_ID = "0x1A4"; // e.g., "0x1A4" for Monad Testnet
const MONAD_TESTNET_RPC_URL = "https://testnet-rpc.monad.xyz/";

// Check that all libraries loaded successfully.
function checkScriptsLoaded() {
  console.log("Checking if all scripts are loaded...");
  if (!ethers) {
    console.error("🚨 Ethers.js failed to load!");
    return false;
  }
  if (!Web3Modal) {
    console.error("🚨 Web3Modal failed to load!");
    return false;
  }
  if (!WalletConnectProvider) {
    console.error("🚨 WalletConnectProvider failed to load!");
    return false;
  }
  console.log("✅ All scripts loaded successfully!");
  return true;
}

// Initialize our DApp if libraries are loaded:
if (checkScriptsLoaded()) {
  init();
} else {
  console.error("One or more libraries failed to load. Please check your network or CDN availability.");
}

function init() {
  console.log("Initializing Web3Modal...");

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          [parseInt(MONAD_TESTNET_CHAIN_ID, 16)]: MONAD_TESTNET_RPC_URL,
        },
      },
    },
  };

  // Initialize Web3Modal using the imported module.
  web3ModalInstance = new Web3Modal({
    cacheProvider: false,
    providerOptions: providerOptions,
  });

  console.log("✅ Web3Modal Initialized Successfully!");
}

async function connectWallet() {
  try {
    if (!web3ModalInstance) {
      console.error("⚠ Web3Modal is not initialized");
      return;
    }
    console.log("🔗 Connecting Wallet...");
    const instance = await web3ModalInstance.connect();
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
