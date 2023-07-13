import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";  
import Home from '../Components/Dashboard';
import Intelligence from "../Components/Intelligence";
import Strength from "../Components/Strength";
import Speed from "../Components/Speed";
import Durability from "../Components/Durability";
import Power from "../Components/Power";
import Combat from "../Components/Combat"
import Gender from "../Components/Gender";
import Race from "../Components/Race";
import EyeColor from "../Components/EyeColor";
import HairColor from "../Components/HairColor";
import Weight from "../Components/Weight";
import Height from "../Components/Height";

const Rutas = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/inicio"/>}/>
            <Route path="/inicio" element={<Home/>} />
            <Route path="/int" element={<Intelligence/>}/>
            <Route path="/str" element={<Strength/>}/>
            <Route path="/speed" element={<Speed/>}/>
            <Route path="/dur" element={<Durability/>}/>
            <Route path="/pow" element={<Power/>}/>
            <Route path="/comb" element={<Combat/>}/>
            <Route path="/gen" element={<Gender/>}/>
            <Route path="/race" element={<Race/>}/>
            <Route path="/eye" element={<EyeColor/>}/>
            <Route path="/hair" element={<HairColor/>}/>
            <Route path="/wei" element={<Weight/>}/>
            <Route path="/hei" element={<Height/>}/>
        </Routes>
    )

}

export default Rutas;