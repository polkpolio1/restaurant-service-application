import { combineReducers } from "redux"

// import dishes from "./dishesReducer"
import categories from "./categories"
import dishes from "./dishes"
import dish from "./dish"

export default combineReducers({
  categories,
  dishes,
  dish
})
