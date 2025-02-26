import {
    useWeb3Modal
} from "@web3modal/wagmi/react";
import {
    useAccount
} from "wagmi";

const trimAddress = (address) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
};

export const ConnectButton = function({
    className
}) {
    const {
        open
    } = useWeb3Modal();
    const {
        address,
        isDisconnected
    } = useAccount();

    return ( <
        > {
            address && !isDisconnected ? ( <
                button className = {
                    className
                }
                onClick = {
                    () => open()
                } > {
                    trimAddress(address)
                } <
                /button>
            ) : ( <
                button className = {
                    className
                }
                onClick = {
                    () => open()
                } >
                Connect <
                /button>
            )
        } <
        />
    );
};

export default ConnectButton;