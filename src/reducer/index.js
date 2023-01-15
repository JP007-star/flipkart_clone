import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";

const rootReducer=combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer

})

export default rootReducer;