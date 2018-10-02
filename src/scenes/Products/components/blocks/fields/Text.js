import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'

/**
 * Component styles.
 * Overwriting the default inputs styles.
 * 
 * @param {Object} theme 
 */
const styles = (theme) => ({
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapFormLabel: {
    fontSize: 16,
    padding: '10px 0px',
    color: '#000000',
    transition: theme.transitions
      .create([
        'border-color', 'box-shadow'
      ]),
    fontFamily: '"Montserrat"',
  },
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #c5c5c5',
    fontSize: 12,
    padding: '10px 12px',
    transition: theme.transitions
      .create([
        'border-color', 'box-shadow'
      ]),
    fontFamily: '"Montserrat"',
    '&:focus': {
      borderColor: '#80bdff'
    }
  }
})

const Text = ({ ...props }) => {
  const { classes } = props

  return (
    <FormControl fullWidth>
      <InputLabel
        shrink
        htmlFor='bootstrap-input'
        className={classes.bootstrapFormLabel}>
        {props.name}
      </InputLabel>
      <InputBase
        id={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder || `Your ${props.name} here`}
        classes={{
          root: classes.bootstrapRoot,
          input: classes.bootstrapInput,
        }} />
    </FormControl>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Text)