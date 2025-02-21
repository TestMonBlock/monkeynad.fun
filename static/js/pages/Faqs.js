import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Link
} from 'react-router-dom';

export default function Faqs() {
    return ( <
        div className = 'container mt-5' >
        <
        div className = "row mt-5 mb-5 d-flex justify-between" >
        <
        div className = "col-2" >
        <
        Link to = "/"
        className = "btn-comman" > Back < /Link> <
        /div> <
        /div> <
        h1 className = 'text-center mb-5' > FAQs < /h1> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel1-content"
        id = "panel1-header" >
        How do I deposit ?
            <
            /AccordionSummary> <
            AccordionDetails >
            Get BNB(BNB Chain) on your decentralized wallet and connect it with dApp.Enter the BNB you want to deposit in white box and click bake.Make sure to keep some BNB in your wallet
        for
        the gas fees. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel2-content"
        id = "panel2-header" >
        What is the minimum deposit ?
        <
        /AccordionSummary> <
        AccordionDetails >
        There are no minimum deposits.However, as per the recommendation of Audit, we have used Front End to make sure that the user 's bakes give them at least 1 Bean. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel3-content"
        id = "panel3-header" >
        What is the maximum deposit ?
        <
        /AccordionSummary> <
        AccordionDetails >
        15 % of TVL at a time. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel4-content"
        id = "panel4-header" >
        What are‘ Beans’ ?
        <
        /AccordionSummary> <
        AccordionDetails >
        The BNB deposited by you get you Beans(miners) that generate your rewards. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel5-content"
        id = "panel5-header" >
        Can I get my deposited BNB back all at once ?
        <
        /AccordionSummary> <
        AccordionDetails >
        No, you cannot get your deposited BNB all at once.BNB is locked in the TVL and BNB is received through rewards. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel6-content"
        id = "panel6-header" >
        How is the value of my beans determined ?
        <
        /AccordionSummary> <
        AccordionDetails >
        The value of beans fluctuates based on TVL and inflationary rates.Beans do not have a set price. <
            /AccordionDetails> <
            /Accordion> <
            Accordion >
            <
            AccordionSummary
        expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel7-content"
        id = "panel7-header" >
        What happens when I press re - bake button ?
        <
        /AccordionSummary> <
        AccordionDetails >
        Re - baking compounds your rewards, increasing your beans over time.There is a 60 - minute cool down
        for re - baking.As per the recommendation of Audit, we have used Front End to make sure that the user 's Rebakes give them at least 1 Bean. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel8-content"
        id = "panel8-header" >
        What happens when I press eat beans ?
        <
        /AccordionSummary> <
        AccordionDetails >
        The BNB in your rewards is dispensed into your personal wallet minus fees.Ensure that your rewards accumulated will outweigh gas fees needed
        for the transaction. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel9-content"
        id = "panel9-header" >
        What will my daily percentage be ?
        <
        /AccordionSummary> <
        AccordionDetails >
        The daily percentage is variable UP TO 8 % based on factors like users eating habits on the platform, contract balance, market bean inflation and more. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel10-content"
        id = "panel10-header" >
        Do beans amount decrease when you eat ?
        <
        /AccordionSummary> <
        AccordionDetails >
        No, eating does not decrease users bean count.Only new deposits or re - bakes increase bean holdings. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel11-content"
        id = "panel11-header" >
        What is the team 's suggested strategy? <
        /AccordionSummary> <
        AccordionDetails >
        Re - bake six times a week and eat once a week to maintain balance and maximize rewards. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel12-content"
        id = "panel12-header" >
        What happens
        if I do not actively re - bake or eat ?
            <
            /AccordionSummary> <
            AccordionDetails >
            Keeping your beans idle will lead to inflation of bean prices, reducing your rewards over time.Active re - baking or eating is crucial to maintain value and rewards. <
            /AccordionDetails> <
            /Accordion> <
            Accordion >
            <
            AccordionSummary
        expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel13-content"
        id = "panel13-header" >
        Does Baked Beans Reloaded have any external revenue ?
        <
        /AccordionSummary> <
        AccordionDetails >
        Yes, it does.There will be a merchandise store
        for all to access and promote.Excess funds from marketing wallet will be used to deposit into the TVL(Buy - Backs).Combined will provide extra sustainability, although not being 100 % , every little bit does help. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel14-content"
        id = "panel14-header" >
        Is it too late to participate in the project ?
        <
        /AccordionSummary> <
        AccordionDetails >
        The contract is written to provide an optimal entry
        for all users, new or old.This is the reason the beans per BNB amount changes with the fluctuation of the TVL. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel15-content"
        id = "panel15-header" >
        Is this sustainable ?
        <
        /AccordionSummary> <
        AccordionDetails >
        Answered above in the external revenue question.If there is still BNB in the TVL rewards will always be distributed. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel16-content"
        id = "panel16-header" >
        What are the anti - whale mechanisms in place ?
        <
        /AccordionSummary> <
        AccordionDetails >
        Anti - whale mechanics include max deposit limit, cool down on re - baking, reduced referral rewards, and inflationary mechanics. <
        /AccordionDetails> <
        /Accordion> <
        Accordion >
        <
        AccordionSummary expandIcon = { < ExpandMoreIcon / >
        }
        aria - controls = "panel17-content"
        id = "panel17-header" >
        How do I know Baked Beans Reloaded is safe ?
            <
            /AccordionSummary> <
            AccordionDetails >
            The contract was launched as an immutable contract, meaning that no changes can be made by the dev or team.An audit has already been provided within the first week of launch.The team is available 24 / 7 and, in most languages, to answer any questions regarding more information
        if
        needed.Feel free to reach out at any time. <
        /AccordionDetails> <
        /Accordion> <
        /div>
    );
}