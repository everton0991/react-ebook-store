import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

/**
 * Component styles.
 */
const styles = ({
  header: {
    marginTop: '50px'
  },
  headline: {
    fontSize: '16px',
    fontWeight: '900'
  }
})

const Header = ({ ...props }) => {
  const { classes } = props

  return (
    <header className={classes.header}>
      <Typography
        className={classes.headline}
        paragraph={true}
        variant='headline'>E-Book Store</Typography>
    </header>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Header)