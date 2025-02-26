import React, {
    Component
} from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "./views/Home/Home";
import {
    Utils,
    date2CountdownString
} from "./utils/utils";
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nativeBalance: 0,
            contractBalance: 0,
            barrelFullTime: "Aug 09 2000 14:00:00 UTC",
            isDisabled: false, // New state for disabling the button
        };
    }
    async componentDidMount() {
        this.checkContract();
        this.timer = setInterval(() => {
            this.checkContract();
        }, 1000);
    }

    checkContract = () => {
        if (Utils.web3 && Utils.brewedbeans && this.props.address) {
            clearInterval(this.timer);
            this.getContractStats();
        }
    };

    getContractStats = async () => {
        clearTimeout(this.timeout);
        try {
            const nativeBalance = Utils.web3.utils.fromWei(
                await Utils.web3.eth.getBalance(this.props.address), 'ether');
            const contractBalance = Utils.web3.utils.fromWei(
                await Utils.web3.eth.getBalance(Utils.brewedbeans._address), 'ether');
            const myMiners = await Utils.brewedbeans.methods
                .getMyMiners(this.props.address)
                .call();
            const myEggs = await Utils.brewedbeans.methods
                .getMyEggs(this.props.address)
                .call();
            const userTreasury = await Utils.brewedbeans.methods
                .userTreasury(this.props.address)
                .call();
            const userTotalDeposits = Utils.web3.utils.fromWei(
                await Utils.brewedbeans.methods
                .getBNBDeposited(this.props.address)
                .call(), 'ether');
            const userTreasuryDays = await Utils.brewedbeans.methods
                .userTreasuryDays(this.props.address)
                .call();
            const treasuryCheck = (parseFloat(userTreasuryDays) + 1 * 0.1) > parseFloat(userTotalDeposits);
            let myEarns = 0;
            let hireEstimates = 0;
            let bnbPerHour = 0;
            let barrelFullTime = "Aug 09 2000 14:00:00 UTC";
            if (myEggs > 0) {
                myEarns = Utils.web3.utils.fromWei(
                    await Utils.brewedbeans.methods.beanRewards(this.props.address).call(), 'ether');
                const estimateEggs = parseFloat(await Utils.brewedbeans.methods
                    .calculateEggBuySimple(Utils.web3.utils.toWei("0.1", 'ether'))
                    .call()).toFixed(1);
                hireEstimates = estimateEggs / 1080000;
                const lastHatchTime = await Utils.brewedbeans.methods
                    .lastHatch(this.props.address)
                    .call();

                if (contractBalance * 1 > 0) {
                    const curTime = new Date().getTime() / 1000; // Convert to seconds
                    const elapsedTime = curTime - parseInt(lastHatchTime); // Time since last compound
                    const totalFillTime = parseInt(userTreasury) + 86400; // Time to completely fill the treasury

                    // Calculate the percentage of treasury filled
                    let treasuryFillPercentage = (elapsedTime / totalFillTime) * 100;

                    // Cap at 100% if it exceeds
                    if (treasuryFillPercentage > 100) {
                        treasuryFillPercentage = 100;
                    }

                    bnbPerHour = treasuryFillPercentage;
                }
                if (Number(bnbPerHour) < 0.000001) {
                    bnbPerHour = 0;
                }
                if (Number(myEarns) < 0.000001) {
                    myEarns = 0;
                }

                barrelFullTime = date2CountdownString(
                    new Date((parseInt(lastHatchTime) + 86400) * 1000)
                );
            }

            this.setState({
                contractBalance: contractBalance,
                nativeBalance: nativeBalance,
                myMiners: myMiners,
                myEarns: myEarns,
                userTreasury: userTreasury,
                hireEstimates: hireEstimates,
                bnbPerHour: bnbPerHour,
                barrelFullTime: barrelFullTime,
                userTotalDeposits: userTotalDeposits,
                isDisabled: treasuryCheck,
            });
        } catch (e) {
            console.log(e);
        }

        this.timeout = setTimeout(() => {
            this.getContractStats();
        }, 10000);
    };

    render() {
        return ( <
            Switch >
            <
            Route exact path = "/"
            render = {
                () => ( <
                    Home address = {
                        this.props.address
                    }
                    nativeBalance = {
                        this.state.nativeBalance
                    }
                    myMiners = {
                        this.state.myMiners
                    }
                    myEarns = {
                        this.state.myEarns
                    }
                    hireEstimates = {
                        this.state.hireEstimates
                    }
                    lastHatchTime = {
                        this.state.lastHatchTime
                    }
                    bnbPerHour = {
                        this.state.bnbPerHour
                    }
                    contractBalance = {
                        this.state.contractBalance
                    }
                    barrelFullTime = {
                        this.state.barrelFullTime
                    }
                    userTotalDeposits = {
                        this.state.userTotalDeposits
                    }
                    isDisabled = {
                        this.state.isDisabled
                    }
                    />
                )
            }
            />

            <
            Route render = {
                () => ( <
                    Home address = {
                        this.props.address
                    }
                    nativeBalance = {
                        this.state.nativeBalance
                    }
                    myMiners = {
                        this.state.myMiners
                    }
                    myEarns = {
                        this.state.myEarns
                    }
                    hireEstimates = {
                        this.state.hireEstimates
                    }
                    lastHatchTime = {
                        this.state.lastHatchTime
                    }
                    bnbPerHour = {
                        this.state.bnbPerHour
                    }
                    barrelFullTime = {
                        this.state.barrelFullTime
                    }
                    userTotalDeposits = {
                        this.state.userTotalDeposits
                    }
                    isDisabled = {
                        this.state.isDisabled
                    }
                    />
                )
            }
            /> <
            /Switch>
        );
    }
}

export default Routes;