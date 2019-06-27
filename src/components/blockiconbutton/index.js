import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class BlockIconButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      onPress,
      title,
      icon,
      background,
      color
    } = this.props

    return(
      <TouchableOpacity onPress={ onPress }>
        <View style={[styles.container, { backgroundColor: background }]}>
          { icon }
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: color }]}>{ title }</Text>
          </View>
        </View>
      </TouchableOpacity>
    )

  }

}

export default BlockIconButton