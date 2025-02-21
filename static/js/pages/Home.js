import React, {
    useState
} from 'react'
import ConnectButton from "../Components/ConnectButton";
import Deposit from '../Components/Deposit';
import {
    Link
} from 'react-router-dom';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Tooltip from '@mui/material/Tooltip';
import Countdown, {
    zeroPad
} from 'react-countdown';
import {
    ENDTIME,
    EXPLORE_URL,
    CONTRACT_ADDRESS,
    BASE_URL
} from '../constant';
import hazeImg from '../Assets/img/haze.png';
import auditImg from '../Assets/img/solid-proff.png';
import NotificationModal from '../Components/NotificationModal';


export default function Home() {
    // const [modalShow, setModalShow] = useState(true);
    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed
    }) => {
        if (completed) {
            // Render a completed state
            return ( < div class = "row countdown-container" >
                <
                div class = "col countdown-box" >
                <
                div class = "time"
                id = "days" > 00 < /div> <
                div class = "label" > Days < /div> <
                /div> <
                div class = "col countdown-box" >
                <
                div class = "time"
                id = "hours" > 00 < /div> <
                div class = "label" > Hours < /div> <
                /div> <
                div class = "col countdown-box" >
                <
                div class = "time"
                id = "minutes" > 00 < /div> <
                div class = "label" > Minutes < /div> <
                /div> <
                div class = "col countdown-box" >
                <
                div class = "time"
                id = "seconds" > 00 < /div> <
                div class = "label" > Seconds < /div> <
                /div> <
                /div>);
            }
            else {
                // Render a countdown
                return ( <
                    div class = "row countdown-container" >
                    <
                    div class = "col countdown-box" >
                    <
                    div class = "time"
                    id = "days" > {
                        zeroPad(days, 2)
                    } < /div> <
                    div class = "label" > Days < /div> <
                    /div> <
                    div class = "col countdown-box" >
                    <
                    div class = "time"
                    id = "hours" > {
                        zeroPad(hours, 2)
                    } < /div> <
                    div class = "label" > Hours < /div> <
                    /div> <
                    div class = "col countdown-box" >
                    <
                    div class = "time"
                    id = "minutes" > {
                        zeroPad(minutes, 2)
                    } < /div> <
                    div class = "label" > Minutes < /div> <
                    /div> <
                    div class = "col countdown-box" >
                    <
                    div class = "time"
                    id = "seconds" > {
                        zeroPad(seconds, 2)
                    } < /div> <
                    div class = "label" > Seconds < /div> <
                    /div> <
                    /div>
                )
            }
        };

        return ( <
            >
            <
            div className = "main-area" >
            <
            ConnectButton className = "btn-primary" / >

            <
            div className = "logo-area" >
            <
            img src = {
                require("../Assets/img/logo.png")
            }
            style = {
                {
                    width: "50%"
                }
            }
            alt = "rounded" /
            >
            <
            h6 className = "cont-title" >
            Long term Miner With New Sustainability Features 8 % Daily variable Income <
            /h6>

            <
            ConnectButton className = "btn-primary-mob" / >
            <
            div className = 'mt-0' >
            <
            h4 className = 'text-white' > LAUNCHING IN < /h4> <
            Countdown date = {
                ENDTIME * 1000
            }
            renderer = {
                renderer
            }
            key = {
                Math.random()
            }
            /> <
            /div> <
            div className = 'mt-0 row bg-dark pb-4 pt-2' >
            <
            div className = 'col-12' >
            <
            h3 className = 'text-white' > Audits < /h3> <
            /div> <
            div className = 'col-6' >
            <
            a href = {
                `https://github.com/solidproof/Projects/blob/main/2024/UltimateBakedBeans/Smartcontract_Audit_Solidproof_ULTIMATEBAKEDBEANS.pdf`
            }
            target = '_blank'
            rel = "noreferrer" >
            <
            img src = {
                auditImg
            }
            height = "100px"
            width = "100%"
            alt = 'secutiry' / >
            <
            /a> <
            /div> <
            div className = 'col-6' >
            <
            a href = {
                `https://hazecrypto.net/audit/ultimatebakedbean`
            }
            target = '_blank'
            rel = "noreferrer" >
            <
            img src = {
                hazeImg
            }
            height = "100px"
            width = "=100%"
            alt = 'secutiry' / >
            <
            /a> <
            /div> <
            /div> <
            /div>

            <
            div className = "button-area" >
            <
            a target = '_blank'
            rel = "noreferrer"
            href = {
                `${BASE_URL}Ultimate_Baked_Beans.pdf`
            }
            className = "btn-comman mb-3" > HOW IT WORKS < /a> <
            Link to = "/leader-board"
            className = "btn-comman" >
            3 Day Contest / Top Users <
            Tooltip title = "Reward the top users: every 3 day, the top 4 users by deposit will receive a 1% share of the total deposits"
            className = "mx-1" >
            <
            HelpOutlineRoundedIcon sx = {
                {
                    color: "#fff"
                }
            }
            fontSize = "small" / >
            <
            /Tooltip> <
            /Link> <
            /div> <
            Deposit / > { /* <GameHistory /> */ } <
            div className = "grid-containers mb-5" >
            <
            a href = {
                `${EXPLORE_URL}/address/${CONTRACT_ADDRESS}`
            }
            className = "me-2"
            target = "__blank" > { /* <a href={`#sec`} className="me-2" target="_blank" rel="noreferrer"> */ } <
            img src = {
                require("../Assets/img/ether.png")
            }
            alt = "ether"
            width = "48"
            height = "48" /
            >
            <
            /a> <
            a href = "https://t.me/ultimatebakedbeans"
            className = "me-2"
            target = "_blank"
            rel = "noreferrer" >
            <
            img src = {
                require("../Assets/img/telegram.png")
            }
            alt = "telegram"
            width = "48"
            height = "48" /
            >
            <
            /a> <
            a href = "https://t.me/UltimateBakedBeansChat"
            className = "me-2"
            target = "_blank"
            rel = "noreferrer" >
            <
            img src = {
                require("../Assets/img/telegram.png")
            }
            alt = "telegram"
            width = "48"
            height = "48" /
            >
            <
            /a> <
            a href = "https://x.com/CHToken2023"
            className = "me-2"
            target = "_blank"
            rel = "noreferrer" >
            <
            img src = {
                require("../Assets/img/twitter.png")
            }
            alt = "telegram"
            width = "48"
            height = "48" /
            >
            <
            /a> <
            /div> <
            /div> {
                /* <NotificationModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /> */
            } <
            />
        )
    }