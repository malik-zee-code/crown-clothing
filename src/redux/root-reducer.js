import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import dirctoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local Storage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: dirctoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
