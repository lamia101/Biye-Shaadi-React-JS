import './App.css';
import Home from "./Pages/Home";
import '../src/Assets/Css/Bprofile.css';
import '../src/Assets/Css/Login.css';
import '../src/Assets/Css/Profiles.css';
import '../src/Assets/Css/Register.css';
import '../src/Assets/Css/Style.css';
import '../src/Assets/Css/list.css';
import '../src/Assets/Css/Gprofile.css';
import '../src/Assets/Css/GroProfile.css';
import Regi from "./Pages/Regi";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroomPage from "./Pages/GroomPage";
import CandidatePage from "./Pages/CandidatePage";
import BridePage from "./Pages/BridePage";
import FeedBackPage from "./Pages/FeedBackPage";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Regi />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/groom" element={<GroomPage />} />
                <Route path="/bride" element={<BridePage />} />
                <Route path="/candidate" element={<CandidatePage />} />
                <Route path="/feedback" element={<FeedBackPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;