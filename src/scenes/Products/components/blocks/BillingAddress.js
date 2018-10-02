import React from 'react'
import { Grid } from '@material-ui/core'
import Text from './fields/Text'
import Dropdown from './fields/Dropdown';
import { states } from '../../../../utils/locale'
import Validation from '../../../../components/Validation'

const BillingAddress = ({ ...props }) => {
  const { formData } = props
  return (
    <Grid 
      container 
      style={{ marginTop: '30px' }}
      spacing={24}>
      <Grid item xs={4}>
        <Text 
          name='Zip code' 
          value={formData.zipcode}
          handleChange={props.handleChange('zipcode')} />
          <Validation>
            {props.validations && props.validations.zipcode.message}
          </Validation>
      </Grid>
      <Grid item xs={4}>
        <Dropdown 
          name='States' 
          listOfValues={states} 
          value={formData.state}
          handleChange={props.handleChange('state')} />
          <Validation>
            {props.validations && props.validations.state.message}
          </Validation>
      </Grid>
      <Grid item xs={4}>
        <Text 
          name='City' 
          value={formData.city}
          handleChange={props.handleChange('city')} />
          <Validation>
            {props.validations && props.validations.city.message}
          </Validation>
      </Grid>
      <Grid item xs={12}>
        <Text 
          name='Address' 
          value={formData.address}
          handleChange={props.handleChange('address')} />
          <Validation>
            {props.validations && props.validations.address.message}
          </Validation>
      </Grid>
    </Grid>
  )
}

/**
 * Exporting the component with styles.
 */
export default BillingAddress