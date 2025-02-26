import Web3 from "web3";
import brewedbeans from "./bakedbeans.json";
export const BSC_DEFAULT_RPC = "https://bsc-dataseed1.ninicoin.io";
export const UNIT = 1000000000000000000;
export const brewedbeansAddress = "0x8Cc2772547737873845ba99997Dd4679b57393Ae";
export const NETWORK_ID = 56;
export const Utils = {
    web3: false,
    brewedbeans: false,
    owner: "0x0000000000000000000000000000000000000000",
    async setWeb3(provider) {
        this.web3 = new Web3(provider || BSC_DEFAULT_RPC);
        this.brewedbeans = new this.web3.eth.Contract(
            brewedbeans,
            brewedbeansAddress
        );
    },
};

export const SECOND = 1;
export const MINUTES = SECOND * 60;
export const HOUR = MINUTES * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const RELEASE_TIME = "Wed Jun 12 2024 03:00:00 UTC";

export const checkTime = (time = RELEASE_TIME) => {
    // return true;
    let now = new Date().getTime() / 1000;
    let deadline = new Date(time).getTime() / 1000;
    if (now >= deadline) {
        return true;
    }
    return false;
};

export const reduceAddress = (addr) => {
    if (addr) {
        return (
            addr.substring(0, 4) +
            "..." +
            addr.substring(addr.length - 4, addr.length)
        );
    }
};

export const date2CountdownString = (date) => {
    let n = date.toUTCString();
    let timeString =
        n.substring(0, 3) +
        n.substring(7, 12) +
        n.substring(5, 7) +
        n.substring(11, n.length - 4) +
        " UTC";
    return timeString;
};

export const getGasPrice = async () => {
    if (!Utils.web3) {
        return 1000000000;
    }
    return Math.floor(parseInt(await Utils.web3.eth.getGasPrice()) * 1.5);
};

export const validateAddr = async (addr) => {
    if (!Utils.web3.utils.isAddress(addr)) {
        return false;
    }

    return (
        addr !== "0x0000000000000000000000000000000000000000" &&
        !addr
        .toLowerCase()
        .includes(Utils.web3.currentProvider.selectedAddress.toLowerCase())
    );
};