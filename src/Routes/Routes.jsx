import { Routes,Route } from "react-router-dom";
import { ProductComponent } from "../Components/ProductComponent";
import { ProductDetail } from "../Components/ProductDetail";
import { ProductListing } from "../Components/ProductListing";


export const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product" element={<ProductComponent />} />
    </Routes>
  );
}