import { combineReducers } from 'redux'
import * as types from './Types'
import insights from '../../assets/images/insights.png'
import aliexpress from '../../assets/images/aliexpress.png'
import clothes from '../../assets/images/clothes.png'

/**
 * This is a hard coded list of products as we don`t have yet
 * an Api to bring it for us.
 */
const initialBooks = [
  {
    "id": 1,
    "name": "insights",
    "thumbnail": insights,
    "description": "The best ecommerce overview in Latin America",
    "price": 89.90
  },
  {
    "id": 2,
    "name": "Aliexpress",
    "thumbnail": aliexpress,
    "description": "Pratical guide for to do excellent purchases in Aliexpress ",
    "price": 89.90
  },
  {
    "id": 3,
    "name": "Clothes sizes",
    "thumbnail": clothes,
    "description": "Complete guide about clothes sizes from China",
    "price": 89.90
  },
]

/**
 * This is our books state.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const books = (state = initialBooks, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return action.payload
    default:
    return state
  }
}

/**
 * Exporting the reducer for the products service.
 */
export const products = combineReducers({
  books
})