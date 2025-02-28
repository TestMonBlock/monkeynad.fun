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
let userAddress = null;

// **Connect Wallet & Update UI**
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("No EVM-compatible wallet found. Install MetaMask or Phantom.");
            return;
        }

        // **Step 1: Request Wallet Connection (Forces Phantom to Ask Permission)**
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (!accounts || accounts.length === 0) {
            alert("No accounts found. Please unlock your wallet.");
            return;
        }

        // **Step 2: Use Phantom's Provider for Transactions**
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAddress = accounts[0]; // Store connected address

        // **Step 3: Use Monad RPC for Network Check**
        const dataProvider = new ethers.JsonRpcProvider(monadRPC);
        const chainId = await dataProvider.send("eth_chainId", []);
        console.log("Monad RPC is returning Chain ID:", chainId);

        if (chainId.toLowerCase() !== monadChainId.toLowerCase()) {
            alert(`Unexpected network detected: ${chainId}. Make sure you are on Monad Testnet.`);
            return;
        }

        // **Step 4: Connect to Smart Contract**
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // **Step 5: Update UI with Wallet Address & Balance**
        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        document.getElementById("connectWallet").innerText = "Disconnect";
        document.getElementById("connectWallet").onclick = disconnectWallet; // Change button action

        sessionStorage.setItem("phantomConnected", "true"); // Store connection state

        getUserData(dataProvider);
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Ensure Phantom is unlocked and on Monad Testnet.");
    }
}

// **Disconnect Wallet & Fully Revoke Access**
async function disconnectWallet() {
    try {
        userAddress = null;
        sessionStorage.removeItem("phantomConnected");

        // **Step 1: Clear UI**
        document.getElementById("walletAddress").innerText = "Disconnected";
        document.getElementById("connectWallet").innerText = "Connect Wallet";
        document.getElementById("connectWallet").onclick = connectWallet; // Reset button action

        // **Step 2: Reset Phantom Permissions (Trick Phantom into Forgetting Connection)**
        await window.ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: [] }] });

        // **Step 3: Force Phantom to Forget the Connection**
        await window.ethereum.request({ method: "wallet_revokePermissions", params: [{ eth_accounts: [] }] });

        alert("Phantom Wallet disconnected. You will need to reconnect manually.");
    } catch (error) {
        console.error("Error disconnecting wallet:", error);
    }
}

// **Fetch User Stats (Balance, Miners, Eggs)**
async function getUserData(dataProvider) {
    try {
        if (!userAddress) return;

        const balance = await dataProvider.getBalance(userAddress);
        const miners = await contract.getMyMiners?.(userAddress);
        const eggs = await contract.getMyEggs?.(userAddress);

        document.getElementById("balance").innerText = `Balance: ${ethers.formatEther(balance)} MON`;
        document.getElementById("miners").innerText = `Miners: ${miners || 0}`;
        document.getElementById("eggs").innerText = `Eggs: ${eggs || 0}`;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// **Ensure Phantom Requires Login on Every Visit**
window.addEventListener("beforeunload", disconnectWallet);

// **Buy Eggs (Deposit MON)**
async function buyEggs() {
    try {
        if (!contract) {
            alert("Please connect your wallet first.");
            return;
        }

        const tx = await contract.buyEggs("0x0000000000000000000000000000000000000000", { value: ethers.parseEther("0.1") });
        await tx.wait();
        alert("Eggs Purchased!");
        getUserData(new ethers.JsonRpcProvider(monadRPC));
    } catch (error) {
        console.error("Error buying eggs:", error);
    }
}

// **Hatch Eggs**
async function hatchEggs() {
    try {
        if (!contract) {
            alert("Please connect your wallet first.");
            return;
        }

        const tx = await contract.hatchEggs("0x0000000000000000000000000000000000000000");
        await tx.wait();
        alert("Eggs Hatched!");
        getUserData(new ethers.JsonRpcProvider(monadRPC));
    } catch (error) {
        console.error("Error hatching eggs:", error);
    }
}

// **Sell Eggs (Withdraw MON)**
async function sellEggs() {
    try {
        if (!contract) {
            alert("Please connect your wallet first.");
            return;
        }

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