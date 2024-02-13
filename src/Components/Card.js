import "./Card.css";
import { useState } from "react";

function Card(props) {
    const [readmore,setreadmore]=useState(false);
    const description= (readmore ? props.info:`${props.info.substr(0,150)}....`);
   
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={props.image} className="card-image"></img>
            <div className="body">
                <h4>{props.name}</h4>
                <h6 className="price">${props.price}</h6>
                <p className="cardtext">{description}
                <span onClick={readmoreHandler} className="show">
                    {readmore? 'Show less' : 'Read more'}
                    </span>
                    </p>
                <button  onClick={()=>props.remove(props.id)} ClassName="btn btn-primary">Not intrested</button>
            </div>

        </div>
    )
}
export default Card;