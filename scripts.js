let provider, signer, contract, web3ModalInstance;

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const MONAD_TESTNET_CHAIN_ID = "0x1A4"; // Replace with actual Monad Testnet Chain ID
const MONAD_TESTNET_RPC_URL = "https://testnet-rpc.monad.xyz/"; // Replace with actual Monad testnet RPC

async function loadWeb3Modal() {
  try {
    const Web3ModalModule = await import("https://unpkg.com/web3modal@1.9.4/dist/index.js");
    return Web3ModalModule.default || Web3ModalModule; // Access default export correctly
  } catch (error) {
    console.error("🚨 Web3Modal failed to load!", error);
    alert("Web3Modal could not be loaded. Try refreshing the page.");
    return null;
  }
}

async function checkScriptsLoaded() {
  console.log("Checking if all scripts are loaded...");

  if (typeof ethers === "undefined") {
    console.error("🚨 Ethers.js failed to load!");
    alert("Ethers.js did not load. Refresh the page or check your internet connection.");
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
  const Web3Modal = await loadWeb3Modal();
  if (!Web3Modal) return;

  web3ModalInstance = new Web3Modal({
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            [parseInt(MONAD_TESTNET_CHAIN_ID, 16)]: MONAD_TESTNET_RPC_URL
          }
        }
      }
    }
  });

  console.log("✅ Web3Modal Initialized Successfully!");
});

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
