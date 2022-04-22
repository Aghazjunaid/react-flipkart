import React from "react";

function Product(props){

    return (
        <>
            <div className="footwear-Card-design" key={props.index}>
                <img src={props.ele.url} alt="product-image"/>
                <div className="title">{props.ele.title}</div>
                <div className="price">{props.ele.price}</div>
                <div className="category">{props.ele.category}</div>
            </div>
        </>
    )
}

export default Product