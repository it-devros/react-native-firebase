
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
    marginBottom: normalize(10),
    padding: normalize(10),
    paddingBottom: normalize(5),
    paddingTop: normalize(5),
    borderRadius: normalize(5),

    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    textAlign: 'center'
  }
})


export default styles