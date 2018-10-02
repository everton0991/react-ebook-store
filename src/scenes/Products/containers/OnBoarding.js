import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormValidator from '../../../helpers/validations/FormValidator'
import { rules } from '../Rules'
import { 
  setUsersData, 
  fetchAddressByZipcode 
} from '../../../services/Users/Actions'
import { purchaseItems } from '../../../services/Cart/Actions'
import Collapse from '@material-ui/core/Collapse'
import PersonalData from '../components/blocks/PersonalData'
import BillingAddress from '../components/blocks/BillingAddress'
import Payment from '../components/blocks/Payment'
import Title from '../components/blocks/Title'
import Block from '../../../components/Block';

/**
 * Here we are mapping our states to this component props.
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => {
  return {
    items: state.cart.items,
    user: state.users.data
  }
}

/**
 * Here we are mapping our actions to the props.
 * 
 * @param {Object} state 
 */
const mapDispatchToProps = {
  onInputChange: setUsersData,
  onInputZipcode: fetchAddressByZipcode,
  onSubmitPayment: purchaseItems
}

class OnBoarding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validation: null
    }

    this.validator = new FormValidator(rules)
  }

  /**
   * It was chosen to save the form state to the redux container
   * as this data is shared between multiples components
   * and could be used for other features later on 
   * when the application grows.
   */
  handleChange = field => event => {
    const { onInputChange, onInputZipcode, user } = this.props
    const { value } = event.target
    const validation = this.validator.validate(user)

    /**
     * Set the data in the user reducer.
     */
    onInputChange({ field, value })

    /**
     * Try to fetch the rest of the address by the provided zipcode.
     */
    if (field === 'zipcode' && value.length >= 8 && !validation.zipcode.isInvalid) {
      onInputZipcode({ zipcode: value })
    }
  }

  /**
   * Handle the payment method selection. If the user selects
   * credit card we show the form for the card info to be filled.
   * If they rather pay with boleto, we do just that :).
   */
  handlePaymentSelection = value =>  event => {
    const { onInputChange } = this.props

    onInputChange({ field: 'paymentMethod', value })
  }

  /**
   * Handle the purchase and show the end screen 
   * with a message describing the payment method.
   */
  handlePurchase = () => {
    const { onSubmitPayment, user } = this.props

    onSubmitPayment({ paymentMethod: user.paymentMethod })
  }
  
  render() {
    const { items, user } = this.props
    const validation = this.validator.validate(user)

    return (
      <div>
        <Block>
          <Title number={1} text='Personal Data' />
          <Collapse 
            in={ 
              (items.length) 
                ? true 
                : false 
            }> 
            <PersonalData 
              formData={user}
              handleChange={this.handleChange.bind(this)} 
              validations={validation} />
          </Collapse>
        </Block>
        <Block>
          <Title number={2} text='Billing Address' />
          <Collapse 
            in={
              (items.length && 
              !validation.name.isInvalid && 
              !validation.email.isInvalid && 
              !validation.cpf.isInvalid)
                ? true
                : false
            }>
            <BillingAddress 
              formData={user}
              selectedState={user.state}
              handleChange={this.handleChange.bind(this)}
              validations={validation} />
          </Collapse>
        </Block>
        <Block>
          <Title number={3} text='Payment' />
          <Collapse 
            in={
              (items.length &&
              !validation.zipcode.isInvalid && 
              !validation.state.isInvalid && 
              !validation.city.isInvalid && 
              !validation.address.isInvalid)
                ? true
                : false
            }>
            <Payment 
              formData={user}
              openColapse={(user.paymentMethod === 'creditCard') ? true : false }
              handleClick={this.handlePaymentSelection.bind(this)}
              handleChange={this.handleChange.bind(this)} 
              handleSubmit={this.handlePurchase.bind(this)} 
              validations={validation} />
          </Collapse>
        </Block>
      </div>
    )
  }
}

/**
 * Exporting the component with styles.
 */
export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding)