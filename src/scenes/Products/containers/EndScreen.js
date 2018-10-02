import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Block from '../../../components/Block';
import Typography from '@material-ui/core/Typography'

/**
 * Component styles.
 */
const styles = ({
  headline: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '60px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  check: {
    borderRadius: '100px',
    height: '35px',
    width: '35px',
    background: '#d8d8d8',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginRight: '10px',
    lineHeight: '35px',
    fontSize: '20px'
  },
  bottom: { marginBottom: '60px' }
})

/**
 * Here we are mapping our states to this component props.
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => {
  return {
    purchase: state.cart.purchase,
    user: state.users.data
  }
}

class EndScreen extends Component {
  render() {
    const { classes, purchase, user } = this.props

    /**
     * Set the default message for the Boleto type.
     */
    let email = user.email
    let message = `The boleto was created with success and sent to email ${email}`

    /**
     * If it paid with credit card.
     */
    if (purchase.payWith === 'creditCard') {
      let card = user.cardNumber
      message = `The payment using the credit card ${card} was made successfully`
    }

    return (
      <Block>
        <Typography
          className={classes.headline}
          paragraph={false}
          variant='headline'>
          <span className={classes.check}>&#10003;</span>
          Purchase realized with success!
          </Typography>
        <Typography
          className={classes.bottom}
          paragraph={false}
          variant='body1'>
          {message}
          </Typography>
      </Block>
    )
  }
}

/**
 * Exporting the component with styles.
 */
export default withStyles(styles)(
  connect(mapStateToProps)(EndScreen)
)