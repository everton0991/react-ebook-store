import React from 'react'
import { Grid } from '@material-ui/core'
import Text from './fields/Text'
import Validation from '../../../../components/Validation'

const PersionalData = ({ ...props }) => {
  return (
    <Grid 
      container 
      style={{ marginTop: '30px' }}
      spacing={24}>
      <Grid item xs={12}>
        <Text 
          name='Name' 
          handleChange={props.handleChange('name')} />
          <Validation>
            {props.validations && props.validations.name.message}
          </Validation>
      </Grid>
      <Grid item xs={6}>
        <Text 
          name='E-mail'
          handleChange={props.handleChange('email')} />
          <Validation>
            {props.validations && props.validations.email.message}
          </Validation>
      </Grid>
      <Grid item xs={6}>
        <Text 
          name='CPF' 
          handleChange={props.handleChange('cpf')} />
          <Validation>
            {props.validations && props.validations.cpf.message}
          </Validation>
      </Grid>
    </Grid>
  )
}

/**
 * Exporting the component with styles.
 */
export default PersionalData