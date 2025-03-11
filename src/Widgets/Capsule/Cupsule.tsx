import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import React from "react";

export function Capsule(){
    return(
        <>
            <Header/>
                <Outlet />
            <Footer/>
        </>
    )
}