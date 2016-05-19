import React from 'react'
import Input from 'react-conventions/lib/Input'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

class ExampleInputDefault extends React.Component {
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
        <Input label='Disabled input' value='' disabled={this.state.disabled} />
      </div>
    )
  }
}

export default ExampleInputDefault
