import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

import "./ActivityPage.css";

export default function ActivityPage( { setAppState, appState } ){

    return (
        <>
        <Navbar appState={appState} setAppState={setAppState}/>
        {appState.isAuthenticated ? null : <p  className="nav-auth">Log in to see your data.</p>}
        </>
    )
}