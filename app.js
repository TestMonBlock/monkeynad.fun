// Monad Testnet Configuration (From Chainlist)
const contractAddress = "YOUR_MONAD_CONTRACT_ADDRESS"; // Replace with your deployed contract address
const monadRPC = "https://testnet-rpc.monad.xyz"; // Official Monad Testnet RPC
const monadChainId = "0x279F"; // Correct Chain ID (10143 in hexadecimal)
const monadExplorer = "https://testnet-explorer.monad.xyz"; // Official Monad Testnet Explorer

// Contract ABI (Replace with actual ABI)
const contractABI = [
    // Your contract ABI goes here
];

let provider;
let signer;
let contract;

// Connect Wallet (MetaMask & Phantom Support)
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("No EVM-compatible wallet found. Install MetaMask or Phantom.");
            return;
        }

        const chainIdHex = "0x279F"; // Monad Testnet Chain ID (10143 in hex)

        // Force add Monad Testnet
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: chainIdHex,
                chainName: "Monad Testnet",
                rpcUrls: [monadRPC],
                nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
                blockExplorerUrls: [monadExplorer]
            }]
        });

        // Switch to Monad Testnet (Phantom might need this separately)
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainIdHex }]
        });

        // Request account access
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Update UI with connected wallet address
        document.getElementById("walletAddress").innerText = accounts[0];

        getUserData();
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Check console for details.");
    }
}

// Fetch user stats (Balance, Miners, Eggs)
async function getUserData() {
    try {
        const user = await signer.getAddress();
        const balance = await provider.getBalance(user);
        const miners = await contract.getMyMiners(user);
        const eggs = await contract.getMyEggs(user);

        document.getElementById("balance").innerText = ethers.formatEther(balance);
        document.getElementById("miners").innerText = miners;
        document.getElementById("eggs").innerText = eggs;
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
