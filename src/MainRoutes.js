import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/UserLogin.js"
import HomePage from "./Pages/HomePage.js"
import IntranetNews from "./Pages/IntranetNews.js";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/" element={<UserLogin />}></Route>
            <Route path="/noticias" element={<IntranetNews />}></Route>
        </Routes>
    )
}
            
export default MainRoutes;



