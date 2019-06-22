import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      onPress,
      title,
      style
    } = this.props

    return(
      <TouchableOpacity onPress={ onPress }>
        <Text style={style}>{ title }</Text>
      </TouchableOpacity>
    )

  }

}

export default Link