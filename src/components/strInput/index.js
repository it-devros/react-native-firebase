import React from 'react'
import {
  TextInput
} from 'react-native'


import styles from './style'


class StrInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    })
  }

  handleInput(val) {
    this.setState({
      value: val
    })
  }

  render() {

    const {
      placeholder,
      width,
      type
    } = this.props

    return(
      <TextInput
        secureTextEntry={ type == 'password' ? true : false }
        style={[styles.container, { width: width }]}
        placeholder={ placeholder }
        value={this.state.value}
        onChange={(val) => this.handleInput(val)}
      />
    )

  }

}

export default StrInput