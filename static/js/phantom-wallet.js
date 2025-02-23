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

            // Ensure Ethers.js is available
            if (typeof ethers === "undefined") {
                console.error("Ethers.js is not loaded!");
                return;
            }

            // Use Phantom's EVM provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Request access
            const signer = provider.getSigner();

            console.log("Connected to Monad Testnet via Phantom!");
            console.log("Signer Address:", await signer.getAddress());

            // Inject wallet into existing DApp logic
            if (typeof initDApp === "function") {
                initDApp(signer);
            }
        } catch (err) {
            console.error("Phantom connection failed:", err);
        }
    } else if (window.ethereum) {
        console.log("MetaMask detected!");

        try {
            // Connect MetaMask
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected to MetaMask:", accounts[0]);

            // Store wallet address
            localStorage.setItem("metamask_wallet", accounts[0]);

            // Use MetaMask provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            console.log("Connected to Monad Testnet via MetaMask!");
            console.log("Signer Address:", await signer.getAddress());

            if (typeof initDApp === "function") {
                initDApp(signer);
            }
        } catch (err) {
            console.error("MetaMask connection failed:", err);
        }
    } else {
        console.warn("No compatible wallet found! Please install Phantom or MetaMask.");
    }
});
