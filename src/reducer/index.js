import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import cardReducer from "./card.reducer";
import userReducer from "./user.reducer";


const rootReducer=combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart:cardReducer,
    user:userReducer

})

export default rootReducer;