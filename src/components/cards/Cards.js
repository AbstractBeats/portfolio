import {React, useState} from "react";
import Card from "./Card";
import DS from "../../images/Card-img/DS.jpeg";
import DTC from  "../../images/Card-img/DTC.jpeg";
import DTS from "../../images/Card-img/DTS.jpeg";
import DHN from "../../images/Card-img/DHN.jpeg";

function Cards(){
    const [cState] = useState({
        T1:{
            title:"Scorpion",
            image:DS,
            link:"",
        },
        T2:{
            title:"DTC",
            image:DTC,
            link:"",
        },
        T3:{
            title:"DTS",
            image:DTS,
            link:"",
        },
        T4:{
            title:"Honestly Nevermind",
            image:DHN,
            link:"",
        }
    })
    return(<div>
        <Card title = {cState.T1.title} image = {cState.T1.image} link = ""/>
        <Card title = {cState.T2.title} image = {cState.T2.image} link = ""/>
        <Card title = {cState.T3.title} image = {cState.T3.image} link = ""/>
        <Card title = {cState.T4.title} image = {cState.T4.image} link = ""/>
    </div>)
}

export default Cards