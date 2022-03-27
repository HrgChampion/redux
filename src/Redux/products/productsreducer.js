import { SET_PRODUCTS,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "./productsactions";

const initialState = {

    products: [] ,
    

}

export const productReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
}
export const selectedProductReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return {...state, selectedProducts:payload};
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}