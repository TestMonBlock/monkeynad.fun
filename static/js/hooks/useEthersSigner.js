import {
    getConnectorClient
} from "@wagmi/core";
import {
    ethers,
    providers
} from "ethers";
import {
    config
} from "../Components/WalletProvider";
import {
    CHAIN_ID,
    RPC_URL
} from "../constant";


export function clientToSigner(client) {
    const {
        account,
        chain,
        transport
    } = client
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts ? .ensRegistry ? .address,
    }
    const provider = new providers.Web3Provider(transport, network)
    const signer = provider.getSigner(account.address)
    return signer
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner() {
    const client = await getConnectorClient(config, {
        chainId: CHAIN_ID
    });
    return clientToSigner(client);
}

/** Action to convert a viem Client to an ethers.js Provider. */
export function getEthersProvider() {
    const client = new ethers.providers.JsonRpcProvider(RPC_URL)
    return client
}