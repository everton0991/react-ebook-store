import { combineReducers } from 'redux'

/**
 * Export all the combined reducers.
 */
import { products } from '../services/Products/Reducer'
import { users } from '../services/Users/Reducer'
import { cart } from '../services/Cart/Reducer'

/**
 * Exporting all the combined reducers from the services.
 */
export default combineReducers({
  products,
  users,
  cart
})