// Monad Testnet Configuration
const contractAddress = "0xYOUR_CONTRACT_ADDRESS_HERE"; // Replace with actual deployed contract address
const monadRPC = "https://testnet-rpc.monad.xyz"; // Official Monad Testnet RPC
const monadChainId = "0x279F"; // Correct Chain ID (10143 in hexadecimal)

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

        // Request Wallet Connection
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (!accounts || accounts.length === 0) {
            alert("No accounts found. Please unlock your wallet.");
            return;
        }

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAddress = accounts[0];

        // **Change UI**
        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        document.getElementById("connectWallet").innerText = "Disconnect";
        document.getElementById("connectWallet").onclick = disconnectWallet;

        getUserData();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Ensure Phantom is unlocked.");
    }
}

// **Disconnect Wallet & Reset UI**
async function disconnectWallet() {
    try {
        userAddress = null;

        // **Reset UI**
        document.getElementById("walletAddress").innerText = "Not Connected";
        document.getElementById("connectWallet").innerText = "Connect Wallet";
        document.getElementById("connectWallet").onclick = connectWallet;

        alert("Phantom Wallet disconnected.");
    } catch (error) {
        console.error("Error disconnecting wallet:", error);
    }
}

// **Fetch User Stats**
async function getUserData() {
    try {
        if (!userAddress) return;

        const dataProvider = new ethers.JsonRpcProvider(monadRPC);
        const balance = await dataProvider.getBalance(userAddress);

        document.getElementById("balance").innerText = `Balance: ${ethers.formatEther(balance)} MON`;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

// **Buy Eggs**
async function buyEggs() {
    try {
        if (!contract) {
            alert("Please connect your wallet first.");
            return;
        }
        const tx = await contract.buyEggs("0x0000000000000000000000000000000000000000", { value: ethers.parseEther("0.1") });
        await tx.wait();
        alert("Eggs Purchased!");
        getUserData();
    } catch (error) {
        console.error("Error buying eggs:", error);
    }
}

// **Attach event listeners**
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("buyEggs").addEventListener("click", buyEggs);
