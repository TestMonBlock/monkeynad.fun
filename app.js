// Monad Testnet Configuration
const contractAddress = "0xYOUR_CONTRACT_ADDRESS_HERE"; // Replace with actual deployed contract address
const monadRPC = "https://testnet-rpc.monad.xyz"; // Official Monad Testnet RPC
const monadChainId = "0x279F"; // Correct Chain ID (10143 in hexadecimal)
const monadExplorer = "https://testnet-explorer.monad.xyz"; // Official Monad Testnet Explorer

// Contract ABI (Replace with the actual contract ABI from Monad Explorer)
const contractABI = [
    // Copy and paste your correct contract ABI here
];

let provider;
let signer;
let contract;

// Connect Wallet (Phantom & MetaMask Support)
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("No EVM-compatible wallet found. Install MetaMask or Phantom.");
            return;
        }

        // Step 1: Request Wallet Connection
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (!accounts || accounts.length === 0) {
            alert("No accounts found. Please unlock your wallet.");
            return;
        }

        // Step 2: Get Current Chain ID
        let currentChainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log("Wallet is returning Chain ID:", currentChainId);

        // Step 3: If Phantom is stuck on Ethereum Mainnet (`0x1`), try to add Monad Testnet
        if (currentChainId === "0x1") {
            alert("Phantom Wallet is stuck on Ethereum Mainnet. Attempting to add Monad Testnet...");

            try {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: "0x279F",
                        chainName: "Monad Testnet",
                        nativeCurrency: { name: "MON", symbol: "MON", decimals: 18 },
                        rpcUrls: ["https://testnet-rpc.monad.xyz"],
                        blockExplorerUrls: ["https://testnet-explorer.monad.xyz"]
                    }]
                });

                // Re-fetch the chain ID after adding Monad Testnet
                currentChainId = await window.ethereum.request({ method: "eth_chainId" });
                console.log("After adding Monad, Chain ID is:", currentChainId);
            } catch (addError) {
                console.error("Failed to add Monad Testnet:", addError);
                alert("Failed to add Monad Testnet. Please contact Phantom support.");
                return;
            }
        }

        // Step 4: Verify Network
        if (currentChainId !== monadChainId) {
            alert(`Unexpected network detected: ${currentChainId}. Make sure you are on Monad Testnet.`);
            return;
        }

        // Step 5: Connect to Provider & Contract
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Step 6: Update UI with Connected Wallet Address
        document.getElementById("walletAddress").innerText = accounts[0];

        getUserData();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Ensure Phantom is unlocked and on Monad Testnet.");
    }
}

// Fetch user stats (Balance, Miners, Eggs)
async function getUserData() {
    try {
        const user = await signer.getAddress();
        const balance = await provider.getBalance(user);
        const miners = await contract.getMyMiners?.(user); // Ensure function exists before calling
        const eggs = await contract.getMyEggs?.(user); // Ensure function exists before calling

        document.getElementById("balance").innerText = ethers.formatEther(balance);
        document.getElementById("miners").innerText = miners || 0;
        document.getElementById("eggs").innerText = eggs || 0;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Buy eggs (Deposit MON)
async function buyEggs() {
    try {
        const tx = await contract.buyEggs("0x0000000000000000000000000000000000000000", { value: ethers.parseEther("0.1") });
        await tx.wait();
        alert("Eggs Purchased!");
        getUserData();
    } catch (error) {
        console.error("Error buying eggs:", error);
    }
}

// Hatch eggs
async function hatchEggs() {
    try {
        const tx = await contract.hatchEggs("0x0000000000000000000000000000000000000000");
        await tx.wait();
        alert("Eggs Hatched!");
        getUserData();
    } catch (error) {
        console.error("Error hatching eggs:", error);
    }
}

// Sell eggs (Withdraw MON)
async function sellEggs() {
    try {
        const tx = await contract.sellEggs();
        await tx.wait();
        alert("Eggs Sold!");
        getUserData();
    } catch (error) {
        console.error("Error selling eggs:", error);
    }
}

// Attach event listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("buyEggs").addEventListener("click", buyEggs);
document.getElementById("hatchEggs").addEventListener("click", hatchEggs);
document.getElementById("sellEggs").addEventListener("click", sellEggs);
