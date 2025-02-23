document.addEventListener("DOMContentLoaded", async () => {
    console.log("Phantom Wallet Injection for Monad Testnet Started");

    if (window.solana && window.solana.isPhantom) {
        console.log("Phantom Wallet detected!");

        try {
            // Connect Phantom Wallet
            const response = await window.solana.connect();
            console.log("Connected to Phantom:", response.publicKey.toString());

            // Store wallet address
            localStorage.setItem("phantom_wallet", response.publicKey.toString());

            // Configure Monad Testnet RPC
            const MONAD_RPC = "https://testnet-rpc.monad.xyz";

            // Ensure Phantom is using Monad
            const provider = new ethers.providers.JsonRpcProvider(MONAD_RPC);
            const wallet = new ethers.Wallet(response.publicKey.toString(), provider);

            console.log("Connected to Monad Testnet via Phantom!");

            // Inject wallet into existing DApp logic
            if (typeof initDApp === "function") {
                initDApp(wallet);
            }
        } catch (err) {
            console.error("Phantom connection failed:", err);
        }
    } else {
        console.warn("Phantom Wallet not found! Please install it.");
    }
});
