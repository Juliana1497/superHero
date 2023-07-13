import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from '../Components/Dashboard';
import Intelligence from "../Components/Intelligence";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/int" element={<Intelligence />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Rutas;