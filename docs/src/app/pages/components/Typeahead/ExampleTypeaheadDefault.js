import React from 'react'
import Typeahead from 'react-conventions/lib/Typeahead/Typeahead'
import options from './CountryList'

const ExampleTypeaheadDefault = () => (
  <Typeahead
    options={options}
    valueProp='countryName'
    displayProp='countryName'
    placeholder='Start typing' />
)

export default ExampleTypeaheadDefault
