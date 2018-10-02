/**
 * Defining the rules for the user form inputs.
 */
export const rules = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Name is required.'
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'That is not a valid email.'
  },
  {
    field: 'cpf',
    method: 'isEmpty',
    validWhen: false,
    message: 'CPF is not valid.'
  },
  {
    field: 'cpf',
    method: 'isInt',
    validWhen: true,
    message: 'CPF is not valid.'
  },
  {
    field: 'cpf',
    method: 'isLength',
    validWhen: true,
    args: [11, 11],
    message: 'CPF length should be 11 digits.'
  },
  {
    field: 'zipcode',
    method: 'isInt',
    validWhen: true,
    message: 'Zipcode is not valid.'
  },
  {
    field: 'zipcode',
    method: 'isLength',
    validWhen: true,
    args: [7, 8],
    message: 'Zipcode length should be 8 digits.'
  },
  {
    field: 'state',
    method: 'isEmpty',
    validWhen: false,
    message: 'State is required.'
  },
  {
    field: 'city',
    method: 'isEmpty',
    validWhen: false,
    message: 'City is required.'
  },
  {
    field: 'address',
    method: 'isEmpty',
    validWhen: false,
    message: 'Address is required.'
  },
  {
    field: 'cardHolder',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Card Holder Name is required.'
  },
  {
    field: 'cardNumber',
    method: 'isCreditCard',
    validWhen: true,
    message: 'The Card Number is not valid.'
  },
  {
    field: 'dueDate',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Due Date is required.'
  },
  {
    field: 'cvv',
    method: 'isInt',
    validWhen: true,
    message: 'The CVV is not valid.'
  }
]