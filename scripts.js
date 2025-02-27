let provider, signer, contract, web3Modal;

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const MONAD_TESTNET_CHAIN_ID = "0x1A4"; // Replace with your actual chain ID
const MONAD_TESTNET_RPC_URL = "https://testnet-rpc.monad.xyz/"; // Replace with your actual RPC URL

function checkScriptsLoaded() {
  console.log("Checking if all scripts are loaded...");

  if (typeof ethers === "undefined") {
    console.error("🚨 Ethers.js failed to load!");
    alert("Ethers.js did not load. Refresh the page or check your internet connection.");
    return false;
  }

  if (typeof Web3Modal === "undefined") {
    console.error("🚨 Web3Modal failed to load!");
    alert("Web3Modal did not load. Refresh the page.");
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

document.addEventListener("DOMContentLoaded", function () {
  if (!checkScriptsLoaded()) return;
  init();
});

function init() {
  console.log("Initializing Web3Modal...");

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

  // Initialize Web3Modal using the global Web3Modal from the unpkg script.
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions: providerOptions
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
