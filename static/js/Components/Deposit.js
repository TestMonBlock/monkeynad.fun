import {
    ethers
} from "ethers";
import {
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import {
    useAccount
} from "wagmi";
import abi from "../abi/BakedBeans.json";
import {
    getEthersSigner
} from "../hooks/useEthersSigner";
import {
    CHAIN_ID,
    CONTRACT_ADDRESS,
    GAS_FEES
} from "../constant";
import {
    useAccountStats,
    useCommonStats
} from "../hooks/useCustomStats";
import {
    getBeansAmount,
    getContract
} from "../helper/contractHelper";
import {
    formatPrice,
    getWeb3
} from "../helper/functions";
import {
    useLocation
} from "react-router-dom";
import {
    toast
} from "react-toastify";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Tooltip from '@mui/material/Tooltip';


function Deposit() {
    const [inputValue, setInputValue] = useState(0);
    const [copy, setCopy] = useState("Copy Link");
    const [eggBuy, setEggBuy] = useState(0);
    const [loading, setLoading] = useState(false);
    const [rloading, setRLoading] = useState(false);
    const [sloading, setSLoading] = useState(false);
    const [tloading, setTLoading] = useState(false);
    const [updater, setUpdater] = useState(1);
    const commonStats = useCommonStats(updater);
    const accStats = useAccountStats(updater);
    const [now, setNow] = useState(Math.floor(Date.now() / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Math.floor(Date.now() / 1000)); // Update the current time every second
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    const coolDown =
        parseInt(accStats.lastHatch) + parseInt(3600) > parseInt(now) &&
        parseInt(accStats.lastHatch) > 0 ?
        parseInt(accStats.lastHatch) + 3600 - parseInt(now) :
        0;
    const depositcoolDown = useMemo(() => {
        const lastDeposit = parseInt(accStats.lastDeposit);
        const cooldownPeriod = 60; // Cooldown period in seconds

        if (lastDeposit + cooldownPeriod > now && lastDeposit > 0) {
            return lastDeposit + cooldownPeriod - now;
        }

        return 0;
    }, [accStats.lastDeposit, now]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const refAddress = queryParams.get("ref");
    const {
        address,
        chainId
    } = useAccount();
    const timeoutRef = useRef(null);

    const bakeBeans = async () => {
        try {
            if (address) {
                if (chainId && parseInt(chainId) === parseInt(CHAIN_ID)) {
                    const signer = await getEthersSigner();
                    const contract = getContract(abi, CONTRACT_ADDRESS, signer);
                    setLoading(true);
                    const value = ethers.utils.parseUnits(inputValue.toString(), 18);
                    let ref = refAddress ?
                        refAddress :
                        "0x8b99d1de5AeEC2Ba03aFB0a429186700F7b99ED4";
                    console.log(refAddress)
                    const tx = await contract.buyEggs(ref, {
                        from: address,
                        value
                    });
                    toast.loading("Waiting for confirmation");
                    var interval = setInterval(async function() {
                        let web3 = getWeb3();
                        var response = await web3.eth.getTransactionReceipt(tx.hash);
                        if (response != null) {
                            clearInterval(interval);
                            if (response.status === true) {
                                toast.dismiss();
                                toast.success("Transaction completed successfully.");
                                setLoading(false);
                                setUpdater(Math.random());
                            } else if (response.status === false) {
                                toast.dismiss();
                                toast.error("error ! Your last transaction is failed.");
                                setLoading(false);
                                setUpdater(Math.random());
                            } else {
                                toast.dismiss();
                                toast.error("error ! something went wrong.");
                                setLoading(false);
                                setUpdater(Math.random());
                            }
                        }
                    }, 5000);
                } else {
                    toast.dismiss();
                    toast.error("Please switch to bsc mainnet");
                    setLoading(false);
                }
            } else {
                toast.dismiss();
                toast.error("Please connect wallet");
                setLoading(false);
            }
        } catch (error) {
            toast.dismiss();
            console.log(error.message);
            toast.error(error.reason ? error.reason : error.message);
            setLoading(false);
        }
    };

    const reBackBeans = async () => {
        try {
            if (address) {
                if (chainId && parseInt(chainId) === parseInt(CHAIN_ID)) {
                    const signer = await getEthersSigner();
                    const contract = getContract(abi, CONTRACT_ADDRESS, signer);
                    setRLoading(true);
                    let ref = accStats.referral ? accStats.referral : "0x0000000000000000000000000000000000000000";
                    const tx = await contract.hatchEggs(ref, {
                        from: address
                    });
                    toast.loading("Waiting for confirmation");
                    var interval = setInterval(async function() {
                        let web3 = getWeb3();
                        var response = await web3.eth.getTransactionReceipt(tx.hash);
                        if (response != null) {
                            clearInterval(interval);
                            if (response.status === true) {
                                toast.dismiss();
                                toast.success("Transaction completed successfully.");
                                setRLoading(false);
                                setUpdater(Math.random());
                            } else if (response.status === false) {
                                toast.dismiss();
                                toast.error("error ! Your last transaction is failed.");
                                setRLoading(false);
                                setUpdater(Math.random());
                            } else {
                                toast.dismiss();
                                toast.error("error ! something went wrong.");
                                setRLoading(false);
                                setUpdater(Math.random());
                            }
                        }
                    }, 5000);
                } else {
                    toast.dismiss();
                    toast.error("Please switch to bsc mainnet");
                    setRLoading(false);
                }
            } else {
                toast.dismiss();
                toast.error("Please connect wallet");
                setRLoading(false);
            }
        } catch (error) {
            toast.dismiss();
            console.log(error.message);
            toast.error(error.reason ? error.reason : error.message);
            setRLoading(false);
        }
    };

    const eatBeans = async () => {
        try {
            if (address) {
                if (chainId && parseInt(chainId) === parseInt(CHAIN_ID)) {
                    const signer = await getEthersSigner();
                    const contract = getContract(abi, CONTRACT_ADDRESS, signer);
                    setSLoading(true);
                    const tx = await contract.sellEggs({
                        from: address
                    });
                    toast.loading("Waiting for confirmation");
                    var interval = setInterval(async function() {
                        let web3 = getWeb3();
                        var response = await web3.eth.getTransactionReceipt(tx.hash);
                        if (response != null) {
                            clearInterval(interval);
                            if (response.status === true) {
                                toast.dismiss();
                                toast.success("Transaction completed successfully.");
                                setSLoading(false);
                                setUpdater(Math.random());
                            } else if (response.status === false) {
                                toast.dismiss();
                                toast.error("error ! Your last transaction is failed.");
                                setSLoading(false);
                                setUpdater(Math.random());
                            } else {
                                toast.dismiss();
                                toast.error("error ! something went wrong.");
                                setSLoading(false);
                                setUpdater(Math.random());
                            }
                        }
                    }, 5000);
                } else {
                    toast.dismiss();
                    toast.error("Please switch to bsc mainnet");
                    setSLoading(false);
                }
            } else {
                toast.dismiss();
                toast.error("Please connect wallet");
                setSLoading(false);
            }
        } catch (error) {
            toast.dismiss();
            console.log(error.message);
            toast.error(error.reason ? error.reason : error.message);
            setSLoading(false);
        }
    };

    const claimReward = async () => {
        try {
            if (address) {
                if (chainId && parseInt(chainId) === parseInt(CHAIN_ID)) {
                    const signer = await getEthersSigner();
                    const contract = getContract(abi, CONTRACT_ADDRESS, signer);
                    setTLoading(true);
                    const tx = await contract.claimTopReward({
                        from: address
                    });
                    toast.loading("Waiting for confirmation");
                    var interval = setInterval(async function() {
                        let web3 = getWeb3();
                        var response = await web3.eth.getTransactionReceipt(tx.hash);
                        if (response != null) {
                            clearInterval(interval);
                            if (response.status === true) {
                                toast.dismiss();
                                toast.success("Transaction completed successfully.");
                                setTLoading(false);
                                setUpdater(Math.random());
                            } else if (response.status === false) {
                                toast.dismiss();
                                toast.error("error ! Your last transaction is failed.");
                                setTLoading(false);
                                setUpdater(Math.random());
                            } else {
                                toast.dismiss();
                                toast.error("error ! something went wrong.");
                                setTLoading(false);
                                setUpdater(Math.random());
                            }
                        }
                    }, 5000);
                } else {
                    toast.dismiss();
                    toast.error("Please switch to bsc mainnet");
                    setTLoading(false);
                }
            } else {
                toast.dismiss();
                toast.error("Please connect wallet");
                setTLoading(false);
            }
        } catch (error) {
            toast.dismiss();
            console.log(error.message);
            toast.error(error.reason ? error.reason : error.message);
            setTLoading(false);
        }
    };

    const handleChangeAmount = async (e) => {

        let value = e;
        const patt = /^\d+\.{0,1}\d{0,6}$/;

        if (value === "" || value === "0") {
            setInputValue(value);
            setEggBuy(0);
        } else if (patt.test(value)) {
            setInputValue(value);
        }

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(async () => {
            if (patt.test(value)) {
                let resAmount = await getBeansAmount(value);
                setEggBuy(resAmount);
            }
        }, 1000);
    };

    const onClickPercentage = (per = 100) => {
        try {
            let calBal = parseFloat(
                parseFloat((accStats.bnbBal * per) / 100).toFixed(5)
            );
            const maxCan = parseFloat((parseFloat(commonStats.contract_balance) * 15) / 100).toFixed(5)
            if (per === 100) {

                calBal = parseFloat(
                    parseFloat(parseFloat(calBal) - parseFloat(GAS_FEES)).toFixed(5)
                );
            }

            if (parseFloat(calBal) >= parseFloat(maxCan)) {
                handleChangeAmount(maxCan);
            } else {
                handleChangeAmount(calBal);
            }


        } catch (err) {
            console.log(err.message);
            setInputValue(0);
        }
    };

    return ( <
        >
        <
        div className = "card" >
        <
        div className = "card-body" >
        <
        div className = "grid-container" >
        <
        p > Contract < /p> <
        h5 > {
            commonStats.contract_balance ?
            formatPrice(commonStats.contract_balance, 5) :
                0
        } {
            " "
        }
        BNB <
        /h5> <
        /div> <
        div className = "grid-container" >
        <
        p > Wallet < /p> <
        h5 > {
            accStats.bnbBal ? formatPrice(accStats.bnbBal, 5) : 0
        }
        BNB < /h5> <
        /div> <
        div className = "grid-container" >
        <
        p > Your Beans < /p> <
        h5 > {
            accStats.getMyMiners ? parseInt(accStats.getMyMiners) : 0
        }
        BEANS <
        /h5> <
        /div> {
            address &&
                <
                div className = "grid-container" >
                <
                p > Withdrawal limit < /p> <
                h5 > {
                    accStats.userClaims ? formatPrice(accStats.userClaims) : 0
                }
            / {accStats.userDeposits ? formatPrice(accStats.userDeposits * 2) : 0}  BNB <
            /h5> <
            /div>
        }

        <
        div className = "box-root" >
        <
        div className = "box-root-inner" >
        <
        input className = "value"
        value = {
            inputValue
        }
        onChange = {
            (e) => handleChangeAmount(e.target.value)
        }
        type = "text"
        placeholder = "0" /
        >
        <
        p > BNB < /p> <
        /div> <
        /div> <
        div className = "grid-box" >
        <
        div className = "grid-box-inner" >
        <
        button onClick = {
            () => onClickPercentage(25)
        }
        className = "grid-box-btn"
        tabIndex = "0"
        type = "button" >
        25 % < span > < /span> <
        /button> <
        /div> <
        div className = "grid-box-inner" >
        <
        button onClick = {
            () => onClickPercentage(50)
        }
        className = "grid-box-btn"
        tabIndex = "0"
        type = "button" >
        50 % < span > < /span> <
        /button> <
        /div> <
        div className = "grid-box-inner" >
        <
        button onClick = {
            () => onClickPercentage(75)
        }
        className = "grid-box-btn"
        tabIndex = "0"
        type = "button" >
        75 % < span > < /span> <
        /button> <
        /div> <
        div className = "grid-box-inner" >
        <
        button onClick = {
            () => onClickPercentage(100)
        }
        className = "grid-box-btn"
        tabIndex = "0"
        type = "button" >
        100 % < span > < /span> <
        /button> <
        /div>

        <
        div className = "grid-box-inner" >
        <
        button onClick = {
            () => onClickPercentage(100)
        }
        className = "grid-box-btn"
        tabIndex = "0"
        type = "button" >
        MAX < span > < /span> <
        /button> <
        /div> <
        /div>

        <
        button onClick = {
            bakeBeans
        }
        className = "btn-comman"
        disabled = {
            loading || inputValue <= 0 || depositcoolDown > 0
        } >
        {
            loading ? "Loading..." : depositcoolDown > 0 ?
                `COOL DOWN ${Math.round(depositcoolDown)}s` : "BAKE BEANS"
        } <
        /button> {
            parseInt(eggBuy) > 0 && ( <
                div className = "text-center my-2 mb-4" >
                <
                h5 style = {
                    {
                        color: "rgb(23, 33, 94)",
                    }
                } >
                YOU GET {
                    Math.floor(eggBuy)
                }
                BEANS <
                /h5> <
                /div>
            )
        } <
        div className = "grid-container" >
        <
        h5 > RE - BAKE < /h5> <
        h5 > YOUR REWARDS < /h5> <
        /div> <
        div className = "grid-container mt-1" >
        <
        h5 > {
            parseInt(accStats.rebake)
        }
        BEANS < /h5> <
        h5 > {
            formatPrice(accStats.beanRewards)
        }
        BNB < /h5> <
        /div> <
        div className = "row mt-4" >
        <
        div className = "col-6" >
        <
        button type = "button"
        onClick = {
            reBackBeans
        }
        className = {
            `btn-rebake
              ${coolDown > 0 || rloading || accStats.userDeposits <= 0 ? "disabled" : ""}
                `
        }
        disabled = {
            coolDown > 0 || rloading || accStats.userDeposits <= 0
        } >
        {
            rloading ?
            "Loading..." :
                coolDown > 0 ?
                `COOL DOWN ${Math.round(coolDown / 60)}` :
                "RE-BAKE"
        } <
        /button> <
        /div> <
        div className = "col-6" >
        <
        button disabled = {
            sloading || accStats.userDeposits <= 0
        }
        type = "button"
        onClick = {
            eatBeans
        }
        className = "btn-eat" >
        {
            sloading ? "Loading..." : "EAT BEANS"
        } <
        /button> <
        /div> <
        /div> <
        div className = "row mt-4 d-flex align-items-center" >
        <
        div className = "col-12 mb-2 text-center" >
        <
        h5 > YOUR WEEKLY TOP REWARD <
        Tooltip title = "Reward the top users: every 3 day, the top 4 users by deposit will receive a 1% share of the total deposits"
        className = "mx-1" >
        <
        HelpOutlineRoundedIcon sx = {
            {
                color: "#040054"
            }
        }
        fontSize = "small" / >
        <
        /Tooltip> <
        /h5> <
        /div> <
        div className = "col-6" >
        <
        h5 className = "mx-3" > {
            accStats.topreward ? formatPrice(accStats.topreward) : 0
        }
        BNB < /h5> <
        /div> <
        div className = "col-6" >
        <
        button onClick = {
            () => claimReward()
        }
        className = "btn-eat"
        disabled = {
            tloading || parseFloat(accStats.topreward) <= 0
        } >
        {
            tloading ? 'Loading...' : 'CLAIM'
        } <
        /button> <
        /div> <
        /div>

        <
        /div> <
        /div> { /* <button className="btn-eat">SHOW COIN FLIP</button> */ } <
        div className = "card card-referral mt-3" >
        <
        div className = "card-body" >
        <
        h5 className = "card-referral-title" > Referral Link < /h5> <
        input readOnly = ""
        className = "copy-input"
        value = {
            address ? `${window.location.origin}?ref=${address}` : "Please connect wallet"
        } >
        < /input> <
        button style = {
            {
                backgroundColor: "rgb(80, 196, 237)",
                marginTop: "10px",
            }
        }
        onClick = {
            () => {
                navigator.clipboard.writeText(
                    address ? `${window.location.origin}?ref=${address}` : 'Please Connect Wallet'
                );
                setCopy("Copied");
                setTimeout(() => {
                    setCopy("Copy Link");
                }, 600);
            }
        }
        className = "btn-comman" >
        {
            copy
        } <
        /button> <
        div className = "d-flex justify-content-around my-2 text-white"
        style = {
            {
                fontSize: "12px"
            }
        } >
        <
        div > Level 1: {
            commonStats.level1
        } % < /div> <
        div > Level 2: {
            commonStats.level2
        } % < /div> <
        div > Level 3: {
            commonStats.level3
        } % < /div> <
        div > Level 4: {
            commonStats.level4
        } % < /div> <
        /div> {
            address &&
                <
                >
                <
                p className = "text-white text-center mb-0 mt-4" > Your Team Count < /p> <
                div className = "d-flex justify-content-around mt-1 text-white"
            style = {
                    {
                        fontSize: "10px"
                    }
                } >
                <
                div > Level 1: {
                    accStats.levelRefCount && accStats.levelRefCount[0] ? parseFloat(accStats.levelRefCount[0]) : 0
                } < /div> <
                div > Level 2: {
                    accStats.levelRefCount && accStats.levelRefCount[1] ? parseFloat(accStats.levelRefCount[1]) : 0
                } < /div> <
                div > Level 3: {
                    accStats.levelRefCount && accStats.levelRefCount[2] ? parseFloat(accStats.levelRefCount[2]) : 0
                } < /div> <
                div > Level 4: {
                    accStats.levelRefCount && accStats.levelRefCount[3] ? parseFloat(accStats.levelRefCount[3]) : 0
                } < /div> <
                /div> <
                />
        } <
        p className = "card-referral-desc" >
        Invite your friends using your link and earn upto 5 % of any Beans they BAKE and 1 % of Re - BAKES.Referral Rewards are additional and are not deducted from your friends ' beans. <
        /p> <
        /div> <
        /div> <
        />
    );
}
export default Deposit;