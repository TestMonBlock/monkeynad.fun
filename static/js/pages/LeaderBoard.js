import {
    zeroAddress
} from "viem";
import {
    EXPLORE_URL,
    WEEK_TIME
} from "../constant";
import {
    formatPrice,
    trimAddress
} from "../helper/functions";
import {
    useLeaderBoard
} from "../hooks/useCustomStats";
import {
    Link
} from "react-router-dom";
import Countdown, {
    zeroPad
} from 'react-countdown';

export default function LeaderBoard() {
    const {
        currentWeek,
        lastWeek,
        stats
    } = useLeaderBoard();

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed
    }) => {
        if (completed) {
            // Render a completed state
            return <span > Waiting
            for next round.. < /span>;
        } else {
            // Render a countdown
            return <span > {
                zeroPad(days, 2)
            }
            d: {
                zeroPad(hours, 2)
            }
            h: {
                zeroPad(minutes, 2)
            }
            m: {
                zeroPad(seconds, 2)
            }
            s < /span>;
        }
    };

    return ( <
        div className = "container" >
        <
        div className = "row mt-5 d-flex justify-between" >
        <
        div className = "col-2" >
        <
        Link to = "/"
        className = "btn-comman" > Back < /Link> <
        /div> <
        /div> <
        div className = "row mt-5" >
        <
        div className = "col-6 mt-2" >
        <
        div className = "d-flex justify-content-between table-head" >
        <
        h5 className = "mb-2 text-white" > Current Week Top 4 Winner < /h5> <
        p className = "mb-2" > END IN: < Countdown date = {
            (parseFloat(stats.weekStartTime) + parseFloat(WEEK_TIME)) * 1000
        }
        renderer = {
            renderer
        }
        key = {
            Math.random()
        }
        /></p >
        <
        /div> <
        table class = "table" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > # < /th> <
        th scope = "col" > User Address < /th> <
        th scope = "col" > Total Deposit < /th> <
        /tr> <
        /thead> <
        tbody > {
            currentWeek.map((user, index) => (
                user[0] !== zeroAddress &&
                <
                tr key = {
                    index
                } >
                <
                th scope = "row" > {
                    index + 1
                } < /th> <
                td >
                <
                a href = {
                    `${EXPLORE_URL}/address/${user[0]}`
                }
                target = "_blank"
                rel = "noreferrer" >
                {
                    trimAddress(user[0])
                } <
                /a> <
                /td> <
                td > {
                    formatPrice(user[1] / Math.pow(10, 18))
                } < span > BNB < /span> <
                /td> <
                /tr>
            ))
        } {
            parseFloat(stats.totalReward) > 0 &&
                <
                tr >
                <
                td colSpan = "3"
            className = "text-center text-success" > Current Price: {
                formatPrice(stats.totalReward)
            }
            BNB < /td> <
                /tr>
        } <
        /tbody> <
        /table> <
        /div> <
        div className = "col-6 mt-2" >
        <
        div className = "table-head" >
        <
        h5 className = "mb-2 text-white" > Last Week Top 4 Winner < /h5> <
        /div> <
        table class = "table" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > # < /th> <
        th scope = "col" > User Address < /th> <
        th scope = "col" > Total Earned < /th> <
        /tr> <
        /thead> <
        tbody > {
            lastWeek && lastWeek.length > 0 ?
            (lastWeek.map((user, index) => (
                user[0] !== zeroAddress &&
                <
                tr key = {
                    index
                } >
                <
                th scope = "row" > {
                    index + 1
                } < /th> <
                td >
                <
                a href = {
                    `${EXPLORE_URL}/address/${user[0]}`
                }
                target = "_blank"
                rel = "noreferrer" >
                {
                    trimAddress(user[0])
                } <
                /a> <
                /td> <
                td > {
                    formatPrice(user[2] / Math.pow(10, 18))
                } < span > BNB < /span> <
                /td> <
                /tr>
            ))) : ( <
                tr >
                <
                td colSpan = {
                    3
                } >
                No Record Found <
                /td> <
                /tr>
            )
        } <
        /tbody> <
        /table> <
        /div> <
        /div> <
        /div>
    );
}