import React from "react";


function Navdata({src,name}){
    return (
        <>
            <div>
                <a href="/top-offers.html">
                    <img className="item-image" src={src} />
                    <div>{name}</div>
                </a>
            </div>
        </>
    )
}

export default Navdata