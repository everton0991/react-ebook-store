import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

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
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,255,255,.25)',
    },
  }
})

const Dropdown = ({ ...props }) => {
  const { classes } = props

  return (
    <FormControl fullWidth>
      <InputLabel
        shrink
        htmlFor="bootstrap-input"
        className={classes.bootstrapFormLabel}>
        {props.name}
          </InputLabel>
      <Select
        native
        value={props.value}
        onChange={props.handleChange}
        input={
          <Input
            className={classes.bootstrapFormLabel}
            id='select-multiple' />
        }>
        {props.listOfValues.map((option, index) => (
          <option value={option.key} key={index}>
            {option.value}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Dropdown)