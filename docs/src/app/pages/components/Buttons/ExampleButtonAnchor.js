import React from 'react'
import ButtonAnchor from 'react-conventions/lib/Button/ButtonAnchor'
import Icon from 'react-conventions/lib/Icon'

const ExampleButtonAnchor = () => (
  <div>
    <ButtonAnchor path='http://www.google.com' optClass='success'>External</ButtonAnchor>
    <ButtonAnchor path='http://www.google.com' target='_blank'>
      <span>External (new window)</span>
      <Icon name='icon-power-1' height='14' width='14'></Icon>
    </ButtonAnchor>
    <ButtonAnchor path='/components/progress-bar' internal={true} optClass='plain'>Internal</ButtonAnchor>
  </div>
)

export default ExampleButtonAnchor
