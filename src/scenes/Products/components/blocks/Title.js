import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = ({
  numberToggle: {
    borderColor:  '#000000',
    borderWidth:  '2px',
    borderRadius:  '100px',
    height:  '35px',
    width:  '35px',
    background:  'transparent',
    fontFamily:  'Montserrat',
    fontWeight:  'bold',
    marginRight: '10px' 
  },
  headline: {
    fontSize: '13px',
    fontWeight: '900'
  }
})

const Title = ({ ...props }) => {
  const { classes } = props

  return (
      <Grid 
        container 
        direction="row"
        alignItems="center">
          <button className={classes.numberToggle}>
            {props.number}
          </button>
          <Typography 
            className={classes.headline}
            variant='headline'>
            {props.text}
          </Typography>
      </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Title)