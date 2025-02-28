// Monad Testnet Config
const contractAddress = "YOUR_MONAD_CONTRACT_ADDRESS"; // Replace with actual deployed address
const monadRPC = "https://monad.testnet.rpc"; // Replace with Monad Testnet RPC URL
const monadChainId = "0xMONAD_CHAIN_ID"; // Replace with actual Chain ID

// ABI of your contract (Replace with actual ABI)
const contractABI = [
    // ABI goes here, replace with the real contract ABI
];

// Ethereum provider
const provider = new ethers.BrowserProvider(window.ethereum);
let signer;
let contract;

async function connectWallet() {
    try {
        if (!window.ethereum) throw new Error("No EVM-compatible wallet found.");

        // Prompt user to switch/add Monad Testnet
        await window.ethereum.request({ method: "wallet_addEthereumChain", params: [{
            chainId: monadChainId,
            rpcUrls: [monadRPC],
            chainName: "Monad Testnet",
            nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 }
        }] });

        // Request wallet connection
        await window.ethereum.request({ method: "eth_requestAccounts" });
        
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        document.getElementById("walletAddress").innerText = await signer.getAddress();
        getUserData();
    } catch (error) {
        console.error("Wallet connection failed:", error);
    }
}

// Fetch user stats
async function getUserData() {
    const user = await signer.getAddress();
    const balance = await provider.getBalance(user);
    const miners = await contract.getMyMiners(user);
    const eggs = await contract.getMyEggs(user);

    document.getElementById("balance").innerText = ethers.formatEther(balance);
    document.getElementById("miners").innerText = miners;
    document.getElementById("eggs").innerText = eggs;
}

// Buy eggs (deposit MON)
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

// Sell eggs (withdraw MON)
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
