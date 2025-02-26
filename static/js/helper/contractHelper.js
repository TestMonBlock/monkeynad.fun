import {
    ethers
} from "ethers";
import multicallAbi from '../abi/Multicall.json'
import BakedBeansAbi from '../abi/BakedBeans.json'
import {
    getWeb3
} from "./functions";
import {
    BEANS_TO_HATCH_1BEAN,
    CONTRACT_ADDRESS,
    FEES,
    MULTICALL_ADDRESS
} from "../constant";

export const getContract = (abi, address, library) => {
    try {
        return new ethers.Contract(address, abi, library)
    } catch {
        return false;
    }
}

export const getWeb3Contract = (abi, address) => {
    let web3 = getWeb3();
    return new web3.eth.Contract(abi, address);
}


export const getMultiCall = async (calls = []) => {
    let web3 = getWeb3();
    const mc = new web3.eth.Contract(multicallAbi, MULTICALL_ADDRESS);
    const callRequests = calls.map((call) => {
        const callData = call.encodeABI();
        return {
            target: call._parent._address,
            callData,
        };
    });

    const {
        returnData
    } = await mc.methods
        .aggregate(callRequests)
        .call({});

    let finalData = returnData.map((hex, index) => {
        const types = calls[index]._method.outputs.map((o) =>
            o.internalType !== o.type && o.internalType !== undefined ? o : o.type
        );

        let result = web3.eth.abi.decodeParameters(types, hex);

        delete result.__length__;

        result = Object.values(result);

        return result.length === 1 ? result[0] : result;
    });

    return finalData;
}

export const getBeansAmount = async (amount = 0) => {
    try {
        let presaleContract = getWeb3Contract(BakedBeansAbi, CONTRACT_ADDRESS);
        let response = await presaleContract.methods.calculateEggBuySimple(ethers.utils.parseEther(amount.toString())).call();
        let totalEggs = parseFloat(response) - parseFloat(response * FEES / 100);
        let finalEggsAmount = parseFloat(totalEggs) / BEANS_TO_HATCH_1BEAN;
        return finalEggsAmount

    } catch (err) {
        console.log(err.message)
    }
}