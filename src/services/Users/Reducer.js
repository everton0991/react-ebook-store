import { combineReducers } from 'redux'
import * as types from './Types'

/**
 * Personal data initial state.
 */
const initialData = {
  name: '',
  email: '',
  cpf: '',
  zipcode: '',
  state: '',
  city: '',
  address: '',
  paymentMethod: '',
  cardHolder: '',
  cardNumber: '',
  dueDate: '',
  cvv: ''
}

/**
 * This is the user`s data state.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const data = (state = initialData, action) => {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {...state, [action.field]: action.value }
    case types.SET_ADDRESS:
      return {
        ...state, 
        state: action.uf,
        city: action.city,
        address: action.address 
      }
    default:
      return state
  }
}

/**
 * Exporting the reducer for the products service.
 */
export const users = combineReducers({
  data
})