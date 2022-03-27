import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './products/productsreducer';
import { createStore }  from 'redux';
const rootReducer=combineReducers({
    products:productReducer,
    selectedProducts:selectedProductReducer

});
export const store=createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
