import React from "react";


function Navdata({src,name,key}){
    return (
        <>
            <div key={key}>
                <a href="/">
                    <img className="item-image" src={src} />
                    <div>{name}</div>
                </a>
            </div>
        </>
    )
}

export default Navdata