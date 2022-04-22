import React from "react";
import {Link} from 'react-router-dom';
 
function Navdata({src,name,key}){
    return (
        <>
            <div key={key}>
                <Link to="/top-offers">
                    <img className="item-image" src={src} />
                    <div>{name}</div>
                </Link>
            </div>
        </>
    )
}

export default Navdata