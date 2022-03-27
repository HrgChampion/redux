import React from "react";
import "./ProductComponent.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const ProductComponent = () => { 
    const products = useSelector(state => state.products.products);
    // console.log(products);
    
    // console.log(title)
if(products.length===0) return <div>Loading...</div>
const renderList=products.map((e)=>{
    const {id,title,image,price,category}=e;
        return(
            < >
            <div className="four column wide" key={id}>
            <Link to={`product/${id}`}>
                <div className="ui link cards">
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">
                            <span className="category">{category}</span>
                        </div>
                        <div className="description">
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            </>
        )
}
)

return <>{renderList}</>
}

