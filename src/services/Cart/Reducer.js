import { combineReducers } from 'redux'
import * as types from './Types'

/**
 * Thr amount state of our cart.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const items = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.payload]
    case types.REMOVE_ITEM:
      return [
        ...state.filter(item => {
          return item.id !== action.payload.id
        })
      ]
    default:
      return state
  }
}

/**
 * The amount state of our cart.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const amount = (state = 0, action) => {
  switch (action.type) {
    case types.INCREASE_AMOUNT:
      const increase = state + action.payload
      return increase
    case types.DECREASE_AMOUNT:
      const decrease = state - action.payload
      return decrease
    default:
      return state
  }
}

/**
 * Purchase initial state.
 */
const purchaseInitial = {
  checkout: false,
  payWith: null
}

/**
 * The purchase state when the user checkout.
 * The finished action would happen when a gateway response 
 * informs that the payment is approved.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const purchase = (state = purchaseInitial, action) => {
  switch (action.type) {
    case types.PURCHASE_CART_ITEMS:
      return {
        ...state, 
        checkout: action.checkout,
        payWith: action.payWith
      }
    case types.PURCHASE_FINISHED:
      return {
        ...state,
        checkout: false,
        payWith: null
      }
    default:
      return state
  }
}


/**
 * Exporting the reducer for the products service.
 */
export const cart = combineReducers({
  items,
  amount,
  purchase
})