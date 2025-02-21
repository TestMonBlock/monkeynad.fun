import "./App.css";
import {
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Faqs from "./pages/Faqs";

function App() {
    return ( <
        >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / >
        }
        /> <
        Route exact path = "/leader-board"
        element = { < LeaderBoard / >
        }
        /> <
        Route exact path = "/faqs"
        element = { < Faqs / >
        }
        /> <
        /Routes> <
        />
    );
}

export default App;