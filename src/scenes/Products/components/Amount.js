import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Number from '../../../components/Number'

/**
 * Component styles.
 */
const styles = ({
  amount: {
    marginTop: '40px',
    marginBottom: '45px'
  },
  title: {
    fontSize: '1em',
    fontWeight: 'bold'
  }
})

const Amount = ({ ...props }) => {
  const { classes } = props

  return (
    <div className={classes.amount}>
      <Grid 
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Typography
          className={classes.title}
          variant='title'>TOTAL</Typography>
        <Number value={props.amount} />
      </Grid>
    </div>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Amount)