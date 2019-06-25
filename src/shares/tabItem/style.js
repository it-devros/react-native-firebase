
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {

  },
  iconImage: {
    width: normalize(40),
    height: normalize(40)
  },
  active: {
    opacity: 0.5
  },
  inactive: {
    opacity: 1
  }
})


export default styles