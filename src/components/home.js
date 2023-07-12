import React from "react";
// import homeback from "./photo/home back.webp";
import NavigationBar from "./nav";
import "../css/home.css";
export default function Home(){
    return(
         <div className="home">
            <div className="navdiv">
            <NavigationBar />
            </div>
            <div className="container">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <h1 className="text1">"Two souls, one journey. Find your perfect match on our matrimonial website."</h1>
                <p className="text2"></p>
            </div>
            </div>
         </div>
    );
}