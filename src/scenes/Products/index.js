import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Main from '../../components/Main' 
import Header from '../../components/Layout/Header' 
import Footer from '../../components/Layout/Footer'
import List from './containers/List' 
import OnBoarding from './containers/OnBoarding'
import Amount from './components/Amount' 
import { Divider } from '@material-ui/core'
import EndScreen from './containers/EndScreen';

/**
 * Component styles.
 */
const styles = ({
  wrapper: {
    maxWidth: '960px',
    background: '#ffffff',
    margin: '0 auto',
    padding: '15px'
  },
  divList: {
    marginTop: '35px',
    background: '#979797'
  },
  divFooter: {
    marginTop: '60px',
    background: '#979797'
  }
})

/**
 * Here we are mapping our states to this component props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => {
  return {
    amount: state.cart.amount,
    purchase: state.cart.purchase,
  }
}

class Products extends Component {
  render() {
    const { classes, purchase, amount } = this.props

    /**
     * Set the content to my be my list of products by default.
     */
    let content = (
      <div>
        <List />
        <Divider className={classes.divList} />
        <Amount amount={amount} />
        <OnBoarding />
      </div>
    )

    /**
     * If the user purchased frinished the purchase.
     */
    if (purchase.checkout === true) {
      content = <EndScreen />
    }

    return (
      <Main>
        <div className={classes.wrapper}>
          <Header />
          {content}
          <Divider className={classes.divFooter} />
          <Footer />
        </div>
      </Main>
    )
  }
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(
  connect(mapStateToProps)(Products)
)
