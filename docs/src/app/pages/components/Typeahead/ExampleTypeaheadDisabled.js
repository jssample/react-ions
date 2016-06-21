import React from 'react'
import Typeahead from 'react-conventions/lib/Typeahead/Typeahead'
import options from './CountryList'

const ExampleTypeaheadDisabled = () => (
  <Typeahead
    options={options}
    valueProp='countryName'
    displayProp='countryName'
    value={null}
    placeholder='You may not type here'
    disabled={true} />
)

export default ExampleTypeaheadDisabled
