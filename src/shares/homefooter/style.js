
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  footerNavSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerNavItem: {
    margin: normalize(5)
  },
  link: {
    color: '#ffffff'
  }
})


export default styles