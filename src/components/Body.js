import Cardcontainer from "./Cardcontainer";
import Footer from "./Footer";
import { Fragment } from "react";
import React from "react";
import Carousel from "./Carousel";

const Body=()=>{
    console.log("react",React);
    return(
        <>
            <Cardcontainer/>
            <Carousel/>
        </>
            
    
    );
}

export default Body;
