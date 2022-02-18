import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
export default function Index({children}){
    return(
        <>
        <Header />
         {children}
        <Footer />
        </>
    )
}