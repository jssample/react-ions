import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const options = [
  {id: '0', display: 'test really long option'},
  {id: '1', display: 'test really really long option'},
  {id: '2', display: 'test really really really long option'}
]

class ExampleSelectFieldSelected extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    selected: ['1', '2'],
    status: 'Chosen options are: 1, 2'
  }

  updateSelected = (index) => {
    this.setState({ selected: [index], status: 'Chosen options are: ' + index })
  }

  changeCallback = (event) => {
    this.setState({selected: event.target.value, status: 'The callback was triggered and the chosen options are: ' + event.target.value.join(',') })
  }

  render () {
    return(
      <div>
        <div className={style.update}>
          <Button onClick={this.updateSelected.bind(this, '0')}>Select 1st item</Button>
        </div>
        <SelectField
          options={options}
          valueProp='id'
          displayProp='display'
          value={this.state.selected}
          changeCallback={this.changeCallback}
          optClass={style['update-select']}
          multi={true}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldSelected