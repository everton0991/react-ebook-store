import * as types from './Types'

/**
 * Set the users info (Personal, Billing address and Payment).
 * 
 * @param {String} name 
 * @param {Any} value 
 */
export const setUsersData = ({ field, value }) => (dispatch) => {
  /**
   * dispatch the user data to the reducer.
   */
  dispatch({ 
    type: types.SET_USER_DATA,
    field,
    value
  }) 
}

/**
 * Fetch the full address based on teh zipcode.
 * 
 * @param {Integer} zipcode 
 */
export const fetchAddressByZipcode = ({ zipcode }) => (dispatch) => {
  /**
   * Fetch address using https://viacep.com.br/ API.
   */
  fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
    .then(response => response.json())
    .then(fulladdress => {
      /**
       * Dispatch the action ewith a object containing 
       * the address get with the zipcode.
       */
      dispatch({ 
        type: types.SET_ADDRESS,
        uf: fulladdress.uf,
        city: fulladdress.localidade,
        address: fulladdress.logradouro
      }) 
    })
    .catch(error => console.log(error))
}
