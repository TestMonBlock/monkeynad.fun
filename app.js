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

// Connect Wallet (Bypassing Phantom’s `window.ethereum`)
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("No EVM-compatible wallet found. Install MetaMask or Phantom.");
            return;
        }

        // Step 1: Force Connect to Monad Testnet RPC Directly
        provider = new ethers.JsonRpcProvider(monadRPC); // Direct connection to Monad Testnet
        signer = await provider.getSigner();

        // Step 2: Request Wallet Connection
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        // Step 3: Verify Network (Force Check with RPC)
        const chainId = await provider.send("eth_chainId", []);
        console.log("Monad RPC is returning Chain ID:", chainId);

        if (chainId !== monadChainId) {
            alert(`Unexpected network detected: ${chainId}. Make sure you are on Monad Testnet.`);
            return;
        }

        // Step 4: Connect to Contract
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Step 5: Update UI with connected wallet address
        document.getElementById("walletAddress").innerText = accounts[0];

        getUserData();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Try restarting Phantom Wallet.");
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
