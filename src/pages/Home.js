import React from "react";
import img1 from "../images/NFT.jpg"
import { Link } from "react-router-dom";

function Home(){
    return(<div className="Homepage">
        <div className="intro">
            <h2>Hello, I am!</h2>
            <h1>Mohammed Almashgari.</h1>
            <h3>😃Best developer😃</h3>
            <Link to="/portfolio"><button>Review my work</button></Link>
        </div>
        <div className="himg">
            <img className="drake" src={img1} alt = "Drake"/>
        </div>
        </div>)
}

export default Home