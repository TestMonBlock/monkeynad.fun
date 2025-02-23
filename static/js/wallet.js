document.addEventListener("DOMContentLoaded", async () => {
    const connectButton = document.getElementById("connect-wallet");
    const walletStatus = document.getElementById("wallet-status");

    connectButton.addEventListener("click", async () => {
        showWalletSelection();
    });

    async function showWalletSelection() {
        const userChoice = await walletSelectionPopup();

        if (userChoice === "phantom") {
            connectPhantomWallet();
        } else if (userChoice === "other") {
            connectOtherWallet();
        } else {
            console.log("No wallet selected.");
        }
    }

    async function connectPhantomWallet() {
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                console.log("Connected to Phantom:", response.publicKey.toString());
                walletStatus.textContent = "Connected: " + response.publicKey.toString();
                localStorage.setItem("wallet_address", response.publicKey.toString());
                
                // Initialize your DApp with the connected wallet
                initDApp(response.publicKey.toString());
            } catch (err) {
                console.error("Phantom connection failed:", err);
                walletStatus.textContent = "Phantom Wallet connection failed.";
            }
        } else {
            alert("Phantom Wallet not installed. Please install it and try again.");
        }
    }

    async function connectOtherWallet() {
        console.log("Handling other wallets...");
        alert("Other wallet integration will be handled here.");
        // Add logic for WalletConnect, MetaMask, etc.
    }

    function walletSelectionPopup() {
        return new Promise((resolve) => {
            const selection = prompt("Choose your wallet: \n1 - Phantom \n2 - Other Wallets");
            if (selection === "1") {
                resolve("phantom");
            } else if (selection === "2") {
                resolve("other");
            } else {
                resolve(null);
            }
        });
    }

    function initDApp(walletAddress) {
        console.log("DApp initialized with wallet:", walletAddress);
        // Inject the wallet address into your existing logic
    }
});