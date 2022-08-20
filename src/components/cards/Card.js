import {React} from "react";


function Card({title, image, link}){
    return(<div className="card">
        <div className="cimg">
            <img src={image}/>
        </div>
        <h1>{title}</h1>
        <a rel="noreferrer" href={link} target="_Blank">Visit now!</a>
        
    </div>)
}

export default Card