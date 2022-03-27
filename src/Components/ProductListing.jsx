import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../Redux/products/productsactions";

export const ProductListing = () => { 
    const products = useSelector(state => state.products);
    // console.log(products);
    const dispatch=useDispatch()

    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts =async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log(err.message);
        })
      dispatch(setProducts(response.data))
    }
return(
   
    <div className="ui grid conatiner">
       <h1>ProductListing</h1> 
       <ProductComponent/>
    </div>
)
}