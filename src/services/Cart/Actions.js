import * as types from './Types'

/**
 * Add item to cart and increase the item price 
 * from amount to pay.
 * 
 * @param {Integer} price 
 */
export const addItem = ({ item }) => (dispatch) => {
  /**
   * Add item to the items list.
   */
  dispatch({ 
    type: types.ADD_ITEM,
    payload: item
  }) 

  /**
   * Increase the total amount with this item price.
   */
  dispatch({ 
    type: types.INCREASE_AMOUNT,
    payload: Number(item.price)
  }) 
}

/**
 * Remove item from the cart and decrease the item price
 * from the amount to pay.
 * 
 * @param {Integer} price 
 */
export const removeItem = ({ item }) => (dispatch) => {
  /**
   * Remove this item from the items list.
   */
  dispatch({
    type: types.REMOVE_ITEM,
    payload: item
  })

  /**
   * Remove this item price from the total amount.
   */
  dispatch({
    type: types.DECREASE_AMOUNT,
    payload: Number(item.price)
  })
}

/**
 * Purchase item(s) from the ebook store`s cart.
 * 
 * @param {Integer} price 
 */
export const purchaseItems = ({ paymentMethod }) => (dispatch) => {
  /**
   * Purchase items dispatched.
   */
  dispatch({
    type: types.PURCHASE_CART_ITEMS,
    checkout: true,
    payWith: paymentMethod
  })
}