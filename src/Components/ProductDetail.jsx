import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct,removeSelectedProduct } from "../Redux/products/productsactions";

export const ProductDetail = () => { 
    const {id}=useParams();
    const dispatch=useDispatch();
    const product=useSelector(state=>state.selectedProducts.selectedProducts);
    console.log(product);
    
    useEffect(()=>{
        
        fetchProductDetail();

        // return()=>{
        //     dispatch(removeSelectedProduct())
        // }
    },[])

    const fetchProductDetail=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
            console.log("err",err.message);
            
        })
        // if(response.data==null) return
        console.log(response.data,1)
        dispatch(selectedProduct(response.data))

    }
 
return (
    <div className="ui grid conatiner" key={id}>
   <h1>Detail of {id}</h1>
    <img src={product.image} alt="img"/>
    <h1>{product.title}</h1>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <button>Add Cart</button>
    
    
      
    </div>
)
}