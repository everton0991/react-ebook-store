import validator from 'validator'

class FormValidator {
  /**
   * Construct our validation class with an 
   * Array of specific validations to the products 
   * fields.
   */
  constructor(validations) {
    this.validations = validations
  }

  /**
   * Validate the field state trough the validation rules
   * for the current input.
   * 
   * @param {Any} state 
   */
  validate(state) {
    /**
     * Start out assuming valid
     */
    let validation = this.valid();
    
    this.validations.forEach(rule => {
      /**
       *  if the field hasn't already been marked invalid by an earlier rule
       */
      if (!validation[rule.field].isInvalid && state[rule.field] !== undefined) {
        /**
         * Determine the field value, the method to invoke and optional args from
         * the rule definition
         */
        const field_value = state[rule.field].toString();
        const args = rule.args || [];
        const validation_method = typeof rule.method === 'string' 
          ? validator[rule.method] 
          : rule.method

        /**
         * call the validation_method with the current field value as the first
         * argument, any additional arguments, and the whole state as a final
         * argument.  If the result doesn't match the rule.validWhen property,
         * then modify the validation object for the field and set the isValid
         * field to false
         */
        if (validation_method(field_value, ...args, state) !== rule.validWhen) {
          validation[rule.field] = { 
            isInvalid: true, 
            message: rule.message, 
            value: state[rule.field]
          }
          validation.isValid = false;
        }
      }
    });

    return validation;
  }

  /**
   * Map the validation rules and return if valid or not.
   */
  valid() {
    const validation = {}

    this.validations.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator