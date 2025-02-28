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

        // Step 1: Get the current Chain ID
        let currentChainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log("Wallet is returning Chain ID:", currentChainId);

        // Step 2: If Phantom is stuck on Ethereum Mainnet (`0x1`), force it to use Monad Testnet RPC
        if (currentChainId === "0x1") {
            alert("Phantom Wallet is stuck on Ethereum Mainnet. Trying to force Monad Testnet...");

            try {
                // Force Phantom to use Monad Testnet by sending a request to the RPC
                const response = await fetch("https://testnet-rpc.monad.xyz", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_chainId", params: [] }),
                });

                const rpcResult = await response.json();
                console.log("Monad RPC responded with Chain ID:", rpcResult);

                // Re-fetch the chain ID from Phantom after forcing the RPC request
                currentChainId = await window.ethereum.request({ method: "eth_chainId" });
                console.log("After RPC request, Chain ID is:", currentChainId);
            } catch (rpcError) {
                console.error("Failed to connect to Monad RPC:", rpcError);
                alert("Failed to connect to Monad Testnet RPC. Try restarting Phantom.");
                return;
            }

            if (currentChainId === "0x1") {
                alert("Phantom is still stuck on Ethereum Mainnet. Try restarting Phantom Wallet.");
                return;
            }
        }

        // Step 3: If the network is still incorrect, stop the connection
        if (currentChainId !== monadChainId) {
            alert(`Unexpected network detected: ${currentChainId}. Make sure you are on Monad Testnet.`);
            return;
        }

        // Step 4: Request access to accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        // Step 5: Initialize Provider, Signer & Contract
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Step 6: Update UI with connected wallet address
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
