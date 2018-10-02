import React from 'react'
import { withStyles } from '@material-ui/core/styles'

/**
 * Component styles.
 */
const styles = ({
  block: {
    background: '#f7f7f7',
    fontSize: '14px',
    padding: '40px 60px',
    marginBottom: '40px',
    textAlign: 'center'
  }
})

const Block = ({ ...props }) => {
  const { classes } = props

  return (
    <div className={classes.block}>
      {props.children}
    </div>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Block)