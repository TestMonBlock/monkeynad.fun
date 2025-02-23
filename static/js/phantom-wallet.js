document.addEventListener("DOMContentLoaded", async () => {
    console.log("Phantom Wallet Injection for Monad Testnet Started");

    if (!window.ethereum) {
        console.warn("Ethereum provider not found!");
        return;
    }

    try {
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

        // Get current chain ID
        const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

        // Validate Chain ID Format
        if (!/^0x[a-fA-F0-9]+$/.test(MONAD_TESTNET_PARAMS.chainId)) {
            console.error("Invalid hex string for chain ID:", MONAD_TESTNET_PARAMS.chainId);
            return;
        }

        if (currentChainId !== MONAD_TESTNET_PARAMS.chainId) {
            console.log("Switching to Monad Testnet...");

            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: MONAD_TESTNET_PARAMS.chainId }],
                });
            } catch (switchError) {
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

        localStorage.setItem("phantom_wallet", accounts[0]);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        console.log("Connected to Monad Testnet via Phantom!");
        console.log("Signer Address:", await signer.getAddress());

        if (typeof initDApp === "function") {
            initDApp(signer);
        }
    } catch (err) {
        console.error("Phantom connection failed:", err);
    }
});
