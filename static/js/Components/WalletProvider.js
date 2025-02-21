import {
    createWeb3Modal
} from "@web3modal/wagmi/react";
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import {
    WagmiProvider,
    createConfig,
    http
} from "wagmi";
import {
    bsc
} from "wagmi/chains";
import {
    injected,
    metaMask,
    safe,
    walletConnect
} from "wagmi/connectors";
import {
    PROJECT_ID
} from "../constant";

const queryClient = new QueryClient();

export const config = createConfig({
    chains: [bsc],
    connectors: [injected(), walletConnect({
        projectId: PROJECT_ID
    }), metaMask(), safe()],
    transports: {
        [bsc.id]: http(),
    },
});

// 3. Create modal
createWeb3Modal({
    wagmiConfig: config,
    projectId: PROJECT_ID,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true, // Optional - false as default
});

export function Web3ModalProvider({
    children
}) {
    return ( <
        WagmiProvider config = {
            config
        } >
        <
        QueryClientProvider client = {
            queryClient
        } > {
            children
        } < /QueryClientProvider> <
        /WagmiProvider>
    );
}