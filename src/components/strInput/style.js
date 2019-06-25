
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
    padding: normalize(10),
    paddingBottom: normalize(5),
    paddingTop: normalize(5),
    borderRadius: normalize(3),
    backgroundColor: '#ffffff',
    color: '#000000',
    margin: normalize(10)
  }
})


export default styles