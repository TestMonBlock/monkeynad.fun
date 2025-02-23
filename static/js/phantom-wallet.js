document.addEventListener("DOMContentLoaded", async () => {
    console.log("Phantom Wallet Injection for Monad Testnet Started");

    if (window.ethereum && window.ethereum.isPhantom) {
        console.log("Phantom Wallet detected!");

        try {
            // Ensure Ethers.js is available
            if (typeof ethers === "undefined") {
                console.error("Ethers.js is not loaded!");
                return;
            }

            // Define Monad Testnet parameters
            const MONAD_TESTNET_PARAMS = {
                chainId: "0x279F", // Monad Testnet Chain ID (10143 in decimal)
                chainName: "Monad Testnet",
                rpcUrls: ["https://testnet-rpc.monad.xyz"],
                nativeCurrency: {
                    name: "Monad",
                    symbol: "MON",
                    decimals: 18,
                },
                blockExplorerUrls: ["https://testnet.monadexplorer.com"],
            };

            // Validate Hex String Format
            if (!/^0x[a-fA-F0-9]+$/.test(MONAD_TESTNET_PARAMS.chainId)) {
                console.error("Invalid hex string for chain ID:", MONAD_TESTNET_PARAMS.chainId);
                return;
            }

            // Check the current network
            const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
            if (currentChainId !== MONAD_TESTNET_PARAMS.chainId) {
                console.log("Switching to Monad Testnet...");

                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: MONAD_TESTNET_PARAMS.chainId }],
                    });
                } catch (switchError) {
                    // If the network is not added, add it
                    if (switchError.code === 4902) {
                        console.log("Adding Monad Testnet to Phantom...");
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [MONAD_TESTNET_PARAMS],
                        });
                    } else {
                        throw switchError;
                    }
                }
            }

            // Connect Phantom Wallet
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected to Phantom:", accounts[0]);

            // Store wallet address
            localStorage.setItem("phantom_wallet", accounts[0]);

            // Use Ethers.js provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
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
