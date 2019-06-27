import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  Link
} from '../../components'

import styles from './style'


class HomeFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.footerNavSection}>
        <View style={styles.footerNavItem}>
          <Link
            title={'Terms & Conditions'}
            style={styles.link}
          />
        </View>
        <View style={styles.footerNavItem}>
          <Text style={{ color: '#ffffff' }}>|</Text>
        </View>
        <View style={styles.footerNavItem}>
          <Link
            title={'Privacy Policy'}
            style={styles.link}
          /> 
        </View> 
      </View>
    )

  }

}

export default HomeFooter