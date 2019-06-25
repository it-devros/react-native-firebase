import React from 'react'
import {
  View,
  Image
} from 'react-native'


import styles from './style'


class TabItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const { focused, route } = this.props

    return(
      <View style={styles.container}>
        {
          route == 'Note' ?
            <Image
              source={require('../../assets/icons/blogging.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
        {
          route == 'Contact' ?
            <Image
              source={require('../../assets/icons/add-contact.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
        {
          route == 'Leadership' ?
            <Image
              source={require('../../assets/icons/leadership.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
        {
          route == 'Care' ?
            <Image
              source={require('../../assets/icons/care.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
        {
          route == 'Notification' ?
            <Image
              source={require('../../assets/icons/bell.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
        {
          route == 'More' ?
            <Image
              source={require('../../assets/icons/more.png')}
              style={focused ? [styles.iconImage, styles.active] : [styles.iconImage, styles.inactive]}
            />
          :
            null
        }
      </View>
    )

  }

}

export default TabItem