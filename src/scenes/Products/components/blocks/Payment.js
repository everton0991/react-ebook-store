import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Collapse } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Text from './fields/Text'
import Validation from '../../../../components/Validation'

/**
 * Component styles
 * Overwriting some button styles to make it as the
 * Zeplin layout.
 * 
 * @param {Object} theme 
 */
const styles = (theme) => ({
  container: {
    marginTop: '30px'
  },
  button: {
    marginRight: theme.spacing.unit,
    borderRadius: 0,
    textTransform: 'inherit',
    fontSize: '13px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    backgroundColor: '#ffffff',
    padding: '30px 0',
    border: '3px solid #ffffff',
    '&:hover, &.active, &:disabled': {
      border: '3px solid #ececec',
      backgroundColor: '#fafafa'
    }
  },
  buyButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 0,
    fontSize: '13px',
    fontWeight: 'bold', 
    fontFamily: 'Montserrat',
    padding: '15px 0',
    '&:hover': {
      backgroundColor: '#605d5d'
    }
  }
})

const Payment = ({ ...props }) => {
  const { classes } = props
  let activateBoleto = (props.openColapse) ? '' : 'active'
  let activateCard = (props.openColapse) ? 'active' : ''

  return (
    <Grid>
      <Grid 
        container 
        className={classes.container}
        spacing={24}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Button 
                variant='outlined' 
                onClick={props.handleClick('boleto')}
                className={`${classes.button} ${activateBoleto}`}>
                Boleto
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Button 
                variant='outlined' 
                onClick={props.handleClick('creditCard')}
                className={`${classes.button} ${activateCard}`}>
                Credit Card
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Collapse in={props.openColapse}>
          <Grid
            container
            className={classes.container}
            spacing={24}>
            <Grid item xs={12}>
              <Text 
                name='Cardholder name' 
                handleChange={props.handleChange('cardHolder')}/>
                <Validation>
                  {props.validations && props.validations.cardHolder.message}
                </Validation>
            </Grid>
            <Grid item xs={12}>
              <Text 
                name='Card number' 
                placeholder='1234 5678 9101 1121' 
                handleChange={props.handleChange('cardNumber')} />
                <Validation>
                  {props.validations && props.validations.cardNumber.message}
                </Validation>
            </Grid>
            <Grid item xs={6}>
              <Text 
                name='Due date' 
                placeholder='12/25' 
                handleChange={props.handleChange('dueDate')} />
                <Validation>
                  {props.validations && props.validations.dueDate.message}
                </Validation>
            </Grid>
            <Grid item xs={6}>
              <Text 
                name='CVV' 
                placeholder='123' 
                handleChange={props.handleChange('cvv')} />
                <Validation>
                  {props.validations && props.validations.cvv.message}
                </Validation>
            </Grid>
          </Grid>
        </Collapse>
      <Grid
        container
        className={classes.container}
        spacing={24}>
        <Grid item xs={12}>
          <Button 
            variant='contained' 
            color='default' 
            fullWidth
            onClick={props.handleSubmit}
            className={classes.buyButton}>
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

/**
 * Exporting the component with the styles.
 */
export default withStyles(styles)(Payment)