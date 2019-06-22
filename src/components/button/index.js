import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      onPress,
      styleContainer,
      styleTitle,
      title,
      icon
    } = this.props

    return(
      <TouchableOpacity onPress={ onPress }>
        <View style={styleContainer}>
          {
            icon != null ?
              icon
            :
              null
          }
          <View style={styles.textContainer}>
            <Text style={styleTitle}>{ title }</Text>
          </View>
        </View>
      </TouchableOpacity>
    )

  }

}

export default Button