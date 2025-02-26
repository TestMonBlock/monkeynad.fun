import React, {
    Component
} from "react";
import Routes from "./routes";
import {
    Utils
} from "./utils/utils";
import {
    BrowserRouter
} from "react-router-dom";
import {
    createWeb3Modal,
    defaultConfig
} from "@web3modal/ethers5";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "48ebe254929360f50845788f8e086d38";

// 2. Set chains
const bsc = {
    chainId: 56,
    name: "BSC",
    currency: "BNB",
    explorerUrl: "https:/bscscan.com/",
    rpcUrl: "https://bsc-dataseed1.ninicoin.io",
};

// 3. Create your application's metadata object
const metadata = {
    name: "Brewed Beans",
    description: "Brewed Beans",
    url: "https://brewedbeans.money/", // origin must match your domain & subdomain
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: false, // true by default
});

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
    ethersConfig,
    chains: [bsc],
    projectId,
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: "en",
            address: null,
        };
    }

    async componentDidMount() {
        modal.subscribeProvider(this.readWeb3Instance);
    }

    readWeb3Instance = async () => {
        const provider = modal.getWalletProvider();

        if (provider) {
            Utils.setWeb3(provider);
            provider
                .request({
                    method: "eth_requestAccounts"
                })
                .then((accounts) => {
                    this.handleAccountsChanged(accounts);
                })
                .catch((err) => {
                    console.error(err);
                });
            provider.on("accountsChanged", (accounts) => {
                this.handleAccountsChanged(accounts);
            });
            provider.on("chainChanged", (accounts) => {
                window.location.reload();
            });
        } else {
            console.error("wait for MetaMask");
            Utils.setWeb3(false);
        }
    };

    handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            // MetaMask is locked or the user has not connected any accounts
            console.log("Please connect to MetaMask.");
        } else if (accounts[0] !== this.state.address) {
            this.setState({
                address: accounts[0],
            });
        }
    };

    render() {
        return ( <
            BrowserRouter >
            <
            div >
            <
            Routes address = {
                this.state.address
            }
            /> <
            /div> <
            /BrowserRouter>
        );
    }
}

export default App;