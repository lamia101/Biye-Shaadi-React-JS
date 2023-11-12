import './App.css';
import Home from "./Pages/Home";
import '../src/Assets/Css/Bprofile.css';
import '../src/Assets/Css/Login.css';
import '../src/Assets/Css/Profiles.css';
import '../src/Assets/Css/Register.css';
import '../src/Assets/Css/Style.css';
import Regi from "./Pages/Regi";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroomPage from "./Pages/GroomPage";
import AbrarPage from "./Pages/AbrarPage";
import AdnanPage from "./Pages/AdnanPage";
import JakheyPage from "./Pages/JakheyPage";
import JubaerPage from "./Pages/JubaerPage";
import HasanPage from "./Pages/HasanPage";
import TaufiqPage from "./Pages/TaufiqPage";
import TamjidPage from "./Pages/TamjidPage";
import RubayedPage from "./Pages/RubayedPage";
import TotineePage from "./Pages/TotineePage";
import BridePage from "./Pages/BridePage";
import YumnaPage from "./Pages/YumnaPage";
import SubarnaPage from "./Pages/SubarnaPage";
import AhonaPage from "./Pages/AhonaPage";
import SuraiyaPage from "./Pages/SuraiyaPage";
import LamiaPage from "./Pages/LamiaPage";
import FatimaPage from "./Pages/FatimaPage";
import ShanjidaPage from "./Pages/ShanjidaPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Regi />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/groom" element={<GroomPage />} />
                <Route path="/abrar" element={<AbrarPage />} />
                <Route path="/adnan" element={<AdnanPage />} />
                <Route path="/jaky" element={<JakheyPage />} />
                <Route path="/jubayer" element={<JubaerPage />} />
                <Route path="/hassan" element={<HasanPage />} />
                <Route path="/toufiq" element={<TaufiqPage />} />
                <Route path="/tamzid" element={<TamjidPage />} />
                <Route path="/rubayed" element={<RubayedPage />} />
                <Route path="/bride" element={<BridePage />} />
                <Route path="/totinee" element={<TotineePage />} />
                <Route path="/yumna" element={<YumnaPage />} />
                <Route path="/subarna" element={<SubarnaPage />} />
                <Route path="/ahona" element={<AhonaPage />} />
                <Route path="/suraiya" element={<SuraiyaPage />} />
                <Route path="/lamia" element={<LamiaPage />} />
                <Route path="/fatima" element={<FatimaPage />} />
                <Route path="/shanjida" element={<ShanjidaPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;