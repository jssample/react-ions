import React from 'react'
import Button from 'react-conventions/lib/Button'
import Textarea from 'react-conventions/lib/Textarea'
import style from './style.scss'

class ExampleTextareaDisabled extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    disabled: true
  }

  toggleDisabled = () => {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleDisabled} optClass={style.toggle}>{this.state.disabled ? 'Enable' : 'Disabled' } Field</Button>
        <Textarea value='' disabled={this.state.disabled} />
      </div>
    )
  }
}

export default ExampleTextareaDisabled
