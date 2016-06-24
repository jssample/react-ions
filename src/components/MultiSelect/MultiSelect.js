import React from 'react'
import classNames from 'classnames/bind'

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * A string to display as the placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * An array of objects which will be used as the options for the MultiSelect component.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * The values of the options to be selected.
     */
    value: React.PropTypes.array,
    /**
     * Which field in the option object will be used as the value of the MultiSelect component.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the MultiSelect component.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the MultiSelect component is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func
  }

  state = {
    isOpen: false,
    value: this.props.value || []
  }

  componentWillMount = () => {
    // Set state
    if (this.state.value instanceof Array && this.state.value.length > 0 && this.containsValidValue(this.state.value, this.props.options)) {
      this.setState({selected: this.getSelectedOptions(this.state.value), value: this.state.value})
    }
    // No value is passed in
    else {
      this.setState({selected: [], value: []})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      // Set state
      if (nextProps.value instanceof Array && (this.containsValidValue(nextProps.value, nextProps.options) || nextProps.value.length === 0)) {
        this.setState({selected: this.getSelectedOptions(nextProps.value), value: nextProps.value})
      }
      // No value is passed in
      else {
        this.setState({selected: [], value: []})
      }
    }
  }

  getIndex = (value) => {
    let optionIndex = -1
    this.props.options.map((option, index) => {
      if (option[this.props.valueProp] === value) {
        optionIndex = index
      }
    })

    return optionIndex
  }

  containsValidValue = (values, options) => {
    let isValid = false

    for (let i = 0; i < values.length; i++) {
      if (this.getIndex(values[i], options) > -1) {
        isValid = true
      }
    }

    return isValid
  }

  getSelectedOptions = (values) => {
    let selectedOptions = []
    this.props.options.map((option, index) => {
      if (values.indexOf(option.value) > -1) {
        selectedOptions.push(option)
      }
    })

    return selectedOptions
  }

  filterItems = () => {
    let options = []

    this.props.options.map((option, index) => {
      if (this.state.value.indexOf(option.value) === -1) {
        options.push(option)
      }
    })

    return options
  }

  handleChange = (event) => {
    let values = this.state.value
    values.push(event.target.value)

    this.setState({selected: this.getSelectedOptions(values), value: values}, function() {
      if (this.props.changeCallback) {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: this.state.value,
            options: this.state.selected
          }
        })
      }
    })
  }

  getElements(children) {
    let {options, value, ...props} = this.props
    props.options = this.filterItems()
    props.changeCallback = this.handleChange

    return React.Children.map(children, child => {
      let {options, value, ...childProps} = child.props

      return React.cloneElement(child, Object.assign(childProps, props))
    })
  }

  render() {
    const elements = this.getElements(this.props.children)

    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default MultiSelect