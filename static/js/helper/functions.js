import Web3 from "web3";
import moment from "moment";
import {
    RPC_URL
} from "../constant";


export const trimAddress = (addr = '') => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
}


export const getWeb3 = () => {
    return new Web3(RPC_URL);
}

export const formatDateWithZone = (unixTime) => {
    try {
        let dateString = new Date(`${unixTime} UTC`).toString();
        let startIndex = dateString.indexOf("GMT");
        let modifyDate = dateString.substring(0, startIndex);
        return modifyDate;
    } catch (err) {
        console.log(err.message);
    }

}

export const shorterDate = (unixTime = 0) => {
    return moment(unixTime).format("MMM Do YY");
}


export const formatPrice = (num, decimals = 8) => {
    if (num >= 1) {
        return new Intl.NumberFormat('en-US', {
            maximumSignificantDigits: decimals
        }).format(num);
    } else {
        return new Intl.NumberFormat('en-US', {
            maximumSignificantDigits: 5
        }).format(num);
    }
}