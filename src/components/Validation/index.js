import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

/**
 * Component styles.
 */
const styles = ({
  text: {
    fontSize: '12px',
    color: 'red',
    textAlign: 'left'
  }
})

const Validation = ({ ...props }) => {
  const { classes } = props

  return (
    <div>
      <Typography
        className={classes.text}
        variant='body1'>
        {props.children}
      </Typography>
    </div>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Validation)