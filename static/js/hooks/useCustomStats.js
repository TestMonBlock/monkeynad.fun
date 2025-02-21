import {
    useEffect,
    useState
} from "react";
import {
    getMultiCall,
    getWeb3Contract
} from "../helper/contractHelper";
import benasABI from "../abi/BakedBeans.json";
import {
    CONTRACT_ADDRESS,
    FEES,
    BEANS_TO_HATCH_1BEAN
} from "../constant";
import {
    useAccount
} from "wagmi";
import {
    getWeb3
} from "../helper/functions";

export const useCommonStats = (updater) => {
    const [stats, setStats] = useState({
        contract_balance: 0,
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
    });

    const beansContract = getWeb3Contract(benasABI, CONTRACT_ADDRESS);

    useEffect(() => {
        const fetch = async () => {
            try {
                let data = await getMultiCall([beansContract.methods.getBalance()]);

                setStats({
                    contract_balance: data[0] / Math.pow(10, 18),
                    // contract_balance: 0,
                    level1: 5,
                    level2: 3,
                    level3: 2,
                    level4: 1,
                });
            } catch (err) {
                console.log(err.message);
            }
        };

        fetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updater]);

    return stats;
};

export const useAccountStats = (updater) => {
    let {
        address
    } = useAccount();
    const [stats, setStats] = useState({
        getMyEggs: 0,
        beanRewards: 0,
        lastHatch: 0,
        bnbBal: 0,
        getMyMiners: 0,
        rebake: 0,
        topreward: 0,
        referral: '',
        userDeposits: 0,
        userClaims: 0,
        levelRefCount: [],
        lastDeposit: 0
    });
    const web3 = getWeb3();

    const beansContract = getWeb3Contract(benasABI, CONTRACT_ADDRESS);

    useEffect(() => {
        const fetch = async () => {
            try {
                const bnbBal = web3.utils.fromWei(
                    await web3.eth.getBalance(address),
                    "ether"
                );
                let data = await getMultiCall([
                    beansContract.methods.getMyEggs(address),
                    beansContract.methods.beanRewards(address),
                    beansContract.methods.lastHatch(address),
                    beansContract.methods.getMyMiners(address),
                    beansContract.methods.userPendings(address),
                    beansContract.methods.accounts(address),
                    beansContract.methods.userDeposits(address),
                    beansContract.methods.userClaims(address),
                    beansContract.methods.getLevelRefCount(address),
                    beansContract.methods.lastDeposit(address),
                    // beansContract.methods.lastPendingClaimed(address)
                ]);

                let rebakeData = [];
                if (parseFloat(data[1]) > 0) {
                    rebakeData = await getMultiCall([
                        beansContract.methods.calculateEggBuySimple(data[1]),
                        // beansContract.methods.calculateEggBuySimple(parseFloat(data[1]) + parseFloat(data[9])),
                    ]);
                }


                let totalEggs = parseFloat(data[0]) / BEANS_TO_HATCH_1BEAN;



                setStats({
                    getMyEggs: data[0],
                    beanRewards: parseFloat(data[1] / Math.pow(10, 18)),
                    lastHatch: data[2],
                    bnbBal,
                    getMyMiners: data[3],
                    rebake: totalEggs,
                    topreward: data[4] / Math.pow(10, 18),
                    referral: data[5][0],
                    userDeposits: data[6] / Math.pow(10, 18),
                    userClaims: data[7] / Math.pow(10, 18),
                    levelRefCount: data[8],
                    lastDeposit: data[9]
                });
            } catch (err) {
                console.log(err.message);
            }
        };

        if (address) {
            fetch();
        } else {
            setStats({
                getMyEggs: 0,
                beanRewards: 0,
                lastHatch: 0,
                getMyMiners: 0,
                rebake: 0,
                topreward: 0,
                referral: '',
                userDeposits: 0,
                userClaims: 0,
                levelRefCount: [],
                lastDeposit: 0
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updater, address]);

    return stats;
};

export const useLeaderBoard = (updater) => {
    const [currentWeek, setCurrentWeek] = useState([]);
    const [lastWeek, setLastWeek] = useState([]);
    const [stats, setStats] = useState({
        weekStartTime: 0,
        weeklyInvestment: 0,
        totalReward: 0
    })

    const beansContract = getWeb3Contract(benasABI, CONTRACT_ADDRESS);

    useEffect(() => {
        const fetch = async () => {
            try {
                const [week, weekStartTime] = await getMultiCall([
                    beansContract.methods.weekCount(),
                    beansContract.methods.weekStartTime(),
                ]);

                let data = await getMultiCall([
                    beansContract.methods.WeeklyTopUser(week),
                    beansContract.methods.WeeklyTopUser(week - 1),
                    beansContract.methods.weeklyInvestment(week),
                ]);

                setCurrentWeek(data[0]);
                setLastWeek(data[1]);
                setStats({
                    weekStartTime,
                    weekRewardPercentage: 1,
                    weeklyInvestment: data[2] / Math.pow(10, 18),
                    totalReward: (parseFloat(data[2] / Math.pow(10, 18))) / 100

                })
            } catch (err) {
                console.log(err.message);
            }
        };

        fetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updater]);

    return {
        currentWeek,
        lastWeek,
        stats
    };
};