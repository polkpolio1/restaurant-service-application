import { combineReducers } from "redux"

import preloader from "./preloader"
import categories from "./categories"
import dishes from "./dishes"
import dish from "./dish"
import cart from "./cart"

export default combineReducers({
  preloader,
  categories,
  dishes,
  dish,
  cart
})
