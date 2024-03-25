import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import App from "./App"
import ReactGA from "react-ga4";
import "./fonts/Font.css";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
if (gaTrackingId) {
    ReactGA.initialize(gaTrackingId, {debug: true});
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <RecoilRoot>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </RecoilRoot>
)
