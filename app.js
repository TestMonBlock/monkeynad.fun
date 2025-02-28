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

// Connect Wallet (Forces Re-login on Page Reload)
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("No EVM-compatible wallet found. Install MetaMask or Phantom.");
            return;
        }

        // Step 1: Clear Cached Accounts to Prevent Auto-Login
        sessionStorage.removeItem("phantomConnected");

        // Step 2: Request Wallet Connection (Forces Password Entry)
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (!accounts || accounts.length === 0) {
            alert("No accounts found. Please unlock your wallet.");
            return;
        }

        // Step 3: Use Phantom's Provider (`window.ethereum`) for Transactions
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        // Step 4: Use Monad RPC for Network Check
        const dataProvider = new ethers.JsonRpcProvider(monadRPC);
        const chainId = await dataProvider.send("eth_chainId", []);
        console.log("Monad RPC is returning Chain ID:", chainId);

        if (chainId.toLowerCase() !== monadChainId.toLowerCase()) {
            alert(`Unexpected network detected: ${chainId}. Make sure you are on Monad Testnet.`);
            return;
        }

        // Step 5: Store Connection Status (Prevents Auto-Login on Page Reload)
        sessionStorage.setItem("phantomConnected", "true");

        // Step 6: Connect to Contract
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Step 7: Update UI with Connected Wallet Address
        document.getElementById("walletAddress").innerText = accounts[0];

        getUserData(dataProvider);
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Ensure Phantom is unlocked and on Monad Testnet.");
    }
}

// Fetch user stats (Balance, Miners, Eggs)
async function getUserData(dataProvider) {
    try {
        const user = await signer.getAddress();
        const balance = await dataProvider.getBalance(user);
        const miners = await contract.getMyMiners?.(user);
        const eggs = await contract.getMyEggs?.(user);

        document.getElementById("balance").innerText = ethers.formatEther(balance);
        document.getElementById("miners").innerText = miners || 0;
        document.getElementById("eggs").innerText = eggs || 0;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// Force Logout on Page Exit (User Must Reconnect on Return)
window.onbeforeunload = function () {
    sessionStorage.removeItem("phantomConnected");
};

// Buy eggs (Deposit MON)
async function buyEggs() {
    try {
        const tx = await contract.buyEggs("0x0000000000000000000000000000000000000000", { value: ethers.parseEther("0.1") });
        await tx.wait();
        alert("Eggs Purchased!");
        getUserData(new ethers.JsonRpcProvider(monadRPC));
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
        getUserData(new ethers.JsonRpcProvider(monadRPC));
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
        getUserData(new ethers.JsonRpcProvider(monadRPC));
    } catch (error) {
        console.error("Error selling eggs:", error);
    }
}

// Attach event listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("buyEggs").addEventListener("click", buyEggs);
document.getElementById("hatchEggs").addEventListener("click", hatchEggs);
document.getElementById("sellEggs").addEventListener("click", sellEggs);
