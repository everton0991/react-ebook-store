import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

/**
 * Component styles.
 */
const styles = ({
  bold: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
})

const Number = ({ ...props }) => {
  const { classes } = props
  const fractionsRange = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }

  return (
    <div>
      <Typography
        className={classes.bold}
        variant='body1'>
          {`R$ ${props.value.toLocaleString('pt-BR', fractionsRange)}`}
        </Typography>
    </div>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Number)