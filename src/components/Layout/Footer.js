import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

/**
 * Component styles.
 */
const styles = ({
  header: {
    marginTop: '50px'
  },
  headline: {
    fontSize: '13px',
    fontWeight: '900'
  },
  powered: {
    fontSize: '13px',
  }
})

const Footer = ({ ...props }) => {
  const { classes } = props

  return (
    <footer className={classes.header}>
      <Grid container spacing={24}>
        <Grid item xs={10}>
          <Typography
            className={classes.headline}
            variant='headline'>E-Book Store</Typography>
          <Typography
            className={classes.powered}
            variant='body2'>Powered by EBANX - Products B2B</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            paragraph={false}
            variant='body2'>Payment method icons</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Footer)